const path = require("path");

module.exports = env => {
    const isRelease = env === "RELEASE";
    return {
        mode: isRelease ? "production" : "development",
        devtool: isRelease ? "source-map" : "cheap-module-source-map",
        entry: {
            index: "index.es6",
            about: "about.js"
        },
        output: {
            filename: "[name].js",
            path: path.resolve(__dirname, "dist"),
            publicPath: "/dist"
        },
        resolve: {
            extensions: [".js", ".es6"],
            modules: ["Scripts", "node_modules"]
        },
        module: {
            rules: [
                {
                    test: /\.es6$/,
                    exclude: /(node_modules)/,
                    use: {
                        loader: "babel-loader",
                        options: {
                            presets: ["env"]
                        }
                    }
                }
            ]
        }
    };
};