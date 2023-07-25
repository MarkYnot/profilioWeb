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
                  <span class="information">Feel free to contribute on <a target="_blank" class="githubLink" href="https://github.com/MarkYnot/ECommerce"><a-icon type="github" theme="outlined" class="githubLogo" :style="{fontSize:'11px', color:'white'}" /> Github</a> if you see anything go wrong</span>
                </li>
                
                  <li> 
                  <div class="greenTitle">STACK</div>
                  <span class="information">NodeJS, VueJS, MongoDB, ExpressJs</span>
                </li>
        </ul>
       
       </div>

       <div class="projectContent" @scroll="handleScroll">
            <button :class="dark?'darkMode':'lightMode'" @click="darkMode()">
                  <a-icon :type="dark?'alert':'bulb'" class="darkLogo" theme="filled" />
            </button>
            
            <span class="published">Published at 18/12/2022</span>
            <span class="textLength"> - 10mins reading</span>

            <div class="content">

              <span class="showcase">
              Welcome to the first blog,The overview of this project blog is to build a Ecommerce
              web application which named PhoneZone. PhoneZone provides users with an easy-trading platform where users could conveniently obtain their products by ordering on this platform.  In this post, I will show you everything I know about how to implement some typical fucntionality of Ecommerce application.
              </span>  
              
             
            
              <span class="showcase">
              In this article, i will introduce the crucial modules of this web 
              application and how to implement each
              of funtionalities in the modules. In addition, this article will only focus on the 
              implementation of some
              crucial funtionality, feel free to access the project in my github.
              </span>

<!-- 
              <span>Here is the porject demo:</span>

              <iframe class="playerSetting" src="https://www.youtube.com/embed/uAZegV6WbCs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
              </iframe> -->

              
              <span id="tableTitle">Table of content:</span>
           
           
              <ul>
                 <li><a href="#section1" class="tableLi">Prerequisities</a></li>
                 <li><a href="#section2" class="tableLi">Installation and Configuration</a></li>
                 <li><a href="#section3" class="tableLi">Login</a></li>
                 <li><a href="#section4" class="tableLi">Shopping Cart</a></li>     
                 <li><a href="#section5" class="tableLi">Upload image</a></li> 
                 <li><a href="#section6" class="tableLi">Summary</a></li>           
              </ul>
      
              <h2 id="section1">Prerequisites</h2>
              <span :style="{ marginTop:'0'}" class="showcase">1. You have to be somewhat familiar with NodeJs. If you have not tried NodeJS before, I highly recommend you to follow <a target="_blank" class="linkToOther" href="https://nodejs.org/en/docs">NodeJS tutorial </a>   <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /> from their official website (since they explained everything quite clearly and help you build serverness API with NodeJs).
              <br/><br/>
               2. About styling, I suggest you to use CSS framework (or even pure CSS) that you are good at currently.  I will try as much as I can to explain all typical css mianipulator we used, so you can apply same idea.

              <br/><br/>
               3. About VueJs, I highly recommend you to follow checkout their <a target="_blank" class="linkToOther" href="https://vuejs.org/guide/introduction.html">Getting start Page </a>   <a-icon class="aIcon" type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" /> , there may be many process reagrding its installation, application and specific related plunin. Then Watching <a target="_blank" class="linkToOther" href="https://www.youtube.com/watch?v=Vn6FxqvsdMU"> Node+VueJs tutorial</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />  to have some ideas how they connect nodeJs and VueJs, you could go ahead and try out initialal the project since you already have some idea about how connect VueJs and NodeJs.
              </span>

              <div class="divisionBar"></div>

              <h2 id="section2">Installation and Configuration</h2>
              <span class="showcase">There are some packages that you will need you to install before hand. I will explain each of them:</span>

              <div class="homePageCode">
                 <CodeBlock :code="this.packageF" language="json" fileName="/client/package.json"/>
              </div>

               <ul class="contentUl">  <strong>For the Client-side:</strong><br/>
                    <li class="showcase"><a target="_blank" class="linkToOther" href="https://axios-http.com/docs/intro"> "axios": "^0.21.1"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  Axios is a popular HTTP client library used for making HTTP requests from the client-side to the server-side or external APIs. </li>

                    <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/zloirock/core-js"> "core-js": "^3.12.1"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  Core-js is a polyfill library that provides modern JavaScript features to older browsers that do not support them. </li>

                     <li class="showcase"><a target="_blank" class="linkToOther" href="https://nodejs.org/api/crypto.html"> "crypto": "^1.0.1"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.   The crypto package is a built-in Node.js module that provides cryptographic functionality, such as hashing and encryption. It is mainly used on the server-side. </li>

                    <li class="showcase"><a target="_blank" class="linkToOther" href="https://element.eleme.io/#/en-US"> "element-ui": "^2.15.1"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.   Element UI is a popular component library for Vue.js applications that provides a set of customizable UI components. </li>


                     <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/dankogai/js-base64"> "js-base64": "^3.6.0"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.    The js-base64 library provides utilities for encoding and decoding data in Base64 format. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/emn178/js-md5"> "js-md5": "^0.7.3"</a> <a-icon class="aIcon" type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  The js-md5 library is used to calculate MD5 hashes of data. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://docs.npmjs.com/cli/v7/commands/npx"> "npx": "^10.2.2"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.   npx is a tool that comes with npm and allows you to run packages without installing them globally. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/http-party/node-portfinder"> "portfinder": "^1.0.28"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.   The portfinder library is used to find an available port when starting a local development server. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://vuejs.org/guide/introduction.html"> "vue": "^2.6.11"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.   Vue.js is the core library for building reactive and component-based user interfaces in JavaScript. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/cmp-cc/vue-cookies"> "vue-cookies": "^1.7.4"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.   The vue-cookies library provides a simple way to manage cookies in Vue.js applications. </li>


                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/hilongjw/vue-lazyload"> "vue-lazyload": "^1.3.3"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.   The vue-lazyload library enables lazy loading of images in Vue.js applications, which improves page loading performance. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://router.vuejs.org/"> "vue-router": "^3.5.1"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  Vue Router is the official routing library for Vue.js applications, allowing you to create client-side routing for single-page applications. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://github.com/NightCatSama/vue-slider-component"> "vue-slider-component": "2.8.6"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  The vue-slider-component library provides a customizable slider component for Vue.js applications. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://vuetifyjs.com/en/"> "vuetify": "^2.4.11"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  Vuetify is a popular Material Design component framework for Vue.js, offering a set of pre-built UI components following the Material Design guidelines.</li>
              </ul>


               <div class="homePageCode">
                 <CodeBlock :code="this.packageB" language="json" fileName="/server/package.json"/>
              </div>

               <ul class="contentUl">  <strong>For the Server-side:</strong><br/>
                    <li class="showcase"><a target="_blank" class="linkToOther" href="https://www.npmjs.com/package/cookie-parser"> "cookie-parser": "Version ~1.4.4" <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" /></a>.  A middleware for parsing HTTP cookies. It simplifies handling cookies in Node.js. </li>

                     <li class="showcase"><a target="_blank" class="linkToOther" href="https://www.npmjs.com/package/debug"> "debug": "Version ~2.6.9"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.   A small debugging utility for Node.js that provides conditional logging based on namespaces. </li>

                    <li class="showcase"><a target="_blank" class="linkToOther" href="https://expressjs.com/"> "express": "^4.16.1"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.   A popular and minimalistic web application framework for Node.js, used for building web servers and APIs. </li>


                     <li class="showcase"><a target="_blank" class="linkToOther" href="https://www.npmjs.com/package/http-errors"> "http-errors": "^1.6.3"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.    A utility for creating HTTP error objects with proper status codes and error messages. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://mongoosejs.com/"> "mongoose": "^5.12.7"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.  An Object Data Modeling (ODM) library for MongoDB and Node.js, used for managing MongoDB databases and providing schema-based data validation. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://www.npmjs.com/package/morgan"> "morgan": "^1.9.1"</a> <a-icon class="aIcon" type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.    A middleware for logging HTTP requests and responses in the Express.js framework. </li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://www.npmjs.com/package/multer"> "multer": "^1.4.2"</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />.  A middleware for handling file uploads in the Express.js framework.</li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://nodejs.org/api/path.html"> "path": "^0.2.0"</a> <a-icon class="aIcon" type="select" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.   A Node.js built-in module that provides utilities for working with file paths.</li>

                      <li class="showcase"><a target="_blank" class="linkToOther" href="https://www.npmjs.com/package/pub"> "pub": "^1.7.4"</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" />.    A utility to publish local development servers to the internet using ngrok. </li>

              </ul>



              <div class="divisionBar"></div>
              <h2 id="section3">Login page</h2>
              <span class="showcase">First, we need to set up the HTML structure and add some form elements. I highly recommanded to consider responsive design to make sure the page looks good on various devices and screen size.</span>

              <div class="homePageCode">
                 <CodeBlock :code="this.homePageCode" language="markup" />
              </div>

              <br/><br/>
              <span class="showcase">1. <strong>HTML Structure: </strong> The login page is built using HTML, containing a heading, username and password input fields, a "Log in" button, and a link to the sign-in page. An eye icon is also included as an image element.
              <br/><br/>
              2. <strong>Data Binding  (v-model): </strong>is utilized to establish two-way data binding between the input fields and the Vue instance properties <strong>username</strong> and <strong>password</strong>. This allows seamless synchronization of user input with the Vue instance data.
              <br/><br/>
              3. <strong>Conditional Rendering (v-if and v-else):</strong> Conditional rendering is employed to control the visibility of the password input field. The <code>v-if</code> and <code>v-else</code> directives toggle between showing a regular text input or a masked password input based on the value of the <code>pwdType</code> property.
                <br/><br/>
              4. <strong>Event Handling (@click, @mouseover, and @mouseout): </strong> Event listeners are implemented to handle user interactions. The "Log in" button has a click event listener <code>@click="userLogin"</code> to trigger the <code>userLogin</code> method when <code>clicked</code>. The eye icon has event listeners for click, mouseover, and mouseout, executing the changeType, hoverEye, and outEye methods respectively.
                <br/><br/>
              5. <strong>Dynamic Image Source:</strong> The image source <code>('src') </code> of the eye icon is dynamically updated using Vue's :src attribute <code>(v-bind:src) </code>. The source changes between<strong>seenImg</strong> and <strong>unseenImg</strong> based on the value of the seen property. Clicking the icon toggles the value of seen, allowing users to view or mask the password input by showing or hiding the eye icon accordingly.

              </span>


             <div class="greyDisplay">
                <span class="showcase"><strong>Form Validation:</strong> Implement client-side form validation to ensure that the entered username and password meet the required criteria (e.g., non-empty fields, valid email format, strong password). Display appropriate error messages to guide users when their input is incorrect.. <br/>
                </span>
             </div>


            <div class="greyDisplay">
                <span class="showcase"><strong>Security Consideration</strong> code in diagram indicate how the html element style could be mainipulated by setting same a classname. However, the getElementById() allow you to mainipulate html element style to your preference by using methods like setAttribute() or append().
                </span>
            </div>


            <span id="cssText" class="showcase">Now is the the css part:</span>
            <div class="homePageCode">
                 <CodeBlock :code="this.homepageCss" language="css" />
              </div>
      
            
            <!-- <span>• Step 1. In the css part, we need to identify the classname or ID we set in the HTML. Symbol # is the ID selector which aim to select html elements with its unique ID. Symbol . lets you define counter styles inline with classname, directly as the value of a property such as list-style<br/><br/>
              
              • Step 2. This project is based on grid layout, each html elements is placed in a specific postion. you need to decide size of each columns and rows in the page by mainipulating the size of grid-template-rows and grid-template-column. Then, Each html element will be placed in specific grid by adjusting grid-row and grid-column. 
              <br/><br/>

              • Step 3. Next we need to set up css style of each html element by adjusting thier attribute liks margin, padding, size to ensure all elements in an appropriate position. 
              </span> -->

                 <ul class="contentUl">  <strong>1. Container Styling (#login):</strong><br/>
                    <li class="showcase">The <code>`#login`</code> selector styles the container representing the login form. It uses <code>`text-align:`</code> center to center the form's content horizontally.</li>
                    <li class="showcase">The background color is set to white <code>`(background-color: #fff)`</code>, giving the form a clean and minimalist appearance.</li>
                    <li class="showcase">To create rounded corners for the form, <code> `border-radius: 20px`</code> is applied, adding a touch of elegance to the design.</li>
                    <li class="showcase">The form is given a fixed width of 300 pixels <code>`(width: 300px)`</code> and a fixed height of 350 pixels <code>(`height: 350px`)</code>, ensuring a consistent size on various devices.</li>
                    <li class="showcase">To center the form on the page, <code>`margin: auto`</code> and position: absolute are used. The <code>`top`, `left`, `right`` and `bottom`</code> properties set to 0 ensure the form remains centered.</li>
              </ul>


                 <ul class="contentUl">  <strong>2. Grid Layout (display: grid):</strong><br/>
                    <li class="showcase">The form's content is organized using CSS grid layout. <code>`display: grid`</code> enables a grid layout for the container's child elements.</li>
                    <li class="showcase">`grid-template-rows: auto` specifies that the grid contains a single row with auto-sizing for the content. This allows the form to adjust its height based on the content.</li>
                  
                </ul>


               <ul class="contentUl">  <strong>3. Eye Icon Styling (.icon-eye):</strong><br/>
                    <li class="showcase">It is given a fixed height and width of 30 pixels each (height: 30px, width: 30px), ensuring a consistent size for the icon.</li>
                    <li class="showcase">Positioned absolutely, it is placed at 63% from the left <code>`(left: 63%)`</code> and 48.5% from the top <code>`(top: 48.5%)`</code> of the container. This positioning creates an aesthetically pleasing appearance, slightly to the right and below the form's center.</li>
                  
                </ul>
              
              <div class="greyDisplay" :style="{}">
                <span class="showcase">CSS grid layout or CSS grid creates complex responsive web design grid layouts more easily and <strong>consistently across browsers</strong>. You could use grid layout to achieve <strong>across-platform web responsive design.</strong>
                </span>
             </div> 

             <span class="showcase">I hope you get what you want, the page should be as what you are expecting. If there something wrong, please refer to  <a target="_blank" class="linkToOther" href="https://github.com/MarkYnot/ECommerce">this repo.</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" />  </span>


            <span class="showcase">All right, lets do the coding for login function:</span>
            <div class="homePageCode">
                 <CodeBlock :code="this.loginCode" language="javascript" />
              </div>
            
            <span class="showcase">Now, we first need to create Authentication Mechanism to veriofy if username and password are correctly entered. Create an API endpoint on the backend server to handle user login requests, hash the user's password and store into the database.</span>

             <div class="homePageCode">
                 <CodeBlock :code="this.userService" language="javascript" />
              </div>

            <span class="showcase">First i will call the API in userService to connect with the backend. After called it, then go to the backend router:</span>

            <div class="homePageCode">
                 <CodeBlock :code="this.userBackend" language="javascript" fileName="/routes/user.server.routes.js"/>
            </div>

            <span class="showcase">Now, you should see the mondoDB query implemented by Mongoes which is one of middleware for the connection of mongoDb and ExpressJs. I highly recommended you to follow this the <a target="_blank" class="linkToOther" href="https://mongoosejs.com/docs/">mongoose documentation</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /> to know how to write CRUD of mongoDB from expressJs.</span>

            <div class="homePageCode">
                 <CodeBlock :code="this.LoginVerif" language="javascript" fileName="/server/controller/user.controller.js"/>
            </div>

            <span class="showcase">I hope you get what you want, the login function shuld work as what you are expecting, If any issue occurs, please check out <a target="_blank" class="linkToOther" href="https://mongoosejs.com/docs/">original repo</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /> </span>

            <div class="divisionBar"></div>
        

            <h2 id="section4">Shopping cart</h2>
             <h3>Set up funcdamental logic for shopping cart page</h3>

            <span class="textBeforeCode">First, we need some content for the website. So we set up the HTML structure, Create shopping Cart display.</span>

             <div class="homePageCode">
                 <CodeBlock :code="this.shoppingCart" language="markup" fileName="/client/views/cart.vue"/>
            </div>

            <span class="showcase">Now, we need to find the way to Fetch Products from Backend. If you already completed <a target="_blank" class="linkToOther" href="https://vegibit.com/vue-js-express-tutorial/">Vue + ExpressJs tutorial <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /></a>, you know that you can implement restuful API in some logic but display the prodict informationin different ways.
            </span>

            <div class="homePageCode">
               <CodeBlock :code="this.getItem" language="javascript" fileName="/client/views/cart.vue"/>
            </div>

              <div class="homePageCode">
               <CodeBlock :code="this.getItemApi" language="javascript" fileName="/client/services/userDataService.js"/>
            </div>

              <span class="showcase">Now, we finished writing the restful API <code>getCartList</code>from the front-end <code>userDataService.js</code>, let's go to the backend now and see what happen:
            </span>

              <div class="homePageCode">
               <CodeBlock :code="this.getCartList" language="javascript" fileName="/server/routes/user.server.routes.js"/>
            </div>

              <div class="homePageCode">
               <CodeBlock :code="this.cartListDetail" language="javascript" fileName="/server/controllers/user.controller.js"/>
            </div>


            <div class="greyDisplay" >
                <span class="showcase">If you need to cross the domain to fetch data,  definitly remember the <a target="_blank" class="linkToOther" href="https://www.imperva.com/learn/application-security/csrf-cross-site-request-forgery/?utm_source=google&utm_medium=cpc&utm_campaign=sw-waf-au&utm_content=&utm_term=cross-site%20request%20forgery&gad=1&gclid=Cj0KCQjwzdOlBhCNARIsAPMwjbzQDAy9MQcpGUSc_YOLUxK9eolgqWXL1oWAnLJ-cePolQ_oOKtNr5kaAiCvEALw_wcB">Cross-Site Scripting (XSS) and Cross-Site Request Forgery (CSRF) Protection <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" /></a> Protect against XSS attacks by sanitizing user input and avoiding direct insertion of user-generated content into the HTML. Implement <code>CSRF tokens</code> to prevent <code>CSRF attacks</code>.
                </span>
             </div> 

                 <span class="showcase">I hope you get what you expecting for the shopping cart page design, If any issue occurs, please check out <a target="_blank" class="linkToOther" href="https://mongoosejs.com/docs/">original repo</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" /> </span>
             
           <h3 class="showcase">Add/Delete item to cart</h3>
               <span class="showcase" :style="{marginTop:'0px'}">From now, i assume you have already know how to implement a cress-domain restFul API to fetch data from backend using <code>http.common</code> component. Well, you know you can also use <code>Axios</code> component to fetch the data too.
              </span>

              <span class="showcase">In the similar way, Leverage <code>JavaScript</code> and <code>AJAX</code> to create a dynamic and responsive 'Add to Cart' process.
              </span>

              <div class="homePageCode">
                <CodeBlock :code="this.editCart" language="javascript" fileName="/client/views/cart.vue"/>
             </div>

              <span class="showcase">You may wanna ask what is different between <code>Axios</code> and <code>http.common</code> component? They looks all similar. Well, Axios is a specific and widely used library with its own distinct name and features, while <code>HTTP Common Component</code> is more generic and could refer to different implementations based on the context. Axios is more recommanded because it works in both browser and Node.js environments.
              </span>


              <div class="homePageCode">
                <CodeBlock :code="this.addItem" language="javascript" fileName="/server/routes/user.server.routes.js"/>
             </div>

                  <span class="showcase"> Now, we implemented a function named updateUserItem and deleteItem that <strong>updates/delete</strong> the quantity of a specific product in a user's shopping cart. </span>

               <div class="homePageCode">
                <CodeBlock :code="this.addItemDetail" language="javascript" fileName="/server/controller/user.controller.js"/>
             </div>

                <span class="showcase"> The function extracts relevant data from the request query parameters. It captures the <code>`firstname`, `lastname`, `productTitle`, `newnumber`</code> (quantity) values sent in the request.uses the User model (presumably representing users in a database) to find a user based on the <code>firstname</code> and <code>lastname</code> provided in the request. From now, the information in database will be updated and will also be displayed on the page</span>

                <span class="showcase">Similarly, remove items function use the similar logic to implement the frontend interection and backend database intereaction</span>

                <span class="showcase">I hope you get what you expecting for the shopping cart functionality, If any issue occurs, please check out <a target="_blank" class="linkToOther" href="https://mongoosejs.com/docs/">original repo</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /> </span>

          <div class="divisionBar"></div>

          <h2 id="section5">Upload Picture</h2>
          <h3 class="showcase">Set up HTML Structure for the page</h3>
          
          <span class="textBeforeCode">That is the function i use <code>element-Ui</code>, but I will not recommend you to follow the same strategy. Instead, I suggest you to use CSS framework that you are good at. If you are about to use elementUI, I will try as much as I can to explain what <a target="_blank" class="linkToOther" href="https://vuejsprojects.com/element-ui">the property of each Element-ui component</a> <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /> so you can apply same idea.</span>

             <div class="homePageCode">
              <CodeBlock code="npm install -g element-ui" language="bash" fileName=""/>
          </div>

         <span class="showcase">And now registered it</span>

          <div class="homePageCode">
              <CodeBlock :code="this.elementUI" language="javascript" fileName="/client/main.js"/>
          </div>

          <span class="showcase">Then set up the HTML strcture, Input fields for product detail, adding product listing and Image upload using element-UI. I bascally choose <code>el-upload</code> and <code>el-bootom</code> to style the website, more element-UI component/themes are <a target="_blank" class="linkToOther" href="https://element.eleme.io/#/en-US/component/layout">here <a-icon type="select" theme="outlined" class="aIcon" :style="{fontSize:'9px', color:'black'}" /> </a>.</span>

          <div class="homePageCode" :style="{marginTop: '20px'}">
              <CodeBlock :code="this.uploadCode" language="markup" fileName="/client/components/AddListing.vue"/>
          </div>
   
    
          <span class="showcase"><code>`el-upload`</code> is provided with various attributes like <code>`action`, `single`, `limit`</code>, and event listeners <code>(`:on-preview`, `:on-success`, `:on-exceed`) </code> customize its behavior. So, now lets see what happen in the uploading function code</span>

          
           <div class="homePageCode">
              <CodeBlock :code="this.uploadBackend" language="javascript" fileName="/server/routes/product.server.router.js"/>
          </div>

          <span class="showcase">This module sets up routes and middleware for handling product-related operations, including image uploads, using multer middleware in a Node.js application with the Express framework. It creates a RESTful API structure under the <code>/api </code> URL, where the product-related routes will be managed by the <code>product.controller module</code>. And <code>uploadDir</code> will be the destination of uploaded image.</span>

          <h2 id="section6">Summary</h2>
          <span :style="{marginTop:'0px'}" class="showcase">I hope you get what you expecting for the shopping cart functionality after reading my post.  This is just some basic logic to some common function for your website. If any issue occurs, please check out <a target="_blank" class="linkToOther" href="https://mongoosejs.com/docs/">original repo</a> <a-icon type="select" class="aIcon" theme="outlined" :style="{fontSize:'9px', color:'black'}" /> </span>

           </div>

       </div>

<!-- </div> -->

</div>

</template>

<script>
import Header from '../components/projectHeader.vue'
import SideBar from '../components/sideBar.vue'
import '../assets/css/sidebar.css'
// import '../assets/css/mediaQuery.css'
import '../assets/css/animation.css'
import CodeBlock from '../components/codeBlock.vue'
import videoImg1 from '../assets/Ecommerce.jpeg'
import videoImg2 from '../assets/login.png'
import videoImg3 from '../assets/videogif2.gif'
import videoImg4 from '../assets/videoSelection2.png'
import videoImg5 from '../assets/videoSelection3.jpg'
import codeSnip from '../assets/js/ecommerceCode.js'
  export default {
    data(){
       return {
          collapsed: false,
          dark:false,
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


          homePageCode: codeSnip.homePageCode,
          homepageCss:codeSnip.homepageCss,
          loginCode:codeSnip.loginCode,
          userService:codeSnip.userService,
          userBackend:codeSnip.userBackend,
          LoginVerif:codeSnip.LoginVerif,
          shoppingCart:codeSnip.shoppingCart,
          getItem:codeSnip.getItem,
          getItemApi:codeSnip.getItemApi,
          getCartList: codeSnip.getCartList,
          cartListDetail: codeSnip.cartListDetail,
          editCart: codeSnip.editCart,
          addItem: codeSnip.addItem,
          addItemDetail: codeSnip.addItemDetail,
          uploadCode: codeSnip.uploadCode,
          elementUI: codeSnip.elementUI,
          uploadBackend: codeSnip.uploadBackend,
          packageF: codeSnip.packageF,
          packageB:codeSnip.packageB,



          fileStructure:``,
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
        console.log(event.target.scrollTop)
        if(event.target.scrollTop >= 1678){
            this.backImg = this.videoImgList[1].icon
            this.page = false;
        } else if(event.target.scrollTop < 1678){
            this.backImg = this.videoImgList[0].icon
            this.page = true;
        }
    },

    darkMode(){
       this.dark = !this.dark;
        const published=  document.getElementsByClassName('published')
        const textLength = document.getElementsByClassName('textLength')
        const tableTitile = document.getElementById('tableTitle')
        const tableLi = document.getElementsByClassName('tableLi')
        const h2 = document.getElementsByTagName('h2')
        const h3 = document.getElementsByTagName('h3')
        const showcase = document.getElementsByClassName('showcase')
        const aTag = document.getElementsByClassName('linkToOther')
        const aIcon = document.getElementsByClassName('aIcon')
        const greyDisplay = document.getElementsByClassName('greyDisplay')
        const homeCode = document.getElementsByClassName('homePageCode')
        const textBeforeCode = document.getElementsByClassName('textBeforeCode')
        const strong = document.getElementsByTagName('strong')

       if(this.dark == true){
            document.querySelector('.projectContent').style.background = 'rgb(32, 32, 35)'

              aTag.forEach(item=>{
                    item.style.color = 'white'
                    this.setSpecialHover('special', item)
              })
              
              greyDisplay.forEach(item=>item.style.background = 'black')
              h3.forEach(item=>item.style.color = 'white')
              strong.forEach(item=>item.style.color = 'white')
              homeCode.forEach(item=>item.style.border = '1px solid white')
              textBeforeCode.forEach(item=>item.style.color = 'white')
              aIcon.forEach(item=>item.style.color = 'white')
              tableLi.forEach(item=>item.style.color = 'white')
              h2.forEach(item=>item.style.color = 'white')
              showcase.forEach(item=>item.style.color = 'white')
              published[0].style.color = 'white'
              textLength[0].style.color = 'white'
              tableTitile.style.color = 'white'


       }else{
              document.querySelector('.projectContent').style.background = 'white'
            
              aTag.forEach(item=>{
                    item.style.color = 'black'
                    this.setSpecialHover('none', item)
              })
              strong.forEach(item=>item.style.color = 'black')
              textBeforeCode.forEach(item=>item.style.color = 'black')
              homeCode.forEach(item=>item.style.border = 'none')
              aIcon.forEach(item=>item.style.color = 'black')
              showcase.forEach(item=>item.style.color = 'black')
              tableLi.forEach(item=>item.style.color = 'black')
              h3.forEach(item=>item.style.color = 'black')
              h2.forEach(item=>item.style.color = 'black')
               greyDisplay.forEach(item=>item.style.background = 'rgb(238, 236, 236)')
              tableTitile.style.color = '#2c3e50'
              published[0].style.color = 'gray'
              textLength[0].style.color = 'gray'
              
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

    setSpecialHover(condition, element){
        if (condition === 'special') {
          element.classList.add('special-hover');
        }else {
          element.classList.remove('special-hover');
        }
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

code{
  background: black;
  border-radius: 3px;
  width:auto;
  color:rgb(224, 224, 158);
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
  grid-template-rows: 10% 90%;
  overflow-y: scroll;
  overflow-x: hidden;
  transition: 1s all;
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

.special-hover:hover{
   border-bottom: solid 1px white;
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
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:50px;
  margin-top: 18px;
  border-radius: 5px;
  border:0;
  background: orange;
  width:20px;
  height: 20px;
  transition: 1s all;
}

.lightMode{
  grid-row: 1;
  grid-column: 4;
  // margin-left:4vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left:50px;
  margin-top: 18px;
  border-radius: 5px;
  background: grey;
  width:20px;
  height: 20px;
  transition: 1s all;
}

.darkLogo{
  font-size: 10px;
  color:white;
}

@media  screen and (min-width:1000px) {
    .darkMode{
       width:30px !important;
       height: 30px !important;
       margin-top: 40px;
       margin-left:100px;
    }

    .lightMode{
       width:30px !important;
       height: 30px !important;
       margin-top: 40px;
       margin-left:100px;
    }

    .darkLogo{
        font-size: 20px;
    }
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
  font-size: 20px ;
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
  margin-top:20px;
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

.contentUl{
  padding-left: 0 !important;
 
}

.contentUl strong{
  font-size: 12px;
  float: left;
  height: auto;
}

.contentUl li{
     margin-left: 20px !important;
     list-style-type:unset !important;
     margin-top:10px;
}

.content h2{
  font-size: 2vw;
  float:left;
  font-weight: bolder;
  margin-top: 2vh;
  text-align: left;
  width:100%;
}

.content h3{
  float: left;
  margin-top: 20px;
  text-align: left;
  font-size: 14px;
}

.playerSetting{
  width:87%;
  height:80%;
  float:left;
  border: solid 0.1px grey;
}



.homePageCode{
  width: 95%;
  height: auto;
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
  height: auto;
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
      width: 85%;
      height: 0.2%;
      background: rgb(238, 236, 236);
      margin-top: 4vh;
      float:left;
      margin-left:3px;
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
    width: 90% !important;
  }

  .content ul li{
    font-size: 11px !important;
    word-wrap: break-word !important;
    white-space: normal !important
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
    width: 90% !important;
  }

  .content ul li{
    font-size: 17px !important;
    word-wrap: break-word !important;
    white-space: normal !important
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
    width: 90% !important;
  }

  .content ul li{
    font-size: 11px !important;
    word-wrap: break-word !important;
    white-space: normal !important
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