!<template>
<div class="projectHeader">


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
              class="mobileMenu"
             v-if="isMobile"
            >
                <a-sub-menu >
                    <span slot="title" >
                    <a-icon class="mobileListIcon" type="menu" theme="outlined"/>
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
          windowWidth: window.innerWidth
       }

    }, 
    components:{
      userService
    },

    computed:{
        isMobile(){
           return this.windowWidth <= 912
        }  
    },

    mounted(){
       window.addEventListener('resize', this.onChange)
    },

    methods:{
        onChange() {
         this.windowWidth = window.innerWidth;
    },


    }
  }
</script>

<style lang="less" scoped>
.projectHeader{
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
  grid-template-columns: 30% 15% 13% 42%; 
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

.mobileMenu{
  position: relative;
  top: 12px;
  padding-left: 20px;
  grid-column: 4;
  grid-row: 1;
}

// .searchBar{
//   grid-column: 4;
//   grid-row: 1;
//   position: relative;
//   top:1.5vh;
// }

// .searchBar span{
//   font-size: 1.5vw;
//   font-family: PingFang SC, HarmonyOS_Regular, Helvetica Neue, Microsoft YaHei, sans-serif !important;
//   color: white;
// }

.mobileListIcon{
  font-size:21px;
  color:white;
}



/deep/ .ant-menu-submenu{
   border-bottom: 0 !important; 
}

/deep/ .ant-menu{
    background: none;
}

/deep/ .ant-menu-horizontal{
    line-height: 4vh;
    border-bottom: none;
}

.headerTilte{
  margin-left: 5vw;
  float: right;
  height: 2.2vw;
  width: auto;
  margin-top:2vh;
  /* animation: logo-icon-spin infinite 20s linear; */
}

.headerTilte:hover{
  transition: 0.3s;
  opacity: 0.6;
}

.headerText{
  float: right;
  width: 3.2vw;
  margin-top:1.5vh;
}

.headerText:hover{
  transition: 0.3s;
  opacity: 0.6;
}

.avantar{
  float: right;
  margin-left: 6vw;
  margin-top:9vh;
  background-color: aliceblue;
  border-radius: 50%;
  height: 3vw;
  width: auto;
  grid-row:1 ;
  grid-column: 1;
}

</style>