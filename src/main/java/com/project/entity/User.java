package com.project.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import javax.persistence.*;
import java.util.List;

//@Getter
//@Setter
//@Data
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
    @OneToMany
    @JoinColumn(name="user_id")
    private List<Video> uploadVideoList;

     @JsonIgnore
     @ManyToMany(targetEntity = Video.class, cascade = CascadeType.ALL)
     @JoinTable(name="User_Collect_Video",
     joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
     inverseJoinColumns = {@JoinColumn(name="video_id", referencedColumnName = "video_id")})
     private List<Video> collectVideoList;

//    @JsonIgnore
//    @ManyToMany(targetEntity = Video.class, cascade = CascadeType.ALL)
//    @JoinTable(name="User_Upload_Video",
//            joinColumns = {@JoinColumn(name = "user_id", referencedColumnName = "user_id")},
//            inverseJoinColumns = {@JoinColumn(name="video_id", referencedColumnName = "video_id")})
//    private List<Video> uploadVideoList;

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

    public Integer getUser_id() {
        return user_id;
    }

    public void setUser_id(Integer user_id) {
        this.user_id = user_id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getFirstname() {
        return firstname;
    }

    public void setFirstname(String firstname) {
        this.firstname = firstname;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getPhoto() {
        return photo;
    }

    public void setPhoto(String photo) {
        this.photo = photo;
    }

    public Double getBalance() {
        return balance;
    }

    public void setBalance(Double balance) {
        this.balance = balance;
    }

    public Integer getAge() {
        return age;
    }

    public void setAge(Integer age) {
        this.age = age;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public Integer getPhone() {
        return phone;
    }

    public void setPhone(Integer phone) {
        this.phone = phone;
    }

    public String getPersonal_note() {
        return personal_note;
    }

    public void setPersonal_note(String personal_note) {
        this.personal_note = personal_note;
    }

    public List<Comment> getComments() {
        return comments;
    }

    public void setComments(List<Comment> comments) {
        this.comments = comments;
    }

    public List<Video> getUploadVideoList() {
        return uploadVideoList;
    }

    public void setUploadVideoList(List<Video> uploadVideoList) {
        this.uploadVideoList = uploadVideoList;
    }

    public List<Video> getCollectVideoList() {
        return collectVideoList;
    }

    public void setCollectVideoList(List<Video> collectVideoList) {
        this.collectVideoList = collectVideoList;
    }

    public List<Video> getUnlockVideoList() {
        return unlockVideoList;
    }

    public void setUnlockVideoList(List<Video> unlockVideoList) {
        this.unlockVideoList = unlockVideoList;
    }

    public List<Video> getLikeVideoList() {
        return likeVideoList;
    }

    public void setLikeVideoList(List<Video> likeVideoList) {
        this.likeVideoList = likeVideoList;
    }
}
