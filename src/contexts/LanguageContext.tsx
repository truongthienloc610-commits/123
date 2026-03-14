import React, { createContext, useState, useContext, ReactNode } from 'react';

export type Language = 'EN' | 'VI' | 'ES' | 'FR';

interface Translations {
  [key: string]: {
    [key in Language]: string;
  };
}

export const translations: Translations = {
  // Hero
  heroTitle1: { EN: 'Arduino VENTUNO Q:', VI: 'Arduino VENTUNO Q:', ES: 'Arduino VENTUNO Q:', FR: 'Arduino VENTUNO Q:' },
  heroTitle2: { EN: 'Where AI takes action', VI: 'Nơi AI hành động', ES: 'Donde la IA cobra vida', FR: "Où l'IA passe à l'action" },
  heroDesc: { 
    EN: 'The new AI, robotics, and actuation platform designed to bring your most ambitious projects to life.', 
    VI: 'Nền tảng AI, robot và truyền động mới được thiết kế để biến các dự án tham vọng nhất của bạn thành hiện thực.',
    ES: 'La nueva plataforma de IA, robótica y actuación diseñada para dar vida a tus proyectos más ambiciosos.',
    FR: "La nouvelle plateforme d'IA, de robotique et d'actionnement conçue pour donner vie à vos projets les plus ambitieux."
  },
  discoverMore: { EN: 'DISCOVER MORE', VI: 'KHÁM PHÁ THÊM', ES: 'DESCUBRE MÁS', FR: 'DÉCOUVRIR PLUS' },
  buyNow: { EN: 'BUY NOW', VI: 'MUA NGAY', ES: 'COMPRAR AHORA', FR: 'ACHETER' },
  heroCard1Title: { EN: 'Arduino R4 Starter Kit', VI: 'Bộ Khởi Động Arduino R4', ES: 'Kit de Inicio Arduino R4', FR: 'Kit de Démarrage Arduino R4' },
  heroCard1Desc: { EN: 'Whatever your path to innovation, start here', VI: 'Dù con đường đổi mới của bạn là gì, hãy bắt đầu tại đây', ES: 'Cualquiera que sea tu camino hacia la innovación, comienza aquí', FR: "Quel que soit votre chemin vers l'innovation, commencez ici" },
  heroCard1Btn: { EN: 'DISCOVER STARTER KIT R4', VI: 'KHÁM PHÁ BỘ KHỞI ĐỘNG R4', ES: 'DESCUBRE EL KIT DE INICIO R4', FR: 'DÉCOUVREZ LE KIT DE DÉMARRAGE R4' },
  heroCard2Title: { EN: 'Arduino UNO Q', VI: 'Arduino UNO Q', ES: 'Arduino UNO Q', FR: 'Arduino UNO Q' },
  heroCard2Desc: { EN: 'High-performance computing with real-time control.', VI: 'Điện toán hiệu suất cao với điều khiển thời gian thực.', ES: 'Computación de alto rendimiento con control en tiempo real.', FR: 'Calcul haute performance avec contrôle en temps réel.' },
  heroCard2Btn: { EN: 'BUY NOW', VI: 'MUA NGAY', ES: 'COMPRAR AHORA', FR: 'ACHETER' },
  heroCard3Title: { EN: 'Arduino Cloud', VI: 'Arduino Cloud', ES: 'Arduino Cloud', FR: 'Arduino Cloud' },
  heroCard3Desc: { EN: 'Bring your IoT projects to life quickly', VI: 'Biến các dự án IoT của bạn thành hiện thực một cách nhanh chóng', ES: 'Da vida a tus proyectos de IoT rápidamente', FR: 'Donnez vie à vos projets IoT rapidement' },
  heroCard3Btn: { EN: 'DISCOVER CLOUD', VI: 'KHÁM PHÁ CLOUD', ES: 'DESCUBRE CLOUD', FR: 'DÉCOUVREZ CLOUD' },
  heroBannerTitle: { EN: 'Writing the next chapter of AI together!', VI: 'Cùng nhau viết nên chương tiếp theo của AI!', ES: '¡Escribiendo juntos el próximo capítulo de la IA!', FR: "Écrivons ensemble le prochain chapitre de l'IA !" },
  heroBannerBtn: { EN: 'JOIN US', VI: 'THAM GIA CÙNG CHÚNG TÔI', ES: 'ÚNETE A NOSOTROS', FR: 'REJOIGNEZ-NOUS' },
  
  // Navbar
  navPro: { EN: 'For Professionals', VI: 'Cho Chuyên gia', ES: 'Para Profesionales', FR: 'Pour les Pros' },
  navEdu: { EN: 'For Education', VI: 'Cho Giáo dục', ES: 'Para Educación', FR: "Pour l'Éducation" },
  navMakers: { EN: 'For Makers', VI: 'Cho Makers', ES: 'Para Makers', FR: 'Pour les Makers' },
  navProducts: { EN: 'Products', VI: 'Sản phẩm', ES: 'Productos', FR: 'Produits' },
  navCommunity: { EN: 'Community', VI: 'Cộng đồng', ES: 'Comunidad', FR: 'Communauté' },
  navDocs: { EN: 'Documentation', VI: 'Tài liệu', ES: 'Documentación', FR: 'Documentation' },
  navShop: { EN: 'SHOP', VI: 'CỬA HÀNG', ES: 'TIENDA', FR: 'BOUTIQUE' },

  // Navbar Mega Menus
  navHardware: { EN: 'HARDWARE', VI: 'PHẦN CỨNG', ES: 'HARDWARE', FR: 'MATÉRIEL' },
  navBoards: { EN: 'BOARDS, SOMs and SBCs', VI: 'BO MẠCH, SOMs và SBCs', ES: 'PLACAS, SOMs y SBCs', FR: 'CARTES, SOMs et SBCs' },
  navRobotics: { EN: 'ROBOTICS', VI: 'ROBOT', ES: 'ROBÓTICA', FR: 'ROBOTIQUE' },
  navIndustrial: { EN: 'INDUSTRIAL AUTOMATION', VI: 'TỰ ĐỘNG HÓA CÔNG NGHIỆP', ES: 'AUTOMATIZACIÓN INDUSTRIAL', FR: 'AUTOMATISATION INDUSTRIELLE' },
  navKits: { EN: 'KITS', VI: 'BỘ KIT', ES: 'KITS', FR: 'KITS' },
  navSoftware: { EN: 'SOFTWARE', VI: 'PHẦN MỀM', ES: 'SOFTWARE', FR: 'LOGICIEL' },
  navCloudTools: { EN: 'CLOUD AND TOOLS', VI: 'ĐÁM MÂY VÀ CÔNG CỤ', ES: 'NUBE Y HERRAMIENTAS', FR: 'CLOUD ET OUTILS' },
  navApp: { EN: 'APP', VI: 'ỨNG DỤNG', ES: 'APP', FR: 'APP' },
  navConnectShare: { EN: 'CONNECT & SHARE', VI: 'KẾT NỐI & CHIA SẺ', ES: 'CONECTAR Y COMPARTIR', FR: 'CONNECTER ET PARTAGER' },
  navDiscover: { EN: 'DISCOVER', VI: 'KHÁM PHÁ', ES: 'DESCUBRIR', FR: 'DÉCOUVRIR' },
  navLearnBuild: { EN: 'LEARN & BUILD', VI: 'HỌC & XÂY DỰNG', ES: 'APRENDER Y CONSTRUIR', FR: 'APPRENDRE ET CONSTRUIRE' },
  navSupport: { EN: 'SUPPORT', VI: 'HỖ TRỢ', ES: 'SOPORTE', FR: 'SUPPORT' },
  navNew: { EN: 'NEW', VI: 'MỚI', ES: 'NUEVO', FR: 'NOUVEAU' },
  
  // Navbar Mega Menu Cards
  navCardIdeDesc: { EN: 'Discover all the features of our most popular programming tool', VI: 'Khám phá tất cả các tính năng của công cụ lập trình phổ biến nhất của chúng tôi', ES: 'Descubre todas las características de nuestra herramienta de programación más popular', FR: 'Découvrez toutes les fonctionnalités de notre outil de programmation le plus populaire' },
  navCardCloudDesc: { EN: 'Your next exciting journey to build and monitor your connected projects', VI: 'Hành trình thú vị tiếp theo của bạn để xây dựng và giám sát các dự án được kết nối', ES: 'Tu próximo viaje emocionante para construir y monitorear tus proyectos conectados', FR: 'Votre prochain voyage passionnant pour construire et surveiller vos projets connectés' },
  navCardAppLabDesc: { EN: 'From sketch to Linux to AI, the all-in-one environment to build apps', VI: 'Từ phác thảo đến Linux đến AI, môi trường tất cả trong một để xây dựng ứng dụng', ES: 'Desde bocetos hasta Linux y la IA, el entorno todo en uno para crear aplicaciones', FR: 'Du croquis à Linux en passant par l\'IA, l\'environnement tout-en-un pour créer des applications' },
  navCardHubDesc: { EN: 'Discover thousands of projects created by the Arduino community', VI: 'Khám phá hàng ngàn dự án được tạo bởi cộng đồng Arduino', ES: 'Descubre miles de proyectos creados por la comunidad Arduino', FR: 'Découvrez des milliers de projets créés par la communauté Arduino' },
  navCardForumDesc: { EN: 'Join the discussion, ask questions, and help others', VI: 'Tham gia thảo luận, đặt câu hỏi và giúp đỡ người khác', ES: 'Únete a la discusión, haz preguntas y ayuda a otros', FR: 'Rejoignez la discussion, posez des questions et aidez les autres' },
  navCardTutDesc: { EN: 'Learn how to use Arduino with step-by-step guides', VI: 'Tìm hiểu cách sử dụng Arduino với các hướng dẫn từng bước', ES: 'Aprende a usar Arduino con guías paso a paso', FR: 'Apprenez à utiliser Arduino avec des guides étape par étape' },
  navCardHelpDesc: { EN: 'Find answers to your questions and get support', VI: 'Tìm câu trả lời cho câu hỏi của bạn và nhận hỗ trợ', ES: 'Encuentra respuestas a tus preguntas y obtén soporte', FR: 'Trouvez des réponses à vos questions et obtenez de l\'aide' },

  // Ecosystem
  ecoCatMaker: { EN: 'MAKER', VI: 'NGƯỜI CHẾ TẠO', ES: 'CREADOR', FR: 'CRÉATEUR' },
  ecoCatPro: { EN: 'PROFESSIONAL', VI: 'CHUYÊN GIA', ES: 'PROFESIONAL', FR: 'PROFESSIONNEL' },
  ecoCatEdu: { EN: 'EDUCATION', VI: 'GIÁO DỤC', ES: 'EDUCACIÓN', FR: 'ÉDUCATION' },
  ecoTitle1: { EN: 'Two NEW Arduino Plug and Make Kit projects recreate iconic vintage games', VI: 'Hai dự án Arduino Plug and Make Kit MỚI tái tạo các trò chơi cổ điển mang tính biểu tượng', ES: 'Dos NUEVOS proyectos del kit Arduino Plug and Make recrean juegos clásicos icónicos', FR: 'Deux NOUVEAUX projets Arduino Plug and Make Kit recréent des jeux vintage emblématiques' },
  ecoTitle2: { EN: 'To “fix the biggest machines in the world, anytime and anywhere,” requires remote...', VI: 'Để "sửa chữa những cỗ máy lớn nhất thế giới, mọi lúc mọi nơi," cần có công nghệ từ xa...', ES: 'Para “arreglar las máquinas más grandes del mundo, en cualquier momento y en cualquier lugar”, se requiere...', FR: 'Pour « réparer les plus grosses machines du monde, n’importe quand et n’importe où », il faut...' },
  ecoTitle3: { EN: 'Exploring the Moon and cultivating Earth - STEM projects that inspire', VI: 'Khám phá Mặt trăng và canh tác Trái đất - Những dự án STEM truyền cảm hứng', ES: 'Explorando la Luna y cultivando la Tierra: proyectos STEM que inspiran', FR: 'Explorer la Lune et cultiver la Terre - Des projets STEM qui inspirent' },
  ecoTitle4: { EN: 'Innovating the future of automotive with rapid prototyping', VI: 'Đổi mới tương lai của ngành ô tô với tạo mẫu nhanh', ES: 'Innovando el futuro de la automoción con prototipado rápido', FR: 'Innover l’avenir de l’automobile avec le prototypage rapide' },
  ecoTitle5: { EN: 'It’s silver, it’s green, it’s the Batteryrunner! An Arduino-powered, fully custom electric car', VI: 'Màu bạc, màu xanh, đó là Batteryrunner! Một chiếc ô tô điện tùy chỉnh hoàn toàn, chạy bằng Arduino', ES: '¡Es plateado, es verde, es el Batteryrunner! Un coche eléctrico totalmente personalizado impulsado por Arduino', FR: 'Il est argenté, il est vert, c’est le Batteryrunner ! Une voiture électrique entièrement personnalisée propulsée par Arduino' },
  ecoTitle6: { EN: 'AMB Vapor Monitoring leverages the Arduino Cloud for faster, more connected reporting', VI: 'AMB Vapor Monitoring tận dụng Arduino Cloud để báo cáo nhanh hơn, kết nối tốt hơn', ES: 'El monitoreo de vapor AMB aprovecha Arduino Cloud para generar informes más rápidos y conectados', FR: 'La surveillance des vapeurs AMB exploite le cloud Arduino pour des rapports plus rapides et plus connectés' },

  // News
  newsTitle: { EN: 'The easy-to-use hardware\nand software platform', VI: 'Nền tảng phần cứng\nvà phần mềm dễ sử dụng', ES: 'La plataforma de hardware\ny software fácil de usar', FR: 'La plateforme matérielle\net logicielle facile à utiliser' },
  missionTitle: { EN: 'Mission & Vision', VI: 'Sứ mệnh & Tầm nhìn', ES: 'Misión y Visión', FR: 'Mission et Vision' },
  missionDesc: { EN: "Discover the core values that drive Arduino's open-source ecosystem.", VI: 'Khám phá những giá trị cốt lõi thúc đẩy hệ sinh thái mã nguồn mở của Arduino.', ES: 'Descubre los valores fundamentales que impulsan el ecosistema de código abierto de Arduino.', FR: "Découvrez les valeurs fondamentales qui animent l'écosystème open source d'Arduino." },
  learnMore: { EN: 'LEARN MORE', VI: 'TÌM HIỂU THÊM', ES: 'APRENDE MÁS', FR: 'EN SAVOIR PLUS' },
  learnArduinoTitle: { EN: 'Learn Arduino', VI: 'Học Arduino', ES: 'Aprende Arduino', FR: 'Apprendre Arduino' },
  learnArduinoDesc: { EN: 'Start your journey with tutorials, documentation, and community support.', VI: 'Bắt đầu hành trình của bạn với các hướng dẫn, tài liệu và sự hỗ trợ từ cộng đồng.', ES: 'Comienza tu viaje con tutoriales, documentación y apoyo de la comunidad.', FR: 'Commencez votre voyage avec des tutoriels, de la documentation et le soutien de la communauté.' },
  startNow: { EN: 'START NOW', VI: 'BẮT ĐẦU NGAY', ES: 'EMPIEZA AHORA', FR: 'COMMENCER' },
  blogTitle: { EN: 'Blog', VI: 'Blog', ES: 'Blog', FR: 'Blog' },
  viewAll: { EN: 'VIEW ALL', VI: 'XEM TẤT CẢ', ES: 'VER TODO', FR: 'VOIR TOUT' },
  blog1: { EN: 'Introducing Arduino® VENTUNO™ Q: your new AI, robotics, and actuation platform!', VI: 'Giới thiệu Arduino® VENTUNO™ Q: nền tảng AI, robot và truyền động mới của bạn!', ES: '¡Presentamos Arduino® VENTUNO™ Q: tu nueva plataforma de IA, robótica y actuación!', FR: 'Présentation d’Arduino® VENTUNO™ Q : votre nouvelle plateforme d’IA, de robotique et d’actionnement !' },
  blog2: { EN: 'Turn your smartphone into a real-time vision input for Arduino® UNO™ Q', VI: 'Biến điện thoại thông minh của bạn thành đầu vào thị giác thời gian thực cho Arduino® UNO™ Q', ES: 'Convierte tu smartphone en una entrada de visión en tiempo real para Arduino® UNO™ Q', FR: 'Transformez votre smartphone en une entrée de vision en temps réel pour Arduino® UNO™ Q' },
  blog3: { EN: 'Train and deploy your own AI models in Arduino® App Lab – now fully integrated with Edge Impulse!', VI: 'Đào tạo và triển khai các mô hình AI của riêng bạn trong Arduino® App Lab – hiện đã được tích hợp hoàn toàn với Edge Impulse!', ES: 'Entrena y despliega tus propios modelos de IA en Arduino® App Lab, ¡ahora totalmente integrado con Edge Impulse!', FR: 'Entraînez et déployez vos propres modèles d’IA dans Arduino® App Lab – désormais entièrement intégré à Edge Impulse !' },
  blog4: { EN: 'New PLC IDE version 1.1.0 brings remote lifecycle management to Opta!', VI: 'Phiên bản PLC IDE mới 1.1.0 mang đến khả năng quản lý vòng đời từ xa cho Opta!', ES: '¡La nueva versión 1.1.0 del IDE de PLC trae la gestión remota del ciclo de vida a Opta!', FR: 'La nouvelle version 1.1.0 de l’IDE PLC apporte la gestion du cycle de vie à distance à Opta !' },

  // Footer
  footerProducts: { EN: 'PRODUCTS', VI: 'SẢN PHẨM', ES: 'PRODUCTOS', FR: 'PRODUITS' },
  footerHardware: { EN: 'Hardware', VI: 'Phần cứng', ES: 'Hardware', FR: 'Matériel' },
  footerSoftware: { EN: 'Software', VI: 'Phần mềm', ES: 'Software', FR: 'Logiciel' },
  footerCloud: { EN: 'Arduino Cloud', VI: 'Arduino Cloud', ES: 'Arduino Cloud', FR: 'Arduino Cloud' },
  footerApp: { EN: 'IoT Remote App', VI: 'Ứng dụng IoT Remote', ES: 'App IoT Remote', FR: 'Application IoT Remote' },
  footerShop: { EN: 'Shop', VI: 'Cửa hàng', ES: 'Tienda', FR: 'Boutique' },
  
  footerSolutions: { EN: 'SOLUTIONS', VI: 'GIẢI PHÁP', ES: 'SOLUCIONES', FR: 'SOLUTIONS' },
  footerPro: { EN: 'Professional', VI: 'Chuyên gia', ES: 'Profesional', FR: 'Professionnel' },
  footerEdu: { EN: 'Education', VI: 'Giáo dục', ES: 'Educación', FR: 'Éducation' },
  footerMakers: { EN: 'Makers', VI: 'Makers', ES: 'Makers', FR: 'Makers' },

  footerCommunity: { EN: 'COMMUNITY', VI: 'CỘNG ĐỒNG', ES: 'COMUNIDAD', FR: 'COMMUNAUTÉ' },
  footerProjectHub: { EN: 'Project Hub', VI: 'Trung tâm Dự án', ES: 'Project Hub', FR: 'Project Hub' },
  footerLabs: { EN: 'Arduino Labs', VI: 'Arduino Labs', ES: 'Arduino Labs', FR: 'Arduino Labs' },
  footerDiscord: { EN: 'Discord', VI: 'Discord', ES: 'Discord', FR: 'Discord' },
  footerForum: { EN: 'Forum', VI: 'Diễn đàn', ES: 'Foro', FR: 'Forum' },
  footerYouTube: { EN: 'YouTube', VI: 'YouTube', ES: 'YouTube', FR: 'YouTube' },
  footerGitHub: { EN: 'GitHub', VI: 'GitHub', ES: 'GitHub', FR: 'GitHub' },
  footerArduinoDays: { EN: 'Arduino Days', VI: 'Ngày hội Arduino', ES: 'Arduino Days', FR: 'Arduino Days' },
  footerBlog: { EN: 'Blog', VI: 'Blog', ES: 'Blog', FR: 'Blog' },

  footerAbout: { EN: 'ABOUT', VI: 'VỀ CHÚNG TÔI', ES: 'ACERCA DE', FR: 'À PROPOS' },
  footerAboutArd: { EN: 'About Arduino', VI: 'Về Arduino', ES: 'Sobre Arduino', FR: 'À propos d\'Arduino' },
  footerCareers: { EN: 'Careers', VI: 'Tuyển dụng', ES: 'Empleo', FR: 'Carrières' },
  footerContact: { EN: 'Contact us', VI: 'Liên hệ', ES: 'Contáctanos', FR: 'Nous contacter' },
  footerDocs: { EN: 'Documentation', VI: 'Tài liệu', ES: 'Documentación', FR: 'Documentation' },
  footerHelp: { EN: 'Help Center', VI: 'Trung tâm Trợ giúp', ES: 'Centro de Ayuda', FR: 'Centre d\'aide' },
  footerAskSupport: { EN: 'Ask for Support', VI: 'Yêu cầu Hỗ trợ', ES: 'Pedir Soporte', FR: 'Demander de l\'aide' },

  footerRights: { EN: 'All rights reserved.', VI: 'Bảo lưu mọi quyền.', ES: 'Todos los derechos reservados.', FR: 'Tous droits réservés.' },
  footerTrademarks: { EN: 'Trademarks & Copyrights', VI: 'Nhãn hiệu & Bản quyền', ES: 'Marcas y Derechos de autor', FR: 'Marques et droits d\'auteur' },
  footerWhistle: { EN: 'Whistleblowing', VI: 'Tố giác', ES: 'Denuncias', FR: 'Lancement d\'alerte' },
  footerDSA: { EN: 'Digital Services Act', VI: 'Đạo luật Dịch vụ Kỹ thuật số', ES: 'Ley de Servicios Digitales', FR: 'Loi sur les services numériques' },
  footerTOS: { EN: 'Terms of Service', VI: 'Điều khoản Dịch vụ', ES: 'Términos de Servicio', FR: 'Conditions d\'utilisation' },
  footerPrivacy: { EN: 'Privacy Policy', VI: 'Chính sách Bảo mật', ES: 'Política de Privacidad', FR: 'Politique de confidentialité' },
  footerSecurity: { EN: 'Security', VI: 'Bảo mật', ES: 'Seguridad', FR: 'Sécurité' },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('EN');

  const t = (key: string) => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
