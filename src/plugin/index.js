import AppSroll from '../components/common/app-scroll.vue';
import VueLazyload from 'vue-lazyload'
import InfiniteScroll from '../components/common/infinite-scroll'
import './style.scss'
export default {
    // 定义公共组件导入的地方
    install(Vue) {

        // 图片懒加载的应用
        Vue.use(VueLazyload, {
            preLoad: 1.3,
            error: '/img/music.png',
            loading: '/img/music.png',
            attempt: 1
        })

        // 滚动组件的注册
        Vue.component("app-scroll", AppSroll);
        Vue.component("infinite-scroll", InfiniteScroll);



        // 全局的过滤器的使用
        Vue.filter("formatter", (count, limit) => {
            if (count < 10000) {
              //低于一万
              return count;
            } else if (count < 10000 * 10000) {
              //低于一亿
              if(typeof limit === 'number'){
                const tmp = Math.floor(count / (10000 / Math.pow(10, limit)));
                return tmp / Math.pow(10, limit) + "万";
              }else{
                return Math.floor(count / 10000) + "万";
              }
            } else {
              //大于一亿
              if(typeof limit === 'number'){
                const tmp = Math.floor(count / ( 10000 * 10000 / Math.pow(10, limit)));
                return tmp / Math.pow(10, limit) + "亿";
              }else{
                return Math.floor(count / 10000 / 10000) + "亿";
              }
            }
          });


          // loadin加载指示器
          const Loading =  Vue.extend({
            render() {
              return (
                <div id="loading">
                  <span></span>
                  <span></span>
                </div>
              );
            },
          });

          // 进行全局的注入
          Vue.mixin({
            watch: {
              loading(newVal){
                if(this.handleLoading){
                  // 需要展示loading
                  if(newVal){
                    this.$showLoading();
                    console.log('show');
                  }else{
                    this.$hideLoading();
                    console.log('hide');
                  }
                }
                
                
              }
            },
            methods: {
              $showLoading(){
                if (this.$isLoading) {
                  return;
                }
                // 构建loading载体
                const wrap = (this._modalDOM = document.createElement("div"));
                wrap.setAttribute("id", "modal-wrap");
                const modal = document.createElement("div");
                modal.setAttribute("id", "modal");
                document.documentElement.appendChild(wrap);
                wrap.appendChild(modal);
                // 创建loading
                this._loadingCom = new Loading();
                // 挂载loading
                this._loadingCom.$mount("#modal");
      
                this.$isLoading = true;
              },
              $hideLoading(){
                if (this.$isLoading) {
                  // 销毁loading
                  this._loadingCom.$destroy();
                  // 删除loading载体
                  document.documentElement.removeChild(this._modalDOM);
                  this.$isLoading = false;
                }
              }
            },
         
          });

    }
}