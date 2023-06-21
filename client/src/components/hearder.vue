!<template>
<div class="allHeader">


   <!-- <slot name="sideBar" class="sideBarButton">


   </slot> -->

      <a style='grid-column:2' href="https://github.com/MarkYnot" target="_blank" v-if="!isMobile"> 
          <img class="headerTilte" v-lazy="'/static/github1.png'" alt="headerTitle">   
      </a>


      <a href="https://linkedin.com/in/junjie-lin-142444216" target="_blank" v-if="!isMobile">
        <img class="headerText" v-lazy="'/static/linkedin1.png'" alt="headerTitle">
      </a>


      <slot name="search" >
         
      </slot>


        <a-menu
              theme="light"
              mode="horizontal"
              style="{lineHeight: 64px}"
              class="userInfoSlot"
             v-if="isMobile"
            >
                <a-sub-menu >
                    <span slot="title" >
                    <a-icon type="alert" theme="outlined" :style="{fontSize:'21px', color:'white'}" />
                    </span>

                    <a-menu-item key="setting:1">
                        <a href="https://github.com/MarkYnot" target="_blank">Github</a>
                      </a-menu-item>

                      <a-menu-item key="setting:2">
                        <a href="https://linkedin.com/in/junjie-lin-142444216" target="_blank">Linkedin</a>
                      </a-menu-item>
              
          
                </a-sub-menu>
            
            </a-menu>
   
      
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
          photoCorrect: false,
          windowWidth: window.innerWidth

       }

    }, 
    components:{
      userService
    },

    beforeDestroy(){
        window.removeEventListener('resize', this.handleResize)
       
    },

    
    mounted(){
      window.addEventListener('resize', this.handleResize);
    },
    computed:{
       
          isMobile() {
            return this.windowWidth <= 697; 
          }
    },
    methods:{
        onChange(checked) {
      // console.log(`a-switch to ${checked}`);
        },

        handleResize() {
          this.windowWidth = window.innerWidth;
        }     
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
       @media screen and (max-width:767px){
         grid-template-columns: 50% 20% 10% 20%; 
   }

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

  margin-top: 11px;
  // float:right;
  grid-column: 4;
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