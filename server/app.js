
const path = require('path');
const webpack = require('webpack');
const webpackConfig = require('../config/webpack.config.dev');
const compiler = webpack(webpackConfig);
const express = require('express');
const app = express();

app.use(express.static(compiler.outputPath));
app.get("*", (req, res) => {
    res.sendFile(path.join(compiler.outputPath + '/index.html'));
});

app.listen(3000, () => console.log('Example app listening on port 3000!'));