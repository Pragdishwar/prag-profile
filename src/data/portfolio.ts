export const personalDetails = {
  name: 'Pragdishwar A',
  role: 'Full Stack Developer & AI Engineer',
  location: 'Chennai, Tamil Nadu, India',
  email: 'pragdishwar@gmail.com',
  phone: '+91 94433 44966', // Update this with your real number
  socials: {
    github: 'https://github.com/Pragdishwar',
    linkedin: 'https://www.linkedin.com/in/pragdishwara/',
    twitter: 'https://twitter.com/pragdishwar',
  },
  profilePhoto: 'https://ui-avatars.com/api/?name=Pragdishwar+A&size=200&background=7C3AED&color=fff',
  bio: "Computer Science undergraduate specializing in Artificial Intelligence, Full-Stack Development, and Intelligent Embedded Systems. Experienced in developing AI-powered applications, scalable web platforms, and IoT solutions using Python, React, FastAPI, and modern cloud technologies. Passionate about applied AI research, computer vision, and solving real-world engineering problems through innovative software and hardware solutions. Also an avid anime enthusiast (Bleach, One Piece, Naruto) and Japanese learner!",
  stats: {
    experience: 2,
    projects: 8,
    technologies: 20
  }
};

export const skills = {
  Languages: [
    { name: 'Python', icon: 'python' },
    { name: 'Java', icon: 'java' },
    { name: 'C++', icon: 'cpp' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'TypeScript', icon: 'typescript' }
  ],
  "Frameworks & Tech": [
    { name: 'React', icon: 'react' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'FastAPI', icon: 'python' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Express.js', icon: 'nodejs' },
    { name: 'Tailwind CSS', icon: 'tailwind' }
  ],
  "AI & CV": [
    { name: 'OpenCV', icon: 'opencv' },
    { name: 'YOLOv8', icon: 'ai' },
    { name: 'Time-Series Analysis', icon: 'chart' },
    { name: 'Prompt Engineering', icon: 'ai' },
    { name: 'LLM Applications', icon: 'ai' }
  ],
  Databases: [
    { name: 'PostgreSQL', icon: 'postgresql' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'MySQL', icon: 'mysql' },
    { name: 'Supabase', icon: 'supabase' }
  ],
  "Tools & Concepts": [
    { name: 'Git & GitHub', icon: 'git' },
    { name: 'Docker', icon: 'docker' },
    { name: 'Postman', icon: 'api' },
    { name: 'Arduino IDE', icon: 'code' },
    { name: 'REST APIs & OOP', icon: 'code' },
    { name: 'Embedded Systems & IoT', icon: 'chip' }
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
    image: 'https://api.microlink.io/?url=https%3A%2F%2Forca-nav.vercel.app%2F&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'equeue',
    title: 'Equeue',
    description: 'Smart virtual token-based queue management system.',
    longDescription: 'A modern queue management application built to eliminate physical waiting lines. Customers can join queues remotely, monitor their position in real-time, and check-in via QR code. Includes a comprehensive Admin Management console for branch operators.',
    techStack: ['Flutter', 'Dart', 'Riverpod', 'GoRouter', 'Supabase', 'PostgreSQL'],
    githubLink: 'https://github.com/Pragdishwar/Equeue',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fgithub.com%2FPragdishwar%2FEqueue&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'argus',
    title: 'ARGUS',
    description: 'AI-powered computer vision system for aviation logistics.',
    longDescription: 'A live, cloud-deployed Edge AI camera workflow with a dynamic dashboard that solves massive logistical problems in aviation. Integrates YOLO and Tesseract for real-time monitoring.',
    techStack: ['Next.js', 'Supabase', 'OpenCV', 'YOLO', 'Tesseract', 'Vercel'],
    githubLink: 'https://github.com/Pragdishwar/ARGUS',
    liveLink: 'https://argus-red.vercel.app',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fargus-red.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'anomaly-grammar',
    title: 'Anomaly Grammar',
    description: 'Time-series anomaly detection tool with interactive data visualization and failure marking.',
    longDescription: 'A full-stack application for anomaly detection and visualization. Features a Python backend for data ingestion and a React (Vite) frontend with Recharts, MotifHighlighter, and interactive failure marking capabilities.',
    techStack: ['React', 'Vite', 'Recharts', 'Python', 'FastAPI'],
    githubLink: 'https://github.com/Pragdishwar/Anomaly-Grammar',
    liveLink: 'https://anomaly-grammar.vercel.app',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fanomaly-grammar.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'earn2equity',
    title: 'Earn2Equity (E2E)',
    description: 'GenAI-powered financial mentor for gig workers in India using Google Gemini.',
    longDescription: 'Earn2Equity transforms unpredictable gig income into a structured pathway toward wealth creation.\n\nCase Study & Architecture:\n• UI Decisions for Gig Workers: Designed with extreme simplicity in mind. Large touch targets, high-contrast text, and multilingual voice-first interactions (powered by Google Gemini) cater specifically to users who are typically on the move and may not be tech-native.\n• Virtual SIP Simulation: Uses Recharts to visually break down compound interest, showing users exactly how micro-investments of daily earnings can compound into substantial wealth over 5, 10, and 20 years.\n• Tech Stack: React, Framer Motion for liquid transitions, and Gemini AI for contextual financial coaching.',
    techStack: ['React', 'Google Gemini', 'Recharts', 'Framer Motion', 'Tailwind CSS'],
    githubLink: 'https://github.com/Pragdishwar/earn2equity',
    liveLink: 'https://earn2equity.vercel.app',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fearn2equity.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'routemonk',
    title: 'RouteMonk',
    description: 'Intelligent delivery route optimizer with real-time weather and perishability scoring.',
    longDescription: 'A full-stack application designed to optimize delivery routes by considering real-time weather constraints and the perishability of goods. Integrates TomTom Routing and OpenWeather APIs to compute an intelligent routing score, ensuring efficient logistics for sensitive cargo.',
    techStack: ['FastAPI', 'React', 'PostgreSQL', 'TomTom API', 'OpenWeather API', 'Docker'],
    githubLink: 'https://github.com/Pragdishwar/routemonk',
    liveLink: 'https://routemonk-pro.vercel.app',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Froutemonk-pro.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'borderland-arena',
    title: 'Borderland Arena',
    description: 'Gamified technical competition platform with real-time sync and anti-cheat systems.',
    longDescription: 'A high-intensity competitive programming platform featuring real-time synchronization via Supabase, an integrated code execution engine using Piston API, and an automated "Atmospheric Breach" anti-cheat system. Includes an admin command center for game management.',
    techStack: ['React', 'Supabase', 'Monaco Editor', 'Tailwind CSS', 'TanStack Query'],
    liveLink: 'https://borderland-arena.vercel.app',
    githubLink: 'https://github.com/Pragdishwar/borderland-arena',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fborderland-arena.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
  },
  {
    id: 'vision-awd',
    title: 'Vision-Based AWD',
    description: 'IoT-enabled automated water distribution system with a computer vision dashboard.',
    longDescription: 'An intelligent IoT ecosystem designed for autonomous resource management.\n\nCase Study & Architecture:\n• Hardware Integration: An ESP32-CAM acts as the edge node, capturing continuous visual data of plant health and soil conditions. This is processed locally and piped securely to the cloud.\n• Actuator Control: Real-time telemetry from soil moisture sensors dictates the automated triggering of water relays, ensuring zero water waste.\n• Dashboard Architecture: The frontend is built with React and Vite, polling telemetry streams and displaying live camera feeds alongside historical data graphs using shadcn/ui components.',
    techStack: ['React', 'Vite', 'ESP32-CAM', 'shadcn/ui', 'Tailwind CSS'],
    liveLink: 'https://vision-based-awd.vercel.app',
    githubLink: 'https://github.com/Pragdishwar/Vision-AWD',
    image: 'https://api.microlink.io/?url=https%3A%2F%2Fvision-based-awd.vercel.app&screenshot=true&meta=false&embed=screenshot.url'
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
    id: 'exp-isshoni',
    company: 'Isshoni Nihongo',
    role: 'President',
    duration: 'Mar 2026 - Present',
    description: [
      'Lead a multidisciplinary team organizing Japanese language, cultural, and professional development events.',
      'Coordinate sponsorships, partnerships, logistics, budgeting, and volunteer management.',
      'Strengthened club growth through strategic planning and cross-cultural engagement.'
    ]
  },
  {
    id: 'exp-google',
    company: 'Google Cloud Generative AI Virtual Internship',
    role: 'Virtual Intern',
    duration: 'Apr 2025 - Jun 2025',
    description: [
      'Built AI applications using Vertex AI while gaining hands-on experience with prompt engineering, LLMs, model deployment, and Generative AI workflows.'
    ]
  },

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

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  duration: string;
}

export const education: Education[] = [
  {
    id: 'edu-1',
    institution: 'Chennai Institute of Technology',
    location: 'Chennai',
    degree: 'Bachelor of Engineering in Computer Science and Engineering',
    duration: '2024 - 2028'
  }
];

export const certifications = [
  'Google Cloud Generative AI Virtual Internship',
  'PCAP: Programming Essentials in Python',
  'Japanese Language Proficiency Test (JLPT) N4',
  'Cisco Networking Academy: Introduction to Cybersecurity',
  'Cisco Networking Academy: Introduction to Modern AI',
  'AWS Academy: Building with AWS, IoT Foundation, Kinesis Video Streams'
];

export const languages = [
  { name: 'English', proficiency: 'Professional Proficiency' },
  { name: 'Tamil', proficiency: 'Native' },
  { name: 'Japanese', proficiency: 'JLPT N4' }
];

export const interests = [
  { 
    name: 'Bleach', 
    type: 'Anime', 
    description: 'Bankai! Follows Ichigo Kurosaki, a Soul Reaper.',
    image: 'https://upload.wikimedia.org/wikipedia/en/7/72/Bleachanime.png',
    audio: 'https://www.myinstants.com/media/sounds/bleach-bankai_2.mp3'
  },
  { 
    name: 'One Piece', 
    type: 'Anime', 
    description: 'The journey of Luffy to become the Pirate King.',
    image: 'https://image.tmdb.org/t/p/w500/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg',
    audio: 'https://www.myinstants.com/media/sounds/luffy-gear-5-laugh.mp3'
  },
  { 
    name: 'Naruto', 
    type: 'Anime', 
    description: 'Believe it! The tale of a ninja who wants to be Hokage.',
    image: 'https://upload.wikimedia.org/wikipedia/en/9/94/NarutoCoverTankobon1.jpg',
    audio: 'https://www.myinstants.com/media/sounds/naruto-dattebayo_B4zR9X2.mp3'
  }
];
