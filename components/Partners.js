import Image from 'next/image';
import Head from 'next/head'; 
import { useState } from 'react';

const Partners = () => {
    const allPartners = [
        { name: 'HP', image: '/hp-1.png', link: 'https://www.hp.com/' },
        { name: 'IBM', image: '/images/ibm-logo.png', link: 'https://www.ibm.com/' },
        { name: 'Acer', image: '/partners/Acer.png', link: 'https://www.acer.com/' },
        { name: 'HCL', image: '/images/hcl.png', link: 'https://www.hcltech.com/' },
        { name: 'Lenovo', image: '/partners/Lenovo.png', link: 'https://www.lenovo.com/' },
        { name: 'Dell', image: '/partners/Dell.png', link: 'https://www.dell.com/' },
        { name: 'Huawei', image: '/partners/Huawei.png', link: 'https://www.huawei.com/' },
        { name: 'D-Link', image: '/partners/D-Link.png', link: 'https://www.dlink.com/' },
        { name: 'Tyco', image: '/partners/Tyco.png', link: '' },
        { name: 'Epson', image: '/partners/Epson.png', link: 'https://www.epson.com/' },
        { name: 'Samsung', image: '/partners/Sumsung.png', link: 'https://www.samsung.com/' },
        { name: 'AUK Computing', image: '/partners/avk.png', link: 'https://aukcomputing.com/' },
        { name: 'Canon', image: '/partners/canon.png', link: 'https://www.canon.com/' },
        { name: 'Delta', image: '/partners/Delta.png', link: 'https://www.delta.com/' },
        { name: 'Ricoh', image: '/partners/Ricoh.png', link: 'https://www.ricoh.com/' },
        { name: 'Vertiv', image: '/partners/Vertiv.png', link: 'https://www.vertiv.com/' },
        { name: 'Sharp', image: '/partners/Sharp.png', link: 'https://www.sharpusa.com/' },
        { name: 'Hitachi', image: '/partners/Hitachi.png', link: 'https://www.hitachi.com/' },
        { name: 'Toshiba', image: '/partners/Toshiba.png', link: 'https://www.toshiba.com/' },
        { name: 'APC', image: '/partners/APC.png', link: 'https://www.apc.com/' },
        { name: 'Cyberpower', image: '/partners/cyber.png', link: 'https://www.cyberpowersystems.com/' },
        { name: 'Orion', image: '/partners/Orion.png', link: '' },
        { name: 'Microsoft', image: '/partners/Microsoft.png', link: 'https://www.microsoft.com/' },
        { name: 'Panasonic', image: '/partners/panasonic.png', link: 'https://www.panasonic.com/' },
        { name: 'Brothers', image: '/partners/Brother.png', link: '' },
        { name: 'Hewlett', image: '/partners/Hewlett.png', link: 'https://www.hpe.com/us/en/home.html' },
        { name: 'Cisco', image: '/partners/cisco.png', link: 'https://www.cisco.com/' },
        { name: 'Kyocera', image: '/partners/kyocera.png', link: 'https://global.kyocera.com/' },
        { name: 'Quick Heal', image: '/partners/quick-hell.png', link: 'https://www.quickheal.co.in/?srsltid=AfmBOoqXLchAGNrn72bi3ia864QE1yYiQxzVsUSF1-JqyJYtpCWRPT_Q' },
        { name: 'Sophos', image: '/partners/sophos.png', link: 'https://www.sophos.com/en-us' },
        { name: 'Honeywell', image: '/partners/honeywell.png', link: 'https://www.honeywell.com/us/en' },
        { name: 'TATA', image: '/partners/tata.png', link: 'https://www.tatamotors.com/' },
        { name: 'ViewSonic', image: '/partners/viewsonic.png', link: 'https://www.viewsonic.com/us/?srsltid=AfmBOoob7U51dRQ3Fqhs2LPXy9KqXkZq7OPE2pWLZiQ1AVJ7z5AtvXXs' },
    ];
    
    const partnersPerRow = 5;

    const initialRows = 2;
    const [visibleRows, setVisibleRows] = useState(initialRows);
    const visiblePartners = allPartners.slice(0, visibleRows * partnersPerRow);
    const showMore = visibleRows * partnersPerRow < allPartners.length;

    const handleShowMore = () => {
        setVisibleRows(visibleRows + 1);
    };

    return (
        <div>
            <Head>
                <title>B2B Systems and Solutions - Home - IT & Hardware Solutions | Smart Admin Tools for Modern Businesses</title>
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
            {/* <div className="flex flex-wrap justify-center bg-cyan-400"> */}
            <div className="flex flex-wrap justify-center bg-sky-50">
                {visiblePartners.map((partner, index) => (
                    <div key={index} className="w-1/2 sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 flex flex-col items-center">
                        <div className="w-32 h-32 flex items-center justify-center relative mb-2">
                            {partner.image ? (
                                partner.link ? (
                                    <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                        <Image src={partner.image} alt={partner.name} width={128} height={128} className='contain' />
                                    </a>
                                ) : (
                                    <Image src={partner.image} alt={partner.name} width={128} height={128} className='contain' />
                                )
                            ) : (
                                <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
                                    <p className="text-xs text-gray-500">No Image</p>
                                </div>
                            )}
                        </div>
                        <div className="text-center">
                            <p className="text-xs font-bold">{partner.name}</p>
                        </div>
                    </div>
                ))}
            </div>
            {showMore && (
                <div className="text-center mt-4">
                    <button
                        onClick={handleShowMore}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                    >
                        Show More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Partners;


// import Image from 'next/image';
// import { useState } from 'react';

// const Partners = () => {
//     const allPartners = [
//         { name: 'HP', image: '/hp-1.png', link: 'https://www.hp.com/' },
//         { name: 'IBM', image: '/images/ibm-logo.png', link: 'https://www.ibm.com/' },
//         { name: 'EMC2', image: '/images/emc.png', link: '' },
//         { name: 'Acer', image: '/images/acer.png', link: 'https://www.acer.com/' },
//         { name: 'HCL', image: '/images/hcl.png', link: 'https://www.hcltech.com/' },
//         { name: 'Wipro', image: '/images/placeholder.png', link: 'https://www.wipro.com/' },
//         { name: 'Accel Frontline', image: '/images/placeholder.png', link: '' },
//         { name: 'Lenovo', image: '/images/placeholder.png', link: 'https://www.lenovo.com/' },
//     ];
    
//     const partnersPerRow = 5;
//     const initialRows = 2;
//     const [visibleRows, setVisibleRows] = useState(initialRows);
//     const visiblePartners = allPartners.slice(0, visibleRows * partnersPerRow);
//     const showMore = visibleRows * partnersPerRow < allPartners.length;

//     const handleShowMore = () => {
//         setVisibleRows(visibleRows + 1);
//     };

//     return (
//         <div>
//             <div className="flex flex-wrap justify-center bg-cyan-400">
//                 {visiblePartners.map((partner, index) => (
//                     <div key={index} className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2 flex flex-col items-center">
//                         <div className="w-32 h-32 flex items-center justify-center relative mb-2">
//                             {partner.image ? (
//                                 partner.link ? (
//                                     <a href={partner.link} target="_blank" rel="noopener noreferrer">
//                                         <Image src={partner.image} alt={partner.name} width={128} height={128} objectFit="contain" />
//                                     </a>
//                                 ) : (
//                                     <Image src={partner.image} alt={partner.name} width={128} height={128} objectFit="contain" />
//                                 )
//                             ) : (
//                                 <div className="w-32 h-32 bg-gray-200 flex items-center justify-center">
//                                     <p className="text-xs text-gray-500">No Image</p>
//                                 </div>
//                             )}
//                         </div>
//                         <div className="text-center">
//                             <p className="text-xs font-bold">{partner.name}</p>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//             {showMore && (
//                 <div className="text-center mt-4">
//                     <button
//                         onClick={handleShowMore}
//                         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//                     >
//                         Show More
//                     </button>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default Partners;
