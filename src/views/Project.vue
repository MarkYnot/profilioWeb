!<template>
  <div class="mainContainer">

    <div class="hpHeader">
      
    <Header :mainPage="dark">
       <div slot="search" class="darkArea" >
             <!-- bulb -->
                <button :class="dark?'darkMode':'lightMode'" @click="darkMode()">
                  <a-icon :type="dark?'alert':'bulb'" class="w" theme="outlined"  />
                </button>
            </div>
    </Header>
  </div>


      <button class="rSideBarButton" @click="toggleCollapsed" >
              <a-icon class="foldList" :style="{fontSize:'24px',marginTop:'5px'}" :type="collapsed ? 'close' : 'menu-fold'" /></button>

 

       <span  class="myName" @click="redirecting()" > JUNJIE LIN</span>

        <transition name="SidebarFade">
        <div class="SideBar" v-if="this.collapsed">
              <SideBar :collapsed="collapsed"/>
        </div>
        </transition>
        
        <!-- /img/fly.d5432bd4.jpg -->
        <div class="contentBox" >
           <h2 class="projectTitle">Porjects</h2>

           <div class="projectContainer">
              <!-- <div class="projectBox" v-for="(item, index) in allProjects" :key="item.id"  :style="{ 'gridColumn': (index % 2) +1, 'gridRow': Math.floor(index/2) +1 }" @click="to(item.link)">
                  <div class="projectCover"></div>
                  <h3 class="projectName">{{item.name}}</h3>

                  <span class="projectDescrition">{{item.description}} </span>
              </div> -->

              <div class="projectBox" id="pb1" @click="to('/project/Ecommerce')">
                  <div class="projectCover"></div>
                  <h3 class="projectName">PhoneZone</h3>
                  <span class="projectDescrition">An E-commerce Web application witht MEVN stack </span>
             </div>


              <div class="projectBox" id="pb2" @click="to('/project/Education')">
                  <div class="projectCover"></div>
                  <h3 class="projectName">Banvas</h3>
                  <span class="projectDescrition">Education Web application with Vue, Springboot, SQL and Hibernate </span>
             </div>


             <div class="projectBox" id="pb3" @click="to('/project/Banana')">
                  <div class="projectCover"></div>
                  <h3 class="projectName">Study Banana</h3>
                  <span class="projectDescrition">An E-commerce Web application with MERN stack </span>
             </div>


              <div class="projectBox" id="pb4" @click="to('/project/Chat')">
                  <div class="projectCover"></div>
                  <h3 class="projectName">Second-hand Market</h3>
                  <span class="projectDescrition">An tradind Web application with JSP and Javaweb </span>
             </div>


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
          allProjects:[], 
          dark:false
       }
    },

     components:{
     Header,
     SideBar
   },

   mounted(){
      console.log(window.innerWidth, window.innerHeight)
   },

   methods:{
      toggleCollapsed() {
      this.collapsed = !this.collapsed;
    },

      to(address) {
        this.$router.push(address)
    },

    redirecting(){
      this.$router.push('/')
    },

        darkMode(){
            this.dark = !this.dark;
            // const bottomLogo = document.getElementsByClassName('bottomLogo')
             const foldList = document.getElementsByClassName('foldList')
              const myName = document.getElementsByClassName('myName')
              const projectName = document.getElementsByClassName('projectName')
              const projectTitle = document.getElementsByClassName('projectTitle')
               const projectDescrition = document.getElementsByClassName('projectDescrition')
            
            if(this.dark == true){
                  document.querySelector('.mainContainer').style.background = 'rgb(32, 32, 35)'
                  foldList.forEach(item=>item.style.color = 'white')
                   myName.forEach(item=>item.style.color = 'white')
                   projectTitle.forEach(item=>item.style.color = 'white')
                   projectName.forEach(item=>item.style.color = 'white')
                   projectDescrition.forEach(item=>item.style.color = 'white')
           

            }else{
                    document.querySelector('.mainContainer').style.background = 'rgb(240, 231, 219)'     
                    foldList.forEach(item=>item.style.color = 'black')
                    myName.forEach(item=>item.style.color = 'black')   
                    projectTitle.forEach(item=>item.style.color = 'black')    
                    projectName.forEach(item=>item.style.color = 'black')    
                    projectDescrition.forEach(item=>item.style.color = 'black')   
                }
     }

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
  color: black
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

// .lightMode:hover{
//      background: rgba(128, 128, 128, 0.164) !important;
// }

// .darkMode:hover{
//      background: rgb(216, 162, 62) !important;
// }

.darkArea:hover{
   opacity: 0.8;
}

.contentBox{
  grid-row: 2;
  grid-column: 1/3;
  width:100%;
  height: 100%;


}

.projectTitle{
  position: absolute;
  left:17%;
  text-align: left;
  color:#2c3e50;
  font-family: var(--chakra-fonts-heading);
  width: 50%;
  font-weight:bolder;
}

.projectContainer{
  width:737px;
  height:auto;
  position: absolute;
  left:15%;
  top:100px;
  // border: 2px black solid;
  display: grid;
  gap:20px;
  grid-template-columns: 50% 50%;
  grid-template-rows: 50% 50%;
}

#pb1{
  grid-row: 1;
  grid-column: 1
}

#pb2{
  grid-row: 1;
  grid-column: 2
}

#pb3{
  grid-row: 2;
  grid-column: 1
}

#pb4{
  grid-row: 2;
  grid-column: 2
}

#pb2 .projectCover{
    background-image: url(../assets/VideoSelection.jpg);
}

.projectBox{
  width: 300px;
  height: 210px;
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 70% 10% auto;
}

.projectCover{
  border-radius: 10px;
  // flex-basis:45%;
  grid-row: 1;
  background-image: url(../assets/Ecommerce.jpeg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 90%;
  height: 87%;
  margin: 13px 17px;
}

.projectName{
  grid-row: 2;
  font-weight:600;
  color: #2c3e50;
}

.projectDescrition{
 grid-row: 3;
 color: black;
 width: 90%;
 font-size: 10px;
 text-align: center;
 margin-left:20px;
}

//For Samsung and Iphone
@media screen and  (min-height:400px) and (max-width:737px){

  .darkArea{
    grid-column: 2/3;
    margin-left:25px;
    margin-top: 12px;
  }
  
  .projectContainer{
      width:auto;
  }

  .w{
    font-size: 20px !important;//dark mode icon
  }

  .projectContainer{
     grid-template-columns: 100%;
     grid-template-rows: 25% 25% 25% 25%;
     gap: 0 !important;
     left: 35px;
  }

  #pb2{
  grid-row: 2;
  grid-column: 1
}

#pb3{
  grid-row: 3;
  grid-column: 1
}

#pb4{
  grid-row: 4;
  grid-column: 1
}

.projectTitle{
  left:48px;
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
     margin-top: 15px;
}

 .contentBox{
   grid-template-rows: 10% auto 62%;
 }

 .darkMode{
  width:32px;
  height: 28px;
  margin-left: 160px;
  margin-top: 1px;
 }

 .lightMode{
  width:32px;
  height: 28px;
  margin-left: 160px;
  margin-top: 1px;
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

   .projectTitle{
    left:20px;
}

  .projectContainer{
      width:auto;
    left: 0px;
 }

}


//screen size big
@media screen and (min-height:600px) and (min-width:1595px){

      .myName{
        font-size: 40px
      }

      .foldList{
          font-size: 35px !important;
      }

     .projectContainer{
         width:1400px;
         place-items: center;
         left: 15vw;
     }


      .projectBox{
        //  width:90%;
        width:90%;
        height:500px;
        place-items: center;
     }

     .projectName{
      margin-top:18px;
      font-size: 30px;
     }

     .projectDescrition{
        font-size: 20px;
        margin-bottom: 80px;
     }

     .projectTitle{
        font-size: 40px;
     }

      .darkMode{
          width:40px;
          height: 35px;
          margin-left: 70px;
        // margin-top: 1px;
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


@media  screen and (min-width: 1000px) and (max-width: 1595px) {

    .projectContainer{
       left: 20vw;
    }

    .projectTitle{
        left: 20vw;
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