const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        title: '2021一月(January)',
        collapsable: false,
        children: genSidebarConfig('english/2021/January', false)
    },
]
