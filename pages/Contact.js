// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import { useState } from 'react';

// export default function Example() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     company: '',
//     email: '',
//     message: '',
//   });

//   const [formStatus, setFormStatus] = useState('');

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setFormStatus('Submitting...');
//     try {
//       const response = await fetch('/api/contact', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });
//       if (response.ok) {
//         setFormStatus('Message sent successfully!');
//         setFormData({
//           firstName: '',
//           lastName: '',
//           company: '',
//           email: '',
//           message: '',
//         });
//       } else {
//         setFormStatus('Failed to send the message. Please try again later.');
//       }
//     } catch (error) {
//       setFormStatus('An error occurred. Please try again later.');
//     }
//   };

//   return (
//     <div className="flex flex-col min-h-screen">
//       {/* Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow bg-gray-100 dark:bg-gray-900 px-6 py-12 sm:py-20 mt-5 lg:px-8">
//         <div className="mx-auto max-w-2xl text-center">
//           <h2 className="text-4xl font-semibold tracking-tight sm:text-5xl text-orange-500">
//             Get in Touch
//           </h2>
//           <p className="mt-4 text-lg text-justify text-black dark:text-gray-500 md:pl-12 md:pr-10 lg:pl-12 lg:pr-10">
//             Let's turn ideas into reality together! Whether you're looking to
//             collaborate, have a question, or just want to say hello, I'm always
//             excited to connect. Drop me a message, and let's start a
//             conversation!
//           </p>
//         </div>
//         <form
//           onSubmit={handleSubmit}
//           className="mx-auto mt-8  max-w-xl"
//         >
//           <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
//             {/* First Name */}
//             <div>
//               <label
//                 htmlFor="firstName"
//                 className="block text-sm font-semibold text-balck dark:text-white"
//               >
//                 First name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="firstName"
//                   name="firstName"
//                   type="text"
//                   value={formData.firstName}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Last Name */}
//             <div>
//               <label
//                 htmlFor="lastName"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Last name
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   value={formData.lastName}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Company */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="company"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Company
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="company"
//                   name="company"
//                   type="text"
//                   value={formData.company}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                 />
//               </div>
//             </div>

//             {/* Email */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="email"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Email
//               </label>
//               <div className="mt-2.5">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   value={formData.email}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>

//             {/* Message */}
//             <div className="sm:col-span-2">
//               <label
//                 htmlFor="message"
//                 className="block text-sm font-semibold text-black dark:text-white"
//               >
//                 Message
//               </label>
//               <div className="mt-2.5">
//                 <textarea
//                   id="message"
//                   name="message"
//                   rows={4}
//                   value={formData.message}
//                   onChange={handleChange}
//                   className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-indigo-600"
//                   required
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Submit Button */}
//           <div className="mt-10">
//             <button
//               type="submit"
//               className="block w-full rounded-md bg-indigo-400 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-indigo-600"
//             >
//               Let's talk
//             </button>
//           </div>
//           {/* Status Message */}
//           {formStatus && (
//             <p className="mt-4 text-center text-sm text-gray-500">{formStatus}</p>
//           )}
//         </form>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }


// import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
// import Header from '../components/Header';
// import Head from 'next/head';
// import Footer from '../components/Footer';

// export default function Contact() {
//   return (
//     <div>
//       <Head>
//         <title>B2B Systems and Solutions - Contact Us | Get in Touch with Our B2B Experts</title>
//         <meta
//           name="description"
//           content="Connect with our team for tailored B2B solutions, inquiries, or support. We're here to help your business thrive."
//         />
//         <meta
//           name="keywords"
//           content="B2B contact, business inquiry, get in touch, support, customer service, B2B communication, contact information"
//         />
//         <meta name="author" content="B2B Systems and Solutions" />
//         <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//         <link rel="icon" href="/logo.png" />
//       </Head>
//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
//         <Header />
//       </header>
//       <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md">
//         <div className="flex  items-center justify-center gap-2 py-4 px-4">
//           <img
//             src="/images/msme-logo.png"
//             alt="MSME Logo"
//             className="h-12 w-auto"
//           />
//           <img
//             src="/images/gem-logo.png"
//             alt="GEM Logo"
//             className="h-12 w-auto"
//           />
//         </div>
//       </div>
//       {/* Prevent Overlap */}
//       <div className="pt-32 sm:hidden" />
//       <main className="flex-grow bg-sky-500 lg:p-8  overflow-auto"></main>

//       <div className="container mx-auto px-4 py-12 bg-sky-50">
//         {/* Contact Info Section */}

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
//           {/* Address */}
//           <div className="bg-white shadow-md p-6 border rounded-lg">
//             <FaMapMarkerAlt className="text-blue-500 text-3xl mx-auto mb-2" />
//             <h2 className="font-semibold text-lg">Our Address</h2>
//             <p className="text-gray-600">
//               House# 30, Bye lane# 3, Kalyanpur,
//               Nayanpur Road, Ganeshguri, Guwahati - 781006,
//               Assam.
//             </p>
//           </div>
//           {/* Email */}
//           <div className="bg-white shadow-lg border p-6 rounded-lg">
//             <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-2" />
//             <h2 className="font-semibold text-lg">Email Us</h2>
//             <p className="text-gray-600">infoat symbolb2bss.co.in</p>
//           </div>
//           {/* Phone */}
//           <div className="bg-white shadow-lg border p-6 rounded-lg">
//             <FaPhoneAlt className="text-blue-500 text-3xl mx-auto mb-2" />
//             <h2 className="font-semibold text-lg">Call Us</h2>
//             <p className="text-gray-600">+91-78960-02475</p>
//             <p className="text-gray-600">+91-99547-46451</p>
//           </div>
//         </div>

//         {/* Contact Form & Map */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Google Map */}
//           <div className="rounded-lg overflow-hidden shadow-lg">
//             <iframe
//               className="w-full h-full min-h-[350px]"
//               src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1754683493286!2d91.8001486!3d26.1386783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590056cfac3b%3A0x6acc4ebaa60ada56!2sB2B%20Systems%20%26%20Solutions!5e0!3m2!1sen!2sin!4v1704109801994"
//               allowFullScreen
//               loading="lazy"
//             ></iframe>
//           </div>

//           {/* Contact Form */}
//           <div className="bg-white shadow-lg border p-6 rounded-lg">
//             <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
//             <form>
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <input
//                   type="text"
//                   placeholder="Enter Name"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Enter Email"
//                   className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                 />
//               </div>
//               <input
//                 type="text"
//                 placeholder="Subject"
//                 className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />
//               <textarea
//                 placeholder="Enter Message"
//                 className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
//               ></textarea>
//               <button className="w-full mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
//                 Send Message
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <footer className="bg-white shadow">
//         <Footer />
//       </footer>
//     </div>
//   );
// }
import { useState } from 'react';
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Header from '../components/Header';
import Head from 'next/head';
import Footer from '../components/Footer';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [formStatus, setFormStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus('Submitting...');
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setFormStatus('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        setFormStatus('Failed to send the message. Please try again later.');
      }
    } catch (error) {
      setFormStatus('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <Head>
        <title>B2B Systems and Solutions - Contact Us | Get in Touch with Our B2B Experts</title>
        <meta
          name="description"
          content="Connect with our team for tailored B2B solutions, inquiries, or support. We're here to help your business thrive."
        />
        <meta
          name="keywords"
          content="B2B contact, business inquiry, get in touch, support, customer service, B2B communication, contact information"
        />
        <meta name="author" content="B2B Systems and Solutions" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/logo.png" />
      </Head>
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white shadow z-50">
        <Header />
      </header>
      <div className="sm:hidden fixed top-16 left-0 w-full bg-white z-40 shadow-md">
        <div className="flex items-center justify-center gap-2 py-4 px-4">
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
      <main className="flex-grow bg-sky-500 lg:p-8 overflow-auto"></main>

      <div className="container mx-auto px-4 py-12 bg-sky-50">
        {/* Contact Info Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center mb-12">
          {/* Address */}
          <div className="bg-white shadow-md p-6 border rounded-lg">
            <FaMapMarkerAlt className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Our Address</h2>
            <p className="text-gray-600">
              House No-43,Panchajanya Path, Mathura Nagar(Near Downtown) Guwahati - 781006,
              Assam.
            </p>
          </div>
          {/* Email */}
          {/* <div className="bg-white shadow-lg border p-6 rounded-lg">
            <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Email Us</h2>
            <p className="text-gray-600">helpdesk@b2bss.co.in</p>
            <p className="text-gray-600">info@b2bss.co.in</p>
            <p className="text-gray-600"></p>
          </div> */}
          <div className="bg-white shadow-lg border p-6 rounded-lg">
            <FaEnvelope className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Email Us</h2>
            <a
              href="mailto:helpdesk@b2bss.co.in"
              className="text-gray-600 hover:text-blue-600 block"
            >
              helpdesk@b2bss.co.in
            </a>
            <a
              href="mailto:info@b2bss.co.in"
              className="text-gray-600 hover:text-blue-600 block"
            >
              info@b2bss.co.in
            </a>
          </div>

          {/* Phone */}
          <div className="bg-white shadow-lg border p-6 rounded-lg">
            <FaPhoneAlt className="text-blue-500 text-3xl mx-auto mb-2" />
            <h2 className="font-semibold text-lg">Call Us</h2>
            <p className="text-gray-600">+91-361-350331</p>
            <p className="text-gray-600">+91-7002118723</p>
          </div>
        </div>

        {/* Contact Form & Map */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              className="w-full h-full min-h-[350px]"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1754683493286!2d91.8001486!3d26.1386783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a590056cfac3b%3A0x6acc4ebaa60ada56!2sB2B%20Systems%20%26%20Solutions!5e0!3m2!1sen!2sin!4v1704109801994"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>

          {/* Contact Form */}
          <div className="bg-white shadow-lg border p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter Message"
                className="w-full px-4 py-2 mt-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-none"
              ></textarea>
              <button type="submit" className="w-full mt-4 bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition">
                Send Message
              </button>
            </form>
            {formStatus && <p className="mt-4 text-center text-sm text-gray-500">{formStatus}</p>}
          </div>
        </div>
      </div>
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}
