<template>
  <div class="global">
    <h3 class="title">官方榜</h3>
    <ul class="list">
      <li class="item" v-for="item in data" :key="item.id" @click="goSongListPageAction(item.id)">
        <div class="image">
          <img v-lazy="item.coverImgUrl" alt />
          <span>{{item.update}}</span>
        </div>
       
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    data: Array,
  },
  methods: {
      goSongListPageAction(id){
          this.$router.push({name:'rank-list' ,params:{id}});
      }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/global-style.scss";
.global {
  padding: 5px;
}
.title {
  font-size: 14px;
  font-weight: 700;
  padding: 10px 0;
}
.list{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    

}
.item {
  width: 32%;
  padding: 5px 0;
  display: flex;
  border-bottom: 1px solid $border-color;
  .image {
    width: 100%;
    height: 100%;
    // padding: 3px;
    border-radius: 6px;
    position: relative;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
    }
    span {
      box-sizing: border-box;
      position: absolute;
      padding: 10px;
      left: 0;
      bottom: 0;
      color: $font-color-light;
      font-size: $font-size-s;
      width: 100%;
      height: 30%;
      background-image: linear-gradient(rgba(255, 255, 255, 0), rgba(110, 110, 110, 0.4));
    }
  }
  
}
</style>