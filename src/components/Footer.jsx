"use client";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="py-6 border-t border-white/10">
            <div className="container mx-auto text-center text-white/60 text-sm">
                <p>&copy; {year} Made by Muhammad Huzaifa Yousaf. All Rights Reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
