var os = require('os')
var path = require('path')

var platform = os.platform()
if (platform !== 'linux' && platform !== 'darwin' && platform !== 'win32') {
  console.error('Unsupported platform.')
  process.exit(1)
}

var arch = os.arch()
if (platform === 'darwin' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}
if (platform === 'linux' && arch !== 'x64') {
  console.error('Unsupported architecture.')
  process.exit(1)
}

var mpg123Path = path.join(
  __dirname,
  'bin',
  platform,
  arch,
  platform === 'win32' ? 'mpg123.exe' : 'mpg123'
)

exports.path = mpg123Path
