<template>
  <div class="list-wrap">
    <header class="header">
      <div class="play-info">
        <span class="iconfont icon-bofang"></span>
        <span>播放全部</span>
        <span>共({{data.length}})首</span>
      </div>
      <div class="subscribe-count" v-if="count">
        <span class="iconfont icon-tianjia"></span>
        <span>收藏({{count | formatter(1) }})</span>
      </div>
    </header>
    <ul class="list">
      <li class="item" v-for="(item, index) in data" :key="item.id">
        <div class="index">{{index+1}}</div>
        <div class="item-content">
          <h3 class="title">{{item.name}}</h3>
          <p class="info">
            <span v-for="name in item.ar" :key="name">{{name}}</span>
            <i>-</i>
            <span>{{item.al.name}}</span>
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  props:{
    data:Array,
    count:Number
  }
};
</script>

<style scoped lang="scss">
@import "../../assets/global-style.scss";
.list-wrap {
  background: $background-color;
  margin-top: -10px;
  border-radius: 6px;
  overflow: hidden;
  .header {
    height: 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid $border-color;
    .play-info {
      color: $font-color-desc;
      display: flex;
      align-items: center;
      span {
        &:nth-of-type(1) {
          font-size: 24px;
          padding: 0 10px;
        }
        &:nth-of-type(2) {
          font-size: $font-size-l;
        }
        &:nth-of-type(3) {
          font-size: $font-size-s;
          padding: 0 4px;
        }
      }
    }
    .subscribe-count {
      height: 100%;
      padding: 0 10px;
      background: $theme-color;
      border-radius: 6px;
      font-size: $font-size-l;
      display: flex;
      align-items: center;
      color: $font-color-light-v2;
      .iconfont {
        margin-right: 4px;
      }
    }
  }
  .list {
    .item {
      display: flex;
      height: 55px;
      .index {
        width: 55px;
        font-size: $font-size-l;
        text-align: center;
        line-height: 55px;
      }
      .item-content {
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        flex: 1;
        border-bottom: 1px solid $border-color;
        .title {
          font-size: $font-size-l;
          color: $font-color-desc;
        }
        .info {
          font-size: $font-size-s;
          color: $font-color-desc-v2;
        }
      }
    }
  }
}
</style>