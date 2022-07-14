const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
	{
		text: '2018年十二月(December)',
		collapsible: true,
		children: genSidebarConfig('english/2018/2018-December', false)
	},
	{
		text: '2018年十一月(November)',
		collapsible: true,
		children: genSidebarConfig('english/2018/2018-November', false)
	},
	{
		text: '2018年十月(October)',
		collapsible: true,
		children: genSidebarConfig('english/2018/2018-October', false)
	}
]
