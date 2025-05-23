import React, { useState } from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Case from "/components/CaseStudies";

const Clients = () => {
  const categories = [
  {
    title: "Defense & Security",
    clients: [
      {
        name: "Indian Army",
        image: "/images/indian-army.png",
        backContent: "The Indian Army is the land-based branch and the largest component of the Indian Armed Forces.",
      },
      {
        name: "Indian Air Force",
        image: "/images/air-force.png",
        backContent: "The Indian Air Force is the air arm of the Indian Armed Forces, responsible for aerial defense.",
      },
      {
        name: "Assam Police",
        image: "/images/assam-police.png",
        backContent: "Assam Police is the law enforcement agency for the state of Assam in India.",
      },
    ],
  },
  {
    title: "Educational Institutions",
    clients: [
      {
        name: "Jorhat Engineering College, Jorhat",
        image: "/images/jec.jpeg",
        backContent: "Jorhat Engineering College is one of the premier technical institutes in Assam, India.",
      },
      {
        name: "Institute of Co-operative Management, Guwahati",
        image: "/images/ncct.png",
        backContent: "ICM Guwahati provides management training and education with a focus on cooperative organizations.",
      },
      {
        name: "Indian Institute of Technology, Guwahati",
        image: "/images/IITG_logo.png",
        backContent: "IIT Guwahati is a prestigious institution recognized globally for excellence in engineering and research.",
      },
      {
        name: "National Institute of Technology",
        image: "/images/NIT.png",
        backContent: "NITs are premier public technical universities in India known for engineering and technology education.",
      },
      {
        name: "Indian Institute of Bank Management",
        image: "/images/iibb.png",
        backContent: "IIBM Guwahati offers advanced training, education, and research in banking and financial services.",
      },
      {
        name: "Assam Engineering College, Guwahati",
        image: "/images/aek.png",
        backContent: "Assam Engineering College is one of the oldest engineering colleges in Northeast India, established in 1955.",
      },
      {
        name: "Assam Engineering Institute, Guwahati.",
        image: "/images/aei.png",
        backContent: "Assam Engineering Institute offers diploma courses in various branches of engineering and technology.",
      },
    ],
  },
  {
    title: "Banking & Finance",
    clients: [
      {
        name: "Indian Overseas Bank, Regional Office, Guwahati",
        image: "/images/iob.png",
        backContent: "Indian Overseas Bank is a major public sector bank providing a wide range of banking services.",
      },
      {
        name: "Finance Department, Govt. of Assam",
        image: "/images/Finance Department Assam.png",
        backContent: "The Finance Department oversees state budgeting, financial management, and fiscal policies for Assam.",
      },
    ],
  },
  {
    title: "Government & Public Sector",
    clients: [
      {
        name: "Employee's Provident Fund Organisation, Guwahati",
        image: "/images/Emlpoyees provident fund.png",
        backContent: "EPFO is a government body that manages provident funds and pension schemes for Indian employees.",
      },
      {
        name: "Guwahati High Court",
        image: "/images/GHC.png",
        backContent: "The Gauhati High Court has jurisdiction over several northeastern states of India.",
      },
      {
        name: "Central Silk Board",
        image: "/images/Cental Silk Board.png",
        backContent: "The Central Silk Board promotes the development of the silk industry in India through research and policy.",
      },
    ],
  },
  {
    title: "Industry & Business",
    clients: [
      {
        name: "Bureau of Indian Standard, Guwahati Branch",
        image: "/images/Bereaue of india.png",
        backContent: "BIS is the national standard body of India ensuring quality and safety standards across industries.",
      },
      {
        name: "Khadi and Village Industries Commission, Guwahati",
        image: "/images/Khadi india.png",
        backContent: "KVIC promotes rural entrepreneurship and the production of khadi and other village industries' products.",
      },
      {
        name: "Rural Electrification Corporation Limited, Guwahati",
        image: "/images/REC.png",
        backContent: "REC is a leading public infrastructure finance company in India's power sector.",
      },
      {
        name: "North Eastern Electric Power Corporation Limited (NEEPCO)",
        image: "/images/neepco.png",
        backContent: "NEEPCO generates electric power from hydro, natural gas, and renewable energy sources in Northeast India.",
      },
    ],
  },
  {
    title: "Telecommunication & IT",
    clients: [
      {
        name: "Assam Electronics Development Corporation Limited (AMTRON)",
        image: "/images/amtron.png",
        backContent: "AMTRON is a government-owned corporation driving IT development and e-Governance in Assam.",
      },
      {
        name: "Bharat Sanchar Nigam Limited (BSNL)",
        image: "/images/bsnl.png",
        backContent: "BSNL is a government-owned telecommunications service provider offering services across India.",
      },
    ],
  },
];
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>B2B Systems and Solutions - Profile | Trusted B2B Partnerships Across Industries</title>
        <meta
          name="description"
          content="Explore our diverse portfolio and trusted client base spanning multiple industries. Discover why businesses choose our B2B solutions."
        />
        <meta
          name="keywords"
          content="B2B clients, client portfolio, business profiles, partnerships, trusted companies, industry clients, client showcase"
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

      {/* Main Content */}
      <main className="flex-grow overflow-auto  ">
        <Case/>
       <div className="container mx-auto px-4 bg-sky-50 shadow-lg rounded-lg p-6">
          <h1 className="text-4xl font-bold text-center mb-10 text-gray-800">Our Valued Clients</h1>
          {categories.map((category, catIndex) => (
            <div key={catIndex} className="mb-12">
              <h2 className="text-3xl font-bold text-center mb-6 text-blue-600">{category.title}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {category.clients.map((client, index) => (
                  <FlippingCard key={index} client={client} />
                ))}
              </div>
            </div>
          ))}
        </div> 
        

      </main>
      {/* Footer */}
      <footer className="bg-white shadow">
        <Footer />
      </footer>
    </div>
  );
};

// 🃏 Flipping Card Component
const FlippingCard = ({ client }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div
      className="relative w-full h-64 group cursor-pointer"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      {/* Card Wrapper */}
      <div
        className={`relative w-full h-full transition-transform duration-500 transform ${isFlipped ? "rotate-y-180" : ""}`}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Side - Image */}
        <div className="absolute w-full h-full bg-white-50 shadow-lg rounded-lg overflow-hidden flex items-center justify-center backface-hidden">
          <Image
            src={client.image}
            alt={client.name}
            width={250}
            height={250}
            className="w-full h-full contain px-6 py-2"
          />
        </div>

        {/* Back Side - Content */}
        <div className="absolute w-full h-full bg-white-100 shadow-lg rounded-lg flex items-center justify-center p-4 transform rotate-y-180 backface-hidden">
          <p className="text-gray-700 text-center font-semibold">{client.backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default Clients;


// import React from "react";

// const TrustedCompanies = () => {
//   const companies = [
//     { name: "HP", logo: "/hp-1.png" },
//     { name: "IBM", logo: "/images/ibm-logo.png" },
//     { name: "EMC2", logo: "/logos/emc2.png" },
//     { name: "Acer", logo: "/logos/acer.png" },
//     { name: "HCL", logo: "/logos/hcl.png" },
//     { name: "Wipro", logo: "/logos/wipro.png" },
//     { name: "Accel Frontline", logo: "/logos/accel-frontline.png" },
//     { name: "Lenovo", logo: "/logos/lenovo.png" },
//     { name: "Dell", logo: "/logos/dell.png" },
//     { name: "Unify (Formerly Siemens India Ltd.)", logo: "/logos/unify.png" },
//     { name: "AGC", logo: "/logos/agc.png" },
//     { name: "Polycom", logo: "/logos/polycom.png" },
//     { name: "Cisco", logo: "/logos/cisco.png" },
//     { name: "Huawei", logo: "/logos/huawei.png" },
//     { name: "D-Link", logo: "/logos/dlink.png" },
//     { name: "Tyco", logo: "/logos/tyco.png" },
//     { name: "Epson", logo: "/logos/epson.png" },
//     { name: "Samsung", logo: "/logos/samsung.png" },
//     { name: "Brothers", logo: "/logos/brothers.png" },
//     { name: "Lipi", logo: "/logos/lipi.png" },
//     { name: "Canon", logo: "/logos/canon.png" },
//     { name: "Ricoh", logo: "/logos/ricoh.png" },
//     { name: "Benq", logo: "/logos/benq.png" },
//     { name: "Panasonic", logo: "/logos/panasonic.png" },
//     { name: "Sharp", logo: "/logos/sharp.png" },
//     { name: "Hitachi", logo: "/logos/hitachi.png" },
//     { name: "Toshiba", logo: "/logos/toshiba.png" },
//     { name: "Numeric", logo: "/logos/numeric.png" },
//     { name: "APC", logo: "/logos/apc.png" },
//     { name: "Orion", logo: "/logos/orion.png" },
//     { name: "Microsoft", logo: "/logos/microsoft.png" },
//   ];

//   return (
//     <div className="py-10 bg-gray-100">
//       <h2 className="text-center text-2xl font-semibold mb-6">Trusted by Top Companies</h2>
//       <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 px-4">
//         {companies.map((company, index) => (
//           <div key={index} className="flex justify-center">
//             <img src={company.logo} alt={company.name} className="h-16 object-contain" />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TrustedCompanies;
