!<template>
  <div class="modeSelectionContainer">

  <div class="hpHeader">
    <Header v-on:currentUser='getCurrentUser'/>
  </div>

     <span class="gameText"> &larr; Video </span>
      <span class="videoText"> Game &rarr;</span>

<div class="Selection">
    <div class="left_selection" id="left_selection_id">
      <router-link to="/videoCentre">
      <img :src="videoImg" alt="">
      </router-link>
</div>

    
    <div class="right_selection" id="right_selection_id">
      <router-link :to="`/${this.gameAllocation}`">
      <img :src="gameImg" alt="">
      </router-link>
      
    </div>

</div>
       
  </div>
</template>

<script>
import Header from '../components/hearder.vue'
import videoImg1 from '../assets/VideoSelection1.jpeg'
import videoImg2 from '../assets/videogif1.gif'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
import gameImg1 from '../assets/gameSelection1.jpg'
import gameImg2 from '../assets/pig.gif'
import gameImg3 from '../assets/gamegif2.gif'

  export default {

    data(){
       return{
         videoImgList: [
                    {icon: videoImg1},
                    {icon: videoImg2},
                    {icon: videoImg3},
                    {icon: videoImg5},
                    {icon: videoImg4}
                   
                ],
                videoImg: "",
                id: 0,
           
           gameImgList: [
                    {icon: gameImg1},
                    {icon: gameImg2},
                    {icon: gameImg3}
                ],
                gameImg: "",
                gameId: 0,
                gameAllocation:''
       }
    },

   components:{
     Header
   },

   created(){
       this.videoGif()
       this.gameGif()

   },

   methods:{
       videoGif(){

                const test = document.styleSheets
                console.log(test)
                this.videoImg = this.videoImgList[this.id].icon

                setInterval(() => {
                    if (this.id === this.videoImgList.length - 1){
                        this.id = 0
                        this.videoImg = this.videoImgList[this.id].icon
                    }else{
                        this.id += 1
                        this.videoImg = this.videoImgList[this.id].icon
                    }
                }, 4000)
            },

          
         gameGif(){
                this.gameImg = this.gameImgList[this.gameId].icon

                setInterval(() => {
                    if (this.gameId === this.gameImgList.length - 1){
                        this.gameId = 0
                        this.gameImg = this.gameImgList[this.gameId].icon
                    }else{
                        this.gameId += 1
                        this.gameImg = this.gameImgList[this.gameId].icon
                    }
                }, 3500)
            },

        getCurrentUser(user){
          this.User = user
           console.log(this.User)
           if(this.User.age <= 20){
              this.gameAllocation = 'game1'
           }else{
               this.gameAllocation = 'game2'
           }

      },

   }
    
  }
</script>

<style lang="less" scoped>
 .modeSelectionContainer{
  width: 100%;
	height: 100%;
	position: absolute;
	left: 50%;
	top: 50%;
	transform: translate(-50%,-50%);
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 5% 10% 85%;

 }

 .hpHeader{
    height: 100%;
    grid-row: 1;
    grid-column: 1/3;
}

.left_selection{
 
     grid-row:1;
     grid-column: 1;
    //  background-image: url('../assets/gameSelect.jpg');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-size: 100% 100%;
     border-top-left-radius: 10px;
     border-bottom-left-radius: 10px;
     transition: all 0.3s;
}

.left_selection img{
   width: 100%;
   height: 100%;
   transition: all 0.4s;
}

.left_selection:hover{

   background-size:  100% 100%;
   transform: scale(1.02);
}

.right_selection{

     grid-row:1;
     grid-column: 2;
    //  background-image: url('../assets/VideoSelection1.jpeg');
     background-size: cover;
     background-position: center;
     background-repeat: no-repeat;
     background-size: 100% 100%;
     border-top-right-radius: 10px;
     border-bottom-right-radius: 10px;
     transition: all 0.3s;
}

.right_selection:hover{

   background-size:  100% 100%;
   transform: scale(1.02);
}

.right_selection img{
   width: 100%;
   height: 100%;
   transition: all 0.4s;
}

.Selection{
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: 100%;
  margin-left:1.9vw;
  grid-row: 3;
  grid-column: 1/3;
  width: 97%;
	height: 98%;
  -webkit-box-shadow: #666 0px 0px 10px;
  -moz-box-shadow: #666 0px 0px 10px;
  box-shadow: #666 0px 0px 10px;
  border-radius: 12px;
}

.right_selection span{
   z-index:1;
   position: relative;
   top:2vh;
}

.gameText{
    grid-row: 2;
    grid-column: 1;
    font-size: 4vw;
}

.videoText{
   grid-row: 2;
   grid-column: 2;
   float: right;
    font-size: 4vw;
}






</style>