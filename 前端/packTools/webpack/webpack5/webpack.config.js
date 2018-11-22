const path = require('path');

module.exports = {
    entry: path.resolve(__dirname, './src/app.js'),
    output: {
        path: path.resolve(__dirname, './dist/'),
        filename: 'bandle.[name].js'
    },
    module: {
        rules: [
            {
                
                test:/\.js$/,//匹配的正则
                loader:'babel-loader',//处理的loader
                exclude:path.resolve(__dirname,'./node_modules/'),
                include:[
                    path.resolve(__dirname,"./src")
                ]
            
            }
        ]
    },
}