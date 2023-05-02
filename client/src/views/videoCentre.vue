!<template>

<!-- this class has not css attribute -->
<div class="searchWindow">
    
  <transition name="fade">
  <div class="searchArea" v-show="this.search">

      <transition name="searchTransition">
        <div class="searchInput" v-show="this.search">
    
          <input placeholder="Type to Search"/>
          <a-icon type="close" theme="outlined" class="close" :style="{fontSize:'2.5vw', color:'black', marginTop:'2vh'}" @click="closeSearch()"/>
        </div>
      </transition>

      <transition name="searchTransition">
      <span class="popular" v-show="this.search" >Latest result</span>
       </transition>

      <transition name="searchTransition">
      <div class="searchResult" v-show="this.search">
          <div class="resultIntro">
              <img alt="" src="../assets/Ecommerce.jpeg">
                   <div class="itemText">
                    <p>Ecommerce Website</p><br/>
                    <span>MEVN Stack</span>
                 
                   </div>
           </div>

            <div class="resultIntro">
              <img alt="" src="../assets/videoSelection2.png">
                   <div class="itemText">
                    <p>Ecommerce Website</p><br/>
                    <span>phs</span>
                 
                   </div>
           </div>

            <div class="resultIntro">
              <img alt="" src="../assets/videoSelection3.jpg">
                   <div class="itemText">
                    <p>Ecommerce Website</p><br/>
                    <span>phs</span>
                 
                   </div>
           </div>


            <div class="resultIntro">
              <img alt="" src="../assets/videoSelection3.jpg">
                   <div class="itemText">
                    <p>Ecommerce Website</p><br/>
                    <span>phs</span>
                 
                   </div>
           </div>
    </div>
      </transition>

</div>
  </transition>

  <div class="videoCentreContainer" :style="{'background':'url('+backImg+') 50% 50% / cover' }" @mousewheel=" mouseWheel"> 

    <!-- <ul class="list">
        <li><img class="slide" src="../assets/VideoSelection.jpg"  /></li>
        <li><img class="slide" src="../assets/videogif2.gif"  /></li>
        <li><img class="slide" src="../assets/videoSelection2.png"  /></li>
        <li><img class="slide" src="../assets/videoSelection3.jpg"/></li>
    </ul> -->
      
        <div class="containerShadow"/>

        <div class="hpHeader">
        <Header>
          <div slot="search" class="searchBar"  @click="search = !search, text = false">
                  <a-icon type="search" class="w" theme="outlined" :style="{fontSize:'2vw', color:'white'}" />
              <span>SEARCH</span>
            </div>
            
      </Header>
      </div>

    <button class="sideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'3vw'}" :type="collapsed ? 'close' : 'menu-fold'" />  
            
   </button>
      
<!-- 
    <div class="centreBody"> -->

      <span  class="name" :style="collapsed?'color: black' :'color: white'">  JUNJIE LIN</span>


        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>

        <div class="videoContent">
           <span v-show="this.text">
             Full Stack Developer  <br/>
           Have a look at my work<br/>
           and get in touch 
           </span>
          
            <span v-if="this.Ecommerce">Ecommerce Website</span>

            <!-- <router-link :to="{path}"/> -->
             <button @click="redirecting()" v-if="this.Ecommerce" class="contentButton" :style="collapsed?'color: black' :'color: white'">Views the project Blog</button>
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

</div>


</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
import '../assets/css/searchBar.css'
import '../assets/css/animation.css'
import videoImg1 from '../assets/VideoSelection.jpg'
import videoImg2 from '../assets/Ecommerce.jpeg'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
  export default {
    data(){
       return {
          collapsed: false,
          Ecommerce:false,
          search:false,
          text: true,
          path:'',
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
    
    redirecting() {
        this.$router.push(this.path)
    },

    closeSearch(){
      this.search = !this.search
      setTimeout(()=>{
          this.text = true;
      }, 500)
    },

    handleScroll(){
        var e = document.body.scrollTop||document.documentElement.scrollTop
        if(!e) return
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
         switch(number){
            
            case 0:
            console.log(1)
            this.Ecommerce = false;
            break;

            case 1:
            this.path = '/Ecommerce'
            this.Ecommerce = true;
            break;

            case 2:
            
           
         }
          
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
   margin-top: 2vh;
   transition: all 1s ease-in;
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
  display: grid;

  grid-template-rows: 65% 35%;
}

.videoContent span{
  color:white;
  margin-left: 23vw;
  margin-top:40vh;
  float: left;
  font-size: 3vw;
  font-weight: bolder;
  text-align: left;
  transition: all 4s;
  grid-row: 1;
}


.contentButton{
  margin-left: 27vw;
  margin-top: 3vh;
  width: 20vw;
  height: 4vh;
  background: transparent;
  border-color: whitesmoke;
  grid-row: 2;
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

//search status:
.searchArea{
  width:100%;
  height: 100%;
  background-color:white;
  opacity: 0.85;
	position: absolute;
  display: grid;
  grid-template-columns: 20% 70% 10%;
  grid-template-rows: 17% 28% 5% 25% 25%;
  z-index:1;
  transition: all 2s;
}

.searchInput{
  grid-column: 2;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  border-width: 0 0 0 0;
}


.searchInput input{
  float: left;
  color:black;
  width:96%;
  font-size: 3vw;
  border-width: 0 0 2px 0;
  border-color: black;
  border-style: solid;
  transition: all 1s;
  outline: none;
}

.close:hover{
    transition: 0.3s;
    opacity: 0.5;
}

/*search animation*/
.fade-enter-active {
  transition: 0.1s;
   opacity: 0;
}

.fade-leave-active{
   transition: 0.9s;
   background: transparent;
}

.fade-enter{
  opacity: 0;
}

.popular{
  grid-row: 3;
  grid-column: 2;
  margin-right: 54vw;
  float: left;
  font-size: 2.7vw;
  font-weight: bold;
}

.searchResult{
  grid-row:4/6;
  grid-column:2/4;
  overflow-y: scroll;
  width:100%;
  height: 100%;
}

.resultIntro{
 float: left;
 width: 40%;
 height:20%;
 margin-top:4vh;
}

.itemText{
    height:100%;
    
}

.itemText p{
    float:left;
    font-size: 1.3vw;
    font-weight: bold;
    margin-top: 0.5vh;
    margin-left:2vw;
    height: 0;
}

.itemText p:hover{
  opacity: 0.3;
  transition: all 0.8s;
}

.itemText span{
    float:left;
     margin-left:2vw;
    font-size: 1.3vw;
}

.itemText span:hover{
   transition: all 0.6s;
   text-decoration: underline;
}

.resultIntro img{
  float: left;
  margin-left: 0.6vw;
  height:9vh;
  width:9vw;
}

</style>

