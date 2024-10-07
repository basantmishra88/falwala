<template>
    <div class="product-page ">
    <ContainerPage/>
    </div>
</template>
<script>
import ContainerPage from './components/ContainerPage.vue';

export default{
    name:"SecondPage",
    components:{
        ContainerPage,
    }
}
</script>
<style scoped>
.product-page{
    /*background-color: red;*/
    height: auto;
    width: 100%;
}
</style>