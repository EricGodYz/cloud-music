import { SINGERS_LIST_API } from '../../api/url';

import http from '../../api/http';


export default {
    namespaced: true,
    state: {
        //存储获取的数据
        singers: [],
        // 加载页面的loading值
        // 默认的值是false
        loading: false

    },

    mutations: {

        // Loading的状态设置
        setLoading(state, payload) {
            state.loading = payload;

        },
        // 请求歌手的数据
        setSingers(state, { data, reset }) {
            if (reset) {
                state.singers = data;    ///进行初始化赋值
            } else {
                state.singers = [...state.singers, ...data];
                console.log(state.singers);

            }


        }

    },
    actions: {
        async requestSingersList(context, payload) {

            // 刚开始的时候设置loading的值为true,意思是去加载数据,此时的值为true
            context.commit('setLoading', true);
            const { data: { artists } } = await http.get(SINGERS_LIST_API, payload);
            // console.log(artists);
            const result = artists.map(item => ({
                id: item.id,
                name: item.name,
                picUrl: item.picUrl + '?param=200x200',
            }));
            context.commit('setSingers', { data: result, reset: payload.offset === 0 });
            // console.log(payload.offset);
            // 请求完数据loading需要设置loading的值为false,关闭下拉加载或者上拉加载

            setTimeout(()=>{
                context.commit('setLoading', false);
            },2000)
           


        }

    }
}