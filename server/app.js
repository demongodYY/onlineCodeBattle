process.env.BABEL_ENV = 'development';
process.env.NODE_ENV = 'development';

const path = require('path');
const webpack = require('webpack');
const middleware = require('webpack-dev-middleware');
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

// const devMiddleWare = middleware(compiler, {
//     publicPath: webpackConfig.output.publicPath,
// })

// app.use(devMiddleWare);
// app.use(require('webpack-hot-middleware')(compiler));
console.log('------', path.join(compiler.outputPath));
app.use(express.static('web/build'));
app.get("*", (req, res) => {
    // const index = devMiddleWare.fileSystem.readFileSync(path.join(compiler.outputPath, 'index.html'));
    // const index = path.resolve(compiler.outputPath, 'index.html');
    // res.render(index);
    res.sendFile(path.join(compiler.outputPath + '/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));