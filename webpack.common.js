const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const copyWebpackPlugin = require('copy-webpack-plugin');

const extractSass = new ExtractTextPlugin({
    filename: "css/[name].bundle.css"
});

module.exports = {
    entry: {
        app: './src/js/pacman.js'
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: extractSass.extract({
                use: [{
                    loader: "css-loader",
                    options: {
                        sourceMap: true
                    }
                }, {
                    loader: "sass-loader",
                    options: {
                        sourceMap: true
                    }
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }],
        loaders: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 8000, // Convert images < 8kb to base64 strings
                        name: 'imgs/[hash]-[name].[ext]'
                    }
                }]
            }
        ]
    },
    plugins: [
        extractSass,
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'Pixi Game',
            template: 'src/index.html',
            inject: 'body'
        }),
        new copyWebpackPlugin([
            { from: path.resolve(__dirname, "src/imgs"), to: 'imgs' }
        ])
    ],
    output: {
        filename: 'js/[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    }
};