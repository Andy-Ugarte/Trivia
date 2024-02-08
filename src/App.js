import React, { useState } from 'react';
import './App.css';

function App() {
  // Properties
  const [showFinalResults, setFinal] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  
  const questions = [
    {
      text: "What is the capital of America?",
      options: [
        { id: 0, text: "New York City", isCorrect: false },
        { id: 1, text: "Boston", isCorrect: false },
        { id: 2, text: "Santa Fe", isCorrect: false },
        { id: 3, text: "Washington DC", isCorrect: true },
      ],
    },
    {
      text: "What year was the Constitution of America written?",
      options: [
        { id: 0, text: "1787", isCorrect: true },
        { id: 1, text: "1776", isCorrect: false },
        { id: 2, text: "1774", isCorrect: false },
        { id: 3, text: "1826", isCorrect: false },
      ],
    },
    {
      text: "Who was the second president of the US?",
      options: [
        { id: 0, text: "John Adams", isCorrect: true },
        { id: 1, text: "Paul Revere", isCorrect: false },
        { id: 2, text: "Thomas Jefferson", isCorrect: false },
        { id: 3, text: "Benjamin Franklin", isCorrect: false },
      ],
    },
    {
      text: "What is the largest state in the US?",
      options: [
        { id: 0, text: "California", isCorrect: false },
        { id: 1, text: "Alaska", isCorrect: true },
        { id: 2, text: "Texas", isCorrect: false },
        { id: 3, text: "Montana", isCorrect: false },
      ],
    },
    {
      text: "Which of the following countries DO NOT border the US?",
      options: [
        { id: 0, text: "Canada", isCorrect: false },
        { id: 1, text: "Russia", isCorrect: true },
        { id: 2, text: "Cuba", isCorrect: true },
        { id: 3, text: "Mexico", isCorrect: false },
      ],
    },
  ];

return (
    <div className="App">
     {/* 1. Header */}
     <h1>USA Quiz</h1>

     {/* 2. Current Score */}
     <h2>Current Score: {score} </h2>

     { showFinalResults ? (
       /* 4. Final results */
      <div className="final-results">
        <h1>Final Results</h1>
        <h2>1 out of 5 correct - (20%)</h2>
        <button>Restart game</button>
      </div>
     ) : (
     {/* 3. Question Cards */}
     <div className='question-card'>
      <h2>Question {currentQuestion + 1} out of {questions.length} </h2>
      <h3 className='question-text'>What is the capital of the US</h3>

      <ul>
        <li>Boston</li>
        <li>New York</li>
        <li>Washington DC</li>
        <li>Denver</li>
      </ul>
     </div>
     )}
    </div>
)
//   );
// }

  export default App;

      

