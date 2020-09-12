import {SINGERS_LIST_API} from '../../api/url';

import http from '../../api/http';


export default{
    namespaced:true,
    state:{
        singers:[],

    },
    getters:{


    },
    mutations:{

        // 请求歌手的数据
        setSingers(state,payload){
            state.singers = payload;

        }

    },
    actions:{
        async requestSingersList(context){

            const {data:{artists}} = await http.get(SINGERS_LIST_API);
            console.log(artists);
            const newData = artists.map(({id,name,img1v1Url})=>({id,name,img1v1Url}))
            context.commit('setSingers',newData);
            
        }

    }
}