<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-3 green">
                <ProductCompo price="150">
                    <template v-slot:apple>
                        <img src="../assets/vege/beet.png" alt="apple">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="120">
                    <template v-slot:mango>
                        <img src="../assets/vege/brinjal.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="70">
                    <template v-slot:tomato>
                        <img src="../assets/all/tomato.png" alt="mango">
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
                        <img src="../assets/all/cabbage.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="60">
                    <template v-slot:cauliflower>
                        <img src="../assets/all/cauliflower.png" alt="mango">
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
                        <img src="../assets/all/lemon.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
        </div>
        <div class="row">
            <div class="col-md-3 green">
                <ProductCompo price="50">
                    <template v-slot:cabbage>
                        <img src="../assets/vege/carrot.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="60">
                    <template v-slot:cauliflower>
                        <img src="../assets/vege/chili.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="140">
                    <template v-slot:sweet-potato>
                        <img src="../assets/vege/garlic.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
            <div class="col-md-3 green">
                <ProductCompo price="200">
                    <template v-slot:lemon>
                        <img src="../assets/vege/onion.png" alt="mango">
                    </template>
                </ProductCompo>
            </div>
        </div>
    </div>
    </template>
    <script>
    import ProductCompo from './ProductCompo.vue';
    
    export default{
        name:"VegePage",
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