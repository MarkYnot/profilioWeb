!<template>
  <div class="profileContainer">

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
             <!-- edit profilio window-->
        <transition name="slide-fade">
        <div id="profilioLeft" class="profilio_left">

            <strong style="fontSize: 3rem; textAlign: left; float: left; ">Personal Information</strong>
            <br/><br/><br/><br/>
            
            <form>
            <span class="subTitle">Email address:</span><br/>
            <input v-model="User.email" id="email" class="oneInput" type="text" style="width: 100%; "  /><br/><br/><br/>


            <span class="subTitle">First name:</span>
            <span style=" fontSize: 1vw; marginLeft: 12vw">Last name:</span>

             <br/>
            <input   v-model="User.firstname" id="firstname" class="oneInput" type="text" style="width: 60.1%;"/>
            <input   v-model="User.lastname" id="lastname" type="text" style="width: 33%;" />
            <br/><br/>

            <span class="subTitle" >Phone Number:</span><br>
            <input   v-model="User.phone" id="phone" class="oneInput" type="text" style="width:100%; "/><br/><br/><br/>

        
             <span class="subTitle" >Gender:</span><br/>
             
            <div class="gender">
             <input type="radio" class="oneInput" name= "gender" value="male"  v-model="User.gender"/><span class="genderRadioSpan">Male</span>
             
            <input type="radio" class="oneInput" name="gender" value="female"  v-model="User.gender"/><span class="genderRadioSpan">Female</span>
              </div>
              <br/><br/><br/>


              <span class="subTitle">Region:</span>
             <span style=" fontSize: 1vw; marginRight: 2vw" >Age:</span>

             <br/>
           <input type="text" v-model="User.region" class="regionAndAge" style="width: 48%;">
      
           
            <input type="text" v-model="User.age" class="regionAndAge" style="width: 50%;">
           
      
            
            <br/><br/><br/>

            <span class="subTitle">Bio:</span><br/>
             <textarea v-model="User.personalNote" rows="10" maxlength="500" id="bio" class="textInput" placeHolder="Type Your bio here"/>
            </form>
        
            
            <br/><br/><br/>  
            <br/><br/><br/>
            <br/><br/><br/><br/><br/><br/>

        <button type="button" class="profileLeft_bottom" @click="updateInfo">Update</button>
        <button  type="reset" class="changePasswordButton" value="Reset"> Reset</button>
          
       </div>
      </transition>


 
       <transition name="slide-fade">
      <div id="profilioRight" class="profilio_right">
        
              <!-- <img alt="" v-lazy="this.photo" v-if="hasPhoto&photoCorrect"/> -->
             <img v-lazy="User.photo" alt=""><br/><br/><br/>
             <a-upload
                  name="file"
                  :customRequest= dummyRequest
                  :multiple="false"
                  :file-list= this.selectedFileList
                  accept = "image/*"
                  :beforeUpload= handlePhotoUpload
                  @change="onChange"
              >
                <a-button :style="{}"> <a-icon type="upload" /> Click to Upload new Avantar</a-button>
          
          </a-upload>  <br/><br/>
          <button type="button" class="profileRight_bottom" @click="onSuccess">Change Avantar</button>

              <br/>
              <br/>
              <br/>
              <br/>
       
        </div>
        </transition>
         
 
       </div>
      
</div>

  </div>
</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
  import userService from '../services/userService';

  export default {
    data(){
       return {
          collapsed: false,
          allVideo:[],
          User:[],
          avatarUrl:"",
          selectedFile:"",
          selectedFileList:[],
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

     getCurrentUser(user){
        this.User = user
        console.log(this.User)
      },

    startSearch(){
      const videoInput = document.getElementById('textInput').value
      if(videoInput != ""){
         this.$router.push({path:`/search&${videoInput}`})
      }else{
         alert('please enter keyword first')
      }
     
    },

     onSuccess(){
        const userid = this.$cookies.get('userid')
       userService.changeAvantar(this.avatarUrl, userid).then(res=>{
         console.log(res)
           if(res.data == true){
              alert("Avantar successfully changed")
              window.location.reload(false);

           }else{
             alert("Change fail, please try again")

           }
       })
     },
      onChange(info){

        console.log(info.file)
        const nextState = {};
        switch(info.file.status){
          case "uploading":
          nextState.selectedFileList = [info.file]
          break;

          case "done":
            
            nextState.selectedFile = info.file;
            nextState.selectedFileList = [info.file];
            this.getBase64(info.file.originFileObj, imageUrl =>{
                    this.avatarUrl = imageUrl
            }); 
            
   
            
            break;

          default:
             nextState.selectedFile = null;
             nextState.selectedFileList = [];
        }
           this.selectedFile = nextState.selectedFile
           this.selectedFileList = nextState.selectedFileList

     },

      dummyRequest ({ file, onSuccess }) {
       console.log(200)
        setTimeout(() => {
          onSuccess("ok");
        }, 0);
      },

           getBase64(img, callback) {
          const reader = new FileReader();
           reader.readAsDataURL(img);
         
           reader.onload = ()=> callback(reader.result)
     },


      handlePhotoUpload(image){
       if(image.size/1024/1024>5){
         alert("image must smaller than 5MB");
         return false;
         }

      },

       async updateInfo(){
        let username = document.getElementById("phone").value
        let firstname = document.getElementById("firstname").value
        let lastname = document.getElementById("lastname").value
        let email = document.getElementById("email").value
        let bio = document.getElementById("bio").value
        if(username == "" || firstname == "" || lastname == "" || email == "" || bio == ""){
          alert("Your info cannot be empty")
        }else{
          const updateResult = await userService.updateUserInfo(this.User);
          if(updateResult.data == true){
             alert("Suceesfully Updated")
            //  window.location.reload(false);

          }else{
            alert("invaild input")

          }
        }
        
      },
    
   }

  }
</script>

<style lang="less" scoped>

body{
  line-height:0;
}

.profileContainer{
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

.textBox{
    margin-top: 20px;
    grid-column: 2;
    height: 35px;
    border: 1px solid gray;
    border-radius: 5px;
}

p{
    margin-top: -10px;
    font-size: 20px;
    font-family: PingFangSC-Regular, sans-serif;
}


.profilio_left{

 float: left;
  margin-left: 5vw;
  margin-top: 2vh;
  opacity: 1;
  transition: 1s;
}

.profilio_right{
  float: right;
  margin-right: 7vw;
  margin-top: 10vh;
  opacity: 1;
  transition: 1s;
}

.gender{
  float:left;
  margin-right: 22vw;
  
}


.profilio_left span{ 
   position: relative;
   /* right: 12vw; */
   text-align: left;
}

.profilio_left input{ 
   position: relative;
   border: solid #e8e8e8;
}

.profilio_left select{ 
   position: relative;
   border: solid #e8e8e8
   /* right: 12vw; */
}


.genderRadioSpan{
  right: 2vw;
  margin-right: 3vw;
  font-size: 13px;
  float: left;
  text-align: left;

}


.topicsTab{
   position: relative;
     font-size: 1vw;
   margin-right: 2vw;
   float: left;
   /* margin-right: 1.5vw;
   right: 11vw; */
}

.subTitle{

   margin-right: 1vw;
   float: left;
   text-align: left;
   font-size: 1vw;

}

.oneInput{
   margin-right: 2.5vw;
   float: left;
   border: solid #e8e8e8;
}

.regionAndAge{
   margin-right: 0.3vw;
   float: left;
   border: solid #e8e8e8;
}

.profilio_right img{
  height: 38vh;
  width: 25vw;
  border-radius: 50%;
  // margin-top: 4vh;
}

.avatarSpan{
    margin-right: 14vw;
    font-size: 20px;

}

.profilio_right /deep/ .ant-upload-list{
  height: 0.5vh;
}

/deep/ .ant-btn{
  //  float: left;
  //  position: relative;
  //  left: 2vw;
  //  margin-left: 1vw;
  height: 4.9vh;
  font-size: 1.6vw;
  border-radius: 12px;
  margin-top: 1vh;
}

.profileRight_bottom{
    // float: right;
    // position: relative;
    // right: 4vw;
    background-color: #1677FF;
    color: white;
    border-radius: 12px;
    font-size: 1.6vw;;
    // margin-right: 4vw;

}

.profileLeft_bottom{
    background-color:#1677FF;
    color: white;
    float: left;
    width: 45%;
    font-size: 1.8vw;
    margin-top: 6vh;
    border-radius: 12px;
}


.changePasswordButton{
    background-color: white;
    float: left;
    border: solid 0.5px rgba(128, 128, 128, 0.452);
    width: 45%;
    margin-left: 2.8vw;
    font-size: 1.9vw;
    margin-top: 6vh;
    text-align: center;
    border-radius: 12px;
}

.changePasswordButton:hover{
    background: rgba(128, 128, 128, 0.452);
    border:0;
    transition: 0.5s;
}


.cancelChangePassword:hover{
   filter: brightness(5);
}




/*animation */
.slide-fade-enter-active{
    transition: all 1s ease;

}

.slide-fade-enter, .slide-fade-leave-to {
  opacity: 0;
}

.passwordWindow-fade-enter-active{
   transition: all .3s ease;

}

// .passwordWindow-fade-leave-active {
//   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
// }

.passwordWindow-fade-enter, .passwordWindow-fade-leave-to{
  transform: translateX(10px);
  opacity: 0;
}

/deep/ .ant-menu-submenu:hover{
  border-bottom: 0 !important; 
  color: #1890ff !important;

}

.textInput{
   border: solid #e8e8e8;
  font-size: 1.2vw;
   outline: none;
   resize: none;
   padding:0;
   margin: 0;
   float:left;
   height: 14vh;
   width:100%;
}



       
</style>