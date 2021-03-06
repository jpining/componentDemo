/*
 * @Descripttion: 
 * @version: 
 * @LastEditors: jp
 * @Date: 2022-05-19 18:37:51
 * @LastEditTime: 2022-05-19 19:00:35
 */
import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'componentDemo',
  favicon:
    'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  logo: 'https://user-images.githubusercontent.com/9554297/83762004-a0761b00-a6a9-11ea-83b4-9c8ff721d4b8.png',
  outputPath: 'docs-dist',
  mode: 'site',
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ]
  // more config: https://d.umijs.org/config
});

