import { useEffect, useState } from "react";


function MyOrders() {

    const token = localStorage.getItem("token");
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        display();
    }, [])

    async function display() {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/student/my-orders`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
        )
        const data = await response.json();

        if (response.ok) {
            setOrders(data);
        }
    }

    async function handleDelete(id) {
        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/student/delete/${id}`,
            {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (response.ok) {
            alert(data.message);
            display();
        } else {
            alert(data.message);
        }
    }
    return (
        <div className="page">
            <div className="orders-list">
                {orders.map((order) => {
                    return (
                        <div className="order-card" key={order._id}>
                            <div>
                                <p>{order._id}</p>
                                <h3>{order.product}</h3>
                                <h4>Student : {order.name}</h4>
                                <p>Date : {order.date}</p>
                            </div>
                            <button className="danger-btn" onClick={()=>{handleDelete(order._id)}}>Cancle</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default MyOrders;