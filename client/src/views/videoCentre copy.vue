!<template>
  <div class="videoCentreContainer">

    <div class="hpHeader">
    <Header>

       <!-- <div slot="search">
           <div class="searchBar">
              <input type="text" id="textInput" placeHolder="  Search" class="searchInput"/>
              <button @click="startSearch"><a-icon class="searchIcon" :style="{fontSize:'1.5vw'}"type="search"/></button>

           </div>

       </div> -->
      </Header>
  </div>

    <button class="sideBarButton" @click="toggleCollapsed">
              <a-icon :style="{fontSize:'1.3vw'}" :type="collapsed ? 'menu-unfold' : 'menu-fold'" /></button>

    <div class="centreBody">


        <div class="SideBar">
              <SideBar :collapsed="collapsed"/>
        </div>

        <div class="videoContent">
        
          <div class="accessory-result"> 
              <div class="accessory-list-wrap">
                <div class="accessory-list col-4">
                  <ul>
                    <!-- <img v-lazy="item.cover_photo" alt=""> -->
                    
                    <!-- <li v-for="item in allVideo" :key="item.video_id"> -->
                     <li onclick="window.open('https://github.com/MarkYnot')">
                      <!-- <router-link :to="`/video&${item.video_id}`"> -->
                       <!-- <div class="pic" :style="{backgroundImage:`url(${item.cover_photo})`}"> -->
                      <div class="pic" >
                        <a href="#" ><div class="videoLength">8</div> </a>
                      </div>
                       
                      <div class="main">
                        <div class="name">50</div>
                        <div class="price">category</div><br/><br/>
                         <div class="price">5550000 views &nbsp;&nbsp; 2010/2021/2011
                           </div>
                        <!-- <button>View Phone list</button> -->
                      </div>
                      <!-- </router-link> -->
                  </li>


                    <li onclick="window.open('https://github.com/MarkYnot')">
                      <div class="pic" >
                        <a href="#" ><div class="videoLength">8</div> </a>
                      </div>
                       
                      <div class="main">
                        <div class="name">50</div>
                        <div class="price">category</div><br/><br/>
                         <div class="price">5550000 views &nbsp;&nbsp; 2010/2021/2011
                           </div>
                        <!-- <button>View Phone list</button> -->
                      </div>
                      <!-- </router-link> -->
                  </li>


                   <li onclick="window.open('https://github.com/MarkYnot')">
                      <!-- <router-link :to="`/video&${item.video_id}`"> -->
                       <!-- <div class="pic" :style="{backgroundImage:`url(${item.cover_photo})`}"> -->
                      <div class="pic" >
                        <a href="#" ><div class="videoLength">8</div> </a>
                      </div>
                       

                      <div class="main">
                        <div class="name">50</div>
                        <div class="price">category</div><br/><br/>
                         <div class="price">5550000 views &nbsp;&nbsp; 2010/2021/2011
                           </div>
                        <!-- <button>View Phone list</button> -->
                      </div>
                      <!-- </router-link> -->
                  </li>


                  <li onclick="window.open('https://github.com/MarkYnot')">
                      <!-- <router-link :to="`https://github.com/MarkYnot`"> -->
                       <!-- <div class="pic" :style="{backgroundImage:`url(${item.cover_photo})`}"> -->
                      <div class="pic" >
                        <a href="#" ><div class="videoLength">8</div> </a>
                      </div>
                       
                      <div class="main">
                        <div class="name">50</div>
                        <div class="price">category</div><br/><br/>
                         <div class="price">5550000 views &nbsp;&nbsp; 2010/2021/2011
                           </div>
                        <!-- <button>View Phone list</button> -->
                      </div>
                      <!-- </router-link> -->
                  </li>

                  </ul>
                </div>
              
              </div>
            </div>
 
       </div>
      
</div>

  </div>
</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
import '../assets/css/video.css'
  export default {
    data(){
       return {
          collapsed: false,
          allVideo:[]
       }
    },

     components:{
     Header,
     SideBar,
     VideoService
   },

    async created(){
      //  const videoResult = await VideoService.getAllVideo()
      //  this.allVideo = videoResult.data
      //  console.log(this.allVideo)
   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    startSearch(){
      const videoInput = document.getElementById('textInput').value
      if(videoInput != ""){
         this.$router.push({path:`/search&${videoInput}`})
      }else{
         alert('please enter keyword first')
      }
     
    }


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
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: auto 95%;
  grid-template-rows: 5% 95%;
}
.pic{
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    background-image: url("../assets/videoCover1.png");

}
 .hpHeader{
    height: 100%;
    grid-row: 1;
    grid-column: 2/3;
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
  // //  resize: none;
  //  padding:0;
  //  margin: 0;
}

.searchBar{
  border: solid 2px #4e4d4d69;
   width:auto;
   height:4vh;
   margin-top: 0.4vh;
   border-radius: 4px;

}

.searchBar button{
   border-top-right-radius: 4px;
   border-top-left-radius: 4px;
   float: right;
   width: 7%;
   height: 3.6vh;
   border: 0px;
   transition: all 0.2s;
}

.searchBar button:hover{
      background-color: rgba(196, 195, 195, 0.514);
}

.sideBarButton{
  width: 3vw;
  height: 3.6vh;
  background: none;
  border: 0px;
  margin-top: 0.5vh;
  margin-bottom: 16px;
  border-radius: 50%;
  transition: all 0.3s;
  grid-row: 1;
  grid-column: 1;
  margin-left: 0.8vw;
}

.sideBarButton:active{
  background-color: rgba(196, 195, 195, 0.514);
  border: solid 2px rgba(196, 195, 195, 0.514);
}

.centreBody{
  grid-column: 1/3;
  grid-row: 2;
  display: grid;
  width: 100%;
	height: auto;
  // transform: translate(50%,50%);
  grid-template-columns: minmax(40px, auto) 1fr;
  grid-template-rows: auto;
  margin-top:0.2vh;
  
}

.SideBar{
  grid-row: 1;
  grid-column: 2;
  width: 40%;
  // box-shadow: 5px 0px 10px -5px rgba(54, 54, 54, 0.527);
  height: 100%;
  z-index: 10;
  // -webkit-box-shadow: #666 0px 0px 10px;
  // -moz-box-shadow: rgb(61, 61, 61) 0px 0px 10px;

}

.videoContent{
  grid-row: 1;
  grid-column: 2;
  width:100%;
  height: auto;
  z-index: 1;
  // background: #dbdbdb36;
}

       
</style>