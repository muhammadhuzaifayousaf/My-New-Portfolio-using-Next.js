"use client";

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";

const info = [
    {
        icon: <FaPhoneAlt />,
        title: "Phone",
        description: "(+92) 317 0936589",
    },
    {
        icon: <FaEnvelope />,
        title: "Email",
        description: "mohammadhuzaifa63@gmail.com",
    },
    {
        icon: <FaMapMarkedAlt />,
        title: "Address",
        description: "Rawalpindi, Punjab, Pakistan",
    },
];

const Contact = () => {
    const [form, setForm] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });

    const [status, setStatus] = useState({ type: "", message: "" });
    const [captchaToken, setCaptchaToken] = useState(null);
    const recaptchaRef = useRef(null);
    const [captchaError, setCaptchaError] = useState("");

    useEffect(() => {
        if (status.message) {
            const timer = setTimeout(() => {
                setStatus({ type: "", message: "" });
            }, 5000);
            return () => clearTimeout(timer);
        }
    }, [status]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSelect = (value) => {
        setForm({ ...form, service: value });
    };

    const validateForm = () => {
        const { firstname, lastname, email, phone, service, message } = form;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const phoneRegex = /^\+(?:[0-9] ?){6,14}[0-9]$/;

        if (!firstname || !lastname || !email || !phone || !service || !message) {
            return "All fields are required.";
        }
        if (!emailRegex.test(email)) {
            return "Enter a valid email address.";
        }
        if (!phoneRegex.test(phone)) {
            return "Enter a valid international phone number with country code.";
        }
        if (!captchaToken) {
            setCaptchaError("Please complete the reCAPTCHA.");
            return null; // Do not return error string for status.message
        }
        setCaptchaError("");
        return null;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if (validationError) {
            setStatus({ type: "error", message: validationError });
            return;
        }

        // Prevent form submission if captcha is missing
        if (!captchaToken) return;

        setStatus({ type: "", message: "" });

        try {
            const response = await fetch("https://formspree.io/f/xnnzojkb", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(form),
            });

            if (response.ok) {
                setForm({
                    firstname: "",
                    lastname: "",
                    email: "",
                    phone: "",
                    service: "",
                    message: "",
                });
                setCaptchaToken(null);
                recaptchaRef.current.reset();
                setStatus({
                    type: "success",
                    message: "Message sent successfully to mohammadhuzaifa63@gmail.com",
                });
            } else {
                setStatus({
                    type: "error",
                    message: "Something went wrong. Please try again later.",
                });
            }
        } catch (err) {
            setStatus({
                type: "error",
                message: "An unexpected error occurred. Please try again later.",
            });
        }
    };

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{
                opacity: 1,
                transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
            }}
            className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:w-[54%] order-2 xl:order-none">
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col gap-6 p-6 md:p-10 bg-[#27272c] rounded-xl"
                        >
                            <h3 className="text-4xl text-accent">Contact me</h3>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input
                                    name="firstname"
                                    value={form.firstname}
                                    onChange={handleChange}
                                    placeholder="Firstname"
                                />
                                <Input
                                    name="lastname"
                                    value={form.lastname}
                                    onChange={handleChange}
                                    placeholder="Lastname"
                                />
                                <Input
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Email address"
                                />
                                <Input
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="Phone number"
                                />
                            </div>

                            <Select onValueChange={handleSelect} value={form.service}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a service" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="Web Development">
                                            Web Development
                                        </SelectItem>
                                        <SelectItem value="Mobile App Development">
                                            Mobile App Development
                                        </SelectItem>
                                        <SelectItem value="Other">Other</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>

                            <Textarea
                                className="h-[200px]"
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                placeholder="Type your message here."
                            />

                            {/* reCAPTCHA Error Above */}
                            {captchaError && (
                                <div className="p-2 rounded text-sm font-medium bg-red-500/10 text-red-400 border border-red-400">
                                    {captchaError}
                                </div>
                            )}

                            <ReCAPTCHA
                                ref={recaptchaRef}
                                sitekey="6Lfvfp0rAAAAADmjOjMHgY17MnRKlPf1Q8XK5ixV"
                                onChange={(token) => {
                                    setCaptchaToken(token);
                                    setCaptchaError("");
                                }}
                                theme="dark"
                            />

                            <Button type="submit" size="md" className="max-w-40">
                                Send message
                            </Button>

                            {/* Form Status (only if not duplicate of captcha) */}
                            {status.message && status.message !== "Please complete the reCAPTCHA." && (
                                <div
                                    className={`p-3 rounded text-sm font-medium ${status.type === "success"
                                            ? "bg-green-500/10 text-green-400 border border-green-400"
                                            : "bg-red-500/10 text-red-400 border border-red-400"
                                        }`}
                                >
                                    {status.message}
                                </div>
                            )}
                        </form>
                    </div>

                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item, index) => (
                                <li key={index} className="flex items-center gap-6">
                                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-xl flex items-center justify-center">
                                        <div className="text-[28px]">{item.icon}</div>
                                    </div>
                                    <div className="flex-1">
                                        <p className="text-white/60">{item.title}</p>
                                        <h3 className="text-xl">{item.description}</h3>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    );
};

export default Contact;
