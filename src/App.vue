<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
html,body{
  background-color:#f2f3f4 ;
}

.page{
   position: absolute;
   top: 90px;
   left: 0;
   width: 100%;
   bottom: 0;
   background-color:#f2f3f4 ;
   // background-color: lawngreen;
   &.subPage{
     top:0;
     z-index:100
   }
}
@keyframes fly-in {
  0%{
   transform: rotate(30deg)  translateX(100%) ;
  }
  100%{
    transform: rotate(0deg)  translate(0%) ;
  }
  
}
.fly-in{
  transform-origin: right bottom;
  animation: fly-in 300ms ease-in;
}
@keyframes fly-out {
  0%{
      transform: rotate(0deg)  translate(0%) ;
  
  }
  100%{
     transform: rotate(30deg)  translateX(100%) ;
  }
  
}
.fly-out{
  transform-origin: right bottom;
  animation: fly-out 300ms ease-in;
}
</style>
