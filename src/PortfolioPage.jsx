import { useState, useEffect } from "react";
import { Github, Linkedin, Sun, Moon } from "lucide-react";

export default function PortfolioPage() {
  const [dark, setDark] = useState(false);
  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  return (
    <div className="bg-white text-gray-900 dark:bg-black dark:text-white font-sans">
      <header className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Harsh Patel</h1>
        <div className="flex gap-4 items-center">
          <a href="https://github.com/iknowharsh" target="_blank" rel="noopener noreferrer">
            <Github className="w-5 h-5 hover:text-blue-500" />
          </a>
          <a href="https://linkedin.com/in/hapatel1109" target="_blank" rel="noopener noreferrer">
            <Linkedin className="w-5 h-5 hover:text-blue-500" />
          </a>
          <button onClick={() => setDark(!dark)}>
            {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </header>

      <section className="px-6 pt-20 pb-32 text-center bg-gradient-to-b from-gray-100 to-white dark:from-gray-900 dark:to-black">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
          Crafting Cloud-Native Infrastructure
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
          I’m a DevSecOps Engineer turning complex systems into secure, scalable cloud platforms.
        </p>
        <div className="mt-8">
          <a
            href="/Harsh_Resume.pdf"
            download
            className="inline-block bg-black text-white dark:bg-white dark:text-black px-6 py-3 rounded-full hover:scale-105 transition"
          >
            Download Resume
          </a>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Tech Stack</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
          {["AWS", "Azure", "Kubernetes", "Terraform", "Docker", "Jenkins", "Python", "GitLab"].map((item, i) => (
            <div key={i} className="bg-gray-100 dark:bg-gray-800 py-6 rounded-xl shadow-sm hover:scale-105 transition">
              <p className="font-semibold text-lg">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20 bg-gray-50 dark:bg-gray-900">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            {
              title: "Cloud Infrastructure Automation",
              desc: "Used Terraform, Jenkins, Ansible to automate cloud deployments and enforce compliance."
            },
            {
              title: "WordPress on AWS",
              desc: "Built a high-performing WordPress site optimized with Cloudflare, CloudFront, and EC2."
            }
          ].map((proj, i) => (
            <div key={i} className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-2">{proj.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-20">
        <h2 className="text-3xl font-bold text-center mb-12">Contact</h2>
        <form
          action="https://formspree.io/f/xgegryoz"
          method="POST"
          className="max-w-xl mx-auto space-y-6"
        >
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-900"
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-900"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full px-4 py-2 rounded border bg-white dark:bg-gray-900"
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-300"
          >
            Send Message
          </button>
        </form>
      </section>

      <footer className="py-12 text-center text-gray-400 text-sm">
        <p>© {new Date().getFullYear()} Harsh Patel • Ottawa, ON</p>
        <p>Built with React & Tailwind • Hosted on Cloudflare Pages</p>
      </footer>
    </div>
  );
}
