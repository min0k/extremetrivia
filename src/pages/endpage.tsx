import { useNavigate } from "react-router-dom"



export default function EndPage() {

const navigate = useNavigate();

    return (
        <div>
            <p>endpage</p>
            <button onClick={() => navigate("/")}>new game</button>
        </div>
    )
}