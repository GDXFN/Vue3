<template>
    <div>
        <p>3.请介绍一下你自己</p>
        <textarea v-model="about"></textarea><br>
        <button @click="prev()">上一步</button>
        <button @click="doWrite()">提交</button>
        <button @click="Myreset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Page3",
        data(){
            return{
                about:''
            }
        },
        methods:{
            doWrite(){
                this.$store.commit("addData",{about:this.about});
                this.$router.push("/Page4");
            },
            prev(){
                this.$router.push("/Page2")
            },
            Myreset(){
                this.about=''
            }
        }
    }
</script>

<style scoped>

</style>