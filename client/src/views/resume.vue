!<template>
  <div class="likeVideoContainer">

    <div class="hpHeader">
      
    <Header>
       <div slot="search" class="rSearchBar" >
             <!-- bulb -->
                  <a-icon type="alert" class="w" theme="outlined" :style="{fontSize:'3.5vmin', color:'white'}" />
            </div>
    </Header>
  </div>


      <button class="rSideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'2.8vmin',marginTop:'0.5vh'}" :type="collapsed ? 'close' : 'menu-fold'" /></button>

 

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
                <p>JunJie (Mark) Lin</p><br/><br/><br/>
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

<style lang="less" scoped>
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
  grid-template-rows: 8% 92%;
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
   font-size: 4.5vmin;
   float: left;
   margin-left: 1vw;
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
  width:30%;
  
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
  // background: #dbdbdb36;
  display: grid;
  grid-template-columns: 20% 45% 15% 20%;
  grid-template-rows: 5% 45% 50%;
}

.intro{
  grid-row:1;
  grid-column:2/4;
  background: #dbdbdb36;
  width: 100%;
  height: 100%;
  // margin-left: 12vw;
  border-radius: 5px;
  // overflow: scroll;
}

.intro p{
  font-size: 2.3vmin;
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
}

.rName p{
  float: left;
  font-size: 7.5vmin;
  font-weight: bolder;
  margin-bottom:0 !important;
}

.rName span{
  float:left;
  line-height: 2vh;
  // position: absolute;
  font-size: 2.6vmin;
}

.avatar{
  border: 2px solid white;
  grid-row: 2/3;
  grid-column: 3;
  width:200w;
  height:259w;
  margin-top: 4vh;
  float:right;
}

.avatar img{
  width:100%;
  height:100%;
}

</style>