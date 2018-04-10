const path = require('path');
// const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
module.exports = (baseConfig, env, config) => {
  baseConfig.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  });
  baseConfig.module.rules.push({
    test: /\.css$/,
    exclude: /node_modules/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
        },
      },
      {
        loader: 'postcss-loader',
        options: {
          plugins: [
            require('postcss-import')(),
            require('postcss-cssnext')(),
            require('precss')(),
            require('cssnano')(),
          ],
        },
      },
    ],
  });
  // config.plugins.push(new TSDocgenPlugin()); // optional
  baseConfig.resolve.extensions.push('.ts', '.tsx');
  return baseConfig;
};
