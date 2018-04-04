import index from '../page/index.vue'

export default[
	{
        path : '/index',
        component :index,
        meta : {
            title : 'vConsole'
        }
    },
	{
		path : '*',
		component :index,
		meta : {
			title : 'vConsole'
		},
	}
]
