<template>
    <HomeCompo/>
    <SecondPage/>
</template>
<script>
import HomeCompo from './components/HomeCompo.vue';
import SecondPage from './SecondPage.vue';

export default{
    name:"MainCompo",
    components:{
        HomeCompo,SecondPage
    }
}
</script>
<style scoped>


</style>