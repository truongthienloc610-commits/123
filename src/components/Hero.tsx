import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col w-full font-sans">
      
      {/* Main Hero: VENTUNO Q */}
      <section className="relative bg-[#F7F8F9] dark:bg-[#121212] overflow-hidden border-b border-gray-200 dark:border-gray-800 min-h-[600px] flex items-center transition-colors duration-300">
        {/* YouTube Video Background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 bg-black">
          <iframe
            src="https://www.youtube.com/embed/QxPBCBX8ac8?autoplay=1&mute=1&loop=1&playlist=QxPBCBX8ac8&controls=0&showinfo=0&rel=0&disablekb=1&playsinline=1"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[max(100vw,1067px,177.77vh)] h-[max(56.25vw,600px,100vh)] max-w-none opacity-90 pointer-events-none"
            allow="autoplay; encrypted-media"
            frameBorder="0"
          ></iframe>
          {/* Gradient Overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F7F8F9] via-[#F7F8F9]/80 to-transparent dark:from-[#121212] dark:via-[#121212]/80 dark:to-transparent transition-colors duration-300"></div>
        </div>
        
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-28 flex flex-col md:flex-row items-center w-full">
          <div className="md:w-1/2 md:pr-12">
            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-5xl md:text-7xl font-extrabold text-[#45494A] dark:text-white tracking-tight mb-6 leading-tight transition-colors duration-300"
            >
              {t('heroTitle1')}<br/>{t('heroTitle2')}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="text-xl text-gray-800 dark:text-gray-200 font-medium mb-10 max-w-lg leading-relaxed transition-colors duration-300"
            >
              {t('heroDesc')}
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="flex flex-wrap gap-4 mt-8"
            >
              <button className="bg-[#00979C] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#008185] transition-colors shadow-md">
                {t('discoverMore')}
              </button>
              <button className="bg-white dark:bg-transparent text-[#00979C] border-2 border-[#00979C] px-8 py-3.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#00979C] hover:text-white transition-colors shadow-sm">
                {t('buyNow')}
              </button>
            </motion.div>
          </div>
          <div className="md:w-1/2 mt-16 md:mt-0 relative w-full flex justify-center">
            {/* Empty right side so the video background is fully visible */}
          </div>
        </div>
      </section>

      {/* 3 Column Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 w-full min-h-[550px]">
        
        {/* Column 1: Starter Kit */}
        <motion.div 
          className="bg-[#F2F4F5] dark:bg-[#1e1e1e] flex flex-col items-center text-center pt-16 pb-12 px-8 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <h2 className="text-[#45494A] dark:text-white text-[32px] font-bold mb-3 transition-colors duration-300">{t('heroCard1Title')}</h2>
          <p className="text-[#45494A] dark:text-gray-300 text-[17px] mb-12 transition-colors duration-300">{t('heroCard1Desc')}</p>
          <div className="flex-grow flex items-center justify-center mb-12 w-full">
            <img 
              src="https://store.arduino.cc/cdn/shop/files/AKX00080_00.front_934b415a-9b4d-4e2b-b60b-22b647c0a91f.jpg?v=1708682121&width=600" 
              alt={t('heroCard1Title')} 
              className="w-full max-w-[280px] object-contain mix-blend-multiply dark:mix-blend-normal drop-shadow-xl hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/kit/400/300' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="border border-[#45494A] dark:border-gray-300 text-[#45494A] dark:text-gray-300 font-bold text-[13px] tracking-widest px-6 py-3 rounded-full hover:bg-[#45494A] hover:text-white dark:hover:bg-gray-300 dark:hover:text-[#1e1e1e] transition-colors">
            {t('heroCard1Btn')}
          </button>
        </motion.div>

        {/* Column 2: UNO Q */}
        <motion.div 
          className="bg-[#333333] dark:bg-[#121212] flex flex-col items-center text-center pt-16 pb-12 px-8 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
        >
          <h2 className="text-white text-[32px] font-bold mb-3">{t('heroCard2Title')}</h2>
          <p className="text-white text-[17px] mb-12">{t('heroCard2Desc')}</p>
          <div className="flex-grow flex items-center justify-center mb-12 w-full">
            <img 
              src="https://store.arduino.cc/cdn/shop/files/ABX00111_00.front.jpg?v=1738766150&width=600" 
              alt={t('heroCard2Title')} 
              className="w-full max-w-[280px] object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/unoq/400/300' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="border border-white text-white font-bold text-[13px] tracking-widest px-8 py-3 rounded-full hover:bg-white hover:text-[#333333] dark:hover:text-[#121212] transition-colors">
            {t('heroCard2Btn')}
          </button>
        </motion.div>

        {/* Column 3: Cloud */}
        <motion.div 
          className="bg-[#E5ECEE] dark:bg-[#1a2b2c] flex flex-col items-center text-center pt-16 pb-12 px-8 transition-colors duration-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
        >
          <h2 className="text-[#00979C] text-[32px] font-bold mb-3">{t('heroCard3Title')}</h2>
          <p className="text-[#00979C] text-[17px] mb-12">{t('heroCard3Desc')}</p>
          <div className="flex-grow flex items-center justify-center mb-12 w-full">
            <img 
              src="https://cloud.arduino.cc/static/f5104886b627192209774619a93010b9/63840/cloud-dashboard.png" 
              alt={t('heroCard3Title')} 
              className="w-full max-w-[320px] object-contain mix-blend-multiply dark:mix-blend-normal drop-shadow-xl hover:scale-105 transition-transform duration-500"
              onError={(e) => { e.currentTarget.src = 'https://picsum.photos/seed/cloud/400/300' }}
              referrerPolicy="no-referrer"
            />
          </div>
          <button className="border border-[#00979C] text-[#00979C] font-bold text-[13px] tracking-widest px-6 py-3 rounded-full hover:bg-[#00979C] hover:text-white transition-colors">
            {t('heroCard3Btn')}
          </button>
        </motion.div>

      </div>
      
      {/* Decorative Banner below hero */}
      <motion.div 
        className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-16 mb-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
         <div className="w-full h-auto md:h-40 bg-white dark:bg-[#1e1e1e] rounded-2xl overflow-hidden relative border border-gray-200 dark:border-gray-800 flex flex-col md:flex-row items-center justify-between p-8 shadow-sm transition-colors duration-300">
            <div className="relative z-10 md:w-2/3">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#45494A] dark:text-white mb-2 transition-colors duration-300">{t('heroBannerTitle')}</h3>
            </div>
            <div className="relative z-10 mt-6 md:mt-0">
              <button className="bg-[#00979C] text-white px-8 py-3.5 rounded-full font-bold text-sm tracking-widest hover:bg-[#008185] transition-colors shadow-md">
                {t('heroBannerBtn')}
              </button>
            </div>
            {/* Decorative background for banner */}
            <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-30 pointer-events-none" style={{ backgroundImage: 'url("https://picsum.photos/seed/abstract/800/400")', backgroundSize: 'cover', backgroundPosition: 'right center', maskImage: 'linear-gradient(to right, transparent, black)', WebkitMaskImage: 'linear-gradient(to right, transparent, black)' }}></div>
         </div>
      </motion.div>
    </div>
  );
}
