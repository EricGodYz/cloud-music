<template>
  <div class="banner">
    <div class="swiper-container" ref="swiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(item,index) in data" :key="index">
          <img :src="item" alt="banner" />
        </div>
      </div>

      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
import Swiper from "swiper/swiper-bundle.js";
import "swiper/swiper-bundle.css";

export default {
  //接受来自父组件的数据
  props: {
    data: Array,
  },
  watch: {
    //  当轮播图的图片数据发生变化的时候，构建轮播图
    data() {
      // nextTick()，是将回调函数延迟在下一次dom更新数据后调用，简单的理解是：当数据更新了，在dom中渲染后，自动执行该函数
      this.$nextTick(() => {
        this.swiper = new Swiper(this.$refs.swiper, {
          pagination: {
            el: ".swiper-pagination",
          },
          loop:true,
          autoplay:{
            delay:2000,
            disableOnInteraction: false,
          }
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
.banner {
  width: 100%;
  height: 140px;
  position: relative;
  background-color: lightcoral;
  &::before {
    content: "";
    display: block;
    width: 100%;
    height: 65%;
    background-color: $theme-color;
  }
  .swiper-container {
    width: 98%;
    height: 100%;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    border-radius: 6px;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
<style lang="scss">
@import "../../assets/global-style.scss";
.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet{
    margin: 0 4px;
}
.swiper-pagination-bullets > .swiper-pagination-bullet{
 
  width: 8px;
  height: 8px;
}
.swiper-pagination-bullet-active{
  background-color: $theme-color;
}
</style>