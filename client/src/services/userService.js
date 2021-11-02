class userServce{

  getUserInfo(userId){
    return axios.get(`http://localhost:3001/get_info/${userId}`);
}



}

export default new userServce();