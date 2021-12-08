package com.project.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

/*
*
* 解决跨域问题
* */
@Configuration
public class crossConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
      registry.addMapping("/**").allowedOrigins("*").allowCredentials(false)
              .allowedMethods("GET","POST","PUT","DELETE").maxAge(3600);
    }
}
