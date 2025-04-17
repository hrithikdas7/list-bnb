import { useNavigate } from "react-router-dom";


const Logo = () => {
const navigate = useNavigate()
    return (
    <div className="text-5xl font-bold" onClick={()=> navigate("/")}>
      <span className="text-black">list</span>
      <span className="text-gray-400">bnb</span>
    </div>
  );
};

export default Logo;
