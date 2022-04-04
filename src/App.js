import './App.css';
import QuizCard from './components/QuizCard';
import { useEffect } from 'react';

function App() {

  const question = [{
    id: "q1",
    q: "1. The data structure required to check whether an expression contains a balanced parenthesis is?",
    qi: "ImgSrc URL?",
    aa: ["Stack", "Tree", "Hashmap", "Queue"],
    ais: 0,
    t: "multichoice"
  },
  {
    id: "q2",
    q: "1. The data structure required to check whether an expression contains a balanced parenthesis is?",
    qi: "ImgSrc URL?",
    aa: ["Stack", "Tree", "Hashmap", "Queue"],
    ais: 1,
    t: "multichoice"
  },
  {
    id: "q3",
    q: "1. The data structure required to check whether an expression contains a balanced parenthesis is?",
    qi: "ImgSrc URL?",
    aa: ["Stack", "Tree", "Hashmap", "Queue"],
    ais: 2,
    t: "multichoice"
  },
  {
    id: "q4",
    q: "1. The data structure required to check whether an expression contains a balanced parenthesis is?",
    qi: "ImgSrc URL?",
    aa: ["Stack", "Tree", "Hashmap", "Queue"],
    ais: 3,
    t: "multichoice"
  }]

  useEffect(() => {
    document.getElementById(question[0].id).className = "carousel-item active"
  })

  return (
    <div className="App">
      <header className="App-header">
        <div id="carouselExampleControlsNoTouching" class="carousel slide" data-bs-interval="false" data-bs-wrap="false">
          <div class="carousel-inner">
            {question.map((data) => {
              return <QuizCard question={data} />
            })}
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
