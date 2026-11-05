import { useState } from "react";

function Add(){
    const [name, setName] = useState("");
    const [num, setNum] = useState(0);
    const [msg, setMsg] = useState("");
    async function handleSubmit(e){
        const token = localStorage.getItem("token");
        e.preventDefault();
        const data = {
            name : name,
            capacity : num
        }
        const responce = await fetch("http://localhost:3000/admin/add", {
            method : "POST",
            headers : {
                "Content-Type" : "application/json",
                Authorization : `Bearer ${token}`
            },
            body : JSON.stringify(data)
        })
        const display = await responce.json();
        console.log(display);
        setMsg(display.message);
    }
    return(
        <>
        <form className="page" onSubmit={handleSubmit}>
            <label>Product : </label>
            <input type="text"
            placeholder="Enter product Name"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}/>
            <label>Capacity : </label>
            <input type="number"
            value={num}
            onChange={(e)=>setNum(Number(e.target.value))}/>
            <p>{msg}</p>
            <button className="primary-btn" type="submit">Add Product</button>
        </form>
        </>
    )
}
export default Add;