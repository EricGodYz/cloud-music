<template>
  <div class="page subPage">
    <list-detail-header  :opacity="opacity"/>
    <app-scroll class="content" v-if="!loading" :handleScroll="handleScrollAction">
      <!--两个子组件自己去仓库拿数据 -->
      <list-detail-top/>
      <song-list />
    </app-scroll>
    <div class="content" v-else></div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import SongList from "../components/song-list/song-list";
import listDetailTop from '../components/song-list/list-detail-top';
import ListDetailHeader from '../components/song-list/list-detail-header';
export default {
  components: {
    SongList,
    listDetailTop,
    ListDetailHeader
  },
  data() {
    return {
      opacity: 0,
      // showTitle:false,
    };
  },
  computed: {
    ...mapState({
      loading:(state) => state.songList.loading,
    }),
   
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
  
  },
  created() {
    console.log(this.$route.params.id);
    this.$store.dispatch("songList/requestListDetail", {
      id: this.$route.params.id,
    });
  },
};
</script>

<style scoped lang="scss">




.content {
  width: 100%;
  height: 100%;
  // background-color: $background-color;
}

</style>