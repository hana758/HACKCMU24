"use client";

import { useState, useEffect } from "react";

export function NpcDialogue() {
  // Array of dialogues for the NPC
  const dialogues = [
    "...Oh hey! I didn't see you there.",
    "Where did you come from? You don't look like you're from the year 7E8. Are you a historic roleplayer?",
    "Ah... nevermind... I don't want to know.",
    "Anyway, in this futuristic world, a lot of things have changed in the past years.",
    "A lot of it is due to the expansion of the Internet and online world.",
    "Topics like online security and privacy have become exponentially crucial in everyday life.",
    "Are you interested in learning? These are very important things that everybody should be aware of.",
    "Below me are some lessons to help you learn. Good luck and have fun!"
  ];

  const [currentDialogue, setCurrentDialogue] = useState(0); // Track current dialogue index
  const [displayText, setDisplayText] = useState(""); // Text to display with typewriter effect
  const [isTyping, setIsTyping] = useState(false); // Track if text is being typed

  // Function to simulate the typewriter effect
  const typeDialogue = (dialogue) => {
    setDisplayText(dialogue.charAt(0)); // Clear previous text
    setIsTyping(true); // Set typing state to true
    let index = 0;

    // Start typing each character one by one
    const interval = setInterval(() => {
      if (index < dialogue.length) {
        setDisplayText((prev) => prev + dialogue.charAt(index)); // Add one character at a time
        index++;
      } else {
        clearInterval(interval); // Stop interval when finished typing
        setIsTyping(false); // Set typing state to false when done
      }
    }, 35); // Adjust the speed (50ms per character)

    
    return () => clearInterval(interval); // Cleanup interval if dialogue changes
  };

  // Event listener for key press or mouse click
  useEffect(() => {
    const handleInteraction = () => {
      if (!isTyping) { // Only advance if typing is done
        if (currentDialogue < dialogues.length - 1) {
          setCurrentDialogue((prev) => prev + 1); // Go to next dialogue
        } else if(currentDialogue == dialogues.length-1){
          setCurrentDialogue((prev) => 0);
        }
      }
    };

    window.addEventListener("keydown", handleInteraction);
    window.addEventListener("click", handleInteraction);

    return () => {
      window.removeEventListener("keydown", handleInteraction);
      window.removeEventListener("click", handleInteraction);
    };
  }, [currentDialogue, isTyping]);

  // Start typewriter effect whenever the current dialogue changes
  useEffect(() => {
    const cleanup = typeDialogue(dialogues[currentDialogue]); // Trigger typewriter for the current dialogue
    return cleanup; // Cleanup interval when the dialogue changes
  }, [currentDialogue]);

  return (
  <div className="w-full max-w-lg flex flex-col items-center justify-center border border-white p-4 rounded-lg bg-black/50 mt-8"> {/* Added mt-8 for margin-top */}
    <div className="flex flex-row items-center gap-4">
      {/* NPC name and image aligned vertically */}
      <div className="flex flex-col items-center">
        <div className="text-lg mb-2 text-center text-white">
          Anne:
        </div>
        
        {/* NPC image */}
        <img
          src="/images/subject.png"
          alt="AI Tutor Anne"
          className="w-24 h-36 object-cover rounded-full border-2 border-white"
        />
      </div>
  
      {/* Dialogue box with typewriter effect */}
      <div className="text-white p-4 border border-white rounded-lg bg-gray-800 transition-opacity duration-500 ease-in-out opacity-100 w-[300px] h-[100px] overflow-y-auto">
        <p>{displayText}</p>
      </div>
    </div>

    {/* Text at the bottom */}
    {/* condition to change text */}
    <div className="mt-4 text-center">
      {currentDialogue < dialogues.length -1 ? (
        <p className="text-sm">Press any key or click to continue</p>
      ) : (
        <p className="text-sm">Press any key or click to restart conversation</p>
      )}
    </div>
  </div>
);
}