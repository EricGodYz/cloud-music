<template>
  <div class="recommend-list">
    <h3 class="tit">收藏歌单</h3>
    <ul class="list">
      <li v-for="item in data" :key="item.id" class="list-item">
        <div class="list-show">
          <img v-lazy="item.picUrl" alt  class="img" />
          <p>cover</p>
          <p class="list-info">
            <span class="iconfont icon-headset"></span>
            <span>{{item.playCount | formatter}}</span>
          </p>
        </div>
        <h4 class="name">{{item.name}}</h4>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // 接受来自父组件的数据
  props: {
    data: Array,
  },
  // 局部过滤器的使用 
  //这个相当于自定义过滤器   
  filters:{
      formatter(count){
          if(count<10000){
              return count;
          }else if(count < 10000 * 10000){
              return Math.floor(count/10000) + '万';
          }else{
            //    大于1亿
            return Math.floor(count / 10000 /10000) + '亿';
          }

      }
  }
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
// 开始写推荐页的样式
.recommend-list {
  width: 100%;
}
.tit {
  font-size: $font-size-m;
  font-weight: 700;
  margin: 0 auto;
  line-height: 60px;
  height: 60px;
  width: 98%;
  color: $font-color-desc;
}
// .list {
//   width: 100%;
//   height: 100%;
//   display: flex;
//   justify-content: space-around;
//   flex: wrap;
//   .list-item {
//     width: 32%;
//   }
// }

.list {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  .list-item {
    width: 32%;
    .list-show{
      border-radius: 6px;
      overflow: hidden;
      position: relative;
      .img {
        width: 100%;
        
      }
      .list-info {
        position: absolute;
        top: 2px;
        right: 4px;
        color: $font-color-light;
        font-size: $font-size-s;
        display: flex;
        align-items: center;
        .iconfont{
          font-size: $font-size-l;
        }
      }
      .cover{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 30%;
        background: linear-gradient(rgba(110, 110, 110, 0.4), rgba(255, 255, 255, 0));
      }
    }
    .name{
      width: 100%;
      font-size: $font-size-s;
      font-weight: normal;
      line-height: 18px;
    }
  }
}
</style>