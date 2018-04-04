const index = (resolve) => {
	require.ensure(['../page/index'],()=>{
		resolve(require('../page/index'))
	},'index')
};
export default[
	{
        path : '/index',
		name: 'index',
        meta : {title : 'vConsole'},
        component :index
    },
	{
		path : '*',
		meta : {title : 'vConsole'},
		component :index
	}

]

