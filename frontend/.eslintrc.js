module.exports = {
    env: {
        node: true,
        browser: true,
        es6: true,
    },
    parser: 'vue-eslint-parser',
    extends: [
        'plugin:vue/base',
        'eslint:recommended',
        'plugin:vue/vue3-recommended',
        'plugin:vue/essential',
        'plugin:prettier/recommended',
        'eslint-config-prettier',
    ],
    rules: {
        // override/add rules settings here, such as:
        // 'vue/no-unused-vars': 'error'
        'vue/no-multiple-template-root': 'off',
    },
}
