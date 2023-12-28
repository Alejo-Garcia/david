module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@schemas': './src/schemas',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
