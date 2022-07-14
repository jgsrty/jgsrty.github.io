const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        text: '2020十二月(December)',
        collapsible: true,
        children: genSidebarConfig('english/2020/December', false)
    },
    {
        text: '2020十一月(November)',
        collapsible: true,
        children: genSidebarConfig('english/2020/November', false)
    },
    {
        text: '2020十月(October)',
        collapsible: true,
        children: genSidebarConfig('english/2020/October', false)
    },
    {
        text: '2020九月(September)',
        collapsible: true,
        children: genSidebarConfig('english/2020/September', false)
    },
    {
        text: '2020八月(August)',
        collapsible: true,
        children: genSidebarConfig('english/2020/August', false)
    },
    {
        text: '2020七月(July)',
        collapsible: true,
        children: genSidebarConfig('english/2020/July', false)
    },
    {
        text: '2020六月(June)',
        collapsible: true,
        children: genSidebarConfig('english/2020/June', false)
    },
    {
        text: '2020五月(May)',
        collapsible: true,
        children: genSidebarConfig('english/2020/May', false)
    },
    {
        text: '2020四月(April)',
        collapsible: true,
        children: genSidebarConfig('english/2020/April', false)
    },
    {
        text: '2020三月(March)',
        collapsible: true,
        children: genSidebarConfig('english/2020/March', false)
    },
    {
        text: '2020二月(Feruary)',
        collapsible: true,
        children: genSidebarConfig('english/2020/February', false)
    },
    {
        text: '2020一月(January)',
        collapsible: true,
        children: genSidebarConfig('english/2020/January', false)
    },
]
