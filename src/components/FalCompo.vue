<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 green">
                <ProductCompo price="150">
                    <template v-slot:apple>
                        <img src="../assets/all/apple.png" alt="apple">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="120">
                    <template v-slot:mango>
                        <img src="../assets/all/mango.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="70">
                    <template v-slot:tomato>
                        <img src="../assets/fruits/banana.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="300">
                    <template v-slot:tamarind>
                        <img src="../assets/all/tamarind.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 green">
                <ProductCompo price="50">
                    <template v-slot:cabbage>
                        <img src="../assets/fruits/black-grapes.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="60">
                    <template v-slot:cauliflower>
                        <img src="../assets/fruits/colonut.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="140">
                    <template v-slot:sweet-potato>
                        <img src="../assets/all/sweet-potato.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="200">
                    <template v-slot:lemon>
                        <img src="../assets/fruits/date.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 green">
                <ProductCompo price="150">
                    <template v-slot:apple>
                        <img src="../assets/fruits/grapes.png" alt="apple">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="120">
                    <template v-slot:mango>
                        <img src="../assets/fruits/guava.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="70">
                    <template v-slot:tomato>
                        <img src="../assets/fruits/pineApple.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="300">
                    <template v-slot:tamarind>
                        <img src="../assets/fruits/watermelon.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
        </div>
    </div>
    </template>
    <script>
    import ProductCompo from './ProductCompo.vue';
    
    export default{
        name:"FalCompo",
        components:{
            ProductCompo
        }
    }
    </script>
    <style scoped>
    .container-fluid{
        margin-top: 45px;
        box-sizing: border-box;
    }
    
    .green{
        /*border: 1px solid black;*/
        border-radius: 10px;
        box-sizing: border-box;
        width: 25%;
        height: 350px;
        margin: 10px auto;
        /*background-color: #ffff;*/
    }
    img{
        width: 100%;
        height: 250px;
    }
    @media only screen and (max-width: 600px) {
        .green{
            box-sizing: border-box;
            margin: 0px auto;
            width: 50%;
            height: 250px;
        }
        img{
            width: 100%;
            height: 150px;
        }
    }
    </style>