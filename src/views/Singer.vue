<template>
  <div class="page subPage">
      <header class="header"></header>
      <div class="image"></div>
      <app-scroll class="content" :handleScroll="handleScrollAction">
          <div></div>
          <div>
              <span class="iconfont icon-tianjia"></span>
          </div>
      </app-scroll>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
    data() {
        return {
            handleLoading:true //需要loading的配置
        }
    },
    computed: {
        ...mapState({
            singerImage:state=>state.singer.singerImage,
            hotSongs:state=>state.singer.hotSongs,
            loading:state=>state.singer.loading,
        
        })
    },
    methods: {
        handleScrollAction({y}){
            console.log(y);
        }
    },
    created() {
        // this.handleLoading = true;
        // console.log(this.$route.params.id);
        this.$store.dispatch('singer/requestDetailData',{id:this.$route.params.id})
    },

}
</script>

<style>

</style>