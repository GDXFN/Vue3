<template>
    <div>
        <p>1.请问你的性别是：</p>
        <input type="radio" name="group" value="男" v-model="gender"/>男
        <input type="radio" name="group" value="女" v-model="gender"/>女
        <input type="radio" name="group" value="保密" v-model="gender"/>保密
        <br>
        <button @click="doWrite()">下一步</button>
        <button @click="Myreset()">重置</button>
    </div>
</template>

<script>
    export default {
        name: "Page1",
        data(){
            return{
                gender:''
            }
        },
        methods:{
            doWrite(){
                this.$store.commit("addData",{gender:this.gender});
                this.$router.push("/Page2");
            },
            Myreset(){
                this.gender=''
            }
        }
    }

</script>

<style scoped>

</style>