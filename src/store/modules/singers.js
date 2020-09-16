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
        setSingers(state,{data}){
            state.singers = data;

        }

    },
    actions:{
        async requestSingersList(context,payload){
            const {data:{artists}} = await http.get(SINGERS_LIST_API,payload);
            // console.log(artists);
            const result = artists.map(item =>({
                id:item.id,
                name:item.name,
                picUrl:item.picUrl + '?param=200x200',
            }));
            context.commit('setSingers',{data:result});
            
        }

    }
}