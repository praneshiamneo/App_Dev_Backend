import Navbar from "../../components/ui/Navbar";
import logo from "../../assets/images/Main-logo.png"; // Replace with the actual path to your logo image
import { Link } from "react-router-dom";
function Header() {
  return (
    <header style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <div>
       <Link to="/home"> <img src={logo} alt="Logo" style={{ height: "100px" }} /> </Link>
      </div>
      <Navbar />
    </header>
  );
}

export default Header;