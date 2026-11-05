import { Link, useNavigate, Outlet } from "react-router-dom";

function AdminNavbar() {
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
                <Link to="/admin/dashboard">Dashboard</Link>
                <Link to="/admin/add-product">Add Product</Link>
                <Link to="/admin/orders">Manage Orders</Link>

                <button onClick={handleLogout}>
                    Logout
                </button>
            </div>
        </nav>
         <Outlet />
        </>
    );
}

export default AdminNavbar;