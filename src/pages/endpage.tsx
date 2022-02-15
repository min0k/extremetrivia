import { useNavigate, useLocation } from "react-router-dom";

export default function EndPage() {
  const location = useLocation();
  const navigate = useNavigate();


  return (
    <div>
      <p>endpage</p>
      {location.state === 4 ? <h1>WINNER</h1> : <p>{`you got ${
        location.state ? location.state : "no"
      } questions right.`}</p>}
      <button onClick={() => navigate("/")}>new game</button>
    </div>
  );
}
