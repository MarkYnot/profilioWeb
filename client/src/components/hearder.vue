!<template>
<div class="allHeader">


   <!-- <slot name="sideBar" class="sideBarButton">


   </slot> -->

      <a style='grid-column:2' href="https://github.com/MarkYnot" target="_blank"> 
          <img class="headerTilte" v-lazy="'/static/github1.png'" alt="headerTitle">   
      </a>


      <a href="https://linkedin.com/in/junjie-lin-142444216" target="_blank">
        <img class="headerText" v-lazy="'/static/linkedin1.png'" alt="headerTitle">
      </a>


      <slot name="search" >
         
      </slot>
   
      
</div>
</template>

<script>
 import userService from '../services/userService'
  export default {

    data(){
       return {
          username: "Mark",
          photo: "",
          hasPhoto: false,
          photoCorrect: false
       }

    }, 
    components:{
      userService
    },

    created(){
      
       
    },

    
    mounted(){
      

    },

    methods:{
        onChange(checked) {
      // console.log(`a-switch to ${checked}`);
    },
    }
  }
</script>

<style lang="less" scoped>
.allHeader{
  height: 100%;
  padding: 0;
  line-height: 4.5vh;
  width: 100%;
  overflow: hidden;
  text-align: center;  
  border-bottom: 0px;  
  border-top:0px;  
  border-left:0px;  
  border-right:0px;  
  display: grid;
  grid-template-columns: 50% 25% 5% 20%; 
  grid-template-rows: 100%;
}

/deep/ .ant-layout-header{
  height: 53px;
  padding: 0;
  line-height: 64px;
  width: 100vw;
  background: white;
  overflow: hidden;
  border-radius: 5px;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
}

.userInfoSlot{
  position: relative;
  left: 5vw;
  top: 0.1vh;
  // float:right;
  grid-column: 3;
  grid-row: 1;
}

// .searchBar{
//   grid-column: 4;
//   grid-row: 1;
//   margin-top: 2.5vh;
// }

// .searchBar:hover{
//   transition: 0.3s;
//   opacity: 0.4;
// }

// .searchBar span{
//   font-size: 1.8vw;
//   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
//   color: white;
// }


/deep/ .ant-menu-submenu{
   border-bottom: 0 !important; 
}


.sideBarButton{
   text-align: center;
   grid-column: 1;
   grid-row: 1;
}


/deep/ .ant-menu{
    background: none;
}

/deep/ .ant-menu-horizontal{
    line-height: 4vh;
    border-bottom: none;
}

.headerTilte{
  float: right;
  height: 30px;
  width: 30px;
  margin-top:15px;
  margin-right: 1vw;
  grid-column: 2;
  grid-row: 1;
  margin-left: 13vw;
  /* animation: logo-icon-spin infinite 20s linear; */
}

.headerTilte:hover{
  transition: 0.3s;
  opacity: 0.6;
}

.headerText{
  float: right;
  width: 40px;
  height: 45px;
  margin-top:10px;
  margin-left:3px;

}

.headerText:hover{
  transition: 0.3s;
  opacity: 0.6;
}



</style>