import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function News() {
  const { t } = useLanguage();

  const blogs = [
    { date: '9 Mar 2026', category: 'VENTUNO Q', title: t('blog1') },
    { date: '6 Mar 2026', category: 'App Lab UNO Q', title: t('blog2') },
    { date: '4 Mar 2026', category: 'App Lab', title: t('blog3') },
    { date: '3 Mar 2026', category: 'Opta Pro', title: t('blog4') },
  ];

  return (
    <section className="py-24 bg-[#F7F8F9] dark:bg-[#121212] border-t border-gray-200 dark:border-gray-800 transition-colors duration-300 overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Platform Section */}
        <div className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-extrabold text-[#45494A] dark:text-white tracking-tight mb-12 transition-colors duration-300 whitespace-pre-line"
          >
            {t('newsTitle')}
          </motion.h2>
          <div className="flex flex-col md:flex-row justify-center gap-8">
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="bg-white dark:bg-[#1e1e1e] p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex-1 max-w-md mx-auto transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white transition-colors duration-300">{t('missionTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">{t('missionDesc')}</p>
              <button className="bg-[#00979C] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#008185] transition-colors">
                {t('learnMore')}
              </button>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              className="bg-white dark:bg-[#1e1e1e] p-10 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-800 flex-1 max-w-md mx-auto transition-colors duration-300"
            >
              <h3 className="text-2xl font-bold mb-4 dark:text-white transition-colors duration-300">{t('learnArduinoTitle')}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8 transition-colors duration-300">{t('learnArduinoDesc')}</p>
              <button className="bg-[#00979C] text-white px-8 py-3 rounded-full font-bold text-sm tracking-widest hover:bg-[#008185] transition-colors">
                {t('startNow')}
              </button>
            </motion.div>
          </div>
        </div>

        {/* Blog Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="flex justify-between items-end mb-12">
            <h2 className="text-3xl font-extrabold text-[#45494A] dark:text-white tracking-tight transition-colors duration-300">{t('blogTitle')}</h2>
            <a href="#" className="text-[#00979C] font-bold text-sm tracking-widest hover:underline flex items-center gap-2">
              {t('viewAll')} <span className="text-lg leading-none">&rarr;</span>
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {blogs.map((blog, idx) => (
              <motion.div 
                key={idx} 
                className="group cursor-pointer flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.15, ease: "easeOut" }}
              >
                <p className="text-gray-500 dark:text-gray-400 text-sm mb-2 transition-colors duration-300">{blog.date}</p>
                <p className="text-[11px] font-extrabold text-[#00979C] tracking-widest mb-2 uppercase">{blog.category}</p>
                <h3 className="text-lg font-bold text-[#45494A] dark:text-white leading-snug group-hover:text-[#00979C] transition-colors">{blog.title}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
