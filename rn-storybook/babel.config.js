module.exports = function (api) {
  api.cache(true)
  return {
    presets: ['babel-preset-expo', '@babel/preset-env'],
    plugins: ['react-native-reanimated/plugin', 'styled-components']
  }
}
