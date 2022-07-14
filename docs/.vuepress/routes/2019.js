const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        text: '2019十二月(December)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-December', false)
    },
    {
        text: '2019十一月(November)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-November', false)
    },
    {
        text: '2019十月(October)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-October', false)
    },
    {
        text: '2019九月(September)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-September', false)
    },
    {
        text: '2019八月(August)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-August', false)
    },
    {
        text: '2019七月(July)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-July', false)
    },
    {
        text: '2019六月(June)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-June', false)
    },
    {
        text: '2019年五月(May)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-May', false)
    },
    {
        text: '2019年四月(April)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-April', false)
    },
    {
        text: '2019年三月(March)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-March', false)
    },
    {
        text: '2019年二月(February)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-February', false)
    },
    {
        text: '2019年一月(January)',
        collapsible: true,
        children: genSidebarConfig('english/2019/2019-January', false)
    },
]
