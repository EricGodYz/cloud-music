<template>
  <div id="singersList">
      <ul class="group">
          <h2>分类(默认热门)</h2>
          <li>华语男</li>
          <li>华语女</li>
          <li>华语组合</li>
          <li>欧美男</li>
          <li>欧美女</li>
      </ul>
      <ul class="letter">

      </ul>
      <ul class="singerlist">
          <li v-for="item in data" :key="item.id" class="singer-item">
              <img :src="item.img1v1Url" alt="singer-list">
              <p>{{item.name}}</p>
          </li>
      </ul>
  </div>
</template>

<script>
export default {
    props:{
        // 接受来自父组件的数据
        data:Array,
    }

}
</script>

<style lang="scss" scoped>
@import "../../assets/global-style.scss";

#singersList{
    width: 100%;
    .singerlist{
        width: 100%;
        .singer-item{
            width: 60%;
            img{
                width: 100%;
                height: 100px;
            }
        }
    }
}

</style>