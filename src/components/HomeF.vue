<template>
<div class="footer-for-home">
<div class="one">50K+ customer</div>
<div class="two">12K+ seller</div>
<div class="three">2K+ investors</div>
</div>
</template>
<script>
export default{
    name:"HomeF"
}
</script>
<style scoped>
.footer-for-home{
    display: flex;
    position:relative;
    top: 34px;
    height: 60px;
    width: 100%;
}
.footer-for-home div{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #ffff;
    font-weight: 500;
    font-size: 30px;
}
.one{
    width: 33.33%;
    background-color: #3AA6B9;
}
.two{
    width: 33.33%;
    background-color: #222;
}
.three{
    width: 33.33%;
    background-color: #FF4191;
}

@media only screen and (max-width: 600px) {
.footer-for-home{
    margin-top: 20px;
}
.footer-for-home div{
 font-size: 15px;
}

}

</style>