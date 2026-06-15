import './App.css';
import { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(10);
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

    const Flashcards = [
    { Question: "Future conjugations", Answer: "é, ás, á, emos, án"},
    { Question: "Present Subjunctive (AR)", Answer: "e, es, e, emos, en"},
    { Question: "Present Subjunctive (ER/IR)", Answer: "a, as, a, amos, an"},
    { Question: "Imperfect Subjuntive", Answer: "ra, ras, ra, ramos, ran"},
    { Question: "Mandatos Informales", Answer: "el/ella/usted Present Indicative"},
    { Question: "Mandatos Informales (Negative)", Answer: "no + present subjunctive"},
    { Question: "Mandatos Formales (Usted)", Answer: "Use same present subjunctive conjugations"},
    { Question: "Mandatos Formales (Ustedes)", Answer: "Use same present subjunctive conjugations"},
    { Question: "Preterito Perfecto", Answer: "Present tense haber + V. past participle(ado/ido)"},
    { Question: "Pluscuamperfecto", Answer: "Impect tense haber + V. past participle(ado/ido)"},
  ]
  function useFlashcard() {
    const randomIndex = Math.floor(
      Math.random() * Flashcards.length
    );

    setCurrentCard(randomIndex);
    setIsFlipped(false);
  }
  function flipCard() {
    if (isFlipped) {
      setIsFlipped(false);
    } else {
      setIsFlipped(true);
    }
  }

  function getCardText() {
    if (isFlipped) {
      return Flashcards[currentCard].Answer;
    } else {
      return Flashcards[currentCard].Question;
    }
  }


  return (
    <div className="App">
      <div className="Header">
        <h1>Spanish Flashcards</h1>
        <h2>total Flashcards: 10</h2>
        <p>Practice Spanish grammar and verb conjugations</p>

        <button className="useFlashcard" onClick={useFlashcard}>
          Use Flashcard
        </button>
      </div>
      <div className="card" onClick={flipCard}>{getCardText()}
      </div>
    </div>
  );
};

export default App;