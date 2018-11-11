var path = require('path');
var webpack = require('webpack');

var isDev = true;

module.exports = {
    devtool: isDev ? 'eval-source-map' : false,
    mode: 'development',
    entry: [
        './src/index'
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve: {
        extensions: ['.js', '.jsx'],
        alias: {
            src: path.resolve(__dirname, './src'),
            pages: path.resolve(__dirname, './src/pages')
        }
    },
    devServer: {
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader'],
                include: path.join(__dirname, 'src')
            },
            {
                test: /\.css/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            sourceMap: false,
                            modules: true
                        },
                    },
                    {
                        loader: 'postcss-loader'
                    }
                ],
            }
        ]
    }
};
