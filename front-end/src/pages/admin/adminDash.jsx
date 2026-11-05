import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div className="dashboard-page">
      <h1>Welcome, Admin!</h1>

      <p>
        Manage your lab equipment and student bookings.
      </p>

      <div className="dashboard-cards">
        <div className="dashboard-card">
          <h2>Add Equipment</h2>
          <p>Add new lab equipment to the system.</p>
          <Link to="/admin/add-product">
            Add Equipment
          </Link>
        </div>

        <div className="dashboard-card">
          <h2>View Bookings</h2>
          <p>View and manage student bookings.</p>
          <Link to="/admin/orders">
            View Bookings
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AdminDashboard;