<template>
    <div>
        <el-container>
            <el-header style="height: 20vh">{{title}}</el-header>
            <el-main>
                <el-row>
                    <el-col style="margin-top: 20px" :span="7" :offset="8">
                        <el-form ref="form" :model="form" :rules='rules' status-icon label-width="80px">
                            <el-form-item prop="username" style="margin-bottom: 30px">
                                <el-input type="text" v-model="form.username">
                                    <template slot="prepend">
                                        <i>账号</i>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item prop="password">
                                <el-input type="password" v-model="form.password">
                                    <template slot="prepend">
                                        <i>密码</i>
                                    </template>
                                </el-input>
                            </el-form-item>
                            <el-form-item>
                                <el-button type="primary" :loading="ing" @click="submit" style="width: 160px">登录</el-button>
                            </el-form-item>
                        </el-form>
                    </el-col>
                </el-row>
            </el-main>
        </el-container>
    </div>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
                title: '同步课堂-管理平台',
				ing: false,
                form: {
                	username: '',
                    password: ''
                },
				rules: {
					username: [
						{ required: true, message: '请输入账号', trigger: 'blur' }
                    ],
                    password: [
	                    { required: true, message: '请输入密码', trigger: 'blur' }
                    ]
                }
            }
		},
        methods:{
	        submit() {
	        	this.$refs['form'].validate(pass => {
	        		if(!pass) return false
                    this.ing = true
                    this.fetch.post('/api/login ', this.form)
                        .then(res => {
                        	console.info(res)
                        	if(res.data.response !== 'ok') {
		                        this.open()
                            }else {
		                        this.$router.replace({path: '/'})
                            }
                        })
                        .catch(error => {
                        	console.info(error)
                        })
                        .finally(() => {this.ing = false})
                })
            },
	        open() {
		        this.$alert('账号密码错误,请联系管理员', '', {
		        	confirmButtonText: '确定',
			        center:true,
			        roundButton:true,
                    callback: action => {
		        		console.info(action)
	                    this.$refs['form'].resetFields();
                    }
                })
	        }
        },
		created() {
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .el-container {
        height: 100vh;
    }
    .el-header {
        background-color: #B3C0D1;
        color: #333;
        line-height: 20vh;
        text-align: center;
        font-size: 40px;
    }

    .el-main {
        background-color: #E9EEF3;
        color: #333;
        text-align: center;
        height: 80vh;
    }

    body > .el-container {
        margin-bottom: 40px;
    }
    .el-row {
        margin-bottom: 20px;
        &:last-child {
            margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>