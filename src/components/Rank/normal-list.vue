<template>
  <div class="normal">
    <h3 class="title">官方榜</h3>
    <ul class="list">
      <li class="item" v-for="item in data" :key="item.id" @click="goSongListPageAction(item.id)">
        <div class="image">
          <img v-lazy="item.coverImgUrl" alt />
          <span>{{item.update}}</span>
        </div>
        <ul class="song-list">
          <li class="song-item" v-for="(song,index) in item.tracks" :key="song.id">
            <div class="index">{{index+1}}</div>
            <div class="name">
                <span>{{song.first}}</span>
                <span>-</span>
                <span>{{song.second}}</span>
            </div>
          </li>
        </ul>
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
          this.$router.push({name:'rank-list',params:{id}});
      }
  },
};
</script>

<style scoped lang="scss">
@import "../../assets/global-style.scss";
.normal {
  padding: 5px;
}
.title {
  font-size: 14px;
  font-weight: 700;
  padding: 10px 0;
}
.item {
  padding: 5px 0;
  display: flex;
  border-bottom: 1px solid $border-color;
  .image {
    width: 100px;
    height: 100px;
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
  .song-list {
      display: flex;
      flex: 1;
      flex-direction: column;
      padding: 5px 10px;
      justify-content: space-around;
      .song-item{
          display: flex;
          color: #888;
          font-size: $font-size-s;
          .index{
              margin-right: 4px;
          }
      }
  }
}
</style>