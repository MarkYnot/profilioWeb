package com.project.entity;

import lombok.Data;

@Data
public class Mail {
    private String to;
    private String Subject;
    private String content;
    private String filePath;
}
