import './App.css';

import GamePage from './pages/GamePage';
import StartPage from './pages/StartPage';

function App() {
  return (
    <div className="App">
      <StartPage />
    </div>
  );
}

export default App;

// API -- https://opentdb.com/
// Welcome to Extreme Trivia. Think you're a know-it-all? Prove it.

// You only have 15 seconds to answer each question.
// Answer incorrectly? You lose. Freeze up? You lose.

// Features

// Game ends when timer is up if no answer chosen
// Display genre of each question 
// Leaderboard
// Share score at end screen
// Display all questions answered correctly at end screen with all choices
// New game option at end screen
// Game ends after 50 questions answered correctly in a row

// Use React Router for start screen, game page, and about page.
// About page somewhere (footer or nav?)

// Use Typescript, React Router, focus on CLEAN ORGANIZED CSS.

