class videoService{

    async getAllVideo(){
    return await axios.get(`http://localhost:3001/getAllVideo`).then(result=>{return result})
  }

    getSingleVideo(video_id){
      return axios.get(`http://localhost:3001/getSingleVideo/${video_id}`)
    }

    addLikeVideo(user_id, video_id, likeNum, likeStatus){
      
       axios({
          url: 'http://localhost:3001/addLikeVideo',
          method: 'post',
          headers:{
              'Content-Type': 'application/json'
          },
          data:{
              user_id: user_id,
              video_id: video_id,
              likeNum: likeNum,
              likeStatus: likeStatus
            }
          }).then((res)=>{return res})


    }

    addCollectVideo(user_id, video_id){
         return axios({
            url: 'http://localhost:3001/addCollectVideo',
            method: 'post',
            headers:{
                'Content-Type': 'application/json'
            },
            data:{
                user_id: user_id,
                video_id: video_id,
              }
            }).then((res)=>{return res})
    }

    deleteCollectVideo(user_id, video_id){
      return axios({
        url: 'http://localhost:3001/deleteCollectVideo',
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data:{
            user_id: user_id,
            video_id: video_id,
          }
        }).then((res)=>{return res})
    }

    addViewTime(video_id){
      return axios({
        url: 'http://localhost:3001/addViewTime',
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data:{
            video_id: video_id,
          }
        }).then((res)=>{return res})
    }


    videoBySearch(text){
      return axios.get(`http://localhost:3001/videoBySearch/${text}`).then(res=>{return res})
    }

    updateCommentList(commentList, video_id){
    
      return axios({
        url: 'http://localhost:3001/updateComment',
        method: 'post',
        headers:{
            'Content-Type': 'application/json'
        },
        data:{
            comments: commentList,
            video_id: video_id
          }
        }).then((res)=>{return res})
    }


    addDislikeVideo(user_id, video_id, dislikeNum, dislikeStatus){
        console.log(user_id, video_id, dislikeNum, dislikeStatus)
      axios({
         url: 'http://localhost:3001/addDislikeVideo',
         method: 'post',
         headers:{
             'Content-Type': 'application/json'
         },
         data:{
             user_id: user_id,
             video_id: video_id,
             dislikeNum: dislikeNum,
             dislikeStatus: dislikeStatus
           }
         }).then((res)=>{return res})


   }
}

export default new videoService();