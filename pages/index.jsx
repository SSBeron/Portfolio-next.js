import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import sultan from '../public/MyPhoto.png';
import TWD from '../public/TWD.jpg';
import REstate from '../public/REstate.jpg';
import conv from '../public/conv.jpg';
import tictactoe from '../public/tictactoe.png';
import leftImage from '../public/leftImage.png';
import rightImage from '../public/rightImage.png';
import Hand from '../public/3DHand.png';
import{useState} from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head className="">
        <title>Sultan Sagatov Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/myicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-comfortaa">SSBeron</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer" /></li>
              <li>
              <a className="bg-gradient-to-r from-green-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8 animate-pulse" href="https://drive.google.com/file/d/1cciJyabKttq-6zw0K6QLZQbdMC-x-Q5G/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                My Resume
              </a>
            </li>
            </ul>
          </nav>

          <div className="text-center p-8">
            <h2 className="text-5xl py-2 text-green-700 font-medium md:text-6xl"><Image src={Hand} className="w-24 animate-waving-hand"/> Hi! My&nbsp;name&nbsp;is Sultan</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Fullstack Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
             Welcome to my web developer portfolio! I'm an aspiring web developer with a passion for learning and staying updated with the latest technologies.<br /><br />
            I specialize in HTML, CSS, JavaScript, React, Node.js, Express.js, MongoDB, and have recently added Next.js to my skill set. This portfolio itself is built using Next.js, showcasing my adaptability and eagerness to embrace new tools.<br /><br />
            I strive to create engaging and user-friendly websites, driven by a solid understanding of web development principles. Collaboration, communication, and continuous improvement are key in achieving project goals.<br /><br />
            Explore my portfolio to see my work with Next.js and witness my dedication to creating impactful web solutions. Exciting opportunities lie ahead as I continue to develop my skills and contribute to the web development field.<br /><br />
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <a href="https://www.instagram.com/ss.beron/" target="_blank">
              <AiFillInstagram className="text-gray-600" />
            </a>
            <a href="https://www.linkedin.com/in/sultan-sagatov-7bb4a6228/" target="_blank">
              <AiFillLinkedin className="text-gray-600" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <AiFillYoutube className="text-gray-600"/>
            </a>
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-5 overflow-hidden md:h-96 md:w-96 photo-wrapper">
          <Image src={leftImage} className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-full rotate-3 hover:translate-x-0 hover:rotate-0 transition-all duration-500" />
          <Image src={rightImage} className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-full rotate-3 hover:translate-x-0 hover:rotate-0 transition-all duration-500" />
          <Image src={sultan} className="relative z-10" />
        </div>
        </section>
        <section>
          <div className="text-xl">
            <h3 className="text-3xl py-1">My recent projects</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Real Estate Marketplace Website
              Designed and developed a user-friendly frontend using EJS, Express.js, and CSS.
              Implemented features for browsing real estate properties.
              URL: <a href="https://real-estate-gda2.onrender.com">https://real-estate-gda2.onrender.com</a>
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              The Walking Dead TV series Frontend Website
              Created a Front-end using CSS, HTML, and JavaScript.
              Developed interactive elements and optimized performance.
              URL: <a href="https://local-media.onrender.com">https://local-media.onrender.com</a>
           </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Google Converter Clone
              Built a unit converter tool using JavaScript.
              Ensured accuracy and responsiveness.
              URL: <a href="https://google-converter.onrender.com">https://google-converter.onrender.com</a>
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              TicTacToe
              Well known by everyone Tic Tac Toe (with 5X5 option) in JS
              URL: <a href="https://tic-tac-toe-4owd.onrender.com/">https://tic-tac-toe-4owd.onrender.com/</a>
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
            <a href="https://local-media.onrender.com" target="_blank" className="image-wrapper">
              <Image src={TWD} className="w-screen rounded-xl transition-shadow" />
            </a>
              <h4 className="text-xl py-5 text-teal-600">Web Development tools I used in TWD project</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
            <a href="https://real-estate-gda2.onrender.com" target="_blank" className="image-wrapper">
              <Image src={REstate} className="w-screen rounded-xl" />
            </a>
              <h4 className="text-xl py-5 text-teal-600">Web Development tools I used in "Home sweet home" Real Estate selling project</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
            <a href="https://google-converter.onrender.com" target="_blank" className="image-wrapper">
              <Image src={conv} className="w-screen rounded-xl" />
            </a>
              <h4 className="text-xl py-5 text-teal-600">Web Development tools I used in Google&nbsp;Converter&nbsp;clone project</h4>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
            <a href="https://tic-tac-toe-4owd.onrender.com/" target="_blank" className="image-wrapper">
              <Image src={tictactoe} className="w-screen rounded-xl" />
            </a>
              <h4 className="text-xl py-5 text-teal-600">Web Development tools I used in TicTacToe&nbsp;project</h4>
            </div>
          </div>
        </section>
        <footer className="bg-gray-800 py-4 text-white text-center rounded-xl">
          <p>Created by Sultan Sagatov</p>
          <p>&copy; 2023 All rights reserved*</p>
        </footer>
      </main>
    </div>
  );
}
