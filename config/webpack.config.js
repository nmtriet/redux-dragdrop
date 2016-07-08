/* eslint-disable */
const path = require('path');
const webpack = require('webpack');

var config = {

    entry: ['whatwg-fetch', './src/app.jsx'],

    output: {
        // path: path.join(__dirname, 'js'),
        path: './build/js',
        filename: 'bundle.js'
    },
    resolve: {
        root: [
            path.resolve('./src'),
        ],
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /.(js|jsx)?$/,
                loader: ['babel'],
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'react']
                }
            },

            { test: /\.css$/, loader: "style-loader!css-loader" }
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            // 'process.env.NODE_ENV': JSON.stringify('dev')
            'process.env.NODE_ENV': JSON.stringify('production')
        })
    ]
}

module.exports = config;