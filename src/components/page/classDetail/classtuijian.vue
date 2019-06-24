<template>
  <div>
    <MySwiper :data1="data1"/>
    <MyContent :myList="myList"/>
  </div>
</template>
<script>
  import MySwiper from './recommend/mySwiper.vue'
  import MyContent from './recommend/myContent.vue'
  export default{
    name: 'tuijian',
    data() {
      return {
         data1: [],
         myList: []
      }
    },
    components: {
      MySwiper,
      MyContent
    },
    created() {
      this.$axios.get('http://www.wwtliu.com/sxtstu/blueberrypai/getIndexBanner.php')
        .then( e => {
           this.data1 = e['data'].banner
           console.log(this.data1)
      }
        )
        .catch( e => {
          console.log(e)
      })

      this.$axios.get('http://www.wwtliu.com/sxtstu/news/juhenews.php',{
        params:{
        type: 'top',
        count: 30
      }})
        .then( e => {
          this.myList=e['data'].result.data
          console.log(this.myList)
      })
        .catch( e=> {
        console.log(e)
      })
    }
  }
</script>
<style>

</style>
