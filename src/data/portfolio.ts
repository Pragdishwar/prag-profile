export const personalDetails = {
  name: 'Pragdishwar A',
  role: 'Full Stack Developer & AI Engineer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'pragdishwar@gmail.com',
  socials: {
    github: 'https://github.com/Pragdishwar',
    linkedin: 'https://www.linkedin.com/in/pragdishwara/',
    twitter: 'https://twitter.com/pragdishwar',
  },
  profilePhoto: 'https://ui-avatars.com/api/?name=Pragdishwar+A&size=200&background=7C3AED&color=fff',
  bio: "I'm a Full Stack Developer & AI Engineer specialized in building GenAI-driven applications, real-time synchronization systems, and intelligent IoT dashboards. My work focuses on bridging high-fidelity UI/UX with complex backend architectures and AI models.",
  stats: {
    experience: 2,
    projects: 8,
    technologies: 20
  }
};

export const skills = {
  Frontend: [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'TypeScript', icon: 'typescript' },
    { name: 'Tailwind CSS', icon: 'tailwind' },
    { name: 'Framer Motion', icon: 'framer' },
    { name: 'shadcn/ui', icon: 'ui' }
  ],
  Backend: [
    { name: 'Python (FastAPI)', icon: 'python' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Supabase', icon: 'supabase' },
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'Docker', icon: 'docker' }
  ],
  "AI & Tools": [
    { name: 'Google Gemini', icon: 'ai' },
    { name: 'Monaco Editor', icon: 'code' },
    { name: 'TanStack Query', icon: 'query' },
    { name: 'Vercel', icon: 'vercel' },
    { name: 'Git', icon: 'git' }
  ]
};

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  techStack: string[];
  githubLink?: string;
  liveLink?: string;
  image?: string;
}

export const projects: Project[] = [
  {
    id: 'orca',
    title: 'ORCA',
    description: 'Agentic marine advisory platform for safe harbour bar crossing.',
    longDescription: 'An intelligent marine advisory platform for the Muthalapozhi inlet in Kerala. It answers natural-language queries about crossing the harbour bar with deterministic verdicts, return windows, and turn-back times specific to hull classes, utilizing synthetic marine data and an agentic rule engine.',
    techStack: ['React', 'Python', 'FastAPI', 'MapLibre GL', 'Zustand', 'Tailwind CSS'],
    githubLink: 'https://github.com/Pragdishwar/ORCA',
    liveLink: '    https://orca-nav.vercel.app/',
    image: 'https://images.unsplash.com/photo-1590432577610-86b2bbbd3c65?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'equeue',
    title: 'Equeue',
    description: 'Smart virtual token-based queue management system.',
    longDescription: 'A modern queue management application built to eliminate physical waiting lines. Customers can join queues remotely, monitor their position in real-time, and check-in via QR code. Includes a comprehensive Admin Management console for branch operators.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Supabase', 'PostgreSQL'],
    githubLink: 'https://github.com/Pragdishwar/Equeue',
    image: 'https://images.unsplash.com/photo-1551829026-64c399589d81?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'argus',
    title: 'ARGUS',
    description: 'AI-powered computer vision system for aviation logistics.',
    longDescription: 'A live, cloud-deployed Edge AI camera workflow with a dynamic dashboard that solves massive logistical problems in aviation. Integrates YOLO and Tesseract for real-time monitoring.',
    techStack: ['Next.js', 'Supabase', 'OpenCV', 'YOLO', 'Tesseract', 'Vercel'],
    githubLink: 'https://github.com/Pragdishwar/ARGUS',
    liveLink: 'https://argus-red.vercel.app',
    image: 'https://images.unsplash.com/photo-1540866225557-9e4c58100c67?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'anomaly-grammar',
    title: 'Anomaly Grammar',
    description: 'Time-series anomaly detection tool with interactive data visualization and failure marking.',
    longDescription: 'A full-stack application for anomaly detection and visualization. Features a Python backend for data ingestion and a React (Vite) frontend with Recharts, MotifHighlighter, and interactive failure marking capabilities.',
    techStack: ['React', 'Vite', 'Recharts', 'Python', 'FastAPI'],
    githubLink: 'https://github.com/Pragdishwar/Anomaly-Grammar',
    liveLink: 'https://anomaly-grammar.vercel.app',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'earn2equity',
    title: 'Earn2Equity (E2E)',
    description: 'GenAI-powered financial mentor for gig workers in India using Google Gemini.',
    longDescription: 'Earn2Equity transforms unpredictable gig income into a structured pathway toward wealth creation. It features a virtual SIP simulation, behavioral tracking, and a multilingual AI guide powered by Google Gemini. Built with a high-fidelity React interface and a robust financial simulation engine.',
    techStack: ['React', 'Google Gemini', 'Recharts', 'Framer Motion', 'Tailwind CSS'],
    githubLink: 'https://github.com/Pragdishwar/earn2equity',
    liveLink: 'https://earn2equity.vercel.app',
    image: 'https://images.unsplash.com/photo-1611974717483-5828fb7ea8d6?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'routemonk',
    title: 'RouteMonk',
    description: 'Intelligent delivery route optimizer with real-time weather and perishability scoring.',
    longDescription: 'A full-stack application designed to optimize delivery routes by considering real-time weather constraints and the perishability of goods. Integrates TomTom Routing and OpenWeather APIs to compute an intelligent routing score, ensuring efficient logistics for sensitive cargo.',
    techStack: ['FastAPI', 'React', 'PostgreSQL', 'TomTom API', 'OpenWeather API', 'Docker'],
    githubLink: 'https://github.com/Pragdishwar/routemonk',
    liveLink: 'https://routemonk-pro.vercel.app',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'borderland-arena',
    title: 'Borderland Arena',
    description: 'Gamified technical competition platform with real-time sync and anti-cheat systems.',
    longDescription: 'A high-intensity competitive programming platform featuring real-time synchronization via Supabase, an integrated code execution engine using Piston API, and an automated "Atmospheric Breach" anti-cheat system. Includes an admin command center for game management.',
    techStack: ['React', 'Supabase', 'Monaco Editor', 'Tailwind CSS', 'TanStack Query'],
    liveLink: 'https://borderland-arena.vercel.app',
    githubLink: 'https://github.com/Pragdishwar/borderland-arena',
    image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&q=80&w=800&h=600'
  },
  {
    id: 'vision-awd',
    title: 'Vision-Based AWD',
    description: 'IoT-enabled automated water distribution system with a computer vision dashboard.',
    longDescription: 'An intelligent irrigation and water distribution project. It combines ESP32-CAM firmware for localized vision processing with a modern React dashboard for real-time monitoring and control. Focuses on resource efficiency and automated environment sensing.',
    techStack: ['React', 'Vite', 'ESP32-CAM', 'shadcn/ui', 'Tailwind CSS'],
    liveLink: 'https://vision-based-awd.vercel.app',
    githubLink: 'https://github.com/Pragdishwar/Vision-AWD',
    image: 'https://images.unsplash.com/photo-1563911302283-d2bc129e7570?auto=format&fit=crop&q=80&w=800&h=600'
  }
];

export interface Experience {
  id: string;
  company: string;
  role: string;
  duration: string;
  description: string[];
}

export const experience: Experience[] = [
  {
    id: 'exp-1',
    company: 'Lead Developer | Freelance',
    role: 'Full Stack & AI Engineer',
    duration: '2023 - Present',
    description: [
      'Engineered "Earn2Equity", a GenAI financial mentor utilizing Google Gemini for multilingual user interaction and complex financial simulations.',
      'Developed "Borderland Arena", a real-time competitive programming platform with Supabase integration and custom anti-cheat window-tracking sensors.',
      'architected and deployed scalable dashboards using shadcn/ui and Framer Motion for premium user experiences.'
    ]
  },
  {
    id: 'exp-2',
    company: 'Logistics Tech Project',
    role: 'Backend Systems Engineer',
    duration: '2022 - 2023',
    description: [
      'Built a high-performance Python/FastAPI backend for "RouteMonk" to process real-time logistics data from multiple third-party APIs.',
      'Optimized PostgreSQL database queries for historical tracking and real-time route analysis.',
      'Implemented containerized deployment workflows using Docker and Vercel.'
    ]
  },
  {
    id: 'exp-3',
    company: 'IoT Innovation Labs',
    role: 'Firmware & Dashboard Developer',
    duration: '2021 - 2022',
    description: [
      'Developed vision-assisted irrigation control systems using ESP32-CAM and personalized C++ firmware.',
      'Created a responsive React dashboard for remote monitoring of hardware sensor arrays.',
      'Integrated real-time data streaming between hardware peripherals and web interfaces.'
    ]
  }
];
