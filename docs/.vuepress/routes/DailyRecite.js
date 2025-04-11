const genSidebarConfig = require("./getSidebarConfig");
module.exports = [
  {
    text: "每日跟读2025",
    collapsible: true,
    children: genSidebarConfig("english/DailyRecite/2025", false),
  },
  // {
  //   text: "每日跟读202x",
  //   collapsible: true,
  //   children: genSidebarConfig("english/DailyRecite/202x", false),
  // },
];
