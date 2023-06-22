!<template>
  <div class="likeVideoContainer">

    <div class="hpHeader">
      
    <Header>
       <div slot="search" class="rSearchBar" >
             <!-- bulb -->
                  <a-icon type="alert" class="w" theme="outlined" :style="{fontSize:'30px', color:'white'}" />
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
                <span>Software Engineer</span>
            </div>

            <div class="avatar">
                <img alt="" src="../assets/me.jpg"/>
            </div>

            <div class="aboutMe">
                 <p>About Me</p>
                 <span>I am a recent graduated student From the University of Sydney with major study in Software Engineering and have a huge passion for building software to solve some real-life problems. I also enjoy spending time on joining coding competition with my friends like Hackathon or Competitive Programming (Atcoder) during my free times.</span>

                 

                 <p>My Project Blog</p> 
                 <div class="projectList" >
                    <p> + A project using a MEVN (MongoDB, Express, Vue, NodeJs) to build an Ecommerce Website </p>
                    <span>02/02/2022</span>
                </div>

                <div class="projectList" >
                    <p> + A project using a MEVN (MongoDB, Express, Vue, NodeJs) to build an Ecommerce Website</p>
                    <span>02/02/2022</span>
                </div>

                <div class="projectList" >
                    <p> + A project using a MEVN (MongoDB, Express, Vue, NodeJs) to build an Ecommerce Website</p>
                    <span>02/02/2022</span>
                </div>

                <div class="projectList" >
                    <p> + A project using a MEVN (MongoDB, Express, Vue, NodeJs) to build an Ecommerce Website</p>
                    <span>02/02/2022</span>
                </div>


                   <p>My habit</p> 
                   <span>Playing video game (puzzle and rogue-like), listening to music (Lo-fi), reading book (specially sci-fi), manga/anime, doing programming challenge (like Competitive Programming ) and learning about the computer</span>


                    <p>Reach me on the Internet</p> <br/><br/>
                     <ul role="list" class="socialMedia">
                        <li><a href="https://github.com/MarkYnot" target="_blank"><button><img v-lazy="'/static/github.png'"><span>@MarkYnot</span></button></a></li>
                        
                         <li><a href="https://www.linkedin.com/in/junjie-lin-142444216/" target="_blank"><button><img v-lazy="'/static/linkedin.png'"><span>@Linkedin(Junjie Lin)</span></button></a></li>
                        
                          <!-- <li><a href="https://github.com/MarkYnot" target="_blank"><button><img v-lazy="'/static/github1.png'"><span>@MarkYnot</span></button></a></li> -->
                        
                          <li><a><button><img v-lazy="'/static/gmail.png'"><span>mark727221029@gmail.com</span></button></a></li>
                     </ul>
            </div>

  

   </div>
</div>
</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import '../assets/css/sidebar.css'
import VideoService from '../services/videoService'
import '../assets/css/video.css'
  export default {
    data(){
       return {
          collapsed: false,
          allVideo:[],
          User:[],
         

       }
    },

     components:{
     Header,
     SideBar,
     VideoService
   },

   mounted(){
      console.log(window.innerWidth, window.innerHeight)
   },

   async created(){
       

   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

      redirecting() {
        this.$router.push('/')
    },

   }
    
  }
</script>

<style lang="scss" scoped>
 
 body{
  line-height:0;
}

.likeVideoContainer{
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
  overflow-x: scroll;
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
  width:250px;
  
  // -webkit-box-shadow: #666 0px 0px 10px;
  // -moz-box-shadow: rgb(61, 61, 61) 0px 0px 10px;
}

.rSearchBar{
  //  width:15vw;
  //  height:5vh;
   margin-top: 10px;
   transition: all 1s;
     @media screen and (max-width:767px){
       grid-column: 3/4;
   }
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
  grid-template-columns: 20% auto 15% 20%;
  grid-template-rows: 20% auto 50%;
  // display: grid;
  // grid-template-columns: repeat(auto-fit, minmax(270px, 1fr));
  // gap: 15px;
}

.intro{
  grid-row:1/2;
  grid-column:2/4;
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
  @media screen and (max-width:769px){
   font-size: 40px;  
  }

}

.rName span{
  float:left;
  line-height: 10px;
  // position: absolute;
  font-size: 25px;
}

//For Samsung and Iphone
@media screen and (max-width: 767px){
  .rName{
    grid-column: 2/4;
  }

  // .rName p{
  //   font-size: 30px !important;
  // }

  .rName span{
   font-size: 15px !important;
}

  .w{
    font-size: 23px !important;//dark mode icon
  }

  .Content{
     grid-template-rows: 18% auto auto auto;
     grid-template-columns: 10% auto auto 10%;
  }

.avatar{
     grid-row: 3/4 !important;
     grid-column: 2/4 !important;
     margin-top:2vh !important; 
     margin-left:50px;
     width:150px;
     height:200px;
     z-index: 1;
     float:none !important;
  }

 .aboutMe{
     z-index: 1;
     grid-row: 4/5 !important;
 }

 .projectList span{
    margin-top: 40px !important;
 }
}


//for ipad and ipad mini
@media screen and (max-width: 820px){
  .rName p{
    font-size: 35px !important;
  }

   .projectList span{
    margin-top: 40px !important;
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

}



.avatar{
  border: 2px solid white;
  grid-row: 2/3;
  grid-column: 3/4;
  width:200px;
  height:259px;
  margin-top: 4vh;
  float:right;
}

.avatar img{
  width:100%;
  height:100%;
}

.aboutMe{
  grid-column: 2/4;
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

.socialMedia li button img{
   grid-column: 1;
   height: 15px;
   width: 15px;
}


.socialMedia a{
 color: black !important;
 float: left;
}


</style>