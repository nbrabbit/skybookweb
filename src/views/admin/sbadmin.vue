<template>
<div>
    <el-container>
        <el-header>SkyBook Admin</el-header>
        <el-container>
            <el-aside width="200px">
                <el-row class="tac">
                    <el-menu default-active="2" class="el-menu-vertical-demo">
                        <el-menu-item index="1">
                            <i class="el-icon-menu"></i>
                            <span slot="title"><router-link to="/sbadmin/sbadd">天书添加</router-link></span>
                        </el-menu-item>
                        <el-menu-item index="2">
                            <i class="el-icon-setting"></i>
                            <span slot="title"><router-link to="/sbadmin/sblist">天书列表</router-link></span>
                        </el-menu-item>
                    </el-menu>
                </el-row>
            </el-aside>
            <el-main>
                <router-view />
            </el-main>
        </el-container>
        <el-footer>Footer</el-footer>
    </el-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            userid: this.$route.params.userid
        };
    }
};
</script>

<style>
.el-header,
.el-footer {
    background-color: #b3c0d1;
    color: #333;
    text-align: center;
    line-height: 60px;
}

.el-aside {
    background-color: #d3dce6;
    color: #333;
    text-align: center;
    line-height: 400px;
}

.el-main {
    background-color: #e9eef3;
    color: #333;
    text-align: center;
    line-height: 600px;
}

body>.el-container {
    margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
    line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
    line-height: 320px;
}
</style>
