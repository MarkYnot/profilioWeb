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

  <!-- <v-clamp :class="{demo:true, hyphens: true, rtl: false}" autoresize :max-lines="3" :style="{width:'60%'}">hahahahahahahahahahahahahahahahahahahhshshshshhshsshshshshshaha</v-clamp> -->
 
          <div class="videoContent">
                <section class="videoPlayer">
                    <Video :videoURL="videoURL"/>
                </section>

                <a-menu class="videoMenu" mode="vertical" >
                  <!-- <a-menu-item key="0">
                     <router-link :to="`/video&1`"/>
                   <img alt="" src="../assets/logo.png">
                   <div class="itemText">
                  <p>NavigaNavigaNavigaNavigaNavigaNavigaNavigaNaviga</p><br/>
                    
                    <span>Video课程结束骚</span>
                    <span>560 views &nbsp;&nbsp; ●2016.05.11</span>
                   </div>
                  </a-menu-item> -->
                  
                   <a-menu-item v-for="(item, index) of allVideo" :key="index" @click="refreshPage">
                    <router-link :to="`/video&${item.video_id}`"/>
                   <img alt="" :src="item.cover_photo">
                   <div class="itemText">
                    <p>test</p><br/>
                    <span>physics</span>
                    <span>5000 views &nbsp;&nbsp; ● 11/11/2011</span>
                   </div>
                  </a-menu-item>

            </a-menu>
             
             <div class="videoIntro">
                  <span class="introTitle">{{this.currentVideo.title}}</span><br/><br/><br/>

                  <span>{{this.currentVideo.view_times}} views &nbsp;&nbsp; &nbsp;●&nbsp;{{this.currentVideo.upload_date}}</span>

                    <div class="SaveSession">
                       <a-icon type="save" :theme="save? 'filled': 'outlined'" @click="saveThisVideo"/>&nbsp;Save

                  </div>
                  
                  <div class="likeSession">
                      <a-icon type="like" :theme="like&!dislike? 'filled': 'outlined'" @click="likeThisVideo"/>&nbsp;{{this.currentVideo.like_num}}&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                      
                      <a-icon type="dislike" :theme="dislike&!like? 'filled': 'outlined'" @click="dislikeThisVideo"/>&nbsp;{{this.currentVideo.dislike}}
                  </div>
             </div>


             <div class="addComment">
                     <span class="commentTitle">{{this.allComments.length}}</span><span class="commentTitle" v-if="this.allComments.length >= 2">Comments</span><span class="commentTitle" v-else>Comment</span><br/><br/><br/>
                      <img alt="" v-lazy="this.User.photo" />
                      <!-- v-if="!hasPhoto|| !photoCorrect" -->
                      <!-- <img alt="" v-lazy="this.photo" v-if="hasPhoto&photoCorrect"/> -->
                      <input type="text" id="comment" placeholder="Add a public comment..." class="commentInput" @input="commentActive" @click="inputStatusChange"/><br/>

                      <div class="addCommentButton" v-if="inputStatus">
                          <button class="cancelButton" @click="cancalComment">CANCEL</button>&nbsp;&nbsp;<button :class="input?'commentButtonLight':'commentButton'" :disabled="!input" @click="  addComment">COMMENT</button>
                  </div>
               </div>

               <div class="othersComment">
                      <div v-for="(item) of allComments" :key="item.comment_id" class="videoComment">
                      <img alt="" v-lazy="item.user.photo" />
                        <span class="commentUser">{{item.user.lastname}}</span><br/>
                        <span class="commentText">{{item.comment}}</span>
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
import Video from '../components/mini-player.vue'
import userService from '../services/userService'

  export default {
     data(){
       return {
          collapsed: false,
          allVideo:[],
          like: false,
          dislike: false,
          input: false,
          inputStatus: false,
          currentVideo:[],
          videoURL:'',
          User:[],
          save:false,
          allComments: []
       }
    },

     components:{
     Header,
     SideBar,
     VideoService,
     Video
   },

    async mounted(){
        this.checkLikeStatus()
    },

    async created(){
      let id = this.$route.params.id
       const videoResult = await VideoService.getAllVideo()
       this.allVideo = videoResult.data
       if(this.allVideo){
         const result = this.allVideo.find(item=>{
             return item.video_id == id
         })
         this.currentVideo = result
         console.log(this.currentVideo)
         this.playVideo()
         this.getAllComment()
      
        await VideoService.addViewTime(result.video_id)
       }else{
          alert('This video is unavailable yet, please select others')
           this.$router.back()
         
       }
      
   },

   watch:{
        allComments: async function(newData){
         
            const result = await VideoService.updateCommentList(newData[newData.length-1], this.currentVideo.video_id)
            console.log(result)
        }
   },

   methods:{

     checkLikeStatus(){
     
     },

     addComment(){
        const commentInput = document.getElementById('comment').value
        if(commentInput =="") return alert('please enter comment first')
        const newComment = {"comment":commentInput, "user": this.User, "video": this.currentVideo}
        this.allComments.push(newComment)
        document.getElementById('comment').value = ""
        console.log(this.allComments)
        
     },

     async getAllComment(){
        const result = await VideoService.getSingleVideo(this.currentVideo.video_id)
         this.allComments = result.data[0].comments
         console.log(result)
     },

     playVideo(){
        this.videoURL = this.currentVideo.src
        console.log(this.videoURL)
        
     },
      toggleCollapsed() {
          this.collapsed = !this.collapsed;
    },

    async saveThisVideo(){
      if(this.save == true){
          return alert('You saved this video already')
      }else{
          this.save = true
          const result = await VideoService.addCollectVideo(this.User.user_id, this.currentVideo.video_id)
          if(result.data == true){
             alert('Video Added')
          }else{
            alert('add fail, please try again')
          }
      }
    },

     async likeThisVideo(){
     
          
            // this.dislike = false;
       if(this.dislike == true){
          return alert('Please cancel your dislike first')
       }else{
           this.like = !this.like;
            if(this.like == true){
              this.currentVideo.like_num = this.currentVideo.like_num +1
              await VideoService.addLikeVideo(this.User.user_id, this.currentVideo.video_id, this.currentVideo.like_num, this.like)
          }else{
              this.currentVideo.like_num = this.currentVideo.like_num - 1
              await VideoService.addLikeVideo(this.User.user_id, this.currentVideo.video_id, this.currentVideo.like_num, this.like)
        }
       }
        
    },

     async dislikeThisVideo(){
    
       if(this.like == true){
         return alert('Please cancel your like first')
       }else{
          this.dislike = !this.dislike;
          if(this.dislike==true){
              this.currentVideo.dislike = this.currentVideo.dislike +1
           await VideoService.addDislikeVideo(this.User.user_id, this.currentVideo.video_id, this.currentVideo.dislike, this.dislike)
          }else{
                this.currentVideo.dislike = this.currentVideo.dislike - 1
           await VideoService.addDislikeVideo(this.User.user_id, this.currentVideo.video_id, this.currentVideo.dislike, this.dislike)
          }
       }
      //  this.like = false;
    },

     getCurrentUser(user){
        let id = this.$route.params.id
        this.User = user
        const result = this.User.likeVideoList.find(item=>{
          return item.video_id == id
        })
        if(result){
          this.like = true
        }
        
        const collectionResult = this.User.collectVideoList.find(item=>{ return item.video_id == id})
        if(collectionResult) this.save = true;

         const dislikeResult = this.User.unlockVideoList.find(item=>{ return item.video_id == id})
        if(dislikeResult) this.dislike = true;
      },

    cancalComment(){
      this.inputStatus =false;
      document.getElementById('comment').value = ""
    },

    commentActive(){
      if(document.getElementById('comment').value != ""){
         this.input = true
      }else{
        this.input = false
      }
    },

    inputStatusChange(){
      this.inputStatus = true
    },

    refreshPage(){
      window.location.reload(false)
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
    width:100%;
    grid-row: 1;
    grid-column: 2/3;
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
	height: fit-content;
  // transform: translate(50%,50%);
  grid-template-columns: minmax(40px, auto) 1fr;
  grid-template-rows: auto;
  margin-top:0.2vh;
}

.SideBar{
  grid-row: 1;
  grid-column: 1;
  box-shadow: 5px 0px 10px -5px rgba(54, 54, 54, 0.527);
  height:auto;
  // -webkit-box-shadow: #666 0px 0px 10px;
  // -moz-box-shadow: rgb(61, 61, 61) 0px 0px 10px;
}

.videoContent{
  grid-row: 1;
  grid-column: 2;
  width:100%;
  // margin-top: 0.5vh;
  clear:both;
  height: fit-content;
  background: #dbdbdb36;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 80vh 12.4vh 13vh auto;
}

.videoMenu{
  grid-column: 2;
  grid-row: 1/5;
  background: none;
  margin-top: 1vh;
  // overflow-y: scroll;
  
}

/deep/ .videoMenu .ant-menu-item{
   height: 11vh;
}

/deep/ .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected{
      background: none;
}

/deep/ .ant-menu-item-selected {
    color: rgba(0, 0, 0, 0.65);
 
}


/deep/ .ant-menu-item:hover{
     color:rgba(0, 0, 0, 0.65);
}

/deep/ ::selection{
 color:rgba(0, 0, 0, 0.65);
 background: none;
}

/deep/ .videoMenu .ant-menu-item img{
  float: left;
  height:100%;
  width:40%
}

/deep/ .videoMenu .ant-menu-item span{
  float: left;
  font-size: 69%;
  font-weight:400;
  width: 100%;
  text-align:left;
}

.itemText{
    float: left;
    height:100%;
    width: 58%;
    margin-left:5px;
}

/deep/ .videoMenu .ant-menu-item p{
  float: left;
  overflow:hidden;
  text-overflow:ellipsis;
  white-space:nowrap;
  margin-bottom: 0;
}

/deep/ .videoMenu .ant-menu-item{
  font-size: 1.2vw;
  font-weight:700;
  line-height: 1.9;
  text-align: center;  
  overflow: hidden;
}

/deep/ .ant-menu-vertical .ant-menu-item:not(:last-child){
  margin-bottom: 20px;
}

.demo{
  line-height: 1;
  padding: 1rem;
}

.hyphens{
  hyphens:auto;
}

br{
display: block;
// content: "";
// line-height: 1;
margin-top: 0.5vh;
}

.rtl{
  direction: rtl;
}

.videoPlayer{
  grid-column: 1;
  grid-row: 1;
  margin-top: 2vh;
  width: 100%;
  
  // object-fit: contain;
}

.videoIntro{
  grid-column: 1;
  grid-row: 2;
  width:93%;
  margin-left:1.3vw;
  height: 100%;
  overflow: hidden;
  border-bottom: 3px solid #dbdbdb;  
}

.videoIntro span{
  float: left;
}

.introTitle{
  text-align: left;
  font-size: 1.2vw;
  font-weight:700;
   margin-top: 0.5vh;
}

.likeSession{
   float: right;
   text-align: center;
   margin-right: 2.5vw;
   border-bottom: 2px solid black;
   margin-top: 1%;
   line-height:4vh;
   

}

/deep/ .anticon{
  font-size: 1.5vw !important; 
}

.SaveSession{
  float: right;
  line-height:3vh;
  margin-top: 1%;
  margin-right: 3vw;
}

.addComment{
  grid-column: 1;
  grid-row: 3;
  height: 100%;
  width:100%;
  float: left;
}

.commentTitle{
   float: left;
   font-size: 1.3rem;
   font-weight: bold;
   margin-top:2vh;
   margin-left: 0.7vw;
}

.addComment img{
  height: 4vh;
  border-radius: 50%;
  margin-left:1.3vw;
  // width: 3vw;
  float:left;
  margin-top: 1.5vh;
}

.commentInput{
  float: left;
  margin-left:1vw;
  margin-top: 2vh;
  width:88%;
  border-left: 0px;
  border-right:0px;
  border-top:0px;
  border-bottom: 3px solid #dbdbdb; 
  outline: none;
  resize: none;
  // word-wrap: break-word;
  transition: border 0.5s;
  background: none;
}

.commentInput:focus{
  border-bottom: 2px solid black;
}

.addCommentButton{
   float:right;
   margin-top:1vh;
   font-size: 1vw;
   margin-right: 3.5vw;
}

.cancelButton{
   background: none;
   border: 0px;
}

.commentButton{
  border: 0px;
  background: #d1d1d179;
  color:#696868;
}

.commentButtonLight{
    border: 0px;
  background: #1890ff;
  color: white;
}

.othersComment{
  grid-row: 4/5;
  grid-column: 1;
  margin-top: 2vh;
  height: 100%;
  width:100%;
  float: left;
  overflow:hidden;
}



.othersComment img{
  height: 4vh;
  border-radius: 50%;
  float:left;

}

.othersComment span{
  float: left;
}

.videoComment{
   float:left;
   width:100%;
   margin-left:1.3vw;
   margin-bottom: 3vh;
}

.commentText{
  margin-left:20px;
}

.commentUser{
    margin-left:20px;
    font-weight: bold;
}

</style>