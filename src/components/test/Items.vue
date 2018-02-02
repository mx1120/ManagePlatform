<template>
    <div class="main" v-loading="loading" element-loading-text="拼命加载中">
        <el-table :data="tableData" boder fit highlight-current-row style="width: 100%">
            <el-table-column fixed prop="name" label="项目名称"  align="center" label-class-name="name"></el-table-column>
            <el-table-column fixed prop="date" label="开发时间"  align="center" label-class-name="data"></el-table-column>
            <el-table-column fixed prop="manager" label="项目负责人"  align="center" label-class-name="manager"></el-table-column>
            <el-table-column show-overflow-tooltip fixed prop="developer" label="开着人员"  align="center" label-class-name="developer"></el-table-column>
            <el-table-column fixed label="操作" width="100">
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="detail">查看</el-button>
                </template>
            </el-table-column>
        </el-table>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				tableData: [{
					date: '2016-05-03',
					name: '双旦活动',
					manager: '凹凸曼',
					developer: '怪兽,怪兽,怪兽怪兽，怪兽怪兽',
                    tag: '英语'
				},{
					date: '2016-05-01',
					name: '每日任务一期',
					manager: '凹凸曼',
					developer: '怪兽',
					tag: '英语'
				},{
					date: '2016-05-03',
					name: '双旦活动',
					manager: '凹凸曼',
					developer: '怪兽',
					tag: '数学'
				},{
					date: '2016-05-02',
					name: '双旦活动',
					manager: '凹凸曼',
					developer: '怪兽',
					tag: '数学'
				}],
                loading: false
			}
		},
        methods: {
	        detail() {
				alert(1)
            }
        },
		created() {
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .main {
        height: 100%;
        width: 100%;
    }
</style>