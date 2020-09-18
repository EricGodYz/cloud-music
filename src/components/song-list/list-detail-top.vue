<template>
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
        <h3 class="title">{{detail.title}}</h3>
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
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState({
      detail: (state) => state.songList.detail,
    }),
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/global-style.scss";
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