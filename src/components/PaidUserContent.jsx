import React, { useState } from "react";
import axios from "axios";
import {
  Button,
  Card,
  Label,
  RangeSlider,
  Textarea,
  TextInput,
} from "flowbite-react";
import FlashCardsGen from "./FlashCardsGen";
function PaidUserContent() {
  const [subject, setSubject] = useState("");
  const [topic, setTopic] = useState("");
  const [rangeValue, setRangeValue] = useState(5);
  const [userInput, setUserInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [difficulty, setDifficulty] = useState(1);
  const [flashCards, setFlashCards] = useState([]);

  const handleProFlashCardGeneration = async () => {
    console.log("Generating flashcards...");
    const userId = JSON.parse(localStorage.getItem("loggedIn")).uid;

    const flashCardGen = {
      subject: subject,
      topic: topic,
      difficulty: difficulty,
      quantity: rangeValue,
      userInput: userInput,
      user_id: userId,
    };

    const response = await axios.post(
      "http://localhost:5000/api/paid/generate-flashcards",
      flashCardGen
    );
    const result = response.data.flashcards
    Object.entries(result).forEach(([key,value])=>{
      setFlashCards((prevFlashCards) => [
        ...prevFlashCards,
        {
          question: value.question,
          answer: value.answer,
        },
      ]);
    })
  };
  return (
    <div>
      <form className="flex max-w-md flex-col gap-10">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="subject" value="Subject" />
          </div>
          <TextInput
            id="subject"
            type="text"
            placeholder="Chemistry"
            required
            value={subject}
            helperText={<>Enter the main Subject of your flashcards</>}
            onChange={(e) => setSubject(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="topic" value="Topic" />
          </div>
          <TextInput
            id="topic"
            type="text"
            placeholder="Organic Chemistry - Reactions"
            required
            value={topic}
            helperText={<>Enter the topic of your flashcards</>}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div>
          <div className="mb-1 block">
            {
              <Label
                htmlFor="difficultySetting"
                value={`Difficulty Level: ${difficulty}`}
              />
            }
          </div>
          <RangeSlider
            id="difficultySetting"
            sizing="lg"
            min={1}
            max={5}
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value)}
          />
          <p className="text-sm text-gray-600">
            Select the difficulty of your flashcards, where 1 is for general
            practice test and 5 is for a competitive test
          </p>
        </div>
        <div>
          <div className="mb-1 block">
            <Label htmlFor="flashCardsQuantity" value={`Number of Flash Cards (5-25) - ${rangeValue}`} />
          </div>
          
          <RangeSlider
            id="flashCardsQuantity"
            sizing="lg"
            min={5}
            max={25}
            value={rangeValue}
            onChange={(e) => setRangeValue(e.target.value)}
          />
          
        </div>
        <div className="max-w-md">
          <div className="mb-2 block">
            <Label htmlFor="additionalInfo" value="Additional Instructions" />
          </div>
          <Textarea
            id="additionalInfo"
            placeholder="Add any additional specifications here"
            required
            rows={4}
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
          />
        </div>
        <Button type="button" onClick={handleProFlashCardGeneration}>
          Submit
        </Button>
      </form>
      <div className="flashcards grid grid-cols-3 grid-rows-3 gap-4 py-10">
            {flashCards.map((card, index) => (
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
  );
}

export default PaidUserContent;
