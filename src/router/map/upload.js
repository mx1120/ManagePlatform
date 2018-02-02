/**
 * Created by Administrator on 2018/1/11.
 */
const monthScore = resolve => {
	require(['components/upload/MonthScore'], resolve)
}

const quarterScore = resolve => {
	require(['components/upload/QuarterScore'], resolve)
}

const test = resolve => {
	require(['components/upload/Test'], resolve)
}

const router = [
	{
		path: 'upload/test',
		component: test,
		meta: {
			permission: 'view'
		}
	},
	{
		path: 'upload/month_score',
		component: monthScore,
		meta: {
			permission: 'view'
		}
	},
	{
		path: 'upload/quarter_score',
		component: quarterScore,
		meta: {
			permission: 'view'
		}
	}
]

export default router