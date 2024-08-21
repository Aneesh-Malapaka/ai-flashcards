import React from "react";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center my-4">
      <div className="intro flex flex-col justify-center items-center gap-5">
        <h1 className="text-5xl">Welcome to Learning With Cards</h1>
        <p className="text-center text-base">The smart way solution of combining FlashCards with AI</p>
        <button
              className="p-3 bg-green-500 text-white font-bold hover:bg-green-600 rounded-md text-center"
              onClick={() => {
                window.location.href = "/auth";
              }}
            >
              Get Started
            </button>
      </div>
      <div className="features flex justify-evenly items-center gap-6 px-10 my-10">
        <div className="feature border-2 border-gray-100 rounded-xl p-4 shadow-md">
          <h3 className="text-2xl font-medium mb-4 h-16 w-3/4 ">Purely Based on User Preference</h3>
          <p className="text-base">You can type the way you want your flashcards to be generated</p>
        </div>
        <div className="feature border-2 border-gray-100 rounded-xl p-4 shadow-md">
          <h3 className="text-2xl font-medium w-3/4 h-20">Smart Flashcards</h3>
          <p className="text-base">
            Using our A.I generation your text is converted down into perfect
            cards for studying
          </p>
        </div>
        <div className="feature border-2 border-gray-100 rounded-xl p-4 shadow-md">
          <h3 className="text-2xl font-medium mb-4 h-16 w-3/4">Always Accessible</h3>
          <p className="text-base">
            Be it for a paid user or a free user, you can always access your
            cards in your profile
          </p>
        </div>
      </div>
      <div className="pricing ">
        <h2 className="text-center text-3xl mb-8 font-semibold">Pricing</h2>
        <div className="prices flex justify-evenly gap-24">
          <div className="price text-center w-3/4 px-8 border-2 border-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="my-2 text-2xl font-semibold">Basic</h3>
            <p className="my-2 text-2xl font-bold">Free forever</p>
            <ul className="text-wrap text-left list-disc">
              <li>Max 15 cards</li>
              <li>Input Based Prompt</li>
            </ul>
          </div>
          <div className="price w-3/4 text-center px-8 border-2 border-gray-100 rounded-xl p-4 shadow-md">
            <h3 className="my-2 text-2xl font-semibold">Premium</h3>
            <p className="my-2 text-2xl font-bold">2$</p>
            <ul className="text-wrap text-left list-disc leading-8">
              <li>Max 25 cards</li>
              <li>Advanced Prompt options like difficulty, topic, subject</li>
              <li>Additional input can be given</li>
              <li>Increased word limit for input</li>
            </ul>
            <button
              className="p-3 mt-5 bg-green-500 text-white font-bold hover:bg-green-600 rounded-md"
              onClick={() => {
                alert("Payment Successful");
              }}
            >
              Pay Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
