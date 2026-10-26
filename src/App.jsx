import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const GITHUB = 'https://github.com/habeebc84-create'

const skillGroups = [
  { title: 'Programming', items: ['Python', 'JavaScript', 'TypeScript', 'SQL'] },
  { title: 'Frontend', items: ['React.js', 'Next.js', 'Vite', 'HTML5 / CSS3', 'Tailwind CSS', 'shadcn/ui', 'Framer Motion', 'Responsive UI/UX'] },
  { title: 'Backend & Data', items: ['Node.js', 'FastAPI', 'Flask', 'MongoDB', 'Firebase', 'Supabase'] },
  { title: 'AI / ML', items: ['ML model development', 'Random Forest', 'SVM', 'KNN', 'CNN-LSTM', 'Computer vision', 'Facial expression recognition', 'Deepfake & image authenticity detection'] },
  { title: 'Data & Visualisation', items: ['Data preprocessing', 'Exploratory analysis', 'Data visualisation', 'Recharts', 'Weather & rainfall analysis'] },
  { title: 'Tools & Platforms', items: ['Git & GitHub', 'VS Code', 'Google AI Studio', 'Ollama', 'OpenRouter', 'Vercel', 'Netlify', 'Figma'] },
  { title: 'APIs', items: ['Open-Meteo', 'OpenWeather', 'IMD data sources', 'Geocoding APIs', 'REST API integration'] },
]

const projects = [
  {
    name: 'Karnataka Yatra AI',
    tag: 'Generative AI · Travel',
    status: 'Built',
    desc: 'An AI-powered travel planner that generates personalised, day-wise itineraries across Karnataka from interests, budget, trip duration and destination preferences — with route guidance, estimated expenses and accommodation suggestions.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'AI integration', 'Mapping', 'Weather APIs'],
  },
  {
    name: 'HSN Cement & Steel',
    tag: 'Full-Stack · E-Commerce',
    status: 'Built',
    desc: 'A construction-material commerce platform for cement and steel products, with a product catalogue, dynamic pricing, brand-priority management, admin controls, order workflow and invoice generation.',
    tech: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'Backend & database', 'Deployment'],
  },
  {
    name: 'Smart Weather Dashboard & Rainfall Prediction',
    tag: 'AI · Weather Analytics',
    status: 'Concept',
    desc: 'A proposed dashboard combining weather APIs, meteorological data, machine learning and visualisation for current weather, rainfall prediction, district-level analytics and water-resource insights.',
    tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Python', 'ML', 'Open-Meteo', 'OpenWeather'],
  },
  {
    name: 'Cloud-Based Cyber Threat Detection',
    tag: 'Cybersecurity · AI',
    status: 'Concept',
    desc: 'A proposed SOC-style monitoring system that analyses network traffic with ML models to classify malicious activity, with a threat dashboard, alert details and model-performance visualisation.',
    tech: ['Python', 'FastAPI', 'React', 'Random Forest', 'SVM', 'KNN', 'CNN-LSTM', 'NSL-KDD', 'CICIDS2017'],
  },
  {
    name: 'Facial Expression Recognition',
    tag: 'Computer Vision · Deep Learning',
    status: 'Project',
    desc: 'A computer vision project classifying facial expressions — happiness, sadness, anger, surprise, fear, disgust and neutral — from images or video frames, with confidence-score visualisation.',
    tech: ['Python', 'OpenCV', 'ML / Deep learning', 'React interface (planned)'],
  },
  {
    name: 'AI Invoice & Document Processing for Indian SMBs',
    tag: 'AI Automation · FinTech',
    status: 'Concept',
    desc: 'A concept for extracting invoice data with OCR, identifying suppliers and invoice numbers, and validating GST fields (GSTIN, CGST, SGST, IGST) with human review for uncertain extractions.',
    tech: ['Python', 'OCR', 'Document models', 'REST APIs', 'Databases', 'Web dashboard'],
  },
  {
    name: 'ReturnRoute — Return-Trip Matching',
    tag: 'Smart Mobility · Full-Stack',
    status: 'Concept',
    desc: 'A mobility concept matching return journeys for passengers and parcels across local and intercity routes, to improve vehicle utilisation and help users discover suitable return-trip options.',
    tech: ['React', 'TypeScript', 'Backend APIs', 'Database', 'Mapping'],
  },
]

const exploring = [
  'Deepfake Detection & Image Authenticity Verification',
  'Smart Expense Tracker & Budget Management',
  'AI-Powered Food Platform — CuisineAI',
  'AI Translation App — LinguaFlow',
  'Lexicon Dictionary Application',
  'Meeting Carbon Footprint Calculator',
  'SmartTravel System using YOLOv8 for obstacle detection',
]

const hackathons = [
  'Omnikon National Hackathon 2026',
  'NeuralMorphix HackForge 2026',
  'Buildathon 2026',
  'OOSC 4.0 Hackathon',
]

const strengths = [
  'Problem-solving and analytical thinking',
  'AI-powered software development',
  'Responsive, interactive user interfaces',
  'Real-world applications of machine learning',
  'API integration and data-driven design',
  'Rapid prototyping and hackathon-oriented development',
  'Continuous learning and experimentation',
]

function Section({ id, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-24">
      <p data-reveal className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{kicker}</p>
      <h2 data-reveal className="mt-3 font-display text-3xl font-bold sm:text-4xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

export default function App() {
  useEffect(() => {
    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    lenis.on('scroll', ScrollTrigger.update)

    const ctx = gsap.context(() => {
      gsap.from('.hero-in', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12 })
      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 40, opacity: 0, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
      gsap.to('.orb-a', { y: 60, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.orb-b', { y: -50, x: 30, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1 })
    })
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); ctx.revert() }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b14]">
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="glass rounded-full px-4 py-2 font-display text-sm font-bold">C. HABEEB</a>
          <div className="glass hidden items-center gap-5 rounded-full px-5 py-2 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#hackathons" className="hover:text-white">Hackathons</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a href={GITHUB} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">GitHub</a>
        </div>
      </nav>

      <header id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
        <div className="orb orb-a left-[-10%] top-[-10%] h-96 w-96 bg-cyan-500" />
        <div className="orb orb-b right-[-5%] top-[30%] h-80 w-80 bg-violet-500" />
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <p className="hero-in text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">AI &amp; ML Developer · Portfolio</p>
          <h1 className="hero-in mt-5 font-display text-5xl font-bold leading-[1.05] sm:text-7xl">
            C. Habeeb
          </h1>
          <p className="hero-in mt-5 max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">
            Building Intelligent Solutions with <span className="text-gradient">AI, Machine Learning</span> &amp; Modern Web Technologies
          </p>
          <p className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Turning innovative ideas into intelligent, practical, and user-focused digital experiences.
            Second-year B.Tech (CSE — AI &amp; ML) at Saveetha School of Engineering, SIMATS, Chennai.
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-3">
            <a href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View Projects</a>
            <a href={GITHUB} target="_blank" rel="noreferrer" className="glass rounded-full px-6 py-3 font-semibold hover:bg-white/10">GitHub Profile</a>
            <a href="#contact" className="glass rounded-full px-6 py-3 font-semibold hover:bg-white/10">Contact</a>
          </div>
          <div className="hero-in mt-12 grid max-w-2xl grid-cols-3 gap-4 text-center">
            <div className="glass rounded-2xl p-4"><p className="font-display text-2xl font-bold">7</p><p className="mt-1 text-xs text-slate-400">Featured projects</p></div>
            <div className="glass rounded-2xl p-4"><p className="font-display text-2xl font-bold">4</p><p className="mt-1 text-xs text-slate-400">Hackathons listed</p></div>
            <div className="glass rounded-2xl p-4"><p className="font-display text-2xl font-bold">7</p><p className="mt-1 text-xs text-slate-400">Skill areas</p></div>
          </div>
        </div>
      </header>

      <Section id="about" kicker="About me" title="Turning ideas into practical software">
        <div className="grid gap-6 md:grid-cols-2">
          <div data-reveal className="glass rounded-3xl p-7 leading-relaxed text-slate-300">
            <p>I am a B.Tech Computer Science Engineering student specialising in Artificial Intelligence and Machine Learning, passionate about developing intelligent applications that solve real-world problems.</p>
            <p className="mt-4">My interests include machine learning, computer vision, full-stack development, cybersecurity, data analytics and AI-powered automation — combining modern frontend, backend, APIs, databases and AI/ML techniques.</p>
          </div>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Education</h3>
            <p className="mt-3 font-semibold">B.Tech — CSE (AI &amp; ML)</p>
            <p className="mt-1 text-slate-400">Saveetha School of Engineering, SIMATS, Chennai, Tamil Nadu, India</p>
            <p className="mt-1 text-slate-400">Second year · Expected graduation: 2029 (per Saveetha programme dates)</p>
            <h3 className="mt-6 font-display text-lg font-bold">Career objective</h3>
            <p className="mt-3 text-slate-400">To build a strong career in AI and software engineering by building practical AI-powered applications, strengthening ML fundamentals, contributing to collaborative projects, and gaining industry experience through internships and entry-level opportunities.</p>
          </div>
        </div>
      </Section>

      <Section id="skills" kicker="Skills" title="What I work with">
        <p data-reveal className="-mt-4 max-w-2xl text-slate-400">Consolidated from the projects in this portfolio. Keep only technologies you have actually used and can explain in an interview — this list is the starting point, not a claim of expert proficiency in every item.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((g) => (
            <div key={g.title} data-reveal className="glass rounded-3xl p-6 transition hover:border-cyan-400/40">
              <h3 className="font-display font-bold">{g.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {g.items.map((s) => (
                  <span key={s} className="rounded-full bg-white/5 px-3 py-1 text-sm text-slate-300 ring-1 ring-white/10">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section id="projects" kicker="Featured projects" title="Projects — built, and concepts in progress">
        <p data-reveal className="-mt-4 max-w-2xl text-slate-400">Status is labelled honestly: “Built” only where a working product exists, “Concept” where the spec itself describes a proposed idea. No demo or repository link is shown unless it is verified — add those links per project before publishing.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p) => (
            <article key={p.name} data-reveal className="glass group rounded-3xl p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40">
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">{p.tag}</p>
                <span className="shrink-0 rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/30">{p.status}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-bold">{p.name}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <h3 data-reveal className="mt-16 font-display text-2xl font-bold">Exploring &amp; ideas</h3>
        <p data-reveal className="mt-2 text-slate-400">Not claimed as finished projects — a separate exploration list.</p>
        <div data-reveal className="mt-5 flex flex-wrap gap-2">
          {exploring.map((e) => (
            <span key={e} className="glass rounded-full px-4 py-2 text-sm text-slate-300">{e}</span>
          ))}
        </div>
      </Section>

      <Section id="hackathons" kicker="Hackathons & strengths" title="Hackathons, strengths, certificates">
        <div className="grid gap-5 md:grid-cols-2">
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Hackathons</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {hackathons.map((h) => (<li key={h}>• {h}</li>))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">Participation only — add official event name, date, project, role and certificate link per entry. Do not describe a participation certificate as a win unless you received that award.</p>
          </div>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Professional strengths</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {strengths.map((s) => (<li key={s}>• {s}</li>))}
            </ul>
          </div>
        </div>
        <div data-reveal className="glass mt-5 rounded-3xl p-7">
          <h3 className="font-display text-lg font-bold">Certificates &amp; learning</h3>
          <p className="mt-3 text-slate-400">Categories: AI &amp; ML, Python &amp; programming, data analytics, web development, cybersecurity, NPTEL IoT, and hackathon participation certificates.</p>
          <p className="mt-2 text-sm text-slate-500">Add exact certificate titles, issuing organisations, completion dates and verification URLs from your actual certificates before publishing.</p>
        </div>
      </Section>

      <Section id="contact" kicker="Contact" title="Let's build something intelligent">
        <div className="grid gap-5 md:grid-cols-3">
          <a data-reveal href={GITHUB} target="_blank" rel="noreferrer" className="glass rounded-3xl p-7 transition hover:border-cyan-400/40">
            <h3 className="font-display font-bold">GitHub</h3>
            <p className="mt-2 break-all text-slate-400">{GITHUB}</p>
          </a>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display font-bold">LinkedIn</h3>
            <p className="mt-2 text-slate-400">Add your verified LinkedIn URL here before publishing.</p>
          </div>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display font-bold">Email &amp; Resume</h3>
            <p className="mt-2 text-slate-400">Add your professional email and latest resume PDF here before publishing.</p>
          </div>
        </div>
        <p data-reveal className="mt-8 text-sm text-slate-500">Draft note: this site intentionally leaves LinkedIn, email, resume, project demo/source links, CGPA and certificate verification links as to-fill items — see README.md — rather than inventing them.</p>
      </Section>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-slate-500">
        © 2026 C. Habeeb · Built with React, Vite, Tailwind CSS, GSAP + ScrollTrigger and Lenis
      </footer>
    </div>
  )
}
