let path =      require("path"),
    webpack =   require("webpack");

let APP_DIR = path.resolve(__dirname, 'src/client/components');

module.exports = {
    cache: true,
    devtool: "source-map",
    context: path.join(__dirname, "/src/client"),
    entry: {
        main: "./main",
        vendor: ["jquery", "react", "react-dom", "react-router"]
    },
    output: {
        path: path.join(__dirname, "/public/js/"),
        filename: "[name].js",
        chunkFilename: "[id].js",
        sourceMapFilename: "[name].map",
        publicPath: "./js/"
    },
    module: {
        rules: [
            // required for babel to kick in
            { test: /\.js$/, exclude: /node_modules/, use: [
                { loader: "babel-loader" }
            ]},

            // required to write "require('./style.scss')"
            { test: /\.scss$/, use: [
                { loader: "style-loader" },
                { loader: "css-loader" },
                { loader: "sass-loader" }
            ]},
            { test: /\.css$/,  use: [
                { loader: "style-loader" },
                { loader: "css-loader" }
            ]},
            { test: /\.png$/,  use: [
                { loader: "url-loader?limit=100000" }
            ]},
            { test: /\.svg$/,           use: [
                { loader: "file-loader?prefix=font/" }
            ]}
        ],

        loaders : [

            {
                test : /\.jsx?/,
                include : APP_DIR,
                loader : 'babel-loader'
            }


        ]
    },
    plugins: [
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new webpack.ProvidePlugin({
            "$":        "jquery",
            "jQuery":   "jquery"
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            filename: "vendor.js"
        })
    ]
};
