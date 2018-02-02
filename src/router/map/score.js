/**
 * Created by Administrator on 2018/1/11.
 */
const month = resolve => {
	require(['components/score/Month'], resolve)
}

const quarter = resolve => {
	require(['components/score/Quarter'], resolve)
}

const mark = resolve => {
	require(['components/score/Mark'], resolve)
}

const router = [
	{
		path: 'score/month',
		component: month
	},
	{
		path: 'score/quarter',
		component: quarter
	},
	{
		path: 'score/mark',
		component: mark
	}
]

export default router