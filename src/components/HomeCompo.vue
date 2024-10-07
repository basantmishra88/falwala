<template>
    <div class="main">
    </div>
    <div>
        <img src="../assets/pn1.png" alt="" class="stra-berry"> 
        <div class="foods">
            <h1 class="or-foods"><span>Organic Foods </span>at Your</h1>
            <h1 class="some">Door in some times.</h1>
            <div>
                <button type="button" class="btn btn-primary">Start</button>
                <button type="button" class="btn btn-dark join">Join now</button>
            </div>
        </div>
        <div class="fooods">
            <HomeF/>
        </div>
        
    </div>
</template>
<script>
import HomeF from './HomeF.vue';

export default {
    name: "HomeCompo",
    components:{
        HomeF
    }
}
</script>
<style scoped>
.main{
    box-sizing: border-box;
    z-index: -1;
    width: 100%;
    height: 100vh;
    position: absolute;
    background-image: url(/public/two.jpg);
    background-size: cover;
}
.apple img{
    width: 250px;
    height: 200px;
}
.main-text {
    position: relative;
}
.stra-berry{
    width: 300px;
    height: 300px;
    margin-top: 50px;
}
.foods{
    font-weight: 800;
    margin-left: 40px;
}
.or-foods span{
    color: green;
}
.btn{
    width: 200px;
}
.join{
    margin-left: 30px;
}

@media only screen and (max-width: 600px) {
    .main{
        height: auto;
    }
    .some{
        text-align: center;
    }
    .join{
        margin: 0;
    }
    .foods{
        margin-top: 20px;
        margin-right: 40px;
    }
   .foods button{
    display: block;
    width: 100%;
    margin: 20px  0;
   }
}

</style>