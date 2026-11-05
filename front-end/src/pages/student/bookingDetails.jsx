import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function BookingDetails() {
    const { id } = useParams();
    const navigate = useNavigate();

    const [product, setProduct] = useState(null);
    const [date, setDate] = useState("");
    const [msg, setMsg] = useState("");

    useEffect(() => {
        getProduct();
    }, []);

    async function getProduct() {
        const token = localStorage.getItem("token");

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/student/products`,
            {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                }
            }
        );

        const data = await response.json();

        if (response.ok) {
            const selectedProduct = data.find((item) => item._id === id);
            setProduct(selectedProduct);
        }
    }

    async function handleBooking(e) {
        e.preventDefault();

        const token = localStorage.getItem("token");

        const response = await fetch(
            `${import.meta.env.VITE_API_URL}/student/book/${id}`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify({ date: date })
            }
        );

        const data = await response.json();

        setMsg(data.message);
    }

    if (!product) {
        return <p>Loading product details...</p>;
    }

    return (
        <div className="page">
            <div className="booking-card">
                <h2>Booking Details</h2>

                <h3>{product.name}</h3>
                <p>Capacity: {product.capacity}</p>

                <form onSubmit={handleBooking}>
                    <label>Booking Date:</label>

                    <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />

                    <button type="submit">Confirm Booking</button>
                </form>

                <p>{msg}</p>
            </div>
        </div>
    );
}

export default BookingDetails;