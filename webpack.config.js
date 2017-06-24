var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var OpenBrowserPlugin = require('open-browser-webpack-plugin');
const port = 8088;
module.exports = {
  /*
     enter:入口文件的配置;
    */
  entry: path.resolve(__dirname, "app/index.js"),
  output: {
    path: __dirname + "/build",
    filename: "bundle.js"
  },
  /*
    rules为一个数组,保存每个加载器要用到的配置(每个加载器至少要有两个选项,test和loader);
    /\.jsx?$/表示匹配js和jsx;
    可以传入字符串形式的加载器名称,以叹号分隔，比如'babel-loader!eslint-loader',默认为从右向左读,先运行右边的加载器,再往做运行!

    transform-runtime作用:避免 babel 编译的工具函数在每个模块里重复出现，减小库和工具包的体积；;
    babel-presets-es2015转换成兼容老式浏览器的代码;
   */
  module: {
    loaders: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        options: {
          plugins: ['transform-runtime'],
          presets: ['es2015']
        }
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!less'
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss'
      },
      {
        test: /\.(png|gif|jpg|jpeg|bmp)$/i,
        loader: 'url-loader?limit=5000'
      }, // 限制大小5kb
      {
        test: /\.(png|woff|woff2|svg|ttf|eot)($|\?)/i,
        loader: 'url-loader?limit=5000'
      } // 限制大小小于5k
    ]
  },

  eslint: {
    configFile: '.eslintrc' // Rules for eslint
  },

  postcss: [
    require('autoprefixer')
  ],

  plugins: [
    // html 模板插件
    new HtmlWebpackPlugin({
      template: __dirname + '/app/index.tmpl.html',
      inject: true,
    }),

    new webpack.HotModuleReplacementPlugin(), //热加载插件

    new OpenBrowserPlugin({
      url: 'http://localhost:'+port
    }),

    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse((process.env.NODE_ENV == 'dev') || 'false'))
    })
  ],

  devServer: {
    port: port,  
    proxy: {
      // 凡是 `/api` 开头的 http 请求，都会被代理到 localhost:3000 上，由 koa 提供 mock 数据。
      // koa 代码在 ./mock 目录中，启动命令为 npm run mock
      '/api': {
        target: 'http://localhost:3000',
        secure: false
      }
    },
    contentBase: "./public", //本地服务器所加载的页面所在的目录
    colors: true, //终端中输出结果为彩色
    historyApiFallback: true, //不跳转
    inline: true, //实时刷新
    hot: true // 使用热加载插件 HotModuleReplacementPlugin
  }
}