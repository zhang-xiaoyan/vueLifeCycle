import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutation'
import store from '../common/store'

Vue.use(Vuex)
let state = {
	//异步加载loading
	asyncLoading : false
}
export default new Vuex.Store({
	state,
	actions,
	getters,
	mutations
})
