import "./app.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("$ 0");

  const data = [
    {
      id: 1,
      question: "Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "In which Italian city can you find the Colosseum?",
      answers: [
        {
          text: "Venice",
          correct: false,
        },
        {
          text: "Rome",
          correct: true,
        },
        {
          text: "Naples",
          correct: false,
        },
        {
          text: "Milan",
          correct: false,
        },
      ],
    },
    {
      id: 5,
      question: "In the TV show New Girl, which actress plays Jessica Day?",
      answers: [
        {
          text: "Zooey Deschanel",
          correct: true,
        },
        {
          text: "Kaley Cuoco",
          correct: false,
        },
        {
          text: "Jennifer Aniston",
          correct: false,
        },
        {
          text: "Alyson Hannigan",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "How long is the border between the United States and Canada?",
      answers: [
        {
          text: "3,525 miles",
          correct: false,
        },
        {
          text: "4,525 miles",
          correct: false,
        },
        {
          text: "5,525 miles",
          correct: true,
        },
        {
          text: "6,525 miles",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "In which US state did the ​​Scopes Monkey Trial happen?",
      answers: [
        {
          text: "Maryland",
          correct: false,
        },
        {
          text: "South Dakota",
          correct: false,
        },
        {
          text: "Indiana",
          correct: false,
        },
        {
          text: "Tennessee",
          correct: true,
        },
      ],
    },
    {
      id: 8,
      question: "When was the book “To Kill a Mockingbird” by Harper Lee published?",
      answers: [
        {
          text: "1950",
          correct: false,
        },
        {
          text: "1960",
          correct: true,
        },
        {
          text: "1970",
          correct: false,
        },
        {
          text: "1980",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "In which museum can you find Leonardo Da Vinci’s Mona Lisa?",
      answers: [
        {
          text: "Le Louvre",
          correct: true,
        },
        {
          text: "Uffizi Museum",
          correct: false,
        },
        {
          text: "British Museum",
          correct: false,
        },
        {
          text: "Metropolitan Museum of Art",
          correct: false,
        },
      ],
    },
    {
      id: 10,
      question: "In which city can you find the Prado Museum?",
      answers: [
        {
          text: "Buenos Aires",
          correct: false,
        },
        {
          text: "Barcelona",
          correct: false,
        },
        {
          text: "Santiago",
          correct: false,
        },
        {
          text: "Madrid",
          correct: true,
        },
      ],
    },
    {
      id: 11,
      question: "When did Salt Lake City host the Winter Olympics?",
      answers: [
        {
          text: "1992",
          correct: false,
        },
        {
          text: "1998",
          correct: false,
        },
        {
          text: "2002",
          correct: true,
        },
        {
          text: "2008",
          correct: false,
        },
      ],
    },
    {
      id: 12,
      question: "When did Hitler invade Poland?",
      answers: [
        {
          text: "1st September 1939",
          correct: true,
        },
        {
          text: "11th November 1939",
          correct: false,
        },
        {
          text: "8th May 1940",
          correct: false,
        },
        {
          text: "1st December 1940",
          correct: false,
        },
      ],
    },
    {
      id: 13,
      question: "Which French king was nicknamed the “Sun King”?",
      answers: [
        {
          text: "Louis XVI",
          correct: false,
        },
        {
          text: "Charlemagne",
          correct: false,
        },
        {
          text: "Francis I",
          correct: false,
        },
        {
          text: "Louis XIV",
          correct: true,
        },
      ],
    },
    {
      id: 14,
      question: "How many wives had Henry VIII?",
      answers: [
        {
          text: "1",
          correct: false,
        },
        {
          text: "3",
          correct: false,
        },
        {
          text: "4",
          correct: false,
        },
        {
          text: "6",
          correct: true,
        },
      ],
    },
    {
      id: 15,
      question: "In which city is the Juventus Football Club based?",
      answers: [
        {
          text: "Turin",
          correct: true,
        },
        {
          text: "Barcelona",
          correct: false,
        },
        {
          text: "Manchester",
          correct: false,
        },
        {
          text: "Marseille",
          correct: false,
        },
      ],
    },
    
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "$ 100" },
        { id: 2, amount: "$ 200" },
        { id: 3, amount: "$ 300" },
        { id: 4, amount: "$ 500" },
        { id: 5, amount: "$ 1.000" },
        { id: 6, amount: "$ 2.000" },
        { id: 7, amount: "$ 4.000" },
        { id: 8, amount: "$ 8.000" },
        { id: 9, amount: "$ 16.000" },
        { id: 10, amount: "$ 32.000" },
        { id: 11, amount: "$ 64.000" },
        { id: 12, amount: "$ 125.000" },
        { id: 13, amount: "$ 250.000" },
        { id: 14, amount: "$ 500.000" },
        { id: 15, amount: "$ 1.000.000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
