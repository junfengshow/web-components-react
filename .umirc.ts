import { defineConfig } from 'umi';

export default defineConfig({
  title: '算法与数据结构',
  logo: '//www.junfengshow.com/static/assets/logo.png',
  favicon: '//www.junfengshow.com/static/favicon.png',
  outputPath: 'docs-dist',
  mode: 'site',
  alias: {
  },
  resolve: {
    includes: [
      'docs',
    ],
    previewLangs: ['jsx', 'tsx'],
  },
  // 默认是中文，index.md index.en-US.md必须要存在的
  locales: [['zh-CN', '中文'], ['en-US', 'English'], ['en', 'English']],
  navs: [],
  // more config: https://d.umijs.org/config
});
