import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Login = (()=>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function loginUser(event){
        event.preventDefault()
        const response = await fetch('http://localhost:5000/api/login',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email,
                password
            })
        })
        const data = await response.json()
        if(data.user){
            localStorage.setItem('token',data.user)
            alert("Login Successful!!")
            window.location.href = "/quote"
        }
        else{
            alert("Check your credentials!!")
        }
        console.log(data)
    }

    return(
        <div>
            <h1>LOGIN</h1>
            <form onSubmit={loginUser}>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="mb-3">
                <label htmlfor="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
        </div>
    )
})

export default Login;