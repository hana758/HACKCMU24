'use client';

import Link from "next/link";
import { LoadButtons } from "~/app/_components/modulebuttons";
import { NpcDialogue } from "~/app/_components/npc-dialogue";
import React, { useState } from "react";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import Chatbot from '~/app/Chatbot';
import CreditsModal from './_components/CreditsModal';

export default function Home() { 

  // Modal state
  const [open, setOpen] = React.useState(false);
  const [openCreditsModal, setOpenCreditsModal] = React.useState(false);
  const [showChatbot, setShowChatbot] = useState(false);

  // Handlers for opening and closing the modal
  const onOpenModal = () => {
    setOpen(true);
    setTimeout(() => {
      setShowChatbot(true);
    }, 2000);
  };

  const onCloseModal = () => {
    setOpen(false);
    setShowChatbot(false);
  };

  const onOpenCreditsModal = () => setOpenCreditsModal(true);
  const onCloseCreditsModal = () => setOpenCreditsModal(false);

  return ( 
    <main className="flex min-h-screen items-center justify-center bg-cover bg-center text-white" style={{ backgroundImage: 'url("/images/dark-city3.jpg")' }}>
      <div className="flex flex-col items-center justify-center gap-12 px-4 py-16 w-full">
        
        {/* NPC Dialogue component */}
        <NpcDialogue />
        
        {/* Buttons for loading modules */}
        <LoadButtons onOpenModal={onOpenModal} />

        {/* Modal component */}
        <Modal open={open} onClose={onCloseModal} center styles={{
          modal: {
            backgroundColor: 'black',
            color: 'white',
            padding: '2rem',
            maxWidth: '700px',
            width: '90%',
            borderRadius: '10px',
            boxShadow: '0 0 20px rgba(0, 192, 255, 0.5)', // Neon/cyberpunk glow effect
          },
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.8)', // Darker overlay for the cyberpunk feel
          }
        }}>
          <div style={{ height: '90vh', overflowY: 'scroll', lineHeight: '1.6' }}>
            <h2 style={{ color: '#00b0ff', fontSize: '2rem', fontWeight: 'bold', marginBottom: '1rem' }}>
              At Home Cybersecurity Best Practices
            </h2>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Network Segmentation for Smart Devices
            </h3>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Why You Should Implement Network Segmentation with a Guest Wi-Fi network
            </h4>

            <p style={{ marginBottom: '1rem' }}>
              Network segmentation with a guest Wi-Fi network is a powerful cybersecurity practice because it separates different types of devices, reducing the risk of a cyber attack spreading through your entire home network. For example, smart devices such as security cameras, smart speakers, and thermostats are often less secure than your primary devices like laptops and phones. If one of these devices gets hacked, it could give an attacker access to sensitive data on other connected devices through your wifi network. Creating a guest network would keep the less secure devices away from your personal devices.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              By creating a guest Wi-Fi network for smart devices and visitors, you:
            </p>

            <ol style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
              <li>Contain potential threats: If a less secure device is compromised on the guest network, it won’t affect the rest of your home network.</li>
              <li>Protect personal data: Your computers, smartphones, and other devices containing sensitive information stay on a separate, more secure network.</li>
              <li>Add privacy: Guests or smart devices that connect to your guest Wi-Fi won’t have access to your personal devices or networked data.</li>
            </ol>

            <h3 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Multi Factor Authentication
            </h3>
            <h4 style={{ fontSize: '1.25rem', fontWeight: 'bold', marginBottom: '0.5rem' }}>
              Why You Should Use Multi Factor Authentication
            </h4>

            <p style={{ marginBottom: '1rem' }}>
              Implementing multifactor authentication (MFA) significantly improves the security of your accounts by requiring multiple forms of verification, which makes it harder for attackers to gain access. MFA reduces the risk of identity theft and data breaches caused by compromised passwords.
            </p>

            <p style={{ marginBottom: '1rem' }}>
              To use MFA, you:
            </p>

            <ol style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
              <li>Add a layer of protection beyond passwords, reducing vulnerability to cyber attacks.</li>
              <li>Feel safer knowing your accounts are better protected.</li>
            </ol>

            <p style={{ marginBottom: '1rem' }}>
              Getting started with MFA:
            </p>

            <p style={{ marginBottom: '1rem' }}>
              Set up an MFA app, text message verification, or phone call verification on your accounts. After you enter your credentials, it will prompt you to either enter a code sent to your phone or answer an automated call. This is just one other layer to keep your information safe.
            </p>

            {/* Chatbot Component */}
            {showChatbot ? <Chatbot /> : <p>Loading Chatbot...</p>}
          </div>
        </Modal>

        {/* Container for credits button and footer */}
        <div className="flex flex-col items-center justify-end p-4">
          {/* Credits Modal Button */}
          <button
            onClick={onOpenCreditsModal}
            className="bg-black text-white px-4 py-2 rounded shadow-lg hover:shadow-red-500 mb-2"
            style={{ boxShadow: '0px 0px 15px rgba(255, 0, 0, 0.8)' }}
          >
            Credits
          </button>

          <CreditsModal open={openCreditsModal} onClose={onCloseCreditsModal} />
        </div>

        {/* Bottom Right Corner Text */}
        <footer className="absolute bottom-4 right-4 text-gray-400 text-sm">
          ALPHA31 @ Hack@CMU 2024
        </footer>

      </div>
    </main>
  );
}
