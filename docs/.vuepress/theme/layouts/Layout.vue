<template>
  <div
    class="theme-container"
    :class="pageClasses"
    @touchstart="onTouchStart"
    @touchend="onTouchEnd"
  >
    <Navbar v-if="shouldShowNavbar" @toggle-sidebar="toggleSidebar" />

    <div class="sidebar-mask" @click="toggleSidebar(false)" />

    <Sidebar :items="sidebarItems" @toggle-sidebar="toggleSidebar">
      <template #top>
        <slot name="sidebar-top" />
      </template>
      <template #bottom>
        <slot name="sidebar-bottom" />
      </template>
    </Sidebar>

    <Home v-if="$page.frontmatter.home" />

    <Page
      v-else
      :sidebar-items="sidebarItems"
      :class="showExample ? 'show-example' : ''"
    >
      <template #top>
        <slot name="page-top" />
      </template>
      <template #bottom>
        <slot name="page-bottom" />
      </template>
    </Page>
    <div class="example" v-show="showExample">
      <div class="mobile">
        <iframe
          width="100%"
          height="100%"
          src="https://elemefe.github.io/mint-ui/#/"
          frameborder="0"
        ></iframe>
      </div>
    </div>
  </div>
  <!-- src="https://www.sw-fed.kim/sw-bw-ui/example/#/" -->
</template>

<script>
import Home from "@theme/components/Home.vue";
import Navbar from "@theme/components/Navbar.vue";
import Page from "@theme/components/Page.vue";
import Sidebar from "@theme/components/Sidebar.vue";
import { resolveSidebarItems } from "../util";

export default {
  name: "Layout",

  components: {
    Home,
    Page,
    Sidebar,
    Navbar,
  },

  data() {
    return {
      isSidebarOpen: false,
      showExample: false,
    };
  },

  computed: {
    shouldShowNavbar() {
      const { themeConfig } = this.$site;
      const { frontmatter } = this.$page;
      if (frontmatter.navbar === false || themeConfig.navbar === false) {
        return false;
      }
      return (
        this.$title ||
        themeConfig.logo ||
        themeConfig.repo ||
        themeConfig.nav ||
        this.$themeLocaleConfig.nav
      );
    },

    shouldShowSidebar() {
      const { frontmatter } = this.$page;
      return (
        !frontmatter.home &&
        frontmatter.sidebar !== false &&
        this.sidebarItems.length
      );
    },

    sidebarItems() {
      return resolveSidebarItems(
        this.$page,
        this.$page.regularPath,
        this.$site,
        this.$localePath
      );
    },

    pageClasses() {
      const userPageClass = this.$page.frontmatter.pageClass;
      return [
        {
          "no-navbar": !this.shouldShowNavbar,
          "sidebar-open": this.isSidebarOpen,
          "no-sidebar": !this.shouldShowSidebar,
        },
        userPageClass,
      ];
    },
  },

  mounted() {
    this.showExampleFun();
    this.$router.afterEach(() => {
      this.isSidebarOpen = false;
      this.showExampleFun();
    });
  },

  methods: {
    showExampleFun() {
      this.showExample =
        this.$route.path.indexOf("components") > -1 ? true : false;
    },

    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
      this.$emit("toggle-sidebar", this.isSidebarOpen);
    },

    // side swipe
    onTouchStart(e) {
      this.touchStart = {
        x: e.changedTouches[0].clientX,
        y: e.changedTouches[0].clientY,
      };
    },

    onTouchEnd(e) {
      const dx = e.changedTouches[0].clientX - this.touchStart.x;
      const dy = e.changedTouches[0].clientY - this.touchStart.y;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
        if (dx > 0 && this.touchStart.x <= 80) {
          this.toggleSidebar(true);
        } else {
          this.toggleSidebar(false);
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.show-example {
  padding-right: 380px;
}
.example {
  font-size: 15px;
  background-color: #fff;
  position: fixed;
  z-index: 10;
  margin: 0;
  top: 3.6rem;
  bottom: 0;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  border-right: 1px solid #eaecef;
  overflow-y: auto;
  width: 380px;
  right: 20px;
  .mobile {
    background: url(//mint-ui.github.io/docs/static/img/phone.5909f66.png)
      no-repeat;
    background-size: 100%;
    height: 800px;
    padding: 100px 16px;
    margin-top: 30px;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    width: 375px;
  }
}
</style>
