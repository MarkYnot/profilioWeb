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


    <div class="centreBody">


          <div class="videoContent">
                <section class="videoPlayer">
                     <iframe ref="iframe" width="100%" height="100%" scrolling="no" border="no" src="/5620game1/index.html" frameborder="0" marginheight="0" marginwidth="0" autoplay:0/>
                </section>

               

                <a-menu class="videoMenu" mode="vertical" >

                  <a-menu-item>
                    <span class="TopList">Top Videos</span>
                  </a-menu-item>
                  <a-menu-item v-for="(item, index) of recommandVideo" :key="index">
                      <router-link :to="`/video&${item.video_id}`"/>
                   <img alt="" :src="item.cover_photo">
                   <div class="itemText">
                    <p>{{item.title}}</p><br/>
                    <span>{{item.category}}</span>
                    <span>{{item.view_times}} views &nbsp;&nbsp; ●{{item.upload_date}}</span>
                   </div>
                  </a-menu-item>
                </a-menu>
             
             <div class="videoIntro">
                  <span class="introTitle">Numbers Cannon</span><br/><br/><br/><br/>

                  <span class="gameDescription">Ball common game based on general mathematic</span>

                  
                  
                  <div class="likeSession">
                      <a-icon class="likeIcon" type="like" :theme="like&!dislike? 'filled': 'outlined'" @click="likeThisVideo"/>&nbsp;{{this.likeNum}}&nbsp;&nbsp; &nbsp;&nbsp; &nbsp;
                      
                      <a-icon class="likeIcon" type="dislike" :theme="dislike&!like? 'filled': 'outlined'" @click="dislikeThisVideo"/>&nbsp;{{this.dislikeNum}}
                  </div>

                    <div class="SaveSession" @click="needHelp">
                       <a-icon type="save" />&nbsp;Need Help?
                  </div>
             </div>


             <div class="addComment">
              
                     <span class="commentTitle">{{this.allComments.length}}</span> <span class="commentTitle" v-if="this.allComments.length >= 2">Comments</span><span class="commentTitle" v-else>Comment</span><br/><br/><br/>
                      <img alt="" v-lazy="this.User.photo" />
                      <!-- v-if="!hasPhoto|| !photoCorrect" -->
                      <!-- <img alt="" v-lazy="this.photo" v-if="hasPhoto&photoCorrect"/> -->
                      <input type="text" id="comment" placeholder="Add a public comment..." class="commentInput" @input="commentActive" @click="inputStatusChange"/><br/>

                      <div class="addCommentButton" v-if="inputStatus">
                          <button class="cancelButton" @click="cancalComment">CANCEL</button>&nbsp;&nbsp;<button :class="input?'commentButtonLight':'commentButton'" :disabled="!input" @click="addComment">COMMENT</button>
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
          likeNum:2,
          dislikeNum:3,
          recommandVideo:[],
          allComments:[]
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
       const videoResult = await VideoService.getAllVideo()
       this.allVideo = videoResult.data
       for(var i = 0; i< 4; i++){
          this.recommandVideo.push(this.allVideo[i])
       }

       this.getAllComment()
   },

   watch:{
        // allComments: async function(newData){
         
        //     const result = await VideoService.updateCommentList(newData[newData.length-1], this.currentVideo.video_id)
        //     console.log(result)
        // }
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
     },

    async getAllComment(){
        const result = await VideoService.getSingleVideo(1)
         this.allComments = result.data[0].comments
         this.currentVideo = result.data[0]
     },

    async needHelp(){
         let confirmation = confirm('You Need help for solve game problem?')
         if(confirmation){
           this.$router.push({path: '/video&5'})
         }
    },

     async likeThisVideo(){
     
            this.like = !this.like;
            this.dislike = false;

        if(this.like == true){
          this.likeNum = this.likeNum +1
            
        }else{
           this.likeNum = this.likeNum - 1
        }
    },

     dislikeThisVideo(){
       this.dislike = !this.dislike;
       this.like = false;
        if(this.dislike == true){
          this.dislikeNum = this.dislikeNum +1
            
        }else{
           this.dislikeNum = this.dislikeNum - 1
        }
    },

     getCurrentUser(user){
     
        this.User = user
        if(this.User.age>20){
         alert('This game is not available for your age range')
         this.$router.back()
        }
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
  grid-template-columns:100%;
  grid-template-rows: 5% 95%;
}

 .hpHeader{
    height: 100%;
    width:100%;
    grid-row: 1;
    grid-column: 1;
}

.TopList{
  margin-top: 2vh;
   font-size: 3rem !important;
   float: left;
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
  grid-column: 1;
  grid-row: 2;
  display: grid;
  width: 100%;
	height: fit-content;
  // transform: translate(50%,50%);
  grid-template-columns: 100%;
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
  grid-column: 1;
  width:100%;
  // margin-top: 0.5vh;
  clear:both;
  height: auto;
  background: #dbdbdb36;
  display: grid;
  grid-template-columns: 75% 25%;
  grid-template-rows: 80vh 12.5vh 13vh auto;
}

.videoMenu{
  grid-column: 2;
  grid-row: 2/5;
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
  grid-column: 1/3;
  grid-row: 1;
  margin-top: 2vh;
  width: 100%;
  background: black;
  
  // object-fit: contain;
}

.videoIntro{
  grid-column: 1;
  grid-row: 2;
  width:93%;
  margin-left:1.3vw;
  height: 100%;
  display:grid;
  grid-template-rows: 20% 55% 25%;
  grid-template-columns: 70% 20% 10%;
  overflow: hidden;
  border-bottom: 3px solid #dbdbdb;  
}

// .videoIntro span{
//   float: left;
 
// }

.introTitle{
  grid-column: 1;
  grid-row: 1/2;
  text-align: left;
  font-size: 1.2vw;
  font-weight:700;
}

.gameDescription{
  grid-row:2/4;
  grid-column: 1;
  margin-top:1vh;
  float: left;
  word-wrap: break-word;
  text-align: left;
  overflow-y:scroll;
}

.likeSession{
   float: right;
   text-align: center;
   margin-right: 2.5vw;
   border-bottom: 2px solid black;
   grid-row: 3/4;
   grid-column: 2;
  // margin-top:0.1vh;
   height:2.5vh;
   line-height: 1vh;
}

.likeIcon{
  // margin-top:80%;
}

/deep/ .anticon{
  font-size: 1.5vw !important; 
}

.SaveSession{
  float: left;
  line-height:2vh;
  // margin-right: 3vw;
   grid-row: 3/4;
   grid-column: 3;
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