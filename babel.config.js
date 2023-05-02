module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo', 'react-native-paper/babel'],
    env: {
      production: {
        plugins: ['react-native-paper/babel'],
      },
    },
  };
};
