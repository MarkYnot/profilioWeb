<template>
  <div class="mini-video">
    <VueMiniPlayer ref="vueMiniPlayer"
                   :mutex="true"
                   :video="video"
                   :volumn="5"
                   @fullscreen="fullscreen" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      video: {
        url: '',
        // https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4
        loop: true,
        autoplay: true,
        muted: true,
        playsinline: true,
        logo: '',
      // cover: 'http://localhost:8080/static/endUser.png'
      },
        playURL:''
    };
  },

  props:['videoURL'],
  computed: {
    $video() {
      return this.$refs.vueMiniPlayer.$video;
    }
  },
  // filters: {},
  methods: {
    fullscreen(data) {
      console.log('====================================');
      console.log(data);
      console.log('====================================');
    },

    test(){
       console.log(this.playURL)
       this.video.url = `http://localhost:8080/video/${this.playURL}`
      // this.video.url = this.playURL
       console.log(this.video.url)
    }
  },
  created() {
    document.body.addEventListener('mousedown', function(){
       const videoDom = document.getElementsByClassName('_video-ref')
	      videoDom.muted = false;
}, false);
    console.log(this.playURL)
          
},

   watch:{
      videoURL: function(newData, oldData){
            this.playURL = newData
            this.test()
        }
   }
   
  // mounted() {},
  // updated() {},
  // beforeDestroy() {},
  // destroyed() {}
};
</script>
<style lang="scss" scoped>
.mini-video{
  // max-width: 100%;
  width: 95%;
  min-width: 300px;
  height: 75vh;
  object-fit: fill;
  // margin: 0 auto;
  // margin-left: auto;
  // margin-right: auto;
}

/deep/ .vm-player{
  background: none;
  // object-fit: fill;
}

/deep/ .vm-player ._video-ref{
  // background: none;
  border-left: 0px;
}
</style>

