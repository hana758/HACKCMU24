"use client";

import { useState } from "react";
import Link from "next/link";  


export function LoadButtons({onOpenModal}) {


  return (
    <div className="flex justify-center w-full"> {/* Full width and centered */}
      <div className="flex flex-row space-x-4 justify-center items-center"> 

      <button
          onClick={onOpenModal}
          type="button"
          className="rounded-full bg-white/10 w-40 h-20 font-semibold transition hover:bg-white/20 border-2 border-white whitespace-pre-line"
        >
            At Home Cybersecurity
          </button> 
  
        <Link href="/password-security">
          <button
            type="button"
            className="rounded-full bg-white/10 w-40 h-20 font-semibold transition hover:bg-white/20 border-2 border-white whitespace-pre-line"
          >
            Password{"\n"}Safety
          </button>
        </Link>
  
        <Link href="/phishing">
          <button
            type="button"
            className="rounded-full bg-white/10 w-40 h-20 font-semibold transition hover:bg-white/20 border-2 border-white whitespace-pre-line"
          >
            Phishing{"\n"}Attacks
          </button>
        </Link>
  
        <Link href="/password-security">
          <button
            type="button"
            className="rounded-full bg-white/10 w-40 h-20 font-semibold transition hover:bg-white/20 border-2 border-white whitespace-pre-line"
          >
            Online{"\n"}Privacy
          </button>
        </Link>
      </div>
    </div>
  );
}