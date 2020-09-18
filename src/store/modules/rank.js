import {RANK_LIST_API} from '../../api/url';

import http from '../../api/http';

export default{

 
    namespaced: true,
    // 处理数据
    state:{
        // 数据的存储
        // 官方榜
        topList:[],
        // 全球榜
        list:[]

    },

    // 函数同步
    mutations:{
        // 进行数据的赋值
        setRankData(state,payload){
            state.topList = payload.topList;

        }
    },


    // 异步操作
    actions:{
        async requestRankList(context){
            const {data:{list}} = await http.get(RANK_LIST_API);
            const toplist = list.splice(0,4);
            // console.log(toplist);
            // console.log(list);
            toplist = toplist.map((item)=>({
                
            }))
           

        }
    }

}