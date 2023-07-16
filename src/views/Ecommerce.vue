!<template>
  <div class="videoCentreContainer"> 

<!-- search status -->
  <transition name="fade">
  <div class="searchStatus" v-show="this.search">

      <transition name="searchTransition">
        <div class="searchingInput" v-show="this.search">
    
          <input placeholder="Type And Press Enter to Search" v-model="searchInput" @change="searching($event)"/>
          <a-icon type="close" theme="outlined" class="closeIcon"  @click="closeSearch()"/>
        </div>
      </transition>


   <div class="resultSet" v-if="this.resultReturn">
      <div class="searchResult" v-for="result in resultList" :key="result.id">
           <router-link :to="result.link">
          <img alt="" :src="result.photoLink">
                   <div class="resultFrame">
                      <p>{{result.name}}</p><br/>
                      <span>{{result.stack}}</span>
                   </div>

            <span class="resultCategory">{{result.category}}</span>
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
      <span class="LastestResult" v-show="this.popular" >Latest result</span>
       </transition>

      <transition name="searchTransition">
      <div class="searchMatch" v-show="this.popular">
          <div class="matchIntro" :key="item.id" v-for="item in projectList">
            <router-link :to="item.link">
              <img alt="" :src="item.photoLink">
                   <div class="matchText">
                      <p>{{item.name}}</p><br/><br/>
                      <span>{{item.stack}}</span>
                   </div>
            </router-link>
           </div>


    </div>
      </transition>

</div>
  </transition>
 <!-- End -->
      
      

    <div class="hpHeader">
      <Header>
             <div slot="search" class="searchBar" @click="startSearch()">
                  <a-icon type="search" class="w" theme="outlined" :style="{fontSize:'2vw', color:'white'}" />
              <span>SEARCH</span>
            </div>
     </Header>
  </div>

    <button class="sideBarButton" @click="toggleCollapsed" :style="collapsed?'color: black' :'color: white'">
              <a-icon :style="{fontSize:'1.8vw', marginTop:'1vh'}" :type="collapsed ? 'close' : 'menu-fold'" class="barButtonIcon"/>  
            
   </button>
      
<!-- <div class="centreBody"> -->


      <span @click="redirecting()" class="name" :style="collapsed?'color: black' :'color: white'">JUNJIE LIN</span>
        
         <transition name="SidebarFade">
        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>
         </transition>


        <div class="projectIntroduction" :style="{'background':'url('+backImg+') 50% 50% / cover' }">
        <div class="containerShadow"/>
        <span v-if="this.page" class="introText">Ecommerce Website<br/></span>

        <ul v-if="this.page" role="list" class="introContent">
                <li> 
                  <div class="greenTitle">WEBSITE</div>
                  <span class="information">The website could be taken a while to be loaded since the project is on a free Heroku machine</span>
                </li>

                <li> 
                  <div class="greenTitle">GITHUB</div>
                  <span class="information"><a target="_blank" class="githubLink" href="https://github.com/MarkYnot/ECommerce">Feel free to Edit on Github </a> </span>
                </li>
                
                  <li> 
                  <div class="greenTitle">STACK</div>
                  <span class="information">NodeJS, VueJS, MongoDB, ExpressJs</span>
                </li>
        </ul>
       
       </div>

       <div class="projectContent" @scroll="handleScroll">
            <div class="darkMode">
                  <a-icon type="search" theme="outlined" :style="{fontSize:'1.4vw', color:'black'}" />
                  <span>DarkMode</span>
            </div>
            
            <span class="published">Published at 18/12/2022</span>
            <span class="textLength"> - 7mins reading</span>

            <div class="content">

              <span>
              Welcome to the first post in the my project blog,The overview of this project is to build a Ecommerce
              web application which named PhoneZone. PhoneZone provides 
              users with an easy-trading platform where users could 
              conveniently obtain their
              products by ordering on this platform.  In this post, I will show you everything I know about how to implement some typical fucntionality of a .
              </span>  
              
             
            
              <span>
              In this article, i will introduce the crucial modules of this web 
              application and how to implement each
              of funtionalities in the modules. In addition, this article will only focus on the 
              implementation of some
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
      
              <h2>Prerequisites</h2>
              <span :style="{ marginTop:'0'}">1. You have to be somewhat familiar with NodeJs. If you have not tried NodeJS before, I highly recommend you to follow <a target="_blank" class="linkToOther" href="https://nodejs.org/en/docs">NodeJS tutorial </a>   <a-icon type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" /> from their official website (since they explained everything quite clearly and help you build serverness API with NodeJs).
              <br/><br/>
               2. About styling, I suggest you to use CSS framework (or even pure CSS) that you are good at currently.  I will try as much as I can to explain all typical css mianipulator we used, so you can apply same idea.

              <br/><br/>
               3. About VueJs, I highly recommend you to follow checkout their <a target="_blank" class="linkToOther" href="https://vuejs.org/guide/introduction.html">Getting start Page </a>   <a-icon type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" /> , there may be many process reagrding its installation, application and specific related plunin. Then Watching <a target="_blank" class="linkToOther" href="https://www.youtube.com/watch?v=Vn6FxqvsdMU"> Node+VueJs tutorial</a> <a-icon type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" />  to have some ideas how they connect nodeJs and VueJs, you could go ahead and try out initialal the project since you already have some idea about how connect VueJs and NodeJs.
              </span>

              <h2>Installation and Configuration</h2>


              <h2>Home page</h2>
              <span class="textBeforeCode">Please reach the html code:</span>

              <div class="homePageCode">
                 <CodeBlock :code="this.homePageCode" language="javascript" />
              </div>

              <br/><br/>
              <span>• Step 1. Sketch 3 frames as a html content container by using div tag and mainpulate its style by css.
              <br/><br/>
              • Step 2. If you attempt to mainpulate the form of html element like the div frame you just sketched, either simply write document.getElementById('IDName') for single element selection or write document.getElementByClassName('className') for multiple elements selection.
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
            
            <span>• Step 1. In the css part, we need to identify the classname or ID we set in the HTML. Symbol # is the ID selector which aim to select html elements with its unique ID. Symbol . lets you define counter styles inline with classname, directly as the value of a property such as list-style<br/><br/>
              
              • Step 2. This project is based on grid layout, each html elements is placed in a specific postion. you need to decide size of each columns and rows in the page by mainipulating the size of grid-template-rows and grid-template-column. Then, Each html element will be placed in specific grid by adjusting grid-row and grid-column. 
              <br/><br/>

              • Step 3. Next we need to set up css style of each html element by adjusting thier attribute liks margin, padding, size to ensure all elements in an appropriate position. 
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

              • Step 2. This project is based on grid layout, each html elements is placed in a specific postion. you need to decide size of each columns and rows in the page by mainipulating the size of grid-template-rows and grid-template-column. Then, Each html element will be placed in specific grid by adjusting grid-row and grid-column. 
              <br/><br/>

              • Step 3. Now, you can place different html elements like input, buttom into the grids. 
            </span>

            <div class="greyDisplay" :style="{height:'23% !important'}">
                <span>There are tags that commonly use in web development including input, h1, button and img. The input tag specifies an input field where <strong>the user can enter data </strong>while the h1 tag are used to define HTML heading. The button tag in HTML is used to define the clickable button while The img tag is used to embed an image in an HTML page.
                </span>
             </div> 
             
            <span class="textBeforeCode" :style="{marginTop:'2vh !important'}">In this part, we will focus on the front-end JS and Backend JS code, Lets have a look at the html and JS code for this function:</span> 
           </div>


       </div>

<!-- </div> -->

</div>

</template>

<script>
import Header from '../components/projectHeader.vue'
import SideBar from '../components/sideBar.vue'
import VideoService from '../services/videoService'
import '../assets/css/sidebar.css'
// import '../assets/css/mediaQuery.css'
import '../assets/css/animation.css'
import CodeBlock from '../components/codeBlock.vue'
import videoImg1 from '../assets/Ecommerce.jpeg'
import videoImg2 from '../assets/login.png'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
// import Video from '../components/mini-player.vue'
  export default {
    data(){
       return {
          collapsed: false,
          page:true,
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
           homePageCode:`  startSearch(){
        this.search = !this.search;
        if(this.resultReturn){
              this.popular = false;
        }else {
             this.popular = true;
              this.text = false;
              this.Ecommerce = false;
    // }`,
           videoURL:'',
           MenuItem:"MenuItem0",
           resultList:[],
           Ecommerce:false,
           search:false,
           searchInput:'',
           popular: false,
           text: true,
           spinner:false,
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
              link:"/"
            },

            {
              id:2,
              name:"ChatTogether",
              stack:"Node + Spring",
              photoLink:videoImg4,
              date:"03/04/2022",
              category: "Article",
              link:"/Ecommerce"
            },

            {
             id:3,
             name:"Second Hand market",
             stack:"JSP + Java",
             photoLink:videoImg5,
             date:"03/04/2022",
             category: "Blog",
             link:"/Ecommerce"
            },

            {
             id:4, 
             name:"Study Banana",
             stack:"MERN",
             photoLink:videoImg1,
             date:"03/04/2022",
             category: "Blog",
             link:"/Ecommerce"
            },
          ],
       }
    },

     components:{
     Header,
     SideBar,
     VideoService,
     CodeBlock
    //  Video
   },

    mounted(){
      this.backImg = this. videoImgList[0].icon
      console.log(window.innerWidth, window.innerHeight)


   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    handleScroll(event){
        // console.log(event.target.scrollTop)
        if(event.target.scrollTop >= 1678){
            this.backImg = this.videoImgList[1].icon
            this.page = false;
        } else if(event.target.scrollTop < 1678){
            this.backImg = this.videoImgList[0].icon
            this.page = true;
        }
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


  
      startSearch(){
        this.search = !this.search;
        if(this.resultReturn){
          this.popular = false;
        }else this.popular = true;
        this.text = false;
        this.Ecommerce = false;
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


// .searchInput{
//    float: left;
//    height:3.7vh;
//    width: 93%;
//    border-left: 0px;
//    border-top: 0px;
//    border-bottom: 0px;
//    border-right:solid 2px #8b898969;
//    outline-color: rgba(126, 162, 196, 0.514);
//    font-size: 1.2vw;
//    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
// }



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

.searchBar{
  position: relative;
  top:0 !important;
  margin-top: 2.4vh; 
}

.projectIntroduction{
  grid-row: 1/3;
  grid-column: 1/4;
  transition: all 1s;
  width:100%; 
  height: 100%;
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 20% 45% 35%;
  z-index: -1;
}

.projectContent{
  grid-row: 1/3;
  grid-column: 4/5;
  width:100%;
  height: 100%;
  background: white;
  display: grid;
  grid-template-columns: 8% 30% 30% 32%;
  grid-template-rows: 5% 95%;
  overflow-y: scroll;
  overflow-x: hidden;
}

.introText{
  grid-row: 2;
  grid-column: 1/3;
  color:white;
  margin-left: 3vw;
  margin-top:40vh;
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

.linkToOther{
  text-decoration: none;
  color:black;
  font-weight: bolder;
}

.linkToOther:hover{
   border-bottom: solid 1px black;
}



.introContent{
  grid-row: 3;
  grid-column: 1/3;
  margin-left: 2vw;
  height: 100%;
  width: 100%;
  list-style-type: none;
  z-index: 1;
  margin-top: 1vh;
}

.introContent li{
      float: left;
      list-style: none;
      margin-top: 3vh;
      width:100%;
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
  font-size: 1.8vw ;
}

.content{
  grid-row: 2;
  grid-column: 2/5;
  margin-top: 5vh;

}

.content span{

  float: left;
  font-size: 1vw;
  text-align: left;
  margin-top:6vh;
  display: inline-block;
  word-wrap:break-word;
  white-space: normal;
  width: 90%;
}

.content ul{
  position: relative;
  float:left;
  padding-left:2vw;
  margin-top:2vh;
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
  height: 50%;
  // background: rgb(238, 236, 236);
  float: left;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100% 100%;
  // background-image: url("../assets/homepageHtml.png");
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
  margin-top:2vh;
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


//search status:
.searchStatus{
  grid-row:1/3;
  grid-column: 1/4;
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

.searchingInput{
  grid-column: 2;
  grid-row: 2/3;
  width: 100%;
  height: 100%;
  border-width: 0 0 0 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}


.searchingInput input{
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

.resultSet{
    grid-column: 2/4;
    grid-row: 3/6;
    width:96%;
    height:100%;
    transition: 1s;
}

.searchResult{
    width:92%;
    height:10vh;
    text-align: right;
    margin-top: 3vh;
}


.searchResult:hover{
  background: rgba(255, 255, 255, 0.714);
  border-radius: 2%;
  transition: 1s;
}

.searchResult img{ 
  float: left;
  margin-left: 0.6vw;
  height:7vh;
  width:7vw;
}

.resultFrame{
  float: left;
  margin-left: 2vw;
  width:67%;
  text-align: left;
  height:90%;
  line-height: 1vh; //space when using br
  margin-top:0.5vh;
}

.resultFrame p{
  font-size: 1.8vmin;
  font-weight: bold;
}

.resultFrame span{
  color: gray;
  font-size: 1.4vmin;
}

.resultCategory{
  color: gray;
  font-size: 1.4vmin;
  position: relative;
  float: right;
  
}

.zeroResult{
   grid-column: 2;
   grid-row: 3;
   margin-top: 5vh;
   text-align: center;
   font-size: 3vmin;
   transition: all 1s;
}

.closeIcon{
  font-size: 4vmin;
  color:black;
  margin-top: 2vh;
  position: absolute;
  float: right;
}

.closeIcon:hover{
    transition: 0.3s;
    opacity: 0.5;
}


.LastestResult{
  grid-row: 4;
  grid-column: 2;
  position:absolute;
  float: left;
  font-size: 4vmin;
  font-weight: bold;
  height:100%;
  // width:100%;
  // overflow-y: ;
}

.searchMatch{
  grid-row:5/7;
  grid-column:2/4;
  overflow-y: scroll;
  width:100%;
  height: 100%;
}

.matchIntro{
 float: left;
 width: 50%;
 height:20%;
 margin-top:4vh;
}

.matchIntro img{
  float: left;
  margin-left: 0.6vw;
  height:7vh;
  width:7vw;
}

.matchText{
    height:100%;
    float: right;
    width: 11vw;
    line-height: 2vh;
}

.matchText p{
    float:left;
    font-size: 1.6vmin;
    font-weight: bold;
    // margin-top: 0.5vh;
    // margin-left:2vw;
    height: 0;
}

.matchText p:hover{
  opacity: 0.3;
  transition: all 0.8s;
}

.matchText span{
    float:left;
    font-size: 1.4vmin;
}

.matchText span:hover{
   transition: all 0.6s;
   text-decoration: underline;
}

.pswp__preloader__icn {
  grid-column: 1 !important;
  grid-row: 2 !important;
}

//iphone and samsung
@media screen and (min-height: 400px)and (min-width: 360px)and (max-width:767px){
  .videoCentreContainer{
    overflow: scroll !important;
    grid-template-columns: 10% 30% 60% !important;
    grid-template-rows: 10% 90% 100% !important;
  }

  .projectIntroduction{
    grid-column: 1/5 !important; 
  }  

  .projectContent{
    grid-column: 1/5 !important;
    grid-row: 3/4 !important;
    overflow-y: visible !important;
    overflow-x: none !important;
  }

  .introText{
     font-size: 25px !important;
  }

  .information{
    font-size: 12px !important;
    padding-left: 8px;
  }

  .introContent{
    padding-left: 20px;
  }

  .introContent li{
    margin-left: 0 !important;
  }

  .greenTitle{
     font-size: 10px !important;
  }

  .greyDisplay span{
    margin-top: 0 !important;
  }

  .name{
    font-size: 20px !important;
  }

  .barButtonIcon{
    font-size: 15px !important;
    margin-top: 7px !important;
  }

  .mobileMenu{
    grid-column: 4/5 !important;
    margin-top: 11px !important;
  }

  .searchBar{
    grid-column: 1/4 !important;
    margin-left: 30% !important;
    margin-top: 9px !important;
  }

  .searchBar span{
    font-size: 17px !important;
  }

  .darkMode span{
     font-size: 10px !important;
  }

  .published{
    font-size: 10px !important;
    width: 100%;
  }

  .textLength{
    font-size: 10px !important;
  }

  .content{
    margin-top: 6px !important;
    white-space: nowrap !important;
    /* grid-column: 2/5 !important; */
  }

  .content span{
    font-size: 10px !important;
    margin-top: 30px !important;
    width: 90% !important;
    display: inline-block !important;
    word-wrap:break-word !important;
    white-space: normal !important;
  }

  #tableTitle{
    font-size: 15px !important;
  }

  .content h2{
    font-size: 15px !important;
  }

  .content ul {
    padding-left: 18px !important;
  }

  .content ul li{
    font-size: 11px !important;
  }

  .searchStatus{
    grid-template-rows: 17% 8% 10% 40% 25%;
  }
  
  .searchingInput{
    margin-left: 0 !important;
  }

  .LastestResult{
    grid-row: 3;
    padding-top: 40px;
  }

  .matchIntro{
     width: 90%;
     height: 15%;
     margin-top: 20px;
  }

  .searchMatch{
    grid-row: 4/7;
  }

  .matchIntro img{
    height: 100%;
    width: 30%;
  }

  .matchText{
    float: left;
    width: 50%;
    padding-left: 10px;
    padding-top: 5px;
  }

  .matchText p{
    font-size: 10px;
  }

  .matchText span{
    font-size: 9px;
  }

  .resultSet{
    width: 95%;
  }

  .searchResult{
    margin-left: 0;
    margin-top: 17px;
    height: 50px;
  }

  .searchResult img{
    height: 100%;
    width: 20%;
  }

  .resultFrame p{
    font-size: 12px;
  }

  .resultFrame span{
    font-size: 8px;
  }

  .resultCategory{
    font-size: 8px;
  }
}

//ipad and surface pro 7
@media screen and (max-width: 912px) and (min-height: 1024px) and (max-height: 1368px) and (min-width: 768px){
    .videoCentreContainer{
    overflow: scroll !important;
    grid-template-columns: 10% 30% 60% !important;
    grid-template-rows: 10% 90% 100% !important;
  }

  .projectIntroduction{
    grid-column: 1/5 !important; 
  }  

  .projectContent{
    grid-column: 1/5 !important;
    grid-row: 3/4 !important;
    overflow-y: visible !important;
    overflow-x: none !important;
  }

  .introText{
     font-size: 40px !important;
  }

  .information{
    font-size: 18px !important;
    padding-left: 8px;
  }

  .introContent{
    padding-left: 20px;
  }

  .introContent li{
    margin-left: 0 !important;
  }

  .greenTitle{
     font-size: 16px !important;
  }

  .name{
    font-size: 40px !important;
  }

  .barButtonIcon{
    font-size: 15px !important;
    margin-top: 7px !important;
  }

  .mobileMenu{
    grid-column: 4/5 !important;
    margin-top: 11px !important;
  }

  .searchBar{
    grid-column: 1/4 !important;
    margin-left: 30% !important;
    margin-top: 18px !important;
  }

  .darkMode{
    margin-top: 60px;
  }

  .searchBar span{
    font-size: 30px !important;
  }

  .darkMode span{
     font-size: 18px !important;
  }

  .published{
    font-size: 18px !important;
    width: 100%;
  }

  .textLength{
    font-size: 18px !important;
  }

  .content{
    margin-top: 20px !important;
    white-space: nowrap !important;
    /* grid-column: 2/5 !important; */
  }

  .content span{
    font-size: 17px !important;
    margin-top: 30px !important;
    width: 90% !important;
    display: inline-block !important;
    word-wrap:break-word !important;
    white-space: normal !important;
  }

  #tableTitle{
    font-size: 30px !important;
  }

  .content h2{
    font-size: 22px !important;
  }

  .content ul {
    padding-left: 18px !important;
  }

  .content ul li{
    font-size: 17px !important;
  }

  .searchStatus{
    grid-template-rows: 17% 8% 10% 40% 25%;
  }
  
  .searchingInput{
    margin-left: 0 !important;
  }

  .LastestResult{
    grid-row: 3;
    padding-top: 40px;
  }

  .matchIntro{
     width: 90%;
     height: 15%;
     margin-top: 20px;
  }

  .searchMatch{
    grid-row: 4/7;
  }

  .matchIntro img{
    height: 100%;
    width: 30%;
  }

  .matchText{
    float: left;
    width: 50%;
    padding-left: 10px;
    padding-top: 5px;
  }

  .matchText p{
    font-size: 10px;
  }

  .matchText span{
    font-size: 9px;
  }

  .resultSet{
    width: 95%;
  }

  .searchResult{
    margin-left: 0;
    margin-top: 17px;
    height: 50px;
  }

  .searchResult img{
    height: 100%;
    width: 20%;
  }

  .resultFrame p{
    font-size: 12px;
  }
  .resultFrame span{
    font-size: 8px;
  }

  .resultCategory{
    font-size: 8px;
  }
}




//For Galaxy Fold
@media screen and (max-width: 912px) and (height: 653px){
    .videoCentreContainer{
    overflow-y: scroll !important;
    grid-template-columns: 10% 30% 60% !important;
    grid-template-rows: 10% 90% 100% !important;
  }

  .projectIntroduction{
    grid-column: 1/5 !important; 
  }  

  .projectContent{
    grid-column: 1/5 !important;
    grid-row: 3/4 !important;
    overflow-y: visible !important;
    overflow-x: none !important;
  }

  .introText{
     font-size: 25px !important;
  }

  .information{
    font-size: 9.1px !important;
    padding-left: 8px;
  }

  .introContent{
    padding-left: 20px;
  }

  .introContent li{
    margin-left: 0 !important;
    width: 100%;
  }

  .greenTitle{
     font-size: 8px !important;
  }

  .name{
    font-size: 16px !important;
    margin-top: 9px ;
  }

  .barButtonIcon{
    font-size: 15px !important;
    margin-top: 7px !important;
  }

  .mobileMenu{
    grid-column: 4/5 !important;
    margin-top: 11px !important;
  }

  .searchBar{
    grid-column: 1/4 !important;
    margin-left: 30% !important;
    margin-top: 9px !important;
  }

  .searchBar span{
    font-size: 13px !important;
  }

  .darkMode span{
     font-size: 8.5px !important;
  }

  .published{
    font-size: 7.5px !important;
    width: 100%;
  }

  .textLength{
    font-size: 7.5px !important;
  }

  .content{
    margin-top: 6px !important;
    white-space: nowrap !important;
    /* grid-column: 2/5 !important; */
  }

  .content span{
    font-size: 10px !important;
    // margin-top: 30px !important;
    width: 90% !important;
    display: inline-block !important;
    word-wrap:break-word !important;
    white-space: normal !important;
  }

  #tableTitle{
    font-size: 15px !important;
  }

  .content h2{
    font-size: 15px !important;
  }

  .content ul {
    padding-left: 18px !important;
  }

  .content ul li{
    font-size: 11px !important;
  }

  .searchStatus{
    grid-template-rows: 17% 8% 10% 40% 25%;
  }
  
  .searchingInput{
    margin-left: 0 !important;
  }

  .LastestResult{
    grid-row: 3;
    padding-top: 40px;
    font-size: 18px !important;
  }

  .matchIntro{
     width: 90%;
     height: 15%;
     margin-top: 20px;
  }

  .searchMatch{
    grid-row: 4/7;
  }

  .matchIntro img{
    height: 100%;
    width: 30%;
  }

  .matchText{
    float: left;
    width: 60%;
    padding-left: 10px;
    padding-top: 5px;
  }

  .matchText p{
    font-size: 10px;
  }

  .matchText span{
    font-size: 9px;
  }

  .resultSet{
    width: 95%;
  }

  .searchResult{
    margin-left: 0;
    margin-top: 25px;
    height: 50px;
    width: 95%;
  }

  .searchResult img{
    height: 100%;
    width: 20%;
  }

  .resultFrame{
    width: 60% !important;
  }

  .resultFrame p{
    font-size: 12px;
  }

  .resultFrame span{
    font-size: 8px;
  }

  .resultCategory{
    font-size: 9px;
    padding-top: 15px;
  }

}


</style>