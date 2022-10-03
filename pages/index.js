import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';

import deved from '../public/img/dev-ed-wave.png';
import design from '../public/img/design.png';
import code from '../public/img/code.png';
import consulting from '../public/img/consulting.png';
import web1 from '../public/img/web1.png';
import web2 from '../public/img/web2.png';
import web3 from '../public/img/web3.png';
import web4 from '../public/img/web4.png';
import web5 from '../public/img/web5.png';
import web6 from '../public/img/web6.png';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Shayan Ameen</title>
        <link rel="icon" href="/img/favicon.ico" />
      </Head>

      <main className="bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900 dark:text-white">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl font-burtons">developedbyshayanameen</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  className="cursor-pointer text-2xl"
                  onClick={() => setDarkMode(!darkMode)}
                />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 ">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
              Shayan Ameen
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">Web Developer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-lg mx-auto md:text-xl">
              I am a full-stack web developer, specializing mostly in JavaScript
              with an ambition to continue learning.
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-300">
            <a href="https://www.twitter.com" target="blank">
              <AiFillTwitterCircle />
            </a>
            <a href="https://www.linkedin.com" target="blank">
              <AiFillLinkedin />
            </a>
            <a href="https://www.github.com" target="blank">
              <AiFillGithub />
            </a>
          </div>
          <div className="relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 mx-auto mt-20 overflow-hidden md:w-96 md:h-96">
            <Image
              src={deved}
              alt="waving 3d person "
              layout="fill"
              objectFit="cover"
            />
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Services I offer</h3>
            <p
              className="text-md py-5 leading-8 text-gray-800
            dark:text-gray-200
            "
            >
              Since the beginning of my journey as a Lorem ipsum, I&apos;ve
              worked with
              <span className="text-teal-500"> startups </span> and
              <span className="text-teal-500"> talented people </span>
              to create beatiful websites for both business and consumer use.
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including
              <span className="text-teal-500"> Lorem </span>and
              <span className="text-teal-500"> ipsum</span>.
            </p>
          </div>
          <div className="lg:flex lg:gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={design} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium">Lorem ipsum</h3>
              <p className="py-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Tempora, earum.
              </p>
              <h4 className="py-4 text-teal-600 ">Lorem tools I use</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={consulting} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium">Lorem ipsum</h3>
              <p className="py-2">
                Creating elegant and resposive websites according your needs.
              </p>
              <h4 className="py-4 text-teal-600 ">Lorem tools I use</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10">
              <Image src={code} width={100} height={100} alt="design" />
              <h3 className="text-lg font-medium">Lorem ipsum</h3>
              <p className="py-2">
                Creating elegant and resposive websites according your needs.
              </p>
              <h4 className="py-4 text-teal-600 ">Lorem tools I use</h4>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
              <p className="text-gray-800 dark:text-gray-200 py-1">Lorem</p>
            </div>
          </div>
        </section>

        <section>
          <div>
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum obcaecati eius numquam est nobis enim totam alias
              reiciendis mollitia similique!
            </p>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, autem?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                src={web1}
                alt="web1"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web2}
                layout="responsive"
                alt="web2"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web3}
                layout="responsive"
                alt="web3"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web4}
                layout="responsive"
                alt="web4"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web5}
                layout="responsive"
                alt="web5"
              />
            </div>
            <div className="basis-1/3 flex-1">
              <Image
                className="rounded-lg object-cover"
                width={'100%'}
                height={'100%'}
                src={web6}
                layout="responsive"
                alt="web6"
              />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
