<template>
  <div>
    <Banner/>
    <Navs/>
  </div>
</template>
<script>
  import Navs from './nav.vue'
  import Banner from './banner.vue'
  export default{
    name: 'food',
    data () {
      return {
        radio: '1',
        value: ''
      }
    },
    components: {
      Navs,
      Banner
    }

  }
</script>
<style>
.el-icon-delete{
  color: #5E740B;
  font-size: 20px;
}
</style>
