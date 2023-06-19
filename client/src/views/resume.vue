!<template>
  <div class="likeVideoContainer">

    <div class="hpHeader">
      
    <Header>
       <div slot="search" class="rSearchBar" >
             <!-- bulb -->
                  <a-icon type="alert" class="w" theme="outlined" :style="{fontSize:'30px', color:'white'}" />
            </div>
    </Header>
  </div>


      <button class="rSideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'24px',marginTop:'5px'}" :type="collapsed ? 'close' : 'menu-fold'" /></button>

 

       <span  class="myName" :style="collapsed?'color: black' :'color: white'">  JUNJIE LIN</span>

        <transition name="SidebarFade">
        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>
        </transition>

        <div class="Content">
            <div class="intro">
                <p>Hi guys, Here just a story of a tedious boy who love software development </p>
            </div>

            <div class="rName">
                <p>JunJie (Mark) Lin</p><br/><br/><br/><br/>
                <span>Graduate Software Engineer</span>
            </div>

            <div class="avatar">
                <img alt="" src="../assets/me.jpg"/>
            </div>
        
        </div>

</div>
</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import '../assets/css/sidebar.css'
import VideoService from '../services/videoService'
import '../assets/css/video.css'
  export default {
    data(){
       return {
          collapsed: false,
          allVideo:[],
          User:[],
          collectionList:[]
       }
    },

     components:{
     Header,
     SideBar,
     VideoService
   },

   async created(){
       

   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    }

   }
    
  }
</script>

<style lang="scss" scoped>
 body{
  line-height:0;
}

.likeVideoContainer{
  width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: auto 95%;
  grid-template-rows: 60px 92%;
  background: rgba(86, 118, 105, 0.768);
  overflow-y: scroll;
}

 .hpHeader{
    height: 100%;
    grid-row: 1;
    grid-column: 2/3;
    background: transparent;
    float:right;
    // border-bottom: 2px solid #dbdbdb;  
}

.rSideBarButton{
  width: 3vw;
  height: 3.6vh;
  // background: black;
  background: none;
  border: 0;
  border-radius: 50%;
  transition: all 0.3s;
  grid-row: 1;
  grid-column: 1;
  z-index:20;
}

.myName{
   grid-row: 1/2;
   grid-column: 2;
   font-size: 30px;
   float: left;
   margin-left: 15px;
   position: absolute;
   color: white;
   font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
   transition: 1s;
   z-index: 20;
}

// .buttonBack{
//   background: black;
//   grid-row: 1;
//   grid-column: 1;
//   border: 0 0 0 0;
// }

.SideBar{
  grid-row: 1/3;
  grid-column: 1/3;
  box-shadow: 5px 0px 10px -5px rgba(54, 54, 54, 0.527);
  height: 100%;
  width:250px;
  
  // -webkit-box-shadow: #666 0px 0px 10px;
  // -moz-box-shadow: rgb(61, 61, 61) 0px 0px 10px;
}

.rSearchBar{
   width:15vw;
   height:5vh;
   margin-top: 2vh;
   transition: all 1s;
}

.rSearchBar:hover{
   opacity: 0.6;
}

.Content{
  grid-row: 2;
  grid-column: 1/3;
  width:100%;
  height: 100%;
  overflow-y:scroll;
  // background: #dbdbdb36;
  display: grid;
  grid-template-columns: 20% auto 15% 20%;
  grid-template-rows: minmax(40px, auto) auto 50%;
  @media screen and (max-width:1088px){
     grid-template-rows: minmax(40px, 80px) 16% 50%;
     grid-template-columns: 10% auto auto 10%;
  }

  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  // gap: 15px;
}

.intro{
  grid-row:1;
  grid-column:2/4;
  background: #dbdbdb36;
  // width: 100%;
  // height: 100%;
  padding: 10px 20px;
  border-radius: 5px;

  // margin-left: 12vw;
  // overflow: scroll;
}

.intro p{
  font-size: 18px;
  font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
  // display: inline;
  text-align: center;
}

.rName{
  width:100%;
  height: 100%;
  grid-row: 2;
  grid-column: 2/3;
  margin-top: 3vh;
  float:left;
  @media screen and (max-width:767px){
  
   }
}

.rName p{
  float: left;
  font-size: 50px;
  font-weight: bolder;
  margin-bottom:0 !important;
  @media screen and (max-width:767px){
   font-size: 20px;  
  }


}

.rName span{
  float:left;
  line-height: 10px;
  // position: absolute;
  font-size: 15px;
  @media screen and (max-width:767px){
    line-height: 1px;
   }
}

.avatar{
  border: 2px solid white;
  grid-row: 2/3;
  grid-column: 3/4;
  width:200px;
  height:259px;
  margin-top: 4vh;
  float:right;
  @media screen and (max-width:767px){
   grid-row: 3/4;
   grid-column: 2/4;
   margin-top:0; 
   margin-left:60px;
   
  }
}

.avatar img{
  width:100%;
  height:100%;
}



</style>