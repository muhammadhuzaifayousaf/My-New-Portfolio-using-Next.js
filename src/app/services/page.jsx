"use client";

import { BsArrowDownRight } from 'react-icons/bs'
import Link from 'next/link';

const services = [
    {
        num: '01',
        title: 'Web Development',
        description: 'I build responsive and modern websites tailored to your needs. From sleek front-ends to full-stack applications, I’ve got you covered.',
        href: ""
    },
    {
        num: '02',
        title: 'Front-End Design',
        description: 'I create clean and user-friendly interfaces using HTML, CSS, JavaScript, and Tailwind CSS to ensure a seamless user experience across all devices.',
        href: ""
    },
    {
        num: '03',
        title: 'React Projects',
        description: 'I develop fast, interactive, and scalable web apps using React. From single-page applications to complex UIs, I bring dynamic features to life.',
        href: ""
    },
    {
        num: '04',
        title: 'Full-Stack Solutions',
        description: 'Combining Flask (Python) with modern front-end tools, I build complete full-stack apps, from database design to deployment.',
        href: ""
    },
];

import { motion } from 'framer-motion';

const Services = () => {
    return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
        <div className="container mx-auto">
            <motion.div initial={{opacity: 0}} animate={{opacity: 1, transition: 
                {delay: 2.4, duration: 0.4, ease: 'easeIn'},
            }}
            className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
            >
                {services.map((service, index) => {
                    return <div key={index} className="flex-1 flex flex-col justify-center gap-6
                    group">
                        {/* { top } */}
                        <div className="w-full flex justify-between items-center">
                            <div className="text-5xl font-extrabold text-outline
                            text-transparent group-hover:text-outline-hover transition-all 
                            duration-500">
                                {service.num}
                            </div>
                            <Link href={service.href} className="w-[70px] h-[70px] 
                            rounded-full bg-white group-hover:bg-accent transition-all 
                            duration-500 flex justify-center items-center hover:-rotate-45">
                                <BsArrowDownRight className="text-primary text-3xl"/>
                            </Link>
                        </div>
                        {/* title */}
                        <h2 className="text-[42px] font-bold leading-none text-white
                        group-hover:text-accent transition-all duration-500">
                            {service.title}
                        </h2>
                        {/* description */}
                        <p className="text-white/60">{service.description}</p>
                        {/* border */}
                        <div className="border-b border-white/20 w-full"></div>
                    </div>;
                })}
            </motion.div>
        </div>
    </section>
    );
};

export default Services