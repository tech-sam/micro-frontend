const isDevelopment = process.env.NODE_ENV !== "production";
const HtmlWebpackPlugin = require('html-webpack-plugin');


// module.exports = {
//     module: {
//         rules: [
//             {
//                 test: /\.m?js$/,
//                 exclude: /node_modules/,
//                 use: {
//                     loader: 'babel-loader',
//                     options: {
//                         presets: ["@babel/preset-env",
//                             ["@babel/preset-react", { "runtime": "automatic" }]],
//                         plugins: ['@babel/plugin-transform-runtime']

//                     }
//                 }
//             }
//         ]
//     }
// };



module.exports = {
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-react', '@babel/preset-env'],
                        plugins: ['@babel/plugin-transform-runtime'],

                    }
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './public/index.html'
        }),
    ]
};