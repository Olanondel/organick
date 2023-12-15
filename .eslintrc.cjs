module.exports = {
  root: true,
  extends: [
    '@nuxt/eslint-config',
    '@vue/eslint-config-prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'no-undef': 'off',
    'vue/no-v-html': 'off',
  },
};
