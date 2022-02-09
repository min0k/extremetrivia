import { useState, useEffect } from "react";

export default function StartPage() {
  return (
    <div>
      <h1>Welcome to Extreme Trivia. Think you're a know-it-all? Prove it.</h1>
      <p>
        You only have 15 seconds to answer each question. 
        Answer 100 questions correctly to win.
      </p>
      <button>Start</button>
    </div>
  );
}
