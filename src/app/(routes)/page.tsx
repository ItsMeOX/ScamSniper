'use client';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import Image from 'next/image';
import { Roboto_Mono } from 'next/font/google';
import Link from 'next/link';
import { motion } from 'framer-motion';
import HoverImageWithTransition from '@/components/hoverImgTransition';

const robotoMono = Roboto_Mono({ subsets: ['latin'] });

export default function Home() {
  const router = useRouter();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    // Set a delay before triggering the transition
    const timeout = setTimeout(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        router.push('/forum'); // Redirect after animation
      }, 1200);
    }, 1000); // 1-second delay before activation

    setHoverTimeout(timeout);
  };

  const handleMouseLeave = () => {
    // Cancel the transition if the user leaves early
    if (hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  return (
    <div className="relative w-full h-screen bg-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/landingborder.svg"
          alt="Background"
          fill
          className="object-cover object-[center_5%]"
        />

        <Image
          src="/landingcorner.svg"
          alt="corner"
          width="800"
          height="600"
          className="absolute bottom-0 right-0 object-cover"
        />

        <Image
          src="/landingcomputer.svg"
          alt="Computer"
          width="750"
          height="800"
          className="absolute bottom-0 right-10 object-cover"
        />
      </div>

      {/* Navbar and Content Above the Background */}
      <div className="relative z-10 flex justify-between items-center px-6 py-4">
        {/* Logo and Text */}
        <div className="flex items-center space-x-2 ml-11 mt-3">
          <Image
            src="/scamsniper.svg" // Your logo image
            alt="Logo"
            width={60}
            height={60}
          />
          <h1 className="text-2xl font-bold" style={{ color: '#0A61CB' }}>
            ScamSniper
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center flex-grow space-x-20 mr-60 mt-4">
          <Link
            href="/"
            className="text-lg font-bold "
            style={{ color: '#021668' }}>
            Home
          </Link>
          <Link
            href="/forum"
            className="text-lg font-bold"
            style={{ color: '#021668' }}>
            Forum
          </Link>
          <Link
            href="/chatbot"
            className="text-lg font-bold"
            style={{
              background: 'linear-gradient(to right, #1B4599, #51C2FF)',
              WebkitBackgroundClip: 'text',
              color: 'transparent',
            }}>
            VerifyAI
          </Link>
        </div>
      </div>

      {/* Tagline */}
      <h4
        className={`absolute left-40 top-80 text-5xl font-bold ${robotoMono.className}`}
        style={{}}>
        <span
          style={{
            background: 'linear-gradient(to top, #0A2F79, #0453F0)',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
          }}>
          Defence
        </span>
        <br />
        <span style={{ color: '#000000' }}>Against Deception</span>
      </h4>

      {/* Typewriter Text Animation */}
      <div className="relative">
        {/* First Paragraph */}
        <p
          className={`absolute left-40 top-80 text-lg font-regular ${robotoMono.className} typing-text`}>
          Love Scams, Fake Jobs, and Phishing Emails,
        </p>

        {/* Second Paragraph */}
        <p
          className={`absolute left-40 top-90 text-lg font-regular ${robotoMono.className} typing-text border-black`}>
          Think You Can Tell What&apos;s Real?
        </p>
      </div>

      <style jsx>{`
        @keyframes typing {
          from {
            width: 0;
          }
          to {
            width: 100%;
          }
        }

        @keyframes blink {
          50% {
            border-color: transparent;
          }
          100% {
            border-color: transparent;
          }
        }

        .typing-text {
          color: #000000;
          overflow: hidden;
          white-space: nowrap;
          display: block;
          width: 0; /* Start with width 0 */
          max-width: 500px; /* Limit the width */
          border-right: 2px solid black; /* Cursor */
          animation: typing 5s steps(60) forwards, blink 0.75s step-end;
        }

        /* Sequential animation delay for each paragraph */
        .typing-text:nth-of-type(1) {
          animation-delay: 1s;
          border-right: transparent;
        }

        .typing-text:nth-of-type(2) {
          animation-delay: 3s; /* Starts after the first paragraph finishes */
          border-right: transparent;
        }
      `}</style>

      <HoverImageWithTransition
        src="/sim_love.svg"
        width={200}
        height={200}
        alt="Love Sim"
        targetRoute="/forum"
        left={850} // Use pixels for better accuracy in positioning
        top={20} // Adjust top positioning as needed
      />
      <HoverImageWithTransition
        src="/sim_call.svg"
        width={200}
        height={200}
        alt="Love Sim"
        targetRoute="/forum"
        left={600} // Use pixels for better accuracy in positioning
        top={370} // Adjust top positioning as needed
      />
      <HoverImageWithTransition
        src="/sim_phishing.svg"
        width={200}
        height={200}
        alt="Love Sim"
        targetRoute="/forum"
        left={1270} // Use pixels for better accuracy in positioning
        top={10} // Adjust top positioning as needed
      />
    </div>
  );
}
