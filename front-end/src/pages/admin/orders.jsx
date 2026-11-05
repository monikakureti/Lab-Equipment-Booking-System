import { useEffect, useState } from "react";

function Orders() {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        getOrders();
    }, []);
    async function getOrders() {
        const token = localStorage.getItem("token");
        const response = await fetch("http://localhost:3000/admin/orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        });
        const order = await response.json();
        if (response.ok) {
            setOrders(order);
        }
    }
    async function changeStatus(id, value){
        const token = localStorage.getItem("token");
        const data = await fetch(`http://localhost:3000/admin/orders/${id}/status`, {
            method : "PATCH",
            headers : {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            },
            body : JSON.stringify({status : value})
        });
        const display = await data.json();
        console.log(display);
        getOrders();
    }
    return (
        <div className="page">
            <h1>All Bookings</h1>

            <div className="orders-list">
                {orders.map((book) => {
                    return (
                        <div className="order-card" key={book._id}>
                            <div>
                                <h3>{book.product}</h3>
                                <h4>{book.name}</h4>
                                <p>{book.date}</p>
                                <p className="status">{book.status}</p>
                            </div>
                            <div className="order-actions">
                                {book.status == "pending" ? (
                                    <button className="primary-btn" onClick={() => changeStatus(book._id, "active")}>
                                        Active
                                    </button>
                                ) : (
                                    <button className="secondary-btn" onClick={() => changeStatus(book._id, "Closed")}>
                                        Close
                                    </button>
                                )}
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Orders;