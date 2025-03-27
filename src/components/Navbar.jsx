import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <button 
      onClick={() => navigate("/login")} 
      style={{ background: "orange", padding: "10px 20px", border: "none", cursor: "pointer" }}
    >
      LOGIN
    </button>
  );
};

export default Navbar;
