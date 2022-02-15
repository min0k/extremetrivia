import { useNavigate, useLocation} from "react-router-dom"


export default function EndPage() {

const location = useLocation();
const navigate = useNavigate();


    return (
        <div>
            <p>endpage</p>
            <p>{`you got ${location.state ? location.state : "no"} questions right.`}</p>
            <button onClick={() => navigate("/")}>new game</button>
        </div>
    )
}