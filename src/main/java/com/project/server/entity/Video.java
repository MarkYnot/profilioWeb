package com.project.server.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Getter
@Setter
@Entity
@Table(name="video")
public class Video {
    @Id
    @GeneratedValue
    private Integer video_id;

    @Column
    private String category;
    private String src;
    private Double length;
    private Date upload_date;
    private Integer Difficulty;
    private Integer like;
    private String cover_photo;
    private String description;
    private String title;
    private Integer view_times;

    @JsonIgnore
    @OneToMany
    @JoinColumn(name="video_id")
    private List<Comment> comments;
}
