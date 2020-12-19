const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        title: '2019十二月(December)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-December', false)
    },
    {
        title: '2019十一月(November)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-November', false)
    },
    {
        title: '2019十月(October)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-October', false)
    },
    {
        title: '2019九月(September)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-September', false)
    },
    {
        title: '2019八月(August)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-August', false)
    },
    {
        title: '2019七月(July)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-July', false)
    },
    {
        title: '2019六月(June)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-June', false)
    },
    {
        title: '2019年五月(May)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-May', false)
    },
    {
        title: '2019年四月(April)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-April', false)
    },
    {
        title: '2019年三月(March)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-March', false)
    },
    {
        title: '2019年二月(February)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-February', false)
    },
    {
        title: '2019年一月(January)',
        collapsable: true,
        children: genSidebarConfig('english/2019/2019-January', false)
    },
]
