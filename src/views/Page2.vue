<template>
    <div>
        <p>请选择你的爱好</p>
        <input type="checkbox" name="hobby" v-model="hobby" value="看书"/>看书
        <input type="checkbox" name="hobby" v-model="hobby" value="游泳"/>游泳
        <input type="checkbox" name="hobby" v-model="hobby" value="跑步"/>跑步
        <input type="checkbox" name="hobby" v-model="hobby" value="看电影"/>看电影
        <input type="checkbox" name="hobby" v-model="hobby" value="听音乐"/>听音乐
        <br>
        <button @click="prev()">上一步</button>
        <button @click="doWrite()">下一步</button>
        <button @click="Myreset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "page2",
        data(){
            return{
                hobby:[],
            }
        },
        methods:{
            doWrite(){
                this.$store.commit("addData",{hobby:this.hobby});
                this.$router.push("/Page3");
            },
            prev(){
                this.$router.push("/Page1")
            },
            Myreset(){
                this.hobby=[]
            }
        }
    }
</script>

<style scoped>

</style>