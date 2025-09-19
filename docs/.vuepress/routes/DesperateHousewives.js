const genSidebarConfig = require("./getSidebarConfig");
module.exports = [
  {
    text: "绝望主妇",
    collapsible: true,
    children: genSidebarConfig("english/DesperateHousewives/season", false),
  },
];
