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
            require('postcss-css-reset')(),
            require('postcss-utils')(),
            require('postcss-calc')(),
            require('postcss-short-color')(),
            require('postcss-short-position')(),
            // require('autoprefixer')(),
            require('postcss-bem')({
              defaultNamespace: undefined, // default namespace to use, none by default
              style: 'bem', // suit or bem, suit by default,
              // separators: {
              //     descendent: '__' // overwrite any default separator for chosen style
              // },
              // shortcuts: {
              //     utility: 'util' //override at-rule name
              // }
            }),
            // require('precss')(),
            require('postcss-cssnext')(),
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
