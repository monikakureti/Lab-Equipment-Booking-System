import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";


function Products() {

    const [items, setItems] = useState([]);
    const token = localStorage.getItem("token");
    const navigate = useNavigate();

    useEffect(()=>{
        displayProducts();
    }, [])

    async function displayProducts() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/student/products`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const data = await response.json();
        if (response.ok) {
            setItems(data);
        }
    }
    return (
        <div className="page">
            <div className="product-grid">
                {items.map((item) => {
                    return (
                        <div className="product-card" key={item._id}>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.capacity}</p>
                            </div>
                            <button onClick={()=>navigate(`/student/bookingDetails/${item._id}`)}>Book Now</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Products;