import {RANK_LIST_API} from '../../api/url';

import http from '../../api/http';

export default{

    // namespaced:true,
    namespaced: true,
    // 处理数据
    state:{
        // 数据的存储
        rankList:[],

    },

    // 函数同步
    mutations:{
        // 进行数据的赋值
        setRank(state,payload){
            state.rankList = payload;

        }
    },


    // 异步操作
    actions:{
        async requestRankList(context){
            const {data:{list}} = await http.get(RANK_LIST_API);
            console.log(list);
            const newData = list.map(({id,name,coverImgUrl,tracks})=>({id,name,coverImgUrl,tracks}));
            context.commit('setRank',newData);

        }
    }

}