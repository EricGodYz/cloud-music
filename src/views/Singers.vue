<template>
<div id="singers" class="page">
  <app-scroll class="content">
    <singers-list  :data="singer"/>
  </app-scroll>
  
</div>
</template>

<script>
import {mapState} from 'vuex'
import SingersList from '../components/singers/singers-list'
export default {
  components:{
    SingersList
  },
  computed: {
    ...mapState({
      // singer:(state) => {console.log(state);},
      singer:(state) => state.singers.singers,
    })
  },
  created() {
    this.$store.dispatch('singers/requestSingersList');
  },

}
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
#singers{
  .content{
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
}
</style>