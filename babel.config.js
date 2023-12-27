module.exports = {
  plugins: [
    [
      'module-resolver',
      {
        alias: {
          '@assets': './assets',
          '@screens': './src/screens',
        },
      },
    ],
  ],
  presets: ['module:@react-native/babel-preset'],
};
