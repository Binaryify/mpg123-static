# mpg123-static

mpg123 static binaries for Mac OSX and Linux and Windows
<p>
<a href="https://www.npmjs.com/package/mpg123-static"><img src="https://img.shields.io/npm/v/mpg123-static.svg" alt="Version"></a>
<a href="https://www.npmjs.com/package/mpg123-static"><img src="https://img.shields.io/npm/l/mpg123-static.svg" alt="License"></a>
<a href="https://www.npmjs.com/package/mpg123-static"><img src="https://img.shields.io/david/dev/binaryify/mpg123-static.svg" alt="devDependencies" ></a>
<a href="https://www.npmjs.com/package/mpg123-static"><img src="https://img.shields.io/david/binaryify/mpg123-static.svg" alt="devDependencies" ></a>
<a href="https://travis-ci.org/Binaryify/mpg123-static"><img src="https://api.travis-ci.org/Binaryify/mpg123-static.svg?branch=master" /></a>
</p>

## Installation

This module is installed via npm:

``` bash
$ npm install mpg123-static
```

## Example Usage

Returns the path of a statically linked mpg123 binary on the local filesystem.

``` js
const mpg123 = require('mpg123-static')
const mpg123path=mpg123.path
console.log(mpg123path)
// // /Users/eugeneware/Dropbox/work/mpg123-static/bin/darwin/x64/mpg123
const exec = require('child_process').exec
const filename="1.mp3"
const cmdStr = `${mpg123path}  ${filename}.mp3`
exec(cmdStr, (err, stdout, stderr) => {
    if (err) {
      console.log('error:' + stderr)
    } else {
      console.log("now playing the mp3...")
    }
})

```

Currently supports Mac OS X (64-bit), Linux (64-bit) and Windows
(32 and 64-bit).

* 64 bit Mac OSX
* 64 bit Linux
* 64 bit Windows
* 32 bit Windows

## Notice
if you use OSX/Linux,you should use this command before you use this package
```
$ sudo chmod 775 ./node_modules/mpg123-static/bin/{your platfrom}/x64/mpg123
```
OSX's platfrom is 'darwin'.
linux's  platfrom is 'linux'
for example,
```
$ sudo chmod 775 ./node_modules/mpg123-static/bin/darwin/x64/mpg123
```

if you use windows,you should install git-bash or cmder,then add run.sh to your project path,and use my package like my example in you js file
```js
const mpg123 = require('mpg123-static')
const fs=require('fs')
const os = require('os')
const path = require('path')
const mpg123path=mpg123.path
const exec = require('child_process').exec
const platform = os.platform()
const arch = os.arch()

const filename="1.mp3"
const content=`#!/usr/bin/env bash
cd node_modules/mpg123-static/bin/win32/${arch}
./mpg123.exe ${filename}
`
const cmdStr="bash run.sh"
fs.writeFile('./run.sh',content)
exec(cmdStr, (err, stdout, stderr) => {
    if (err) {
      console.log('error:' + stderr)
    } else {
      console.log("now playing the mp3...")
    }
})
```