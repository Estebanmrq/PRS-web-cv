/*
** E.Marques PROJECT, 2024
** esteban-marques-web-cv
** File description:
** Contact
*/

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import emailjs from "emailjs-com";
import Alert from "../../Alert";
import SocialMedia from "../../SocialMedia";

export default function Contact() {
    const contactRef = useRef();
    const [success, setSuccess] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        gsap.fromTo(contactRef.current, 
            { opacity: 0, y: 20 }, 
            { opacity: 1, y: 0, duration: 1.5, ease: "power2.out", delay: 0 }
        );
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, e.target, process.env.REACT_APP_USER_ID)
            .then((result) => {
                console.log(result.text);
                setSuccess("Your message has been sent successfully. I'll get back to you as soon as possible!");
            }, (error) => {
                console.log(error.text);
                setError("An error occurred, please try again later.");
            });

        e.target.reset();
    };

    return (
        <div className="min-h-screen">
            <section ref={contactRef} className="container mx-auto p-4 my-6 bg-pdark-black">
                <div className="py-6 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-center text-pmid-purple">Contact Me</h2>
                    <p className="mb-6 text-center text-white sm:text-lg">Feel free to reach out for internships, questions, or feedback. I'm open to hearing from you!</p>
                    {success && <Alert text={success} setText={setSuccess} />}
                    {error && <Alert text={error} setText={setError} type="error" />}
                    <form onSubmit={sendEmail} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block mb-1 text-sm font-bold text-pmid-purple">Your email</label>
                            <input type="email" name="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2" placeholder="name@domain.com" required />
                        </div>
                        <div>
                            <label htmlFor="subject" className="block mb-1 text-sm font-bold text-pmid-purple">Subject</label>
                            <input type="text" name="subject" id="subject" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500" placeholder="Let me know how I can help you" required />
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-1 text-sm font-bold text-pmid-purple">Your message</label>
                            <textarea name="message" id="message" rows="5" className="block p-2 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500" placeholder="Leave a comment..." required></textarea>
                        </div>
                        <button type="submit" className="py-2 px-4 bg-pmid-purple hover:bg-pdark-purple text-sm font-medium text-center text-white rounded-lg sm:w-fit focus:ring-4 focus:outline-none focus:ring-primary-300">Send message</button>
                    </form>
                    <SocialMedia />
                </div>
            </section>
        </div>
    );
}
