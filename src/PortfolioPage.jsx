import { useState } from "react";
import { Moon, Sun, Github, Linkedin } from "lucide-react";

export default function PortfolioPage() {
  const [dark, setDark] = useState(false);
  return (
    <div className={dark ? "dark" : ""}>
      <main className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-white font-sans transition-colors duration-300">
        <header className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
          <h1 className="text-xl font-bold">Harsh Patel</h1>
          <div className="flex items-center gap-4">
            <a href="https://github.com/iknowharsh" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <a href="https://linkedin.com/in/hapatel1109" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-500 transition" />
            </a>
            <button onClick={() => setDark(!dark)}>
              {dark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
        </header>

        <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
          <h1 className="text-5xl font-semibold mb-4">Hi, I'm Harsh Patel</h1>
          <p className="text-xl max-w-xl mb-8">
            Senior DevSecOps Engineer building secure, scalable cloud infrastructure. I specialize in Kubernetes, CI/CD, and multi-cloud automation.
          </p>
          <a
            href="/Harsh_Resume.pdf"
            download
            className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
          >
            Download Resume
          </a>
        </section>

        <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
          <h2 className="text-3xl font-semibold text-center mb-12">Tech Stack</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto text-center">
            {["AWS", "Azure", "Terraform", "Docker", "Kubernetes", "Jenkins", "Python", "GitLab"].map((tech, i) => (
              <div key={i} className="bg-white dark:bg-gray-800 rounded-xl py-4 px-2 shadow hover:scale-105 transition">
                <p className="font-medium">{tech}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-bold">DevSecOps Lead – Telesat LEO</h3>
              <p className="text-gray-600 dark:text-gray-400">Sep 2024 – Present | Ottawa, ON</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                <li>Implemented container signing and AKS policy enforcement</li>
                <li>Reduced misconfigurations by 40% with Azure Policies</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Senior DevOps Engineer – Dell Technologies</h3>
              <p className="text-gray-600 dark:text-gray-400">May 2021 – Sep 2024 | Ottawa, ON</p>
              <ul className="list-disc list-inside mt-2 text-gray-700 dark:text-gray-300">
                <li>Built GitLab pipelines and integrated security tools</li>
                <li>Improved deployments by 30% and ensured CI/CD security</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="py-16 px-6 bg-gray-100 dark:bg-gray-900">
          <h2 className="text-3xl font-semibold text-center mb-12">Featured Projects</h2>
          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">Infrastructure Automation</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Automated scalable cloud infra using Terraform, Jenkins, and Ansible.</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow">
              <h3 className="text-xl font-bold">WordPress on AWS</h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">Built and optimized a WordPress site with CloudFront, EC2, and Cloudflare.</p>
            </div>
          </div>
        </section>

        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-8">Contact</h2>
          <form
            action="https://formspree.io/f/xgegryoz"
            method="POST"
            className="max-w-xl mx-auto space-y-6"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-900"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-900"
            />
            <textarea
              name="message"
              rows="4"
              placeholder="Say hi 👋"
              required
              className="w-full px-4 py-2 rounded border dark:bg-gray-900"
            />
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition dark:bg-white dark:text-black dark:hover:bg-gray-300"
            >
              Send Message
            </button>
          </form>
        </section>

        <footer className="py-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Harsh Patel • Ottawa, ON</p>
          <p className="mt-1">Built with React + Vite • Hosted on Cloudflare Pages</p>
        </footer>
      </main>
    </div>
  );
}
