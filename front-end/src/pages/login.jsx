import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function login(){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            email : email,
            password : pass
        }
        const responce = await fetch("http://localhost:3000/user/login", {
            method : "POST",
            headers : {
                "content-Type" : "application/json"
            },
            body : JSON.stringify(data)
        })
        const display = await responce.json();
        setMsg(display.message);
        console.log(display);

        if(responce.ok){
            localStorage.setItem("token", display.token);

            if(display.data.role == "Admin"){
                navigate("/admin/dashboard");
            }else{
                navigate("/student/dashboard");
            }
        }
    }

    return(
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <label>Email : </label>
                <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password : </label>
                <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <button type="submit">Login</button>
                <p>{msg}</p>
                <p>Don't have an account? <Link to="/signUp">SignUp</Link></p>
            </form>
        </div>
    )
}
export default login;