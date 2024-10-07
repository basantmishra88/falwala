<template>
    <div class="box">
        
        <slot name="apple"></slot>
        <slot name="mango"></slot>
        <slot name="tomato"></slot>
        <slot name="tamarind"></slot>
        <slot name="cabbage"></slot>
        <slot name="cauliflower"></slot>
        <slot name="sweet-potato"></slot>
        <slot name="lemon"></slot>

        <OrderNow :price="price"/>
    </div>
</template>
<script>
import OrderNow from './OrderNow.vue';

export default{
    name:"ProductCompo",
    props:{
        price:Number
    },
    components:{
        OrderNow,
    }
}
</script>
<style scoped>
.box{
    box-sizing: border-box;
    background-color: #F5F5F7;
    border-radius:  10px;
}
.box:hover{
    border: 1px solid #B7B7B7;
    box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;;
}
</style>