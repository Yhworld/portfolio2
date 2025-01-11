"use client";

import { TbMail } from "react-icons/tb";
import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isClient, setIsClient] = useState(false);
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  

  useEffect(() => {
    setIsClient(true);
  }, []);

  const copyEmailToClipboard = () => {
    if (isClient) {
      navigator.clipboard.writeText("Yahyahussein670@gmail.com");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    


    emailjs
        .sendForm("service_bohwjxb", "template_25ywfrm", form.current, {
          publicKey: "ojjXtPMouazAR9xrZ",
        })
      .then(
        () => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 3000);
        },
        () => {
          setLoading(false);
          setError(true);
        }
      );
  };

  return (
    <div className="text-white p-4 bg-blackMamba-500">
      <div className="container max-w-screen-xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center">
        {/* Left Section */}
        <div className="flex flex-row md:flex-col items-center">
          <hr className="w-4 border-2 md:border-4 md:w-2 font-bold md:pt-36" />
          <div
            id="about"
            className="md:rotate-180 tracking-wide text-gray-200 sm:text-5xl text-3xl font-bold"
          >
            CONTACT ME
          </div>
          <hr className="w-4 border-2 md:border-4 md:w-2 font-bold md:pt-36" />
        </div>

        {/* Right Section - Contact Form */}
        <div className="w-full md:w-3/5 mt-10 md:mt-0">
          <h2 className="tracking-wide text-3xl sm:text-4xl mb-16">
            Lets Get in Touch
          </h2>
          <form className="space-y-6" ref={form} onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-200" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="mt-2 pb-2 border-b-2 border-gray-600 bg-transparent text-white focus:border-white focus:outline-none"
                placeholder="Enter your name"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-200" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="mt-2 pb-2 border-b-2 border-gray-600 bg-transparent text-white focus:border-white focus:outline-none"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="flex flex-col">
              <label className="text-sm font-medium text-slate-200" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="3"
                className="mt-2 pb-2 border-b-2 border-gray-600 bg-transparent text-white focus:border-white focus:outline-none"
                placeholder="Enter your message"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              className={`w-full py-3 text-white font-semibold rounded-lg transition duration-300 ${
                loading
                  ? "bg-gray-500 cursor-not-allowed"
                  : "bg-brown-500 hover:bg-brown-700"
              }`}
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </button>

            {success && (
              <p
                className="text-green-400 text-center mt-4"
                aria-live="polite"
              >
                Message Sent Successfully!
              </p>
            )}
            {error && (
              <p
                className="text-red-400 text-center mt-4"
                aria-live="polite"
              >
                Failed to send message. Please try again later.
              </p>
            )}

            <div className="space-y-4 text-center">
              <p>or</p>
              <div className="flex items-center justify-center gap-4 text-slate-200">
                <TbMail className="text-2xl" />
                <span
                  className="cursor-pointer hover:underline transition-all duration-300"
                  onClick={copyEmailToClipboard}
                >
                  {copied ? (
                    <span className="text-green-400">Copied!</span>
                  ) : (
                    "Yahyahussein670@gmail.com"
                  )}
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
