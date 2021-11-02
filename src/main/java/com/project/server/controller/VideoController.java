package com.project.server.controller;

import com.project.server.entity.User;
import com.project.server.entity.Video;
import com.project.server.repository.VideoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Map;

@RestController
public class VideoController {

    @Autowired
    VideoRepository videoRepository;

//    @GetMapping("/get_video/{video_id}")
//    public List<Map<String, Object>> getInfo(@PathVariable("video_id") int video_id){
//        Video video = videoRepository.getById(video_id);
//
//
//    }
}
