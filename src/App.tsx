/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ecosystem from './components/Ecosystem';
import News from './components/News';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LoadingScreen from './components/LoadingScreen';
import { LanguageProvider } from './contexts/LanguageContext';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white dark:bg-[#1a1a1a] font-sans text-[#45494A] dark:text-gray-200 transition-colors duration-300">
        <AnimatePresence mode="wait">
          {isLoading ? (
            <LoadingScreen key="loading" />
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Navbar />
              <main>
                <Hero />
                <Ecosystem />
                <News />
              </main>
              <Footer />
              <ScrollToTop />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </LanguageProvider>
  );
}
