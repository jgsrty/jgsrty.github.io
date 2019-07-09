<template>
  <div class="position">
    <audio
      id="audio"
      loop
      controls=""
      controlsList="nodownload"
      oncontextmenu="return false"
      preload=""
    >
      <source
        id="mp3"
        :src="src"
      >
    </audio>
  </div>
</template>

<script>
export default {
  name: "rtyAudio",
  props: {
    src: "",
  },
};
</script>

<style scoped lang="scss">
.position {
  width: 100%;
  position: -webkit-sticky;
  position: sticky;
  bottom: 0;
}
</style>