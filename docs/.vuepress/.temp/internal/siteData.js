export const siteData = JSON.parse("{\"base\":\"/\",\"lang\":\"en-US\",\"title\":\"rty-docs\",\"description\":\"Welcome to my docs\",\"head\":[[\"link\",{\"rel\":\"icon\",\"href\":\"/img/rty-docs.ico\"}],[\"meta\",{\"name\":\"keywords\",\"content\":\"rty,荣天阳,rtyxmd,英文阅读,英语学习,vue组件,vue,英文歌曲,bruno\"}]],\"locales\":{}}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSiteData) {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ siteData }) => {
    __VUE_HMR_RUNTIME__.updateSiteData(siteData)
  })
}
