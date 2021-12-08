# 5620 Banvas System


## 1. 💻 Framework

- SprintBoot
- Vue
- MySQL

## 2. 📦 Install

**Github**
```bash
git clone https://github.sydney.edu.au/jlin2133/5620-Banvas.git
cd  5620-Banvas-master
```

**Project introduction**

This is an intelligent educational tutoring system that Provides an online learning platform for kids who are study remotly from home becasue Covid 19 lockdown

## 3.Project setup(Front-end)

***3.1. Make sure you have node.js installed on your mac or pc***

  If you have not downloaded node.js, please visit the following website to do so. If you have node.js on your computer, please ignore this step**

   ```
     https://nodejs.org/en/download/current/
   ```
  ***3.2. When you've finished the installation, run npm -v in cmd or terminal, making sure you have the npm command available***

   ```
   npm -v   // check npm version
   ```

 ***3.3. Then use cmd or terminal enter elec5620/client folder***
```
cd elec5620/client 
```

***3.4. Before running following commands in cmd or terminal, Please make sure your port 8080 is not occupied***

```
npx kill-port 8080 // if your port 8080 is occupied

npm install
npm run serve
```
***3.5. Open browser and type http://localhost:8080/login***

  ![login](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/login.png)
   


## 4. Initialise the Back-end

***4.1. Use Intellij to open elec5619 folder (You can drag and drop the elec5619 folder directly onto the intellij icon)***

 ***4.2. Open src/main/resoucres, open application.yml file***

   - set url to "jdbc:mysql://localhost:3306/5620Banvas"
   - set username and password to your own database username and password

***4.3. Run the ServerApplication main() method in ServerApplication class***

***4.4. Please make sure that your port 3001 is not occupied***



## 5.Setup database

1. Please find the file with the .sql suffix in the Banvas folder we have provided

2. Open your mysql gui tools, such as datagrip etc.

3. Create a schema called 5620Banvas

4. Import the sql file from the Banvas folder into the 5620Banvas schema


## 6. Test database

1. Open browser and type http://localhost:3001/get_info/1
2. Successful:
   
   ![successful](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/successful1.png)

   ![successful](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/successful2.png)



## 7. Advance technologies

- SprintBoot   -> Version: 2.5.4
- Hibernate  -> Version: 2.10.1
- JPA  -> Version: 2.5.6
- Vue Cli  -> Version: 4.5.0
- MD5   Version: 0.7.3
- Facial Recognition  -> Version: 0.4.3
- Unity  -> Version: 2019.3.3f1
- WebGL    -> Version: 5.5.0
- JavaMail  -> Version: 2.5.6


## 8. All completed Functions

- Login 
- Sign up (Facial API recognite age and gender)
- forget password (auto send new password to customer via email)
- Profile (Update basic information)
- Change avantar
- Change Password
- Game Allocation based on user age
- 2 Games ('The Ball Set' and 'Numbers Cannon')
- Video Center(Show all videos)
- Search Video
- Save Video
- Like and Dislike video
- Video Comment 
- Game Commnent


## 9. APIs

**- Backend**
  - fastjson  -> Version: 1.3.32
  - jacson-datatype-hibernate5 -> Version: 2.10.1
  - Commons-codec -> Version: 1.13
  - Lombok -> version: 1.16.22
  - spring-boot-starter-mail (Java Mail) -> Version: 2.5.6
  - Spring-boot-starter-data-jpa -> Version: 2.5.6

**- Frontend**
  - Facial Recognition API -> Version: 0.4.3
  - Vue-lazyload -> Version: 1.3.3
  - Js-md5 -> Version: 0.7.3
  - ant-design-vue -> Version: 1.7.8
  - axios -> Version: 0.18.0
  - less-loader -> Version: 7.3.0
  - element-ui -> Version: 2.15.6
  - vue-mini-player -> Version: 0.2.1
  - vue-simple-clamp -> Version: 1.1.1
  - webrtc-adapter -> Version: 8.1.0
  - sass-loader -> Version: 7.1.0

## 10. Burndown Chart
   - Below is the burndown chart for 5620 Stage2(We have also provide the copy of the BurnDown Chart in the project folder)
   ![successful](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/BurnDownChart.png)

   - Here is the Jira line of Project Banvas
      https://mark727221029.atlassian.net/jira/software/projects/BAN/boards/1