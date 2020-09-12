<template>
  <div id="recommend" class="page" :class="{active:showBgColor}">
    <app-scroll class="content" :change="handleScrollChange">
      <div class="wrap">
        <!-- 展示加载的状态 -->
        <p>{{loading}}</p>
        <banner-list :data="banner" />
        <recommend-list :data="recommend" />
      </div>
    </app-scroll>
    
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
      showBgColor: true,
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
  methods: {
    handleScrollChange(show){
       this.showBgColor = show;
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