import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (()=>{
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    async function registerUser(event){
        event.preventDefault()
        const response= await fetch("http://localhost:5000/api/register",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify({
                name,
                email,
                password
            })
        });
        const data= await response.json()
        console.log(data)
        if(data.status==="Registered"){
            alert("Registered Successfully!!")
            window.location.href="/login"
        }
        else{
            alert(data.error)
        }
        setName("")
        setEmail("")
        setPassword("")
    }

    return(
        <div>
            <h1>REGISTER</h1>
            <form onSubmit={registerUser}>
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control"  value={name}
                onChange={(e)=>{setName(e.target.value)}}/>
            </div>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control" value={email}
                onChange={(e)=>{setEmail(e.target.value)}}/>
            </div>
            <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">Password</label>
                <input type="password" class="form-control" value={password}
                onChange={(e)=>{setPassword(e.target.value)}}/>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
            </form> 
        </div>
    )
})

export default Register;