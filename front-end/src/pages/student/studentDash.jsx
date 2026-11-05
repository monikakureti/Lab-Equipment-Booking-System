import { Link } from "react-router-dom";

function StudentDashboard() {
    return (
        <div className="dashboard-page">
            <h1>Welcome, Student!</h1>

            <p>
                Browse available lab equipment and manage your bookings.
            </p>

            <div className="dashboard-cards">
                <div className="dashboard-card">
                    <h2>Browse Equipment</h2>

                    <p>
                        View available lab equipment and book the items you need.
                    </p>

                    <Link to="/student/products">
                        Browse Equipment
                    </Link>
                </div>

                <div className="dashboard-card">
                    <h2>My Bookings</h2>

                    <p>
                        View your bookings and check their status.
                    </p>

                    <Link to="/student/my-orders">
                        View My Bookings
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default StudentDashboard;