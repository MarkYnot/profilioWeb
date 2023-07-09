<template>
  <div class="registerContainer">

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
          <svg-icon icon-class="login-mall" style="width: 56px;height: 56px;color: #409EFF"></svg-icon>
        </div>
        <h2 class="login-title color-main">Welcome to register your banvas account</h2>
        <el-form-item prop="username">
           <h4 class="login-subtitle">  Creat your account:</h4>
          <el-input
            name="username"
            type="text"
            v-model="loginForm.username"
            autocomplete="on"
            placeholder="Account"
          >
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
        <h4 class="login-subtitle">  Creat your password:</h4>
          <el-input
            name="password"
            :type="pwdType"
            v-model="loginForm.password"
            autocomplete="on"
            placeholder="Password"
            show-password
          >
          </el-input>
        </el-form-item>
           <el-form-item prop="name">
           <h4 class="login-subtitle"> Your name:</h4>
          <el-input
               style="width: 48%;margin: 0px 12px 0px 0px;"
            name="age"
            type="text"
            v-model="loginForm.lastname"
            autocomplete="on"
            placeholder="Last name"
          >
                    </el-input>
          <el-input
          style="width: 48%"
            name="age"
            type="text"
            v-model="loginForm.firstname"
            autocomplete="on"
            placeholder="First name"
          >
          </el-input>
        </el-form-item>
   <el-form-item prop="userage">
           <h4 class="login-subtitle"> Detect your age:</h4>
          <el-input
          :disabled="able"
            name="age"
            type="text"
            v-model="loginForm.age"
            autocomplete="on"
            placeholder="Age"
          >
          </el-input>
        </el-form-item>
         <el-form-item prop="usergender">
           <h4 class="login-subtitle"> Detect your gender:</h4>
          <template>
  <el-radio :disabled="able" v-model="loginForm.radio" label="male">Male</el-radio>
  <el-radio :disabled="able" v-model="loginForm.radio" label="female">Female</el-radio>
            <span slot="prefix">
              <svg-icon icon-class="user" class="color-main"></svg-icon>
            </span>
    </template>
        </el-form-item>
                    <h4 class="login-subtitle">Upload your selfie(Age/Gender)</h4>
    <input
          type="file"
          accept="image/png, image/jpeg"
          @change="fnChange($event)"
          id= "file" 
           style= "display:none"
        />

<input type= "button" value="Browser"  onclick= "document.getElementById('file').click()"/>

    <h3>Picture</h3>
    <div class="see">
      <img id="myImg" src="../assets/logo.png" />
      <canvas id="myCanvas" style="position:fixed; left:44.2%; "/>
    </div>
        <el-form-item >
          <el-button
            style="width: 100%"
            type="primary"
            :loading="loading"
            @click.native.prevent="handleregister"
          >Regist</el-button>
        </el-form-item>
                  <el-form-item >
          <el-button
            style="width: 50%"
            type="text"
            :loading="loading"
            @click.native.prevent="tologin"
          >Already have an account?  Login</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
import * as faceapi from "face-api.js";
import { MessageBox } from 'element-ui';
import { Message } from 'element-ui';
import userService from '../services/userService';
export default {
  name: "Registration",
  data() {
    return {
      loginForm: {
        username: "",
        password: "",
        age:"",
        firstname: "",
        lastname: "",
        radio:""
      },
      loading: false,
      pwdType: "password",
      imageUrl: '',
      nets: "ssdMobilenetv1", // 模型
      options: null, // 模型参数
      withBoxes: true, // 边框or轮廓
      imgEl: null,
      canvasEl: null,
      able: true,
      finished: false,
      state: false,
      avatarUrl:"",
      selectedFile:"",
      selectedFileList:[],
    };
  },
  watch: {
    nets(val) {
      this.nets = val;
      this.fnInit().then(() => this.fnRun());
    },
    withBoxes(val) {
      this.withBoxes = val;
      this.fnRun();
    },
  },
  mounted() {
    this.$nextTick(() => {
      this.fnInit().then(() => this.fnRun());
    });
  },
  methods: {
    showPwd() {
      if (this.pwdType === "password") {
        this.pwdType = "";
      } else {
        this.pwdType = "password";
      }
    },
    tologin(){
                    this.$router.push({
                  path: "/login"
                });
    },

    handleBeforeUpload(){
       console.log(1)
    },
   async handleregister(){
        this.loading=true;
        if(this.loginForm.username==""||this.loginForm.password==""||this.loginForm.age==""||this.loginForm.lastname==""||this.loginForm.firstname==""||this.loginForm.radio==""){
        alert("Register infomation cannot be empty!")
        this.loading=false;
        }
        else{
          this.state=await userService.checkemail(this.loginForm.username);
          if(this.state.data==true){
               console.log(1)
              this.state=false;
              this.loading=false;
              return alert("Email already exist!")
          }else{
                MessageBox.confirm('Are you confirm to regiter?', 'Notice', {
                confirmButtonText: 'Confirm',
                cancelButtonText: 'Reject',
                type: 'warning'
              }).then(async ()=>{
                      this.state=true;
                      Message({
                        type: 'success',
                        message: 'Success!',
                      });
              console.log(this.loginForm.gender)
               const result = await userService.Registration(this.loginForm.username,this.$md5(this.loginForm.password),this.loginForm.lastname,this.loginForm.firstname,this.loginForm.age,this.loginForm.radio,this.avatarUrl)
               this.$router.push({path: "/login"});
               
                 
                   
              }).catch(() => {
                Message({
                  type: 'info',
                  message: 'Canceled'
                }); 
                this.loading=false;         
              });
              if(this.state==true){
                console.log(1)
                  
              }
        }}
          this.loading=false;
    },


           getBase64(img, callback) {
          const reader = new FileReader();
           reader.readAsDataURL(img);
           console.log(reader)
           reader.onload = ()=> callback(reader.result)
     },


    async fnInit() {
      await faceapi.nets[this.nets].loadFromUri("/models");
      await faceapi.loadFaceLandmarkModel("/models");
      await faceapi.loadAgeGenderModel("/models");
      // 根据模型参数识别调整结果
      switch (this.nets) {
        case "ssdMobilenetv1":
          this.options = new faceapi.SsdMobilenetv1Options({
            minConfidence: 0.5, // 0.1 ~ 0.9
          });
          break;
        case "tinyFaceDetector":
          this.options = new faceapi.TinyFaceDetectorOptions({
            inputSize: 512, // 160 224 320 416 512 608
            scoreThreshold: 0.5, // 0.1 ~ 0.9
          });
          break;
        case "mtcnn":
          this.options = new faceapi.MtcnnOptions({
            minFaceSize: 20, // 1 ~ 20
            scaleFactor: 0.709, // 0.1 ~ 0.9
          });
          break;
      }
      // 节点属性化
      this.imgEl = document.getElementById("myImg");
      this.canvasEl = document.getElementById("myCanvas");
    },
    // 执行识别匹配图片
    async fnRun() {
      // 识别绘制人脸信息
      const results = await faceapi
        .detectAllFaces(this.imgEl, this.options)
        .withFaceLandmarks()
        .withAgeAndGender();
      faceapi.matchDimensions(this.canvasEl, this.imgEl);
      const resizedResults = faceapi.resizeResults(results, this.imgEl);
      resizedResults.forEach((result) => {
        const {age, gender, genderProbability } = result;
        this.loginForm.age=Math.round(age, 0);
        if(gender=="male")
        this.loginForm.radio="male";
        else
        this.loginForm.radio="female";
        this.able=false;
        new faceapi.draw.DrawTextField(
          [
            `${Math.round(age, 0)} years`,
            `${gender} (${Math.round(genderProbability)})`,
          ],
          result.detection.box.bottomLeft
        ).draw(this.canvasEl);
      });
      this.withBoxes
        ? faceapi.draw.drawDetections(this.canvasEl, resizedResults)
        : faceapi.draw.drawFaceLandmarks(this.canvasEl, resizedResults);
    },
    //更换匹配图
    fnChange(e) {    
       const nextState = {};
      if (!e.target.files.length) return;
      // 将文件显示为图像并识别
      faceapi.bufferToImage(e.target.files[0]).then((img) => {
        this.imgEl.src = img.src;
        this.canvasEl
          .getContext("2d")
          .clearRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.fnRun();

             nextState.selectedFile = e.target.files[0];
            nextState.selectedFileList = [e.target.files[0]];
            this.getBase64(e.target.files[0], imageUrl =>{
                    this.avatarUrl = imageUrl
            }); 

      });
    },

  },
};
</script>
<style lang="less" scoped>

.registerContainer{
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
  /* position: absolute; */
  left: 0;
  right: 0;
  /* height:100%; */
  background: rgba(255, 255, 255, 0.74);
  width: 360px;
  margin: 10px auto;
  border-top: 10px solid #409eff;
   grid-row: 1/3;
   grid-column: 2;
   overflow: scroll;
   
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
.login-subtitle{
    text-align: left;
    margin: 0px auto;
}
  .see {
  position: relative;
}
.see img {
  max-width: 300px;
  max-height: 350px;
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

#myCanvas{
  position: absolute !important;
  left:0% !important;
}

/deep/ .el-radio{
  color: black !important;
}

/deep/ .el-radio__input.is-disabled+span.el-radio__label{
   color: black !important;
}
</style>
