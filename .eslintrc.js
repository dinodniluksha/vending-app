module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          scenes: './src/scenes',
          navigation: './src/navigation',
          components: './src/components',
          state: './src/state',
        },
      },
    },
  },
};
