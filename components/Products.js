import React, { useState } from "react";

const categories = [
  "Laptop", "AIO PC", "Printers", "CCTV System", "Monitor", "SSD/HDD",
  "Online UPS", "Scanner", "MFM", "Keypad/Mouse", "Server", "Line Interactive UPS"
];

const products = [
  { id: 1, name: "ACER", category: "Laptop", image: "/laptop/acer.png" },
  { id: 2, name: "ASUS", category: "Laptop", image: "/laptop/asus.png" },
  { id: 3, name: "DELL", category: "Laptop", image: "/laptop/dell.png" },
  { id: 4, name: "DELL-", category: "Laptop", image: "/laptop/dell1.png" },
  { id: 5, name: "HP", category: "Laptop", image: "/laptop/hp.png" },
  { id: 6, name: "LENOVO", category: "Laptop", image: "/laptop/lenovo.png" },
  { id: 7, name: "Brother", category: "Printers", image: "/printer/brother.png" },
  { id: 8, name: "Canon", category: "Printers", image: "/printer/canon.png" },
  { id: 9, name: "Epson", category: "Printers", image: "/printer/Epson.png" },
  { id: 10, name: "Hp", category: "Printers", image: "/printer/Hp.png" },
  { id: 11, name: "Hp Desk", category: "Printers", image: "/printer/Hp-Deskjet.png" },
  { id: 12, name: "Hp DeskJet", category: "Printers", image: "/printer/H.png" },
  { id: 13, name: "ACER", category: "Monitor", image: "/monitor/acer.png" },
  { id: 14, name: "DELL", category: "Monitor", image: "/monitor/dell.png" },
  { id: 15, name: "Frontech", category: "Monitor", image: "/monitor/frontech.png" },
  { id: 16, name: "HP", category: "Monitor", image: "/monitor/hp.png" },
  { id: 17, name: "SUMSUNG", category: "Monitor", image: "/monitor/sumsung.png" },
  { id: 18, name: "Zebronics", category: "Monitor", image: "/monitor/zebronics.png" },

  { id: 19, name: "AUK-Computing", category: "Server", image: "/Server/AUK-Computing.png" },
  { id: 20, name: "DELL", category: "Server", image: "/Server/Dell.png" },
  { id: 21, name: "DELL", category: "Server", image: "/Server/Dell-1.png" },
  { id: 22, name: "HP", category: "Server", image: "/Server/HP.png" },
  { id: 23, name: "HPE", category: "Server", image: "/Server/HPE.png" },
  { id: 24, name: "HPE", category: "Server", image: "/Server/HPE-1.png" },

  { id: 25, name: "Brother MFM", category: "MFM", image: "/MFM/Brother.png" },
  { id: 26, name: "Canon MFM", category: "MFM", image: "/MFM/Canon.png" },
  { id: 27, name: "Epson", category: "MFM", image: "/MFM/Epson.png" },
  { id: 28, name: "HP", category: "MFM", image: "/MFM/HP.png" },
  { id: 29, name: "HP", category: "MFM", image: "/MFM/HP-1.png" },
  { id: 30, name: "HP", category: "MFM", image: "/MFM/Sharp.png" },

  { id: 31, name: "Cyberpower", category: "Online UPS", image: "/Online UPS/Cyberpower.png" },
  { id: 32, name: "Cyberpower", category: "Online UPS", image: "/Online UPS/Cyberpower-1.png" },
  { id: 33, name: "Microtek", category: "Online UPS", image: "/Online UPS/Microtek.png" },
  { id: 34, name: "Numeric", category: "Online UPS", image: "/Online UPS/Numeric.png" },
  { id: 35, name: "vertex", category: "Online UPS", image: "/Online UPS/vertex.png" },
  { id: 36, name: "Zebronics", category: "Online UPS", image: "/Online UPS/Zebronics.png" },

  { id: 37, name: "DELL", category: "SSD/HDD", image: "/SSD/dell.png" },
  { id: 38, name: "Hp", category: "SSD/HDD", image: "/SSD/Hp.png" },
  { id: 39, name: "Lexar", category: "SSD/HDD", image: "/SSD/Lexar.png" },
  { id: 40, name: "SAMSUNG", category: "SSD/HDD", image: "/SSD/samsung.png" },
  { id: 41, name: "WD-Green", category: "SSD/HDD", image: "/SSD/WD-Green.png" },
  { id: 42, name: "ZEBRONICS", category: "SSD/HDD", image: "/SSD/ZEBRONICS.png" },

  { id: 43, name: "Acer", category: "AIO PC", image: "/AIO-pc/Acer.png" },
  { id: 44, name: "Asus", category: "AIO PC", image: "/AIO-pc/Asus.png" },
  { id: 45, name: "Hp", category: "AIO PC", image: "/AIO-pc/Hp.png" },
  { id: 46, name: "Hp", category: "AIO PC", image: "/AIO-pc/Hp-1.png" },
  { id: 47, name: "Lenovo", category: "AIO PC", image: "/AIO-pc/Lenovo.png" },
  { id: 48, name: "Samsung", category: "AIO PC", image: "/AIO-pc/sumsung.png" },

  { id: 49, name: "Cyberpower", category: "Line Interactive UPS", image: "/Line Interactive UPS/Cyberpower.png" },
  { id: 50, name: "Cyberpower", category: "Line Interactive UPS", image: "/Line Interactive UPS/Cyberpower-2.png" },
  { id: 51, name: "Lapcare", category: "Line Interactive UPS", image: "/Line Interactive UPS/Lapcare.png" },
  { id: 52, name: "Luminous", category: "Line Interactive UPS", image: "/Line Interactive UPS/Luminous.png" },
  { id: 53, name: "Numeric", category: "Line Interactive UPS", image: "/Line Interactive UPS/Numeric.png" },
  { id: 54, name: "Zebronics", category: "Line Interactive UPS", image: "/Line Interactive UPS/Zebronics.png" },

  { id: 55, name: "CP-Plus", category: "CCTV System", image: "/cctv/cp.png" },
  { id: 56, name: "TP-Link", category: "CCTV System", image: "/cctv/tp-1.png" },
  { id: 57, name: "TP-Link", category: "CCTV System", image: "/cctv/tp.png" },
  { id: 58, name: "Flipco", category: "CCTV System", image: "/cctv/flipco.png" },
  { id: 59, name: "Novicz", category: "CCTV System", image: "/cctv/novicz.png" },
  { id: 60, name: "Prama", category: "CCTV System", image: "/cctv/prama.png" },
  
  { id: 61, name: "DELL", category: "Keypad/Mouse", image: "/keyword/dell-wireless.png" },
  { id: 62, name: "DELL", category: "Keypad/Mouse", image: "/keyword/dell-mouse.png" },
  { id: 63, name: "DELL", category: "Keypad/Mouse", image: "/keyword/dell-mouse-wireless.png" },
  { id: 64, name: "HP", category: "Keypad/Mouse", image: "/keyword/hp-mouse.png" },
  { id: 65, name: "HP", category: "Keypad/Mouse", image: "/keyword/hp-wireless.png" },
  { id: 66, name: "DELL", category: "Keypad/Mouse", image: "/keyword/dell.png" },
  { id: 67, name: "DELL", category: "Scanner", image: "/scanner/dell.png" },
  { id: 68, name: "HP", category: "Scanner", image: "/scanner/hp.png" },
  { id: 69, name: "HP", category: "Scanner", image: "/scanner/hp-1.png" },
  { id: 70, name: "Canon", category: "Scanner", image: "/scanner/canon.png" },
  { id: 71, name: "Brother", category: "Scanner", image: "/scanner/brother.png" },
  { id: 72, name: "Brother", category: "Scanner", image: "/scanner/brother-1.png" },
];
const ProductCard = ({ product }) => (
  <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
    <img
      src={product.image}
      alt={product.name}
      className="w-full h-40 object-contain rounded-md mb-4"
    />
    <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>
    <p className="text-sm text-gray-500 text-center">{product.category}</p>
  </div>
);

const ProductSection = () => {
  const [selectedCategory, setSelectedCategory] = useState("Laptop");

  const filteredProducts = products
    .filter((p) => p.category.toLowerCase() === selectedCategory.toLowerCase())
    .slice(0, 6); // Properly filter first, then slice

  return (
    <section className="px-4 pt-10 lg:pt-20 pb-16 sm:px-6 lg:px-10 bg-sky-50">
      <div className="max-w-7xl mx-auto">
        {/* Centered Header & Dropdown */}
        <div className="flex flex-col items-center justify-center mb-10 gap-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800">Products</h2>
          <select
            onChange={(e) => setSelectedCategory(e.target.value)}
            value={selectedCategory}
            className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {categories.map((cat, index) => (
              <option key={index} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>

        {/* Products Grid */}
        {filteredProducts.length === 0 ? (
          <p className="text-center text-gray-500">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductSection;


// const ProductCard = ({ product }) => (
//   <div className="bg-white rounded-2xl shadow-md p-4 hover:shadow-lg transition">
//     <img
//       src={product.image}
//       alt={product.name}
//       className="w-full h-40 object-contain rounded-md mb-4"
//     />
//     <h3 className="text-lg font-semibold text-gray-800 text-center">{product.name}</h3>
//     <p className="text-sm text-gray-500 text-center">{product.category}</p>
//   </div>
// );

// const ProductSection = () => {
//   const [selectedCategory, setSelectedCategory] = useState("Laptop");

//   const filteredProducts = products
//     .filter((p) => p.category === selectedCategory)
//     .slice(0, 6); // Only show 6 cards

//   return (
//     <section className="px-4 pt-10 lg:pt-20 pb-16 sm:px-6 lg:px-10 bg-sky-50">
//       <div className="max-w-7xl mx-auto">
//         {/* Centered Header & Dropdown */}
//         <div className="flex flex-col items-center justify-center mb-10 gap-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-800">Products</h2>
//           <select
//             onChange={(e) => setSelectedCategory(e.target.value)}
//             value={selectedCategory}
//             className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
//           >
//             {categories.map((cat, index) => (
//               <option key={index} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>

//         {/* Products Grid */}
//         {filteredProducts.length === 0 ? (
//           <p className="text-center text-gray-500">No products found.</p>
//         ) : (
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//             {filteredProducts.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>
//         )}
//       </div>
//     </section>
//   );
// };

// export default ProductSection;
