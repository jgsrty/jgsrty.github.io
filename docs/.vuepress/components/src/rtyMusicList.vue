<template>
  <div class="play-case">
    <!-- <div
      class="btn"
      @click="getRandomArticle"
    >随便来一篇</div>
    <div> -->
    <div class="intro">
      <div>{{randomArticle.title}}</div>
      <div class="sub">{{randomArticle.subhead}}</div>
    </div>
    <rty-audio
      :src="randomArticle.src"
      :playNext="playNext"
      v-if="randomArticle.src"
      @changSrc="changSrc"
    ></rty-audio>
    <!-- </div> -->
  </div>
</template>

<script>
import rtyAudio from './rtyAudio'
export default {
  components: {
    rtyAudio
  },
  data() {
    return {
      playList: [],
      randomArticle: '',
      playNext: true
    }
  },
  mounted() {
    this.getAllPlayList(musicList)
    // console.log(this.playList)
  },
  methods: {
    getAllPlayList(arr) {
      arr.map(val => {
        val.children.map(cVal => {
          cVal.children.map(sVal => {
            this.playList.push(sVal)
          })
        })
      })
      this.getRandomArticle()
    },
    getRandomArticle() {
      let ind = Math.floor(Math.random() * this.playList.length)
      this.randomArticle = this.playList[ind]
    },
    changSrc() {
      this.getRandomArticle()
    }
  },
}
let musicList = [
  {
    title: 'muisc',
    children: [
      {
        title: 'Coldplay',
        subhead: 'Coldplay',
        children: [
          {
            title: 'Something Just Like This',
            subhead: 'Coldplay',
            src: 'https://rtyxmd.gitee.io/rtyresourcesmusic/Coldplay/Something%20Just%20Like%20This.mp3'
          },
          {
            title: 'Viva La Vida',
            subhead: 'Coldplay',
            src: 'https://rtyxmd.gitee.io/rtyresourcesmusic/Coldplay/Viva%20La%20Vida.mp3'
          }
        ]
      },
      {
        title: 'Chris Medina',
        subhead: 'Chris Medina',
        children: [
          {
            title: 'What Are Words',
            subhead: '--',
            src: 'https://rtyxmd.gitee.io/rtyresourcesmusic/Chris%20Medina/What%20Are%20Words.mp3'
          }
        ]
      }
    ]
  },
  {
    title: 2018,
    children: [
      {
        title: '十二月',
        subhead: 'December',
        children: [
          {
            title: '教育的意义',
            subhead: 'The Importance of Education',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2018-December/The Importance of Education.mp3'
          }
        ]
      }
    ]
  },
  {
    title: 2019,
    children: [
      {
        title: '一月',
        subhead: 'January',
        children: [
          {
            title: '人生选择-爱与恐惧',
            subhead: 'Fear or Love',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-January/Fear or Love.mp3'
          },
          {
            title: '致终将远行的孩子',
            subhead: 'On Children',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-January/On Children.mp3'
          }
        ]
      },
      {
        title: '二月',
        subhead: 'Feburary',
        children: [
          {
            title: '但是你没有...',
            subhead: `But You Didn't`,
            src: `https://rtyxmd.gitee.io/rtyresources2019/2019-Feburary/But You Didn't.mp3`
          },
        ]
      },
      {
        title: '三月',
        subhead: 'March',
        children: [
          {
            title: '乔布斯斯坦福演讲 1',
            subhead: 'Reasons of Dropping Out',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Reasons of Dropping Out.mp3'
          },
          {
            title: '乔布斯斯坦福演讲 2',
            subhead: 'Connecting the Dots',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Connect the Dots.mp3'
          },
          {
            title: '乔布斯斯坦福演讲 3',
            subhead: 'Love and Loss',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Love and Loss.mp3'
          },
          {
            title: '乔布斯斯坦福演讲 4',
            subhead: 'Thoughts on Death',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Thoughts on Death.mp3'
          },
          {
            title: '乔布斯斯坦福演讲 5',
            subhead: 'Stay Hungry Stay Foolish',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Stay Hungry Stay Foolish.mp3'
          },
        ]
      },
      {
        title: '四月',
        subhead: 'April',
        children: [
          {
            title: '在生存模式中成长',
            subhead: 'Grew Up in Survival Mode',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-April/Grew Up in Survival Mode.mp3'
          },
          {
            title: '在逆境中学习成长',
            subhead: 'Learn More on Bad Days',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-April/Learn More on Bad Days.mp3'
          },
        ]
      },
      {
        title: '五月',
        subhead: 'May',
        children: [
          {
            title: '保护自然遗产',
            subhead: 'Protecting Natural Heritage',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Protecting Natural Heritage.mp3'
          },
          {
            title: '扭转物种灭绝的趋势',
            subhead: 'Turning the Tide of Extinction',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Turning the Tide of Extinction.mp3'
          },
          {
            title: '肩负我们这一代的责任',
            subhead: 'Responsibilities of Our Generation',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Responsibilities of Our Generation.mp3'
          },
          {
            title: '通力合作，保护动物',
            subhead: 'Taking Concerted Action',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Taking Concerted Action.mp3'
          },
        ]
      },
      {
        title: '六月',
        subhead: 'June',
        children: [
          {
            title: '埃菲尔铁塔',
            subhead: 'The Eiffel Tower',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Eiffel Tower.mp3'
          },
          {
            title: '万里长城',
            subhead: 'The Great Wall of China',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Great Wall of China.mp3'
          },
          {
            title: '自由女神像',
            subhead: 'The Statue of Liberty',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Statue of Liberty.mp3'
          },
        ]
      },
      {
        title: '七月',
        subhead: 'July',
        children: [
          {
            title: '减轻书包的重量',
            subhead: 'Reduce the Weight of the Bag',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-July/Reduce the Weight of the Bag.mp3'
          },
          {
            title: '为生活而工作，还是为工作而活',
            subhead: 'Working to live or Living to work',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-July/Working to live or living to work.mp3'
          },
        ]
      },
      {
        title: '八月',
        subhead: 'August',
        children: [
          {
            title: '万圣节',
            subhead: 'Halloween',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-August/Halloween.mp3'
          },
          {
            title: '母亲节的历史',
            subhead: `History of Mother's Day`,
            src: `https://rtyxmd.gitee.io/rtyresources2019/2019-August/History of Mother's Day.mp3`
          },
          {
            title: '情人节',
            subhead: `Saint Valentine's Day`,
            src: `https://rtyxmd.gitee.io/rtyresources2019/2019-August/Saint Valentine's Day.mp3`
          },
        ]
      },
      {
        title: '九月',
        subhead: 'September',
        children: [
          {
            title: '圣诞节起源 1',
            subhead: 'Origins of Christmas 1',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-September/Origins of Christmas 1.mp3'
          },
          {
            title: '圣诞节起源 2',
            subhead: 'Origins of Christmas 2',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-September/Origins of Christmas 2.mp3'
          },
        ]
      },
      {
        title: '十月',
        subhead: 'October',
        children: [
          {
            title: '人无完人',
            subhead: 'Nobody Is Perfect',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-October/Nobody Is Perfect.mp3'
          },
          {
            title: '享受此刻的宁静',
            subhead: 'The Serenity of the Moment',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-October/The Serenity of the Moment.mp3'
          },
          {
            title: '生活的意义是什么',
            subhead: 'What Is the Meaning of Life',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-October/What Is the Meaning of Life.mp3'
          },
        ]
      },
      {
        title: '十一月',
        subhead: 'November',
        children: [
          {
            title: '时间银行',
            subhead: 'The Time Bank',
            src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-November/The Time Bank.mp3'
          },
        ]
      },
    ]
  }
]
</script>

<style lang="scss" scoped>
.play-case {
  margin-bottom: 10px;
  // height: 300px;
  text-align: center;
  // overflow-y: auto;
  .btn {
    width: 100px;
    height: 50px;
    margin: 0 auto;
    font-size: 1rem;
    line-height: 50px;
    cursor: pointer;
    background: #3eaf7c;
    color: #fff;
    border-radius: 4px;
  }
  .intro {
    font-weight: bold;
    .sub {
      font-weight: normal;
      margin: 5px 0;
    }
  }
}
</style>