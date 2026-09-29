import "./App.css";

const skills = [
  { name: "AWS", category: "Cloud" },
  { name: "Docker", category: "Containers" },
  { name: "Kubernetes", category: "Orchestration" },
  { name: "Terraform", category: "IaC" },
  { name: "Jenkins", category: "CI/CD" },
  { name: "Linux", category: "OS" },
  { name: "Git", category: "Version Control" },
  { name: "Prometheus", category: "Monitoring" },
  { name: "Grafana", category: "Observability" },
  { name: "Trivy", category: "Security" },
  { name: "SonarQube", category: "Code Quality" },
  { name: "Spring Boot", category: "Application" },
];

const projects = [
  {
    number: "01",
    title: "DevOps Portfolio Platform",
    description:
      "A production-style portfolio platform built to demonstrate the complete DevOps lifecycle — from source control and containerization to CI/CD, cloud infrastructure, Kubernetes and observability.",
    technologies: ["React", "Spring Boot", "Docker", "Jenkins", "AWS"],
  },
  {
    number: "02",
    title: "AWS Infrastructure with Terraform",
    description:
      "Infrastructure as Code project focused on provisioning and managing AWS resources using Terraform with reproducible and version-controlled infrastructure.",
    technologies: ["Terraform", "AWS", "EC2", "VPC", "S3"],
  },
  {
    number: "03",
    title: "Kubernetes Application Platform",
    description:
      "Containerized application deployment using Kubernetes with configuration management, secrets, health probes, resource management and scalable workloads.",
    technologies: ["Kubernetes", "Docker", "Helm", "ConfigMap", "Secrets"],
  },
];

const pipeline = [
  "Git",
  "Jenkins",
  "SonarQube",
  "Trivy",
  "Docker",
  "AWS",
  "Kubernetes",
  "Prometheus",
  "Grafana",
];

function App() {
  return (
    <div className="app">
      {/* NAVIGATION */}
      <nav className="navbar">
        <a href="#home" className="logo">
          <span>I</span>T
        </a>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#architecture">Architecture</a>
          <a href="#contact">Contact</a>
        </div>

        <a href="#contact" className="nav-button">
          Let's Talk
        </a>
      </nav>

      {/* HERO */}
      <main>
        <section id="home" className="hero">
          <div className="hero-content">
            <div className="status">
              <span className="status-dot"></span>
              Building & Automating
            </div>

            <p className="eyebrow">DEVOPS ENGINEER</p>

            <h1>
              From
              <span> code </span>
              to
              <span> production.</span>
            </h1>

            <p className="hero-description">
              I'm Ishank Tyagi. I build, automate and deploy cloud-native
              applications using modern DevOps practices and infrastructure.
            </p>

            <div className="hero-actions">
              <a href="#projects" className="primary-button">
                Explore my work <span>↗</span>
              </a>

              <a href="#about" className="text-button">
                More about me →
              </a>
            </div>

            <div className="hero-stack">
              <span>AWS</span>
              <span>Docker</span>
              <span>Kubernetes</span>
              <span>Terraform</span>
              <span>Jenkins</span>
            </div>
          </div>

          {/* TERMINAL */}
          <div className="terminal-wrapper">
            <div className="terminal-glow"></div>

            <div className="terminal">
              <div className="terminal-top">
                <div className="terminal-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <p>ishank@devops: ~</p>
              </div>

              <div className="terminal-content">
                <div>
                  <span className="terminal-green">$</span> whoami
                </div>

                <div className="terminal-output">
                  ishank.tyagi
                </div>

                <div className="terminal-space"></div>

                <div>
                  <span className="terminal-green">$</span> kubectl get pods
                </div>

                <div className="terminal-output">
                  <span className="terminal-blue">portfolio-api</span>
                  <span className="terminal-running"> Running</span>
                </div>

                <div className="terminal-output">
                  <span className="terminal-blue">monitoring</span>
                  <span className="terminal-running"> Running</span>
                </div>

                <div className="terminal-space"></div>

                <div>
                  <span className="terminal-green">$</span> terraform apply
                </div>

                <div className="terminal-output terminal-success">
                  Infrastructure deployed successfully ✓
                </div>

                <div className="terminal-space"></div>

                <div>
                  <span className="terminal-green">$</span>{" "}
                  <span className="cursor">█</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* STATS */}
        <section className="stats">
          <div className="stat">
            <strong>Cloud</strong>
            <span>AWS Infrastructure</span>
          </div>

          <div className="stat">
            <strong>CI/CD</strong>
            <span>Automated Delivery</span>
          </div>

          <div className="stat">
            <strong>Containers</strong>
            <span>Docker & Kubernetes</span>
          </div>

          <div className="stat">
            <strong>IaC</strong>
            <span>Terraform</span>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section about-section">
          <div className="section-heading">
            <p className="section-number">01</p>
            <p className="section-label">ABOUT ME</p>
          </div>

          <div className="about-grid">
            <h2>
              Building systems that are
              <span> repeatable, scalable and observable.</span>
            </h2>

            <div className="about-text">
              <p>
                I'm an engineer focused on cloud infrastructure, automation
                and reliable application delivery.
              </p>

              <p>
                My DevOps journey is centered around AWS, Linux,
                containerization, Infrastructure as Code, CI/CD and
                Kubernetes.
              </p>

              <p>
                This portfolio itself is being built as a hands-on DevOps
                project — with the goal of taking an application from local
                development all the way to a production-style deployment.
              </p>

              <a href="#architecture" className="inline-link">
                Explore the architecture →
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section id="skills" className="section">
          <div className="section-heading">
            <p className="section-number">02</p>
            <p className="section-label">TECHNOLOGIES</p>
          </div>

          <div className="section-title-row">
            <h2>My DevOps stack.</h2>
            <p>
              Tools and technologies I'm using to build and operate
              production-style systems.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <div className="skill-card" key={skill.name}>
                <div className="skill-icon">◆</div>

                <div>
                  <h3>{skill.name}</h3>
                  <p>{skill.category}</p>
                </div>

                <span className="skill-arrow">↗</span>
              </div>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="section projects-section">
          <div className="section-heading">
            <p className="section-number">03</p>
            <p className="section-label">SELECTED PROJECTS</p>
          </div>

          <div className="section-title-row">
            <h2>Things I'm building.</h2>
            <p>
              Hands-on projects designed around real-world DevOps workflows.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span>{project.number}</span>
                  <span>↗</span>
                </div>

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="project-technologies">
                  {project.technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                  ))}
                </div>

                <div className="project-footer">
                  <span>DevOps Project</span>
                  <span>View →</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section id="architecture" className="architecture-section">
          <div className="section architecture-inner">
            <div className="section-heading">
              <p className="section-number">04</p>
              <p className="section-label">DELIVERY PIPELINE</p>
            </div>

            <div className="architecture-title">
              <h2>
                From commit
                <span> to production.</span>
              </h2>

              <p>
                The portfolio application is designed to demonstrate a
                complete modern DevOps workflow.
              </p>
            </div>

            <div className="pipeline">
              {pipeline.map((item, index) => (
                <div className="pipeline-item" key={item}>
                  <div className="pipeline-box">
                    <small>0{index + 1}</small>
                    <strong>{item}</strong>
                  </div>

                  {index < pipeline.length - 1 && (
                    <div className="pipeline-arrow">→</div>
                  )}
                </div>
              ))}
            </div>

            <div className="architecture-description">
              <div>
                <span>01</span>
                <h3>Build</h3>
                <p>
                  Source code is version controlled and automatically built
                  through the CI pipeline.
                </p>
              </div>

              <div>
                <span>02</span>
                <h3>Secure</h3>
                <p>
                  Static analysis and container security scanning are integrated
                  into the delivery process.
                </p>
              </div>

              <div>
                <span>03</span>
                <h3>Deploy</h3>
                <p>
                  Containerized workloads are deployed to cloud infrastructure
                  and Kubernetes.
                </p>
              </div>

              <div>
                <span>04</span>
                <h3>Observe</h3>
                <p>
                  Metrics and application health are monitored using
                  Prometheus and Grafana.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="contact-section">
          <div className="contact-content">
            <p className="section-label">05 — CONTACT</p>

            <h2>
              Let's build something
              <span> reliable.</span>
            </h2>

            <p>
              I'm always interested in discussing cloud infrastructure,
              DevOps, automation and interesting engineering problems.
            </p>

            <div className="contact-buttons">
              <a
                href="mailto:your-email@example.com"
                className="primary-button"
              >
                Get in touch ↗
              </a>

              <a href="#" className="secondary-button">
                GitHub ↗
              </a>

              <a href="#" className="secondary-button">
                LinkedIn ↗
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer>
        <div>
          <strong>IT.</strong>
          <span>DevOps Engineer</span>
        </div>

        <p>Built with React · Spring Boot · AWS · DevOps</p>

        <p>© 2026 Ishank Tyagi</p>
      </footer>
    </div>
  );
}

export default App;