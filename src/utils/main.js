//uat
export const CONTRACT_ADDRESS = '';

export const DEFAULT_CHAIN_ID = '';
export const ETHERSCAN_URL = '';

export const BASE_PATH = '';

/**
 * 计算函数
 */
export const _number = {
  //乘法函数，用来得到精确的乘法结果
  //说明：javascript的乘法结果会有误差，在两个浮点数相乘的时候会比较明显。这个函数返回较为精确的乘法结果。
  //调用：accMul(arg1,arg2)
  //返回值：arg1乘以arg2的精确结果
  multiply(arg1, arg2) {
    var m = 0,
      s1 = arg1.toString(),
      s2 = arg2.toString();
    try {
      m += s1.split('.')[1].length;
    } catch (e) {}
    try {
      m += s2.split('.')[1].length;
    } catch (e) {}
    return (
      (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) /
      Math.pow(10, m)
    );
  },
  // 计算防止精度丢失
  stringAddPoint(num, s) {
    var l = num.length; //获取字符串长度
    var res = '';
    if (l == s + 1) {
      res = num;
      res = res.slice(0, 1) + '.' + res.slice(1);
    } else if (l < s + 1) {
      var zero = '';
      while (s - l !== zero.length) {
        zero = zero + '0';
      }
      res = '0.' + zero + num;
    } else if (l >= s + 1) {
      var a = l - s;
      res = num;
      res = res.slice(0, a) + '.' + res.slice(a);
    }
    //去多余的0
    var res_ = res;
    for (var i = 0; i < res_.length; i++) {
      if (res_[res_.length - 1 - i] == '0') {
        res = res_.slice(0, res_.length - 1 - i);
      } else if (res_[res_.length - 1 - i] == '.') {
        res = res_.slice(0, res_.length - 1 - i);
        break;
      } else {
        break;
      }
    }
    return res;
  },
};
