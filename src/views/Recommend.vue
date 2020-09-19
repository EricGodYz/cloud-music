<template>

<div>
  <div id="recommend" class="page" :class="{active:showBgColor}">
    <app-scroll class="content" :handleScroll="handleScrollAction">
      <div class="wrap">
        <!-- 展示加载的状态 -->
        <!-- <p>{{loading}}</p> -->
        <banner-list :data="banner" />
        <recommend-list :data="recommend" />
      </div>
    </app-scroll>
    
  </div>

  <!-- 子页面 -->
  <transition  enter-active-class="fly-in"  leave-active-class="fly-out">
    <router-view/>
  </transition>
  
</div>
</template>

<script>
import { mapState,mapGetters } from "vuex";
import RecommendList from "../components/recommend/recommend-list";
import BannerList from "../components/recommend/banner-list";
export default {
  components: {
    RecommendList,
    BannerList,
  },
  data() {
    return {
      showBgColor: false,
      handleLoading:true,   //需要loading处理
    };
  },
  computed: {
    // 处理数据,得到数据，然后展示数据
    ...mapState({
      banner: (state) => state.recommend.banner,
      recommend: (state) => state.recommend.recommend,
    }),
    ...mapGetters({
        loading:'recommend/loading'
    })
  },
  // watch: {

  //   // 进行loading的加载
  //   loading(newVal){
  //     if(newVal){
  //       this.$showLoading();
  //     }else{
  //       this.$hideLoading();
  //     }
  //   }
  // },
  methods: {
    // 页面的滚动事件
    handleScrollAction({y}){
      //  this.showBgColor = show;   第一种方法
      // console.log(y);
      
      if(y >= 0){
        this.showBgColor = true;
      }else{
        this.showBgColor = false;
      }
      
    
    }
  },
  created() {
    // 派发事件，处理数据
    this.$store.dispatch("recommend/requestBannerList");
    this.$store.dispatch("recommend/requestRecommendList");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#recommend {
  background-color: $background-color;
  &.active {
    background-color: $theme-color;
  }
  .content {
    width: 100%;
    height: 100%;
  }
  .wrap {
    background-color: $background-color;
  }
 
}
</style>