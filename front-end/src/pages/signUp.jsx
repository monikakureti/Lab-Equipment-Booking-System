import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function SignUp(){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [con, setCon] = useState("");
    const [role, setRole] = useState("");
    const [msg, setMsg] = useState("");

    const navigate = useNavigate();

    async function handleSubmit(e){
        e.preventDefault();

        const data = {
            name : name,
            email : email,
            password : pass,
            role : role
        }
        const responce = await fetch("http://localhost:3000/user/register", {
            method : "POST",
            headers : {
                "content-Type" : "application/json" 
            },
            body : JSON.stringify(data)
        })
        const display = await responce.json();
        setMsg(display.message);
        alert(display.message);
        console.log(display);

        if(responce.ok){
            navigate("/login");
        }
    }

    return(
        <div className="auth-page">
            <form className="auth-card" onSubmit={handleSubmit}>
                <label>Name : </label>
                <input type="text" placeholder="Enter your Name" value={name} onChange={(e)=>setName(e.target.value)}/>
                <label>Email : </label>
                <input type="email" placeholder="Enter your Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <label>Password : </label>
                <input type="password" value={pass} onChange={(e)=>setPass(e.target.value)}/>
                <label>Conform Password : </label>
                <input type="password" value={con} onChange={(e)=>setCon(e.target.value)}/>

                <label>Role</label>

                <div className="radio-group">
                    <input type="radio" name="role" value="Admin" onChange={(e)=>setRole(e.target.value)}/>
                    <label>Admin</label>
                    <input type="radio" name="role" value="Student" onChange={(e)=>setRole(e.target.value)}/>
                    <label>Student</label>
                </div>

                <button type="submit">Sign Up</button>
                <p>{msg}</p>
                <p>Already have an account? <Link to="/login">Login</Link></p>
            </form>
        </div>
    )
}
export default SignUp;