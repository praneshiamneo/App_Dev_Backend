import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy } from "react";
import About from "./Pages/User/About";
import LazyLayout from "./Components/LazyLayout";
import AdminPage from "./Pages/Admin/AdminPage";
import AuthRoute from "./Pages/Auth/AuthRoute";
import Contact from "./Pages/User/Contact";
import Product from "./Pages/User/Product";
import Products from "./Pages/User/Products";
import Login from "./Pages/Auth/Login";
import SignUp from "./Pages/Auth/SignUp";
import Users from "./Pages/Admin/User";
import Navbar from "./Components/UI/Navbar"

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const HomePage = lazy(() => import("./Pages/User/Home"));
  return (
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/" element={<LazyLayout component={HomePage} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route
          path="/admin"
          element={
            <AuthRoute>
              <AdminPage></AdminPage>
            </AuthRoute>
          }
        />
        <Route path="/admin/user" element={<Users />} />
        <Route path="/admin/products" element={<Products />} />
        <Route
          path="/login"
          element={
            <Login loginEmail={loginEmail} loginPassword={loginPassword} />
          }
        />
        <Route
          path="/signup"
          element={
            <SignUp
              setLoginEmail={setLoginEmail}
              setLoginPassword={setLoginPassword}
            />
          }
        />
        {/* 404 */}
        <Route
          path="*"
          element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import About from "./components/About";
// import AdminPage from "./components/AdminPage";
// import AuthRoute from "./components/AuthRoute";
// import Contact from "./components/Contact";
// import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Product from "./components/Product";
// import Products from "./components/Products";

// function App() {
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/products/:id" element={<Product />} />
//         <Route
//           path="/admin"
//           element={
//             <AuthRoute>
//               <AdminPage />
//             </AuthRoute>
//           }
//         />
//         {/* 404 */}
//         <Route
//           path="*"
//           element={<h1 style={{ textAlign: "center" }}>404. Not Found</h1>}
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
