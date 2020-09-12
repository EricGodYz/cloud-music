<template>
  <div id="rankList">
      <ul class="official">
          <h3>官方榜</h3>
          <li v-for="item in data" :key="item.id">
              <img :src="item.coverImgUrl" alt="">
              <ul class="music">
                  <li v-for="(item) in item.tracks" :key="item.id">
                      {{item.first}}---{{item.second}}
                  </li>
              </ul>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        // 接受来自父组件的数据
        data:Array
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";
#rankList{
    width: 100%;
    .official{
        width: 100%;
        img{
            width: 60%;
            height: 100px;
        }
    }
}

</style>