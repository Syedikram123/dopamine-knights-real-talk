"use client";
import { useState } from "react";

export default function Home() {
  const soulQuotes = [
    "Your urges are not stronger than your purpose.",
    "Discipline is remembering what you want most.",
    "Every time you say no to the urge, you say yes to your future.",
    "You are not your desire. You are your decisions.",
    "This battle is won one hour at a time."
  ];

  const bodyQuotes = [
    "Believe you can and you're halfway there.",
    "Success is not final, failure is not fatal.",
    "Don't watch the clock; do what it does. Keep going.",
    "You miss 100% of the shots you don't take.",
    "The only way to do great work is to love what you do."
  ];

  const [category, setCategory] = useState("soul");
  const [quote, setQuote] = useState("Choose your battlefield: Soul or Body");

  const shuffleQuote = () => {
    const audio = new Audio("/voice.mp3");
    audio.play();
    const quotes = category === "soul" ? soulQuotes : bodyQuotes;
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setQuote(quotes[randomIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[url('/Knight.jpg')] bg-cover bg-center text-white px-4">
      <h1 className="text-4xl font-bold mb-6 text-orange-500 drop-shadow">
        Dopamine Knights
      </h1>

      <div className="flex gap-4 mb-4">
        <button
          onClick={() => setCategory("soul")}
          className={`px-4 py-2 rounded-xl font-semibold ${
            category === "soul" ? "bg-orange-600" : "bg-gray-800"
          }`}
        >
          Soul War
        </button>
        <button
          onClick={() => setCategory("body")}
          className={`px-4 py-2 rounded-xl font-semibold ${
            category === "body" ? "bg-orange-600" : "bg-gray-800"
          }`}
        >
          Body War
        </button>
      </div>

      <div className="w-full max-w-xl bg-black/60 text-white border border-orange-500 shadow-lg rounded-2xl p-6 text-center">
        <p className="text-lg font-medium text-orange-100">{quote}</p>
      </div>

      <button
        onClick={shuffleQuote}
        className="mt-6 bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-6 rounded-xl shadow-md transition-all"
      >
        Swap Sword
      </button>
    </div>
  );
}
