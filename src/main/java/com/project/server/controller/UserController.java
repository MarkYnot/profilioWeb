package com.project.server.controller;



import com.project.server.entity.Comment;
import com.project.server.entity.User;
import com.project.server.entity.Video;
import com.project.server.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class UserController {

    @Autowired
    UserRepository userRepository;

    @GetMapping("/get_info/{user_id}")
    public List<Map<String, Object>> getInfo(@PathVariable ("user_id") int user_id){
         User user = userRepository.getById(user_id);
         List<Map<String,Object>> list = new ArrayList<>();
         List<Video> likeVideoList = user.getLikeVideoList();
         List<Video> uploadVideoList = user.getUploadVideoList();
         List<Video> unlockVideoList = user.getUnlockVideoList();
         List<Video> collectVideoList = user.getCollectVideoList();
         List<Comment> commentList = user.getComments();
         HashMap<String, Object> userMap = new HashMap<>();

         if(user !=null){
             userMap.put("email", user.getEmail());
             userMap.put("firstname", user.getFirstname());
             userMap.put("lastname", user.getLastname());
             userMap.put("photo", user.getPhoto());
             userMap.put("balance", user.getBalance());
             userMap.put("age", user.getAge());
             userMap.put("gender", user.getGender());
             userMap.put("region", user.getRegion());
             userMap.put("phone", user.getPhone());
             userMap.put("personalNote", user.getPersonal_note());
             userMap.put("collectVideoList", collectVideoList);
             userMap.put("commentList", commentList);
             userMap.put("unlockVideoList", unlockVideoList);
             userMap.put("likeVideoList", likeVideoList);
             userMap.put("uploadVideoList", uploadVideoList);
             list.add(userMap);

              return list;
         }

           return null;
    }

}
