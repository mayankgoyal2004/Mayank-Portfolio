import { useState, useRef } from "react";
import { Github, Linkedin, Mail, MapPin, Phone, Send } from "lucide-react";
import { motion } from "motion/react"
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_xjxa3da",
        "template_b57rlk8",
        formRef.current,
        "o_GN5_zzVykdxxF21"
      )
      .then(
        (result) => {
          console.log("SUCCESS!", result.text);
          setLoading(false);
          setSubmitted(true);
          setTimeout(() => {
            setSubmitted(false);
            formRef.current.reset();
          }, 4000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section id="contact" className="px-4 dark:bg-[#0f172a] pt-12  scroll-mt-18 ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Get In{" "}
          <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
            Touch
          </span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-pink-500 mx-auto my-4" />
        <p className="text-gray-600 dark:text-gray-300 mt-2 max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities? I'd
          love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center">
        {/* FORM */}
        <div className="md:col-span-2 bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md">
          {submitted ? (
            <div className="text-center text-green-500 text-lg font-semibold">
              ✅ Thank you for contacting me! I’ll reach out to you as soon as possible.
            </div>
          ) : (
            <form ref={formRef} onSubmit={sendEmail}>
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="from_name"
                    required
                    placeholder="Your Name"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="from_email"
                    required
                    placeholder="your@example.com"
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="How can I help you "
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-200 mb-1">
                  Your Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  placeholder="Hello, I'd like to talk about..."
                  className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 dark:bg-slate-700 dark:text-white rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 w-full py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-md hover:shadow-lg transition"
              >
                {loading ? "Sending..." : (
                  <>
                    <Send size={18} />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* CONTACT INFO */}
        <div className="bg-white dark:bg-slate-800 p-8 rounded-xl shadow-md h-fit mx-auto w-full lg:col-span-1">
          <h3 className="text-xl font-semibold mb-6 text-gray-900 dark:text-white">Contact Information</h3>
          <ul className="space-y-4 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-6">
              <Mail className="text-blue-600 hover:text-blue-800" />
              <div>
                <p>Email</p>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-blue-700"
                >
                  2004mayankgoyal@gmail.com
                </motion.p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <Phone className="text-blue-600 hover:text-blue-800" />
              <div>
                <p>Phone</p>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-blue-700"
                >
                  +91 8968996595
                </motion.p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="text-blue-600 hover:text-blue-800" />
              <div>
                <p>Location</p>
                <motion.p
                  whileHover={{ scale: 1.1 }}
                  className="hover:text-blue-700"
                >
                  Chandigarh, India
                </motion.p>
              </div>
            </li>
          </ul>

          <hr className="my-6 border-gray-300 dark:border-gray-600" />

          <h4 className="font-medium mb-3 text-gray-900 dark:text-white">Follow Me</h4>
          <div className="flex gap-4">
            <a
            target="_blank"
              href="https://github.com/mayankgoyal2004"
              className="bg-gray-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-2 rounded-full text-blue-600"
            >
              <Github size={20} />
            </a>
            <a
            target="_blank"
              href="https://www.linkedin.com/in/mayankgoyal2004/"
              className="bg-gray-100 dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 p-2 rounded-full text-blue-600"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
