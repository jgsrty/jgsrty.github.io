const genSidebarConfig = require("./getSidebarConfig");
module.exports = [
  {
    text: "每日N句2025",
    collapsible: true,
    children: genSidebarConfig("english/DailySentence/2025", false),
  },
  // {
  //   text: "每日N句202x",
  //   collapsible: true,
  //   children: genSidebarConfig("english/DailySentence/202x", false),
  // },
];
