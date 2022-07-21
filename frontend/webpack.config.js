const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry: path.join(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "main.js",
        assetModuleFilename: "public/[hash][ext][query]"
    },
    target: "web",
    devServer: {
        port: 3000,
        static: ["./public"],
        open: true,
        hot: true,
        liveReload: true
    },
    resolve: {
        extensions: [ ".js", ".jsx", "json"]
    },
    module: {
        rules: [
            {   
                test: /\.?(js|jsx)$/,
                exclude: /node_module/,
                use: {
                    loader: "babel-loader"
                },
                options: {
                   presets: ["@babel/preset-env", "@babel/preset-react"] 
                }
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(__dirname, "src", "index.html")
        })
    ]
}