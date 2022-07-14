const genSidebarConfig = require('./getSidebarConfig')

module.exports = [
    {
        text: '怦然心动(Flipped)',
        collapsible: true,
        children: [
            '/english/2021/Flipped/Diving Under',
            '/english/2021/Flipped/Flipped',
            '/english/2021/Flipped/Buddy,Beware',
            '/english/2021/Flipped/The Sycamore Tree',
            '/english/2021/Flipped/Brawk-Brawk-Brawk',
            '/english/2021/Flipped/The Eggs',
            '/english/2021/Flipped/Get a Grip, Man',
            '/english/2021/Flipped/The Yard',
            '/english/2021/Flipped/Looming Large and Smelly',
            '/english/2021/Flipped/The Visit',
            '/english/2021/Flipped/The Serious Willies',
            '/english/2021/Flipped/The Dinner',
            '/english/2021/Flipped/Flipped ',
            '/english/2021/Flipped/The Basket Boys',
        ]
    },
    {
        text: '2021二月(February)',
        collapsible: true,
        children: genSidebarConfig('english/2021/February', false)
    },
    {
        text: '2021一月(January)',
        collapsible: true,
        children: genSidebarConfig('english/2021/January', false)
    },
]
