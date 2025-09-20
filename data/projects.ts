export interface Project {
  title: string;
  description: string;
  logo: string;
  image: string;
  link: string;
  slug: string;
}

export const projects: Project[] = [
  {
    title: 'Verili Olive Oil E-Commerce Platform',
    description: 'Full-stack e-commerce platform for olive oil sales. Features admin panel, order system and SMTP integration.',
    logo: '/logos/react_icon.svg',
    image: '/projects/deneme.png',
    link: 'https://github.com/mertbayir/VeriliZeytinyagi-App-Showcase',
    slug: 'verili-olive-oil-ecommerce',
  },
  {
    title: 'Real-Time Chatbot Assistant',
    description: 'Modern React/TypeScript chatbot developed for SoleLuna Tech. Features real-time communication with Socket.io.',
    logo: '/logos/react_icon.svg',
    image: '/projects/deneme.png',
    link: 'https://github.com/mertbayir/Chatbot-Project',
    slug: 'chatbot-assistant',
  },
  {
    title: 'AI Speech Recognition System',
    description: 'AI-powered speech recognition system developed for MFI. Features speaker recognition with ML algorithms.',
    logo: '/logos/js_icon.svg',
    image: '/projects/deneme.png',
    link: 'https://github.com/mertbayir/Speech-Recognition-With-Python',
    slug: 'ai-speech-recognition',
  },
  {
    title: 'MFI Inventory Management System',
    description: 'Enterprise inventory management system with CRUD operations and user-friendly desktop interface.',
    logo: '/logos/json_icon.svg',
    image: '/projects/deneme.png',
    link: 'https://github.com/mertbayir/Envanter-Takip-Sistemi',
    slug: 'mfi-inventory-system',
  },
  {
    title: 'Patika Mobile Donation App',
    description: 'Mobile donation application developed for Patika Dev. Features modern UI/UX design for user-friendly donation experience.',
    logo: '/logos/react_icon.svg',
    image: '/projects/deneme.png',
    link: 'https://github.com/mertbayir/Patika-Mobile-Donation-App',
    slug: 'patika-donation-app',
  },
];
