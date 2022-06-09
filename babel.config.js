module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.ts',
          '.android.ts',
          '.ts',
          '.ios.tsx',
          '.android.tsx',
          '.tsx',
          '.jsx',
          '.js',
          '.json',
        ],
        alias: {
          '@app/assets': ['./src/assets'],
          '@app/components': ['./src/components'],
          '@app/config': ['./src/config'],
          '@app/constants': ['./src/constants'],
          '@app/core-ui': ['./src/core-ui'],
          '@app/fixtures': ['./src/fixtures'],
          '@app/helpers': ['./src/helpers'],
          '@app/hooks': ['./src/hooks'],
          '@app/navigation': ['./src/navigation'],
          '@app/store': ['./src/store'],
          '@app/screens': ['./src/screens'],
        },
      },
    ],
  ],
};
