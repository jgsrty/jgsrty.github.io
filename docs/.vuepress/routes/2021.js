const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        title: '2021二月(February)',
        collapsable: false,
        children: genSidebarConfig('english/2021/February', false)
    },
    {
        title: '2021一月(January)',
        collapsable: true,
        children: genSidebarConfig('english/2021/January', false)
    },
]
