<template>
    <div>
        <el-select placeholder="请选择" v-model="value"
                   @change="changeRole"
                   :loading="hasGet"
        >
            <el-option
                v-for="item,index in options"
                :key="index"
                :label="item.label"
                :value="item.value"
            >
            </el-option>
        </el-select>

        <el-table
            :data="tableData"
            fit
            class="tab-header"
            highlight-current-row
            style="width: 100%;margin-top: 20px;"
        >
            <el-table-column
                type="index"
            >
            </el-table-column>
            <el-table-column
                label="细分指标"
                prop="name"
            >
            </el-table-column>

            <el-table-column
                label="度量标准"
                prop="standard"
            >
            </el-table-column>

            <el-table-column
                label="权重（%）"
            >
               <template slot-scope="scope">
                    <el-button type="text" size="middle" @click="getPercent(scope)">权重占比</el-button>
               </template>
            </el-table-column>

            <el-table-column
                label="所占权重"
                prop="per"
            >

            </el-table-column>


            <el-table-column
                label="分值"
                prop="score"
            >
            </el-table-column>

            <el-table-column
                label="完成情况"
                prop="status"
            >
            </el-table-column>

            <el-table-column
                label="信息来源"
                prop="from"
            >
            </el-table-column>

            <el-table-column
                label="评分"
            >
                <template slot-scope="scope">
                    <el-button type="text" size="small" @click="makeMark(scope)">打分</el-button>
                </template>
            </el-table-column>

            <el-table-column
                label="本项得分"
                prop="getMark"
            >
            </el-table-column>
        </el-table>
        <el-dialog title="指标得分" :visible.sync="dialogTableVisible" width="1000px" @close="close_el1">
           <el-radio v-model="radio" v-for="item,index in percent" :label="item.percent">{{item.index}} {{item.content}} ({{item.percent}})</el-radio>
           <div slot="footer" class="dialog-footer">
               <el-button @click="dialogTableVisible = false">取 消</el-button>
               <el-button type="primary" @click="sureType">确 定</el-button>
           </div>
        </el-dialog>

        <el-dialog title="指标权占比" :visible.sync="dialog1TableVisible" @close="close_el2">
            <el-radio v-model="radio1" v-for="item,index in percent1" :label="item" @change="$index(index)">{{item}}</el-radio>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialog1TableVisible = false">取 消</el-button>
                <el-button type="primary" @click="sureType1">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				options:[
                    {
                    	value:'1',
                        label:'双皮奶'
                    },
					{
						value:'2',
						label:'穆森'
					},
					{
						value:'3',
						label:'森女'
					},
					{
						value:'4',
						label:'卡哇伊'
					},
					{
						value:'5',
						label:'斯巴鲁'
					}
                ],
                tableData:[
                    {
                    	name: "工作计划延期次数",
	                    standard: '0次',
                        score: 400,
                        originScore: '400',
                        status: '完成',
                        from: 'worktile',
                        getMark:'~',
                        per:'40%'
                    },
	                {
		                name: "产品会问题数量",
		                standard: '0个',
		                score: 150,
		                originScore: '150',
		                status: '完成',
		                from: '技术部',
		                getMark:'~',
		                per:'15%'
	                },
	                {
		                name: "测试BUG数量",
		                standard: '5个',
		                score: 150,
		                originScore: '150',
		                status: '完成',
		                from: '测试组',
		                getMark:'~',
		                per:'15%'
	                },
                    {
		                name: "线上BUG数量",
		                standard: '0个',
		                score: 300,
	                    originScore: '300',
		                status: '完成',
		                from: '钉钉反馈',
	                    getMark:'~',
	                    per:'30%'
	                }
                ],
                percent:[{
					index: 'A',
                    content: '优秀',
                    percent: '100%'
                },{
	                index: 'B',
	                content: '良好',
	                percent: '75%'
                },{
	                index: 'C',
	                content: '合格',
	                percent: '60%'
                },{
	                index: 'D',
	                content: '基本合格',
	                percent: '35%'
                },{
	                index: 'E',
	                content: '不合格',
	                percent: '0%'
                }],
				percent1:['10%', '20%', '30%', '40%', '50%', '60%', '70%', '80%', '90%', '100%'],
                signalRow:{},
                value: '',
                hasGet: true,
				radio:'1',
				radio1: '1',
				dialogTableVisible:false,
				dialog1TableVisible:false
			}
		},
        methods: {
	        single(signle) {
                console.info(signle)
            },
	        getIndex(index) {
	        	console.info(index)
            },
	        makeMark(scope) {
                this.$set(this.signalRow, 'index', scope.$index)
                this.$set(this.signalRow, 'row', scope.row)
                this.dialogTableVisible = true
            },
	        getPercent(scope) {
		        this.$set(this.signalRow, 'index', scope.$index)
		        this.$set(this.signalRow, 'row', scope.row)
		        this.dialog1TableVisible = true
            },
	        changeRole () {
	        	//做人与异步请求
	        	console.info(this.value)
            },
            sureType() {
	            this.signalRow.row.getMark = Number(this.radio.split('%')[0])/100 * this.signalRow.row.score
	            this.radio = '1'
	            this.dialogTableVisible = false
            },
	        sureType1() {
	        	let temp
		        this.signalRow.row.score = Number(this.radio1.split('%')[0])/100 * 1000
		        this.signalRow.row.per = this.radio1
                this.tableData.forEach(val => {
                    temp += val.score
                })
                if(temp > 1000) {
	        		alert('绩效权占比必须为100%')
                    return false
                }
		        this.radio1 = '1'
		        this.dialog1TableVisible = false
            },
	        close_el1() {
		        this.radio = '1'
            },
            close_el2() {
	            this.radio1 = '1'
            },
            $index(index) {
	        	console.info(index)
            }
        },
		created() {
            this.fetch('http://192.168.7.112:7899/dev_person')
                .then(res => {
                	console.info(res)
                })
			setTimeout(() => {
				this.hasGet = false
            },1500)
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>