<template>
<div>
    <el-table :data="tableData" border style="width: 100%" :header-row-style="tableHeaderStyleFunc">
        <el-table-column type="index" label="序号" header-align="center" align="center" width="50">
        </el-table-column>
        <el-table-column prop="title" label="title" width="180">
        </el-table-column>
        <el-table-column prop="text" label="text">
        </el-table-column>
        <el-table-column prop="type" label="type">
        </el-table-column>
        <el-table-column prop="source" label="source">
        </el-table-column>
        <el-table-column prop="author" label="author">
        </el-table-column>
        <el-table-column prop="statue" label="statue">
        </el-table-column>
        <el-table-column prop="createtime" label="createtime">
        </el-table-column>
    </el-table>
    <div class="block">
        <el-pagination layout="prev, pager, next" :total="50">
        </el-pagination>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [],//表格数据
            tableHeaderStyle: [{
                'line-height': '30px'
            }]
        }
    },
    methods: {
        tableHeaderStyleFunc() {
            return this.tableHeaderStyle
        }
    },
    mounted() {
        //读取skybook列表
        this.$http.post("http://localhost:1656/skybook/getAllSkyBook", {}, {
                emulateJSON: false
            })
            .then(res => {
                // console.log(res.body.result);
                this.tableData = res.body.result;
            })

    }
}
</script>

<style>

</style>
