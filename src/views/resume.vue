!<template>
  <div class="resumeContainer">

    <div class="hpHeader">
      
    <Header>
       <div slot="search" class="rSearchBar" >
             <!-- bulb -->
                  <a-icon :type="dark?'alert':'bulb'" class="w" theme="outlined" :style="{fontSize:'30px', color:'white'}"  @click="darkMode()"/>
            </div>
    </Header>
  </div>


      <button class="rSideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon class="foldList" :style="{fontSize:'24px',marginTop:'5px'}" :type="collapsed ? 'close' : 'menu-fold'" /></button>

 

       <span  class="myName" @click="redirecting()" :style="collapsed?'color: black' :'color: white'">  JUNJIE LIN</span>

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
                <span class="darkModeUse">Software Engineer</span>
            </div>

            <div class="avatar">
                <img alt="" src="../assets/me.jpg"/>
            </div>

            <div class="aboutMe">
                 <p id="changeUnderline">About Me</p>
                 <span class="darkModeUse">I am a recent graduated student From the University of Sydney with major study in Software Engineering and have a huge passion for building software to solve some real-life problems. I also enjoy spending time on joining coding competition like Hackathon or Competitive Programming during my free times.</span>

                 

                 <p id="changeUnderline">My Project Blog</p> 
                 <div class="projectList" @click="toOther('/Ecommerce')">                
                    <p> + An E-commerce Web application with MEVN stack(MongoDB, ExpresssJS, VueJS, Nodejs) </p>
                    <span class="darkModeUse">02/02/2022</span>
                </div>

                <div class="projectList" @click="toOther('/project/Education')">
                    <p> + An online Education Web application with Vue, Springboot, SQL and Hibernate</p>
                    <span class="darkModeUse">02/02/2022</span>
                </div>

                <div class="projectList" @click="toOther('/project/Banana')">
                    <p> + An English teaching Web application with MEVN</p>
                    <span class="darkModeUse">02/02/2022</span>
                </div>

                <div class="projectList" @click="toOther('/project/Chat')">
                    <p> + A real-time chat web System that allows user to perform random matching chat with a stranger</p>
                    <span class="darkModeUse">02/02/2022</span>
                </div>


                   <p id="changeUnderline">My habit</p> 
                   <span class="darkModeUse">Playing basketball competition, listening to music, reading book (specially sci-fi), doing programming challenge (like Competitive Programming ) and learning about the popular technical stack in the industry</span>


                    <p class="reachMe" id="changeUnderline">Reach me on the Internet</p> <br/><br/>
                     <ul role="list" class="socialMedia">
                        <li><a href="https://github.com/MarkYnot" target="_blank"><button> <a-icon type="github" class="bottomLogo" theme="filled"/><span class="darkModeLink">@MarkYnot</span></button></a></li>
                        
                         <li><a href="https://www.linkedin.com/in/junjie-lin-142444216/" target="_blank"><button><a-icon type="linkedin" class="bottomLogo" theme="filled"/><span class="darkModeLink">@Linkedin(Junjie Lin)</span></button></a></li>
                        
                          <!-- <li><a href="https://github.com/MarkYnot" target="_blank"><button><img v-lazy="'/static/github1.png'"><span>@MarkYnot</span></button></a></li> -->
                        
                          <li id="email" @click="copyEmail()"><a><button><a-icon type="mail" class="bottomLogo" theme="filled"/><span id="emailText" class="darkModeLink">{{this.email}}</span></button></a>    <div v-if="this.emailShow" class="copyEmail" :style="copiedEmail?'background: green' :'background: rgb(93, 165, 173)'">{{this.copy}}</div></li>    
                     </ul>

                  
            </div>

  

   </div>
</div>
</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import '../assets/css/sidebar.css'

  export default {
    data(){
       return {
          collapsed: false,
          allVideo:[],
          User:[],
          dark:false,
          emailShow: false, 
          copiedEmail:false,
          copy:"Copy Email?",
          email: 'mark727221029@gmail.com'
         

       }
    },

     components:{
     Header,
     SideBar,
   },

   mounted(){
      console.log(window.innerWidth, window.innerHeight)
      document.getElementById('email').addEventListener('mouseover', ()=>{
          this.emailShow = true;
      }, false)

      document.getElementById('email').addEventListener('mouseout', ()=>{
          this.emailShow = false;
      }, false)
   },



   beforeDestroy(){
         document.getElementById('email').removeEventListener('mouseover', ()=>{
          this.emailShow = true;
      }, false)

      document.getElementById('email').removeEventListener('mouseout', ()=>{
          this.emailShow = false;
      }, false)

   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    toOther(link){
      this.$router.push(link)
    },

      redirecting() {
        this.$router.push('/')
    },

    copyEmail(){
      console.log(1)
        navigator.clipboard.writeText(this.email)
            .then(() => {
              this.emailShow = true;
              this.copiedEmail = true;
              this.copy = 'Just copied';

              setTimeout(() => {
                this.emailShow = false;
                this.copiedEmail = false;
                this.copy = 'Copy Email?';
              }, 2000);
            })
            .catch(error => {
              console.error('Failed to copy the code:', error);
            });
      
    },

      darkMode(){
        this.dark = !this.dark;
        const intro =  document.getElementsByClassName('intro')
        const bottomLogo = document.getElementsByClassName('bottomLogo')
        const darkModeLink = document.getElementsByClassName('darkModeLink')
        const darkModeSpan = document.getElementsByClassName('darkModeUse')
        const pTag = document.getElementsByTagName('p')


       if(this.dark == true){
            document.querySelector('.resumeContainer').style.background = 'rgb(32, 32, 35)'
            darkModeLink.forEach(item=>item.style.color = 'rgb(186, 149, 81)')
            intro.forEach(item=>item.style.color = 'rgba(255,255,255,0.08)')
            pTag.forEach(item=>item.style.color = 'white')
            darkModeSpan.forEach(item=>item.style.color = 'rgba(255,255,255,0.92)')
            bottomLogo.forEach(item=>item.style.color = 'rgb(186, 149, 81)')

       }else{
              document.querySelector('.resumeContainer').style.background = 'rgba(86, 118, 105, 0.768)'
               pTag.forEach(item=>item.style.color = '#2c3e50')
               darkModeSpan.forEach(item=>item.style.color = '#2c3e50')
               intro.forEach(item=>item.style.color = '#dbdbdb36')
               darkModeLink.forEach(item=>item.style.color = '#2c3e50')
               darkModeSpan.forEach(item=>item.style.color = 'black')
            bottomLogo.forEach(item=>item.style.color = 'black')
              
          }
     }

   }
    
  }
</script>

<style lang="scss" scoped>
 
 body{
  // line-height:0;
}

.resumeContainer{
  width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: auto 95%;
  grid-template-rows: 60px 92%;
  background: rgba(86, 118, 105, 0.768);
  overflow-y: scroll;
  transition: 1s all;
}

 .hpHeader{
    height: 100%;
    grid-row: 1;
    grid-column: 2/3;
    background: transparent;
    float:right;
    // opacity: 0.4;
    // border-bottom: 2px solid #dbdbdb;  
}

.rSideBarButton{
  width: 3vw;
  height: 3.6vh;
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
   font-size: 30px;
   float: left;
   margin-left: 15px;
   position: absolute;
   color: white;
   font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
   transition: 1s;
   z-index: 20;
   @media screen and (max-width:767px){
      font-size: 25px;
      margin-top: 0.5vh;
   }
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
  width:35%;
  
  // -webkit-box-shadow: #666 0px 0px 10px;
  // -moz-box-shadow: rgb(61, 61, 61) 0px 0px 10px;
}

.rSearchBar{
  //  width:15vw;
  //  height:5vh;
   margin-top: 13px;
   transition: all 1s;
     @media screen and  (min-height:400px) and (max-width:737px){
       grid-column: 3/4;
   }
}

.w{
  font-size: 20px !important;
}

.rSearchBar:hover{
   opacity: 0.6;
}

.Content{
  grid-row: 2;
  grid-column: 1/3;
  width:100%;
  height: 100%;
  // overflow-y:scroll;
  // background: #dbdbdb36;
  display: grid;
  grid-template-columns: 10% auto 15% 12% 8%;
  grid-template-rows: 20% auto 50%;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  // gap: 15px;
}

.intro{
  grid-row:1/2;
  grid-column:2/5;
  background: #dbdbdb36;
  width: 100%;
  height: fit-content;
  padding: 10px 20px;
  border-radius: 5px;
  overflow-y: hidden;

  // margin-left: 12vw;
  // overflow: scroll;
}

.intro p{
  font-size: 18px;
  font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
  // display: inline;
  text-align: center;
    @media screen and (max-width:767px){
       font-size: 15px;
   }
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
  height:0;
  float: left;
  font-size: 50px;
  font-weight: bolder;
}

.rName span{
  float:left;
  line-height: 10px;
  // position: absolute;
  font-size: 25px;
}

#email{
   display: grid;
   grid-template-rows: 100%;
   grid-template-columns: 5% 22% 60%;
}

#emailText{
  grid-column: 2 !important;
}

.copyEmail{
   grid-column: 3;
   transition: 0.5s all;
   width: 58px;
   height: 14px;
   font-size: 8px;
   background: rgb(93, 165, 173);
   font-weight: 500;
   color: white;
   padding-top: 1px;
   border-radius: 3px;
   margin-top: 6px;
   box-shadow: #666 0px 0px 10px;
}


//For Samsung and Iphone
@media screen and  (min-height:400px) and (max-width:737px){
  .rName{
    grid-column: 2/4;
  }

  .rName p{
    font-size: 35px !important;
  }

  .rName span{
   font-size: 15px !important;
}

  .intro{
    grid-column: 2/4;
  }

  .rSearchBar{
    grid-column: 2/3;
    margin-left:25px;
    margin-top: 12px;
  }

  .w{
    font-size: 20px !important;//dark mode icon
    transition: all 0.8s;
  }

  .Content{
     grid-template-rows: 18% 20% auto auto;
     grid-template-columns: 10% auto auto 10%;
  }

.avatar{
     grid-row: 3/4 !important;
     grid-column: 2/4 !important;
     margin-top:10px !important; 
     margin-left:50px !important;
     width:150px;
     height:200px;
     z-index: 1;
     float:none !important;
  }

 .aboutMe{
     z-index: 1;
     grid-row: 4/5 !important;
     grid-column: 2/4 !important;
 }

 .projectList span{
    margin-top: 40px !important;
 }
}

//for ipad and ipad mini
@media screen and (min-width: 768px)and (max-width:912px){
  .rName p{
    font-size: 35px !important;
  }

   .projectList span{
    margin-top: 40px !important;
 }

 .rSearchBar{
     grid-column: 2/3;
 }

 .Content{
   grid-template-rows: 10% auto 62%;
 }

 .intro{
   margin-top: 13px;
 }


}

//For Galaxy Fold
@media screen and (max-width: 280px){
    .rName p{
    font-size: 27px !important;
  }

  .avatar{
       margin-left:20px !important;
  }


  .foldList{
     font-size: 19px !important;
  }

  .rSideBarButton{
     margin-top: 0.4vh;
  }

  .myName{
     font-size: 22px !important;
  }

  .projectList span{
    line-height: 55px !important;
  }

   .projectList span{
    margin-top: 40px !important;
 }

   .aboutMe{
    grid-column: 2/5 !important;
   }

   .rSearchBar{
     grid-column: 2/3;
     grid-row: 1;
   }

   .intro{
    grid-column:2/4;
    margin-left: 10px;
   }

   .w{
     font-size: 16px !important;
   }

   .aboutMe{
     grid-column: 2/4 !important;
   }

   .reachMe{
     font-size: 18px !important;
   }
}


//fit big screen
@media screen and (min-width: 1097px){
   .Content{
     grid-template-columns: auto 456px 100px 200px auto;
     grid-template-rows: 80px 350px auto;
   }

    .myName{
      font-size: 40px
   }

    .foldList{
      font-size: 35px !important;
   }

    .aboutMe p{
      font-size: 30px !important;
    }

    .aboutMe span{
        font-size: 20px !important;
    }

    .projectList{
      height: 100px !important;
    }

    .projectList p{
      font-size: 20px !important;
    }

    .projectList span{
      margin-top: 60px !important;
    }

}

.avatar{
  border: 2px solid white;
  grid-row: 2/3;
  grid-column: 3/4;
  width:200px;
  height:259px;
  margin-top: 40px;
  float:right;
  margin-left: 20px;
}

.avatar img{
  width:100%;
  height:100%;
}

.aboutMe{
  grid-column: 2/5;
  grid-row:3/4;
  width: 100%;
  height: fit-content;
}

.aboutMe p{
  float: left;
  height:0;
  font-size: 20px;
  font-weight: 600;
  text-decoration:underline;
  margin-top:25px;
}

.aboutMe span{
  float: left;
  text-align: left;
  margin-top:20px;
}

.projectList{
    width: 100%;
    min-height: 60px;
    height:fit-content;
    float: left;
    margin-top:30px;

}

.projectList p{
  text-decoration: none !important;
  font-weight: 700;
  font-size: 13px;
  text-align: left;
  margin: 0;
}

.projectList span{
  // margin-top: 1vh;
  float: left;
}

.projectList:hover{
  background: rgb(153, 171, 197);
}

.socialMedia{
    float: left;
    width: 100%;
    height:fit-content;
    padding: 0;
    // border: solid 1px black;
}

.socialMedia li{
  width: 100%;
  float: left;
  margin-top: 2vh;
  margin-left:1vw;
  font-weight: bold;
  list-style: none;

  // list-style-image: url(../assets/Ecommerce.jpeg);
}

.socialMedia li button{
  display: grid;
  grid-template-columns: 30px 1fr;
  background: transparent;
  border: none;
  border-radius: 0.375rem;
  width: fit-content;
}

.socialMedia li button:hover{
   background: rgb(153, 171, 197);
   transition: 0.4s;
}

.socialMedia li button span{
   grid-column: 2;
   margin: 0;
   font-size: 12px;
   font-weight: 500;
}


.bottomLogo{
   grid-column: 1;
   color:black;
   font-size:15px;
   margin-top: 2px;
}


.socialMedia a{
 color: black !important;
 float: left;
}


</style>