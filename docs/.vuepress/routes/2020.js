const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        title: '2020十二月(December)',
        collapsable: false,
        children: genSidebarConfig('english/2020/December', false)
    },
    {
        title: '2020十一月(November)',
        collapsable: true,
        children: genSidebarConfig('english/2020/November', false)
    },
    {
        title: '2020十月(October)',
        collapsable: true,
        children: genSidebarConfig('english/2020/October', false)
    },
    {
        title: '2020九月(September)',
        collapsable: true,
        children: genSidebarConfig('english/2020/September', false)
    },
    {
        title: '2020八月(August)',
        collapsable: true,
        children: genSidebarConfig('english/2020/August', false)
    },
    {
        title: '2020七月(July)',
        collapsable: true,
        children: genSidebarConfig('english/2020/July', false)
    },
    {
        title: '2020六月(June)',
        collapsable: true,
        children: genSidebarConfig('english/2020/June', false)
    },
    {
        title: '2020五月(May)',
        collapsable: true,
        children: genSidebarConfig('english/2020/May', false)
    },
    {
        title: '2020四月(April)',
        collapsable: true,
        children: genSidebarConfig('english/2020/April', false)
    },
    {
        title: '2020三月(March)',
        collapsable: true,
        children: genSidebarConfig('english/2020/March', false)
    },
    {
        title: '2020二月(Feruary)',
        collapsable: true,
        children: genSidebarConfig('english/2020/February', false)
    },
    {
        title: '2020一月(January)',
        collapsable: true,
        children: genSidebarConfig('english/2020/January', false)
    },
]
