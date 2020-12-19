const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
	{
		title: '2018年十二月(December)',
		collapsable: true,
		children: genSidebarConfig('english/2018/2018-December', false)
	},
	{
		title: '2018年十一月(November)',
		collapsable: true,
		children: genSidebarConfig('english/2018/2018-November', false)
	},
	{
		title: '2018年十月(October)',
		collapsable: true,
		children: genSidebarConfig('english/2018/2018-October', false)
	}
]
