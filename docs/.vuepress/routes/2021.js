const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        title: '怦然心动(Flipped)',
        collapsable: false,
        children: [
            '2021/Flipped/Diving Under',
            '2021/Flipped/Flipped',
            '2021/Flipped/Buddy,Beware',
        ]
    },
    {
        title: '2021二月(February)',
        collapsable: true,
        children: genSidebarConfig('english/2021/February', false)
    },
    {
        title: '2021一月(January)',
        collapsable: true,
        children: genSidebarConfig('english/2021/January', false)
    },
]
