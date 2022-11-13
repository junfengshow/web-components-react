import { defineConfig } from 'umi';

export default defineConfig({
  title: '组件库',
  favicon: '//www.junfengshow.com/static/favicon.png',
  outputPath: 'dist',
  hash: true,
  devServer: {
    port: 8080,
  },
  routes: [
    {
      path: '/',
      component: './index',
    },
  ],
});
