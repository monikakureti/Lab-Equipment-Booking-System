import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import SignUp from "./pages/signUp";
import Add from "./pages/admin/addProducts";
import Orders from "./pages/admin/orders";
import Products from "./pages/student/products";
import BookingDetails from "./pages/student/bookingDetails";
import MyOrders from "./pages/student/myOrders";
import AdminDashboard from "./pages/admin/adminDash";
import StudentDashboard from "./pages/student/studentDash";
import AdminNavbar from "./components/adminNav";
import StudentNavbar from "./components/studentNav";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={<Login />}
                />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/admin" element={<AdminNavbar />} >
                    <Route path="dashboard" element={<AdminDashboard />} />
                    <Route path="add-product" element={<Add />} />
                    <Route path="orders" element={<Orders />} />
                </Route>
                <Route path="/student" element={<StudentNavbar />}>
                    <Route path="dashboard" element={<StudentDashboard />} />
                    <Route path="products" element={<Products />} />
                    <Route path="bookingDetails/:id" element={<BookingDetails />} />
                    <Route path="my-orders" element={<MyOrders />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;