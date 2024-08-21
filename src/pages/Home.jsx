import React, { useEffect, useState } from "react";
import PaidUserContent from "../components/PaidUserContent";
import axios from "axios";
function Home() {
  const [userPaid, setUserPaid] = useState(false);
  const [rangeValue, setRangeValue] = useState(5);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [flashcards, setFlashcards] = useState([]);

  const handleFlashCardGeneration = async () => {
    console.log("Generating flashcards...");
    const userId = JSON.parse(localStorage.getItem("loggedIn")).uid;

    const flashCardGen = {
      userInput: userInput,
      quantity: rangeValue,
      user_id: userId,
    };

    const response = await axios.post(
      "http://localhost:5000/api/free/generate-flashcards",
      flashCardGen
    );
    console.log(
      JSON.parse(response.data.text),
      typeof JSON.parse(response.data.text)
    );
    const resCards = JSON.parse(response.data.text);
    console.log(resCards);
    Object.entries(resCards).forEach((key, value) => {
      setFlashcards((prevValue) => [
        ...prevValue,
        { question: key[1].question, answer: key[1].answer },
      ]);
      console.log(key, value);
    });
  };

  // useEffect(()=>{
  //   console.log(flashcards)
  // }, [flashcards])
  return (
    <main className="p-5">
      {userPaid ? (
        <PaidUserContent />
      ) : (
        <div>
          <div className="suggestPayment flex gap-3 justify-start items-center">
            <p>Activate premium version for a very low cost of $2 today</p>
            <button
              className="p-3 bg-green-500 text-white font-bold hover:bg-green-600 rounded-md"
              onClick={() => setUserPaid(true)}
            >
              Pay Now
            </button>
          </div>

          <div className="flashCardsInput">
            <div className="userInputDiv">
              <label
                htmlFor="message"
                className="block mb-2 text-base font-medium text-gray-900"
              >
                Flash Cards Topic
              </label>
              <textarea
                id="message"
                value={userInput}
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Describe your flashcards topic here."
                onChange={(e) => setUserInput(e.target.value)}
              ></textarea>
            </div>
            <div className="flashcardsQuantityDiv">
              <div className="relative mb-6">
                <label
                  htmlFor="labels-range-input"
                  className="block mt-4 text-sm font-medium text-gray-900"
                >
                  Choose Number of FlashCards - {rangeValue}
                </label>
                <input
                  id="labels-range-input"
                  type="range"
                  value={rangeValue}
                  onChange={(e) => setRangeValue(e.target.value)}
                  min={5}
                  max={15}
                  step={1}
                  className="w-full h-2 bg-gray-400 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                />
                <span className="text-sm text-gray-800 absolute start-0 -bottom-6">
                  Min (5)
                </span>

                <span className="text-sm text-gray-800 absolute end-0 -bottom-6">
                  Max (15)
                </span>
              </div>
            </div>
            <button
              className="px-10 py-2 my-10 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none"
              onClick={handleFlashCardGeneration}
              disabled={isLoading}
            >
              Generate FlashCards
            </button>
          </div>
          <div className="flashcards grid grid-cols-3 grid-rows-3 gap-4">
            {flashcards.map((card, index) => (
              <div key={index} className="flashcard p-5 shadow-md width-3/4 border-2 border-gray-200 rounded-lg">
                <div className="front side">
                  <p>
                    <strong>Question:</strong> {card.question}
                  </p>
                </div>
                <div className="back side">
                  <p>
                    <strong>Answer:</strong> {card.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </main>
  );
}

export default Home;
