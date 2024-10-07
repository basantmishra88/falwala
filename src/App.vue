<template>
  <NavbarComp/>
  <router-view></router-view>
  <!-- <MainCompo/> -->
  <FooterCompo/>
</template>
<script>
import FooterCompo from './components/FooterCompo.vue';
import NavbarComp from './components/NavbarComp.vue';
// import MainCompo from './MainCompo.vue';

export default{
  name:"App",
  components:{
NavbarComp,FooterCompo
  }
}
</script>
<style>

</style>