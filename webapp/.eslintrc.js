module.exports = {
    extends: [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    parserOptions: {
        "ecmaVersion": 2019,
        "sourceType": "module"
    },
    env: {
        node: true,
        browser: true,
        commonjs: true,
        es6: true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        "@typescript-eslint",
        "react-hooks"
    ],
    globals: {
        // 这里填入你的项目需要的全局变量
        // 这里值为 false 表示这个全局变量不允许被重新赋值，比如：
        // React: false,
        // ReactDOM: false
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect"
        }
    },
    rules: {
        // 这里填入你的项目需要的个性化配置，比如：
        //
        // // @fixable 一个缩进必须用两个空格替代
        semi: 0,
        'no-console': 'off',
        'no-dupe-else-if':'off',
        'no-duplicate-case':'off',
        'no-unused-vars': 'off',
        'max-nested-callbacks': 'off',
        'react/no-children-prop': 'off',
        'typescript/member-ordering': 'off',
        'typescript/member-delimiter-style': 'off',
        'react/jsx-indent-props': 'off',
        'react/no-did-update-set-state': 'off',
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        "no-debugger": process.env.NODE_DEV === 'production' ? 2 : 0,
        indent: [
            'off',
            2,
            {
                SwitchCase: 1,
                flatTernaryExpressions: true
            }
        ]
    }
}