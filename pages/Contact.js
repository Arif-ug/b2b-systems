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
            <p className="text-gray-600">+91-361-3503331</p>
            <p className="text-gray-600">+91-7002118723</p>
            <p className="text-gray-600">+91-7896002475</p>
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
