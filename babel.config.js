module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@components': './src/components',
          '@config': './src/config',
          '@hooks': './src/hooks',
          '@schemas': './src/schemas',
          '@screens': './src/screens',
          '@utils': './src/utils',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
