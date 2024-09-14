import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getData from '~/app/API';
import ChatBox from './Chatbox';

function Chatbot() {
    const [messages, setMessages] = useState<{ text: string; sender: string }[]>([
        { text: 'What is your most important takeaway?', sender: 'bot' }
    ]);
    const [input, setInput] = useState<string>('');
    const [response, setResponse] = useState<string>();

    const inputChange = (e: React.FormEvent<HTMLInputElement>) => {
        setInput(e.currentTarget.value);
        console.log(input);
    };

    const callAPI = async () => {
        console.log(input);
        const response = getData("You just asked a question about why you need to implement multifactor authentication OR a guest network for IoT devices in the home because of their insecurity. Tell the user if they are wrong or wrong about this answer they provided: " + input + ". If the user is wrong, ask them an easier question from the cybersecurity in the home. If the user answers correctly, ask a slightly more challenging question from the cybersecurity module. Keep your tone encouraging but your response not very long.");
        setResponse(await response);
        setInput('');
        return response;
    };

    useEffect(() => {
        const handleKeyDown = async (e: KeyboardEvent) => {
            if (e.key === "Enter") {
                await callAPI();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [input]);

    return (
        <div className='container flex-col justify-items-center align-middle p-10' style={{
            backgroundColor: '#222', // Dark background for cyberpunk effect
            border: '1px solid #00b0ff', // Neon blue border
            borderRadius: '10px', // Rounded corners
            boxShadow: '0 0 20px rgba(0, 192, 255, 0.8)', // Neon glow effect
            color: '#fff', // White text for contrast
            padding: '1rem'
        }}>
            <ChatBox messages={messages} />
            <div className='flex justify-center'>
                <input
                    id='in'
                    className='text-center text-black p-4 mt-6'
                    type='text'
                    value={input}
                    onChange={inputChange}
                    onKeyDown={(e) => callAPI}
                    placeholder="Type here..."
                    style={{
                        backgroundColor: '#333', // Dark input background
                        color: '#fff', // White text
                        border: '1px solid #00b0ff', // Neon blue border
                        borderRadius: '5px' // Rounded corners
                    }}
                />
            </div>
            <div className='flex justify-center'>
                <button
                    className='bg-slate-200 m-4 p-3 w-40'
                    onClick={callAPI}
                    style={{
                        backgroundColor: '#333', // Dark button background
                        color: '#00b0ff', // Neon blue text
                        border: '1px solid #00b0ff', // Neon blue border
                        borderRadius: '5px', // Rounded corners
                        boxShadow: '0 0 10px rgba(0, 192, 255, 0.8)' // Neon glow effect
                    }}
                >
                    Send
                </button>
            </div>
            <p>{response}</p>
        </div>
    );
}

export default Chatbot;
