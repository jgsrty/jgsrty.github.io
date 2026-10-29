const genSidebarConfig = require("./getSidebarConfig");
module.exports = [
  {
    text: "绝望主妇第一季",
    collapsible: true,
    children: genSidebarConfig("english/DesperateHousewives/season", false),
  },
];
