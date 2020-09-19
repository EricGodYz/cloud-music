<template>
  <div id="normal-player">
    <div class="header">
      <div class="back-icon" @click="closePlayerPanelAction">
        <span class="iconfont icon-jiantou1"></span>
      </div>
      <div class="info">
        <h3>{{name}}</h3>
        <p>{{singer}}</p>
      </div>
    </div>

     <div class="middle">
      <div class="poster">
        <img :src="picUrl" alt=""/>
      </div>
    </div>

     <div class="bottom">
      <div class="paly-num">
        <span>倍速听歌</span>
        <span v-for="item in playNum" :key="item" :class="{active: selectNum === item}">
          x{{item}}
        </span>
      </div>
      <div class="progress-bar"></div>
      <div class="handle">
        <span class="iconfont" :class="playMode[selectPlayMode].icon"></span>
        <span class="iconfont icon-shangyiqu101"></span>
        <span class="iconfont" :class="[isPlay ? pauseIcon : playIcon]"></span>
        <span class="iconfont icon-xiayiqu101"></span>
        <span class="iconfont icon-liebiao"></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      playNum: [0.75, 1, 1.25, 1.5, 2],
      selectNum: 1,
      isPlay: true,
      picUrl:
        "https://p2.music.126.net/HvB44MNINoLar8HFbRjIGQ==/109951165142435842.jpg",
      name: "天外来物",
      singer: "薛之谦",
      playIcon: "icon-bofang1",
      pauseIcon: "icon-plus-pause",
      playMode: [
        {
          type: 0, //顺序
          icon: "icon-shunxubofang",
        },
        {
          type: 1, //单曲循环
          icon: "icon-danquxunhuan1",
        },
        {
          type: 2, //随机播放
          icon: "icon-suiji",
        },
      ],
      selectPlayMode: 0,
    };
  },

  methods: {
    closePlayerPanelAction() {
      this.$emit("close-player-panel");
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/global-style.scss";
#normal-player {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background: $background-color;
}
.header {
  width: 100%;
  height: 44px;
  position: absolute;
  top: 0;
  left: 0;
  background: lemonchiffon;
  display: flex;
  padding: 5px 10px;
  box-sizing: border-box;
  color: $font-color-desc;
  .back-icon {
    width: 34px;
    height: 34px;
    transform: rotate(90deg);
    text-align: center;
    line-height: 34px;
    .iconfont {
      font-size: 24px;
    }
  }
  .info {
    margin-left: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h3 {
      font-size: $font-size-l;
    }
    p {
      font-size: $font-size-s;
      color: $font-color-desc-v2;
    }
  }
}
.middle {
  width: 100%;
  position: absolute;
  top: 44px;
  left: 0;
  bottom: 180px;
//   background: lightblue;
  .poster {
    width: 200px;
    height: 200px;
    transform: translate(-50%, -50%);
    position: relative;
    left: 50%;
    top: 50%;
    overflow: hidden;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.bottom {
  width: 100%;
  height: 180px;
  position: absolute;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
  .paly-num {
    width: 100%;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    span {
      display: block;
      font-size: $font-size-m;
      color: $font-color-desc-v2;
      margin: 0 2px;
      padding: 5px;
      &.active {
        border-radius: 10px;
        border: 1px solid $theme-color;
        color: $theme-color;
      }
    }
  }
  .progress-bar {
    width: 100%;
    height: 30px;
    background: darkgreen;
  }
  .handle {
    padding: 20px 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .iconfont {
      color: $font-color-desc;
      font-size: 32px;
      &:nth-of-type(3) {
        font-size: 44px;
      }
    }
  }
}
</style>