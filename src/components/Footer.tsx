import { Globe, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export default function Footer() {
  const [isLangOpen, setIsLangOpen] = useState(false);
  const { language: currentLang, setLanguage: setCurrentLang, t } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'VI', name: 'Tiếng Việt' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
  ];

  return (
    <footer className="bg-[#25282A] text-white pt-20 pb-10 font-sans overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-12 mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="col-span-2 lg:col-span-2 pr-8"
          >
            <div className="flex items-center mb-6">
              <svg width="40" height="24" viewBox="0 0 100 60" className="text-[#00979C] mr-2">
                <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="8" />
                <circle cx="70" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="8" />
                <rect x="18" y="27" width="24" height="6" fill="currentColor" />
                <rect x="58" y="27" width="24" height="6" fill="currentColor" />
                <rect x="67" y="18" width="6" height="24" fill="currentColor" />
              </svg>
              <span className="text-[#00979C] font-extrabold text-2xl tracking-tighter">
                ARDUINO
              </span>
            </div>
            <div className="relative w-max">
              <button 
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 text-gray-400 hover:text-white cursor-pointer transition-colors border border-gray-600 rounded-md px-3 py-1.5"
              >
                <Globe className="w-4 h-4" />
                <span className="text-xs font-bold">{languages.find(l => l.code === currentLang)?.name || 'English'}</span>
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
              
              {isLangOpen && (
                <div className="absolute left-0 bottom-full mb-2 w-36 bg-[#333638] border border-gray-600 rounded-lg shadow-xl py-2 z-50 overflow-hidden">
                  {languages.map((lang) => (
                    <button
                      key={lang.code}
                      onClick={() => {
                        setCurrentLang(lang.code);
                        setIsLangOpen(false);
                      }}
                      className={`block w-full text-left px-4 py-2 text-sm hover:bg-[#45494A] transition-colors ${currentLang === lang.code ? 'text-[#00979C] font-bold' : 'text-gray-300'}`}
                    >
                      {lang.name}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-bold mb-6 text-sm tracking-widest text-gray-400">{t('footerProducts')}</h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerHardware')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerSoftware')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerCloud')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerApp')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerShop')}</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-bold mb-6 text-sm tracking-widest text-gray-400">{t('footerSolutions')}</h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerPro')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerEdu')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerMakers')}</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h4 className="font-bold mb-6 text-sm tracking-widest text-gray-400">{t('footerCommunity')}</h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerProjectHub')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerLabs')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerDiscord')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerForum')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerYouTube')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerGitHub')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerArduinoDays')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerBlog')}</a></li>
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <h4 className="font-bold mb-6 text-sm tracking-widest text-gray-400">{t('footerAbout')}</h4>
            <ul className="space-y-3 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerAboutArd')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerCareers')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerContact')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerDocs')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerHelp')}</a></li>
              <li><a href="#" className="hover:text-[#00979C] transition-colors">{t('footerAskSupport')}</a></li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400"
        >
          <p>&copy; {new Date().getFullYear()} Arduino. {t('footerRights')}</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">{t('footerTrademarks')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footerWhistle')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footerDSA')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footerTOS')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footerPrivacy')}</a>
            <a href="#" className="hover:text-white transition-colors">{t('footerSecurity')}</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
