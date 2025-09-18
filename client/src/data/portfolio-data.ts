export const personalInfo = {
  name: "Ishaan Goswami",
  title: "Software Engineer",
  email: "ishaangoswami8@gmail.com",
  phone: "678-516-1756",
  linkedin: "https://linkedin.com/in/ishaan-goswami",
  github: "https://github.com/ishaan-goswami",
  location: "Atlanta, Georgia",
  biography: `Computer Science student at Georgia Institute of Technology with a concentration in Artificial Intelligence and Modeling/Simulations. Currently pursuing my Bachelor's degree with an expected graduation in May 2026. I bring hands-on experience from internships at NCR Voyix and ITProAct Technology Solutions, where I've engineered full-stack performance monitoring dashboards, built scalable RESTful services, and developed dynamic React applications. My technical expertise spans across multiple programming languages including Java, Python, JavaScript, and C#, with proficiency in modern frameworks like React, Django, and .NET. I'm passionate about leveraging machine learning and artificial intelligence to solve complex problems, as demonstrated through my projects including an NFL game predictor with 87.6% accuracy and neural network-based stock prediction models. As a Teaching Assistant for over 1200 students, I've honed my communication skills while contributing to the academic community at Georgia Tech.`
};

export const education = {
  school: "Georgia Institute of Technology",
  degree: "Bachelor of Science in Computer Science",
  location: "Atlanta, Georgia",
  graduation: "Expected May 2026",
  concentration: "Artificial Intelligence and Modeling/Simulations",
  coursework: [
    "Object-Oriented Programming",
    "Data Structures and Algorithms", 
    "Design and Analysis of Algorithms",
    "Artificial Intelligence",
    "Computer Systems and Networks",
    "Applied Combinatorics",
    "Machine Learning & Computer Vision",
    "Probability & Statistics"
  ]
};

export const technicalSkills = {
  languages: [
    { name: "Python", proficiency: 95 },
    { name: "Java", proficiency: 90 },
    { name: "JavaScript", proficiency: 85 },
    { name: "C#", proficiency: 80 },
    { name: "TypeScript", proficiency: 75 },
    { name: "C++", proficiency: 70 },
    { name: "Go", proficiency: 65 },
    { name: "C", proficiency: 70 }
  ],
  frameworks: [
    "React", "Django", ".NET", "AWS", "Docker", "Kubernetes", 
    "TensorFlow", "PostgreSQL", "Firebase", "Git", "Node.js", 
    "RESTful API", "NumPy", "Pandas", "Android Studio"
  ],
  aiml: [
    "Machine Learning & Neural Networks",
    "Computer Vision", 
    "LSTM & Time Series Analysis",
    "Data Analysis & Visualization",
    "Predictive Modeling"
  ]
};

export const experience = [
  {
    title: "Software Engineer Intern",
    company: "NCR Voyix",
    location: "Atlanta, Georgia",
    period: "May 2025 – Aug 2025",
    responsibilities: [
      "Engineered a full-stack performance monitoring dashboard that provides API request analytics by day, enabling teams to slice data by aggregate endpoint, user, response code, euID, and time.",
      "Designed secure, scalable RESTful services using .NET and C#, with SSO authentication, enabling tailored data access for different user types and organizational hierarchies.",
      "Built dynamic charting components using React, TypeScript, and Nivo with custom data transformation logic to render real-time performance metrics across multiple visualization types."
    ]
  },
  {
    title: "Teaching Assistant",
    company: "Georgia Institute of Technology College of Computing",
    location: "Atlanta, Georgia", 
    period: "Jan 2024 – Dec 2024",
    responsibilities: [
      "Working as a teaching assistant for CS 2340, Objects and Design, managing over 1200 undergraduate students, ensuring smooth course operations.",
      "Craft comprehensive problem sets and exam questions, focusing on advanced object-oriented design principles.",
      "Conduct daily office hours, providing personalized guidance and support to students."
    ]
  },
  {
    title: "Software Engineer Intern",
    company: "ITProAct Technology Solutions",
    location: "Lawrenceville, Georgia",
    period: "May 2024 – Aug 2024", 
    responsibilities: [
      "Integrated Python web scraping and HTML to create web applications that facilitate autonomous request handling.",
      "Utilized AWS Lambda to facilitate, moderate, and store user metrics, providing data for pricing formulas.",
      "Leveraged Django WebSockets Channels to design and construct asynchronous chat functionality.",
      "Enhanced database scalability by achieving a 19% increase in throughput, while ensuring data consistency."
    ]
  }
];

export const projects = [
  {
    title: "GT Course Monitor",
    date: "January 2025",
    description: "Developed a backend automation tool to monitor course availability and send real-time Discord alerts when seats open. Integrated web scraping, asynchronous Discord bot commands, and webhook alerts to provide real-time updates on course enrollment and waitlist status.",
    technologies: ["Python", "Peewee ORM", "BeautifulSoup", "Twilio", "SQLite"],
    features: [
      "Real-time course availability monitoring",
      "Discord bot integration with webhook alerts", 
      "Multi-threaded concurrent CRN tracking",
      "SQLite database with Peewee ORM"
    ],
    type: "featured"
  },
  {
    title: "NFL Game Predictor", 
    date: "December 2024",
    description: "Created an NFL game prediction model using machine learning to forecast results and identify team trends. Generated visual plots like PCA clustering graphs and feature importance charts, aiding model interpretability. Achieved an 87.6% accuracy after training the model for 50 epochs.",
    technologies: ["Python", "NumPy", "Matplotlib", "Pandas", "Seaborn"],
    achievements: [
      "87.6% prediction accuracy achieved",
      "PCA clustering analysis for team trends",
      "Feature importance visualization", 
      "50-epoch model training optimization"
    ],
    type: "featured"
  },
  {
    title: "Neural Networks Stock Predictor",
    date: "April 2024", 
    description: "Developed a stock price prediction model using LSTM networks through Python and TensorFlow. Visualized model performance with Matplotlib, comparing predicted and actual stock prices to evaluate model accuracy. Implemented Firebase for real-time data synchronization and user authentication in a mobile app.",
    technologies: ["Python", "Pandas", "NumPy", "TensorFlow", "Android Studio", "Firebase", "LSTM"],
    achievements: [
      "Improved prediction accuracy by 20% compared to traditional models",
      "Real-time data synchronization with Firebase",
      "Mobile app implementation with user authentication"
    ],
    type: "additional"
  }
];

export const stats = {
  experience: "2+",
  projects: "15+", 
  technologies: "20+",
  students: "1200+"
};
