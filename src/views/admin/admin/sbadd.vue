<template>
<div class="pageContainer">
    <el-form ref="form" :model="newskybook" label-width="80px">
        <el-form-item label="title">
            <el-input v-model="form.title"></el-input>
        </el-form-item>
        <el-form-item label="text">
            <el-input v-model="form.text"></el-input>
        </el-form-item>
        <el-form-item label="source">
            <el-input v-model="form.source"></el-input>
        </el-form-item>
        <el-form-item label="author">
            <el-input type="textarea" :rows="7" v-model="form.author"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button icon="el-icon-circle-check" type="primary" @click="onsubmit">save</el-button>
            <el-button icon="el-icon-circle-close">clear</el-button>
        </el-form-item>
    </el-form>
</div>
</template>

<script>
export default {
    data() {
        return {
            newskybook: {
                title: "",
                text: "",
                source: "",
                author: ""
            }
        };
    },
    methods: {
        onsubmit() {
            console.log(this.newskybook);
            this.$http.post("http://localhost:1656/skybook/addSkyBook", newskybook, {
                    emulateJSON: false
                })
                .then(res => {
                    console.log(res);
                })
        }
    }
};
</script>

<style>
.pageContainer {
    height: 600px;
}
</style>
