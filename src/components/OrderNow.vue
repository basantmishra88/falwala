<template>
   <div class="mt-4">
    <p class="price m-0">price: {{price}}<span>&#8377;</span> per Kg</p>
    <div>
        <button class="order btn btn-primary">Order Now</button>
      </div>
   </div>
</template>
<script>
export default{
    name:"OrderNow",
    props:{
        price:Number
    }
}
</script>
<style scoped>
.price{
    text-align: center;
}
.btn{
    display: block;
    width: 100%;
    border-radius: 0 0 8px 8px;
}
.btn:hover{
    background-color: black;
    border: none;
}
</style>