# markdown-it-wiki-toc

[![Version](https://img.shields.io/npm/v/markdown-it-wiki-toc.svg)](https://www.npmjs.com/package/markdown-it-wiki-toc)

> Markdown-it plugin to add Wiki style Table Of Contents

## Installation

```
$ npm install --save markdown-it-wiki-toc
```

## Usage

```js
var markdownIt = require('markdown-it');

markdownIt({
    html: true,
    linkify: true,
    typographer: true,
})
    .use(require('markdown-it-wiki-toc'), {
        // ...options
    })
    .render(mdText);
```

### Results

```html
<p>
    <div id="toc" class="toc">
        <h3>Table of Contents</h3>
        <ul class="toc-level">
            <li><a href="#h-1">1.</a> Heading 1</li>
            <ul class="toc-level">
                <li><a href="#h-1.1">1.1.</a> Heading 2</li>
                <ul class="toc-level">
                    <li><a href="#h-1.1.1">1.1.1.</a> Heading 3</li>
                </ul>
                <li><a href="#h-1.2">1.2.</a> Heading 2</li>
                <ul class="toc-level">
                    <li><a href="#h-1.2.1">1.2.1.</a> Heading 3</li>
                </ul>
            </ul>
        </ul>
    </div>
</p>
<h1><a href="#h-1" id="h-1">1.</a> Heading 1</h1>
<h2><a href="#h-1.1" id="h-1.1">1.1.</a> Heading 2</h2>
<h3><a href="#h-1.1.1" id="h-1.1.1">1.1.1.</a> Heading 3</h3>
<h2><a href="#h-1.2" id="h-1.2">1.2.</a> Heading 2</h2>
<h3><a href="#h-1.2.1" id="h-1.2.1">1.2.1.</a> Heading 3</h3>
```

### Options

#### `tocRegexp` (RegExp)

default: `/@\[toc\]/im`

Regular expression to detect TOC in source.

#### `tocTitle` (string)

default: `'Table of Contents'`

Title of TOC.

#### `tocId` (string)

default: `'toc'`

HTML ID attribute of TOC wrapper.

#### `tocWrapperClass` (string)

default: `'toc'`

HTML Class attribute of TOC wrapper.

#### `tocLevelWrapperClass` (string)

default: `'toc-level'`

HTML Class attribute of level wrapper of TOC.

#### `anchorIdPrefix` (string)

default: `'h-'`

Prefix for each ID attribute of headings.

#### `reverseLink` (boolean)

default: `false`

Value of whether the link in the anchor of the heading points to TOC.

If the value is `true`, result is `<h?><a href="#toc">...</a>...</h?>`.

## Test

```
$ npm run test
```

## [LICENSE](LICENSE)