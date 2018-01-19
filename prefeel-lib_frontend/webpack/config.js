const webpack = require('webpack');
const path = require('path');

const ExtractTextPlugin = require('extract-text-webpack-plugin');

const paths = {
  SRC: path.join(__dirname, '../src'),
  BUILD: path.join(__dirname, '../build'),
  STATIC: path.join(__dirname, '../src/static/'),
  FONT: path.join(__dirname, '../src/static/font/'),
  IMG: path.join(__dirname, '../src/static/img'),
  SVG: path.join(__dirname, '../src/static/svg'),
};

const outputFiles = require('./output-files').outputFiles;

const NODE_ENV = process.env.NODE_ENV || 'development';
const IS_DEVELOPMENT = NODE_ENV === 'development';
const IS_PRODUCTION = NODE_ENV === 'production';

// -------
// PLUGINS
// -------

// Shared plugins
const plugins = [
  // Extracts CSS to a file
  new ExtractTextPlugin(outputFiles.css),
  // Injects env variables to our app
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(NODE_ENV),
    },
  }),
];

if (IS_PRODUCTION) {
  // Shared production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        comparisons: true,
        conditionals: true,
        dead_code: true,
        drop_console: false,
        drop_debugger: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
        screw_ie8: true,
        sequences: true,
        unused: true,
        warnings: false,
      },
      output: {
        comments: false,
      },
    })
  );
} else {
  // Shared development plugins
  plugins.push(
    // Enables pretty names instead of index
    new webpack.NamedModulesPlugin()
  );
}

// -----
// RULES
// -----

// Shared rules
const rules = [
  // Babel loader
  {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: ['babel-loader'],
  },
  // SVG are imported as react components
  {
    test: /\.svg$/,
    use: [
      {
        loader: 'babel-loader',
      },
      {
        loader: 'react-svg-loader',
        options: {
          svgo: {
            plugins: [
              {
                removeTitle: true,
              },
            ],
            floatPrecision: 3,
          },
        },
      },
    ],
    include: paths.SVG,
  },
  // Images
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: paths.IMG,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: 'client/assets/[name]-[hash].[ext]',
        },
      },
    ],
  },
  // Fonts
  {
    test: /\.(eot|ttf|woff|woff2)$/,
    include: paths.FONT,
    loader: 'url-loader',
    options: {
      limit: 10240,
      name: 'fonts/[name].[ext]', // Remove hash so we can reuse in error pages
      publicPath: './', // Workaround for CSS `url()` resolving issue
    },
  },
];

if (IS_PRODUCTION) {
  rules.push(
    {
      test: /\.(css|scss)$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              minimize: true,
            },
          },
          'postcss-loader',
          'sass-loader'
        ],
      }),
    }
  );
} else {
  rules.push(
    {
      test: /\.(css|scss)$/,
      exclude: /node_modules/,
      use: [
        {
          loader: 'style-loader',
          options: { sourceMap: true },
        },
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            sourceMap: true,
          },
        },
        {
          loader: 'postcss-loader',
          options: {
            plugins: (loader) => [
              require('postcss-smart-import'),
              require('autoprefixer'),
            ]
          },
        },
        {
          loader: 'sass-loader',
        },
      ],
    }
  );
}

// -------
// RESOLVE
// -------

const resolve = {
  extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
  modules: [
    path.join(__dirname, '../node_modules'),
    paths.SRC,
    paths.STATIC,
  ],
};

// ----------
// CLI STATS
// ----------

const stats = {
  colors: true,
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
};

module.exports = {
  IS_DEVELOPMENT,
  IS_PRODUCTION,
  NODE_ENV,
  outputFiles,
  paths,
  plugins,
  resolve,
  rules,
  stats,
};