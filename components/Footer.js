"use client";
import React, { useState } from 'react';
import { IoLogoYoutube } from "react-icons/io";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import Image from 'next/image';
import { FaArrowRight, FaEnvelope, FaLocationPin, FaPhone } from 'react-icons/fa6';

const faqs = [
  {
    title: "What products does Orchid Minerals offer?",
    desc: "Orchid Minerals specializes in high-quality mineral products including silica, bentonite, kaolin, and other industrial minerals. Our products are used in a wide range of industries such as construction, cosmetics, and agriculture."
  },
  {
    title: "Where do you source your minerals?",
    desc: "We source our minerals from environmentally responsible mines located around the world. Our team ensures that all sourcing is done sustainably, with a focus on maintaining the natural environment and supporting local communities."
  },
  {
    title: "How can I place an order with Orchid Minerals?",
    desc: "You can place an order by contacting our sales team via email or phone. Alternatively, you can visit our website and use our online order form. Our team will guide you through the process and help with any special requirements."
  },
  {
    title: "Do you provide custom mineral blends?",
    desc: "Yes, we offer custom blending services to meet the specific needs of our clients. Whether you need a unique mineral composition or a specific particle size, our experts can create a blend tailored to your requirements."
  },
  {
    title: "What quality control measures do you have in place?",
    desc: "Orchid Minerals adheres to strict quality control standards at every stage of production. We conduct rigorous testing on all products to ensure consistency, purity, and performance, meeting or exceeding industry standards."
  },
  {
    title: "Can you ship internationally?",
    desc: "Yes, we offer international shipping to most countries. Our logistics team works closely with reliable shipping partners to ensure your order is delivered safely and on time, no matter where you are located."
  }
];

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className="bg-gray-100 border-t-2 border-mainColor">
      <div className="">
        
        {/* <div className="flex justify-between items-center p-6 container mx-auto">
          <Image src="/assets/logo-dark.png" width={200} height={400} alt="Orchid Minerals Logo" />
        </div> */}
        
        <div className="space-y-8 ">
          {/* <h1 className="font-bold text-mainColor text-3xl p-6 container mx-auto">Frequently Asked Questions</h1> */}
          <div className="space-y-4 container mx-auto p-6">
            {/* {faqs.map((data, index) => (
              <FAQItem key={index} data={data} />
            ))} */}
          </div>


          <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Subscribe to our newsletter.
            </h2>
            <p className="mt-4 text-lg leading-8 text-gray-300">
              Nostrud amet eu ullamco nisi aute in ad minim nostrud adipisicing velit quis. Duis tempor incididunt dolore.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="flex-none rounded-md bg-mainColor px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Subscribe
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md text-white font-bold">
              <h1>Our Company</h1>
              </div>
              <dt className="mt-4 font-semibold text-gray-400">What We do </dt>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="#!">Sustainabilty</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
              <a href="#!">News & Stories</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="#!">Investors</a>
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                <a href="#!">Reports</a>
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md text-white font-bold">
              Contact us
              </div>
              <dt className="mt-4 font-semibold text-white">  </dt>
              <dd className="mt-2 leading-7 text-gray-400 flex">
              <FaPhone/> +252610000000 
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                 <FaEnvelope/> info@orchidMinerals.com
              </dd>
              <dd className="mt-2 leading-7 text-gray-400">
                 <FaLocationPin/>Address , Street 
              </dd>
            </div>
          </dl>
        </div>
      </div>
      <div
        className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        aria-hidden="true"
        style={{
          clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
      >
        <div
          className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#1b2594] to-[#2218af] opacity-30"
        ></div>
      </div>
    </div>





        </div>
      </div>

      <div className="bg-mainColor py-6">
        <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center text-white space-y-4 md:space-y-0">
          <p className="text-center md:text-left">&copy; {year} ORCHID MINERALS. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" aria-label="YouTube">
              <IoLogoYoutube size={32} />
            </a>
            <a href="#" aria-label="Facebook">
              <FaFacebookSquare size={32} />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram size={32} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

function FAQItem({ data }) {
  const { title, desc } = data;
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-mainColor rounded-lg p-4 bg-white shadow-md">
      <h3
        onClick={() => setOpen(!open)}
        className="text-mainColor font-bold cursor-pointer flex justify-between items-center"
      >
        {title}
        <span>{open ? <IoIosArrowUp /> : <IoIosArrowDown />}</span>
      </h3>
      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${open ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className="text-gray-500 mt-3">{desc}</p>
      </div>
    </div>
  );
}

export default Footer;
