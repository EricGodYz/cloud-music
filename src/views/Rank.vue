<template>
  <div id="rank" class="page">
      <app-scroll class="context">
        <rank-list :data="rank"/>
      </app-scroll>
      
  </div>
</template>

<script>
import {mapState} from 'vuex';
import RankList from '../components/Rank/rank-list'
export default {
  components:{
    RankList
  },
  computed: {
    ...mapState({
      // rank:(state)=>{console.log(state);},
      rank:(state)=>state.rank.rankList,
    })
  },

  created() {
    
    this.$store.dispatch('rank/requestRankList');
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#rank{
  .context{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
}

</style>