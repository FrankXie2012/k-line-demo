module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/essential', '@vue/prettier'], //需要dev依赖里安装eslint-config-prettier
  rules: {
    // 'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // 'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    //下面是核心设置，会覆盖vscode关于prettier的设置
    'prettier/prettier': [
      'error',
      {
        semi: false,
        singleQuote: true,
        endOfLine: 'auto'
      }
    ],
    'vue/no-parsing-error': [2, {'x-invalid-end-tag': false}]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
