import { extend } from 'umi-request';
import { BASE_PATH } from './main';
import toast from 'react-hot-toast';

const printErrorInfo = (error) => {
  const { code, message, status, timestamp, request = {} } = error || {};
  const { url, options } = request;
  const { method, headers, params, data } = options;
  const paramsKeys = Object.keys(params || {});
  const tempParams = paramsKeys && paramsKeys.length ? params : data;

  const errorTagStyle = [
    'color: #ff4d4f',
    'background: #fff2f0',
    'padding: 2px 6px',
    'font-size: 12px',
    'border-radius: 2px',
    'border: 1px solid #ff4d4f',
  ].join(';');

  console.log('%c接口报错信息', errorTagStyle);
  console.log(`
------------- error-start -------------
时间：${timestamp || new Date().toString()}
HTTP Status：${status || 200}
接口路径：${url}
请求类型：${method}
headers：${JSON.stringify(headers)}
参数：${JSON.stringify(tempParams || {})}
code：${code}
message：${message}
------------- error-end ---------------
  `);
};

// const codeMessage = {
//   200: '服务器成功返回请求的数据。',
//   201: '新建或修改数据成功。',
//   202: '一个请求已经进入后台排队（异步任务）。',
//   204: '删除数据成功。',
//   400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
//   401: '用户没有权限（令牌、用户名、密码错误）。',
//   403: '用户得到授权，但是访问是被禁止的。',
//   404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
//   406: '请求的格式不可得。',
//   410: '请求的资源被永久删除，且不会再得到的。',
//   422: '当创建一个对象时，发生一个验证错误。',
//   500: '服务器发生错误，请检查服务器。',
//   502: '网关错误。',
//   503: '服务不可用，服务器暂时过载或维护。',
//   504: '网关超时。',
// };

/** 异常处理程序 */
const errorHandler = (error) => {
  if (error) {
    // printErrorInfo(error);
    console.log(333, error);

    // 需要通知用户
    toast.error(error.errObj.en);

    if (error.code === '401') {
      //跳转登录页面
    }
  } else {
    // 需要通知用户
  }

  return Promise.reject(error);
};

/** 配置request请求时的默认参数 */
const request = extend({
  prefix: BASE_PATH,
  timeout: 60000,
  // errorHandler, // 默认错误处理
  credentials: 'omit', // 默认请求是否带上cookie
});

// request拦截器, 改变url 或 options.
request.interceptors.request.use((url, options) => {
  //根据项目获取对应的token
  const token = JSON.parse(localStorage.getItem('jwtsessiontoken')); //获取存储在本地的token

  const { headers = {} } = options || {};

  const tokenHeaders = {
    jwtsessiontoken: token,
    ...headers,
  };

  if (options.method?.toUpperCase() === 'GET') {
    options.params = options.data;
  } else {
    // 使用form的时候 options加上requestType:'form'
    options.requestType = options.requestType ? options.requestType : 'json';
  }

  if (token) {
    return {
      url,
      options: { ...options, headers: tokenHeaders },
    };
  }
  return {
    url,
    options: { ...options },
  };
});

request.interceptors.response.use(async (response) => {
  const data = await response.clone().json();
  //与后端约定返回结果
  // console.log(444, data)
  if (data) {
    // console.log(222, response)
    return Promise.resolve(data);
  }
  return Promise.reject(data);
});

export default request;
