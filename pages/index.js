import Head from 'next/head'; // 
// Import Head from Next.js
import Header from '../components/Header'; // Ensure this is a valid React component
import Footer from '../components/Footer'; // Ensure this is a valid React component
// import { useEffect } from 'react';
import FeedbackForm from '../components/Feedback';
import Partners from '../components/Partners';
import Services from '../components/Services';
import ChooseUs from '../components/WhyChooseUs';
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import Image from "next/image";
import Link from 'next/link'; // Import Link from Next.js

export default function Home() {
  return (
    <div>
      {/* Page Metadata */}
      <Head>
        <title>B2B IT & Hardware Solutions | Smart Admin Tools for Modern Businesses</title>
        <meta
          name="description"
          content="Explore our B2B IT and hardware services platform – your central hub for managing tech infrastructure, client orders, inventory, and real-time analytics with a powerful admin dashboard."
        />
        <meta
          name="keywords"
          content="B2B IT services, hardware solutions, tech infrastructure, business IT platform, enterprise hardware, admin dashboard, inventory management, client orders, analytics"
        />
        <meta name="author" content="Your Company Name" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>
      <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md">
        <div className="flex  items-center justify-center gap-2 py-4 px-4">
          <img
            src="/images/msme-logo.png"
            alt="MSME Logo"
            className="h-12 w-auto"
          />
          <img
            src="/images/gem-logo.png"
            alt="GEM Logo"
            className="h-12 w-auto"
          />
        </div>
      </div>
  {/* Prevent Overlap */}
  <div className="pt-32 sm:hidden" />
      <section className="relative w-full h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('/images/profile.jpg')" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 text-center text-white px-6 md:px-12">
            <h1 className="text-4xl md:text-6xl font-bold">Your IT Challenges,<span className="text-sky-500">Our End-to-End Solutions</span></h1>
            <p className="mt-4 text-lg md:text-xl">We specialize in delivering reliable IT hardware services and infrastructure solutions, so you can focus on growing your business with confidence.</p>
            <div className="mt-6 flex justify-center space-x-4">
              <Link href="/Contact" className="bg-sky-500 px-6 py-3 rounded-md text-white font-semibold hover:bg-orange-600 transition">Contact Now</Link>
              {/* <Link href="/Objectives" className="bg-white px-6 py-3 rounded-md text-orange-500 font-semibold hover:bg-gray-200 transition">Services</Link> */}
            </div>
          </div>
      </section>
      {/* <main className="flex-grow bg-gray-100 sm:p-8 mt-8 overflow-auto"> */}
      <main className="dark:bg-gray-900 bg-sky-50 min-h-screen  items-center justify-center pb-4">
          <Services />

        <div className="py-6">
          <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex mx-4">
            <div className="flex-1 w-full lg:w-1/2">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                className="w-full h-auto rounded-lg"
                alt="ICT Solutions Image"
              />
            </div>
            <div className="max-w-xl lg:px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl dark:bg-gray-900">
              <h3 className="text-indigo-600 font-semibold">
                Professional services
              </h3>
              <p className="text-gray-800 lg:text-3xl font-semibold text-2xl lg:text-justify text-start  dark:text-gray-300">
                &ldquo;Leading ICT Infrastructure Solutions Provider in North Eastern India.&#8221;
              </p>
              <p className="mt-3 text-gray-600 text-justify dark:text-gray-600">
                We are a leading solution provider of ICT infrastructure in the field of Hardware Specifications,Networking,Video Conferencing, EPABX, Electrification,AMC(Annual Maintainence Contract),FMS(Facility Management Services),Onsite Manpower deployment as per End user requirement, Inhouse Support, Consultancy Services. in North Eastern India. Our inception has been based on constant innovation through leadership, to ensure that our customers are always able to better manage their operational costs, productivity and time management, and keep-up with today's fast paced business environment.
              </p>
            </div>
          </div>
        </div>
        <ChooseUs />
        {/* Logos */}
        {/* <div className="flex justify-end flex-wrap">
          <div className="flex items-center justify-center sm:justify-start">
            <img
              src="/images/msme-logo.png"
              alt="MSME Logo"
              className="h-16 sm:h-24 w-auto mr-4 mb-2 sm:mb-0"
            />
            <img
              src="/images/gem-logo.png"
              alt="GEM Logo"
              className="h-16 sm:h-24 w-auto mb-2 sm:mb-0"
            />
          </div>
        </div> */}
        {/* <section className="py-14">
          <div className="max-w-screen-xl mx-auto md:px-8">
            <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
              <div className="flex-1 sm:hidden lg:block">
                <img
                  src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                  className="md:max-w-lg sm:rounded-lg"
                  alt="Image related to ICT solutions (replace with a more descriptive alt text)"
                />
              </div>
              <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                <h3 className="text-indigo-600 font-semibold">
                  Professional services
                </h3>
                <p className="text-gray-800 text-3xl font-semibold sm:text-4xl text-justify">
                  &ldquo; Leading ICT Infrastructure Solutions Provider in North Eastern India &#8221;
                </p>
                <p className="mt-3 text-gray-600 text-justify">
                  We are a leading solution provider of ICT infrastructure in the field of Hardware Specifications, Networking, Video Conferencing, EPABX, Electrification etc. in North Eastern India. Our inception has been based on constant innovation through leadership, to ensure that our customers are always able to better manage their operational costs, productivity and time management, and keep-up with today's fast paced business environment.
                </p>
                <p className="mt-3 text-gray-600 text-justify">
                  As an independent business partner of HP India Pvt. Ltd., B2B Systems and Solutions is able to provide customers with state-of-the-art technology from a globally recognised and trusted source. HP, a USA company, is considered the global leader in ICT products & solutions and B2B Systems and Solutions is able to draw on its extensive sales and support networks in order to offer its customers the very best in ICT product and solutions. We differentiate ourselves by moving away from being a purveyor of box-dropping, to a company that incorporates each element of the IT solutions process. We strive to achieve a dominant position through offering our clients a comprehensive and customised end-to-end solution, regardless of the industry they operate in.
                </p>


                <a href="javascript:void(0)" className="inline-flex gap-x-1 items-center text-indigo-600 hover:text-indigo-500 duration-150 font-medium">
                  Learn more
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* Feedback */}
        {/* <div className="max-w-4xl  mx-auto px-4 py-8">
          <div className="bg-white dark:bg-gray-800 shadow-lg rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="John Doe"
              className="w-24 h-24 rounded-full border-4 border-orange-500 object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-white">John Doe</h3>
              <p className="text-sm text-gray-500 dark:text-gray-300">CEO, Acme Corp</p>
              <p className="mt-4 text-gray-700 dark:text-gray-200 relative">
                <span className="text-yellow-400 text-3xl absolute -left-6 -top-2">“</span>
                Working with this B2B platform streamlined our procurement process. The support team is highly responsive and the entire workflow is transparent and reliable.
                <span className="text-yellow-400 text-3xl absolute -right-6 -bottom-2">”</span>
              </p>
            </div>
          </div>
        </div> */}
        <FeedbackForm />
        <div className="align-center justify-center mt-4">
          <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Our <span className='text-sky-400'>Partners</span></h1>
        </div>
        <Partners />
      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}

// import Head from 'next/head';
// import { useState, useEffect } from 'react';
// import Carousel from "/components/Carousel";
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import Partners from '/Components/Partners';
// import Image from "next/image";

// export default function Home() {
//   const [displayedText, setDisplayedText] = useState('');
//   const fullText = 'Welcome to the B2B system and solution';
  
//   useEffect(() => {
//     let index = 0;
//     const interval = setInterval(() => {
//       if (index < fullText.length) {
//         setDisplayedText(fullText.substring(0, index + 1));
//         index++;
//       } else {
//         clearInterval(interval);
//       }
//     }, 50);
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Page Metadata */}
//       <Head>
//         <title>B2B</title>
//         <meta name="description" content="Frontend Developer Portfolio" />
//         <link rel="icon" href="/logo.png" />
//       </Head>

//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50 h-16 flex items-center">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 dark:bg-gray-900 p-8 pt-20 overflow-auto">
//         {/* Logos */}
//         <div className="flex justify-end flex-wrap shadow-md p-4">
//           <div className="flex items-center">
//             <img src="/images/msme-logo.png" alt="MSME Logo" className="h-16 sm:h-24 w-auto mr-4" />
//             <img src="/images/gem-logo.png" alt="GEM Logo" className="h-16 sm:h-24 w-auto" />
//           </div>
//         </div>

//         {/* Animated Title */}
//         <h1 className="text-center text-3xl font-bold mb-6 text-gray-800">
//           {displayedText}
//         </h1>

//         {/* Carousel & Partners */}
//         <Carousel />
//         <div className="flex justify-center mt-4">
//           <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">
//             Our <span className="text-blue-600">Partners</span>
//           </h1>
//         </div>
//         <Partners />
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }
