import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Board from "../../components/dashboard";
export default function Dashboard() {
  const [isAuthorized, setIsAuthorized] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/admin/login');
    } else {
      setIsAuthorized(true);
    }
  }, []);

  if (!isAuthorized) return null;

  return (
    <div className="bg-gray-100 text-black dark:text-white dark:bg-gray-900 min-h-screen flex flex-col">
          <Head>
            <title>B2B Systems and solutions</title>
            <meta name="description" content="Discover the core objectives of Innovate360, empowering engineers with innovative projects and academic excellence." />
            <meta name="keywords" content="Innovate360, engineering projects, academic excellence, research, IoT, Machine Learning, Web Development" />
            <meta name="author" content="Innovate360 Team" />
            <meta name="description" content="Explore various project fields at Innovate360" />
            <link rel="icon" href="/images/logo.png"/>
          </Head>
          {/* Fixed Header */}
          <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-800 shadow z-50">
            <Header />
          </header>
          {/* Main Content */}
          <main className="flex-grow p-8  overflow-auto container mx-auto">
            <h2 className="text-3xl font-bold text-center mb-6 text-gray-800 text-orange-500 dark:text-white">Dashboard</h2>
            <Board />
          </main>

    
          
          {/* Footer */}
          <footer className="bg-white dark:bg-gray-800 shadow">
            <Footer />
          </footer>
        </div>

    // <div className="p-6">
    //   <h1 className="text-2xl font-bold text-orange-500">Admin Dashboard</h1>
    //   {/* Add your dashboard data table or controls here */}
    //   <Board />

    // </div>
  );
}
