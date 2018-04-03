const path = require("path");

module.exports = env => {
    const fileNameFormat = "[name]";
    const isRelease = env === "RELEASE";
    const config = {
        mode: isRelease ? "production" : "development",
        devtool: isRelease ? "source-map" : "cheap-module-source-map",
        entry: {
            index: "index.es6",
            about: "about.js",
            contact: "contact.js"
        },
        output: {
            filename: fileNameFormat + ".js",
            path: path.resolve(__dirname, "dist"),
            publicPath: "/dist"
        },
        resolve: {
            extensions: [
                ".js", ".es6"
            ],
            modules: [
                path.resolve(__dirname, "Scripts"),
                "node_modules"
            ]
        },
        module: {
            rules: [
                {
                    test: /\.es6$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"],
                            babelrc: false,
                            cacheDirectory: true
                        }
                    }
                }
            ]
        }
    };

    return config;
};