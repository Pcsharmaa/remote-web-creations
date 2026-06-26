export type Job = {
id: string;
title: string;
location: string;
category: string;
type: string;
description: string;
requirements: string[];
postedDate: string;
};

export const jobs: Job[] = [
{
id: "1",
title: ".NET Full Stack Developer",
location: "Noida, Uttar Pradesh",
category: "Engineering",
type: "Full-time",
description:
"Build scalable enterprise applications using .NET Core, React, SQL Server and Azure.",
requirements: [
"3+ years .NET Core",
"React.js",
"SQL Server",
"REST APIs",
],
postedDate: "2026-06-20",
},
{
id: "2",
title: "React Frontend Developer",
location: "Remote",
category: "Engineering",
type: "Full-time",
description:
"Develop modern and responsive web applications using React, TypeScript and Tailwind CSS.",
requirements: [
"React.js",
"TypeScript",
"Tailwind CSS",
"REST API Integration",
],
postedDate: "2026-06-18",
},
{
id: "3",
title: "AI Engineer",
location: "Noida, Uttar Pradesh",
category: "Artificial Intelligence",
type: "Full-time",
description:
"Develop AI-powered educational products using OpenAI, RAG and Agentic AI workflows.",
requirements: [
"Python",
"OpenAI APIs",
"Vector Databases",
"Machine Learning",
],
postedDate: "2026-06-15",
},
{
id: "4",
title: "DevOps Engineer",
location: "Hybrid - Noida",
category: "Cloud & Infrastructure",
type: "Full-time",
description:
"Manage CI/CD pipelines, Azure cloud infrastructure and deployment automation.",
requirements: [
"Azure",
"Docker",
"Kubernetes",
"GitHub Actions",
],
postedDate: "2026-06-12",
},
{
id: "5",
title: "UI/UX Designer",
location: "Remote",
category: "Design",
type: "Contract",
description:
"Design intuitive and visually appealing interfaces for web and mobile applications.",
requirements: [
"Figma",
"UI Design",
"User Research",
"Prototyping",
],
postedDate: "2026-06-10",
},
];

export const insights = [
{
id: "1",
title: "How AI is Transforming Modern Education",
excerpt:
"Explore how Generative AI is revolutionizing learning experiences, assessments and personalized education.",
date: "2026-06-01",
category: "Artificial Intelligence",
},
{
id: "2",
title: "Building Scalable Applications with .NET and React",
excerpt:
"Best practices for developing enterprise-grade applications using modern web technologies.",
date: "2026-05-25",
category: "Software Development",
},
{
id: "3",
title: "The Future of Cloud-Native Applications",
excerpt:
"Why cloud-first architecture is essential for modern businesses and startups.",
date: "2026-05-15",
category: "Cloud Computing",
},
];

export const teamMembers = [
{
id: "1",
name: "Prafull Sharma",
title: "Founder & CEO",
bio: "Leading AgileBoard Technology in delivering innovative software and AI-powered solutions.",
},
{
id: "2",
name: "Engineering Team",
title: "Software Development",
bio: "Building scalable enterprise applications and modern web platforms.",
},
{
id: "3",
name: "AI Research Team",
title: "Artificial Intelligence",
bio: "Creating intelligent solutions powered by machine learning and generative AI.",
},
{
id: "4",
name: "Product Team",
title: "Product Innovation",
bio: "Designing user-centric products that solve real-world business challenges.",
},
];

export const industries = [
{
id: "education",
name: "Education Technology",
description:
"AI-powered learning management systems, online assessments and digital classrooms.",
icon: "🎓",
},
{
id: "software",
name: "Software Development",
description:
"Custom web applications, enterprise systems and SaaS platforms.",
icon: "💻",
},
{
id: "ai",
name: "Artificial Intelligence",
description:
"Generative AI, automation, intelligent assistants and data-driven solutions.",
icon: "🤖",
},
{
id: "cloud",
name: "Cloud Solutions",
description:
"Cloud-native applications, infrastructure automation and DevOps consulting.",
icon: "☁️",
},
];

export const locations = [
{
id: "1",
name: "Head Office",
address: "Ghaziabad, Uttar Pradesh, India",
phone: "+91 XXXXX XXXXX",
},
{
id: "2",
name: "Development Center",
address: "Noida, Uttar Pradesh, India",
phone: "+91 XXXXX XXXXX",
},
];

export const milestones = [
{
year: "2024",
text: "AgileBoard Technology was founded with a vision to deliver modern software solutions.",
},
{
year: "2025",
text: "Started development of AI-powered education and assessment platforms.",
},
{
year: "2026",
text: "Expanded into enterprise software development, cloud solutions and AI services.",
},
{
year: "2027",
text: "Targeting global expansion and next-generation AI-driven business products.",
},
];
