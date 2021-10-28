# 5620 Banvas System


# 💻 Framework

- SprintBoot
- Vue
- MySQL

# 📦 Install
```bash
git clone 
cd  5620-Banvas-master
```
### Project setup(Front-end)

**1. Use terminal "cd" into 5620-Banvas-master file, then:**
```
cd client 
npm install
npm run serve
```
**2. Open browser and type http://localhost:8080/**
  
  ![test](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/test.png)

### Initialise the Back-end
```
Run the ServerApplication main() method
```

### Set up database
> - Modify the username and password in application.yml in resource
> folder. 
> 
> - Choose any GUI tools to create database.
>
> - Please make sure your schema name, table name and attributes 
> name are same with the following guide

  ***Schema Name***: 5620Banvas

> - ***User:***
>   - user_id INT (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - email CHAR(100) NOT NULL
>   - password CHAR(100) NOT NULL
>   - firstname CHAR(50) NOT NULL
>   - lastname CHAR(50) NOT NULL
>   - photo LONGTEXT
>   - balance DOUBLE
>   - age INT
>   - gender CHAR(45)
>   - region VARCHAR(100)
>   - phone INT(11)
>   - personal_note CHAR(255)

> - ***Video:***
>   - video_id INT(11) (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - category CHAR(100) NOT NULL UQ
>   - src CHAR(255)
>   - length DOUBLE
>   - upload_date DATE
>   - Difficulty INT(11)
>   - like INT(11)
>   - cover_photo  LONGTEXT
>   - description CHAR(255)
>   - title CHAR(100)
>   - view_time INT(11)


> - ***Comment:***
>   - comment_id  INT(11) (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - video_id  INT(11)
>   - user_id  INT(11)
>   - comment CHAR(255) 
>   - game_id INT(11)

> - ***User_Collect_Video***
>   - User_Collect_Video_id INT(11)  (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - user_id  INT(11)
>   - video_id  INT(11)

> - ***User_Like_Video***
>   - User_Like_Video_id INT(11)  (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - user_id  INT(11)
>   - video_id  INT(11)

> - ***User_Unlock_Video***
>   - User_Unlock_Video_id INT(11)  (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - user_id  INT(11)
>   - video_id  INT(11)

> - ***User_Upload_Video***
>   - User_Unload_Video_id INT(11)  (AUTO INCREMENT, PK, NOT NULL, UQ)
>   - user_id  INT(11)
>   - video_id  INT(11)

- ***ERD of the database:***

 ![dbERD](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/erd.png)


### Insert corresponding data for each column and Test database

1. Open browser and type http://localhost:3001/get_info/1
2. Successful:
   
   ![successful](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/successful1.png)

   ![successful](https://github.sydney.edu.au/jlin2133/5620-Banvas/blob/master/README%20image/successful2.png)

