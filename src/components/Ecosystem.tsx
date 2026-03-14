import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

export default function Ecosystem() {
  const { t } = useLanguage();

  const items = [
    { category: t('ecoCatMaker'), title: t('ecoTitle1'), img: 'https://picsum.photos/seed/maker1/600/400' },
    { category: t('ecoCatPro'), title: t('ecoTitle2'), img: 'https://picsum.photos/seed/pro1/600/400' },
    { category: t('ecoCatEdu'), title: t('ecoTitle3'), img: 'https://picsum.photos/seed/edu1/600/400' },
    { category: t('ecoCatPro'), title: t('ecoTitle4'), img: 'https://picsum.photos/seed/pro2/600/400' },
    { category: t('ecoCatMaker'), title: t('ecoTitle5'), img: 'https://picsum.photos/seed/maker2/600/400' },
    { category: t('ecoCatPro'), title: t('ecoTitle6'), img: 'https://picsum.photos/seed/pro3/600/400' },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#1a1a1a] transition-colors duration-300">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div 
              key={idx} 
              className="group cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1, ease: "easeOut" }}
            >
              <div className="overflow-hidden rounded-2xl mb-4">
                <img src={item.img} alt={item.title} className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <p className="text-[11px] font-extrabold text-[#00979C] tracking-widest mb-2">{item.category}</p>
              <h3 className="text-xl font-bold text-[#45494A] dark:text-white leading-snug group-hover:text-[#00979C] transition-colors">{item.title}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
