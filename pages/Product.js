import Header from "../components/Header";
import Product from "../components/Products"
import Footer from "../components/Footer";
import Head from "next/head";
export default function Contact() {
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
      <main className=" bg-sky-50 min-h-screen  items-center justify-center  bg-orange-50 ">
        <Product/>
      </main>
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
}