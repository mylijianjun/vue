<template>
      <ul class="footer">
        <li><router-link to="/layout/refer"><div class="el-icon-thumb"></div><div>推荐</div></router-link></li>
        <li><router-link to="/layout/classify"><div class="el-icon-s-operation"></div><div>分类</div></router-link></li>
        <li><router-link to="/layout/person"><div class="el-icon-user-solid"></div><div>我的</div></router-link></li>
      </ul>
</template>
<script>
  export default{
    name: 'navs',
    data () {
      return {

      }
    }

  }
</script>
<style scoped>
  *{margin: 0; padding: 0}
   .footer{
     position: fixed;
     display: flex;
     width: 100%;
     bottom: 0;
   }
  .footer li{
    list-style: none;
    flex: 1;
    text-align: center;
    background-color: #FFFFFF;
    color: #00d6b2;
    font-weight: bold;
  }
  .footer li a{
    text-decoration: none !important;
  }
  .footer li div:first-child{
    font-size: 20px;
  }
</style>
