import { useNavigate, useLocation} from "react-router-dom"

interface IProps {
    correctAnswers: number;
}

export default function EndPage() {

const location = useLocation();
const navigate = useNavigate();

console.log(location.state);


    return (
        <div>
            <p>endpage</p>
            <p>{`you got ${location.state ? location.state : "zero"} question right.`}</p>
            <button onClick={() => navigate("/")}>new game</button>
        </div>
    )
}