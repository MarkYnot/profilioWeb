!<template>
  <div class="mainContainer">

    <div class="hpHeader">
      
    <Header :mainPage="dark">
       <div slot="search" class="darkArea" >
             <!-- bulb -->
                 <button :class="dark?'darkMode':'lightMode'" @click="darkMode()">
                  <a-icon :type="dark?'alert':'bulb'"  class="w" theme="outlined" :style="{fontSize:'30px', color:'white'}"/>
                 </button>
            </div>
    </Header>
  </div>


      <button class="rSideBarButton" @click="toggleCollapsed">
              <a-icon class="foldList" :style="{fontSize:'24px',marginTop:'5px'}" :type="collapsed ? 'close' : 'menu-fold'" /></button>

 

       <span  class="myName" @click="redirecting()">  JUNJIE LIN</span>

        <transition name="SidebarFade">
        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>
        </transition>
        
        <!-- /img/fly.d5432bd4.jpg -->
        <div class="contentBox" >
           <a class="projectTitle" @click="backTo()">Porjects ></a><span class="projectName">{{this.allProjects.name}}</span>
        
           <span class="projectDescription">{{this.allProjects.description}}</span>

             <ul role="list" class="introContent">
                <li> 
                  <div class="greenTitle">WEBSITE</div>
                  <span class="information"><a class="linkToWebsite" target="_blank" :href="this.allProjects.websiteLink">{{this.allProjects.websiteLink}}</a>(The website could be taken a while to be loaded since the project is on a free Heroku machine)</span>
                </li>

                <li> 
                  <div class="greenTitle">GITHUB</div>
                  <span class="information">Feel free to contribute on <a target="_blank" class="githubLink" :href="this.allProjects.githubLink"><a-icon type="github" theme="outlined" class="githubLogo"/> Github</a> if you see anything go wrong</span>
                </li>
                
                  <li> 
                  <div class="greenTitle">STACK</div>
                  <span class="information">{{this.allProjects.stackDetail}}</span>
                </li>
        </ul>

          <img :src="src1" class="image1"></img>
             <img :src="src2" class="image2"></img>

      </div>

      
</div>
</template>

<script>
import Header from '../components/hearder.vue'
import SideBar from '../components/sideBar.vue'
import '../assets/css/sidebar.css'
import projects from '../assets/json/projectList.json'


  export default {
    data(){
       return {
          collapsed: false,
          allProjects:[],
          src1:"",
          src2:'',
          dark:false
         

       }
    },

     components:{
     Header,
     SideBar
   },

   mounted(){
      console.log(window.innerWidth, window.innerHeight)
      const projectInfo =  projects.find(item=>{
         return item.link === '/' + this.$route.params.name
      })
    
      
    
     if(projectInfo){
        this.allProjects = projectInfo
        switch(this.allProjects.link){
          case '/Ecommerce':
            this.src1=require('../assets/Ecommerce.jpeg')
            this.src2 = require('../assets/fly.jpg')

          case '/Education':
            this.src1=require('../assets/Ecommerce.jpeg')
            this.src2 = require('../assets/fly.jpg')
          
          case '/Banana':
            this.src1=require('../assets/Ecommerce.jpeg')
            this.src2 = require('../assets/fly.jpg')

          case '/Chat':
            this.src1=require('../assets/Ecommerce.jpeg')
            this.src2 = require('../assets/fly.jpg')
          }

          


     } else{
        alert('this page is not exist')
        this.$route.push('/')
     }

     

   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

    backTo(){
        this.$router.push('/project')
    },

    redirecting(){
      this.$router.push('/')
    },

    setSpecialHover(condition, element){
        if (condition === 'special') {
          element.classList.add('special-hover');
        }else {
          element.classList.remove('special-hover');
        }
    },


    darkMode(){
       this.dark = !this.dark;
        const green =  document.getElementsByClassName('greenTitle')
        const ProjectName = document.getElementsByClassName('projectName')
        const githubLink = document.getElementsByClassName('githubLink')
        const githubLogo = document.getElementsByClassName('githubLogo')
        const aTag = document.getElementsByClassName('linkToOther')
        const myName = document.getElementsByClassName('myName')
        const foldList = document.getElementsByClassName('foldList')
        const projectTitle = document.getElementsByClassName('projectTitle')
         const projectDescription = document.getElementsByClassName('projectDescription')
          const information = document.getElementsByClassName('information')

       if(this.dark == true){
            document.querySelector('.mainContainer').style.background = 'rgb(32, 32, 35)'

            githubLink.forEach(item=>{
                    item.style.color = 'rgb(186, 149, 81)'
                    this.setSpecialHover('special', item)
              })
              
              green.forEach(item=>{
                item.style.background = 'rgba(154,230,180,0.16)'
                item.style.color = 'rgb(66, 239, 104'

              })
              ProjectName.forEach(item=>item.style.color = 'rgb(186, 149, 81')
              githubLogo.forEach(item=>item.style.color = 'rgb(186, 149, 81)')


               aTag.forEach(item=>{
                    item.style.color = 'rgb(186, 149, 81)'
                    this.setSpecialHover('special', item)
              })

                myName.forEach(item=>item.style.color = 'white')
                foldList.forEach(item=>item.style.color = 'white')
                projectTitle.forEach(item=>item.style.color = 'white')
                projectDescription.forEach(item=>item.style.color = 'white')
                information.forEach(item=>item.style.color = 'white')


       }else{
              document.querySelector('.mainContainer').style.background = 'rgba(240, 231, 219, 0.757)'

                  green.forEach(item=>{
                item.style.background = '#C6F6D5'
                item.style.color = '#22543D'
              })

                 ProjectName.forEach(item=>item.style.color = 'black')

                 githubLink.forEach(item=>item.style.color = 'black')
                 githubLogo.forEach(item=>item.style.color = 'black')
            
              githubLink.forEach(item=>{
                    item.style.color = 'black'
                    this.setSpecialHover('none', item)
              })

              aTag.forEach(item=>{
                    item.style.color = 'white'
                    this.setSpecialHover('none', item)
              })

                myName.forEach(item=>item.style.color = 'black')
                foldList.forEach(item=>item.style.color = 'black')
                projectTitle.forEach(item=>item.style.color = 'black')
                projectDescription.forEach(item=>item.style.color = 'black')
                information.forEach(item=>item.style.color = 'black')
              
          }
     }
     /*The end of Dark mode*/

   }
    
  }
</script>

<style lang="scss" scoped>

.mainContainer{
  width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: auto 95%;
  grid-template-rows: 60px 92%;
  background: rgba(240, 231, 219, 0.757);
  overflow-y: scroll;
  transition: 1s all;
}

 .hpHeader{
    height: 100%;
    grid-row: 1;
    grid-column: 2/3;
    background: transparent;
    float:right;
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
  color: black;
}

.myName{
   grid-row: 1/2;
   grid-column: 2;
   font-size: 30px;
   float: left;
   margin-left: 15px;
   position: absolute;
   color: black;
   font-family: PingFang SC,HarmonyOS_Regular,Helvetica Neue,Microsoft YaHei,sans-serif!important;
   transition: 1s;
   z-index: 20;
   @media screen and (max-width:767px){
      font-size: 25px;
      margin-top: 0.5vh;
   }
}

.SideBar{
  grid-row: 1/3;
  grid-column: 1/3;
  box-shadow: 5px 0px 10px -5px rgba(54, 54, 54, 0.527);
  height: 100%;
  width:35%;
}

.darkArea{
   margin-top: 13px;
   transition: all 1s;
     @media screen and  (min-height:400px) and (max-width:737px){
       grid-column: 3/4;
   }
}

.w{
  font-size: 15px !important;
  color: white;
}

.darkMode{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border:0;
  background: orange;
  width:20px;
  height: 20px;
  transition: 1s all;
}

.lightMode{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  border:0;
  background: grey;
  width:20px;
  height: 20px;
  transition: 1s all;
}

.darkArea:hover{
   opacity: 0.6;
}

.contentBox{
  position: absolute;
  left: 150px;
  grid-row: 2;
  grid-column: 1/3;
  width:70%;
  height: 100%;
  display: grid;
  grid-template-columns: 85px 75%;
  grid-template-rows: 10% 20% 40% auto auto;


}

.projectTitle{
  grid-row:1;
  grid-column:1;
  text-align: left;
  color:black;
  font-family: var(--chakra-fonts-heading);
  width: 100%;

}

// .projectContainer{
//   grid-row: 2;
//   grid-column: 2;
//   width:100%;
//   height:100%;
// }

.projectDescription{
 grid-row: 2;
 grid-column: 1/3;
 text-align: left;
 margin-left: 20px;
 margin-top: 10px;
 color: black;
 font-size: 13px;
}

.projectName{
  grid-row: 1;
  grid-column:2;
  text-align:left;
  font-size: 18px;
  color: black;
  font-weight:bold;
}

.introContent{
  grid-row: 3;
  grid-column: 1/3;
  height: 100%;
  width: 100%;
  list-style-type: none;
}

.introContent li{
  float: left;
  list-style: none;
  margin-top: 10px;
  width:100%;
}

.information{
  width: 77% !important;
  float: left;
  color: black;
  text-align: left;
  font-size: 12px;
  margin-left: 0.5vw;
}

.greenTitle{
  background: #C6F6D5;
  width: 53px;
  height: 16px;
  // margin-left: 2vw;
  // margin-top:3.5vh;
  font-size: 9px;
  color: #22543D;
  font-weight: bold;
  text-align: center;
  display: inline;
  float: left;
}

.githubLink{
  text-decoration: none;
  color:black;
  font-weight: bolder;
    // color: rgb(66, 239, 104);
}

.githubLink:hover{
  border-bottom: solid 1px black;
}


.githubLogo{
   font-size:11px; 
   color:black;
}

.special-hover:hover{
   border-bottom: solid 1px rgb(186, 149, 81);
}

.linkToWebsite{
  text-decoration: none;
  color:black;
  font-weight: bolder;
}

.linkToWebsite:hover{
   border-bottom: solid 1px black;
}

.image1{
  grid-column:1/3;
  grid-row:4;
  width:80%;
  height:auto;
  margin-top: 20px;
  margin-left:40px;
  object-fit: cover;
  border-radius: 2px;
}

.image2{
  grid-column:1/3;
  grid-row:5;
  width:80%;
  height:auto;
  margin-top: 20px;
  margin-left:40px;
  object-fit: cover;
  border-radius: 2px;
}

//For Samsung and Iphone
@media screen and  (min-height:400px) and (max-width:737px){

  .darkArea{
    grid-column: 2/3;
    margin-left:25px;
    margin-top: 12px;
  }

  .w{
    font-size: 20px !important;//dark mode icon
  }

 .contentBox{
   left:30px;
   width:85%;
   grid-template-rows: 5% 12% 30% auto auto;
 }

 .image1{
   margin-top:0;
   margin-left: 30px;
 }

 .image2{
  margin-left: 30px;
  height:100%;
 }

  .darkMode{
  width:28px;
  height: 20px;
  margin-left: 16px;
  // margin-top: 1px;
 }

 .lightMode{
  width:28px;
  height: 20px;
  margin-left: 16px;
  // margin-top: 1px;
 }

 .w{
  font-size: 15px !important;
 }

}

//for ipad and ipad mini
@media screen and (min-width: 768px)and (max-width:912px){


 .darkArea{
     grid-column: 2/3;
}

 .contentBox{
  left:100px;
   grid-template-rows: 10% auto 62%;
 }

 .contentBox{
   width:85%;
   grid-template-rows: 5% 8% 15% auto auto;
   grid-template-columns: 130px 75%;
 }

 .projectTitle{
   font-size: 25px;
   margin-top:5px;
 }

 .projectName{
  font-size: 35px;
 }

 .projectDescription{
   font-size: 20px;
 }

 .information{
    font-size: 18px
 }

 .greenTitle{
  font-size:15px;
   width: 65px;
  height: 20px;
 }

.githubLogo{
  font-size: 15px;
}

.image1{
  margin-top: 60px;
}
.image2{
  height:100%;
}

 .darkMode{
  width:32px;
  height: 28px;
  margin-left: 140px;
  margin-top: 4px;
 }

 .lightMode{
  width:32px;
  height: 28px;
  margin-left: 140px;
  margin-top: 4px;
 }

 .w{
  font-size: 18px !important;
 }


}

//For Galaxy Fold
@media screen and (max-width: 280px){
  .foldList{
     font-size: 19px !important;
  }

  .rSideBarButton{
     margin-top: 0.4vh;
  }

  .myName{
     font-size: 22px !important;
  }

   .darkArea{
     grid-column: 2/3;
     grid-row: 1;
     margin-left: 0 !important;
     z-index: 10
   }

   .w{
     font-size: 16px !important;
   }

   .contentBox{
      grid-template-rows: 5% 15% 45% auto auto;
      width:80%;
      left:20px;
   }

   .introContent{
    padding-left:15px !important;
   }

   .introContent li{
     margin-top: 17px;
   }

}

//fit big screen
@media screen and (min-width: 912px){

  .myName{
        font-size: 40px
  }

  .foldList{
          font-size: 35px !important;
  }

 .contentBox{
   width:900px;
   grid-template-columns: 150px 75%;
   grid-template-rows: 10% auto 30% auto auto;
   left: 30vw;
 }

   .projectTitle{
   font-size: 30px;
   margin-top:5px;
 }

 .projectName{
  font-size: 35px;
 }

.projectDescription{
   font-size: 20px;
}

.information{
    font-size: 20px
}

.greenTitle{
  font-size:15px;
   width: 65px;
  height: 20px;
}

.githubLogo{
  font-size: 20px;
}

.darkMode{
   width:40px;
   height: 35px;
   margin-left: 70px;
 }

.lightMode{
    width:40px;
    height: 35px;
    margin-left: 70px;
         
}

  .w{
     font-size: 23px !important;
   }
}

@media screen and (min-width: 912px) and (max-width: 1200px){
   .contentBox{
      left: 210px !important;
   }

       .darkMode{
        width:40px;
        height: 35px;
        margin-left: 70px;
        //  margin-top: 1px;
    }

        .lightMode{
          width:40px;
          height: 35px;
          margin-left: 70px;
          // margin-top: 1px;
        }

        .w{
          font-size: 23px !important;
        }
}








</style>