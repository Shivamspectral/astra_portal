export type Project = {
  id: string;
  index: string;
  title: string;
  tags: string[];
  summary: string;
  detail: string;
  demo?: "terminal" | "scan";
  status: string;
};

export const projects: Project[] = [
  {
    id: "council",
    index: "01",
    title: "Council Management System",
    tags: ["Web", "Management", "Institutional"],
    summary: "A centralized platform for organizing council workflows, information and administrative processes.",
    detail:
      "A centralized digital platform designed to organize council workflows, information and administrative processes in one structured environment — replacing scattered spreadsheets and manual coordination with a single system of record.",
    status: "DEPLOYED",
  },
  {
    id: "college",
    index: "02",
    title: "Institutional Management System",
    tags: ["Web", "Software", "Management"],
    summary: "A structured system for simplifying institutional workflows and centralizing management operations.",
    detail:
      "A structured digital system designed to simplify institutional workflows and centralize essential management operations, built around the specific processes of the organization rather than a generic template.",
    status: "DEPLOYED",
  },
  {
    id: "ai-assistant",
    index: "03",
    title: "Conversational AI Assistant",
    tags: ["AI", "Interactive", "UI"],
    summary: "An experimental assistant interface exploring intelligent, voice-style interaction design.",
    detail:
      "An experimental assistant-interface concept — heads-up display panels, structured command framing, and a conversational interaction layer exploring how people talk to systems and how those systems should respond.",
    demo: "terminal",
    status: "PROTOTYPE",
  },
  {
    id: "attendance",
    index: "04",
    title: "Smart Attendance",
    tags: ["Automation", "Data", "Management"],
    summary: "A digital attendance workflow designed to reduce manual effort and improve record-keeping.",
    detail:
      "A digital attendance workflow designed to reduce manual effort and improve the organization of attendance records, replacing paper registers and repetitive manual entry with an automated capture process.",
    demo: "scan",
    status: "IN DEVELOPMENT",
  },
  {
    id: "festival",
    index: "05",
    title: "Festival Websites",
    tags: ["Web", "Events", "UI/UX"],
    summary: "Event-focused digital experiences communicating information, schedules and activities.",
    detail:
      "Event-focused digital experiences designed to communicate information, schedules and activities through modern, responsive interfaces — built for festivals and large community events.",
    status: "DEPLOYED",
  },
  {
    id: "portfolios",
    index: "06",
    title: "Portfolio & Brand Websites",
    tags: ["Portfolio", "Web", "UI/UX"],
    summary: "Personal and professional websites presenting individuals, products and small brands.",
    detail:
      "An ongoing series of portfolio and brand websites, each shaped around a different person, product or problem — professional digital presence built for individuals and small organizations.",
    status: "ONGOING",
  },
  {
    id: "ai-interface",
    index: "07",
    title: "AI Interactive Interface",
    tags: ["AI", "Interaction", "UI/UX"],
    summary: "An experimental AI-powered interface exploring intelligent interaction and modern digital experiences.",
    detail:
      "An experimental AI-powered interface exploring intelligent interaction and modern digital experiences — probing how conversational systems can be made clearer and more usable.",
    status: "PROTOTYPE",
  },
  {
    id: "cert-system",
    index: "08",
    title: "Digital Certificate System",
    tags: ["Automation", "Documents", "Web"],
    summary: "A digital workflow for generating and managing certificates efficiently and consistently.",
    detail:
      "A digital workflow for generating and managing certificates efficiently and consistently — built to remove manual certificate handling from events and courses.",
    status: "PROTOTYPE",
  },
];

export const capabilities = [
  {
    index: "01",
    title: "Web Development",
    body: "Business websites, institutional platforms, landing pages, dashboards and management portals.",
  },
  {
    index: "02",
    title: "Custom Software",
    body: "Systems designed around specific operational requirements instead of a generic template.",
  },
  {
    index: "03",
    title: "AI / Machine Learning",
    body: "AI-powered systems for prediction, automation, intelligent interaction and document processing.",
  },
  {
    index: "04",
    title: "Automation",
    body: "Turning repetitive processes into structured, reliable digital workflows.",
  },
  {
    index: "05",
    title: "UI / UX",
    body: "Interfaces that make complex systems clear, usable and intentional.",
  },
  {
    index: "06",
    title: "Digital Presence",
    body: "Professional digital experiences for organizations, products, professionals and brands.",
  },
];

export const crew = [
  {
    name: "Vedant Vinod Aware",
    role: "Product Development & Systems Engineering",
    email: "astra.vedant@gmail.com",
    avatar: "VA",
  },
  {
    name: "Shivam Keshav Giram",
    role: "Backend Engineering",
    email: "astra.shivam@gmail.com",
    avatar: "SG",
  },
  {
    name: "Shrishti Dharmendra Mall",
    role: "UI / UX Design",
    email: "astra.shrishti@gmail.com",
    avatar: "SM",
  },
  {
    name: "Mohammed Anzar Sayyed",
    role: "AI / ML Engineering",
    email: "astra.anzar@gmail.com",
    avatar: "MA",
  },
  {
    name: "Shruti Shatrughan Kale",
    role: "Frontend Engineering",
    email: "astra.shruti@gmail.com",
    avatar: "SK",
  },
];

export const directives = [
  {
    index: "01",
    title: "Requirement-First",
    body: "We build around your brief, not a fixed template.",
  },
  {
    index: "02",
    title: "Full-Cycle",
    body: "Concept through deployment — not just design, not just code.",
  },
  { index: "03", title: "Practical", body: "Solving real problems with usable technology." },
  {
    index: "04",
    title: "Collaborative",
    body: "Development and design working from the same brief, from day one.",
  },
];

export const process = [
  { index: "01", title: "Discover", body: "Understand the problem, users, goals and constraints." },
  { index: "02", title: "Define", body: "Translate the requirement into clear functionality and outcomes." },
  { index: "03", title: "Plan", body: "Define architecture, scope, technologies and priorities." },
  { index: "04", title: "Design", body: "Create the interface and experience around the intended users." },
  { index: "05", title: "Develop", body: "Build the product in structured iterations." },
  { index: "06", title: "Test", body: "Validate functionality, responsiveness and edge cases." },
  { index: "07", title: "Deploy", body: "Prepare the solution for real-world use." },
  { index: "08", title: "Improve", body: "Use feedback and observation to refine after launch." },
];

export const businessServices = [
  "Business Websites",
  "Landing Pages",
  "Web Applications",
  "Management Systems",
  "Automation",
  "AI-Powered Solutions",
  "Custom Software",
  "UI / UX",
];

export const institutionServices = [
  "Institutional Portals",
  "Community Platforms",
  "Event Systems",
  "Management Systems",
  "Attendance Systems",
  "Digital Certificate Systems",
  "Internal Tools",
  "Administrative Automation",
];

export const proofOfWork = [
  { label: "Projects", value: projects.length.toString().padStart(2, "0") },
  { label: "Service Domains", value: capabilities.length.toString().padStart(2, "0") },
  { label: "Team Members", value: crew.length.toString().padStart(2, "0") },
  { label: "Process Stages", value: process.length.toString().padStart(2, "0") },
];

export const faqs = [
  {
    q: "What does ASTRA do?",
    a: "ASTRA designs and develops websites, applications, AI-powered systems, automation tools, digital platforms and custom software solutions.",
  },
  {
    q: "Can ASTRA build a custom solution?",
    a: "Yes. Projects are approached around the specific requirement, workflow and intended outcome — not a fixed template.",
  },
  {
    q: "Do you only build websites?",
    a: "No. Web development is one part of ASTRA's capabilities. We also work across custom software, AI/ML, automation and UI/UX.",
  },
  {
    q: "What technologies do you use?",
    a: "We select technologies according to the project. Our work spans modern frontend frameworks, Python-based backend systems, databases, AI/ML technologies and automation tools.",
  },
  {
    q: "How does a project begin?",
    a: "Projects begin with understanding the requirement, goals, users and constraints before defining the appropriate technical approach.",
  },
  {
    q: "Can businesses or organizations work with ASTRA?",
    a: "Yes. ASTRA is open to suitable development and technology collaborations.",
  },
];

export const sectors = [
  { id: "mission", label: "About", code: "01" },
  { id: "projects", label: "Work", code: "02" },
  { id: "capabilities", label: "Services", code: "03" },
  { id: "crew", label: "Team", code: "04" },
  { id: "comms", label: "Contact", code: "05" },
] as const;

export type SectorId = (typeof sectors)[number]["id"];
