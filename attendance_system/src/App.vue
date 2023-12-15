<template>
   <div>
    <exchange-navbar
      :title="brandName"
      :items="menuItems"
    />
    <router-view />
  </div>
</template>

<script>

import ExchangeNavbar from "./components/NavbarPage.vue";
export default {
  name: 'App',
  components: {
    ExchangeNavbar
  },
  data() {
    return {
      brandName: "AttendanceX",
      menuItems: [
        { text: "Trang chủ", link: "/" },
        { text: "Giới thiệu", link: "/about" },
        
       
      ],
    }
  }
   

}
</script>

<style lang="scss">
@import 'assets/styles/variables.scss';
  @import '~bulma/bulma.sass';
  @import 'assets/styles/main.scss';
  
  
  
</style>