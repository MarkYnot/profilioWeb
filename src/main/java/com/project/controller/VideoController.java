package com.project.controller;

import com.project.entity.Comment;
import com.project.entity.User;
import com.project.entity.Video;
import com.project.repository.CommentRepository;
import com.project.repository.UserRepository;
import com.project.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("/getAllVideo")
    public List<Video> getAllVideo(){

       List<Video> videoList =  videoRepository.findAll();
       if(videoList != null){
           System.out.println(1);
           return videoList;
       }else{
           return null;
       }

    }

    @GetMapping("/getSingleVideo/{video_id}")
    public List<Map<String, Object>> getVideoInfo(@PathVariable int video_id){
         Video video = videoRepository.getById(video_id);
         List<Comment> commentList = video.getComments();
         HashMap<String,Object> videoMap = new HashMap<>();
         List<Map<String, Object>> list = new ArrayList<>();

         if(video != null){
             videoMap.put("video_id", video.getVideo_id());
             videoMap.put("category", video.getCategory());
             videoMap.put("src", video.getSrc());
             videoMap.put("length", video.getLength());
             videoMap.put("upload_date", video.getUpload_date());
             videoMap.put("Difficulty", video.getDifficulty());
             videoMap.put("like", video.getLike_num());
             videoMap.put("cover_photo", video.getCover_photo());
             videoMap.put("descriptipn", video.getDescription());
             videoMap.put("title", video.getTitle());
             videoMap.put("view_times", video.getView_times());
             videoMap.put("user_upload", video.getUser());
             videoMap.put("dislike", video.getDislike());
             videoMap.put("comments", commentList);
             list.add(videoMap);
             return list;
         }
         return null;
    }

    @PostMapping("/addLikeVideo")
    public Boolean addLikeVideo(@RequestBody JSONObject Info){

        Video video = videoRepository.getById(Info.getInteger("video_id"));
        video.setLike_num(Info.getInteger("likeNum"));
        videoRepository.saveAndFlush(video);
        if(Info.getBoolean("likeStatus") == true){
            User user = userRepository.getById(Info.getInteger("user_id"));
            user.getLikeVideoList().add(videoRepository.getById(Info.getInteger("video_id")));
            userRepository.save(user);
            return true;

        }else{
            User user = userRepository.getById(Info.getInteger("user_id"));
            user.getLikeVideoList().remove(videoRepository.getById(Info.getInteger("video_id")));
            userRepository.save(user);
            return false;

        }

    }

    @PostMapping("/addDislikeVideo")
    public Boolean addDisLikeVideo(@RequestBody JSONObject Info){

        Video video = videoRepository.getById(Info.getInteger("video_id"));
        video.setDislike(Info.getInteger("dislikeNum"));
        videoRepository.saveAndFlush(video);
        if(Info.getBoolean("dislikeStatus") == true){
            User user = userRepository.getById(Info.getInteger("user_id"));
            user.getUnlockVideoList().add(videoRepository.getById(Info.getInteger("video_id")));
            userRepository.save(user);
            return true;

        }else{
            User user = userRepository.getById(Info.getInteger("user_id"));
            user.getUnlockVideoList().remove(videoRepository.getById(Info.getInteger("video_id")));
            userRepository.save(user);
            return false;

        }

    }

    @PostMapping("/addCollectVideo")
    public Boolean addCollectVideo(@RequestBody JSONObject Info){
        User user = userRepository.getById(Info.getInteger("user_id"));
        user.getCollectVideoList().add(videoRepository.getById(Info.getInteger("video_id")));
        userRepository.save(user);

        User user1 = userRepository.getById(Info.getInteger("user_id"));
        for(Video item: user1.getCollectVideoList()){
            if(item == videoRepository.getById(Info.getInteger("video_id"))){
                return true;
            }
        }
       return false;
    }

    @PostMapping("/deleteCollectVideo")
    public Boolean deleteCollectVideo(@RequestBody JSONObject Info){
        User user = userRepository.getById(Info.getInteger("user_id"));
        user.getCollectVideoList().remove(videoRepository.getById(Info.getInteger("video_id")));
        userRepository.save(user);
        return false;
    }

    @PostMapping("/addViewTime")
    public void addViewTime(@RequestBody JSONObject Info){
        Video video = videoRepository.getById(Info.getInteger("video_id"));
        video.setView_times(video.getView_times()+1);
        videoRepository.saveAndFlush(video);
    }

    @GetMapping("/videoBySearch/{text}")
    public List<Video> videoBySearch(@PathVariable String text){
         List<Video> videos = videoRepository.findByTitle(text);
         return videos;
    }


    @PostMapping("/updateComment")
    public List<Comment> updateComment(@RequestBody JSONObject Comments){
        Comment comment = Comments.getObject("comments", Comment.class);
//         List<Comment> commentList = JSONObject.parseArray(allComment.toJSONString(), Comment.class);
//         List<Comment> updateCommentList = new ArrayList<>();
//         for(Comment item: commentList){
//              updateCommentList.add(item);
//         }
        commentRepository.save(comment);
        Video video = videoRepository.getById(Comments.getInteger("video_id"));
        List<Comment> updateCommentList = video.getComments();
//         video.setComments(updateCommentList);
         return updateCommentList;
    }


}
