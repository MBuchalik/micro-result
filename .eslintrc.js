module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },
  overrides: [
    {
      files: ['index.d.ts'],
      extends: ['eslint-config-mbuchalik'],
    },
  ],
};
