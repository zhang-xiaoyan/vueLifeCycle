let _baseUrl = baseURL;
import axios from 'axios';

const _fetch = (url, method, data={}, commit=null) => {
	if (commit) commit('START_LOADING');
	let _url = _baseUrl + url;
	let promise = null;
	if(method == 'get'){
		promise = axios.get(_url, {
			params: data
		})
	}else if(method == 'post'){
		promise = axios.post(_url, data)
	}
	return promise.then((res) => {
		if (commit) commit('FINISH_LOADING')
		if (res.data.errCode == 200) {
			return Promise.resolve(res.data.data)
		}else{
			return Promise.reject(res.data)
		}
	}).catch((err)=>{
		if (commit) commit('FINISH_LOADING')
        return Promise.reject(err)
	})
};

//最近预约接口
export const getRecentlyOrders = ({commit}) => {
	return _fetch('order/queryOngoingOrders', 'get').then((json)=>{
		return Promise.resolve(json)
	}).catch((err)=>{
		return Promise.reject(err)
	})
}


