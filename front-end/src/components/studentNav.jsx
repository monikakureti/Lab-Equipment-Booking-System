import { Link, useNavigate, Outlet } from "react-router-dom";

function StudentNavbar() {
    const navigate = useNavigate();

    function handleLogout() {
        localStorage.removeItem("token");
        localStorage.removeItem("role");

        navigate("/login");
    }

    return (
        <>
        <nav className="navbar">
            <h2 className="navbar-title">Lab Booking</h2>

            <div className="navbar-links">
                <Link to="/student/dashboard">Dashboard</Link>
                <Link to="/student/products">Products</Link>
                <Link to="/student/my-orders">My Bookings</Link>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
        <Outlet />
        </>
    );
}

export default StudentNavbar;