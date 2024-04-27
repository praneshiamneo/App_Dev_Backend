// import { Navigate, Route, Routes } from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/ui/LazyLayout";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import Login from "./pages/auth/Login";

// ... (other imports)

const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));
const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAbout = lazy(() => import("./pages/user/About"));
const LazyCourses = lazy(() => import("./pages/user/Courses"));
const LazyProfile = lazy(() => import("./pages/user/Profile"));
const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const LazyUserInfo = lazy(() => import("./pages/admin/UserInfo"));
const LazyCoursedes = lazy(() => import("./pages/user/Coursedes"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route
          path="/profile"
          element={<LazyLayout component={LazyProfile} />}
        />
        <Route
          path="/course-description/:id"
          element={<LazyLayout component={LazyCoursedes} />}
        />
      </Routes>
    </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route
          path="/dashboard"
          element={<LazyLayout component={LazyDashboard} />}
        />
        <Route
          path="/user-info"
          element={<LazyLayout component={LazyUserInfo} />}
        />
      </Routes>
    </AdminLayout>
  );
};

function App() {
  const navigate = useNavigate();
  //create an usestate called as login_status
  const [loginStatus, setLoginStatus] = useState(true);
  useEffect(() => {
    const token = sessionStorage.getItem("token");
    if (!token) {
      // No token found,set the setLoginStatus to false
      setLoginStatus(false);
    } else {
      // Token found, check if it's expired
      const tokenExpiration = sessionStorage.getItem("tokenExpiration");
      if (tokenExpiration && Date.now() > tokenExpiration) {
        setLoginStatus(false);
      } else {
        setLoginStatus(true);
      }
    }
  }, [navigate]);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={
          loginStatus ? (
            <LazyLayout component={LazyHome} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/home"
        element={
          loginStatus ? (
            <LazyLayout component={LazyHome} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/about"
        element={
          loginStatus ? (
            <LazyLayout component={LazyAbout} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/courses"
        element={
          loginStatus ? (
            <LazyLayout component={LazyCourses} />
          ) : (
            <Navigate to="/login" />
          )
        }
      />
      <Route
        path="/login"
        element={<Login setLoginStatus={setLoginStatus} />}
      />
      <Route
        path="/register"
        element={<LazyLayout component={LazyRegister} />}
      />
      <Route
        path="/user/*"
        element={loginStatus ? <UserRoutes /> : <Navigate to="/login" />}
      />
      <Route
        path="/admin/*"
        element={loginStatus ? <AdminRoutes /> : <Navigate to="/login" />}
      />
    </Routes>
  );
}

export default App;
