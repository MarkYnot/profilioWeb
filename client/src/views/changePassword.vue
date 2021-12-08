!<template>
  <div class="videoCentreContainer">

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
        <div class="changePasswordWindow">
       <form>
             <h1>Change Password</h1>
            <span>Current password:</span>
            <input class="password" type="text" v-if="pwdType" v-model="currentPassword" placeholder="Enter your password"/>
            <input class="password" type="password" placeholder="Enter your password" v-model="currentPassword" v-else />
            
            <br>
            <br>
            
            <span style="marginLeft: 5vw">New Password:</span> 
            <input class="password" type="text" v-if="pwdType" v-model="newPassword" placeholder="Enter your password"/>
            <input class="password" type="password" placeholder="Enter your password" v-model="newPassword" v-else />
            

            <img v-lazy="seen ? seenImg : unseenImg" @click="pwdType = !pwdType" v-on:mouseover="seen = !seen" v-on:mouseout="()=>seen = !seen" class="icon-eye" />
            <br/>
            <br/>

            <button class="ChangeButton" style="marginRight: 4vw" type="button" @click="changePassword">Change</button> 
           <input class="ChangeButton" type="reset" value="Reset">
         </form>
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
import userService from '../services/userService';
  export default {
    data(){
       return {
          collapsed: false,
          allVideo:[],
          seen:false,
          unseenImg: "/static/see0.png",
          seenImg: "/static/see1.png",   
          pwdType: false,
          newPassword:"",
          currentPassword:"",
          User:[]
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
       console.log(this.allVideo)
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
     
    },

    async changePassword(){
       if(this.currentPassword == "" || this.newPassword == ""){
          alert("Your new password or current password is empty")
       }else{
          const changeresult =  await userService.changePassword(this.User.user_id, this.$md5(this.currentPassword) , this.$md5(this.newPassword))

         if(changeresult.data == "Old password is not correct, please try again"){
            alert(changeresult.data)
         }else{
            alert(changeresult.data)
            this.currentPassword=""
            this.newPassword=""
         }
       }
    },

     getCurrentUser(user){
        this.User = user
      },


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
  grid-column: 1;
  box-shadow: 5px 0px 10px -5px rgba(54, 54, 54, 0.527);
  height: auto;
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

.changePasswordWindow{
   margin-top: 20vh;
   font-size: 2rem;
}


.changePasswordWindow h1{
   font-size: 5rem;
}

.icon-eye{
    height: 10vh;
    width: 5vw;   
}

.password{
    // margin-right: 2vw;
     width: 21vw;
     text-align: center;
      border: solid #e8e8e8;
      border-radius: 12px;
   
}

.ChangeButton{
    background: black;
    color: white;
    width: 10vw;
    border-radius: 12px;
}

.ChangeButton:hover{
    border: solid 0.5px #1677FF;
    color: #1677FF;
    transition: 0.5s;
}

       
</style>