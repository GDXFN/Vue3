<template>
    <div>
        <p>你的性别是：{{this.$store.state.user[0].gender}}</p>
        <p>你的爱好是：{{this.$store.state.user[1].hobby}}</p>
        <p>个人简介：{{this.$store.state.user[2].about}}</p>
    </div>
</template>

<script>
    export default {
        name: "Page4",
    }
</script>

<style scoped>

</style>