// .vuepress/theme/index.js
export default {
  // 必须通过 enhanceApp 钩子注册全局属性
  enhanceApp({ app }) {
    // 关键：给 app 实例的全局属性赋值
    app.config.globalProperties.$siteConfig = {
      siteName: "我的文档站",
      docVersion: "2.0.0",
      buildTime: new Date().toLocaleDateString()
    };
  }
};