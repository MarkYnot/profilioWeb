package com.project.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name = "User")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer user_id;

    @Column
    private String email;
    private String password;
    private String firstname;
    private String lastname;
    private String photo;
    private Double balance;
    private Integer age;
    private String gender;
    private String region;
    private Integer phone;
    private String personal_note;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name="user_id")
    private List<Comment> comments;

     @JsonIgnore
     @ManyToMany(targetEntity = Video.class, cascade = CascadeType.ALL)
     @JoinTable(name="User_Collect_Video",
     joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
     inverseJoinColumns = {@JoinColumn(name="video_id", referencedColumnName = "video_id")})
     private List<Video> collectVideoList;

    @JsonIgnore
    @ManyToMany(targetEntity = Video.class, cascade = CascadeType.ALL)
    @JoinTable(name="User_Upload_Video",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name="video_id", referencedColumnName = "video_id")})
    private List<Video> uploadVideoList;

    @JsonIgnore
    @ManyToMany(targetEntity = Video.class, cascade = CascadeType.ALL)
    @JoinTable(name="User_Unlock_Video",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name="video_id", referencedColumnName = "video_id")})
    private List<Video> unlockVideoList;

    @JsonIgnore
    @ManyToMany(targetEntity = Video.class, cascade = CascadeType.ALL)
    @JoinTable(name="User_Like_Video",
            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
            inverseJoinColumns = {@JoinColumn(name="video_id", referencedColumnName = "video_id")})
    private List<Video> likeVideoList;

}
