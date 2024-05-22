import axios from "axios";


async function fetchUser(setUserData){
    try{
        let token= localStorage.getItem('token')
        let url='http://localhost:8000/api/auth/cookies';
        let data={token}
        console.log({"fetchToken is":token});
        const user = await axios.post(url, data);
        setUserData(user.data);
    }catch(err){
        console.log({"fetch user Error":err})
    }
}

export default fetchUser;