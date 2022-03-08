import { defineConfig } from 'umi';

export default defineConfig({
  404: true,
  metas: [
    {
      name: 'keywords',
      content: 'nft',
    },
  ],
  // routes: [
  //   {
  //     path: '/',
  //     component: '@/layouts/index',
  //     routes: [
  //       { exact: true, path: '/', component: 'index' },
  //     ],
  //   },
  // ],
  title: 'tmpl',
  history: { type: 'browser' },
  // favicon: '/favicon.ico',
  nodeModulesTransform: {
    type: 'none',
  },
  dynamicImport: {
    loading: '@/components/Loading',
  },
  alias: {
    utils: require('path').resolve(__dirname, 'src/utils/main'),
    req: require('path').resolve(__dirname, 'src/utils/request'),
  },
  fastRefresh: {},
  dva: {
    immer: true,
    hmr: false,
  },
  // ssr: {},
  // exportStatic: {},
});
