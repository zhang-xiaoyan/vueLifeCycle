import store from '../common/store'
import {
	START_LOADING,
	FINISH_LOADING,
}
from './mutation-type'
const  mutations={
	//loading开始
	[START_LOADING](state){
		state.asyncLoading = true
	},
	//loading结束
	[FINISH_LOADING](state){
		state.asyncLoading = false
	},
}
export default mutations
