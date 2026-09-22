"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs"

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import ProjectSliderBtns from "@/components/ProjectSliderBtns";

const projects = [
    {
        num: "01",
        title: "First Portfolio",
        description: "My first portfolio serves as a personal introduction and a showcase of my skills, certifications, projects and more.",
        stack: [
            {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: 'Bootstrap'},
        ],
        image: "/assets/projects/First Portfolio.png",
        live: "https://muhammadhuzaifayousaf.github.io/",
        github: "https://github.com/muhammadhuzaifayousaf/muhammadhuzaifayousaf.github.io",
    },
    {
        num: "02",
        title: "SmartServeAI",
        description:
            "An AI-powered intelligent service marketplace that connects service seekers with verified local service providers. The platform features AI chatbot assistance, secure authentication, provider verification, ratings & reviews, real-time communication, and a modern Flutter mobile application backed by Firebase.",
        stack: [
            { name: "Flutter" },
            { name: "Firebase" },
            { name: "Cloudinary" },
            { name: "Google Maps API" },
            { name: "Gemini API" },
        ],
        image: "/assets/projects/SmartServeAI.png",
        live: "",
        github: "https://github.com/abdulsamad010/fyp_smart_serve_ai",
    },
    {
        num: "03",
        title: "Cartiqo",
        description:
            "A full stack ecommerce marketplace featuring customer, seller and admin roles, product management, orders, reviews, image uploads and REST APIs. Frontend deployed on Vercel and backend on Render.",
        stack: [
            { name: "React.js" },
            { name: "Vite" },
            { name: "Tailwind CSS" },
            { name: "JavaScript" },
            { name: "JWT" },
            { name: "MongoDB" },
            { name: "Express.js" },
            { name: "Node.js" },
            { name: "Cloudinary" },
        ],
        image: "/assets/projects/Cartiqo.png",
        live: "https://cartiqo-shop.vercel.app/",
        github: "https://github.com/muhammadhuzaifayousaf/cartigo-marketplace",
    },
    {
        num: "04",
        title: "SkillSprint",
        description:
            "A modern Flutter app to manage learning sprints, daily goals, and progress with an offline-first architecture, local storage, and a clean UI. It allows users to set learning goals, manage daily tasks, monitor progress, maintain learning streaks and view statistics.",
        stack: [
            { name: "Flutter" },
            { name: "Dart" },
            { name: "Hive Database" },
            { name: "Provider" },
            { name: "Material 3" },
        ],
        image: "/assets/projects/SkillSprint.png",
        live: "https://github.com/muhammadhuzaifayousaf/skillsprint-flutter/raw/refs/heads/main/APK/SkillSprint.apk",
        github: "https://github.com/muhammadhuzaifayousaf/skillsprint-flutter",
    },
    {
        num: "05",
        title: "Emotion Detection",
        description: "An AI powered Emotion Detection web application built with Python and Flask. It uses Watson NLP to analyze text and detect anger, disgust, fear, joy, sadness, and the dominant emotion. Includes a web interface, error handling, unit testing, Python packaging, and Pylint analysis.",
        stack: [
            {name: 'Python'}, {name: 'Flask'}, {name: 'Watson NLP'}, {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: 'unittest'}, {name: 'Pylint'}
        ],
        image: '/assets/projects/Emotion-Detection.png',
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/emotion-detection",
    },
    {
        num: "06",
        title: "Recipe Sharing Space: Grill Master",
        description: "A recipe sharing platform featuring recipe search, filtering, ratings, favorites, JWT authentication, user profiles, image uploads, and complete recipe CRUD through a REST API.",
        stack: [
            {name: 'React.js'}, {name: 'Vite'}, {name: 'Tailwind CSS'}, {name: 'Node.js'}, {name: 'Express.js'}, {name: 'JWT'}, {name: 'localStorage'},
        ],
        image: '/assets/projects/Recipe-Sharing-Space-Grill-Master.jpg',
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/recipe-sharing-space-grill-master",
    },
    {
        num: "07",
        title: "Paradise Nursery 🌿",
        description: "Paradise Nursery is a React-based online houseplant shopping application features browsing a collection of houseplants, organized into different categories, add plants to a shopping cart, adjust quantities, remove products, and view the total cost of their cart.",
        stack: [
            {name: 'React'}, {name: 'Vite'}, {name: 'CSS'}, {name: 'JavaScript'}
        ],
        image: '/assets/projects/Paradise-Nursery.png',
        live: "https://muhammadhuzaifayousaf.github.io/e-plantShopping",
        github: "https://github.com/muhammadhuzaifayousaf/e-plantShopping",
    },
    {
        num: "08",
        title: "Contacts — CS50x 2025 Final Project",
        description: "A full-stack contact management app built as the final project for Harvard's CS50x course. Add, view, update, and delete contacts with a responsive and modern UI",
        stack: [
            {name: 'React.js'}, {name: 'CSS'}, {name: 'Flask'}, {name: 'Python'},
        ],
        image: '/assets/projects/Contacts.png',
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/Contacts-CS50x_2025-Final-Project",
    },
    {
        num: "09",
        title: "Birthday Manager",
        description: "A simple and responsive web application for managing birthdays. Users can add, edit, update, and delete birthdays",
        stack: [
            {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: "Local Storage (Browser)"},
        ],
        image: "/assets/projects/Birthday Manager.png",
        live: "https://birthdays-manager.netlify.app",
        github: "https://github.com/muhammadhuzaifayousaf/Birthday-Manager",
    },
    {
        num: "10",
        title: "CS50x 2025",
        description: "My Solution for the Harvard CS50's Introduction to Computer Science course",
        stack: [
            {name: "Web Development"}, {name: 'C'}, {name: 'Python'}, {name: "Flask"}, {name: "SQL"},
        ],
        image: "/assets/projects/CS50x.png",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/CS50X_Computer_Science",
    },
    {
        num: "11",
        title: "Tic-Tac-Toe Game",
        description: "A simple and elegant Tic-Tac-Toe game. Two players take turns to place their marks (X and O) and the game highlights the winner and keeps track of wins.",
        stack: [
            {name: 'React.js'}, {name: 'CSS'}, {name: 'Vite'},
        ],
        image: '/assets/projects/Tic-Tac-Toe.png',
        live: "https://muhammadhuzaifayousaf.github.io/Tic-Tac-Toe_Game_React-JS",
        github: "https://github.com/muhammadhuzaifayousaf/Tic-Tac-Toe_Game_React-JS",
    },
    {
        num: "12",
        title: "Simple Calculator",
        description: "A simple and interactive calculator that supports basic arithmetic operations",
        stack: [
            {name: 'React.js'}, {name: 'CSS'},
        ],
        image: "/assets/projects/Calculator App.png",
        live: "https://muhammadhuzaifayousaf.github.io/Simple-Calculator-using-React",
        github: "https://github.com/muhammadhuzaifayousaf/Simple-Calculator-using-React",
    },
    {
        num: "13",
        title: "THE NEWS",
        description: "Responsive news website with multiple sections, live news updates using API, search functionality, and mobile-friendly design.",
        stack: [
            {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'},
        ],
        image: "/assets/projects/News Website.png",
        live: "https://muhammadhuzaifayousaf.github.io/THE-NEWS_EcodeCamp-Internship",
        github: "https://github.com/muhammadhuzaifayousaf/THE-NEWS_EcodeCamp-Internship",
    },
    {
        num: "14",
        title: "To-Do List Web App",
        description: "A simple To-Do List application that allows you to add, edit, delete, and mark tasks as complete or pending, with a visually appealing interface and dark mode support.",
        stack: [
            {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'}, {name: "Local Storage"},
        ],
        image: "/assets/projects/To-Do List App.png",
        live: "https://muhammadhuzaifayousaf.github.io/To-Do_List_App-Brainwave_Matrix_Intern",
        github: "https://github.com/muhammadhuzaifayousaf/To-Do_List_App-Brainwave_Matrix_Intern",
    },
    {
        num: "15",
        title: "Grill Master - Restaurant & Recipe Hub",
        description: "A website showcasing a fictional restaurant with a searchable recipe catalog.",
        stack: [
            {name: 'HTML'}, {name: 'CSS'}, {name: 'JavaScript'},
        ],
        image: "/assets/projects/Grill Master - Restaurant & Recipe Hub.png",
        live: "https://muhammadhuzaifayousaf.github.io/Grill-Master_Restaurant-and-Recipe-Hub_EcodeCamp-Internship",
        github: "https://github.com/muhammadhuzaifayousaf/Grill-Master_Restaurant-and-Recipe-Hub_EcodeCamp-Internship",
    },
    {
        num: "16",
        title: "Introduction to Node.js (LFW111)",
        description: "My workspace for the Introduction to Node.js course. It includes the materials and work that I did throughout the course, showcasing various aspects of Node.js.",
        stack: [
            {name: 'Node.js'},
        ],
        image: "/assets/projects/Intro-to-Nodejs.png",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/Introduction-to-Node.js-LFW111",
    },
    {
        num: "17",
        title: "HTML and CSS in depth",
        description: "My Workspace for the Meta HTML and CSS in depth course.",
        stack: [
            {name: 'HTML'}, {name: 'CSS'},
        ],
        image: "/assets/projects/HTML and CSS.png",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/HTML-and-CSS-in-depth",
    },
    {
        num: "18",
        title: "Little Lemon Restaurant",
        description: "A responsive website for a fictional restaurant, created as part of the Meta HTML and CSS in depth course.",
        stack: [
            {name: 'HTML'}, {name: 'CSS'},
        ],
        image: "/assets/projects/Little Lemon.png",
        live: "https://muhammadhuzaifayousaf.github.io/HTML-and-CSS-in-depth",
        github: "https://github.com/muhammadhuzaifayousaf/HTML-and-CSS-in-depth/tree/main/docs",
    },
    {
        num: "19",
        title: "Weather Now 🌤️",
        description: "This app provides real-time weather updates, including temperature, wind speed, humidity, and a 5-day weather forecast.",
        stack: [
            {name: 'HTML'}, {name: "Tailwind CSS"}, {name: 'JavaScript'},
        ],
        image: "/assets/projects/Weather App.png",
        live: "https://muhammadhuzaifayousaf.github.io/Weather-App",
        github: "https://github.com/muhammadhuzaifayousaf/Weather-App",
    },
    {
        num: "20",
        title: "Simple Text Editor",
        description: "A Python-based text editor with features like Formating Text, Font Size, Style, and more.",
        stack: [
            {name: 'Python'}, {name: "Tkinter"}, {name: 'Pytest'},
        ],
        image: "/assets/projects/text-editor.jpg",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/CS50_Python/tree/main/Simple%20Text%20Editor",
    },
    {
        num: "21",
        title: "CS50P",
        description: "My Solution for the Harvard CS50's Introduction to Programming with Python course",
        stack: [
            {name: 'Python'},
        ],
        image: "/assets/projects/CS50P.png",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/CS50_Python",
    },
    {
        num: "22",
        title: "Simple Chatbot",
        description: "Created a simple chatbot that can engage in basic conversations with users using the spaCy library in Python.",
        stack: [
            {name: 'Python'}, {name: "spaCy"},
        ],
        image: "/assets/projects/chatbot.jpg",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/Codeclause_AI_Internship/tree/main/Chatbot%20Creation",
    },
    {
        num: "23",
        title: "Image Recognition using CNN",
        description: "Created a Convolutional Neural Network (CNN) based image classifier using Python and TensorFlow to categorize images into predefined categories.",
        stack: [
            {name: 'Python'}, {name: "TensorFlow"}, {name: "NumPy"}, {name: "Matplotlib"},
        ],
        image: "/assets/projects/Image Recognition.png",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/Codeclause_AI_Internship/tree/main/Image%20Recognition",
    },
    {
        num: "24",
        title: "Phonebook Application",
        description: "A phonebook application developed in C++ with features like contact management with search functionality and a user-friendly interface.",
        stack: [
            {name: 'C++'},
        ],
        image: "/assets/projects/phonebook.jpg",
        live: "",
        github: "https://github.com/muhammadhuzaifayousaf/Phonebook_in_Cpp",
    },
];

const Projects = () => {
    const [project, setProject] =useState(projects[0]);

    const handleSlideChange = (swiper) => {
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state based on current slide index
        setProject(projects[currentIndex]);
    };

    return (
        <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1, transition: {delay: 2.4, duration: 0.4, ease: "easeIn" } }} className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                    <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">

                        <div className="flex flex-col gap-[30px] h-[50%]">
                            {/* outline num */}
                            <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                                {project.num}
                            </div>
                            {/* project title */}
                            <h2 className="text-3xl md:text-[42px] font-bold leading-none text-white 
                            group-hover:text-accent transition-all duration-500 capitalize">
                                {project.title}
                            </h2>
                            {/* project description */}
                            <p className="text-white/60">{project.description}</p>
                            {/* stack */}
                            <ul className="flex flex-wrap gap-4">
                                {project.stack.map((item, index) => {
                                    return (
                                    <li key={index} className="text-xl text-accent">
                                        {item.name}
                                        {/* remove the last comma */}
                                        {index !== project.stack.length - 1 && ","}
                                    </li>
                                    );
                                })}
                            </ul>
                            {/* border */}
                            <div className="border border-white/20"></div>
                            {/* buttons */}
                            <div className="flex items-center gap-4">
                                {/* live project button */}
                                {project.live && (
                                <Link href={project.live} passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                        bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-3xl 
                                            group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Live project</p>
                                        </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    </a>
                                </Link>
                                )}

                                {/* github project button */}
                                {project.github && (
                                <Link href={project.github} passHref legacyBehavior>
                                    <a target="_blank" rel="noopener noreferrer">
                                    <TooltipProvider delayDuration={100}>
                                        <Tooltip>
                                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full 
                                        bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-3xl 
                                            group-hover:text-accent" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                        </Tooltip>
                                    </TooltipProvider>
                                    </a>
                                </Link>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full xl:w-[50%]">
                        <Swiper spaceBetween={30} slidesPerView={1} className="xl:h-[520px] 
                        mb-12" onSlideChange={handleSlideChange}>
                            {projects.map((project, index) => {
                                return <SwiperSlide key={index} className="w-full">
                                    <div className="h-[460px] relative group flex justify-center 
                                    items-center bg-pink-50/20">
                                        {/* overlay */}
                                        <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 
                                        z-10"></div>
                                        {/* image */}
                                        <div className="relative w-full h-full">
                                            <Image src={project.image} fill className="object-contain" 
                                            alt="" />
                                        </div>
                                    </div>
                                </SwiperSlide>;
                            })}
                            {/* slider buttons */}
                            <ProjectSliderBtns 
                                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] 
                                xl:bottom-0 z-20 w-full justify-between xl:w-max
                                xl:justify-none" 
                                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-
                                [44px] h-[44px] flex justify-center items-center transition-all"
                            />
                        </Swiper>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Projects;