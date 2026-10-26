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

// Exact list supplied by Habeeb on 2026-10-26 (13 certificates).
// None of these is labelled a win, so the 1 win is shown separately as
// "event to confirm" until he names it. Do not upgrade any of these to a win.
const certificates = [
  { name: 'ProduScope 2026: The Product Case Study Competition', type: 'Certificate of Participation', date: 'Oct 2026', source: 'Unstop' },
  { name: 'CODEFUSION 2k26', type: 'Certificate of Participation', date: 'Oct 2026', source: 'Unstop' },
  { name: 'Round 1 - Assessment of TVS Credit E.P.I.C 8.0 — IT Challenge', type: 'Certificate of Participation', date: 'Oct 2026', source: 'Unstop' },
  { name: 'Introduction to Generative AI', type: 'Course certificate', date: 'Oct 2026', source: 'Google' },
  { name: 'IdeaForge of Buildathon 2026', type: 'Certificate of Participation', date: 'Aug 2026', source: 'Unstop' },
  { name: 'Sangyan Hackathon', type: 'Certificate of Excellence in Submission through Unstop', date: 'Oct 2026', source: 'Unstop' },
  { name: 'NeuraMorphix HackForge 2026', type: 'Certificate of Participation', date: 'Oct 2026', source: 'Unstop' },
  { name: 'Omnikon National Hackathon 2026', type: 'Certificate of Participation', date: 'Sep 2026', source: 'Unstop' },
  { name: 'AI Foundations', type: 'Course certificate', date: 'Aug 2026', source: 'OpenAI' },
  { name: 'Claude Academy: Introduction to Claude Cowork', type: 'Course certificate', date: 'Aug 2026', source: 'Anthropic' },
  { name: 'OOSC 4.0 Hackathon of Opportunity Open Source Conference (OOSC) - 4.0', type: 'Certificate of Participation', date: 'Aug 2026', source: 'Unstop' },
  { name: 'HackDevengers 1.0 of HackDevengers', type: 'Certificate of Participation', date: 'Aug 2026', source: 'Unstop' },
  { name: '3SVK SEASON: 2 - Evaluation Round of “National Cloud', type: 'Certificate of Participation', date: 'Aug 2026', source: 'Unstop' },
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
          y: 50, opacity: 0, scale: 0.97, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        })
      })
      gsap.to('.orb-a', { y: 60, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.orb-b', { y: -50, x: 30, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      // Parallax orbs on scroll
      gsap.to('.orb-a', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.orb-b', { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } })
      // Animated counters: elements carry data-count="14" etc.
      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = Number(el.dataset.count || 0)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.6, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 92%', once: true },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)) },
        })
      })
      // Scroll progress bar
      gsap.to('.scroll-progress', {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
      })
      // Mouse-follow glow (desktop only, element hidden on small screens)
      const glow = document.querySelector('.cursor-glow')
      if (glow && window.matchMedia('(pointer: fine)').matches) {
        const xTo = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power3' })
        const yTo = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power3' })
        window.addEventListener('mousemove', (e) => { xTo(e.clientX - 200); yTo(e.clientY - 200) })
      }
    })
    return () => { cancelAnimationFrame(rafId); lenis.destroy(); ctx.revert() }
  }, [])

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b14]">
      <div className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400" />
      <div className="cursor-glow pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] md:block" />
      <nav className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
          <a href="#home" className="glass rounded-full px-4 py-2 font-display text-sm font-bold">C. HABEEB</a>
          <div className="glass hidden items-center gap-5 rounded-full px-5 py-2 text-sm text-slate-300 md:flex">
            <a href="#about" className="hover:text-white">About</a>
            <a href="#skills" className="hover:text-white">Skills</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#achievements" className="hover:text-white">Achievements</a>
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
          <div className="hero-in mt-12 grid max-w-3xl grid-cols-2 gap-4 text-center sm:grid-cols-4">
            <div className="glass float-slow rounded-2xl p-4"><p data-count="13" className="font-display text-2xl font-bold">0</p><p className="mt-1 text-xs text-slate-400">Certificates listed</p></div>
            <div className="glass float-slow rounded-2xl p-4"><p data-count="1" className="font-display text-2xl font-bold">0</p><p className="mt-1 text-xs text-slate-400">Hackathon win</p></div>
            <div className="glass float-slow rounded-2xl p-4"><p data-count="3" className="font-display text-2xl font-bold">0</p><p className="mt-1 text-xs text-slate-400">Shipped products</p></div>
            <div className="glass float-slow rounded-2xl p-4"><p data-count="7" className="font-display text-2xl font-bold">0</p><p className="mt-1 text-xs text-slate-400">Featured projects</p></div>
          </div>
          <p className="hero-in mt-6 text-sm text-slate-500">Scroll ↓ — every section animates in, cards lift on hover, and the bar at the very top tracks your scroll.</p>
          <div className="scroll-hint mt-4 text-2xl text-cyan-300">↓</div>
        </div>
      </header>

      <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-4">
        <div className="marquee-track gap-8 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
          {['AI & ML', 'React', 'Hackathons', 'Computer Vision', 'Full-Stack', 'Python', 'Tailwind CSS', 'Data & APIs', 'AI & ML', 'React', 'Hackathons', 'Computer Vision', 'Full-Stack', 'Python', 'Tailwind CSS', 'Data & APIs'].map((t, i) => (
            <span key={i} className="whitespace-nowrap">{t} <span className="ml-8 text-cyan-300">✦</span></span>
          ))}
        </div>
      </div>

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
            <article key={p.name} data-reveal className="glass card-glow group rounded-3xl p-7">
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

      <Section id="achievements" kicker="Achievements" title="Achievements & profiles">
        <p data-reveal className="-mt-4 max-w-2xl text-slate-400">Built from verified records only. LinkedIn's page blocked both a direct read and a live-browser check (sign-in wall only), so no LinkedIn-only achievement is claimed here — paste or screenshot those items and they will be added verbatim.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Shipped products</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• <strong>Karnataka Yatra AI</strong> — AI travel planner for Karnataka, built and pushed to GitHub (34 destinations, day-wise plans, cost breakdown, trilingual UI).</li>
              <li>• <strong>HSN Cement &amp; Steel</strong> — client e-commerce app for cement &amp; steel, shipped and verified live on Vercel.</li>
              <li>• <strong>CodeSentinel AI</strong> — Next.js SaaS site (12 static pages), built and deployed.</li>
            </ul>
          </div>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Hackathons &amp; competitions</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• Kannada Digital Innovation Hackathon 2026 — project submitted successfully.</li>
              <li>• Omnikon National Hackathon 2026 — participation listed.</li>
              <li>• NeuralMorphix HackForge 2026 — participation listed.</li>
              <li>• Buildathon 2026 — participation listed.</li>
              <li>• OOSC 4.0 Hackathon — participation listed.</li>
              <li>• TVS Credit E.P.I.C 8.0 — IT track (per Unstop record).</li>
              <li>• ProduScope 2026: The Product Case Study Competition — Certificate of Participation (Unstop, 25 Oct 2026).</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">Participation only — no win is claimed for any of these unless you confirm an award.</p>
          </div>
        </div>
        <div data-reveal className="glass mt-5 rounded-3xl p-7">
          <h3 className="font-display text-lg font-bold">All profile links</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <a href="https://github.com/habeebc84-create" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">GitHub</span><span className="block break-all text-sm text-slate-400">github.com/habeebc84-create</span></a>
            <a href="https://github.com/habeebc84-create/portfolio" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">This portfolio — GitHub</span><span className="block break-all text-sm text-slate-400">github.com/habeebc84-create/portfolio</span></a>
            <a href="https://github.com/habeebc84-create/tripplanner" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">Karnataka Yatra AI — GitHub</span><span className="block break-all text-sm text-slate-400">github.com/habeebc84-create/tripplanner</span></a>
            <a href="https://unstop.com/u/habeec96039" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">Unstop</span><span className="block break-all text-sm text-slate-400">unstop.com/u/habeec96039</span></a>
            <a href="https://instagram.com/c_habeeb_12" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">Instagram</span><span className="block break-all text-sm text-slate-400">@c_habeeb_12</span></a>
            <a href="https://www.linkedin.com/in/habeeb-c-727a34385/" target="_blank" rel="noreferrer" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">LinkedIn</span><span className="block break-all text-sm text-slate-400">linkedin.com/in/habeeb-c-727a34385</span></a>
            <a href="mailto:habeebc84@gmail.com" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">Email</span><span className="block break-all text-sm text-slate-400">habeebc84@gmail.com</span></a>
          </div>
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
          <h3 className="font-display text-lg font-bold">🏆 1 hackathon win — event to confirm</h3>
          <p className="mt-3 text-slate-400">You told me you have <strong>14 hackathon certificates and 1 win</strong>. None of the 13 certificates you just sent is labelled a win — all are Participation, Excellence-in-Submission, or course certificates. Tell me which one you won (or if the win is the 14th certificate) and it will be highlighted at the top of this section, not guessed.</p>
        </div>
        <div data-reveal className="glass mt-5 rounded-3xl p-7">
          <h3 className="font-display text-lg font-bold">Certificates — all 13 you sent, by name</h3>
          <p className="mt-3 text-slate-400">Exact titles, issuers and months as you sent them. You mentioned 14 in total, so one is still missing from this list — send that last one and it will be added here too.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {certificates.map((c) => (
              <div key={c.name} className="card-glow rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="font-display font-bold">{c.name}</p>
                <p className="mt-2 text-sm text-cyan-200">{c.type}</p>
                <p className="mt-1 text-sm text-slate-400">{c.source} · {c.date}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">Kannada Digital Innovation Hackathon 2026 is not in this certificate list — its project was submitted successfully, but no certificate for it was in the list you sent, so it is not claimed as a certificate here.</p>
        </div>
      </Section>

      <Section id="contact" kicker="Contact" title="Let's build something intelligent">
        <div className="grid gap-5 md:grid-cols-3">
          <a data-reveal href={GITHUB} target="_blank" rel="noreferrer" className="glass rounded-3xl p-7 transition hover:border-cyan-400/40">
            <h3 className="font-display font-bold">GitHub</h3>
            <p className="mt-2 break-all text-slate-400">{GITHUB}</p>
          </a>
          <a data-reveal href="https://www.linkedin.com/in/habeeb-c-727a34385/" target="_blank" rel="noreferrer" className="glass rounded-3xl p-7 transition hover:border-cyan-400/40">
            <h3 className="font-display font-bold">LinkedIn</h3>
            <p className="mt-2 break-all text-slate-400">linkedin.com/in/habeeb-c-727a34385</p>
          </a>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display font-bold">Email &amp; Resume</h3>
            <p className="mt-2 break-all text-slate-400"><a href="mailto:habeebc84@gmail.com" className="text-cyan-300 hover:text-cyan-200">habeebc84@gmail.com</a></p>
            <p className="mt-2 text-slate-400">Add your latest resume PDF here before publishing.</p>
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
