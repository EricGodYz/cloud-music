<template>
  <div class="mini-player-bar">
    <div class="poster" @click ="showPlayerPanalAction">
      <img :src="picUrl" alt />
    </div>
    <div class="info" @click ="showPlayerPanalAction">
      <h3 class="title">{{name}}</h3>
      <p class="singer">{{singer}}</p>
    </div>
    <div class="icon handle-icon">
        <span class="iconfont" :class="[isPlay ? pauseIcon :playIcon ]"></span>
    </div>
    <div class="icon menu-icon">
      <span class="iconfont icon-liebiao"></span>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlay: false,
      picUrl:
        "https://p2.music.126.net/HvB44MNINoLar8HFbRjIGQ==/109951165142435842.jpg",
      name: "天外来物",
      singer: "薛之谦",
      playIcon: "icon-zanting1",
      pauseIcon: "icon-stop",
    };
  },
  methods: {
    //   触发事件告诉父组件需要展示播放界面
      showPlayerPanalAction(){
          this.$emit('show-player-panel');
      }
  },
};
</script>

<style scoped lang="scss">
@import "../../../assets/global-style.scss";
.mini-player-bar{
  width: 100%;
  height: 60px;
  background: $background-color;
  position: absolute;
  left: 0;
  bottom: 0;
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  .poster{
    width: 40px;
    height: 40px;
    border-radius: 50%;
    overflow: hidden;
    img{
      width: 100%;
      height: 100%;
    }
  }
  .info{
    margin-left: 14px;
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    .title{
      font-size: $font-size-m;
      color: $font-color-desc;
    }
    .singer{
      font-size: $font-size-s;
      color: $font-color-desc-v2;
    }
  }
  .icon{
    width: 40px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    color: $theme-color;
  }
  .handle-icon .iconfont{
    font-size: 18px;
    border: 3px solid $theme-color;
    padding: 5px;
    border-radius: 50%;
  }
  .menu-icon .iconfont{
    font-size: 28px;
  }
}
</style>