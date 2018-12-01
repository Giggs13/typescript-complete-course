const path = require('path');

module.exports = {
    mode: 'development',
    entry: './9-using-js-libraries/app.ts',
    output: {
        path: path.resolve(__dirname, './9-using-js-libraries/dist'),
        filename: 'bundle.js'
    },
    devtool:"source-map",
    resolve: {
        extensions: ["*",".ts",".tsx",".js"]
    },
    module:{
        rules: [
            {test:/\.tsx?$/, loader:"ts-loader"}
        ]
    }
};