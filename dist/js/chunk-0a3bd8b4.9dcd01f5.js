(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a3bd8b4"],{"432f":function(e,t,i){},7336:function(e,t,i){"use strict";i.r(t);var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"videoCentreContainer"},[i("div",{staticClass:"hpHeader"},[i("Header",{on:{currentUser:e.getCurrentUser}},[i("div",{attrs:{slot:"search"},slot:"search"},[i("div",{staticClass:"searchBar"},[i("input",{staticClass:"searchInput",attrs:{type:"text",id:"textInput",placeHolder:"  Search"}}),i("button",{on:{click:e.startSearch}},[i("a-icon",{staticClass:"searchIcon",style:{fontSize:"1.5vw"},attrs:{type:"search"}})],1)])])])],1),i("button",{staticClass:"sideBarButton",on:{click:e.toggleCollapsed}},[i("a-icon",{style:{fontSize:"1.3vw"},attrs:{type:e.collapsed?"menu-unfold":"menu-fold"}})],1),i("div",{staticClass:"centreBody"},[i("div",{staticClass:"SideBar"},[i("SideBar",{attrs:{collapsed:e.collapsed}})],1),i("div",{staticClass:"videoContent"},[i("section",{staticClass:"videoPlayer"},[i("Video",{attrs:{videoURL:e.videoURL}})],1),i("a-menu",{staticClass:"videoMenu",attrs:{mode:"vertical"}},e._l(e.allVideo,(function(t,n){return i("a-menu-item",{key:n,on:{click:e.refreshPage}},[i("router-link",{attrs:{to:"/video&"+t.video_id}}),i("img",{attrs:{alt:"",src:t.cover_photo}}),i("div",{staticClass:"itemText"},[i("p",[e._v("test")]),i("br"),i("span",[e._v("physics")]),i("span",[e._v("5000 views    ● 11/11/2011")])])],1)})),1),i("div",{staticClass:"videoIntro"},[i("span",{staticClass:"introTitle"},[e._v(e._s(this.currentVideo.title))]),i("br"),i("br"),i("br"),i("span",[e._v(e._s(this.currentVideo.view_times)+" views     ● "+e._s(this.currentVideo.upload_date))]),i("div",{staticClass:"SaveSession"},[i("a-icon",{attrs:{type:"save",theme:e.save?"filled":"outlined"},on:{click:e.saveThisVideo}}),e._v(" Save ")],1),i("div",{staticClass:"likeSession"},[i("a-icon",{attrs:{type:"like",theme:e.like&!e.dislike?"filled":"outlined"},on:{click:e.likeThisVideo}}),e._v(" "+e._s(this.currentVideo.like_num)+"        "),i("a-icon",{attrs:{type:"dislike",theme:e.dislike&!e.like?"filled":"outlined"},on:{click:e.dislikeThisVideo}}),e._v(" "+e._s(this.currentVideo.dislike)+" ")],1)]),i("div",{staticClass:"addComment"},[i("span",{staticClass:"commentTitle"},[e._v(e._s(this.allComments.length))]),this.allComments.length>=2?i("span",{staticClass:"commentTitle"},[e._v("Comments")]):i("span",{staticClass:"commentTitle"},[e._v("Comment")]),i("br"),i("br"),i("br"),i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:this.User.photo,expression:"this.User.photo"}],attrs:{alt:""}}),i("input",{staticClass:"commentInput",attrs:{type:"text",id:"comment",placeholder:"Add a public comment..."},on:{input:e.commentActive,click:e.inputStatusChange}}),i("br"),e.inputStatus?i("div",{staticClass:"addCommentButton"},[i("button",{staticClass:"cancelButton",on:{click:e.cancalComment}},[e._v("CANCEL")]),e._v("  "),i("button",{class:e.input?"commentButtonLight":"commentButton",attrs:{disabled:!e.input},on:{click:e.addComment}},[e._v("COMMENT")])]):e._e()]),i("div",{staticClass:"othersComment"},e._l(e.allComments,(function(t){return i("div",{key:t.comment_id,staticClass:"videoComment"},[i("img",{directives:[{name:"lazy",rawName:"v-lazy",value:t.user.photo,expression:"item.user.photo"}],attrs:{alt:""}}),i("span",{staticClass:"commentUser"},[e._v(e._s(t.user.lastname))]),i("br"),i("span",{staticClass:"commentText"},[e._v(e._s(t.comment))])])})),0)],1)])])},r=[],s=i("1da1"),a=(i("7db0"),i("96cf"),i("21b3")),o=i("6475"),c=i("c326"),l=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"mini-video"},[i("VueMiniPlayer",{ref:"vueMiniPlayer",attrs:{mutex:!0,video:e.video,volumn:5},on:{fullscreen:e.fullscreen}})],1)},d=[],u={data:function(){return{video:{url:"",loop:!0,autoplay:!0,muted:!0,playsinline:!0,logo:""},playURL:""}},props:["videoURL"],computed:{$video:function(){return this.$refs.vueMiniPlayer.$video}},methods:{fullscreen:function(e){console.log("===================================="),console.log(e),console.log("====================================")},test:function(){console.log(this.playURL),this.video.url="http://localhost:8080/video/".concat(this.playURL),console.log(this.video.url)}},created:function(){document.body.addEventListener("mousedown",(function(){var e=document.getElementsByClassName("_video-ref");e.muted=!1}),!1),console.log(this.playURL)},watch:{videoURL:function(e,t){this.playURL=e,this.test()}}},m=u,v=(i("f4b2"),i("2877")),h=Object(v["a"])(m,l,d,!1,null,"822f2882",null),p=h.exports,f=(i("fef9"),{data:function(){return{collapsed:!1,allVideo:[],like:!1,dislike:!1,input:!1,inputStatus:!1,currentVideo:[],videoURL:"",User:[],save:!1,allComments:[]}},components:{Header:a["a"],SideBar:o["a"],VideoService:c["a"],Video:p},mounted:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:e.checkLikeStatus();case 1:case"end":return t.stop()}}),t)})))()},created:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i,n,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return i=e.$route.params.id,t.next=3,c["a"].getAllVideo();case 3:if(n=t.sent,e.allVideo=n.data,!e.allVideo){t.next=15;break}return r=e.allVideo.find((function(e){return e.video_id==i})),e.currentVideo=r,console.log(e.currentVideo),e.playVideo(),e.getAllComment(),t.next=13,c["a"].addViewTime(r.video_id);case 13:t.next=17;break;case 15:alert("This video is unavailable yet, please select others"),e.$router.back();case 17:case"end":return t.stop()}}),t)})))()},watch:{allComments:function(){var e=Object(s["a"])(regeneratorRuntime.mark((function e(t){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c["a"].updateCommentList(t[t.length-1],this.currentVideo.video_id);case 2:i=e.sent,console.log(i);case 4:case"end":return e.stop()}}),e,this)})));function t(t){return e.apply(this,arguments)}return t}()},methods:{checkLikeStatus:function(){},addComment:function(){var e=document.getElementById("comment").value;if(""==e)return alert("please enter comment first");var t={comment:e,user:this.User,video:this.currentVideo};this.allComments.push(t),document.getElementById("comment").value="",console.log(this.allComments)},getAllComment:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,c["a"].getSingleVideo(e.currentVideo.video_id);case 2:i=t.sent,e.allComments=i.data[0].comments,console.log(i);case 5:case"end":return t.stop()}}),t)})))()},playVideo:function(){this.videoURL=this.currentVideo.src,console.log(this.videoURL)},toggleCollapsed:function(){this.collapsed=!this.collapsed},saveThisVideo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=e.save){t.next=4;break}return t.abrupt("return",alert("You saved this video already"));case 4:return e.save=!0,t.next=7,c["a"].addCollectVideo(e.User.user_id,e.currentVideo.video_id);case 7:i=t.sent,1==i.data?alert("Video Added"):alert("add fail, please try again");case 9:case"end":return t.stop()}}),t)})))()},likeThisVideo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=e.dislike){t.next=4;break}return t.abrupt("return",alert("Please cancel your dislike first"));case 4:if(e.like=!e.like,1!=e.like){t.next=11;break}return e.currentVideo.like_num=e.currentVideo.like_num+1,t.next=9,c["a"].addLikeVideo(e.User.user_id,e.currentVideo.video_id,e.currentVideo.like_num,e.like);case 9:t.next=14;break;case 11:return e.currentVideo.like_num=e.currentVideo.like_num-1,t.next=14,c["a"].addLikeVideo(e.User.user_id,e.currentVideo.video_id,e.currentVideo.like_num,e.like);case 14:case"end":return t.stop()}}),t)})))()},dislikeThisVideo:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(1!=e.like){t.next=4;break}return t.abrupt("return",alert("Please cancel your like first"));case 4:if(e.dislike=!e.dislike,1!=e.dislike){t.next=11;break}return e.currentVideo.dislike=e.currentVideo.dislike+1,t.next=9,c["a"].addDislikeVideo(e.User.user_id,e.currentVideo.video_id,e.currentVideo.dislike,e.dislike);case 9:t.next=14;break;case 11:return e.currentVideo.dislike=e.currentVideo.dislike-1,t.next=14,c["a"].addDislikeVideo(e.User.user_id,e.currentVideo.video_id,e.currentVideo.dislike,e.dislike);case 14:case"end":return t.stop()}}),t)})))()},getCurrentUser:function(e){var t=this.$route.params.id;this.User=e;var i=this.User.likeVideoList.find((function(e){return e.video_id==t}));i&&(this.like=!0);var n=this.User.collectVideoList.find((function(e){return e.video_id==t}));n&&(this.save=!0);var r=this.User.unlockVideoList.find((function(e){return e.video_id==t}));r&&(this.dislike=!0)},cancalComment:function(){this.inputStatus=!1,document.getElementById("comment").value=""},commentActive:function(){""!=document.getElementById("comment").value?this.input=!0:this.input=!1},inputStatusChange:function(){this.inputStatus=!0},refreshPage:function(){window.location.reload(!1)},startSearch:function(){var e=document.getElementById("textInput").value;""!=e?this.$router.push({path:"/search&".concat(e)}):alert("please enter keyword first")}}}),k=f,C=(i("d56c"),Object(v["a"])(k,n,r,!1,null,"8ba80b86",null));t["default"]=C.exports},"7db0":function(e,t,i){"use strict";var n=i("23e7"),r=i("b727").find,s=i("44d2"),a="find",o=!0;a in[]&&Array(1)[a]((function(){o=!1})),n({target:"Array",proto:!0,forced:o},{find:function(e){return r(this,e,arguments.length>1?arguments[1]:void 0)}}),s(a)},8497:function(e,t,i){},d56c:function(e,t,i){"use strict";i("432f")},f4b2:function(e,t,i){"use strict";i("8497")}}]);
//# sourceMappingURL=chunk-0a3bd8b4.9dcd01f5.js.map