import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function StartPage() {

  const navigate = useNavigate();

  return (
    <div>
      <h1>Welcome to Extreme Trivia. Think you're a know-it-all? Prove it.</h1>
      <p>
        You only have 15 seconds to answer each question. 
        Answer 100 questions correctly to win.
      </p>
      <button onClick={() => navigate("/trivia")}>go somwhere else</button>
    </div>
  );
}
