<template>
  <div id="home">
      <header class="header">
          <span class="iconfont icon-caidan"></span>
          <span>云音乐</span>
          <span class="iconfont icon-41"></span>
      </header>
      <nav class="list">
         <router-link class="list-item" to="/recommend">
            <span>推荐</span>
         </router-link>
         <router-link class="list-item"  to="/singers">
            <span>歌手</span>
        </router-link>
         <router-link class="list-item"  to="/rank">
            <span>排行榜</span>
         </router-link>
      
      </nav>
      <keep-alive>
          <router-view/>
      </keep-alive>
     
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
@import "../assets/global-style.scss";
.header{
  width:100%;
  height: 50px;
  padding: 5px 10px;
  display: flex;
  background-color: $theme-color;
  box-sizing: border-box;
  justify-content: space-between;
  align-content: center;
  span{
    line-height: 40px;
    font-size: 20px;
    color:$font-color-light ;
    &.iconfont{
       font-size: 25px;
    }
  }

}

.list{
   width: 100%;
   height: 40px;
   display: flex;
   justify-content: space-around;
   align-items: center;
   box-sizing: border-box;
   background-color: $theme-color;
   .list-item{
      flex: 1;
      height: 40px;
      line-height: 40px;
      text-align: center;
      &.router-link-active{
         // font: 700;
         span{
            border-bottom:2px solid #fff ;
         }
         
      }
      span{
         font-size:$font-size-m ;
         padding: 3px 0;
         color:$font-color-light ;
      }
   }
}

</style>