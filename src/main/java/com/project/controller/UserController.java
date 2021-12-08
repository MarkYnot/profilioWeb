package com.project.controller;



import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.project.entity.Comment;
import com.project.entity.User;
import com.project.entity.Video;
import com.project.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpSession;
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
             userMap.put("user_id", user.getUser_id());
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

    @PostMapping("/update_portrait")
    public boolean updatePortrait(@RequestBody JSONObject UserInfo){

        User oldUser =  userRepository.getById(UserInfo.getInteger("user_id"));
        if (!oldUser.getPhoto().equals(UserInfo.getString("imgUrl"))){
            oldUser.setPhoto(UserInfo.getString("imgUrl"));
            userRepository.saveAndFlush(oldUser);
        }
        return true;
    }


    @RequestMapping("/update_info")
    public boolean updateInfo(@RequestBody JSONObject UserInfo){
        User oldUser =  userRepository.getById(UserInfo.getInteger("user_id"));
        oldUser.setAge(UserInfo.getInteger("age"));
        oldUser.setFirstname(UserInfo.getString("firstname"));
        oldUser.setLastname(UserInfo.getString("lastname"));
        oldUser.setPhone(UserInfo.getInteger("phone"));
        oldUser.setEmail(UserInfo.getString("email"));
        oldUser.setGender(UserInfo.getString("gender"));
        oldUser.setRegion(UserInfo.getString("region"));
        oldUser.setPersonal_note(UserInfo.getString("personalNote"));
        if (oldUser.getEmail().contains("@")){
            userRepository.saveAndFlush(oldUser);
            return true;
        }else{
            return false;
        }
    }

    @PostMapping("/change_pwd")
    public String changePwd(@RequestBody JSONObject UserInfo){

        User oldUser =  userRepository.getById(UserInfo.getInteger("user_id"));
        if(oldUser.getPassword().equals( UserInfo.getString("currentPassword"))){
            oldUser.setPassword(UserInfo.getString("newPassword"));
            userRepository.saveAndFlush(oldUser);
            return "Successfully changed";
        }else{
            return "Old password is not correct, please try again";

        }

    }

    @GetMapping("/getOneUser/{user_id}")
    public String getSingleUser(@PathVariable ("user_id") int user_id) {
         User user = userRepository.getById(user_id);
//        List<Map<String,Object>> list = new ArrayList<>();
//        HashMap<String, Object> userMap = new HashMap<>();
         return user.getEmail();
    }

    @GetMapping("/login/{username}/{password}")
    public User login(@PathVariable ("username") String username,
                      @PathVariable("password") String password
                     ) {
        System.out.println(username);
        User returnUser = userRepository.findByEmail(username);
        System.out.println(returnUser);
        if(returnUser == null){
            return null;
        }else if(returnUser.getPassword().equals(password)){
            userRepository.saveAndFlush(returnUser);
            return  returnUser;
        }else{
            return null;
        }
    }


    @PostMapping("/Registration")
    public User Registration(@RequestBody JSONObject newUser) {
        User Newuser = new User();
        Newuser.setPassword(newUser.getString("password"));
        Newuser.setFirstname(newUser.getString("firstname"));
        Newuser.setLastname(newUser.getString("lastname"));
        Newuser.setPhoto(newUser.getString("photo"));
        Newuser.setEmail(newUser.getString("username"));
        Newuser.setAge(newUser.getInteger("age"));
        Newuser.setGender(newUser.getString("gender"));
        Newuser.setBalance(0.00);
        Newuser.setRegion("");
        Newuser.setPhone(0);
        Newuser.setPersonal_note("");
        userRepository.save(Newuser);
        return Newuser;
    }


    @GetMapping("/checkemail/{username}")
    public boolean checkemail(@PathVariable ("username") String username){
        if(userRepository.findByEmail(username)!=null)
            return true;
        return false;
    }

}
