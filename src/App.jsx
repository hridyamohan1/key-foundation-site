import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Building2, CheckCircle2, Mail, MapPin, Menu, Phone, Sparkles } from "lucide-react";

const projects = [
  { title: "Signature Residence", category: "Residential", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80" },
  { title: "Urban Commercial Hub", category: "Commercial", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" },
  { title: "Premium Villa Renovation", category: "Renovations", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80" },
  { title: "Modern Apartment Block", category: "Residential", image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80" },
  { title: "Corporate Tower Fit-Out", category: "Commercial", image: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1200&q=80" },
];

const services = ["Residential Construction", "Commercial Projects", "Renovations", "Project Consultation"];
const facilities = [
  "Transparent project planning and progress updates",
  "Premium material selection and quality supervision",
  "Experienced engineering and site management team",
  "End-to-end design, construction, and renovation support",
];

function SectionTitle({ eyebrow, title, children }) {
  return (
    <div className="mx-auto mb-12 max-w-3xl text-center">
      <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ba319f]">{eyebrow}</p>
      <h2 className="font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">{title}</h2>
      {children && <p className="mt-5 text-base leading-8 text-white/70">{children}</p>}
    </div>
  );
}

function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#100725]/75 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#home" className="font-serif text-sm font-bold uppercase tracking-[0.25em] text-white md:text-base">Key Foundations</a>
        <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
          <a href="#about" className="hover:text-[#ba319f]">About Us</a>
          <a href="#projects" className="hover:text-[#ba319f]">Projects</a>
          <a href="#services" className="hover:text-[#ba319f]">Services</a>
          <a href="#contact" className="hover:text-[#ba319f]">Contact</a>
        </div>
        <a href="#contact" className="hidden rounded-full bg-gradient-to-r from-[#6e1f86] to-[#ba319f] px-5 py-2.5 text-sm font-bold text-white shadow-lg shadow-[#ba319f]/20 md:inline-flex">Enquire Now</a>
        <Menu className="text-white md:hidden" />
      </nav>
    </header>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const categories = ["All Projects", "Residential", "Commercial", "Renovations"];
  const filteredProjects = useMemo(() => activeCategory === "All Projects" ? projects : projects.filter((p) => p.category === activeCategory), [activeCategory]);

  return (
    <main className="min-h-screen overflow-hidden bg-[#100725] text-white">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_20%,rgba(186,49,159,0.35),transparent_28%),radial-gradient(circle_at_85%_5%,rgba(110,31,134,0.32),transparent_30%),linear-gradient(135deg,#100725_0%,#220b39_45%,#491358_100%)]" />
      <div className="fixed inset-0 -z-10 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:56px_56px] opacity-50" />
      <Nav />

      <section id="home" className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 pt-28 md:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.4em] text-[#ba319f]">Builders & Developers</p>
          <h1 className="font-serif text-5xl font-semibold leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">Key Foundation Builders & Developers</h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/72">Key Foundations — your dream, our responsibility. We build spaces with passion, trust, quality, and complete assurance.</p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#projects" className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#6e1f86] to-[#ba319f] px-6 py-4 font-bold text-white shadow-2xl shadow-[#ba319f]/25">View Projects <ArrowRight size={18} /></a>
            <a href="#about" className="rounded-full border border-white/15 bg-white/5 px-6 py-4 font-bold text-white hover:bg-white/10">Our Story</a>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.9, delay: 0.1 }} className="relative min-h-[540px] overflow-hidden rounded-[2.2rem] border border-white/15 bg-white/5 shadow-2xl shadow-black/35">
          <img className="h-[540px] object-cover opacity-85" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80" alt="Premium high-rise building" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#100725] via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/15 bg-[#100725]/70 p-6 backdrop-blur-xl">
            <Sparkles className="mb-4 text-[#ba319f]" />
            <h3 className="font-serif text-2xl">Built with responsibility</h3>
            <p className="mt-2 text-sm leading-7 text-white/70">Every project is treated as a promise — planned carefully, delivered beautifully.</p>
          </div>
        </motion.div>
      </section>

      <section id="about" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div className="grid grid-cols-2 gap-4">
            <img className="h-80 rounded-[2rem] border border-white/15 object-cover" src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=900&q=80" alt="Modern building" />
            <img className="mt-12 h-80 rounded-[2rem] border border-white/15 object-cover" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80" alt="Planning discussion" />
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 shadow-2xl shadow-black/25 md:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ba319f]">Our Story</p>
            <h2 className="font-serif text-4xl font-semibold md:text-6xl">A passionate journey in construction</h2>
            <p className="mt-6 leading-8 text-white/72">Key Foundation Builders & Developers is committed to creating spaces that reflect quality, integrity, and care. Our journey is guided by trust, precision, and a deep responsibility toward every client’s dream.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-8 md:grid-cols-[0.75fr_1.25fr]">
          <div className="flex min-h-[460px] items-center justify-center rounded-[2rem] border border-white/15 bg-gradient-to-br from-black to-[#491358] p-8 text-center text-white/45">Founder’s Photo</div>
          <div className="rounded-[2rem] border border-white/15 bg-[#220b39]/70 p-8 md:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ba319f]">Meet Our Founder</p>
            <h2 className="font-serif text-4xl font-semibold md:text-6xl">Jobiyas Johny</h2>
            <p className="mt-7 text-lg italic leading-9 text-white/82">“At Key Foundations, every project we take on is a promise — built with passion, guided by trust, and delivered with uncompromising quality. We understand that we are not just building structures, but fulfilling dreams.”</p>
            <p className="mt-7 text-white/70">Founder and Managing Director, Key Foundation Builders and Developers</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-8 md:p-10">
            <Building2 className="mb-6 text-[#ba319f]" size={34} />
            <h2 className="font-serif text-4xl">Our Vision</h2>
            <p className="mt-5 leading-8 text-white/72">To be a trusted name in construction, known for creating spaces that reflect quality, integrity, and care — building lasting relationships through passion, precision, and complete assurance.</p>
          </div>
          <div className="rounded-[2rem] border border-white/15 bg-gradient-to-br from-[#491358]/75 to-[#220b39]/80 p-8 md:p-10">
            <CheckCircle2 className="mb-6 text-[#ba319f]" size={34} />
            <h2 className="font-serif text-4xl">Our Mission</h2>
            <p className="mt-5 text-xl leading-9 text-white/80">“To build with integrity, deliver with excellence, and earn trust that lasts a lifetime.”</p>
          </div>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Our Project" title="Selected premium works">Showcasing 3–5 best projects with elegant titles and a premium category filter.</SectionTitle>
        <div className="mb-9 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button key={category} onClick={() => setActiveCategory(category)} className={`rounded-full border px-5 py-3 text-sm font-bold transition ${activeCategory === category ? "border-[#ba319f] bg-[#ba319f] text-white" : "border-white/15 bg-white/5 text-white/70 hover:bg-white/10"}`}>{category}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <motion.article layout key={project.title} className="group overflow-hidden rounded-[2rem] border border-white/15 bg-white/[0.06]">
              <img className="h-72 object-cover transition duration-500 group-hover:scale-105" src={project.image} alt={project.title} />
              <div className="p-6">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ba319f]">{project.category}</p>
                <h3 className="mt-2 font-serif text-2xl">{project.title}</h3>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="services" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Our Services" title="Complete construction support" />
        <div className="grid gap-6 md:grid-cols-4">
          {services.map((service, index) => (
            <div key={service} className="rounded-[2rem] border border-white/15 bg-white/[0.06] p-7">
              <span className="text-5xl font-black text-white/10">0{index + 1}</span>
              <CheckCircle2 className="my-5 text-[#ba319f]" />
              <h3 className="font-serif text-2xl">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ba319f]">Our Facilities</p>
            <h2 className="font-serif text-4xl font-semibold md:text-6xl">Designed for assurance</h2>
          </div>
          <div className="grid gap-4">
            {facilities.map((facility) => (
              <div key={facility} className="flex gap-4 rounded-3xl border border-white/15 bg-white/[0.06] p-5">
                <CheckCircle2 className="mt-1 shrink-0 text-[#ba319f]" />
                <p className="text-white/75">{facility}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <SectionTitle eyebrow="Our Valued Clients" title="Trusted by people who value quality" />
        <div className="grid gap-4 md:grid-cols-4">
          {["Client 01", "Client 02", "Client 03", "Client 04"].map((client) => (
            <div key={client} className="rounded-3xl border border-white/15 bg-white/[0.06] p-8 text-center font-serif text-xl text-white/70">{client}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="overflow-hidden rounded-[2.4rem] border border-white/15 bg-[#220b39]/80 shadow-2xl shadow-black/35 md:grid md:grid-cols-[1fr_0.9fr]">
          <div className="p-8 md:p-12">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.35em] text-[#ba319f]">Contact Us</p>
            <h2 className="font-serif text-4xl font-semibold md:text-6xl">Let’s build your dream</h2>
            <p className="mt-6 leading-8 text-white/72">Share your project idea and our team will help you plan the next step with clarity and confidence.</p>
            <div className="mt-8 grid gap-4 text-white/75">
              <p className="flex items-center gap-3"><Phone className="text-[#ba319f]" /> +91 00000 00000</p>
              <p className="flex items-center gap-3"><Mail className="text-[#ba319f]" /> info@keyfoundations.com</p>
              <p className="flex items-center gap-3"><MapPin className="text-[#ba319f]" /> Kerala, India</p>
            </div>
          </div>
          <form className="grid gap-4 bg-white/[0.05] p-8 md:p-12">
            <input className="rounded-2xl border border-white/15 bg-[#100725]/70 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Your name" />
            <input className="rounded-2xl border border-white/15 bg-[#100725]/70 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Phone / Email" />
            <textarea className="min-h-36 rounded-2xl border border-white/15 bg-[#100725]/70 px-5 py-4 outline-none placeholder:text-white/40" placeholder="Tell us about your project" />
            <button type="button" className="rounded-full bg-gradient-to-r from-[#6e1f86] to-[#ba319f] px-6 py-4 font-bold text-white">Send Enquiry</button>
          </form>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 text-center text-sm text-white/55">© 2026 Key Foundation Builders & Developers. Your dream, our responsibility.</footer>
    </main>
  );
}
