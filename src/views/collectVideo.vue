!<template>
  <div class="collectVideoContainer">

    <div class="hpHeader">
    <Header v-on:currentUser='getCurrentUser'>

       <div slot="search">
           <div class="searchBar">
              <input type="text" id="textInput" placeHolder="  Search" class="searchInput"/>
              <button @click="startSearch"><a-icon class="searchIcon" :style="{fontSize:'1.5vw'}"    type="search"/></button>

           </div>

       </div>
      </Header>
  </div>

    <button class="sideBarButton" @click="toggleCollapsed">
              <a-icon :style="{fontSize:'1.3vw'}" :type="collapsed ? 'menu-unfold' : 'menu-fold'" /></button>

    <div class="centreBody">


        <div class="SideBar">
              <SideBar :collapsed="collapsed"/>
        </div>

        <div class="videoContent">
                  <!-- <div class="innerLikeVideo">
                    </div> -->
                
            <h3>{{collectionList.length}} videos in the save List</h3>
            
            <ul>
            <li v-for="(item,index) of collectionList" :key="item.video_id">
                 
            <div class="allLikeVideo" >
                <router-link :to="`/video&${item.video_id}`">
                <span class="index">{{index+1}}</span>
                 <img alt="" :src="item.cover_photo">
                 <div class="videoInformation">
                    <span class="videoTitle">{{item.title}}</span><br/>
                    <span class="videoType">{{item.category}}</span>
                  </div>
                  </router-link>
                  <button class="matchButton" id="stopButton"  @click="()=>deleteSaveVideo(item.video_id)"><span>Delete</span></button>

                  
            
              </div>
             
              </li>
            </ul>
         
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
       const videoResult = await VideoService.getAllVideo()
       this.allVideo = videoResult.data

   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    getCurrentUser(user){
           this.User = user
           this.collectionList = user.collectVideoList
           console.log(this.collectionList)
        },

    async deleteSaveVideo(video_id){
       let comfirmation = confirm('You Sure want to delete this video from the save list?')
       if(comfirmation){
          const result = await VideoService.deleteCollectVideo(this.User.user_id, video_id)
          console.log(result)
          if(result.data == false){
            alert('Suceessfully deleted')
          //  this.router.push({path:'/video/collection'})
          window.location.reload(false)
          }
       }
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

.collectVideoContainer{
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

.matchButton{
   margin-top: 5vh;
   float: right;
   margin-right: 3vw;
   position: relative;
   left: 2vw;
   width: 10vw;
   height: 5.5vh;
   text-align: center;
   overflow: hidden;
   border-radius: 0.5rem;
   font-size: 1.9vw;
   border: 0px;
   transition: all 0.3s;
  }

  .matchButton span:hover{
    opacity: 0;
    font-size: 2vw;
  }

  #stopButton{
  background-color: rgba(236, 44, 11, 0.76);
  color: white;

}

#stopButton:hover{
    background-image: url("../assets/bye.gif");
    background-size:  100% 100%;
    transform: scale(1.1);
    height: 6vh;
    width:10vw;

}

.SideBar{
  grid-row: 1;
  grid-column: 1;
  box-shadow: 5px 0px 10px -5px rgba(54, 54, 54, 0.527);
  // -webkit-box-shadow: #666 0px 0px 10px;
  // -moz-box-shadow: rgb(61, 61, 61) 0px 0px 10px;
}

.videoContent{
  grid-row: 1;
  grid-column: 2;
  width:100%;
  height: auto;
  background: #dbdbdb36;
}

.videoContent h3{
   float:left;
   margin-left: 2vw;
   margin-top:1vh;
   font-size: 1.5rem;
}

.videoContent li{
     list-style:none;
}

.allLikeVideo{
   width: 95%;
   margin-left:1vw;
   height: 16vh;
   float: left;
   border-bottom: solid 2px #8b898969;
   background: #dbdbdb36;
   text-align: center;
   font-size: 2vw;
 
}

.allLikeVideo img{
  float: left;
  height: 80%;
  width: 15%;
  margin-left: 1.6vw;
  margin-top:1.5vh;
}

.index{
 float:left;
 margin-top: 4.5vh;
 margin-left: 1vw;
 color: black;
}

.videoInformation{
  float: left;
  margin-left: 2vw;
  margin-top: 2vh;
}

.videoTitle{
  font-weight: bold;
  float:left;
  color: black;
}

.videoType{
   float: left;
   font-size:1.5vw;
   color: #55555577;
   
}

// .innerLikeVideo{
//   width: 80%;
//   border-bottom: solid 2px #8b898969;
//   margin-left:7vw;
//   margin-top: 1.5vh;

// }


</style>