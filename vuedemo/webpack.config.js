/**
 * Created by zilong on 2017/7/29.
 */
var path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
         rules: [
               {
                 test: /\.css$/,
                 use: [
                  'style-loader',
                  'css-loader'
                 ]
         },
             {
             test: /\.(png|svg|jpg|gif)$/,
             use: [
               'file-loader'
             ]
       }
         ]
       }
};