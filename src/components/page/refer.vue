<template>
   <div>
     <Banner/>
     <div v-for="arr in data1" class="menu">
       <div><img :src="arr.img"></div>
       <div>{{ arr.title }}</div>
     </div>
     <Navs/>
   </div>
</template>
<script>
  import Navs from './nav.vue'
  import Banner from './banner.vue'
  export default{
    name: 'boy',
    data () {
      return {
        data1: []
      }
    },
    components: {
      Navs,
      Banner
    },
   created() {
     this.$axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php')
       .then(e => {
          this.data1=e['data'].banner
     })
     .catch (e => {
       console.log(e)
     })
   }

  }
</script>
<style scoped>
  .menu{
    display: flex;
    justify-content:flex-start;
    align-items: center;
    margin-bottom: 10px;
  }
  .menu div:first-child img{
    height: 100px;
    width: 100px;
  }
</style>
