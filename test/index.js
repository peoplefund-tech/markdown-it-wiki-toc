'use strict';

var path = require('path');
var generate = require('markdown-it-testgen');
var md = require('markdown-it')({
    html: true,
    linkify: true,
    typography: true
})
    .use(require('../'));

describe('markdown-it-wiki-toc', function () {
    generate(path.join(__dirname, 'fixtures/toc1.txt'), md);
});
