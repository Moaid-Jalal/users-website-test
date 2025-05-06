export type Dictionary = {
    heroTitle: string;
    heroSubtitle: string;
    explore: string;
    contact: string;
    featuredTitle: string;
    featuredSubtitle: string;
    footer: {
      contactUs: string;
      address: string;
      phone: string;
      email: string;
      quickLinks: string;
      sectors: string;
      about: string;
      follow: string;
      copyright: string;
    };
    navbar: {
      home: string;
      sectors: string;
      about: string;
      contact: string;
    };
    // Why Choose Us section
    whyChooseUsTitle: string;
    whyChooseUsSubtitle: string;
    experience: string;
    experienceText: string;
    innovation: string;
    innovationText: string;
    trust: string;
    trustText: string;
    categoriesPage: {
      title: string;
      description: string;
    };
    noProjects?: string;
    backToCategories?: string;
    backToHome?: string;
    somethingWrong?: string;
    projects?: string;
    viewMoreDetails?: string;
    loadMore?: string;
    exploreCategoryProjects?: string;
    viewProjects?: string;
    back?: string;
    extraDescription?: string;
    aboutPageTitle?: string;
    aboutPageDesc?: string;
    aboutStats?: {
      "Years of Experience": string;
      "Completed Projects": string;
      "Professional Team": string;
      "Locations": string;
    };
    ourStory?: string;
    ourServices?: string;
    ourLocation?: string;
    contactPageDesc?: string;
    visitUs?: string;
    callUs?: string;
    emailUs?: string;
    sendMessage?: string;
    sendMessageDesc?: string;
    name?: string;
    yourName?: string;
    email?: string;
    yourEmail?: string;
    message?: string;
    yourMessage?: string;
    sendMessageBtn?: string;
    sending?: string;
    messageSent?: string;
    messageSentDesc?: string;
    messageSentSuccess?: string;
};

export const dictionaries: Record<string, Dictionary> = {
  en: {
    heroTitle: "Building Tomorrow's World Today",
    heroSubtitle:
      "We specialize in creating innovative construction solutions that transform visions into reality. With years of experience and dedication to excellence, we build more than just structures – we build futures.",
    explore: 'Explore Our Sectors',
    contact: 'Contact Us',
    featuredTitle: 'Featured Projects',
    featuredSubtitle:
      'Take a look at some of our most impressive construction sectors that showcase our expertise and commitment to quality.',
    footer: {
      contactUs: 'Contact Us',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      quickLinks: 'Quick Links',
      sectors: 'Sectors',
      about: 'About Us',
      follow: 'Follow Us',
      copyright: '© 2025 KYT Group. All rights reserved.',
    },
    navbar: {
      home: 'Home',
      sectors: 'Sectors',
      about: 'About',
      contact: 'Contact',
    },
    // Why Choose Us section
    whyChooseUsTitle: "Why Choose Us",
    whyChooseUsSubtitle: "We combine innovation, expertise, and commitment to deliver unmatched construction solutions.",
    experience: "Years of Experience",
    experienceText: "Our team has decades of industry experience that ensures project success.",
    innovation: "Innovative Solutions",
    innovationText: "We apply the latest technology to bring your vision to life.",
    trust: "Trusted Partnerships",
    trustText: "Clients return to us for quality, reliability, and long-term collaboration.",
    categoriesPage: {
      title: "Categories",
      description: "Explore our project categories.",
    },
    noProjects: "No Projects Found",
    backToCategories: "Back to categories",
    backToHome: "Back to Home",
    somethingWrong: "Something went wrong, try again later",
    projects: "Projects",
    viewMoreDetails: "View More Details",
    loadMore: "Load More",
    exploreCategoryProjects: "Explore our latest {category} projects",
    viewProjects: "View projects",
    back: "Back",
    extraDescription: "Details",
    aboutPageTitle: "About Us",
    aboutPageDesc: "Building excellence through innovation and dedication since 2019.",
    aboutStats: {
      "Years of Experience": "Years of Experience",
      "Completed Projects": "Completed Projects",
      "Professional Team": "Professional Team",
      "Locations": "Locations"
    },
    ourStory: "Our Story",
    ourServices: "Our Services",
    ourLocation: "Our Location",
    contactPageDesc: "Get in touch with our team for any inquiries or project discussions.",
    visitUs: "Visit Us",
    callUs: "Call Us",
    emailUs: "Email Us",
    sendMessage: "Send us a Message",
    sendMessageDesc: "Fill out the form below and we'll get back to you as soon as possible.",
    name: "Name",
    yourName: "Your name",
    email: "Email",
    yourEmail: "your@email.com",
    message: "Message",
    yourMessage: "Tell us about your project",
    sendMessageBtn: "Send Message",
    sending: "Sending...",
    messageSent: "Message Sent",
    messageSentDesc: "We'll get back to you as soon as possible.",
    messageSentSuccess: "Message sent successfully!",
  },
  tr: {
    heroTitle: "Yarının Dünyasını Bugünden İnşa Ediyoruz",
    heroSubtitle:
      "Vizyonları gerçeğe dönüştüren yenilikçi inşaat çözümleri geliştiriyoruz. Yılların deneyimi ve mükemmeliyet anlayışımızla sadece yapılar değil, gelecekler inşa ediyoruz.",
    explore: 'Sektörlerimizi Keşfedin',
    contact: 'Bize Ulaşın',
    featuredTitle: 'Öne Çıkan Projeler',
    featuredSubtitle:
      'Uzmanlığımızı ve kaliteye bağlılığımızı gösteren en etkileyici inşaat sektörlerimize göz atın.',
    footer: {
      contactUs: 'Bize Ulaşın',
      address: 'Adres',
      phone: 'Telefon',
      email: 'E-posta',
      quickLinks: 'Hızlı Bağlantılar',
      sectors: 'Sektörler',
      about: 'Hakkımızda',
      follow: 'Bizi Takip Edin',
      copyright: '© 2025 KYT Group. Tüm hakları saklıdır.',
    },
    navbar: {
      home: 'Ana Sayfa',
      sectors: 'Sektörler',
      about: 'Hakkımızda',
      contact: 'İletişim',
    },
    // Why Choose Us section
    whyChooseUsTitle: "Neden Bizi Seçmelisiniz",
    whyChooseUsSubtitle: "Eşsiz inşaat çözümleri sunmak için yenilik, uzmanlık ve bağlılığı birleştiriyoruz.",
    experience: "Yılların Deneyimi",
    experienceText: "Ekibimiz, projelerin başarısını garanti eden onlarca yıllık sektör deneyimine sahiptir.",
    innovation: "Yenilikçi Çözümler",
    innovationText: "Vizyonunuzu hayata geçirmek için en son teknolojiyi uyguluyoruz.",
    trust: "Güvenilir Ortaklıklar",
    trustText: "Müşterilerimiz kalite, güvenilirlik ve uzun vadeli iş birliği için bize tekrar tekrar dönüyor.",
    categoriesPage: {
      title: "Kategoriler",
      description: "Projelerimizin kategorilerini keşfedin.",
    },
    noProjects: "Proje Bulunamadı",
    backToCategories: "Kategorilere geri dön",
    backToHome: "Ana Sayfaya Dön",
    somethingWrong: "Bir hata oluştu, lütfen daha sonra tekrar deneyin",
    projects: "Projeler",
    viewMoreDetails: "Daha Fazla Detay",
    loadMore: "Daha Fazla Yükle",
    exploreCategoryProjects: "En yeni {category} projelerimizi keşfedin",
    viewProjects: "Projeleri Görüntüle",
    back: "Geri",
    extraDescription: "Detaylar",
    aboutPageTitle: "Hakkımızda",
    aboutPageDesc: "2019'den beri yenilik ve özveriyle mükemmellik inşa ediyoruz.",
    aboutStats: {
      "Years of Experience": "Yılların Deneyimi",
      "Completed Projects": "Tamamlanan Projeler",
      "Professional Team": "Profesyonel Ekip",
      "Locations": "Lokasyonlar"
    },
    ourStory: "Hikayemiz",
    ourServices: "Hizmetlerimiz",
    ourLocation: "Lokasyonumuz",
    contactPageDesc: "Her türlü soru veya proje görüşmesi için ekibimizle iletişime geçin.",
    visitUs: "Bizi Ziyaret Edin",
    callUs: "Bizi Arayın",
    emailUs: "Bize E-posta Gönderin",
    sendMessage: "Bize Mesaj Gönderin",
    sendMessageDesc: "Aşağıdaki formu doldurun, en kısa sürede size geri dönüş yapacağız.",
    name: "İsim",
    yourName: "Adınız",
    email: "E-posta",
    yourEmail: "eposta@adresiniz.com",
    message: "Mesaj",
    yourMessage: "Projenizden bahsedin",
    sendMessageBtn: "Mesaj Gönder",
    sending: "Gönderiliyor...",
    messageSent: "Mesaj Gönderildi",
    messageSentDesc: "En kısa sürede size geri dönüş yapacağız.",
    messageSentSuccess: "Mesaj başarıyla gönderildi!",
  },
  fr: {
    heroTitle: "Construire le monde de demain dès aujourd’hui",
    heroSubtitle:
      "Nous sommes spécialisés dans les solutions de construction innovantes qui transforment les visions en réalité. Forts de nombreuses années d'expérience et d'un engagement envers l'excellence, nous construisons bien plus que des structures – nous construisons des avenirs.",
    explore: 'Découvrir nos secteurs',
    contact: 'Nous Contacter',
    featuredTitle: 'Projets Vedettes',
    featuredSubtitle:
      'Découvrez certains de nos secteurs de construction les plus impressionnants qui illustrent notre expertise et notre engagement envers la qualité.',
    footer: {
      contactUs: 'Nous Contacter',
      address: 'Adresse',
      phone: 'Téléphone',
      email: 'Email',
      quickLinks: 'Liens Rapides',
      sectors: 'Secteurs',
      about: 'À Propos',
      follow: 'Suivez-nous',
      copyright: '© 2025 KYT Group. Tous droits réservés.',
    },
    navbar: {
      home: 'Accueil',
      sectors: 'Secteurs',
      about: 'À Propos',
      contact: 'Contact',
    },
    // Why Choose Us section
    whyChooseUsTitle: "Pourquoi Nous Choisir",
    whyChooseUsSubtitle: "Nous allions innovation, expertise et engagement pour offrir des solutions de construction inégalées.",
    experience: "Années d'expérience",
    experienceText: "Notre équipe possède des décennies d'expérience qui garantissent la réussite de chaque projet.",
    innovation: "Solutions Innovantes",
    innovationText: "Nous utilisons les dernières technologies pour donner vie à votre vision.",
    trust: "Partenariats de Confiance",
    trustText: "Nos clients reviennent pour la qualité, la fiabilité et une collaboration durable.",
    categoriesPage: {
      title: "Catégories",
      description: "Découvrez les catégories de nos projets.",
    },
    noProjects: "Aucun projet trouvé",
    backToCategories: "Retour aux catégories",
    backToHome: "Retour à l'accueil",
    somethingWrong: "Une erreur s'est produite, veuillez réessayer plus tard",
    projects: "Projets",
    viewMoreDetails: "Voir plus de détails",
    loadMore: "Charger plus",
    exploreCategoryProjects: "Découvrez nos derniers projets {category}",
    viewProjects: "Voir les projets",
    back: "Retour",
    extraDescription: "Détails",
    aboutPageTitle: "À Propos",
    aboutPageDesc: "L'excellence par l'innovation et le dévouement depuis 2019.",
    aboutStats: {
      "Years of Experience": "Années d'expérience",
      "Completed Projects": "Projets terminés",
      "Professional Team": "Équipe professionnelle",
      "Locations": "Sites"
    },
    ourStory: "Notre Histoire",
    ourServices: "Nos Services",
    ourLocation: "Notre Emplacement",
    contactPageDesc: "Contactez notre équipe pour toute question ou discussion de projet.",
    visitUs: "Venez Nous Voir",
    callUs: "Appelez-nous",
    emailUs: "Envoyez-nous un Email",
    sendMessage: "Envoyez-nous un message",
    sendMessageDesc: "Remplissez le formulaire ci-dessous et nous vous répondrons dès que possible.",
    name: "Nom",
    yourName: "Votre nom",
    email: "Email",
    yourEmail: "votre@email.com",
    message: "Message",
    yourMessage: "Parlez-nous de votre projet",
    sendMessageBtn: "Envoyer le message",
    sending: "Envoi...",
    messageSent: "Message envoyé",
    messageSentDesc: "Nous vous répondrons dès que possible.",
    messageSentSuccess: "Message envoyé avec succès !",
  },
};

export async function getDictionary(lang: string): Promise<Dictionary> {
  return dictionaries[lang];
}
