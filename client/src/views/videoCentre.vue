!<template>
  <div class="videoCentreContainer">

    <div class="hpHeader">
    <Header>
       <div slot="search">
             

       </div>
    

    </Header>
  </div>

  

  </div>
</template>

<script>
import Header from '../components/hearder.vue'
  export default {

     components:{
     Header
   },
    
  }
</script>

<style lang="less" scoped>

.videoCentreContainer{
  width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 10% 85%;
}

 .hpHeader{
    height: 100%;
    grid-row: 1;
    grid-column: 1/3;
}
       
</style>