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
      v-show="false"
      ref="audio"
      id="audio"
      controls=""
      controlsList="nodownload"
      oncontextmenu="return false"
      preload=""
      @loadedmetadata="audioLoadSuc"
      @play="onPlay"
      @pause="onPause"
      @timeupdate="audioUpdate"
      :src="src"
    >
    </audio>
    <div
      class="custom-audio"
      v-show="!showLoad"
    >
      <div class="flex-content">
        <div class="audio-controls">
          <i
            class="iconfont"
            :class="musicMute?'icon-jingyin':'icon-yinliang1'"
            @click="switchMute"
          ></i>
        </div>
        <div class="audio-controls">
          <i
            class="iconfont icon-shipinkuaituimiao"
            @click="reduceDuration"
          ></i>
        </div>
        <div class="audio-controls play-control">
          <i
            class="iconfont"
            :class="playState?'icon-zanting':'icon-bofang'"
            @click="changePlayState"
          ></i>
        </div>
        <div class="audio-controls">
          <i
            class="iconfont icon-shipinkuaijinmiao"
            @click="addDuration"
          ></i>
        </div>
        <div class="audio-controls">
          <div @click="changeSpeed">{{audioSpeed[currentSpeed]}}x</div>
        </div>
      </div>
      <div
        class="audio-progress"
        ref="progress"
      ></div>
    </div>
  </div>
</template>

<script>
let audioSpeed = ['0.5', '0.75', '1.0', '1.25', '1.5', '2.0']
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
      showLoad: true,
      //播放状态 暂停：false 播放：true
      playState: false,
      //是否静音
      musicMute: false,
      //音频总长
      audioDuration: 0,
      //播放进度
      playProgress: 0,
      //当前播放时间
      playedTime: 0,
      //播放速度
      audioSpeed: audioSpeed,
      currentSpeed: 2
    }
  },
  methods: {
    //音频加载成功
    audioLoadSuc(res) {
      this.showLoad = false
      this.audioDuration = parseInt(res.target.duration)
    },
    //切换播放状态
    changePlayState() {
      return this.playState ? this.$refs.audio.pause() : this.$refs.audio.play();
    },
    // 当音频播放
    onPlay() {
      this.playState = true;
    },
    // 当音频暂停
    onPause() {
      this.playState = false;
    },
    //切换静音
    switchMute() {
      this.$refs.audio.muted = !this.$refs.audio.muted;
      this.musicMute = this.$refs.audio.muted;
    },
    //播放更新进度
    audioUpdate(res) {
      this.playedTime = parseInt(res.target.currentTime);
      this.playProgress = parseInt(
        (this.playedTime / this.audioDuration) * 100
      );
      this.$refs.progress.style.width = `${this.playProgress}%`
    },
    //快进5秒
    addDuration() {
      this.$refs.audio.currentTime += 5
    },
    //快退5秒
    reduceDuration() {
      this.$refs.audio.currentTime -= 5
    },
    //切换播放速度
    changeSpeed() {
      this.currentSpeed += 1
      if (this.currentSpeed > 5) {
        this.currentSpeed = 0
      }
      this.$refs.audio.playbackRate = this.audioSpeed[this.currentSpeed]
    }
  },
};
</script>

<style scoped lang="scss">
@import url('./audioFont/iconfont.css'); //自定义播放style
.custom-audio {
  width: 100%;
  .flex-content {
    height: 46px;
    display: flex;
    .audio-controls {
      width: 20%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      i {
        font-size: 30px;
      }
    }
    .play-control {
      i {
        font-size: 44px;
      }
    }
  }
  .audio-progress {
    height: 4px;
    background: #3eaf7c;
    width: 0;
  }
}

.position {
  width: 100%;
  position: sticky;
  position: -webkit-sticky;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 50px;
  background: rgba(246, 246, 246, 0.8);
  border-radius: 15px 15px 0 0;
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