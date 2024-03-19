import React from 'react';
import { Link } from 'react-router-dom';
import "../../assets/css/Admin.css";

const AdminPage = () => {
  return (
    <div className="AdminPage">
      <h1>Welcome to Admin Page</h1>
      <ul>
        <li><Link to="/admin/user">Manage Users</Link></li>
        <li><Link to="/admin/products">Manage Products</Link></li>
      </ul>
    </div>
  );
}

export default AdminPage;
