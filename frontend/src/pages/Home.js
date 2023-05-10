import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Home(){
    return(
        <div>
            <h1>Welcome!!</h1>
            <button  class="btn btn-primary" onClick={()=>{window.location.href="/login"}}>Login</button> 
            <button  class="btn btn-primary" onClick={()=>{window.location.href="/register"}}>Register</button> 
        </div>
    )
}