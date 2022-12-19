!<template>
  <div class="videoCentreContainer"> 
    <!-- :style="{'background':'url('+backImg+') 50% 50% / cover' }" -->

 
      
      

    <div class="hpHeader">
      <Header/>
  </div>

    <button class="sideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'3vw'}" :type="collapsed ? 'close' : 'menu-fold'" />  
            
   </button>
      
<!-- <div class="centreBody"> -->


      <span class="name" :style="collapsed?'color: black' :'color: white'">JUNJIE LIN</span>

        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>

        <div class="projectIntroduction" :style="{'background':'url('+backImg+') 50% 50% / cover' }">
          <div class="containerShadow"/>
           <span class="introText">Ecommerce Website <br/></span>
       </div>

       <div class="projectContent">
            <div class="darkMode">
                  <a-icon type="search" theme="outlined" :style="{fontSize:'1.4vw', color:'black'}" />
                  <span>DarkMode</span>
            </div>
            
            <span class="published">Published at 18/12/2022</span>
            <a-icon class="readIcon" type="search" theme="outlined"/>
            <span class="textLength">7mins reading</span>

            <div class="content">

              <span>
              The overview of this project is to build a Ecommerce
              web application which named PhoneZone. PhoneZone provides <br/>
              users with an easy-trading platform where users could <br/>
              conveniently obtain their products by ordering on this <br/>
              platform.
              </span>  
              
             
            
              <span>
              In this article, i will introduce the crucial modules of this web <br/>
              application and how to implement each of funtionalities in<br/>
              the modules. In addition, this article will only focus on the <br/>
              implementation of some crucial funtionality, feel free to <br/>
              access the project in my github.
              </span>


              <span>Here is the porject demo:</span>

              <iframe class="playerSetting" src="https://www.youtube.com/embed/uAZegV6WbCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>

              
              <span id="tableTitle">Table of the crucial funtionalities</span>
           
           
              <ul>
                 <li><a>Home page</a></li>
                 <li><a>Login</a></li>
                 <li><a>Change Avantar</a></li>
                 <li><a>Shopping Cart</a></li>
                 <li><a>Change Username/Password</a></li>
              </ul>

              <h2>1.Home page</h2>
              <span class="textBeforeCode">Please reach the html code:</span>
              <div class="homePageCode"/>
              <span>Step1. Design a few frames that </span>


            
      
           </div>


       </div>

<!-- </div> -->

</div>

</template>

<script>
import Header from '../components/projectHeader.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
import '../assets/css/video.css'
import videoImg1 from '../assets/Ecommerce.jpeg'
import videoImg2 from '../assets/videogif1.gif'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
import Video from '../components/mini-player.vue'
  export default {
    data(){
       return {
          collapsed: false,
          text: true,
          allVideo:[],
          pageNumber:0,
          videoImgList: [
            {icon: videoImg1},
            {icon: videoImg2},
            {icon: videoImg3},
            {icon: videoImg4},
            {icon: videoImg5},
           ],
           backImg: "",
           videoURL:'',
           MenuItem:"MenuItem0",
       }
    },

     components:{
     Header,
     SideBar,
     VideoService,
     Video
   },

    mounted(){
      this.backImg = this. videoImgList[0].icon

   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    // startSearch(){
    //     const videoInput = document.getElementById('textInput').value
    //     if(videoInput != ""){
    //       this.$router.push({path:`/search&${videoInput}`})
    //     }else{
    //       alert('please enter keyword first')
    //     }
     
    // }


  }
}
</script>

<style lang="less" scoped>

body{
  line-height:0;
}

.videoCentreContainer{
  width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
  // background-size:cover;
  overflow:hidden;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: 5% 15% 30% 50%;
  grid-template-rows: 10% 90%;
  transition: all 1s;
  z-index: 1;
}

.containerShadow{
  background-color:black;
  -webkit-filter:brightness(1);
  -o-filter:brightness(1);
  -moz-filter:brightness(1);
  filter:brightness(0.1);
  opacity: 0.5;
  // grid-row: 1/3;
  // grid-column: 1/4;

}

.pic{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../assets/videoCover1.png");
}

.name{
   grid-row: 1/2;
   grid-column: 2;
   font-size: 2.2vw;
   margin-top: 1vh;
  //  width:100%;
   color: white;
   font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
   transition: 1s;
   z-index: 20;
}

 .hpHeader{
    height: 100%;
    width:100%;
    grid-row: 1;
    grid-column: 3/4;
    z-index: 20;
    // border-bottom: 2px solid #dbdbdb;  
}

.searchInput{
   float: left;
   height:3.7vh;
   width: 93%;
   border-left: 0px;
   border-top: 0px;
   border-bottom: 0px;
   border-right:solid 2px #8b898969;
   outline-color: rgba(126, 162, 196, 0.514);
   font-size: 1.2vw;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.searchBar{
   width:15vw;
   height:4vh;
   margin-top: 0.4vh;
  //  border: solid 2px;
}

.searchBar button{
   border-top-right-radius: 4px;
   border-top-left-radius: 4px;
   float: right;
   width: 7%;
   height: 3.6vh;
   border: 0px;
   transition: all 0.2s;
  //  ff
}

.searchBar button:hover{
      background-color: rgba(196, 195, 195, 0.514);
}

.sideBarButton{
  width: 3vw;
  height: 3.6vh;
  background: none;
  color:white;
  border: 0px;
  margin-top: 0.5vh;
  margin-bottom: 16px;
  border-radius: 50%;
  transition: all 1s;
  grid-row: 1;
  grid-column: 1;
  margin-left: 0.8vw;
  z-index: 20;
}

.sideBarButton:active{
  background-color: rgba(196, 195, 195, 0.514);
  border: solid 2px rgba(196, 195, 195, 0.514);
}

// .centreBody{
//   grid-column: 1/4;
//   grid-row: 1/3;
//   display: grid;
//   width: 100%;
// 	height: auto;
//   transform: translate(50%,50%);
//   grid-template-columns: minmax(40px, auto) 1fr;
//   grid-template-rows: auto;
//   margin-top:0.2vh;
  
// }


.SideBar{
  grid-row: 1/4;
  grid-column: 1/4;
  width: 80%;
  box-shadow: 5px 0px 0px -5px rgba(54, 54, 54, 0.527);
  height: auto;
  border-right: black;
  z-index: 10;
  transition: 2s;
}

.projectIntroduction{
  grid-row: 1/3;
  grid-column: 1/4;
  width:100%;
  height: 100%;
  z-index: 1;
}

.projectContent{
  grid-row: 1/3;
  grid-column: 4/5;
  width:100%;
  height: 100%;
  background: white;
  display: grid;
  grid-template-columns: 8% 30% 30% 42%;
  grid-template-rows: 5% 95%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.introText{
  color:white;
  margin-left: 3vw;
  margin-top:65vh;
  float: left;
  font-size: 3vw;
  font-weight: bolder;
  text-align: left;
  transition: all 1s;
  z-index: 1;
}

.darkMode{
  grid-row: 1;
  grid-column: 4;
  // margin-left:4vw;
  margin-right:3vw;
  margin-top: 4vh;
}

.darkMode span{
  font-size: 1.3vw;
}

.textLength{
  grid-row: 1;
  grid-column: 3;
  font-size: 1vw;
  margin-top: 5vh;
  margin-right: 5vw;
  color:gray;
}

.published{
  grid-row: 1;
  grid-column: 2;
  font-size: 1vw;
  margin-top: 5vh;
  margin-right: 1vw;
  color:gray;
}

.readIcon{
  font-size: 1.3vw;
  color:gray;
  grid-row: 1;
  grid-column:3;
  margin-top: 5.2vh;
  margin-right: 13vw;
}

#tableTitle{
  font-weight: bolder;
  font-size: 1.8vw !important;
}

.content{
  grid-row: 2;
  grid-column: 2/5;
  margin-top: 12vh;
}

.content span{

  float: left;
  font-size: 1.7vw;
  text-align: left;
  margin-top:6vh;
}

.content ul{
  position: relative;
  float:left;
  padding:0;
  margin-top:12vh;
  right: 23vw;
}

.content ul li{
 text-align: left;
 font-size: 1.7vw;
 list-style-type:upper-roman;
}

.content ul li a{
  color:#000000
}

.content h2{
  float:left;
  font-weight: bolder;

}

.playerSetting{
  width:87%;
  height:60%;
  float:left;
  border: solid 0.1px grey;
}

.homePageCode{
  width: 89%;
  height: 70%;
  background: rgb(238, 236, 236);
  float: left;
  margin-top: 2vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/homepageHtml.png");
}

.textBeforeCode{
  float: left;
  position: relative;
  padding-right:18vw;
}

</style>