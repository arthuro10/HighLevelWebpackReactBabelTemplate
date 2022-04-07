const path = require('path');
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: {
        main: path.resolve(__dirname, './src/app.js')
    },
    output: {
        path: path.resolve(__dirname,'./dist'),
        filename: "[name].[contenthash].js",
        assetModuleFilename: '[name][ext]',
        clean: true
    },
    devtool: 'inline-source-map',
    devServer: {
        static: path.resolve(__dirname,'dist'),
        port: 5000,
        open: true,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ]
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(ico|jpg|jpeg|png|gif|eot|otf|webpg|svg|ttf|woff|woff2)(\?.*)$/,
                type: 'asset/ressource',
            },
            {
                test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 8192
                        }
                    }
                ],
            },
            {
                test: /\.html$/,
                use: [
                    {
                        loader: 'html-loader'
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Templates',
            filename: 'index.html',
            template: path.resolve(__dirname, './dev/temp.html')
        }),
        new MiniCssExtractPlugin({
            filename: '[name.css]',
            chunkFilename: '[id].css'
        }),
        new webpack.HotModuleReplacementPlugin()
    ],


}

/** Webpack 5 */

/**
 * - Definieren des modes: Entweder in Production oder Development
 * - Der Entry Point: Welche File ist quasi der Anfang
 * - Über diesen Punkt geht rekurisv die Abhängigkeiten durch
 * - output: Hier werden dann die gesammelten Dateien zusammengeführt. 
 * - devtool: fürs Debugging
 * - devServer: Für den Server und dessen Optionen
 * - Module: Die Regelungen, da anfangs nur JS akzeptiert wird. 
 * - Sprich man benötigt Loader, die sowas wie CSS oder JSX laden können
 * - plugins: für weitere Funktionalität.
 * - https://www.valentinog.com/blog/webpack/
 */