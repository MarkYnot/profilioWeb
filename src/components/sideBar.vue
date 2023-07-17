!<template>
   <div>
      <a-menu
      :default-selected-keys="['1']"
      :default-open-keys="['sub1']"
      mode="inline"
      theme="light">

        <!-- :inline-collapsed="collapsed" -->
      <a-menu-item key="1">
            <router-link to="/"/>
            <!-- <a-icon type="home" /> -->
            <span>Home</span>
      </a-menu-item>


      <a-menu-item key="2">
          <router-link to="/video/collection"/>
          <!-- <a-icon type="save" theme="filled"/> -->
          <span>Projects</span>
      </a-menu-item>


      <a-menu-item key="3">
            <router-link to="/resume"/>
          <!-- <a-icon type="like" theme="filled"/> -->
          <span>Resume</span>
      </a-menu-item>

        <a-menu-item key="4">
            <!-- <router-link to="/videoCentre"/> -->
        
          <!-- <a-icon type="video-camera" /> -->
          <span><a target="_blank" class="emailTo" href="https://mailto:mark727221029@gmail.com">Contact me</a></span>
        </a-menu-item>

        
        <!-- <a-menu-item key="5">
            <router-link to="/profile"/>
          <a-icon type="setting" theme="filled"/>
          <span>Profile</span>
        </a-menu-item> -->
    
   </a-menu>


  </div>
</template>

<script>
  export default {
    props:{
        collapsed:{
           type:Boolean
        }
    }
    
  }
</script>

<style lang="less" scoped>
// .sideBar{
//   grid-row: 1;
//   grid-column: 1;
// }

/deep/ .ant-menu-item-selected{
  color: black;
}

/deep/ .ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
    background: #dbdbdbb6;
}

/deep/ .ant-menu-inline .ant-menu-item::after{
   border-right: 0px;
}

/deep/ .ant-menu-item:hover{
    color:black;
}

/deep/ .ant-menu-submenu-title:hover{
     color:black;
}

/deep/ .ant-menu-submenu-inline > .ant-menu-submenu-title:hover .ant-menu-submenu-arrow::before{
     background:linear-gradient(to right, black, black);
}

/deep/ .ant-menu-item span{
      font-size: 5vw;
      font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
      margin-top: 1vh;   
}

.emailTo{
  color: unset;
}

/deep/ .ant-menu-submenu-title span{
    font-size: 1.1vw;
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif
}

/deep/ .ant-menu-inline .ant-menu-item{
        font-size: 0.8vw;
        font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}

/deep/ .ant-menu i{
  float: left;
  margin-top: 0.6vh;
}

/deep/ .ant-menu span{
  float: left;
}

/deep/ .ant-menu-item .anticon, .ant-menu-submenu-title .anticon{
  font-size:1.1vw;
}

/deep/ .ant-menu-inline .ant-menu-item:not(:last-child){
  margin-bottom: 15px;
}

/deep/ .ant-menu .ant-menu-inline .ant-menu-sub .ant-menu-item{
    padding-left: 0px;
    
}

/deep/ .ant-menu-submenu-selected {
   color: black;
}

/deep/ .ant-menu-inline .ant-menu-item{
    height: 70px;
    margin-top: 3vh;
}

/deep/ .ant-menu{
    height: 100vh;
}

/deep/ .ant-menu-item{
    top: 15vh;
}



// for iphone, samsung
@media screen and (min-height:400px) and (max-width:737px){
   /deep/ .ant-menu-item span{
      font-size: 25px !important;
      float: left;
   }

   /deep/ .ant-menu-item {
      padding-left: 16px !important;
   }

}

//For Surface Duo
@media screen and (height: 720px)and (min-width: 540px) and (max-width: 767px){


}

//For ipad and surface pro 7
@media screen and (min-width: 768px)and (max-width:912px){

  /deep/ .ant-menu-inline .ant-menu-item{
    height: 60px !important;
    margin-top: 30px !important;
    top: 150px !important
}
  
}

// For galaxy fold
@media screen and (max-width:280px){


}





// /deep/ .ant-menu-item .anticon{
//     font-size: 2vw;
// }


// /deep/ .ant-menu-item i{
//     margin-top: 2vh;
// }

</style>