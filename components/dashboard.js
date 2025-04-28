

// import { useEffect, useState } from 'react';
// import * as XLSX from 'xlsx';

// export default function Dashboard() {
//   const [contacts, setContacts] = useState([]);

//   const fetchContacts = () => {
//     fetch('/api/contacts')
//       .then(res => res.json())
//       .then(data => setContacts(data.data))
//       .catch(err => console.error(err));
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   const handleExport = () => {
//     const exportData = contacts.map(c => ({
//       Name: c.name,
//       Email: c.email,
//       Subject: c.subject,
//       Message: c.message,
//     }));

//     const worksheet = XLSX.utils.json_to_sheet(exportData);
//     const workbook = XLSX.utils.book_new();
//     XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');

//     XLSX.writeFile(workbook, 'contact-submissions.xlsx');
//   };

//   const handleRefresh = () => {
//     fetchContacts();
//   };

//   return (
//     <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
//         <h2 className="text-xl sm:text-2xl font-bold">Dashboard - Contact Submissions</h2>
//         <div className="flex flex-col sm:flex-row gap-2">
//           <button
//             onClick={handleRefresh}
//             className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
//           >
//             Refresh
//           </button>
//           <button
//             onClick={handleExport}
//             className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm sm:text-base"
//           >
//             Export to Excel
//           </button>
//         </div>
//       </div>

//       <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-lg">
//         <table className="min-w-full text-sm border-collapse">
//           <thead className="bg-gray-200 dark:bg-gray-700">
//             <tr>
//               <th className="border px-4 py-2 text-left">Name</th>
//               <th className="border px-4 py-2 text-left">Email</th>
//               <th className="border px-4 py-2 text-left">Subject</th>
//               <th className="border px-4 py-2 text-left">Message</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((c, index) => (
//               <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
//                 <td className="border px-4 py-2">{c.name}</td>
//                 <td className="border px-4 py-2 text-blue-600 underline">
//                   <a href={`mailto:${c.email}`} target="_blank" rel="noopener noreferrer">
//                     {c.email}
//                   </a>
//                 </td>
//                 <td className="border px-4 py-2">{c.subject}</td>
//                 <td className="border px-4 py-2">{c.message}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';
import * as XLSX from 'xlsx';

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = () => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data.data))
      .catch(err => console.error(err));
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  const handleExport = () => {
    const exportData = contacts.map(c => ({
      Name: c.name,
      Email: c.email,
      Subject: c.subject,
      Message: c.message,
      Date: new Date(c.createdAt).toLocaleString(),
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Contacts');

    XLSX.writeFile(workbook, 'contact-submissions.xlsx');
  };

  const handleRefresh = () => {
    fetchContacts();
  };

  return (
    <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 bg-gray-100 dark:bg-gray-900 min-h-screen text-black dark:text-white">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">Dashboard - Contact Submissions</h2>
        <div className="flex flex-col sm:flex-row gap-2">
          <button
            onClick={handleRefresh}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 text-sm sm:text-base"
          >
            Refresh
          </button>
          <button
            onClick={handleExport}
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 text-sm sm:text-base"
          >
            Export to Excel
          </button>
        </div>
      </div>

      <div className="overflow-x-auto bg-white dark:bg-gray-800 shadow rounded-lg">
        <table className="min-w-full text-sm border-collapse">
          <thead className="bg-gray-200 dark:bg-gray-700">
            <tr>
              <th className="border px-4 py-2 text-left">Name</th>
              <th className="border px-4 py-2 text-left">Email</th>
              <th className="border px-4 py-2 text-left">Subject</th>
              <th className="border px-4 py-2 text-left">Message</th>
              <th className="border px-4 py-2 text-left">Date</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, index) => (
              <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2 text-blue-600 underline">
                  <a href={`mailto:${c.email}`} target="_blank" rel="noopener noreferrer">
                    {c.email}
                  </a>
                </td>
                <td className="border px-4 py-2">{c.subject}</td>
                <td className="border px-4 py-2">{c.message}</td>
                <td className="border px-4 py-2">
                  {c.createdAt ? new Date(c.createdAt).toLocaleString() : 'N/A'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
