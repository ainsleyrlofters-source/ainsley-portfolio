import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function Home() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Ainsley Lofters</h1>
      <h2>Director-Level IT Leader</h2>
      <p>Enterprise Architecture | Cloud | Security | IT Transformation</p>

      <a href="/Ainsley-Lofters-Resume.pdf" download>
        Download Resume
      </a>
    </main>
  );
}

function About() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>About Me</h1>
      <p>30+ years of experience in enterprise IT leadership.</p>
    </main>
  );
}

function Resume() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Resume</h1>
      <a href="/Ainsley-Lofters-Resume.pdf" download>
        Download Resume
      </a>
    </main>
  );
}

function Projects() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Projects</h1>
      <p>Enterprise CyberArk, Cisco PBX, IT migrations, etc.</p>
    </main>
  );
}

function Contact() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Contact Me</h1>
      <p>Email: your-email@example.com</p>
    </main>
  );
}

function Navbar() {
  return (
    <nav style={{ padding: "20px", background: "#111", color: "#fff" }}>
      <Link to="/" style={{ marginRight: "15px", color: "white" }}>Home</Link>
      <Link to="/about" style={{ marginRight: "15px", color: "white" }}>About</Link>
      <Link to="/resume" style={{ marginRight: "15px", color: "white" }}>Resume</Link>
      <Link to="/projects" style={{ marginRight: "15px", color: "white" }}>Projects</Link>
      <Link to="/contact" style={{ color: "white" }}>Contact</Link>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;