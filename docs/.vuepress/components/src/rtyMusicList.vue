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
      // console.log(this.playList)
      // console.log(this.randomArticle)
      // console.log(ind)
    },
    changSrc() {
      this.getRandomArticle()
    }
  },
}
let musicList = [
  {
    title: 'music',
    children: [
      {
        title:'Coldplay',
        subhead:'Coldplay',
        children:[
          {
            title:'Something Just Like This',
            subhead:'Coldplay',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/Something%20Just%20Like%20This.mp3'
          },
          {
            title:'Viva La Vida',
            subhead:'Coldplay',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/Viva La Vida.mp3'
          }
        ]
      },
      {
        title:'Shane Filan',
        subhead:'Shane Filan',
        children:[
          {
            title:'Beautiful In White',
            subhead:'Shane Filan',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/Beautiful%20In%20White.mp3'
          }
        ]
      },
      {
        title:'Rudy Mancuso',
        subhead:'Rudy Mancuso',
        children:[
          {
            title:'Musical Fiction',
            subhead:'Rudy Mancuso',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/Musical Fiction.mp3'
          }
        ]
      },
      {
        title:'Avicii',
        subhead:'Avicii',
        children:[
          {
            title:'The Nights',
            subhead:'Avicii',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/The Nights.mp3'
          }
        ]
      },
      {
        title:'MKJ',
        subhead:'MKJ',
        children:[
          {
            title:'Time',
            subhead:'MKJ',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/Time.mp3'
          }
        ]
      },
      {
        title:'Chris Medina',
        subhead:'Chris Medina',
        children:[
          {
            title:'What Are Words',
            subhead:'Chris Medina',
            src:'https://rtyxmd.gitee.io/rtyresourcesmusic/What Are Words.mp3'
          }
        ]
      },
    ]
  },
  // {
  //   title: 2018,
  //   children: [
  //     {
  //       title: '十二月',
  //       subhead: 'December',
  //       children: [
  //         {
  //           title: '教育的意义',
  //           subhead: 'The Importance of Education',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2018-December/The Importance of Education.mp3'
  //         }
  //       ]
  //     }
  //   ]
  // },
  // {
  //   title: 2019,
  //   children: [
  //     {
  //       title: '一月',
  //       subhead: 'January',
  //       children: [
  //         {
  //           title: '人生选择-爱与恐惧',
  //           subhead: 'Fear or Love',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-January/Fear or Love.mp3'
  //         },
  //         {
  //           title: '致终将远行的孩子',
  //           subhead: 'On Children',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-January/On Children.mp3'
  //         }
  //       ]
  //     },
  //     {
  //       title: '二月',
  //       subhead: 'Feburary',
  //       children: [
  //         {
  //           title: '但是你没有...',
  //           subhead: `But You Didn't`,
  //           src: `https://rtyxmd.gitee.io/rtyresources2019/2019-Feburary/But You Didn't.mp3`
  //         },
  //       ]
  //     },
  //     {
  //       title: '三月',
  //       subhead: 'March',
  //       children: [
  //         {
  //           title: '乔布斯斯坦福演讲 1',
  //           subhead: 'Reasons of Dropping Out',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Reasons of Dropping Out.mp3'
  //         },
  //         {
  //           title: '乔布斯斯坦福演讲 2',
  //           subhead: 'Connecting the Dots',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Connect the Dots.mp3'
  //         },
  //         {
  //           title: '乔布斯斯坦福演讲 3',
  //           subhead: 'Love and Loss',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Love and Loss.mp3'
  //         },
  //         {
  //           title: '乔布斯斯坦福演讲 4',
  //           subhead: 'Thoughts on Death',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Thoughts on Death.mp3'
  //         },
  //         {
  //           title: '乔布斯斯坦福演讲 5',
  //           subhead: 'Stay Hungry Stay Foolish',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-March/Stay Hungry Stay Foolish.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '四月',
  //       subhead: 'April',
  //       children: [
  //         {
  //           title: '在生存模式中成长',
  //           subhead: 'Grew Up in Survival Mode',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-April/Grew Up in Survival Mode.mp3'
  //         },
  //         {
  //           title: '在逆境中学习成长',
  //           subhead: 'Learn More on Bad Days',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-April/Learn More on Bad Days.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '五月',
  //       subhead: 'May',
  //       children: [
  //         {
  //           title: '保护自然遗产',
  //           subhead: 'Protecting Natural Heritage',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Protecting Natural Heritage.mp3'
  //         },
  //         {
  //           title: '扭转物种灭绝的趋势',
  //           subhead: 'Turning the Tide of Extinction',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Turning the Tide of Extinction.mp3'
  //         },
  //         {
  //           title: '肩负我们这一代的责任',
  //           subhead: 'Responsibilities of Our Generation',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Responsibilities of Our Generation.mp3'
  //         },
  //         {
  //           title: '通力合作，保护动物',
  //           subhead: 'Taking Concerted Action',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-May/Taking Concerted Action.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '六月',
  //       subhead: 'June',
  //       children: [
  //         {
  //           title: '埃菲尔铁塔',
  //           subhead: 'The Eiffel Tower',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Eiffel Tower.mp3'
  //         },
  //         {
  //           title: '万里长城',
  //           subhead: 'The Great Wall of China',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Great Wall of China.mp3'
  //         },
  //         {
  //           title: '自由女神像',
  //           subhead: 'The Statue of Liberty',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-June/The Statue of Liberty.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '七月',
  //       subhead: 'July',
  //       children: [
  //         {
  //           title: '减轻书包的重量',
  //           subhead: 'Reduce the Weight of the Bag',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-July/Reduce the Weight of the Bag.mp3'
  //         },
  //         {
  //           title: '为生活而工作，还是为工作而活',
  //           subhead: 'Working to live or Living to work',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-July/Working to live or living to work.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '八月',
  //       subhead: 'August',
  //       children: [
  //         {
  //           title: '万圣节',
  //           subhead: 'Halloween',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-August/Halloween.mp3'
  //         },
  //         {
  //           title: '母亲节的历史',
  //           subhead: `History of Mother's Day`,
  //           src: `https://rtyxmd.gitee.io/rtyresources2019/2019-August/History of Mother's Day.mp3`
  //         },
  //         {
  //           title: '情人节',
  //           subhead: `Saint Valentine's Day`,
  //           src: `https://rtyxmd.gitee.io/rtyresources2019/2019-August/Saint Valentine's Day.mp3`
  //         },
  //       ]
  //     },
  //     {
  //       title: '九月',
  //       subhead: 'September',
  //       children: [
  //         {
  //           title: '圣诞节起源 1',
  //           subhead: 'Origins of Christmas 1',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-September/Origins of Christmas 1.mp3'
  //         },
  //         {
  //           title: '圣诞节起源 2',
  //           subhead: 'Origins of Christmas 2',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-September/Origins of Christmas 2.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '十月',
  //       subhead: 'October',
  //       children: [
  //         {
  //           title: '人无完人',
  //           subhead: 'Nobody Is Perfect',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-October/Nobody Is Perfect.mp3'
  //         },
  //         {
  //           title: '享受此刻的宁静',
  //           subhead: 'The Serenity of the Moment',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-October/The Serenity of the Moment.mp3'
  //         },
  //         {
  //           title: '生活的意义是什么',
  //           subhead: 'What Is the Meaning of Life',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-October/What Is the Meaning of Life.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '十一月',
  //       subhead: 'November',
  //       children: [
  //         {
  //           title: '时间银行',
  //           subhead: 'The Time Bank',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-November/The Time Bank.mp3'
  //         },
  //         {
  //           title: '什么才是重要的',
  //           subhead: 'What Will Matter',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-November/What%20Will%20Matter.mp3'
  //         },
  //         {
  //           title: '生命的故事',
  //           subhead: 'The Story of Life',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-November/The%20Story%20of%20LIfe.mp3'
  //         },
  //         {
  //           title: '我们这个时代的悖论',
  //           subhead: 'The Paradox of Our Time',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-November/The%20Paradox%20of%20Our%20Time.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '十二月',
  //       subhead: 'December',
  //       children: [
  //         {
  //           title: '如果提高自信',
  //           subhead: 'How to Boost Your Confidence',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-December/How%20to%20Boost%20Your%20Confidence.mp3'
  //         },
  //         {
  //           title: '燃烧我的卡路里',
  //           subhead: 'What Is a Calorie',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-December/What%20Is%20a%20Calorie.mp3'
  //         },
  //         {
  //           title: '水为何如此重要',
  //           subhead: 'Why Is Water so Important',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2019/2019-December/Why%20Is%20Water%20so%20Important.mp3'
  //         }
  //       ]
  //     },
  //   ]
  // },
  // {
  //   title: 2020,
  //   children: [
  //     {
  //       title: '一月',
  //       subhead: 'January',
  //       children: [
  //         {
  //           title: '越来越多的人选择一个人吃饭',
  //           subhead: 'More and More People Dine Alone',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/January/More%20and%20More%20People%20Dine%20Alone.mp3'
  //         },
  //         {
  //           title: '学无止境',
  //           subhead: 'So Much to Learn',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/January/So%20Much%20to%20Learn.mp3'
  //         },
  //         {
  //           title: '你的成功始于此',
  //           subhead: 'Your Success Starts Here',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/January/Your%20Success%20Starts%20Here.mp3'
  //         }
  //       ]
  //     },
  //     {
  //       title: '二月',
  //       subhead: 'February',
  //       children: [
  //         {
  //           title: '将学习视为终身事业',
  //           subhead: 'Take learning as a Lifelong Career',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/February/Take%20Learning%20as%20a%20Lifelong%20Career.mp3'
  //         },
  //         {
  //           title: '读书的价值',
  //           subhead: 'The Value of Reading',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/February/The%20Value%20of%20Reading.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '三月',
  //       subhead: 'March',
  //       children: [
  //         {
  //           title: '我们需要朋友',
  //           subhead: 'We Need Friends',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/March/We%20Need%20Friends.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '四月',
  //       subhead: 'April',
  //       children: [
  //         {
  //           title: '学无止境',
  //           subhead: 'Learning Has No Past',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/April/Learning%20Is%20Not%20Experience.mp3'
  //         },
  //         {
  //           title: '学习不是一种经验',
  //           subhead: 'Learning Is Not Experience',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/April/Learning%20Is%20Not%20Experience.mp3'
  //         },
  //         {
  //           title: '全神贯注的观察',
  //           subhead: 'Look with Intensity',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/April/Look%20with%20Intensity.mp3'
  //         },
  //       ]
  //     },
  //     {
  //       title: '五月',
  //       subhead: 'May',
  //       children: [
  //         {
  //           title: '留意身边美好事物',
  //           subhead: 'Observe Beautiful Things',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/May/Observe%20Beautiful%20Things.mp3'
  //         },
  //         {
  //           title: '微笑的价值',
  //           subhead: 'The Value of a Smile',
  //           src: 'https://rtyxmd.gitee.io/rtyresources2020/May/The%20Value%20of%20a%20Smile.mp3'
  //         },
  //       ]
  //     }
  //   ]
  // },
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