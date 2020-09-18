<template>
  <div class="header">
    <div class="cover" :style="{opacity}"></div>
    <span class="iconfont icon-fanhui" @click="backAction"></span>
    <div class="text">
      <span :class="{active:showTitle}">{{showTitle ? title: '歌单'}}</span>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: {
    opacity: Number,
  },
  computed: {
    ...mapState({
      title: (state) => state.songList.detail.title,
    }),
    showTitle() {
      return this.opacity > 0.5;
    },
  },
  methods: {
    //返回上一级
    backAction() {
      this.$router.back();
    },
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/global-style.scss";

@keyframes marquee {
  0%{
    transform:  translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
  
}
.header {
  height: 44px;
  width: 100%;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  left: 0;
  padding: 5px 10px;
  // background-color: lawngreen;
  z-index: 1;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  .cover {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: $theme-color;
    z-index: -1;
  }
  .iconfont {
    font-size: 20px;
    color: $font-color-light;
  }
  .text {
    flex: 1;
    font-size: $font-size-m;
    margin: 0px 6px;
    color: $font-color-light;
    overflow: hidden;
    .active{
      display: block;
      animation: 8s marquee linear infinite;
    }
  }
}

</style>