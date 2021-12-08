!<template>
  <div class="forgetPasswordContainer">
           <img class="avantar" v-lazy="'/static/banvasLogo.png'" alt="avantar"> &nbsp;&nbsp;<span class="banvas">Banvas</span>
       <span class="title">Make Study Easier</span>
      <div class="inputContainer">
            <h1>Forget Password?</h1>
            <p id="line1">A new password will be sent to registed email</p><br/><br/><br/><br/><br/><br/><br/><br/>
            <div class="inputArea">
             <span class="span">Email: &nbsp;</span><input class="textBox" type="text" placeholder="Enter your username(email)"  v-model="username">
            </div>
              <br/><br/>
                <div class="route">
                    <router-link to="/login" class="note" id="Login">Log in</router-link> 
                    <router-link to="/Registration" class="note" id="Signup">Sign up</router-link>
                </div>
                
                 <button id="Button" type="button" @click="userLogin">Send Email</button>
      </div>

  </div>
</template>

<script>
 import "../assets/css/header.css";
 import userService from '../services/userService';
  export default {

     data(){
            return{
                username: "",
                data: [], 
                id: 0,
            }
        },

        components:{
            userService
   },

         methods: {
        //request the user data from backend and use mp5 to secure the sensitive user infomation
            async userLogin(){
                if(this.username == ""){
                    alert("Password and username cannot be empty")
                }else{
                    this.data = await userService.forgetPassword(this.username)
                    this.data = this.data.data
                    console.log(this.data)
                try{
                    if(this.data){
                        alert('Email have sent')
                        this.$router.push({path: "/login"})
                    }else{
                        alert("invaild username, please try again")
                    }
                }catch(err){
                    console.log(err)
                    }
                }
                
            },


            
        },


    
  }
</script>

<style lang="less" scoped>
.forgetPasswordContainer{
    width: 100%;
	  height: 100%;
	  position: absolute;
	  left: 50%;
	  top: 50%;
	  transform: translate(-50%,-50%);
    background-image: url("../assets/background.jpeg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 15% 75% 10% ;
}

.inputContainer{
   height: 62%;
   width:70%;
   border-radius: 13px;
   grid-row: 2;
   grid-column: 2;
   margin-top: 7vh;
   margin-left:9vw;
   background: rgba(255, 255, 255, 0.74);
   display: grid;
   grid-template-columns: 50% 50%;
   grid-template-rows: 20% 15% 15% 15% 1fr;
}

.title{
  grid-row: 2;
  grid-column: 1;
  color:white;
  font-size: 4vw;
  margin-top: 21vh;
  font-weight: bold;
  margin-left: 14vw;
  word-wrap: break-word;
  text-align: left;
  
  
}

.inputContainer h1{
  grid-column: 1/3;
  grid-row: 1/2;
  margin-top: 2vh;
  float:left;
  margin-left: 2vw;
  font-size: 2.5vw;
  font-weight: bold;
}



.inputContainer p{
  grid-column: 1/3;
  grid-row: 2/3;
  float:left;
  margin-left: 2vw;
  font-size: 1.1vw;
}

.textBox{
    // float:left;
    // margin-left: 0.5vw;
    width:70%;
    border: 1px solid #e8e8e8;
    border-radius: 5px;
    height: 40px;
    font-size: 1.2vw;
    transition: all 0.6s;

}

.span{

  margin-left: 2vw;
  font-size: 1.5vw;
}

.inputArea{
    grid-column: 1/3;
    grid-row: 3/4;
    float:left;
    width:100%;
}

.route{
    grid-column: 1/3;
    grid-row: 4/5;
}

.note{
  font-size: 1.2vw;
}

#Login{
  float:left;
  margin-left: 7vw;
}

#Signup{
  float:right;
  margin-right: 4vw;
}

#Button{
  margin-top: 7vh;
  width:82%;
  float:left;
  margin-left: 4vw;
  height: 60px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;
  background-color: #1677FF;
  color:white;
  font-size:1.5vw;
  text-align: center;
  grid-column: 1/3;
  grid-row: 5/6;

}

.banvas{
  margin-left: 10vw;
  margin-top:8vh;
  grid-row: 1;
  grid-column: 1;
  color:white;
  font-size: 3vw;
  width:20%;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>