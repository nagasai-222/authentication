import React, { useEffect } from 'react'
import jwtDecode from 'jwt-decode'
import {useNavigate} from "react-router-dom"

export default function Quote(){
    const navigate = useNavigate()
    const [quote,setQuote] = React.useState("");
    const [tempQuote,setTempQuote] = React.useState("");
    async function populateQuote(){
        const response= await fetch('http://localhost:5000/api/quote',{
            method:"GET",
            headers: {
                'x-access-token': localStorage.getItem("token")
            }
        })
        const data = await response.json()
        if(data.status == "ok"){
            setQuote(data.quote)
        }
        else{
            alert(data.error)
        }
        console.log(data)
    }

    async function updateQuote(event){
        event.preventDefault()
        const response = await fetch("http://localhost:5000/api/quote",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                'x-access-token': localStorage.getItem("token")
            },
            body: JSON.stringify({
                quote: tempQuote
            })
        })
        const data = await response.json()
        if(data.status == "ok"){
            setTempQuote('')
            setQuote(data.quote)
        }
        else{
            alert(data.error)
        }
    }
    useEffect(()=>{
        const token= localStorage.getItem("token")
        if(token){
            const user = jwtDecode(token)
            console.log(user)
            populateQuote()
        }
        else{
            navigate('/login')
        }
    })
    return(
        <div>
        <h1>Your Quote: {quote || "No quote found"}</h1>
        <form onSubmit={updateQuote}>
            <input type="text" value={tempQuote} onChange={(e)=>{setTempQuote(e.target.value)}}/>
            <button type="submit">Change quote</button>
        </form>
        </div>
    )
}