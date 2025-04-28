// import { useEffect, useState } from 'react';

// export default function Dashboard() {
//   const [contacts, setContacts] = useState([]);

//   useEffect(() => {
//     fetch('/api/contacts')
//       .then(res => res.json())
//       .then(data => setContacts(data.data))
//       .catch(err => console.error(err));
//   }, []);
//   return (
//     <div className="p-6">
//       <h2 className="text-2xl font-bold mb-4">Dashboard - Contact Submissions</h2>
//       <div className="overflow-x-auto">
//         <table className="min-w-full border text-sm">
//           <thead className="bg-gray-200">
//             <tr>
//               <th className="border px-4 py-2">Name</th>
//               <th className="border px-4 py-2">Institute</th>
//               <th className="border px-4 py-2">Department</th>
//               <th className="border px-4 py-2">Research Topic</th>
//               <th className="border px-4 py-2">Phone</th>
//               <th className="border px-4 py-2">Email</th>
//               <th className="border px-4 py-2">Service</th>
//             </tr>
//           </thead>
//           <tbody>
//             {contacts.map((c, index) => (
//               <tr key={index} className="hover:bg-gray-50">
//                 <td className="border px-4 py-2">{c.name}</td>
//                 <td className="border px-4 py-2">{c.institute}</td>
//                 <td className="border px-4 py-2">{c.department || c.otherDepartment}</td>
//                 <td className="border px-4 py-2">{c.researchTopic}</td>
//                 <td className="border px-4 py-2">{c.phone}</td>
//                 <td className="border px-4 py-2">{c.email}</td>
//                 <td className="border px-4 py-2">{c.service || c.otherService}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch('/api/contacts')
      .then(res => res.json())
      .then(data => setContacts(data.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Dashboard - Contact Submissions</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full border text-sm">
          <thead className="bg-gray-200">
            <tr>
              <th className="border px-4 py-2">Name</th>
              <th className="border px-4 py-2">Email</th>
              <th className="border px-4 py-2">Subject</th>
              <th className="border px-4 py-2">Message</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((c, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="border px-4 py-2">{c.name}</td>
                <td className="border px-4 py-2">{c.email}</td>
                <td className="border px-4 py-2">{c.subject}</td>
                <td className="border px-4 py-2">{c.message}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
