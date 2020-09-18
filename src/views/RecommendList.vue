<template>
  <div class="page subPage">
    <div class="header">
      <div class="cover" :style="{opacity}"></div>
      <span class="iconfont icon-fanhui" @click="backAction"></span>
      <div class="text">
        <span :class="{active:showTitle}">{{showTitle ? detail.name : '歌单'}}</span>
      </div>
    </div>

    <app-scroll class="content" v-if="!loading" :handleScroll="handleScrollAction">
      <div class="top">
        <div class="cover" :style="{backgroundImage:`url(${detail.coverImgUrl})`}"></div>

        <div class="info">
          <div class="image">
            <img :src="detail.coverImgUrl" alt />
            <i class="img-info">
              <span class="iconfont icon-headset"></span>
              <span class="text">{{detail.subscribedCount |formatter}}</span>
            </i>
          </div>
          <div class="wrap">
            <h3 class="title">{{detail.name}}</h3>
            <div class="creator">
              <img :src="detail.creator.avatarUrl" alt />
              <span>{{detail.creator.nickname}}</span>
            </div>
          </div>
        </div>
        <div class="handle">
          <span class="iconfont icon-pinglun">评论</span>
          <span class="iconfont icon-xihuan1">点赞</span>
          <span class="iconfont icon-tianjia">收藏</span>
          <span class="iconfont icon-youcecaidan">更多</span>
        </div>
      </div>
      <recommend-list :data="detail.tracks" :count="detail.subscribedCount" />
    </app-scroll>
    <div class="content" v-else></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import RecommendList from "../components/recommend-list/recommend-list";
export default {
  components: {
    RecommendList,
  },
  data() {
    return {
      opacity: 0,
      // showTitle:false,
    };
  },
  computed: {
    ...mapState({
      // detail: state =>{console.log(state.recommend.avatarUrl)},
      detail: (state) => state.recommend.recommendList,
      // loading: (state) => {
      //   console.log(state.recommend.detailLoading);
      // },
      loading:(state) => state.recommend.detailLoading,
    }),
    showTitle() {
      return this.opacity > 0.5;
    },
  },
  watch: {
    // loadingt图标的加载事件
    loading(newVal) {
      if (newVal) {
        this.$showLoading();
      } else {
        this.$hideLoading();
      }
    },
  },
  methods: {

    // 滚动事件
    handleScrollAction({y}){
      // console.log(y);
      if(y<0 && y >= -200){
        let opacity = y * (-1) / 200;
        opacity =opacity > 1 ? 1 : opacity;
        this.opacity = opacity;
       
      }
    },
    //返回上一级
    backAction(){
      this.$router.back();
    }
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("recommend/requestRecommendListDetail", {
      id: this.$route.params.id,
    });
  },
};
</script>

<style scoped lang="scss">
@import "../assets/global-style.scss";

@keyframes marquee {
  0%{
    transform:  translateX(100%);
  }
  100%{
    transform: translateX(-100%);
  }
  
}
.content {
  width: 100%;
  height: 100%;
  // background-color: $background-color;
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

.top {
  height: 275px;
  width: 100%;
  padding: 20px;
  padding-top: 44px;
  padding-bottom: 30px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  .cover {
    background-size: 100%;
    background-position: center;
    filter: blur(20px);
    width: 100%;
    height: 275px;
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .info {
    width: 100%;
    height: 120px;
    display: flex;
    .image {
      position: relative;
      img {
        width: 120px;
        height: 120px;
      }
      .img-info {
        position: absolute;
        top: 2px;
        right: 2px;
        color: $font-color-light;
      }
    }
    .wrap {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      margin-left: 10px;
      .title {
        font-size: $font-size-l;
        font-weight: 700;
        color: $font-color-light;
      }
      .creator {
        display: flex;
        align-items: center;
        justify-content: flex-start;
        color: $font-color-light-v2;

        img {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }
      }
    }
  }
  .handle {
    display: flex;
    justify-content: space-between;
    .iconfont {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: $font-color-light;
      &::before {
        margin-bottom: 6px;
        font-size: 22px;
      }
    }
  }
}
</style>