!<template>
  <div class="videoCentreContainer"> 
    <!-- :style="{'background':'url('+backImg+') 50% 50% / cover' }" -->

 
      
      

    <div class="hpHeader">
      <Header/>
  </div>

    <button class="sideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'1.8vw', marginTop:'1vh'}" :type="collapsed ? 'close' : 'menu-fold'" />  
            
   </button>
      
<!-- <div class="centreBody"> -->


      <span @click="redirecting()" class="name" :style="collapsed?'color: black' :'color: white'">JUNJIE LIN</span>

        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>

        <div class="projectIntroduction" :style="{'background':'url('+backImg+') 50% 50% / cover' }">
        <div class="containerShadow"/>
        <span class="introText">Ecommerce Website<br/></span>

        <ul role="list" class="introContent">
                <li> 
                  <div class="greenTitle">WEBSITE</div>
                  <span class="information">The website could be taken a while to be loaded since the project is on a free Heroku machine</span>
                </li>


                <li> 
                  <div class="greenTitle">GITHUB</div>
                  <span class="information"><a target="_blank" class="githubLink" href="https://github.com/MarkYnot/ECommerce">https://github.com/MarkYnot/ECommerce</a>(Click here to check out the further description about the project)</span>
              
                </li>
                
                  <li> 
                  <div class="greenTitle">STACK</div>
                  <span class="information">NodeJS, ReactJS, MongoDB, ExpressJS, EslintJS,MD5, Base64</span>
                </li>
        </ul>
       
       </div>

       <div class="projectContent" @scroll="handleScroll">
            <div class="darkMode">
                  <a-icon type="search" theme="outlined" :style="{fontSize:'1.4vw', color:'black'}" />
                  <span>DarkMode</span>
            </div>
            
            <span class="published">Published at 18/12/2022</span>
            <a-icon class="readIcon" type="search" theme="outlined"/>
            <span class="textLength">7mins reading</span>

            <div class="content">

              <span>
              The overview of this project is to build a Ecommerce
              web application which named PhoneZone. <br/>PhoneZone provides 
              users with an easy-trading platform where users could 
              conveniently obtain their <br/>
              products by ordering on this platform.
              </span>  
              
             
            
              <span>
              In this article, i will introduce the crucial modules of this web 
              application and how to implement each <br/>
              of funtionalities in the modules. In addition, this article will only focus on the 
              implementation of some <br/>
              crucial funtionality, feel free to access the project in my github.
              </span>


              <span>Here is the porject demo:</span>

              <iframe class="playerSetting" src="https://www.youtube.com/embed/uAZegV6WbCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe>

              
              <span id="tableTitle">Table of the crucial funtionalities</span>
           
           
              <ul>
                 <li><a>Home page</a></li>
                 <li><a>Login</a></li>
                 <li><a>Change Avantar</a></li>
                 <li><a>Shopping Cart</a></li>
                 <li><a>Change Username/Password</a></li>
              </ul>

              <h2>1.Home page</h2>
              <span class="textBeforeCode">Please reach the html code:</span>
              <div class="homePageCode"/>
              
              <span>• Step 1. Sketch 3 frames as a html content container by using div tag and mainpulate its style by css.<br/>
              <br/>
              • Step 2. If you attempt to mainpulate the form of html element like the div frame you just sketched, <br/>either simply write document.getElementById('IDName') for single element selection or write document.getElementByClassName('className') for multiple elements selection.
              <br/><br/>
               <!-- Step 3. Once you obtain the html element, you could use methods like setAttribute(), append() to mainipulate html element style to your preference.   -->
              </span>


             <div class="greyDisplay">
                <span>The getElementById() and getElementByClassName() method are the most common methods in the HTML DOM. It is used almost every time you want to read or edit an HTML element. <br/>
                </span>
             </div>


            <div class="greyDisplay" :style="{height:'19% !important'  }">
                <span>The code in diagram indicate how the html element style could be mainipulated by setting same a classname. However, the getElementById() allow you to mainipulate html element style to your preference by using methods like setAttribute() or append().
                </span>
            </div>


            <span id="cssText">Please reach the css code:</span>
            <div class="homePageCss"/>
            
            <span>• Step 1. In the css part, we need to identify the classname or ID we set in the HTML. Symbol # is the <br/>ID selector which aim to select html elements with its unique ID. Symbol . lets you define counter styles <br/>inline with classname, directly as the value of a property such as list-style<br/>
              <br/>
              • Step 2. This project is based on grid layout, each html elements is placed in a specific postion. you <br/>need to decide size of each columns and rows in the page by mainipulating the size of grid-template-<br/>rows and grid-template-column. Then, Each html element will be placed in specific grid by adjusting <br/>grid-row and grid-column. 
              <br/><br/>
              • Step 3. Next we need to set up css style of each html element by adjusting thier attribute liks margin, <br/>padding, size to ensure all elements in an appropriate position. 
              </span>
              
              <div class="greyDisplay" :style="{}">
                <span>CSS grid layout or CSS grid creates complex responsive web design grid layouts more easily and <strong>consistently across browsers</strong>. You could use grid layout to achieve <strong>across-platform web responsive design.</strong>
                </span>
             </div> 

           <div class="divisionBar"></div>

            <h2 :style="{marginLeft:'0.7vw'}">2.Login</h2>
            <span class="textBeforeCode">In this part, we will focus on the front-end JS and Backend JS code, Lets have a look at the html <br/>and JS code for this function:</span>
            <div class="loginHtml"/>

            <span>• Step 1. Similarly sketch frames as a html content container by using div tag and mainpulate its style by css<br/><br/>
              • Step 2. This project is based on grid layout, each html elements is placed in a specific postion. you <br/>need to decide size of each columns and rows in the page by mainipulating the size of grid-template-<br/>rows and grid-template-column. Then, Each html element will be placed in specific grid by adjusting <br/>grid-row and grid-column. 
              <br/><br/>
              • Step 3. Now, you can place different html elements like input, buttom into the grids. 
            </span>

            <div class="greyDisplay" :style="{height:'23% !important'}">
                <span>There are tags that commonly use in web development including input, h1, button and img. The input tag specifies an input field where <strong>the user can enter data </strong>while the h1 tag are used to define HTML heading. The button tag in HTML is used to define the clickable button while The img tag is used to embed an image in an HTML page.
                </span>
             </div> 
             
            <span class="textBeforeCode" :style="{marginTop:'2vh !important'}">In this part, we will focus on the front-end JS and Backend JS code, Lets have a look at the html <br/>and JS code for this function:</span> 
      
           </div>


       </div>

<!-- </div> -->

</div>

</template>

<script>
import Header from '../components/projectHeader.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
import '../assets/css/video.css'
import videoImg1 from '../assets/Ecommerce.jpeg'
import videoImg2 from '../assets/videogif1.gif'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
import Video from '../components/mini-player.vue'
  export default {
    data(){
       return {
          collapsed: false,
          text: true,
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
           videoURL:'',
           MenuItem:"MenuItem0",
       }
    },

     components:{
     Header,
     SideBar,
     VideoService,
     Video
   },

    mounted(){
      this.backImg = this. videoImgList[0].icon


   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    handleScroll(event){
        // console.log(event.target.scrollTop)
        if(event.target.scrollTop >= 1678)
           this.backImg = this.videoImgList[1].icon
        else if(event.target.scrollTop < 1678)
           this.backImg = this.videoImgList[0].icon
    },

    // startSearch(){
    //     const videoInput = document.getElementById('textInput').value
    //     if(videoInput != ""){
    //       this.$router.push({path:`/search&${videoInput}`})
    //     }else{
    //       alert('please enter keyword first')
    //     }
     
    // }

      redirecting() {
        this.$router.push('/')
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
  // background-size:cover;
  overflow:hidden;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: 5% 15% 30% 50%;
  grid-template-rows: 10% 90%;
  transition: all 1s;
  z-index: 1;
}

.containerShadow{
  background-color:black;
  grid-column: 1/3;
  grid-row: 1/4;
  -webkit-filter:brightness(1);
  -o-filter:brightness(1);
  position: inherit;
  -moz-filter:brightness(1);
  filter:brightness(0.1);
  opacity: 0.5;
  z-index: 0;
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
   font-size: 2.2vw;
   margin-top: 1vh;
  //  width:100%;
   color: white;
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
   margin-top: 0.4vh;
  //  border: solid 2px;
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
  width: 80%;
  box-shadow: 5px 0px 0px -5px rgba(54, 54, 54, 0.527);
  height: auto;
  border-right: black;
  z-index: 10;
  transition: 2s;

}

.projectIntroduction{
  grid-row: 1/3;
  grid-column: 1/4;
  transition: all 1s;
  width:100%; 
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 50% 30%;
  z-index: -1;
}

.projectContent{
  grid-row: 1/3;
  grid-column: 4/5;
  width:100%;
  height: 100%;
  background: white;
  display: grid;
  grid-template-columns: 8% 30% 30% 42%;
  grid-template-rows: 5% 95%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.introText{
  grid-row: 2;
  grid-column: 1/3;
  color:white;
  margin-left: 3vw;
  margin-top:45vh;
  float: left;
  font-size: 3vw;
  font-weight: bolder;
  text-align: left;
  transition: all 1s;
  z-index: 1;
}

.greenTitle{
  background: rgb(157, 192, 157);
  width: 5em;
  height: 2.2vh;
  // margin-left: 2vw;
  // margin-top:3.5vh;
  font-size: 1vw;
  color: rgb(14, 71, 26);
  font-weight: bold;
  text-align: center;
  display: inline;
  float: left;
}

.githubLink{
  text-decoration: none;
  color:white;
  font-weight: bolder;
  
}

.githubLink:hover{
  border-bottom: solid 1px white;
}

.introContent{
  grid-row: 3;
  grid-column: 1/3;
  margin-top:2vh;
  margin-left: 2vw;
  height: 100%;
  width: 100%;
  list-style-type: none;
  z-index: 1;
}

.introContent li{
      float: left;
      list-style: none;
      margin-top: 3vh;
}

.information{
  font-size: 1vw;
  width: 77% !important;
  float: left;
  color: white;
  text-align: left;
  font-size: 1.2vw;
  margin-left: 0.5vw;
}

.darkMode{
  grid-row: 1;
  grid-column: 4;
  // margin-left:4vw;
  margin-right:3vw;
  margin-top: 4vh;
}

.darkMode span{
  font-size: 1.3vw;
}

.textLength{
  grid-row: 1;
  grid-column: 3;
  font-size: 1vw;
  margin-top: 5vh;
  margin-right: 5vw;
  color:gray;
}

.published{
  grid-row: 1;
  grid-column: 2;
  font-size: 1vw;
  margin-top: 5vh;
  margin-right: 1vw;
  color:gray;
}

.readIcon{
  font-size: 1.3vw;
  color:gray;
  grid-row: 1;
  grid-column:3;
  margin-top: 5.2vh;
  margin-right: 13vw;
}

#tableTitle{
  font-weight: bolder;
  font-size: 1.8vw !important;
}

.content{
  grid-row: 2;
  grid-column: 2/5;
  margin-top: 12vh;
}

.content span{

  float: left;
  font-size: 1vw;
  text-align: left;
  margin-top:6vh;
}

.content ul{
  position: relative;
  float:left;
  padding:0;
  margin-top:12vh;
  right: 23vw;
}

.content ul li{
 text-align: left;
 font-size: 1.1vw;
 list-style-type:upper-roman;
}

.content ul li a{
  color:#000000
}

.content h2{
  font-size: 2vw;
  float:left;
  font-weight: bolder;
  margin-top: 2vh;
  text-align: left;
  width:100%;
}


.playerSetting{
  width:87%;
  height:80%;
  float:left;
  border: solid 0.1px grey;
}

.homePageCode{
  width: 85%;
  height: 70%;
  // background: rgb(238, 236, 236);
  float: left;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/homepageHtml.png");
}

.textBeforeCode{
  float: left;
  text-align: left;
  margin-top:0 !important;
  margin-left: 1vw;

}

.greyDisplay{
  width: 85%;
  height: 15%;
  background: rgb(238, 236, 236);
  float: left;
  margin-top: 4vh;
}

.greyDisplay span{
  text-align: left;
  font-size: 1.1vw;
  margin-left: 1.3vw;
  margin-top:2vh !important;
}

.homePageCss{
  width: 85%;
  height: 65%;
  float: left;
  margin-top: 2vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/homePageCss.png");
}

.loginHtml{
  width: 84%;
  height: 40%;
  float: left;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  background-image: url("../assets/loginHtml.png");
}

.divisionBar {
      width: 80%;
      height: 0.2%;
      background: rgb(238, 236, 236);
      margin-top: 4vh;
      float:left;
      margin-left:1.3vw;
    }
</style>