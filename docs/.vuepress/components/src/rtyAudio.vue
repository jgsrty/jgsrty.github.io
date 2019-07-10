<template>

  <div class="position">
    <div
      v-show="showLoad"
      class="loading"
    >
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <audio
      v-show="!showLoad"
      id="audio"
      loop
      controls=""
      controlsList="nodownload"
      oncontextmenu="return false"
      preload=""
      @loadedmetadata="audioLoadSuc"
      :src="src"
    >
    </audio>
  </div>
</template>

<script>
export default {
  name: "rtyAudio",
  props: {
    src: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      showLoad: true
    }
  },
  methods: {
    audioLoadSuc(res) {
      //音频加载成功
      this.showLoad = false
      // this.$vux.loading.hide();
      // this.audioDuration = parseInt(res.target.duration);
      // console.log(res.target.duration);
    }
  },
};
</script>

<style scoped lang="scss">
.position {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
}
.loading {
  display: flex;
  flex-flow: row nowrap;
  align-items: center;
  justify-content: space-between;
  width: 2em;
  span {
    width: 0.3em;
    height: 1em;
    background-color: #3eaf7c;
  }

  span:nth-of-type(1) {
    animation: grow 1s -0.45s ease-in-out infinite;
  }

  span:nth-of-type(2) {
    animation: grow 1s -0.3s ease-in-out infinite;
  }

  span:nth-of-type(3) {
    animation: grow 1s -0.15s ease-in-out infinite;
  }

  span:nth-of-type(4) {
    animation: grow 1s ease-in-out infinite;
  }
}

@keyframes grow {
  0%,
  100% {
    transform: scaleY(1);
  }

  50% {
    transform: scaleY(2);
  }
}
</style>