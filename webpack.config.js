/**
 * Created by Jery on 02.08.2016.
 */
"use strict";

module.exports = {
    entry: {
        App: './App/App.js'
    },
    output: {
        path: __dirname + '/public',
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    },
    devServer: {
        contentBase: "./public",
        colors: true,
        historyApiFallback: true
    }
};
