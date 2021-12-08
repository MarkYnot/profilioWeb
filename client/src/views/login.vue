<template>
  <div class="loginContainer">
    <img class="avantar" v-lazy="'/static/banvasLogo.png'" alt="avantar"> &nbsp;&nbsp;<span class="banvas">Banvas</span>
       <span class="title">Make Study Easier</span>
    <el-card class="login-form-layout">
      <el-form
        autocomplete="on"
        :model="loginForm"
        ref="loginForm"
        label-position="left"
      >
        <div style="text-align: center">
        </div>
        <h2 class="login-title color-main">Banvas</h2>
        <el-form-item prop="username">
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="Enter Account"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            name="password"
            :type="pwdType"
            @keyup.enter.native="handleLogin"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="Enter Password"
            show-password
          >
          </el-input>
        </el-form-item>
        <el-form-item >
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleLogin"
          >login</el-button>
        </el-form-item>
        <el-form-item >
          <el-button
            style="width: 50%"
            type="text"
            :loading="loading"
            @click.native.prevent="Registrtion"
          >Registrtion</el-button>
        </el-form-item>
          <el-form-item >
          <el-button
            style="width: 50%"
            type="text"
            :loading="loading"
            @click="Forgetpassword"
          >Forget password?</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import userService from '../services/userService'
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        username: "",
        password: ""
      },
      verify: [],
      loading: false,
      pwdType: "password",
    };
  },

  methods: {
   async handleLogin() {
        this.loading=true
        if(this.loginForm.password==""||this.loginForm.username==""){
            this.loading=false
            return alert("password and username cannot be empty!")
           
        }else{
        let md5pw=this.$md5(this.loginForm.password)
       const verifyResult = await userService.getVerify(this.loginForm.username,md5pw)
       this.verify = verifyResult.data
        }
        try{
          if(this.verify!==""){
                let firstname = this.verify.firstname
                let lastname = this.verify.lastname
                let username = this.verify.email
                let userid = this.verify.user_id
                this.$cookies.set("firstname", firstname, "360min"); //asve info into cookie with base64 encode to enhance the security. 
                this.$cookies.set("lastname",lastname,"360min");
                this.$cookies.set("state", true,"360min");
                this.$cookies.set("username", username,"360min");
                this.$cookies.set("userid", userid, "360min");
                this.$router.push({path: "/modeSelection"});
          }else{
              alert("incorrect username or password")
              this.loading=false
          }
        }catch(err){
           console.log(err)
        }
    },
    Registrtion(){
      this.$router.push({
                  path: "/Registration"
                });
    },
    Forgetpassword(){
       
        this.$router.push({path:'/forgetPassword'})
    }
    
  }
};
</script>

<style scoped>

.loginContainer{
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

.login-form-layout {
  /* position: absolute;
  left: 0;
  right: 0; */
  background: rgba(255, 255, 255, 0.74);
  width: 470px;
  margin: 140px auto 240px;
  border-top: 10px solid #409eff;
  grid-row: 2;
   grid-column: 2;
}
.login-title {
  text-align: center;
}
.login-center-layout {
  background: #409eff;
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-top: 200px;
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
