!<template>
  <div class="videoCentreContainer" :style="{'background':'url('+backImg+') 50% 50% / cover' }" @mousewheel=" mouseWheel"> 

    <!-- <ul class="list">
        <li><img class="slide" src="../assets/VideoSelection.jpg"  /></li>
        <li><img class="slide" src="../assets/videogif2.gif"  /></li>
        <li><img class="slide" src="../assets/videoSelection2.png"  /></li>
        <li><img class="slide" src="../assets/videoSelection3.jpg"/></li>
    </ul> -->
      
      <div class="containerShadow"/>

    <div class="hpHeader">
    <Header/>
  </div>

    <button class="sideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'3vw'}" :type="collapsed ? 'close' : 'menu-fold'" />  
            
   </button>
      
<!-- 
    <div class="centreBody"> -->


      <span class="name" :style="collapsed?'color: black' :'color: white'">JUNJIE LIN</span>

        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>

        <div class="videoContent">
           <span v-if="this.text">Full Stack Developer  <br/>
           Have a look at my Work<br/>
           and get in touch 
           </span>
       </div>


      <div class="bottomMenu">
          <span class="MenuItem" id="MenuItem0" @click="videoGif(0)">Me</span>
          <span class="MenuItem" id="MenuItem1" @click="videoGif(1)">Project1</span>  
          <span class="MenuItem" id="MenuItem2" @click="videoGif(2)">Project2</span>       
          <span class="MenuItem" id="MenuItem3" @click="videoGif(3)">Project3</span>
          <span class="MenuItem" id="MenuItem4" @click="videoGif(4)">Project4</span>
      </div>      
<!-- </div> -->

</div>

</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
import '../assets/css/video.css'
import videoImg1 from '../assets/VideoSelection.jpg'
import videoImg2 from '../assets/videogif1.gif'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
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
           MenuItem:"MenuItem0",
           fontWeight0: true,
           fontWeight1: true,
           fontWeight2: true,
           fontWeight3: true,
           fontWeight4: true
       }
    },

     components:{
     Header,
     SideBar,
     VideoService
   },

    mounted(){
     this.backImg = this. videoImgList[0].icon
     let selectedMenuItem = document.getElementById(this.MenuItem);
     selectedMenuItem.style.fontWeight = "900"
   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    handleScroll(){
        var e = document.body.scrollTop||document.documentElement.scrollTop
        if(!e) return
        console.log(11)
    },

    mouseWheel(e){
        if (e.wheelDelta || e.detail) {
            if (e.wheelDelta > 0 || e.detail < 0) {     
                  console.log("down")
                      if(this.pageNumber !=4){
                        this.pageNumber = this.pageNumber +1 
                        this.videoGif(this.pageNumber)
                      }else{
                        this.pageNumber = 0
                        this.videoGif(this.pageNumber)
                      }
                    
            }
            
            if (e.wheelDelta < 0 || e.detail > 0) {  
                console.log("up")
                  if(this.pageNumber !=0){
                        this.pageNumber = this.pageNumber -1 
                        this.videoGif(this.pageNumber)
                      }else{
                        this.pageNumber = 4
                        this.videoGif(this.pageNumber)
                      }
            }
      }
    },

    // startSearch(){
    //     const videoInput = document.getElementById('textInput').value
    //     if(videoInput != ""){
    //       this.$router.push({path:`/search&${videoInput}`})
    //     }else{
    //       alert('please enter keyword first')
    //     }
     
    // }


     videoGif(number){

        if(number != 0) this.text = false
        else this.text = true
        this.pageNumber = number
        let  MenuItemList = document.getElementsByClassName("MenuItem")
        MenuItemList.forEach(element => {
           element.style.fontWeight = ""
        });
         this.backImg = this.videoImgList[number].icon
         this.MenuItem = "MenuItem" + number
         let selectedMenuItem = document.getElementById(this.MenuItem);
         selectedMenuItem.style.fontWeight = "900"
     } 
  }
}
</script>

<style lang="less">

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
  grid-template-columns: 5% 30% 65%;
  grid-template-rows: 10% 5% 70% 10% 5%;
  transition: all 1s;
}

// .list{
//     width: 100%;
// 	  height: 100%;
//     grid-row: 1/6;
//     grid-column: 1/6;
//     list-style-type: none;
//     padding-left:0;
//     -moz-animation: slide 2s infinite;
//     -webkit-animation: slide 2s infinite;
// }

// .slide{
//   vertical-align:bottom;
//   width: 100%;
// 	height: 100%;
// }

// @-moz-keyframes slide {
//     from, to { top: 0; }
//     12.5% { top: 0; }
//     25% { top: -375px; }
//     37.5% { top: -375px; }
//     50% { top: -750px; }
//     62.5% { top: -750px; }
//     75% { top: -1125px; }
//     87.5% { top: -1125px; }
// }

// @-webkit-keyframes slide {
//     from, to { top: 0; }
//     12.5% { top: 0; }
//     25% { top: -375px; }
//     37.5% { top: -375px; }
//     50% { top: -750px; }
//     62.5% { top: -750px; }
//     75% { top: -1125px; }
//     87.5% { top: -1125px; }
// }

.containerShadow{
  background-color:black;
  -webkit-filter:brightness(1);
  -o-filter:brightness(1);
  -moz-filter:brightness(1);
  filter:brightness(0.1);
  opacity: 0.4;
  grid-row: 1/6;
  grid-column: 1/6;
  z-index:1;
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
   font-size: 5vw;
   width:100%;
   float: left;
   color: white;
   margin-right: 10vw;
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
  width: 40%;
  box-shadow: 5px 0px 0px -5px rgba(54, 54, 54, 0.527);
  height: auto;
  border-right: black;
  z-index: 10;
  transition: 2s;
}

.videoContent{
  grid-row: 3;
  grid-column: 3;
  width:100%;
  height: 100%;
  z-index: 1;
}

.videoContent span{
  color:white;
  margin-left: 23vw;
  margin-top:40vh;
  float: left;
  font-size: 3vw;
  font-weight: bolder;
  text-align: left;
  transition: all 1s;
}

.bottomMenu{
  grid-row:4;
  grid-column:2/4;
  margin-left: 11vw;
  height:100%;
  margin-top:3vh;
  width: 85%;
  z-index: 20;
}

.MenuItem{
  font-size: 1.5vw;
  // font-weight: bold;
  color:white;
  float: left;
  margin-left:7vw;
  margin-top:2.5vh;
}
</style>