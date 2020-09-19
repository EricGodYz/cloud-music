<template>
  <div>
    <div id="rank" class="page">
      <app-scroll class="context">
        <normal-list :data="toplist" />
        <global-list :data="list" />
      </app-scroll>
    </div>
    <transition enter-active-class="fly-in" leave-active-class="fly-out">
      <router-view />
    </transition>
  </div>
</template>

<script>
import { mapState } from "vuex";
import normalList from "../components/Rank/normal-list";
import globalList from "../components/Rank/global-list";
export default {
  data() {
    return {
      handleLoading:true,  //需要loading处理
    }
  },
  components: {
    normalList,
    globalList,
  },
  computed: {
    ...mapState({
      toplist: (state) => state.rank.topList,
      list: (state) => state.rank.list,
      loading:(state)=>state.rank.loading,
    }),
  },
  created() {
    this.$store.dispatch("rank/requestRankList");
  },
};
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";

.context {
  width: 100%;
  height: 100%;
  font-size: 20px;
}
</style>