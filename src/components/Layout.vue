<template>
    <el-container>
        <el-aside width="180px" style="background: #D3DCE6;height: 100vh" class="left-table">
            <el-row style="height: 5vh;box-sizing: border-box;padding: 10px;background: #DCDFE6">
                <el-col :span="24" style="height: 100%;border-radius: 5px;display: flex;align-items: center;justify-content: space-around;background: #D3DCE6">
                    <span class="iconfont icon-geren" style="font-size: 24px;margin-left: 20px;display: inline-block;flex-grow: 1"></span>
                    <i style="flex-grow: 3;font-size: 20px;width: 40px;">佐伊</i>
                </el-col>
            </el-row>
            <el-menu default-active="1"
                     :unique-opened="true"
                     background-color="#D3DCE6"
                     text-color="#000"
                     active-text-color="#20a0ff"
                     style="border: none"
                     :router="true"
                >
                <el-submenu :index="item.key" v-for="item in menus" :key="item.key">
                    <template slot="title">
                        <i :class="['iconfont', item.icon]"></i>
                        <span>{{item.desc}}</span>
                    </template>
                    <el-menu-item :index="sub.key" v-for="sub in item.sub" :key="sub.key">{{sub.desc}}</el-menu-item>
                </el-submenu>
            </el-menu>
        </el-aside>
        <el-container>
            <el-header class="header" style="height: 5vh;line-height: 5vh">欢迎{{name}}登录！<span class="icon"></span></el-header>
            <el-main>
                <router-view/>
            </el-main>
            <el-footer style="line-height: 60px;text-align: center; color: #909399;font-size: 14px">Design by Mr.meng and Mr.wang</el-footer>
        </el-container>
    </el-container>
</template>

<script type="text/ecmascript-6">
	export default {
		data() {
			return {
				name: '凹凸曼',
				menus: [
                    {
                        key: '1', desc: '测试用例', icon:'icon-xitongceshiyongli', sub:[
                        	{key: '/test/items', desc: '测试用例'},
                        	{key: '/test/developers', desc: '开发自测'},
                        ]
                    },
					{
						key: '2', desc: '月度绩效', icon:'icon-jixiaokaoping', sub:[
                            {key: '/score/month', desc: '月绩效'},
                            {key: '/score/quarter', desc: '季度绩效'},
                            {key: '/score/mark', desc: '绩效打分'}
					    ]
					},
					{
						key: '3', desc: '文件上传', icon:'icon-wenjianshangchuan', sub:[
                            {key: '/upload/test', desc: '测试用例上传'},
                            {key: '/upload/month_score', desc: '月绩效上传'},
                            {key: '/upload/quarter_score', desc: '季度绩效上传'},
					    ]
					}
                ]
            }
		}
	}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .header {
        text-align: center;
        height: 30px;
        line-height: 60px;
        background: #DCDFE6;
        position: relative;
        .icon {
            position: absolute;
            left: 0;
            top: 0;
        }
    }
    .left-table {
        height: 700px;
    }
    .tab {
        overflow: hidden;
    }
</style>