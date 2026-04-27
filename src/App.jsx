import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const resumeFile = "/Ainsley-Lofters-Resume.pdf";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-slate-800 bg-slate-950/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="text-lg font-bold tracking-wide text-white">
          Ainsley Lofters
        </Link>

        <div className="hidden gap-6 text-sm font-medium text-slate-300 md:flex">
          <Link className="hover:text-white" to="/">Home</Link>
          <Link className="hover:text-white" to="/about">About</Link>
          <Link className="hover:text-white" to="/resume">Resume</Link>
          <Link className="hover:text-white" to="/projects">Projects</Link>
          <Link className="hover:text-white" to="/contact">Contact</Link>
        </div>

        <a
          href={resumeFile}
          download
          className="rounded-full bg-blue-500 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-400"
        >
          Download Resume
        </a>
      </div>
    </nav>
  );
}

function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 px-6 py-8 text-center text-sm text-slate-400">
      © {new Date().getFullYear()} Ainsley Lofters. Enterprise IT Leadership Portfolio.
    </footer>
  );
}

function Home() {
  return (
    <main>
      <section className="bg-slate-950 px-6 py-24 text-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
              Director-Level IT Leader
            </p>

            <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
              Enterprise Architecture, Cloud, Security & IT Transformation
            </h1>

            <p className="mb-8 max-w-2xl text-lg leading-8 text-slate-300">
              I help organizations modernize infrastructure, secure critical systems,
              lead complex migrations, and deliver enterprise technology solutions
              that support business growth and operational excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={resumeFile}
                download
                className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white shadow-xl shadow-blue-500/20 hover:bg-blue-400"
              >
                Download Resume
              </a>

              <Link
                to="/projects"
                className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white hover:border-blue-400 hover:text-blue-300"
              >
                View Projects
              </Link>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900 p-8 shadow-2xl">
            <h2 className="mb-6 text-2xl font-bold">Leadership Snapshot</h2>

            <div className="grid gap-4">
              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-3xl font-bold text-blue-400">30+</p>
                <p className="text-slate-300">Years in Enterprise IT</p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-3xl font-bold text-blue-400">8,000+</p>
                <p className="text-slate-300">Phone endpoints supported</p>
              </div>

              <div className="rounded-2xl bg-slate-800 p-5">
                <p className="text-3xl font-bold text-blue-400">Multi-Site</p>
                <p className="text-slate-300">Hospitality, cloud, telecom & security programs</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 px-6 py-20">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
          {[
            ["Enterprise IT Leadership", "Infrastructure, operations, vendors, telecom, cloud, and cross-functional delivery."],
            ["Cloud & Security", "CyberArk PAM, AWS architecture, SOC 2 readiness, access control, and secure modernization."],
            ["Major Transformations", "Ownership transitions, platform migrations, PBX modernization, and business continuity."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200">
              <h3 className="mb-4 text-xl font-bold text-slate-950">{title}</h3>
              <p className="leading-7 text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function About() {
  return (
    <main className="bg-slate-50 px-6 py-20">
      <section className="mx-auto max-w-5xl rounded-3xl bg-white p-10 shadow-xl shadow-slate-200">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          About Me
        </p>

        <h1 className="mb-6 text-4xl font-bold text-slate-950">
          Senior technology leader with deep enterprise infrastructure experience.
        </h1>

        <p className="mb-6 text-lg leading-8 text-slate-700">
          I bring more than 30 years of experience across enterprise IT infrastructure,
          telecommunications, cloud, cybersecurity, unified communications, and large-scale
          technology transformation.
        </p>

        <p className="mb-8 text-lg leading-8 text-slate-700">
          My career has focused on solving complex business and technology problems,
          leading migrations with minimal disruption, strengthening security, and building
          reliable platforms that support mission-critical operations.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Enterprise Architecture",
            "IT Infrastructure Leadership",
            "Cloud Strategy",
            "CyberArk PAM",
            "Telecom & Unified Communications",
            "Vendor Management",
            "Hospitality Technology",
            "Large-Scale Migrations"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 p-4 font-semibold text-slate-800">
              {item}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Resume() {
  return (
    <main className="bg-slate-50 px-6 py-20">
      <section className="mx-auto max-w-5xl">
        <div className="mb-8 flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
              Resume
            </p>
            <h1 className="text-4xl font-bold text-slate-950">
              Director-Level IT Leader
            </h1>
            <p className="mt-3 text-slate-600">
              Enterprise Architecture | Cloud | Security | IT Transformation
            </p>
          </div>

          <a
            href={resumeFile}
            download
            className="rounded-full bg-blue-600 px-6 py-3 text-center font-semibold text-white shadow-lg shadow-blue-500/20 hover:bg-blue-500"
          >
            Download Resume
          </a>
        </div>

        <div className="space-y-6">
          {[
            ["Professional Summary", "Senior IT leader with 30+ years of experience designing, leading, and delivering enterprise technology solutions across complex multi-site environments."],
            ["Key Experience", "Led enterprise infrastructure migrations, Cisco PBX modernization, CyberArk PAM deployment, vendor management, and mission-critical IT operations."],
            ["Technology Areas", "AWS, CyberArk, Cisco, Avaya, Microsoft, VMware, Unified Communications, Networking, Cloud Infrastructure, Security, Disaster Recovery, and Enterprise Operations."]
          ].map(([title, text]) => (
            <div key={title} className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200">
              <h2 className="mb-3 text-2xl font-bold text-slate-950">{title}</h2>
              <p className="leading-8 text-slate-700">{text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Projects() {
  const projects = [
    {
      title: "Enterprise CyberArk PAM Deployment",
      text: "Built and supported a multi-site privileged access management program to strengthen security, improve access control, and support compliance objectives."
    },
    {
      title: "Cisco PBX Modernization",
      text: "Migrated legacy Nortel PBX environments to modern Cisco platforms while protecting uptime across business-critical hospitality operations."
    },
    {
      title: "Hospitality Ownership Transition",
      text: "Led critical IT initiatives during ownership transitions, ensuring smooth handovers, system continuity, and operational stability."
    }
  ];

  return (
    <main className="bg-slate-50 px-6 py-20">
      <section className="mx-auto max-w-7xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">
          Projects
        </p>

        <h1 className="mb-6 text-4xl font-bold text-slate-950">
          Enterprise initiatives with measurable business impact.
        </h1>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="rounded-3xl bg-white p-8 shadow-xl shadow-slate-200">
              <h2 className="mb-4 text-xl font-bold text-slate-950">{project.title}</h2>
              <p className="leading-7 text-slate-600">{project.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}

function Contact() {
  return (
    <main className="bg-slate-950 px-6 py-20 text-white">
      <section className="mx-auto max-w-4xl rounded-3xl border border-slate-800 bg-slate-900 p-10 shadow-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-blue-400">
          Contact
        </p>

        <h1 className="mb-6 text-4xl font-bold">
          Let’s connect.
        </h1>

        <p className="mb-8 text-lg leading-8 text-slate-300">
          I am open to senior leadership opportunities in IT, enterprise architecture,
          cloud, security, infrastructure, and technology transformation.
        </p>

        <div className="space-y-4 text-slate-300">
          <p><strong className="text-white">Email:</strong> ainsleyrlofters@gmail.com</p>
          <p><strong className="text-white">LinkedIn:</strong> https://www.linkedin.com/in/alofters</p>
        </div>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="mailto:your-email@example.com"
            className="rounded-full bg-blue-500 px-6 py-3 font-semibold text-white hover:bg-blue-400"
          >
            Email Me
          </a>

          <a
            href={resumeFile}
            download
            className="rounded-full border border-slate-600 px-6 py-3 font-semibold text-white hover:border-blue-400 hover:text-blue-300"
          >
            Download Resume
          </a>
        </div>
      </section>
    </main>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-slate-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;