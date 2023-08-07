const fs = require("fs");

module.exports.homePageCode = `  <div  id="login">
<h1>Login Page</h1> 
    <input type="text" placeholder="Enter your username(email)" v-model="username">
    <input type="text" v-if="pwdType" v-model="password" placeholder="Enter your password"/>
    <input type="password" placeholder="Enter your password" v-model="password" v-else />
    <button class="login" type="button" @click="userLogin">Log in</button>
    <router-link to="/signIn">Don't have account yet? Sign in Right now</router-link>
</div>
    <img :src="seen ? seenImg : unseenImg" @click="changeType()" v-on:mouseover="hoverEye" v-on:mouseout="outEye" class="icon-eye" />` 


module.exports.homepageCss =`#login{
  text-align: center; 
  background-color: #fff;
  border-radius: 20px;
  width: 300px;
  height: 350px;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 5px;
  }

  .login{
    margin-top: 5px;
  }

  .icon-eye{
    height: 30px;
    width: 30px;
    position: absolute;
    left: 63%;
    top: 48.5%;
  }

  #button{
    font-size: 35px;
    color: black;
    background: white;
    position: absolute;
    top: -15px;
  }`
  
module.exports.loginCode =` async userLogin(){
  if(this.password == "" || this.username == ""){
       alert("Password and username cannot be empty")
     }else{
       this.data = await userDataService.getLoginDetail(this.username, this.$md5(this.password))
       this.data = this.data.data
       let base64 = require("js-base64").Base64
       
       
       //asve info into cookie with base64 encode to enhance the security. 
       try{
         if(this.data.checked){
             let firstname = base64.encode(this.data.user[0].firstname)
             let lastname = base64.encode(this.data.user[0].lastname)
             let username = base64.encode(this.data.user[0].email)
             let userid = base64.encode(this.data.user[0]._id)
             this.$cookies.set("firstname", firstname, "30min"); 
             this.$cookies.set("lastname",lastname,"30min");
             this.$cookies.set("state", true,"30min");
             this.$cookies.set("username", username,"30min");
             this.$cookies.set("userid", userid, "30min");
             
             this.$router.push({path: "/"})
         }else{
             alert(this.data.message)
         }
       }catch(err){
           console.log(err)
       }
     }          
   }`


module.exports.userService =`import http from "../http-common";

   // get data from backend
   class userDataService {
       getLoginDetail(username, password) {
           return http.get(/login?username={username}&password={password});
       }
   export default new userDataService();`

   
module.exports.userBackend =`/** This router is used to set request url
   /** This file is for any operation of users
   
       module.exports = (app) => {
         const user = require("../controllers/user.controller");
         var router = require("express").Router();
   
         // set login url and send the data
         router.get("/login", user.LoginVerif);
   
           // use restful api
         app.use("/api", router);  
       
       };`

module.exports.LoginVerif =` module.exports.LoginVerif = function (req, res) {
  // get the username and password from front end
  let username = req.query.username;
  let password = req.query.password;

  // use findUserAccount function to check if database already has this user
  User.findUserAccount(username, password, function (err, result) {
      if (err) {
            console.log("Cannot find account");
      }else {
          let user = result;
          if (user.length == 0) {
              res.send({
                    message: "Your account or password is not correct",
                    checked: false,
          });

        } else {
          res.send({ user: user, checked: true });
        }
      }
   });
  };`


module.exports.shoppingCart =` <template>

 <div v-if="cartItems.length > 0 && loginState">
    <BackButton></BackButton>
    <div id="page-wrap">
        <h1>Shopping Cart</h1>
        <div v-for="(item,index) in cartItems" :key="index">
            <div class="product-container">
                <img class="product-image" v-lazy="'/static/'+item.image" alt="">
                <div class="details-wrap">
                    <h3>{{ item.title }}</h3>
                    <p>item.price</p>
                </div>
                <div class="edit-quantity">
                    <button class="edit-btn" @click="editCart('minus',item)">-</button>
                    <input class="edit-text" type="text" v-model="item.addQuantity">
                    <button class="edit-btn" @click="editCart('add',item)">+</button>
                </div>
                <button class="remove-from-cart" @click="removeItem(item.title)">Remove From Cart</button>
            </div>
        </div>
        <div class="price-text">
            <span class="total-price">Total Price: <your total price></span>
        </div>
        <div class="proceed-transaction">
            <button class="checkout-button" @click="clearStock()">Confirm The Transaction</button>
        </div>
    </div>
   </div>


    <div v-else-if="cartItems.length == 0">
    <BackButton></BackButton>
      <div id="page-wrap">
          <h1>Shopping Cart</h1>
          <p>You haven't added anything to your cart yet!</p>
      </div>
    </div>

    <div v-else-if="!loginState">

      <BackButton></BackButton>
      <div id="page-wrap">
          <h1>Shopping Cart</h1>
          <p>You are not logged in! Please log in your account!</p>
      </div>
    </div>

 </template>`

module.exports.getItem=` methods: {

    getUserDetail() {
        let base64 = require("js-base64").Base64;
        this.firstname = this.$cookies.get("firstname");
        this.lastname = this.$cookies.get("lastname");
        this.email = this.$cookies.get("username");
        this.firstname = base64.decode(this.firstname);
        this.lastname = base64.decode(this.lastname);
        this.email = base64.decode(this.email);
        this.loginState = this.$cookies.get("state");
        // console.log(this.firstname);
        // console.log(this.email);
    },
    async getCartItems() {
        //get the user from the backend
        let data = await userDataService.getCartList(this.firstname, this.lastname);
        this.cartItems = data.data.cartlist;
    }

 }`


 module.exports.getItemApi =`import http from "../http-common";
 
 class userDataService {
    getCartList(firstname, lastname) {
      return http.get(/getCartList?firstname={firstname}&lastname={lastname});
    }
    
  }`

  module.exports.getCartList =`module.exports = (app) => {
      const user = require("../controllers/user.controller");
      var router = require("express").Router();

      //set the cartList url and send the data
      router.get("/getCartList", user.getCartList);
  };`


  module.exports.cartListDetail =`module.exports.getCartList = function (req, res) {
    let firstname = req.query.firstname;
    let lastname = req.query.lastname;
  
    User.findOne(
      { firstname: firstname, lastname: lastname },
      function (err, userDoc) {
        if (err) {
          console.log("match user fail");
        } else {
          let userInfo = userDoc;
          let list = userInfo.cartList;
          //send the cart list data to the front end
          res.send({ cartlist: list });
        }
      }
    );
  };`


module.exports.editCart =`async editCart (flag, item) {
      let editNumber = item.addQuantity;
      let productTitle = item.title;
      if (flag == 'minus' && item.addQuantity >= 2) {
          editNumber--;     
          await axios.post(/updateItemNumber?firstname=${"firstname"
          }&lastname=${"lastname"}&title=${"title"}&newnumber=${"newnumber"})
          .then(res =>{
                if(res.status == "0")this.getCartItems();
          })
         
      } else if (flag == 'add' && item.stock > item.addQuantity) {
          editNumber++;
          await axios.get(/updateItemNumber?firstname=${"firstname"}&lastname=${"lastname"}&title=${"title"}&newnumber=${"newnumber"})
          .then(res => {
             if(res.status == "0") this.getCartItems();
          })
         
      } else if (flag == 'minus' && item.addQuantity == 1) {
          await axios.get(/deleteItem?firstname=${"this.firstname"}&lastname=${"this.lastname"}&title=${"this.productTitle"})
          .then(res =>{
             if (res.status =="0")  this.getCartItems();
          });
      }
        this.reload();
    },
    
    async getCartItems() {
        let data = await userDataService.getCartList(this.firstname, this.lastname);
        this.cartItems = data.data.cartlist;
  }`

  module.exports.addItem =`module.exports = (app) => {

  //set the updateItem url and send the data
  router.get("/updateItemNumber", user.updateUserItem);

  //set the deleteItem url and send the data
  router.post("/deleteItem", user.delItemFromCart);

}`

module.exports.addItemDetail =`module.exports.updateUserItem = function (req, res) {
  let firstname = req.query.firstname;
  let lastname = req.query.lastname;
  let productTitle = req.query.title;
  let newnumber = parseInt(req.query.newnumber);

  User.findOne({ firstname: firstname, lastname: lastname },function (err, userDoc) {
      if (err) {
        console.log("match user fail");
      } else {
        for (let i = 0; i < userDoc.cartList.length; i++) {
          if (userDoc.cartList[i].title == productTitle) {
            userDoc.cartList[i].addQuantity = newnumber;
          }
        }
        userDoc.save(function (err2, doc2) {
          if (err2) {
            res.json({
              status: "1",
              msg: err.message,
              result: "",
            });
          } else {
            console.log("update suc");
            res.json({
              status: "0",
              result: "suc",
             });
            }
          });
        }
      }
    );
  }

    module.exports.delItemFromCart = function (req, res) {
      let firstname = req.query.firstname;
      let lastname = req.query.lastname;
      let title = req.query.title;
      console.log("receive dele req");

      User.updateOne(
        { firstname: firstname, lastname: lastname },
        { $pull: { cartList: { title: title } } },
        function (err, doc) {
          if (err) {
            res.json({
              status: "1",
              msg: err.message,
              result: "",
            });
          } else {
            console.log("suceess");
            res.json({
              status: "0",
              result: "suc",
            });
          }
        }
      );
    };`

module.exports.uploadCode = `<div id="addLis">
<h1>Add listing</h1>
    <input type = "text" v-model="title" placeholder="enter product title"/><br>
    <input type = "text" v-model="price" placeholder="enter product price"><br>
    <input type = "text" v-model="brand" placeholder="enter product brand"><br>
    <input type = "text" placeholder= "enter image name" v-model="image"><br>
      <input type = "text" v-model="stock" placeholder="enter stock"><br>

     <el-upload class="upload"     
          action="http://localhost:3000/api/upload"
          :on-preview="handlePreview"
          :on-success="uploadSucess"
          single
          :limit="1"
          :on-exceed="handleExceed"
          ref='upload'
          list-type="picture">
          <el-button size="small" type="primary" >Upload</el-button>
      </el-upload><br>

   <button class="add-button" type="button" @click="addPage">Add</button>
  </div>`


module.exports.elementUI = `import Vue from 'vue'
  import App from './App.vue'
  import router from './router'
  import VueLazyload from 'vue-lazyload'
  import ElementUI from 'element-ui'
  import 'element-ui/lib/theme-chalk/index.css'
  import './element.js'
  import VueCookies from 'vue-cookies'
  import md5 from 'js-md5';

  Vue.use(VueCookies)
  Vue.use(ElementUI)
  Vue.use(VueLazyload);
  Vue.prototype.$md5 = md5
  Vue.config.productionTip = false

  new Vue({
    router,
    render: h => h(App),
  }).$mount('#app')`


module.exports.uploadBackend = `module.exports = (app) => {
      const product = require("../controllers/product.controller");
      var router = require("express").Router();

      //middleware for uploading image
      const multer = require('multer');
      const fs = require('fs');
      
      //set destination of the upload image  
      let uploadDir ="..//./client/public/static/";
      fs.mkdirSync(uploadDir,{recursive:true});
      let upload = multer({dest:uploadDir});
        router.use(upload.any())

      // use restful api
      app.use("/api", router);
  };`
  

  module.exports.packageF = `{
    "name": "client",
    "version": "0.1.0",
    "private": true,
    "scripts": {
      "serve": "vue-cli-service serve --port 8080",
      "build": "vue-cli-service build",
      "lint": "vue-cli-service lint"
    },
    "dependencies": {
      "axios": "^0.21.1",
      "core-js": "^3.12.1",
      "crypto": "^1.0.1",
      "element-ui": "^2.15.1",
      "js-base64": "^3.6.0",
      "js-md5": "^0.7.3",
      "npx": "^10.2.2",
      "portfinder": "^1.0.28",
      "vue": "^2.6.11",
      "vue-cookies": "^1.7.4",
      "vue-lazyload": "^1.3.3",
      "vue-router": "^3.5.1",
      "vue-slider-component": "2.8.6",
      "vuetify": "^2.4.11"
    },`

    module.exports.packageB = `{
      "name": "server",
      "version": "0.0.0",
      "private": true,
      "scripts": {
        "start": "node app.js",
        "dev": "nodemon app.js"
      },
      "dependencies": {
        "cookie-parser": "~1.4.4",
        "cors": "^2.8.5",
        "debug": "~2.6.9",
        "ejs": "~2.6.1",
        "express": "~4.16.1",
        "http-errors": "~1.6.3",
        "mongoose": "^5.12.7",
        "morgan": "~1.9.1",
        "multer": "^1.4.2",
        "path": "^0.12.7",
        "pub": "^0.2.0",
        "pug": "^3.0.2"
      },
      "devDependencies": {
        "nodemon": "^2.0.7"
      }
    }`