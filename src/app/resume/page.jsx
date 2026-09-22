"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiNextdotjs, SiFlutter, SiDart, SiFirebase, SiMongodb, SiCplusplus, SiJava, SiPython, SiFlask, SiMysql, SiGit } from 'react-icons/si';

//about data
const about = {
    title: 'About me',
    description:
    "I'm a passionate Web Developer specializing in building modern, responsive, and scalable web applications using Tailwind CSS, Next.js, JavaScript, MERN stack, and related technologies. I also develop cross-platform mobile applications with Flutter and enjoy creating clean, user-focused digital experiences. I'm passionate about solving real-world problems, continuously learning new technologies, and delivering high-quality software solutions.",
    info: [
        {
            fieldName: "Name",
            fieldValue: "Muhammad Huzaifa Yousaf"
        },
        {
            fieldName: "Phone",
            fieldValue: "(+92) 317 0936589"
        },
        {
            fieldName: "Experience",
            fieldValue: "1+ Year"
        },
        {
            fieldName: "Email",
            fieldValue: "mohammadhuzaifa63@gmail.com"
        },
        {
            fieldName: "Linkedin",
            fieldValue: "muhammad-huzaifa-yousaf"
        },
        {
            fieldName: "Github",
            fieldValue: "muhammadhuzaifayousaf"
        },
        {
            fieldName: "Languages",
            fieldValue: "English, Urdu"
        },
        {
            fieldName: "Location",
            fieldValue: "Rawalpindi, Punjab, Pakistan"
        },
    ]
};

//experience data
const experience = {
    icon: '/assets/resume/badge.svg',
    title: 'Experience',
    items: [
        {
            company: "PAKISTAN AERONAUTICAL COMPLEX (PAC) KAMRA",
            position: "INFORMATION TECHNOLOGY (IT) INTERNSHIP",
            duration: "AUG 2026 – SEP 2026",
            description: "During 6 weeks Internship at Mirage Rebuild Factory (MRF), Pakistan Aeronautical Complex (PAC) Kamra, gaining practical exposure to computer hardware, Windows administration, web development, networking, telecom systems, RAID, cybersecurity, software development, and AI. Also visited different sections and factories of PAC to understand the practical use of IT, engineering and advanced technologies in the aviation and defence environment."
        },
        {
            company: "ITSIMPLERA SOLUTIONS",
            position: "FRONT-END WEB DEVELOPMENT INTERNSHIP",
            duration: "JUN 2026 – AUG 2026 (REMOTE)",
            description: "During two-month remote Front-End Web Development Internship at ITSimplera Solutions, I developed Cartiqo, a full-stack eCommerce marketplace using React.js, Tailwind CSS, Node.js, Express.js, and MongoDB. Implemented responsive UI, authentication, product management, shopping cart, wishlist, reviews, orders, role-based functionality, seller/admin features, REST APIs, performance optimization, and deployed the application to production."
        },
        {
            company: "ECODECAMP (PVT.) LTD",
            position: "FRONTEND WEB DEVELOPER INTERN",
            duration: "SEP 2024 – OCT 2024 (REMOTE)",
            description: "As a Frontend Web Developer intern at EcodeCamp, I have been responsible for building and optimizing responsive web applications using technologies such as HTML, CSS, and JavaScript. My role includes developing user-friendly interfaces, ensuring cross-browser compatibility, and maintaining clean, efficient code. Additionally, I manage version control and project repositories using GitHub. Through this internship, I have gained hands-on experience in front-end development, enhanced my problem-solving skills, and contributed to real-world projects."
        },
    ]
};

//education data
const education = {
    icon: '/assets/resume/cap.svg',
    title: 'Education',
    items: [
        {
            institution: "NATIONAL SKILLS UNIVERSITY, ISLAMABAD",
            degree: "BS COMPUTER SCIENCE",
            duration: "2022 – 2026",
            grade: "3.34 CGPA"
        },
        {
            institution: "FAZAIA DEGREE COLLEGE, ARF COLONY, KAMRA",
            degree: "HSSC",
            duration: "2019 – 2021",
            grade: "74%"
        },
    ]
};

//skills data
const skills = {
    title: "My skills",
    skillList: [
        {
            icon: <FaHtml5 />,
            name: "HTML",
        },
        {
            icon: <FaCss3 />,
            name: "CSS",
        },
        {
            icon: <FaJs />,
            name: "JavaScript",
        },
        {
            icon: <FaReact />,
            name: "React.js",
        },
        {
            icon: <SiNextdotjs />,
            name: "Next.js",
        },
        {
            icon: <SiTailwindcss />,
            name: "Tailwind CSS",
        },
        {
            icon: <FaNodeJs />,
            name: "Node.js",
        },
        {
            icon: <SiFlutter />,
            name: "Flutter",
        },
        {
            icon: <SiDart />,
            name: "Dart",
        },
        {
            icon: <SiFirebase />,
            name: "Firebase",
        },
        {
            icon: <SiCplusplus />,
            name: "C++",
        },
        // {
        //     icon: <SiJava />,
        //     name: "Java",
        // },
        {
            icon: <SiPython />,
            name: "Python",
        },
        {
            icon: <SiFlask />,
            name: "Flask",
        },
        {
            icon: <SiMysql />,
            name: "SQL",
        },
        {
            icon: <SiMongodb />,
            name: "MongoDB",
        },
        {
            icon: <SiGit />,
            name: "Git",
        },
    ]
}

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger  } from '@/components/ui/tooltip';
import { ScrollArea } from '@/components/ui/scroll-area';
import { motion } from 'framer-motion';

const Resume = () => {
    return (
        <motion.div initial={{ opacity: 0 }} animate={{
            opacity: 1, transition: {
                delay: 2.4,
                duration: 0.4, ease: 'easeIn'
            },
        }}

        className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
        >
            <div className="container mx-auto">
                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 
                    gap-6">
                        <TabsTrigger value="experience">Experience</TabsTrigger>
                        <TabsTrigger value="education">Education</TabsTrigger>
                        <TabsTrigger value="skills">Skills</TabsTrigger>
                        <TabsTrigger value="about">About</TabsTrigger>
                    </TabsList>

                    {/* content */}
                    <div className="min-h-[70vh] w-full">
                        {/* experience */}
                        <TabsContent value="experience" className="w-full rounded-xl">
                            <div className="flex flex-col gap-8 text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>

                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 xl:grid-cols-1 2xl:grid-cols-2 gap-6 max-w-6xl mx-auto px-4">
                                        {experience.items.map((item, index) => (
                                            <li
                                                key={index}
                                                className="bg-[#232329] rounded-2xl p-6 flex flex-col gap-2 text-left shadow-md transition hover:shadow-lg"
                                            >
                                                <span className="text-accent">{item.duration}</span>
                                                <h3 className="text-xl font-semibold lg:text-left">{item.position}</h3>

                                                <div className="flex flex-col gap-3">
                                                    <div className="flex items-center gap-2">
                                                        {/* dot */}
                                                        <span className="w-[6px] h-[6px] rounded-full bg-accent" />
                                                        <p className="text-white/80 font-semibold">{item.company}</p>
                                                    </div>
                                                    <p className="text-base text-white/60">{item.description}</p>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        {/* education */}
                        <TabsContent value="education" className="w-full">
                        <div className="flex flex-col gap-6 text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{education.title}</h3>

                            <ScrollArea className="h-[400px]">
                            <ul className="flex flex-col gap-6">
                                {education.items.map((item, index) => (
                                <li
                                    key={index}
                                    className="bg-[#232329] rounded-xl p-6 xl:p-10 flex flex-col gap-2 text-center xl:text-left"
                                >
                                    <span className="text-accent text-sm xl:text-base">{item.duration}</span>
                                    <h3 className="text-xl xl:text-2xl font-semibold">{item.degree}</h3>

                                    <div className="flex items-center justify-center xl:justify-start gap-2">
                                    {/* dot */}
                                    <span className="w-[10px] h-[10px] rounded-full bg-accent" />
                                    <p className="text-white/80 font-semibold text-sm xl:text-base">
                                        {item.institution}
                                    </p>
                                    </div>

                                    {item.grade && (
                                    <p className="text-white/60 text-sm xl:text-base mt-1">
                                        {item.grade}
                                    </p>
                                    )}
                                </li>
                                ))}
                            </ul>
                            </ScrollArea>
                        </div>
                        </TabsContent>

                        {/* skills */}
                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                                    {skills.skillList.map((skill, index) => {
                                        return <li key={index}>
                                            <TooltipProvider delayDuration={100}>
                                                <Tooltip>
                                                    <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                                        <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                                                    </TooltipTrigger>
                                                    <TooltipContent>
                                                        <p className='capitalize'>{skill.name}</p>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </li>;
                                    })}
                                </ul>
                            </div>
                        </TabsContent>

                        {/* about */}
                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <h3 className="text-4xl font-bold">{about.title}</h3>
                                <p className="max-w-[710px] text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[710px] mx-auto xl:mx-0">
                                    {about.info.map((item, index) => {
                                        return (
                                            <li key={index} className="flex items-center justify-center xl:justify-start gap-4">
                                                <span className="text-white/60">{item.fieldName}</span>
                                                <span className="text-xl">{item.fieldValue}</span>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </motion.div>
    )
}

export default Resume