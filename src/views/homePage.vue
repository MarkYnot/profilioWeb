!<template>

<!-- this class has not css attribute -->
<div class="searchWindow">
    
  <transition name="fade">
  <div class="searchArea" v-show="this.search">

      <transition name="searchTransition">
        <div class="searchInput" v-show="this.search">
    
          <input placeholder="Type And Press Enter to Search" v-model="searchInput" @change="searching($event)"/>
          <a-icon type="close" theme="outlined" class="close"  @click="closeSearch()"/>
        </div>
      </transition>


   <div class="resultArea" v-if="this.resultReturn">
      <div class="returnedResult" v-for="result in resultList" :key="result.id">
           <router-link :to="result.link" active-class="router-link-active">
               <img alt="" :src="result.photoLink">
                   <div class="resultText">
                      <p>{{result.name}}</p><br/>
                      <span>{{result.stack}}</span>
                   </div>

            <span class="resultType">{{result.category}}</span>
           </router-link>
      </div>
   </div>

    <span class="zeroResult" v-if="this.zeroResult">No Result</span>

     <!-- spinner -->
      <div class="pswp__preloader__icn" v-show="spinner">
          <div class="pswp__preloader__cut" >
            <div class="pswp__preloader__donut"></div>
          </div>
      </div>
     <!-- //spinner -->


      <transition name="searchTransition">
      <span class="popular" v-show="this.popular" >Latest result</span>
       </transition>

      <transition name="searchTransition">
      <div class="searchResult" v-show="this.popular">
          <div class="resultIntro" :key="item.id" v-for="item in projectList">
            <router-link :to="item.link">
              <img alt="" :src="item.photoLink">
                   <div class="itemText">
                      <p>{{item.name}}</p><br/><br/>
                      <span>{{item.stack}}</span>
                   </div>
            </router-link>
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
        <Header :mainPage="mainPage">
          <div slot="search" class="searchBar"  @click="startSearch()">
                  <a-icon type="search" class="w" theme="outlined" :style="{fontSize:'2vw', color:'white'}" />
              <span>SEARCH</span>
            </div>
            
      </Header>
      </div>


    <button class="sideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon class="sideBarIcon" :style="{fontSize:'3vw'}" :type="collapsed ? 'close' : 'menu-fold'" />  
   </button>
      
<!-- 
    <div class="centreBody"> -->

      <span  class="name" :style="collapsed?'color: black' :'color: white'">  JUNJIE LIN</span>

        <transition name="SidebarFade">
        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>
        </transition>

        <div class="videoContent">
            <span v-if="this.text">
              Full Stack Developer  
              <br/>
            Have a Look Around My Website
            <br/>
            
            </span>
 
          
            <span v-if="this.Ecommerce">{{this.projectTitle}}</span>

            <!-- <router-link :to="{path}"/> -->
             <button @click="redirecting()" v-if="this.Ecommerce" class="contentButton" :style="collapsed?'color: black' :'color: white'">Views Project Description</button>
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
import '../assets/css/searchBar.css'
import '../assets/css/sidebar.css'
import '../assets/css/animation.css'
import videoImg1 from '../assets/homePageCover.jpg'
import videoImg2 from '../assets/Ecommerce.jpeg'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/english.webp'
import videoImg5 from '../assets/chatCover.png'
import videoImg6 from '../assets/fly.jpg'

  export default {
    data(){
       return {
          collapsed: false,
          mainPage:true,
          Ecommerce:false,
          projectTitle:'',
          blog:false,
          search:false,
          searchInput:'',
          popular: false,
          text: true,
          spinner:false,
          path:'',
          pageNumber:0,
          videoImgList: [
            {icon: videoImg1},
            {icon: videoImg2},
            {icon: videoImg3},
            {icon: videoImg4},
            {icon: videoImg5},
           ],

           resultList:[],
           resultReturn:false,
           zeroResult:false,
           projectList:[
            {
              id:1,
              name:"Ecommerce Website",
              stack:"MEVN",
              photoLink:videoImg2,
              date:"03/04/2022",
              category: "Blog",
              link:"/Ecommerce"
            },

            {
              id:2,
              name:"ChatTogether",
              stack:"Vue+ Node + Springboot",
              photoLink:videoImg4,
              date:"03/04/2022",
              category: "Article",
              link:"/project/Chat"
            },

            {
             id:3,
             name:"Smart Education - Banvas",
             stack:"Vue+ Node + Springboot",
             photoLink:videoImg5,
             date:"03/04/2022",
             category: "Blog",
             link:"/project/Education"
            },

            {
             id:4, 
             name:"Study Banana",
             stack:"MERN",
             photoLink:videoImg1,
             date:"03/04/2022",
             category: "Blog",
             link:"/project/Banana"
            }
            
            ],
           backImg: "",
           MenuItem:"MenuItem0",
           fontWeight0: true,
           fontWeight1: true,
           fontWeight2: true,
           fontWeight3: true,
           fontWeight4: true,
           windowWidth: 0

       }
    },

     components:{
     Header,
     SideBar,
   },

   beforeDestroy(){
    window.removeEventListener('resize', this.changeSize)
   },

    mounted(){
       console.log(window.innerWidth, window.innerHeight)
       window.addEventListener('resize', this.changeSize)

      // if(window.innerWidth > 912) this.backImg = this.videoImgList[0].icon
      // else if(window.innerWidth <= 912) this.backImg = videoImg6;
      console.log(videoImg6)
      this.changeSize();
     
     let selectedMenuItem = document.getElementById(this.MenuItem);
     selectedMenuItem.style.fontWeight = "900"
   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

      changeSize() {
         
          if(window.innerWidth <= 912 && this.pageNumber == 0){
              console.log(1)
                if(window.innerHeight > 400) this.backImg = videoImg6;
                else this.backImg = this.videoImgList[0].icon
             
          }else if(window.innerWidth > 912 && this.pageNumber == 0){
               console.log(2)
                if(window.innerHeight <= 400) this.backImg = videoImg6;
                else this.backImg = this.videoImgList[0].icon
          }
      },   
    
    redirecting() {
        this.$router.push(this.path)
    },

    closeSearch(){
      this.search = !this.search
      switch(this.pageNumber){
       case 0:
          setTimeout(()=>{this.text = true;}, 500)
          break;
      
      case 1:
          setTimeout(()=>this.Ecommerce = true, 500)
          break;

      case 2:
          setTimeout(()=>{this.text = false;}, 500)
          break;

      case 3:
          setTimeout(()=>{this.text = false;}, 500)
          break;

      case 4:
          setTimeout(()=>{this.text = false;}, 500)
          break;

      }
    
      console.log(this.pageNumber)
    },

    searching(event){
      this.zeroResult = false;
     
      
      if(!event.target.value){
        this.popular = true;
        this.spinner = false;  
        this.resultReturn = false;
         return
      }
      this.resultReturn = false;
      this.spinner = true;
      this.popular = false;

      let reg = new RegExp(event.target.value)
      let resultSet = []
      
     this.projectList.forEach(item=>{
          if(reg.test(item.name)){
            resultSet.push(item)
          }
      })
            
      setTimeout(()=>{
          if(resultSet.length != 0){
              this.spinner = false;
              this.resultList = resultSet;
              this.resultReturn = true;
              console.log(1)
              console.log(resultSet)

            }else{
              this.zeroResult = true;
              this.spinner = false;
              console.log(2)
            }
      },3000)
   
    
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

    startSearch(){
        this.search = !this.search;
        if(this.resultReturn){
          this.popular = false;
        }else this.popular = true;
        this.text = false;
        this.Ecommerce = false;
    },


     videoGif(number){

        if(number != 0) this.text = false
        else this.text = true
        this.pageNumber = number
        let  MenuItemList = document.getElementsByClassName("MenuItem")
        MenuItemList.forEach(element => {
           element.style.fontWeight = ""
        });


        if(window.innerWidth <= 920 && number == 0 ) {
            if(window.innerHeight < 500)this.backImg = this.videoImgList[0].icon
            else this.backImg = videoImg6

        }else {
           this.backImg = this.videoImgList[number].icon;
          }
         

         this.MenuItem = "MenuItem" + number
         let selectedMenuItem = document.getElementById(this.MenuItem);
         selectedMenuItem.style.fontWeight = "900"
         switch(number){
            
            case 0:
            console.log(1)
            this.Ecommerce = false;
            break;

            case 1:
            this.path = '/Project/Ecommerce'
            this.Ecommerce = true;
            this.projectTitle = 'Ecommerce Website';
            this.blog = true;
            break;

            case 2:
            this.path = '/Project/Education'
            this.Ecommerce = true;
            this.projectTitle = 'Smart Teaching - Banvas';
            this.blog = false;
            break;
            
            case 3:
            this.path = '/Project/Banana'
            this.Ecommerce = true;
            this.projectTitle = 'English teaching Website';
            this.blog = false;
            break;

            case 4:
            this.path = '/Project/Chat'
            this.Ecommerce = true;
            this.projectTitle = 'Real-time Chat System';
            this.blog = false;
            break;
           
         }
          
     } 
  }
}
</script>

<style lang="less">

body{
  // line-height:0;
}

.router-link-active{
  text-decoration: none;
  color:black;
}

a{
   text-decoration: none;
   color:grey;
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

// .searchInput{
//    float: left;
//    border-left: 0px;
//    border-top: 0px;
//    border-bottom: 0px;
//    border-right:solid 2px #8b898969;
//    outline-color: rgba(126, 162, 196, 0.514);
//    font-size: 1.2vw;
//    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// }


.searchBar{
   width:15vw;
   height:4vh;
   margin-top: 12px;
   transition: all 1s ;
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
  border: none;
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
  // border: solid 2px rgba(196, 195, 195, 0.514);
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
  grid-row: 1/6;
  grid-column: 1/4;
  width: 40%;
  box-shadow: 5px 0px 0px -5px rgba(54, 54, 54, 0.527);
  height: auto;
  border-right: black;
  z-index: 10;
  transition: 2s opacity;
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
  // height: 60%;
  font-size: 3vw;
  font-weight: bolder;
  text-align: left;
  transition: all 4s;
  grid-row: 1;
  transition-duration: 2s all;
  white-space: pre-line;
}


.contentButton{
  margin-left: 27vw;
  margin-top: 3vh;
  width: 200px;
  height: 35px;
  background: transparent;
  border-color: whitesmoke;
  border-radius: 10px;
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
  grid-template-rows: 17% 8% 20% 5% 25% 25%;
  z-index:1;
  transition: all 2s;
}

.searchInput{
  grid-column: 2;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  border-width: 0 0 0 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.searchInput input{
  float: left;
  color:black;
  width:96%;
  font-size: 4vmin;
  height: 100%;
  border-width: 0 0 2px 0;
  border-color: black;
  border-style: solid;
  transition: all 1s;
  outline: none;
}

.resultArea{
    grid-column: 2;
    grid-row: 3/6;
    width:96%;
    height:100%;
    transition: 1s;
}

.returnedResult{
    width:100%;
    height:10vh;
    text-align: right;
    margin-top: 3vh;
}


.returnedResult:hover{
  background: rgba(255, 255, 255, 0.714);
  border-radius: 2%;
  transition: 1s;
}

.returnedResult img{ 
  float: left;
  margin-left: 0.6vw;
  height:9vh;
  width:9vw;
}

.resultText{
  float: left;
  margin-left: 2vw;
  width:70%;
  text-align: left;
  height:90%;
  line-height: 1.7vh; //space when using br
  margin-top:0.5vh;
}

.resultText p{
  font-size: 2.5vmin;
  font-weight: bold;
}

.resultText span{
  color: gray;
  font-size: 1.5vmin;
}

.resultType{
  color: gray;
  font-size: 1.7vmin;
  position: relative;
  top:2.5vh;
}

.zeroResult{
   grid-column: 2;
   grid-row: 3;
   margin-top: 5vh;
   text-align: center;
   font-size: 3vmin;
   transition: all 1s;
}

.close{
  font-size: 4vmin;
  color:black;
  margin-top: 2vh;
  position: absolute;
  float: right;
}

.close:hover{
    transition: 0.3s;
    opacity: 0.5;
}


.popular{
  grid-row: 4;
  grid-column: 2;
  position:absolute;
  float: left;
  font-size: 4vmin;
  font-weight: bold;
  // height:100%;
  // width:100%;
  // overflow-y: ;
}

.searchResult{
  grid-row:5/7;
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

.resultIntro img{
  float: left;
  margin-left: 0.6vw;
  height:9vh;
  width:9vw;
}

.resultIntro a{
   color: black !important;
}

.itemText{
    height:100%;
    float: right;
    width: 21vw;
    line-height: 2vh;
}

.itemText p{
    float:left;
    font-size: 2vmin;
    font-weight: bold;
    // margin-top: 0.5vh;
    // margin-left:2vw;
    height: 0;
}

.itemText p:hover{
  opacity: 0.3;
  transition: all 0.8s;
}

.itemText span{
    float:left;
    // margin-left:2vw;
    font-size: 1.8vmin;
}

.itemText span:hover{
   transition: all 0.6s;
   text-decoration: underline;
}

// for iphone, samsung
@media screen and (min-height:400px) and (max-width:737px){
    //5project Menus
   .MenuItem{
     font-size: 13px;
     margin-left: 18px;
   }

   .bottomMenu{
     margin-left: 14px;
   }

   .videoContent{
      grid-column: 2/4;
   }

   .videoContent span{
     font-size: 25px;
     margin-left: 9px !important;
     margin-top: 70% !important;
   }

   .contentButton{
     width: 180px;
     height: 30px;
     margin-left: 15px;
     margin-top: 10px;
   }

   .searchBar{
        grid-column: 1/3;
        margin-left:60px;
        margin-top: 5px;
        width: 75%;
   }

   .searchBar span{
      font-size: 15px;
   }

   .w{
      font-size: 20px !important;
   }

    .name{
      font-size: 20px !important;
      margin-top: 8px;
      margin-left: 10px;
    }
   
    .sideBarIcon{
      font-size: 18px !important;
      margin-top: 8px;
    }

    .resultIntro{
      width: 100%;
      height: 16%;
      margin-top: 1px;
    }

    .resultIntro img{
      height: 50%;
      width: 15%;
    }

    .itemText{
      float: left;
      width: 180px;
      margin-left: 10px;
    }

    .itemText p{
      font-size: 11px;
    }

    .itemText span{
      font-size: 10px;
    }

    .searchArea{
      grid-template-rows: 17% 8% 10% 25% 40%;
    }

    .popular {
      grid-row: 3;
      grid-column: 1/4;
      margin-top: 40px;
      margin-left: 25px;
      font-size: 23px;
    }

    .searchResult{
      grid-row: 4/7;
      grid-column: 1/4;
      margin-left: 35px;
      margin-top: 20px;
    }

    .searchInput{
      grid-column: 1/4;
      margin-left: 25px;
      width:85%;
    }

    .resultArea{
      grid-column: 1/4;
    }

    .returnedResult{
      margin-left: 25px;
      height: 16%;
      width: 85%;
      margin-top: 10px;
    }

    .returnedResult a{
      color: black !important;
    }

    .returnedResult img{
     height: 50%;
     width: 15%;
    }


    .resultText p{
      font-size: 13px !important;
    }

    .resultText span{
      font-size: 11px;
    }

    .resultText{
      line-height: 10px;
    }

    .resultType{
      font-size: 10px;
    }

    .SideBar{
     width: 50% !important;
   }




}

//For Surface Duo
@media screen and (height: 720px)and (min-width: 540px) and (max-width: 767px){
   .videoContent span{
      // font-size: 20px;
      margin-top: 55% !important;
  }
  
   .MenuItem{
       margin-left: 27px; 
       font-size: 16px;
   }
}

//For ipad and surface pro 7
@media screen and (min-width: 768px)and (max-width:912px){
       .searchBar{
        grid-column: 1/3;
        margin-left:90px;
        margin-top: 9px;
        width: 75%;
   }

   .searchBar span{
      font-size: 38px;
   }

   .w{
       font-size: 38px !important;
   }

    .sideBarIcon{
      font-size: 30px;
      margin-top: 8px;
    }

   .videoContent{
     grid-column: 1/4;
   }

   .videoContent span{
    margin-left: 100px;
    margin-top: 39vh;
    font-size: 35px;
   }

   .MenuItem{
     font-size: 25px;
     margin-left: 5.5vw;
   }

    .bottomMenu{
     margin-left: 8px;
   }
}

// For galaxy fold
@media screen and (max-width:280px){
    .name{
      font-size: 16px !important;
    }

    .sideBarIcon{
      font-size: 14px !important;
    }

    .searchBar{
      grid-column: 1/3;
      margin-left: 40px;
    }

       .searchBar span{
      font-size: 12px;
   }

   .w{
      font-size: 15px !important;
   }

   .videoContent span{
      font-size: 20px;
      margin-top: 90% !important;
   }

   .bottomMenu{
    grid-column: 1/4;
    
   }

   .MenuItem{
       margin-left: 10px; 
       font-size: 11.5px;
   }

   .resultText{
     line-height: 7px;
   }

   .returnedResult{
    width: 90%;
   }

   .SideBar{
     width: 60% !important;
   }

}


@media screen and (min-height:600px) and (min-width:920px){
       .searchBar span{
          font-size: 2.5vmin;
       }

       .w{
        font-size: 3vmin !important;
       }

       .searchBar{
         margin-top: 13px !important;
       }

       .contentButton{
         font-size: 2.5vmin;
         width: 20vw; 
         height: 6vh;
       }
}


</style>

