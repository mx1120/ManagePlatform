/**
 * Created by Administrator on 2018/1/11.
 */
const items = resolve => {
	require(['components/test/Items'], resolve)
}

const developers = resolve => {
	require(['components/test/Developers'], resolve)
}

const router = [
	{
		path: 'test/items',
		component: items,
		meta: {
			permission: 'view'
		}
	},
	{
		path: 'test/developers',
		component: developers,
		meta: {
			permission: 'operation'
		}
	}
]

export default router