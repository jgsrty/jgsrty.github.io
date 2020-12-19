const path = require('path')
const fs = require('fs')
module.exports = function genSidebarConfig(dir, hasSub) {
    let p = path.join(__dirname, '../../', dir)
    let files = fs.readdirSync(p)
    let subDir = hasSub
        ? dir.split('/')[1]
        : dir.split('/')[1] + '/' + dir.split('/')[2]
    files = files.map(item => {
        item = subDir
            ? subDir + '/' + path.basename(item, '.md')
            : path.basename(item, '.md')
        return item
    })
    return files
}