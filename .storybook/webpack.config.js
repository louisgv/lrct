module.exports = ({ config }) => {
  config.module.rules.unshift({
    test: /\.stories\.(ts|tsx)?$/,
    loaders: [
      {
        loader: require.resolve('@storybook/addon-storysource/loader'),
        options: {
          parser: 'typescript',
          prettierConfig: {
            tabWidth: 4,
            printWidth: 80,
            singleQuote: true,
            trailingComma: 'es5'
          }
        }
      }
    ],
    enforce: 'pre'
  })

  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [require.resolve('babel-preset-react-app')]
        }
      },
      require.resolve('react-docgen-typescript-loader')
    ]
  })
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
