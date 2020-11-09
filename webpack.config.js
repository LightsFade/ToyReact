module.exports = {
    entry: {
        main: './main.js'
    },
    module: {
        rules:[
            {
                test:/\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: [['@babel/plugin-transform-react-jsx',{pragma:'createElement'}]] //{指定翻译出来的名字}
                    }
                }
            }
        ]
    },
    mode: "development",
    optimization:{
        minimize:false
    }

}