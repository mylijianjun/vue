<template>
  <div>
  <div v-for="arr in myList">
    <a :href="arr.url" class="cont">
    <div class="con-left"><img :src="arr.thumbnail_pic_s"></div>
    <div class="con-right">
      <div>{{ arr.title }}</div>
      <div>{{ arr.date }}</div>
    </div>
    </a>
  </div>
  </div>
</template>
<script>
  export default{
    name: 'mycontent',
    data() {
      return {

      }
    },
    props: {
      myList: {
        type: Array,
        default: function () {
          return [{
            title: '士兵的可怕梦魇：印度国营兵工厂生产的弹药质量太差',
            date: '2019-06-23 16:09',
            thumbnail_pic_s: "http://00imgmini.eastday.com/mobile/20190623/20190623162306_6a840228553c108628277f425779a645_4_mwpm_03200403.jpg"
          }]
        }
      }
    }
  }
</script>
<style scoped>
  .cont{ display: flex;
  justify-content: flex-start;
    margin-bottom: 0.2rem;
    color: #404040;
    text-decoration: none;
 }
 .con-left{
   flex: 1;
 }
 .con-left img{
   width: 100%;
   height: 2.5rem;
 }
 .con-right{
   display: flex;
   flex-direction: column;
   justify-content: space-between;
   flex: 2;
 }
  .con-right div:first-child{
    margin-top: 0.1rem;
    overflow: hidden;text-overflow: ellipsis;
    -webkit-line-clamp: 2;
    display: -webkit-box;
    -webkit-box-orient: vertical;
  }
  .con-right div:last-child{
    margin-bottom: 0.1rem;
  }

</style>
