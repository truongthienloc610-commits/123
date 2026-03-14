import { Search, ChevronDown, Cloud, Moon, Sun, Cpu, Box, Wrench, BookOpen, Users, PlayCircle, Github, MessageSquare, HelpCircle, FileText, Code, Menu, X, Globe } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { useLanguage, Language } from '../contexts/LanguageContext';

export default function Navbar() {
  const [isDark, setIsDark] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  
  const { language: currentLang, setLanguage: setCurrentLang, t } = useLanguage();

  const languages: { code: Language; name: string }[] = [
    { code: 'EN', name: 'English' },
    { code: 'VI', name: 'Tiếng Việt' },
    { code: 'ES', name: 'Español' },
    { code: 'FR', name: 'Français' },
  ];

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDark(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDark(false);
    }
  }, []);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800 text-[#45494A] dark:text-gray-200 font-sans flex items-center h-[72px] transition-colors duration-300"
    >
      {/* Logo Box */}
      <div className="bg-[#00979C] h-full flex items-center justify-center px-6">
        <svg width="40" height="24" viewBox="0 0 100 60" className="text-white">
          <circle cx="30" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="8" />
          <circle cx="70" cy="30" r="22" fill="none" stroke="currentColor" strokeWidth="8" />
          <rect x="18" y="27" width="24" height="6" fill="currentColor" />
          <rect x="58" y="27" width="24" height="6" fill="currentColor" />
          <rect x="67" y="18" width="6" height="24" fill="currentColor" />
        </svg>
      </div>

      {/* Left Links */}
      <div className="hidden lg:flex items-center gap-8 px-8 font-bold text-[15px]">
        <a href="#" className="hover:text-[#00979C] transition-colors">{t('navPro')}</a>
        <a href="#" className="hover:text-[#00979C] transition-colors">{t('navEdu')}</a>
        <a href="#" className="hover:text-[#00979C] transition-colors">{t('navMakers')}</a>
      </div>

      {/* Spacer */}
      <div className="flex-grow"></div>

      {/* Right Links */}
      <div className="hidden lg:flex items-center gap-6 pr-6 font-bold text-[15px] h-full">
        
        {/* Products Mega Menu */}
        <div className="group h-full flex items-center">
          <a href="#" className="hover:text-[#00979C] flex items-center gap-1.5 transition-colors h-full">
            {t('navProducts')} <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:rotate-180 transition-transform" />
          </a>
          
          <div className="absolute top-[72px] left-0 right-0 w-full bg-[#F4F6F6] dark:bg-[#1e1e1e] shadow-2xl border-b border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex justify-center py-12 cursor-default text-left z-50">
            <div className="flex gap-16 w-full max-w-[1440px] px-8 lg:px-12">
              {/* Left Section (Links) */}
              <div className="flex gap-16 w-[65%]">
                {/* Column 1 */}
                <div className="flex flex-col gap-8 w-1/3">
                  <div>
                    <h3 className="text-[#45494A] dark:text-white font-extrabold text-lg mb-5">{t('navHardware')}</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navBoards')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> VENTUNO Q <span className="text-xs bg-[#E5ECEE] dark:bg-[#2a3f40] text-[#00979C] px-2 py-0.5 rounded-sm">{t('navNew')}</span></a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> UNO Q <span className="text-xs bg-[#E5ECEE] dark:bg-[#2a3f40] text-[#00979C] px-2 py-0.5 rounded-sm">{t('navNew')}</span></a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> UNO</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> GIGA</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> Nano</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> Portenta</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> Nicla</a></li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navRobotics')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Alvik</a></li>
                    </ul>
                  </div>
                </div>

                {/* Column 2 */}
                <div className="flex flex-col gap-8 w-1/3">
                  <div>
                    <h3 className="text-transparent font-extrabold text-lg mb-5 select-none">.</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navIndustrial')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Cpu className="w-5 h-5" /> Opta</a></li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navKits')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Starter Kit R4 <span className="text-xs bg-[#E5ECEE] dark:bg-[#2a3f40] text-[#00979C] px-2 py-0.5 rounded-sm">{t('navNew')}</span></a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Plug & Make Kit</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Science Kit</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Portenta Proto Kit</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> PLC Starter Kit</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Sensor Kit</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Student Kit</a></li>
                    </ul>
                  </div>
                </div>

                {/* Column 3 */}
                <div className="flex flex-col gap-8 w-1/3">
                  <div>
                    <h3 className="text-[#45494A] dark:text-white font-extrabold text-lg mb-5">{t('navSoftware')}</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navCloudTools')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">Arduino App Lab <span className="text-xs bg-[#E5ECEE] dark:bg-[#2a3f40] text-[#00979C] px-2 py-0.5 rounded-sm">{t('navNew')}</span></a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">Arduino Cloud</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">Arduino Cloud Editor</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">Arduino CLI</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">Arduino IDE</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">PLC IDE</a></li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navApp')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">IoT Remote</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3">Science Journal</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Section (Cards) */}
              <div className="w-[35%] flex flex-col gap-6">
                {/* Card 1 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/ide/200/120" alt="IDE" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors">Arduino IDE</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardIdeDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
                {/* Card 2 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/cloudapp/200/120" alt="Cloud" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors">Arduino Cloud</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardCloudDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
                {/* Card 3 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/applab/200/120" alt="App Lab" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors flex items-center gap-2">Arduino App Lab <span className="text-xs bg-[#E5ECEE] dark:bg-[#2a3f40] text-[#00979C] px-2 py-0.5 rounded-sm">{t('navNew')}</span></h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardAppLabDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Community Mega Menu */}
        <div className="group h-full flex items-center">
          <a href="#" className="hover:text-[#00979C] flex items-center gap-1.5 transition-colors h-full">
            {t('navCommunity')} <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:rotate-180 transition-transform" />
          </a>
          
          <div className="absolute top-[72px] left-0 right-0 w-full bg-[#F4F6F6] dark:bg-[#1e1e1e] shadow-2xl border-b border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex justify-center py-12 cursor-default text-left z-50">
            <div className="flex gap-16 w-full max-w-[1440px] px-8 lg:px-12">
              {/* Left Section (Links) */}
              <div className="flex gap-16 w-[65%]">
                <div className="flex flex-col gap-8 w-1/2">
                  <div>
                    <h3 className="text-[#45494A] dark:text-white font-extrabold text-lg mb-5">{t('navCommunity')}</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navConnectShare')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Wrench className="w-5 h-5" /> Project Hub</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Box className="w-5 h-5" /> Arduino Labs</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><MessageSquare className="w-5 h-5" /> Discord</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Users className="w-5 h-5" /> Forum</a></li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-1/2">
                  <div>
                    <h3 className="text-transparent font-extrabold text-lg mb-5 select-none">.</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navDiscover')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><PlayCircle className="w-5 h-5" /> YouTube</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Github className="w-5 h-5" /> GitHub</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><BookOpen className="w-5 h-5" /> Arduino Days</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><FileText className="w-5 h-5" /> Blog</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Section (Cards) */}
              <div className="w-[35%] flex flex-col gap-6">
                {/* Card 1 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/projecthub/200/120" alt="Project Hub" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors">Project Hub</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardHubDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
                {/* Card 2 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/forum/200/120" alt="Forum" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors">Arduino Forum</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardForumDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Documentation Mega Menu */}
        <div className="group h-full flex items-center">
          <a href="#" className="hover:text-[#00979C] flex items-center gap-1.5 transition-colors h-full">
            {t('navDocs')} <ChevronDown className="w-4 h-4 text-gray-500 dark:text-gray-400 group-hover:rotate-180 transition-transform" />
          </a>
          
          <div className="absolute top-[72px] left-0 right-0 w-full bg-[#F4F6F6] dark:bg-[#1e1e1e] shadow-2xl border-b border-gray-200 dark:border-gray-800 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 flex justify-center py-12 cursor-default text-left z-50">
            <div className="flex gap-16 w-full max-w-[1440px] px-8 lg:px-12">
              {/* Left Section (Links) */}
              <div className="flex gap-16 w-[65%]">
                <div className="flex flex-col gap-8 w-1/2">
                  <div>
                    <h3 className="text-[#45494A] dark:text-white font-extrabold text-lg mb-5">{t('navDocs')}</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navLearnBuild')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Code className="w-5 h-5" /> Reference</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><BookOpen className="w-5 h-5" /> Tutorials</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><FileText className="w-5 h-5" /> Built-in Examples</a></li>
                    </ul>
                  </div>
                </div>
                <div className="flex flex-col gap-8 w-1/2">
                  <div>
                    <h3 className="text-transparent font-extrabold text-lg mb-5 select-none">.</h3>
                    <h4 className="text-gray-500 dark:text-gray-400 font-bold text-sm mb-4 border-b border-gray-300 dark:border-gray-700 pb-2">{t('navSupport')}</h4>
                    <ul className="space-y-4 text-base font-semibold">
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><HelpCircle className="w-5 h-5" /> Help Center</a></li>
                      <li><a href="#" className="hover:text-[#00979C] flex items-center gap-3"><Users className="w-5 h-5" /> Community Support</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Right Section (Cards) */}
              <div className="w-[35%] flex flex-col gap-6">
                {/* Card 1 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/tutorials/200/120" alt="Tutorials" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors">Tutorials</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardTutDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
                {/* Card 2 */}
                <a href="#" className="bg-white dark:bg-[#2a2a2a] p-5 rounded-2xl shadow-sm hover:shadow-md transition-shadow flex items-center gap-5 group/card">
                  <div className="w-36 h-24 bg-gray-100 dark:bg-gray-800 rounded-xl flex-shrink-0 overflow-hidden border border-gray-200 dark:border-gray-700">
                     <img src="https://picsum.photos/seed/help/200/120" alt="Help Center" className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-bold text-[#45494A] dark:text-white text-lg mb-1.5 group-hover/card:text-[#00979C] transition-colors">Help Center</h4>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{t('navCardHelpDesc')}</p>
                  </div>
                  <ChevronDown className="w-6 h-6 -rotate-90 text-gray-400 group-hover/card:text-[#00979C] transition-colors" />
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <a href="#" className="bg-[#00979C] text-white px-6 py-1.5 rounded-full hover:bg-[#008185] transition-colors ml-2">
          {t('navShop')}
        </a>
        
        <button className="hover:text-[#00979C] transition-colors ml-2">
          <Search className="w-5 h-5" />
        </button>
        
        <div className="w-px h-6 bg-gray-300 dark:bg-gray-700 mx-2"></div>
        
        <a href="#" className="hover:text-[#00979C] flex items-center gap-2 transition-colors">
          <Cloud className="w-5 h-5 text-[#00979C]" />
          Cloud
        </a>

        <button onClick={toggleTheme} className="hover:text-[#00979C] transition-colors ml-2 text-gray-500 dark:text-gray-400" aria-label="Toggle Dark Mode">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className="relative ml-2">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)} 
            className="flex items-center gap-1 hover:text-[#00979C] transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Select Language"
          >
            <Globe className="w-5 h-5" />
            <span className="text-xs font-bold">{currentLang}</span>
          </button>
          
          {isLangOpen && (
            <div className="absolute right-0 mt-4 w-36 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2 z-50 overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${currentLang === lang.code ? 'text-[#00979C] font-bold bg-gray-50 dark:bg-gray-800/50' : 'text-gray-700 dark:text-gray-300 font-medium'}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Mobile Right Icons */}
      <div className="flex lg:hidden items-center gap-4 pr-4 h-full ml-auto">
        <div className="relative">
          <button 
            onClick={() => setIsLangOpen(!isLangOpen)} 
            className="flex items-center gap-1 hover:text-[#00979C] transition-colors text-gray-500 dark:text-gray-400"
            aria-label="Select Language"
          >
            <Globe className="w-5 h-5" />
          </button>
          
          {isLangOpen && (
            <div className="absolute right-0 mt-4 w-36 bg-white dark:bg-[#2a2a2a] border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl py-2 z-50 overflow-hidden">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => {
                    setCurrentLang(lang.code);
                    setIsLangOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-2.5 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors ${currentLang === lang.code ? 'text-[#00979C] font-bold bg-gray-50 dark:bg-gray-800/50' : 'text-gray-700 dark:text-gray-300 font-medium'}`}
                >
                  {lang.name}
                </button>
              ))}
            </div>
          )}
        </div>
        <button className="hover:text-[#00979C] transition-colors">
          <Search className="w-5 h-5" />
        </button>
        <button onClick={toggleTheme} className="hover:text-[#00979C] transition-colors text-gray-500 dark:text-gray-400" aria-label="Toggle Dark Mode">
          {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="hover:text-[#00979C] transition-colors">
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="absolute top-[72px] left-0 right-0 bg-white dark:bg-[#1a1a1a] border-b border-gray-200 dark:border-gray-800 shadow-xl lg:hidden flex flex-col max-h-[calc(100vh-72px)] overflow-y-auto z-40">
          <div className="flex flex-col p-6 gap-4 font-bold text-[15px]">
            <a href="#" className="py-3 border-b border-gray-100 dark:border-gray-800 hover:text-[#00979C]">{t('navPro')}</a>
            <a href="#" className="py-3 border-b border-gray-100 dark:border-gray-800 hover:text-[#00979C]">{t('navEdu')}</a>
            <a href="#" className="py-3 border-b border-gray-100 dark:border-gray-800 hover:text-[#00979C]">{t('navMakers')}</a>
            
            <div className="py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span>{t('navProducts')}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <div className="py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span>{t('navCommunity')}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            <div className="py-3 border-b border-gray-100 dark:border-gray-800">
              <div className="flex items-center justify-between">
                <span>{t('navDocs')}</span>
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
            
            <a href="#" className="py-3 flex items-center gap-2 hover:text-[#00979C]">
              <Cloud className="w-5 h-5 text-[#00979C]" />
              Cloud
            </a>
            <a href="#" className="bg-[#00979C] text-white px-6 py-3 rounded-full hover:bg-[#008185] transition-colors text-center mt-4">
              {t('navShop')}
            </a>
          </div>
        </div>
      )}
    </motion.nav>
  );
}
