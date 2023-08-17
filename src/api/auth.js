export const setAuthToken =(user)=>{
    const currentUser ={
        email: user.email
    }
    // jwt token 
    fetch('https://smart-car-server-snowy.vercel.app/jwt',{
        method: 'POST',
        headers:{
            'content-type': 'application/json'
        },
        body: JSON.stringify(currentUser)
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        localStorage.setItem('smart-car-token', data.token);
    })
}