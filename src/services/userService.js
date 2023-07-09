class userServce{

  getUserInfo(userId){
    return axios.get(`http://localhost:3001/get_info/${userId}`);
    
}

getVerify(username,password){
   return axios.get(`http://localhost:3001/login/${username}/${password}`);
  
}

// Registration(username,password,lastname,firstname,age,gender,photo){
//    return axios.post(`http://localhost:3001/Registration/${username}/${password}/${lastname}/${firstname}/${age}/${gender}/${photo}`);
// }

Registration(username,password,lastname,firstname,age,gender,photo){
  return axios({
    url: 'http://localhost:3001/Registration',
    method: 'post',
    data:{
      username:username,
      password:password,
      lastname:lastname,
      firstname:firstname,
      age:age,
      gender:gender,
      photo:String(photo)
      }
  })
}
  
  
checkemail(username){
    return axios.get(`http://localhost:3001/checkemail/${username}`);
}

changeAvantar(imgUrl, userid){
  return axios({
        url: 'http://localhost:3001/update_portrait',
        method: 'post',
        data:{
          imgUrl: String(imgUrl),
          user_id:userid
           
          }
      })

    }


    updateUserInfo(user){
      console.log(user)
      return axios({
        url: 'http://localhost:3001/update_info',
        method: 'post',
        headers:{
          'Content-Type': 'application/json'
      },
     
      // JSON.stringify(user)
        data: {
           user_id:user.user_id,
           age: user.age,
           firstname: user.firstname,
           lastname: user.lastname,
           phone: parseInt(user.phone),
           email: user.email,
           gender: user.gender,
           region: user.region,
           personalNote: user.personalNote
        }
      }).then(result=>{return result})

    }


    changePassword(user_id, currentPassword, newPassword){
      return axios({
       url: 'http://localhost:3001/change_pwd',
       method: 'post',
       data:{
          user_id: user_id,
          currentPassword: currentPassword,
          newPassword: newPassword
         }
       })
 
   }

   forgetPassword(username){
    return axios.get(`http://localhost:3001/mail/forget/${username}`)
  }

    
}

export default new userServce();