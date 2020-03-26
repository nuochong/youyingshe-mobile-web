const { override, fixBabelImports } = require('customize-cra');
const path = require('path');
const paths = require('react-scripts/config/paths');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: 'css'
  })
);
paths.appBuild = path.join(path.dirname(paths.appBuild), 'docs'); // 修改打包目录
