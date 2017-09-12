// http://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'babel-eslint',
    parserOptions: {
        sourceType: 'module'
    },
    env: {
        browser: true,
    },
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    extends: 'standard',
    // required to lint *.vue files
    plugins: [
        'html'
    ],
    // add your custom rules here
    'rules': {
        // 禁用 console，目前console变为警告级别
        "no-console": 0,
        //强制使用一致的缩进
        "indent": [2, 4, {
            "SwitchCase": 1
        }],
        //  禁用行尾空格,允许空行使用空白符
        "no-trailing-spaces": [2, {
            "skipBlankLines": true
        }],
        // 要求构造函数首字母大写  （要求调用 new 操作符时有首字母大小的函数，允许调用首字母大写的函数时没有 new 操作符。）
        // 允许  new a.B()形式
        "new-cap": [2, {
            "newIsCap": true,
            "capIsNew": false,
            "properties": false
        }],
        "space-before-function-paren": [0, "always"],
        // allow paren-less arrow functions
        'arrow-parens': 0,
        // allow async-await
        'generator-star-spacing': 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
    }
}