import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs'
import {AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai'
import Image from "next/image";
import{useState} from "react";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head className="">
        <title>Sultan Sagatov Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-comfortaa">SSBeron</h1>
            <ul className="flex items-center">
              <li><BsFillMoonStarsFill onClick={()=> setDarkMode(!darkMode)} className="cursor-pointer" /></li>
              <li><a className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8" href="#">Resume</a></li>
            </ul>
          </nav>
          <div className="text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Sultan Sagatov</h2>
            <h3 className="text-2xl py-2 md:text-3xl">Fullstack Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium mollitia culpa ut rerum, nostrum dolorum rem sunt porro possimus dignissimos doloremque, corrupti voluptate eligendi tempore modi. Quos perspiciatis temporibus eius?
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillTwitterCircle/>
            <AiFillLinkedin />
            <AiFillYoutube />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 my-5 overflow-hidden md:h-96 md:w-96">
            {/* <Image src={} layout="fill" objectFit="cover"> */}
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium mollitia culpa ut rerum, nostrum dolorum rem sunt porro possimus dignissimos doloremque, corrupti voluptate eligendi tempore modi. Quos perspiciatis temporibus eius?
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-white">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium mollitia culpa ut rerum, nostrum dolorum rem sunt porro possimus dignissimos doloremque, corrupti voluptate eligendi tempore modi. Quos perspiciatis temporibus eius?
            </p>
          </div>
          <div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <Image />
              <h4 className="text-xl py-5 text-teal-600">Web Development skills I use</h4>
              <p className="text-md py-1 text-gray-800">HTML</p>
              <p className="text-md py-1 text-gray-800">CSS</p>
              <p className="text-md py-1 text-gray-800">JavaScript</p>
              <p className="text-md py-1 text-gray-800">MongoDB</p>
              <p className="text-md py-1 text-gray-800">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <Image />
              <h4 className="text-xl py-5 text-teal-600">Web Development skills I use</h4>
              <p className="text-md py-1 text-gray-800">HTML</p>
              <p className="text-md py-1 text-gray-800">CSS</p>
              <p className="text-md py-1 text-gray-800">JavaScript</p>
              <p className="text-md py-1 text-gray-800">MongoDB</p>
              <p className="text-md py-1 text-gray-800">React</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark: bg-white">
              <Image />
              <h4 className="text-xl py-5 text-teal-600">Web Development skills I use</h4>
              <p className="text-md py-1 text-gray-800">HTML</p>
              <p className="text-md py-1 text-gray-800">CSS</p>
              <p className="text-md py-1 text-gray-800">JavaScript</p>
              <p className="text-md py-1 text-gray-800">MongoDB</p>
              <p className="text-md py-1 text-gray-800">React</p>
            </div>
          </div>
        </section>
        <footer>
          <div className="py-10">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta magnam veniam ex, aperiam dolore est hic. Ratione rerum laboriosam distinctio aut, nihil minima accusamus molestias officiis iusto voluptate repellendus eos.</p>
          </div>
        </footer>
      </main>
    </div>
  );
}
