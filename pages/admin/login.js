// import { useState } from 'react';
// import { useRouter } from 'next/router';
// import Head from 'next/head';
// import Header from '../../components/Header';
// import Footer from '../../components/Footer';

// export default function AdminLogin() {
//   const router = useRouter();
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     const res = await fetch('/api/admin/login', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({ email, password })
//     });

//     const data = await res.json();

//     if (res.ok) {
//       localStorage.setItem('token', data.token);
//       router.push('/admin/dashboard');
//     } else {
//       setError(data.message || 'Invalid credentials');
//     }
//   };

//   return (
//     <div className="bg-gray-100 text-black dark:text-white dark:bg-gray-900 min-h-screen flex flex-col">
//       <Head>
//         <title>Admin Login | B2B System and solutions</title>
//       </Head>

//       {/* Fixed Header */}
//       <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
//         <Header />
//       </header>

//       {/* Main Content */}
//       <main className="flex-grow px-4 md:px-8 overflow-hidden container mx-auto pt-10 bg-sky-50">
//         <div className="flex flex-col pt-36 lg:pt-0 md:flex-row min-h-[calc(100vh-6rem)] rounded-lg shadow-lg overflow-hidden">
//           {/* Left: Login Form */}
//           <div className="w-full md:w-1/2 flex items-center justify-center bg-sky-50 dark:bg-gray-900 p-6 md:p-12">
//             <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-md w-full max-w-md">
//               <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Admin Login</h2>
//               {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
//               <input
//                 type="email"
//                 placeholder="Email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 required
//                 className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
//               />
//               <input
//                 type="password"
//                 placeholder="Password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 required
//                 className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
//               />
//               <button
//                 type="submit"
//                 className="w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition"
//               >
//                 Login
//               </button>
//             </form>
//           </div>

//           {/* Right: Responsive Image */}
//           <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200 dark:bg-gray-800">
//             <div className="w-full h-full">
//               <img
//                 src="/images/login-page.jpg"
//                 alt="Admin Illustration"
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>
//       </main>

//       {/* Footer */}
//       <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
//         <Footer />
//       </footer>
//     </div>
//   );
// }
import { useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function AdminLogin() {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // new loading state

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError('');

    try {
      const res = await fetch('/api/admin/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        router.push('/admin/dashboard');
      } else {
        setError(data.message || 'Invalid credentials');
      }
    } catch (err) {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <div className="bg-gray-100 text-black dark:text-white dark:bg-gray-900 min-h-screen flex flex-col">
      <Head>
        <title>Admin Login | B2B System and Solutions</title>
      </Head>

      {/* Fixed Header */}
      <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
        <Header />
      </header>

      {/* Main Content */}
      <main className="flex-grow px-4 md:px-8 overflow-hidden container mx-auto pt-10 bg-sky-50">
        <div className="flex flex-col pt-36 lg:pt-0 md:flex-row min-h-[calc(100vh-6rem)] rounded-lg shadow-lg overflow-hidden">
          {/* Left: Login Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center bg-sky-50 dark:bg-gray-900 p-6 md:p-12">
            <form onSubmit={handleLogin} className="bg-white dark:bg-gray-800 p-6 md:p-10 rounded-lg shadow-md w-full max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-center text-orange-500">Admin Login</h2>
              {error && <p className="text-red-500 mb-4 text-sm text-center">{error}</p>}
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full p-3 mb-4 border border-gray-300 dark:border-gray-600 rounded dark:bg-gray-700 dark:text-white"
              />

              <button
                type="submit"
                disabled={loading}
                className={`w-full flex items-center justify-center bg-orange-500 text-white py-2 rounded hover:bg-orange-600 transition ${
                  loading ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {loading ? (
                  <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                ) : (
                  'Login'
                )}
              </button>
            </form>
          </div>

          {/* Right: Image */}
          <div className="w-full md:w-1/2 hidden md:flex items-center justify-center bg-gray-200 dark:bg-gray-800">
            <div className="w-full h-full">
              <img
                src="/images/login-page.jpg"
                alt="Admin Illustration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
        <Footer />
      </footer>
    </div>
  );
}
