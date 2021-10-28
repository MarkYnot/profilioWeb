package com.project.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "Comment")
public class Comment {
    @Id
    @GeneratedValue
    private Integer comment_id;

   @ManyToOne
   @JoinColumn(name="video_id", nullable = false)
    private Video video;

   @ManyToOne
   @JoinColumn(name="user_id", nullable = false)
   private User user;

   @Column
    private String comment;
    private Integer game_id;

}
