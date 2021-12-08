package com.project.repository;

import com.project.entity.Video;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface VideoRepository extends JpaRepository<Video,Integer> {

    @Query(value = "select * from Video where title like CONCAT('%',:text,'%')", nativeQuery = true)
    List<Video> findByTitle(@Param("text") String text);
}
