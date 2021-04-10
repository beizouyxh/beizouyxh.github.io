(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{377:function(t,s,a){"use strict";a.r(s);var n=a(45),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"webpack"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[t._v("#")]),t._v(" Webpack")]),t._v(" "),a("h2",{attrs:{id:"webpack-的构建流程"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-的构建流程"}},[t._v("#")]),t._v(" Webpack 的构建流程")]),t._v(" "),a("p",[t._v("Webpack 的运行流程是一个串行的过程，从启动到结束会依次执行以下流程：")]),t._v(" "),a("ol",[a("li",[t._v("初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数")]),t._v(" "),a("li",[t._v("开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有的配置的插件，执行对象的 run 方法开始执行编译")]),t._v(" "),a("li",[t._v("确定入口：根据配置中的 entry 找出所有的入口文件")]),t._v(" "),a("li",[t._v("编译模块：从入口文件出发，调用所有配置的 loader 对模块进行编译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了处理")]),t._v(" "),a("li",[t._v("完成模块编译：在经过 loader 对于模块的编译后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系")]),t._v(" "),a("li",[t._v("输出资源：根据入口和模块之间的依赖关系，组成一个个包含多个模块的 chunk，再把每个 chunk 转换成一个单独的文件加入到输出列表，这一步是可以修改输出内容的最后机会")]),t._v(" "),a("li",[t._v("输出完成：在确定好输出内容之后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统")])]),t._v(" "),a("p",[t._v("Webpack 会在特定的时间广播出特定的事件，plugin 在监听到相应的事件后会执行特定的逻辑，并且可以调用 Webpack 提供的 API 改变运行结果")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" HtmlWebpackPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'html-webpack-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" MiniCssExtractPlugin "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'mini-css-extract-plugin'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" webpack "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'webpack'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'path'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" basePath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" __dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\nmodule"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  context"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"src"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  resolve"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    extensions"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.ts'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'.tsx'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  entry"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@babel/polyfill'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//ployfill兼容性更好")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./main.tsx'")]),t._v("\n         "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  output"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" path"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePath"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'bundle.js'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  devtool"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'source-map'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  devServer"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    contentBase"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./dist'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Content base")]),t._v("\n    inline"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Enable watch and live reload")]),t._v("\n    host"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'localhost'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    port"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("8082")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    stats"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'errors-only'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  module"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    rules"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(ts|tsx)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        exclude"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("node_modules")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'awesome-typescript-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          useBabel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"babelCore"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@babel/core"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// needed for Babel v7")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("    \n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.css$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("        \n        use"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("MiniCssExtractPlugin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("loader"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"css-loader"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("\\.(png|jpg|gif|svg)$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        loader"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'file-loader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        options"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          name"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'assets/img/[name].[ext]?[hash]'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n   "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  plugins"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Generate index.html in /dist => ￼https://github.com/ampedandwired/html-webpack-plugin")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HtmlWebpackPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Name of file in ./dist/")]),t._v("\n      template"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//Name of template in ./src")]),t._v("\n      hash"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MiniCssExtractPlugin")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[name].css"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n      chunkFilename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"[id].css"')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  \n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("Entry：指定webpack开始构建的入口模块，从该模块开始构建并计算出直接或间接依赖的模块或者库")]),t._v(" "),a("p",[t._v("Output：告诉webpack如何命名输出的文件以及输出的目录")]),t._v(" "),a("p",[t._v("Loaders：由于webpack只能处理javascript，所以我们需要对一些非js文件处理成webpack能够处理的模块，比如sass文件")]),t._v(" "),a("p",[t._v("Plugins："),a("code",[t._v("Loaders")]),t._v("将各类型的文件处理成webpack能够处理的模块，"),a("code",[t._v("plugins")]),t._v("有着很强的能力。插件的范围包括，从打包优化和压缩，一直到重新定义环境中的变量。但也是最复杂的一个。比如对js文件进行压缩优化的"),a("code",[t._v("UglifyJsPlugin")]),t._v("插件")]),t._v(" "),a("p",[t._v("Chunk：coding split的产物，我们可以对一些代码打包成一个单独的chunk，比如某些公共模块，去重，更好的利用缓存。或者按需加载某些功能模块，优化加载时间。在webpack3及以前我们都利用"),a("code",[t._v("CommonsChunkPlugin")]),t._v("将一些公共代码分割成一个chunk，实现单独加载。在webpack4 中"),a("code",[t._v("CommonsChunkPlugin")]),t._v("被废弃，使用"),a("code",[t._v("SplitChunksPlugin")])]),t._v(" "),a("h2",{attrs:{id:"webpack-中常用的-loader-和-plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中常用的-loader-和-plugin"}},[t._v("#")]),t._v(" Webpack 中常用的 loader 和 plugin")]),t._v(" "),a("h3",{attrs:{id:"loader"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#loader"}},[t._v("#")]),t._v(" loader")]),t._v(" "),a("ol",[a("li",[t._v("file-loader：把文件输出到一个文件夹，在代码中通过对应的 URL 去引用输出的文件")]),t._v(" "),a("li",[t._v("url-loader：和 file-loader 类似，但是能在文件很小的情况下以 base64 的方式把文件内容注入到代码中去")]),t._v(" "),a("li",[t._v("image-loader：加载并压缩图片文件")]),t._v(" "),a("li",[t._v("babel-loader：转换 ES6+ 等 JS 新特性语法")]),t._v(" "),a("li",[t._v("css-loader：加载解析 CSS")]),t._v(" "),a("li",[t._v("style-loader：把 CSS 代码注入到 JavaScript 中，形成静态资源内联，通过 DOM 操作去加载 CSS")]),t._v(" "),a("li",[t._v("eslint-loader：通过 Eslint 检查代码")]),t._v(" "),a("li",[t._v("postcss-loader：补全前缀，兼容性，css 界的 babel")]),t._v(" "),a("li",[t._v("stylus-loader：stylus 文件编译成 css 文件")]),t._v(" "),a("li",[t._v("source-map-loader：加载额外的 Source Map，以方便断点调试")])]),t._v(" "),a("h3",{attrs:{id:"plugin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plugin"}},[t._v("#")]),t._v(" plugin")]),t._v(" "),a("ol",[a("li",[t._v("html-webpack-plugin：当使用 webpack 打包时，创建一个 html 文件，并把 Webpack 打包后的静态文件自动插入到这个 html 文件中")]),t._v(" "),a("li",[t._v("define-plugin：定义环境变量")]),t._v(" "),a("li",[t._v("mini-css-extract-plugin：抽离 CSS 单独形成一个文件，支持按需加载")]),t._v(" "),a("li",[t._v("optimize-css-assets-webpack-plugin：对 CSS 代码进行压缩，不仅压缩了代码、删掉了代码中无用的注释、还去除了冗余的 css、优化了 css 的书写顺序")]),t._v(" "),a("li",[t._v("uglifyjs-webpack-plugin：压缩 JS 文件")]),t._v(" "),a("li",[t._v("webpack-bundle-analyzer：可视化 Webpack 输出文件的体积")]),t._v(" "),a("li",[t._v("split-chunks-plugin：公共模块抽取")])]),t._v(" "),a("h3",{attrs:{id:"webpack-中-loader-和-plugin-的不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webpack-中-loader-和-plugin-的不同"}},[t._v("#")]),t._v(" Webpack 中 loader 和 plugin 的不同")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("loader\nWebpack 把所有文件视为模块，但是 Webpack 原生只能解析 JS 文件，如果想要把其他文件打包的话，就需要使用 loader，"),a("strong",[t._v("loader 使得 Webpack 拥有了加载和解析非 JS 文件的能力")])]),t._v(" "),a("p",[t._v("loader 在 module.rules 中配置，作为模块解析的规则存在")])]),t._v(" "),a("li",[a("p",[t._v("plugin\nplugin 插件可以扩展 Webpack 的能力，让 Webpack 具有更多的灵活性，plugin 可以监听 Webpack 运行的生命周期中广播出的事件，可以在合适的时机通过 Webpack 提供的 API 改变输出结果")]),t._v(" "),a("p",[t._v("通常是用于打包输出的 JS 文件的优化，资源的管理，和环境变量的注入，作用于整个构建过程")]),t._v(" "),a("p",[t._v("plugin 在 plugins 中单独配置，类型是数组，每一项是一个 plugin 的实例，参数都通过构造函数传入")])])]),t._v(" "),a("h2",{attrs:{id:"使用-webpack-优化前端性能"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-webpack-优化前端性能"}},[t._v("#")]),t._v(" 使用 Webpack 优化前端性能")]),t._v(" "),a("p",[t._v("使用 Webpack 来优化前端性能是指优化 Webpack 的输出结果，让打包的最终结果在浏览器运行更快")]),t._v(" "),a("ol",[a("li",[t._v("代码压缩：删除多余的代码、注释、简化代码的写法\nuglifyjs-webpack-plugin\noptimize-css-assets-webpack-plugin")]),t._v(" "),a("li",[t._v("利用 CDN 加速，在构建过程中将引用的静态资源路径修改为 CDN 路径.")]),t._v(" "),a("li",[t._v("treeShaking：在模块引用的时候把没有用到的代码块干掉\n原理：ES6 模块化的静态解析能力，在解析阶段就可以输出模块的依赖关系")]),t._v(" "),a("li",[t._v("Code Splitting：将代码按路由维度或者组件分块(chunk),这样做到按需加载，同时可以充分利用浏览器缓存")]),t._v(" "),a("li",[t._v("提取公共第三方库：SplitChunksPlugin 插件来进行公共模块抽取，利用浏览器缓存可以长期缓存这些无需频繁变动的公共代码")]),t._v(" "),a("li",[t._v(".Scope Hoisting：让 Webpack 打包出来的文件更小，运行更快\n又称作用域提升，打包完之后存在大量的闭包，作用域很多，内存开销大\n原理：按照引入顺序放在一个函数作用域里，适当的重命名防止冲突\n由于 Scope Hoisting 需要分析出模块之间的依赖关系，因此源码必须采用 ES6 模块化语句")]),t._v(" "),a("li",[t._v("分离两套配置：一般来说在项目开发中，区分开发和生产环境两套配置，各司其职")]),t._v(" "),a("li",[t._v("(开发优化)source-map：webpack 打包的时候改变了源码，在调试的时候非常的不方便，因为保存的行列已经对不上了，      source-map 就解决这个问题\nsource-map 会生成一个映射文件，打包后的代码和源码(书写时的代码)的一个映射文件\n出现错误的时候便于快速定位错误位置，方便调试")])])])}),[],!1,null,null,null);s.default=e.exports}}]);