<template>
  <div>
  <ul class="header-ul">
    <li><router-link to="/layout/classify/tuijian">推荐</router-link></li>
    <li><router-link to="/layout/classify/yule">娱乐</router-link></li>
    <li><router-link to="/layout/classify/tiyu">体育</router-link></li>
    <li><router-link to="/layout/classify/junshi">军事</router-link></li>
    <li><router-link to="/layout/classify/guonei">国内</router-link></li>
    <li><router-link to="/layout/classify/guowai">国外</router-link></li>
  </ul>
    <div class="router">
      <router-view></router-view>
    </div>
    <Navs/>
  </div>
</template>
<script>
  import Navs from './nav.vue'
  import Banner from './banner.vue'
  export default{
    name: 'girl',
    data () {
      return {

      }
    },
    components: {
      Navs,
      Banner
    }

  }
</script>
<style scoped>
  .header-ul{
    display: flex;
    justify-content: space-around;
    background-color: darkorange;
  }
  .header-ul a{
    text-decoration: none;
    color: #FFFFFF;
  }
  .header-ul a:hover{
    color: #00d6b2;
  }
 .header-ul li{
   list-style: none;
   float:left;
 }
  .router{
    clear: both;
  }
</style>
