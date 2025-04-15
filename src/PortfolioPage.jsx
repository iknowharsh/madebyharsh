export default function PortfolioPage() {
    return (
      <main className="min-h-screen bg-white text-gray-900 font-sans">
        <section className="flex flex-col items-center justify-center py-24 px-6 text-center">
          <h1 className="text-5xl font-semibold mb-4">Hi, I'm Harsh Patel</h1>
          <p className="text-xl max-w-xl mb-8">
            Senior DevSecOps Engineer with 5+ years of experience building secure, automated cloud infrastructure using AWS, Azure, Kubernetes, and Terraform.
          </p>
          <a
            href="/Harsh_Resume.pdf"
            download
            className="bg-black text-white px-6 py-3 rounded-full text-lg hover:bg-gray-800 transition"
          >
            Download Resume
          </a>
        </section>
  
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-12">Core Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              'DevSecOps, SAST/DAST, IaC Scanning',
              'AWS (Certified), Azure, GCP',
              'Terraform, Ansible, Jenkins, GitLab CI',
              'Kubernetes (AKS/EKS), Docker, Helm',
              'Python, Bash, Golang',
              'Prisma Cloud, SonarQube, Check Point',
              'Splunk, Prometheus, ELK Stack'
            ].map((skill, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl shadow-md">
                <p>{skill}</p>
              </div>
            ))}
          </div>
        </section>
  
        <section className="py-16 px-6">
          <h2 className="text-3xl font-semibold text-center mb-12">Experience</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            <div>
              <h3 className="text-xl font-bold">DevSecOps Lead – Telesat LEO</h3>
              <p className="text-gray-600">Sep 2024 – Present | Ottawa, ON</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Implemented container signing & policy-based workload security in AKS</li>
                <li>Reduced misconfigurations by 40% via secure AKS baseline</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">Senior DevOps Engineer – Dell Technologies</h3>
              <p className="text-gray-600">May 2021 – Sep 2024 | Ottawa, ON</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>CI/CD overhaul with GitLab & Jenkins (30% faster deployments)</li>
                <li>Managed GitLab SaaS, integrated SAST, container scanning</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold">DevOps Engineer – Dell Technologies</h3>
              <p className="text-gray-600">Mar 2021 – May 2021 | Ottawa, ON</p>
              <ul className="list-disc list-inside mt-2 text-gray-700">
                <li>Automated patching, logging & backups via Ansible & Python</li>
                <li>Improved virtualization & NFV efficiency by 20%</li>
              </ul>
            </div>
          </div>
        </section>
  
        <section className="py-16 px-6 bg-gray-100">
          <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <div>
              <h3 className="text-xl font-bold">Cloud Infrastructure Automation</h3>
              <p className="text-gray-700">
                Modernized infrastructure using Ansible, Kubernetes, Jenkins, and Terraform for improved scalability and reliability.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold">WordPress on AWS</h3>
              <p className="text-gray-700">
                Built a WordPress site with EC2 backend, optimized via Cloudflare & CloudFront, deployed using Terraform.
              </p>
            </div>
          </div>
        </section>
  
        <footer className="py-12 text-center text-gray-600">
          <p>© {new Date().getFullYear()} Harsh Patel • Ottawa, ON</p>
          <p className="mt-2">
            <a href="mailto:hapatel1109@gmail.com" className="underline">hapatel1109@gmail.com</a>
          </p>
        </footer>
      </main>
    );
  }
  