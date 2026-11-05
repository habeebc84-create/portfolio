import { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

gsap.registerPlugin(ScrollTrigger)

const GITHUB = 'https://github.com/habeebc84-create'

const ROLES = ['AI & ML Developer', 'React Developer', 'Full-Stack Builder']

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
    repo: 'https://github.com/habeebc84-create/tripplanner',
  },
  {
    name: 'HSN Cement & Steel',
    tag: 'Full-Stack · E-Commerce',
    status: 'Built',
    desc: 'A construction-material commerce platform for cement and steel products, with a product catalogue, dynamic pricing, brand-priority management, admin controls, order workflow and invoice generation.',
    tech: ['React', 'JavaScript / TypeScript', 'Tailwind CSS', 'Backend & database', 'Deployment'],
    repo: 'https://github.com/habeebc84-create/2027',
  },
  {
    name: 'CodeSentinel AI',
    tag: 'AI · Code Review · SaaS',
    status: 'Built',
    desc: 'AI-powered code review and vulnerability detection platform — a Next.js 15 marketing site with a static dashboard preview, covering features, how it works, pricing, docs and blog.',
    tech: ['Next.js 15', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
    repo: 'https://github.com/habeebc84-create/ai-powerd-check',
    demo: 'https://ai-powerd-check.vercel.app',
  },
  {
    name: 'Swagath Multicuisine Restaurant',
    tag: 'Web · Restaurant',
    status: 'Built',
    desc: 'Official website for Swagath Multicuisine Restaurant, Kalikiri, Andhra Pradesh — full menu, Rayalaseema cuisine, tandoori and Hyderabadi dum biryani, catering and bulk orders, bookings, gallery and staff admin.',
    tech: ['Node.js', 'Static website', 'Vercel'],
    repo: 'https://github.com/habeebc84-create/swagath',
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
    tag: 'Smart Mobility · Android',
    status: 'Built',
    desc: 'Three separately installable Android apps from shared code — Passenger, Rider/Driver and Admin — for matching return journeys for passengers and parcels, with Firebase Google, phone and email sign-in.',
    tech: ['Kotlin', 'Android', 'Firebase Auth'],
    repo: 'https://github.com/habeebc84-create/return-route',
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
  'NeuraMorphix HackForge 2026',
  'Buildathon 2026',
  'OOSC 4.0 Hackathon',
]

// Certificates issued, by name — 13 listed.
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

const MARQUEE_ITEMS = ['AI & ML', 'React', 'Hackathons', 'Computer Vision', 'Full-Stack', 'Python', 'Tailwind CSS', 'Data & APIs']

/**
 * Lightweight neural-dot particle field for the hero only.
 * Original canvas code, no library. Dots drift slowly and link when close,
 * with a gentle pull toward the pointer on fine-pointer devices.
 * Pauses when the hero is off-screen or the tab is hidden, and never
 * starts when the user prefers reduced motion.
 */
function HeroParticles() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rafId = 0
    let running = true
    let width = 0
    let height = 0
    let dpr = 1
    const mouse = { x: -9999, y: -9999 }
    let dots = []

    const resize = () => {
      const rect = canvas.parentElement.getBoundingClientRect()
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = rect.width
      height = rect.height
      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
      const count = width < 640 ? 32 : width < 1024 ? 55 : 75
      dots = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
        r: 1 + Math.random() * 1.6,
      }))
    }

    const step = () => {
      if (!running) return
      ctx.clearRect(0, 0, width, height)
      for (const d of dots) {
        const dx = mouse.x - d.x
        const dy = mouse.y - d.y
        const dist = Math.hypot(dx, dy)
        if (dist > 0 && dist < 140) {
          d.vx += (dx / dist) * 0.008
          d.vy += (dy / dist) * 0.008
        }
        d.vx = Math.max(-0.4, Math.min(0.4, d.vx))
        d.vy = Math.max(-0.4, Math.min(0.4, d.vy))
        d.x += d.vx
        d.y += d.vy
        if (d.x < 0 || d.x > width) d.vx *= -1
        if (d.y < 0 || d.y > height) d.vy *= -1
        d.x = Math.max(0, Math.min(width, d.x))
        d.y = Math.max(0, Math.min(height, d.y))
      }
      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const a = dots[i]
          const b = dots[j]
          const dist = Math.hypot(a.x - b.x, a.y - b.y)
          if (dist < 120) {
            ctx.strokeStyle = `rgba(34, 211, 238, ${(1 - dist / 120) * 0.22})`
            ctx.lineWidth = 1
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.stroke()
          }
        }
      }
      for (const d of dots) {
        ctx.fillStyle = 'rgba(165, 243, 252, 0.7)'
        ctx.beginPath()
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2)
        ctx.fill()
      }
      rafId = requestAnimationFrame(step)
    }

    const onMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999 }
    const onVisibility = () => {
      if (document.hidden) {
        running = false
        cancelAnimationFrame(rafId)
      } else if (!running) {
        running = true
        rafId = requestAnimationFrame(step)
      }
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !running && !document.hidden) {
          running = true
          rafId = requestAnimationFrame(step)
        } else if (!entry.isIntersecting && running) {
          running = false
          cancelAnimationFrame(rafId)
        }
      },
      { threshold: 0 },
    )

    resize()
    rafId = requestAnimationFrame(step)
    window.addEventListener('resize', resize)
    canvas.parentElement.addEventListener('mousemove', onMouseMove)
    canvas.parentElement.addEventListener('mouseleave', onMouseLeave)
    document.addEventListener('visibilitychange', onVisibility)
    observer.observe(canvas.parentElement)

    return () => {
      running = false
      cancelAnimationFrame(rafId)
      window.removeEventListener('resize', resize)
      canvas.parentElement?.removeEventListener('mousemove', onMouseMove)
      canvas.parentElement?.removeEventListener('mouseleave', onMouseLeave)
      document.removeEventListener('visibilitychange', onVisibility)
      observer.disconnect()
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="particle-canvas" />
}

function Section({ id, index, kicker, title, children }) {
  return (
    <section id={id} className="relative mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
      <div data-reveal className="flex items-center gap-4">
        <span className="font-display text-sm font-bold tracking-widest text-cyan-300/70">{index}</span>
        <span className="h-px w-12 bg-gradient-to-r from-cyan-400 to-transparent" aria-hidden="true" />
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">{kicker}</p>
      </div>
      <h2 data-reveal className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      <div className="mt-10">{children}</div>
    </section>
  )
}

/**
 * Splash entry page, shown before the portfolio itself.
 * One clear action — Enter Portfolio — plus the real GitHub / LinkedIn
 * links. The portfolio is a separate component and mounts only after
 * Enter, so its Lenis / GSAP setup always runs on visible content.
 * Hooks order is the same on every render of each component (the HSN
 * splash once broke exactly by running fewer hooks before its exit).
 */
function Splash({ onEnter }) {
  const rootRef = useRef(null)
  const buttonRef = useRef(null)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const ctx = gsap.context(() => {
      gsap.from('.splash-letter', {
        y: 80, opacity: 0, rotateX: -50, duration: 0.9, ease: 'power3.out', stagger: 0.055,
      })
      gsap.from('.splash-in', { y: 30, opacity: 0, duration: 0.9, ease: 'power3.out', stagger: 0.1, delay: 0.35 })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  const enter = () => {
    if (leaving) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      onEnter()
      return
    }
    setLeaving(true)
    gsap.to(rootRef.current, {
      opacity: 0, scale: 0.98, y: -20, duration: 0.45, ease: 'power2.in', onComplete: onEnter,
    })
  }

  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== 'Enter') return
      const active = document.activeElement
      if (active === document.body || active === buttonRef.current) enter()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [leaving])

  const letters = 'C. Habeeb'.split('')

  return (
    <div ref={rootRef} className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#070b14] px-5 py-16 text-center">
      <HeroParticles />
      <div className="float-slow absolute left-[-10%] top-[-10%] h-96 w-96 rounded-full bg-cyan-500 opacity-30 blur-[70px]" aria-hidden="true" />
      <div className="float-slow absolute bottom-[-15%] right-[-5%] h-80 w-80 rounded-full bg-violet-500 opacity-30 blur-[70px]" aria-hidden="true" />
      <div className="relative">
        <p className="splash-in text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">Portfolio · 2026</p>
        <h1 aria-label="C. Habeeb" className="mt-6 font-display text-6xl font-bold leading-none sm:text-8xl">
          {letters.map((ch, i) => (
            <span key={i} aria-hidden="true" className="splash-letter">{ch === ' ' ? '\u00a0' : ch}</span>
          ))}
        </h1>
        <p className="splash-in mt-4 text-lg font-semibold text-cyan-200 sm:text-xl">AI &amp; ML Developer</p>
        <p className="splash-in mx-auto mt-5 max-w-xl text-base leading-relaxed text-slate-400">
          Building Intelligent Solutions with AI, Machine Learning &amp; Modern Web Technologies
        </p>
        <div className="splash-in mt-10">
          <button
            ref={buttonRef}
            autoFocus
            onClick={enter}
            className="rounded-full bg-cyan-400 px-8 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-500/25 transition hover:scale-[1.03] hover:bg-cyan-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
          >
            Enter Portfolio →
          </button>
          <p className="mt-4 text-sm text-slate-500">or press Enter</p>
        </div>
        <div className="splash-in mt-10 flex items-center justify-center gap-6 text-sm font-semibold">
          <a href={GITHUB} target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">GitHub</a>
          <a href="https://www.linkedin.com/in/habeeb-c-727a34385/" target="_blank" rel="noreferrer" className="text-slate-300 hover:text-white">LinkedIn</a>
          <a href="mailto:habeeb.c84@gmail.com" className="text-slate-300 hover:text-white">Email</a>
        </div>
        <p className="splash-in mt-12 text-xs text-slate-600">© 2026 C. Habeeb · Saveetha School of Engineering</p>
      </div>
    </div>
  )
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [roleIndex, setRoleIndex] = useState(0)

  // Rotating role line under the hero title. Paused for reduced motion.
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined
    const id = window.setInterval(() => setRoleIndex((i) => (i + 1) % ROLES.length), 2800)
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    // Reduced motion: no smooth scroll, no entrance animation, counters
    // go straight to their final values, and everything stays visible.
    if (reducedMotion) {
      document.querySelectorAll('[data-count]').forEach((el) => {
        el.textContent = String(Number(el.dataset.count || 0))
      })
      return undefined
    }

    const lenis = new Lenis({ lerp: 0.1, smoothWheel: true })
    let rafId
    const raf = (time) => { lenis.raf(time); rafId = requestAnimationFrame(raf) }
    rafId = requestAnimationFrame(raf)
    const nav = document.querySelector('.nav-shell')
    const onLenisScroll = (e) => {
      ScrollTrigger.update()
      if (nav) nav.classList.toggle('nav-scrolled', (e?.scroll ?? 0) > 40)
    }
    lenis.on('scroll', onLenisScroll)

    // Lenis takes over scrolling, so plain #anchor jumps did not scroll
    // reliably. Route every in-page link through Lenis instead.
    const anchorHandler = (e) => {
      const link = e.target.closest('a[href^="#"]')
      if (!link) return
      const target = document.querySelector(link.getAttribute('href'))
      if (!target) return
      e.preventDefault()
      setMenuOpen(false)
      lenis.scrollTo(target, { offset: -80, duration: 1.2 })
    }
    document.addEventListener('click', anchorHandler)

    const glow = document.querySelector('.cursor-glow')
    let glowXTo = null
    let glowYTo = null
    let glowHandler = null
    if (glow && finePointer) {
      glowXTo = gsap.quickTo(glow, 'x', { duration: 0.6, ease: 'power3' })
      glowYTo = gsap.quickTo(glow, 'y', { duration: 0.6, ease: 'power3' })
      glowHandler = (e) => { glowXTo(e.clientX - 200); glowYTo(e.clientY - 200) }
      window.addEventListener('mousemove', glowHandler)
    }

    // Custom cursor: dot follows fast, ring trails and grows over
    // links, buttons and tilt cards (desktop, fine pointer only).
    const cursorCleanups = []
    if (finePointer) {
      const dot = document.querySelector('.cursor-dot')
      const ring = document.querySelector('.cursor-ring')
      if (dot && ring) {
        const dotX = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3' })
        const dotY = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3' })
        const ringX = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3' })
        const ringY = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3' })
        const onMove = (e) => {
          dot.style.opacity = '1'
          ring.style.opacity = '1'
          dotX(e.clientX - 4); dotY(e.clientY - 4); ringX(e.clientX - 19); ringY(e.clientY - 19)
        }
        const onOver = (e) => { if (e.target.closest('a, button, [data-tilt]')) ring.classList.add('cursor-active') }
        const onOut = (e) => { if (e.target.closest('a, button, [data-tilt]')) ring.classList.remove('cursor-active') }
        window.addEventListener('mousemove', onMove)
        document.addEventListener('mouseover', onOver)
        document.addEventListener('mouseout', onOut)
        cursorCleanups.push(
          () => window.removeEventListener('mousemove', onMove),
          () => document.removeEventListener('mouseover', onOver),
          () => document.removeEventListener('mouseout', onOut),
        )
      }
    }

    // Magnetic primary buttons (desktop, fine pointer only).
    const magneticEls = finePointer ? Array.from(document.querySelectorAll('[data-magnetic]')) : []
    const magneticCleanups = magneticEls.map((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const x = e.clientX - (rect.left + rect.width / 2)
        const y = e.clientY - (rect.top + rect.height / 2)
        gsap.to(el, { x: x * 0.25, y: y * 0.3, duration: 0.4, ease: 'power3.out' })
      }
      const onLeave = () => gsap.to(el, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' })
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    })

    // Subtle tilt on project cards (desktop, fine pointer only).
    const tiltEls = finePointer ? Array.from(document.querySelectorAll('[data-tilt]')) : []
    const tiltCleanups = tiltEls.map((el) => {
      const onMove = (e) => {
        const rect = el.getBoundingClientRect()
        const px = (e.clientX - rect.left) / rect.width - 0.5
        const py = (e.clientY - rect.top) / rect.height - 0.5
        gsap.to(el, { rotateY: px * 5, rotateX: -py * 5, transformPerspective: 900, duration: 0.4, ease: 'power2.out' })
      }
      const onLeave = () => gsap.to(el, { rotateX: 0, rotateY: 0, duration: 0.6, ease: 'power3.out' })
      el.addEventListener('mousemove', onMove)
      el.addEventListener('mouseleave', onLeave)
      return () => {
        el.removeEventListener('mousemove', onMove)
        el.removeEventListener('mouseleave', onLeave)
      }
    })

    const ctx = gsap.context(() => {
      // Hero title, letter by letter — one character at a time.
      gsap.from('.hero-letter', {
        y: 80, opacity: 0, rotateX: -50, duration: 0.9, ease: 'power3.out', stagger: 0.055,
      })
      gsap.from('.hero-in', { y: 40, opacity: 0, duration: 1, ease: 'power3.out', stagger: 0.12, delay: 0.35 })

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 50, opacity: 0, scale: 0.97, duration: 0.9, ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%', toggleActions: 'play none none none' },
        })
      })

      // Orbs: the outer wrapper carries the scroll parallax, the inner orb
      // carries the endless float. Two tweens never fight over one element
      // now — that was the old bug, both tweens targeted .orb-a / .orb-b.
      gsap.to('.orb-a', { y: 60, duration: 6, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.orb-b', { y: -50, x: 30, duration: 7, ease: 'sine.inOut', yoyo: true, repeat: -1 })
      gsap.to('.hero-bg-word', { yPercent: 45, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.orb-wrap-a', { yPercent: 30, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } })
      gsap.to('.orb-wrap-b', { yPercent: -20, ease: 'none', scrollTrigger: { trigger: '#home', start: 'top top', end: 'bottom top', scrub: true } })

      // Animated counters, using the real numbers in the markup.
      // Guarded so StrictMode / re-runs never animate a counter twice.
      gsap.utils.toArray('[data-count]').forEach((el) => {
        if (el.dataset.counted) return
        const target = Number(el.dataset.count || 0)
        const obj = { v: 0 }
        gsap.to(obj, {
          v: target, duration: 1.6, ease: 'power2.out',
          scrollTrigger: {
            trigger: el, start: 'top 92%', once: true,
            onEnter: () => { el.dataset.counted = 'true' },
          },
          onUpdate: () => { el.textContent = String(Math.round(obj.v)) },
          onComplete: () => { el.textContent = String(target) },
        })
      })

      // Scroll progress bar.
      gsap.fromTo('.scroll-progress', { scaleX: 0 }, {
        scaleX: 1, ease: 'none',
        scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: 0.3 },
      })
    })

    const onLoad = () => ScrollTrigger.refresh()
    window.addEventListener('load', onLoad)
    // Refresh after fonts settle, so reveal triggers are measured correctly.
    const refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 1200)

    return () => {
      document.removeEventListener('click', anchorHandler)
      window.removeEventListener('load', onLoad)
      window.clearTimeout(refreshTimer)
      if (glowHandler) window.removeEventListener('mousemove', glowHandler)
      cursorCleanups.forEach((fn) => fn())
      magneticCleanups.forEach((fn) => fn())
      tiltCleanups.forEach((fn) => fn())
      cancelAnimationFrame(rafId)
      lenis.destroy()
      ctx.revert()
    }
  }, [])

  const titleLetters = 'C. Habeeb'.split('')

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#070b14]">
      <div className="noise-overlay" aria-hidden="true" />
      <div className="cursor-dot" aria-hidden="true" />
      <div className="cursor-ring" aria-hidden="true" />
      <div className="scroll-progress fixed inset-x-0 top-0 z-[60] h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400" />
      <div className="cursor-glow pointer-events-none fixed left-0 top-0 z-0 hidden h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px] md:block" />
      <nav className="nav-shell fixed inset-x-0 top-0 z-50">
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
          <button onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu" aria-expanded={menuOpen} className="glass rounded-full px-4 py-2 text-sm font-semibold md:hidden">☰ Menu</button>
        </div>
        {menuOpen && (
          <div className="mx-auto max-w-6xl px-5 sm:px-8 md:hidden">
            <div className="flex flex-col gap-3 rounded-3xl border border-white/10 bg-[#0a1120f5] px-5 py-4 text-sm text-slate-200 shadow-2xl shadow-black/60 backdrop-blur-xl">
              {[['#about', 'About'], ['#skills', 'Skills'], ['#projects', 'Projects'], ['#achievements', 'Achievements'], ['#hackathons', 'Hackathons'], ['#contact', 'Contact']].map(([href, label]) => (
                <a key={href} href={href} onClick={() => setMenuOpen(false)} className="hover:text-white">{label}</a>
              ))}
            </div>
          </div>
        )}
      </nav>

      <header id="home" className="relative overflow-hidden pt-36 pb-24 sm:pt-44">
        <HeroParticles />
        <span className="hero-bg-word" aria-hidden="true">PORTFOLIO</span>
        <div className="orb-wrap-a absolute left-[-10%] top-[-10%] h-96 w-96" aria-hidden="true">
          <div className="orb orb-a h-full w-full bg-cyan-500" />
        </div>
        <div className="orb-wrap-b absolute right-[-5%] top-[30%] h-80 w-80" aria-hidden="true">
          <div className="orb orb-b h-full w-full bg-violet-500" />
        </div>
        <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
          <p className="hero-in text-sm font-semibold uppercase tracking-[0.25em] text-cyan-300">AI &amp; ML Developer · Portfolio · Open to internships</p>
          <h1 aria-label="C. Habeeb" className="mt-5 font-display text-[clamp(3.75rem,12vw,8.5rem)] font-bold leading-[0.95] tracking-tight">
            {titleLetters.map((ch, i) => (
              <span key={i} aria-hidden="true" className={`hero-letter ${ch === '.' ? 'text-gradient' : ''}`}>{ch === ' ' ? '\u00a0' : ch}</span>
            ))}
          </h1>
          <p className="hero-in mt-4 flex min-h-[1.75rem] items-center gap-2 text-lg font-semibold text-cyan-200 sm:text-xl" aria-live="polite">
            <span className="role-dot" aria-hidden="true" />
            {ROLES[roleIndex]}
          </p>
          <p className="hero-in mt-5 max-w-3xl text-xl font-medium text-slate-200 sm:text-2xl">
            Building Intelligent Solutions with <span className="text-gradient">AI, Machine Learning</span> &amp; Modern Web Technologies
          </p>
          <p className="hero-in mt-5 max-w-2xl text-base leading-relaxed text-slate-400">
            Turning innovative ideas into intelligent, practical, and user-focused digital experiences.
            Second-year B.Tech (CSE — AI &amp; ML) at Saveetha School of Engineering, SIMATS, Chennai.
          </p>
          <div className="hero-in mt-8 flex flex-wrap gap-3">
            <a data-magnetic href="#projects" className="rounded-full bg-cyan-400 px-6 py-3 font-semibold text-slate-950 hover:bg-cyan-300">View Projects</a>
            <a data-magnetic href={GITHUB} target="_blank" rel="noreferrer" className="glass rounded-full px-6 py-3 font-semibold hover:bg-white/10">GitHub Profile</a>
            <a data-magnetic href="#contact" className="glass rounded-full px-6 py-3 font-semibold hover:bg-white/10">Contact</a>
          </div>
          <p className="hero-in mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-slate-400">
            <span>Chennai, India</span><span className="text-cyan-300" aria-hidden="true">·</span>
            <span>Saveetha School of Engineering</span><span className="text-cyan-300" aria-hidden="true">·</span>
            <span className="font-semibold text-cyan-200">Open to internships</span>
          </p>
          <div className="hero-in mt-12 grid max-w-3xl grid-cols-2 gap-y-6 border-y border-white/10 py-7 text-center sm:grid-cols-4">
            <div className="px-4 sm:border-r sm:border-white/10"><p data-count="13" className="font-display text-3xl font-bold sm:text-4xl">0</p><p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Certificates listed</p></div>
            <div className="px-4 sm:border-r sm:border-white/10"><p data-count="5" className="font-display text-3xl font-bold sm:text-4xl">0</p><p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Projects with source</p></div>
            <div className="px-4 sm:border-r sm:border-white/10"><p data-count="3" className="font-display text-3xl font-bold sm:text-4xl">0</p><p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Shipped products</p></div>
            <div className="px-4"><p data-count="9" className="font-display text-3xl font-bold sm:text-4xl">0</p><p className="mt-1 text-xs uppercase tracking-widest text-slate-400">Featured projects</p></div>
          </div>
          <p className="hero-in mt-6 text-sm text-slate-500">Scroll to explore my work.</p>
          <div className="scroll-hint mt-4 text-2xl text-cyan-300" aria-hidden="true">↓</div>
        </div>
      </header>

      <div className="relative overflow-hidden border-y border-white/10 bg-white/[0.03] py-4" aria-hidden="true">
        <div className="marquee-track text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
          {[0, 1].map((half) => (
            <div key={half} className="marquee-half">
              {MARQUEE_ITEMS.map((t) => (
                <span key={`${half}-${t}`} className="whitespace-nowrap">{t} <span className="ml-8 text-cyan-300">✦</span></span>
              ))}
            </div>
          ))}
        </div>
      </div>

      <Section id="about" index="01" kicker="About me" title="Turning ideas into practical software">
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

      <Section id="skills" index="02" kicker="Skills" title="What I work with">
        <p data-reveal className="-mt-4 max-w-2xl text-slate-400">Technologies I have used across my projects — from frontend and backend to AI/ML, data and APIs.</p>
        <div data-reveal className="relative mx-auto mt-10 h-52 w-52">
          <svg viewBox="0 0 200 200" aria-hidden="true" className="spin-slow absolute inset-0 h-full w-full">
            <defs>
              <path id="skill-circle" d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" />
            </defs>
            <text className="fill-cyan-300" style={{ fontSize: '12px', letterSpacing: '2px', fontWeight: 600 }}>
              <textPath href="#skill-circle">PYTHON • REACT • AI/ML • TAILWIND • NODE • NEXT •</textPath>
            </text>
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
            <span className="font-display text-2xl font-bold">Skills</span>
            <span className="mt-1 text-xs text-slate-400">rotating — full list below</span>
          </div>
        </div>
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

      <Section id="projects" index="03" kicker="Featured projects" title="Projects — built, and concepts in progress">
        <p data-reveal className="-mt-4 max-w-2xl text-slate-400">Status is labelled honestly: “Built” only where a working product exists, “Concept” where the idea is still proposed. Every project links to its real source or live site.</p>
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {projects.map((p, i) => (
            <article key={p.name} data-reveal data-tilt className={`glass card-glow group rounded-3xl p-7 sm:p-8 ${i < 2 ? 'featured-card md:col-span-2' : ''}`}>
              <div className="flex items-start justify-between gap-3">
                <p className="text-xs font-semibold uppercase tracking-widest text-cyan-300">{p.tag}</p>
                <span className="flex shrink-0 items-center gap-2">
                  {i < 2 && <span className="rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 px-3 py-1 text-xs font-bold text-slate-950">Featured</span>}
                  <span className="rounded-full bg-cyan-400/15 px-3 py-1 text-xs font-semibold text-cyan-200 ring-1 ring-cyan-400/30">{p.status}</span>
                </span>
              </div>
              <p className="mt-5 font-display text-sm font-bold text-slate-600">{String(i + 1).padStart(2, '0')}</p>
              <h3 className={`mt-1 font-display font-bold ${i < 2 ? 'text-2xl sm:text-3xl' : 'text-xl'}`}>{p.name}</h3>
              <p className="mt-3 leading-relaxed text-slate-400">{p.desc}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300 ring-1 ring-white/10">{t}</span>
                ))}
              </div>
              {(p.repo || p.demo) && (
                <div className="mt-6 flex flex-wrap gap-3">
                  {p.repo && <a href={p.repo} target="_blank" rel="noreferrer" className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20">View source →</a>}
                  {p.demo && <a href={p.demo} target="_blank" rel="noreferrer" className="rounded-full bg-cyan-400 px-4 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-300">Live site →</a>}
                </div>
              )}
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

      <Section id="achievements" index="04" kicker="Achievements" title="Achievements & profiles">
        <p data-reveal className="-mt-4 max-w-2xl text-slate-400">Built from verified records only — shipped products, hackathons and certificates below are all named, dated and sourced, not claimed in general terms.</p>
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
              <li>• NeuraMorphix HackForge 2026 — participation listed.</li>
              <li>• Buildathon 2026 — participation listed.</li>
              <li>• OOSC 4.0 Hackathon — participation listed.</li>
              <li>• TVS Credit E.P.I.C 8.0 — IT track (per Unstop record).</li>
              <li>• ProduScope 2026: The Product Case Study Competition — Certificate of Participation (Unstop, 25 Oct 2026).</li>
            </ul>
            <p className="mt-4 text-sm text-slate-500">Hackathon participation, listed with certificates where issued.</p>
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
            <a href="mailto:habeeb.c84@gmail.com" className="rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10 hover:bg-white/10"><span className="font-semibold">Email</span><span className="block break-all text-sm text-slate-400">habeeb.c84@gmail.com</span></a>
          </div>
        </div>
      </Section>

      <Section id="hackathons" index="05" kicker="Hackathons & strengths" title="Hackathons, strengths, certificates">
        <div className="grid gap-5 md:grid-cols-2">
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Hackathons</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {hackathons.map((h) => (<li key={h}>• {h}</li>))}
            </ul>
            <p className="mt-4 text-sm text-slate-500">National hackathons, 2026.</p>
          </div>
          <div data-reveal className="glass rounded-3xl p-7">
            <h3 className="font-display text-lg font-bold">Professional strengths</h3>
            <ul className="mt-4 space-y-2 text-slate-300">
              {strengths.map((s) => (<li key={s}>• {s}</li>))}
            </ul>
          </div>
        </div>
        <div data-reveal className="glass mt-5 rounded-3xl p-7">
          <h3 className="font-display text-lg font-bold">🏆 Sangyan Hackathon — Certificate of Excellence in Submission</h3>
          <p className="mt-3 text-slate-400">Certificate of Excellence in Submission, Unstop, Oct 2026 — for the Sangyan Hackathon submission.</p>
        </div>
        <div data-reveal className="glass mt-5 rounded-3xl p-7">
          <h3 className="font-display text-lg font-bold">Certificates — 13 listed, by name</h3>
          <p className="mt-3 text-slate-400">Certificates issued, with titles, issuers and months as issued.</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {certificates.map((c) => (
              <div key={c.name} className="card-glow rounded-2xl bg-white/5 p-5 ring-1 ring-white/10">
                <p className="font-display font-bold">{c.name}</p>
                <p className="mt-2 text-sm text-cyan-200">{c.type}</p>
                <p className="mt-1 text-sm text-slate-400">{c.source} · {c.date}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 text-sm text-slate-500">Kannada Digital Innovation Hackathon 2026 — project submitted successfully on 26 Oct 2026; certificate not yet listed here.</p>
        </div>
      </Section>

      <Section id="contact" index="06" kicker="Contact" title="Let's build something intelligent">
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
            <p className="mt-2 break-all text-slate-400"><a href="mailto:habeeb.c84@gmail.com" className="text-cyan-300 hover:text-cyan-200">habeeb.c84@gmail.com</a></p>
            <p className="mt-2 text-slate-400">Open to internships and collaborations — get in touch.</p>
          </div>
        </div>
        <div data-reveal className="mt-14 border-t border-white/10 pt-10 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500">Have an idea? Write to me</p>
          <a href="mailto:habeeb.c84@gmail.com" className="text-gradient mt-4 inline-block break-all font-display text-2xl font-bold sm:text-4xl">habeeb.c84@gmail.com</a>
        </div>
      </Section>

      <footer className="border-t border-white/10 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 text-sm text-slate-500 sm:flex-row sm:px-8">
          <p>© 2026 C. Habeeb · Built with React, Vite, Tailwind CSS, GSAP + ScrollTrigger and Lenis</p>
          <a href="#home" className="font-semibold text-cyan-300 hover:text-cyan-200">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  // A section deep link (for example #projects) skips the splash so shared
  // links still land on the right section. The plain portfolio link shows it.
  const [entered, setEntered] = useState(
    () => typeof window !== 'undefined' && window.location.hash.length > 1,
  )
  if (entered) return <Portfolio />
  return <Splash onEnter={() => setEntered(true)} />
}
