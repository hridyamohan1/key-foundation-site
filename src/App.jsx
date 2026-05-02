import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, MapPin, Menu, Phone, X } from "lucide-react";

const projects = [
  {
    title: "Signature Residence",
    type: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "Urban Commercial Hub",
    type: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90",
  },
  {
    title: "Premium Villa Renovation",
    type: "Renovations",
    image:
      "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=90",
  },
];

const services = [
  "Residential Construction",
  "Commercial Projects",
  "Renovations",
  "Project Consultation",
];

const facilities = [
  "Transparent project planning and progress updates",
  "Premium material selection and quality supervision",
  "Experienced engineering and site management team",
  "End-to-end design, construction, and renovation support",
];

const revealUp = {
  hidden: { opacity: 0, y: 80 },
  visible: { opacity: 1, y: 0 },
};

const revealLeft = {
  hidden: { opacity: 0, x: -90, scale: 1.08 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

const revealRight = {
  hidden: { opacity: 0, x: 90, scale: 1.08 },
  visible: { opacity: 1, x: 0, scale: 1 },
};

function AnimatedImage({ src, alt, className = "", direction = "up" }) {
  const variant = direction === "left" ? revealLeft : direction === "right" ? revealRight : revealUp;

  return (
    <motion.div
      variants={variant}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
      transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      className={`overflow-hidden ${className}`}
    >
      <motion.img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        initial={{ scale: 1.12 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: false, amount: 0.25 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
      />
    </motion.div>
  );
}

function Nav() {
  const [open, setOpen] = useState(false);
  const links = [
    ["About", "#about"],
    ["Founder", "#founder"],
    ["Vision", "#vision"],
    ["Projects", "#projects"],
    ["Services", "#services"],
    ["Contact", "#contact"],
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#ded3c2] bg-[#f7f3ec]/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-5 sm:py-5 lg:px-8">
        <a href="#home" className="font-serif text-[18px] font-light tracking-tight text-[#2d2925]">
          Key Foundations
        </a>

        <div className="hidden items-center gap-8 text-[10px] font-medium uppercase tracking-[0.3em] text-[#6f6760] md:flex">
          {links.map(([label, href]) => (
            <a key={label} href={href} className="transition hover:text-[#a5825a]">
              {label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden border border-[#b89b77] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#8b6b46] transition hover:bg-[#8b6b46] hover:text-white md:inline-flex"
        >
          Enquire
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="rounded-full border border-[#d8cbb9] p-2 text-[#2d2925] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[#e6ded2] bg-[#f7f3ec] px-5 pb-5 md:hidden">
          <div className="grid gap-2 pt-3 text-sm text-[#4d4741]">
            {links.map(([label, href]) => (
              <a key={label} onClick={() => setOpen(false)} href={href} className="py-3">
                {label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionHeading({ eyebrow, title, children }) {
  return (
    <motion.div
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.35 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-10 max-w-3xl text-center sm:mb-14"
    >
      <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b4936b]">
        {eyebrow}
      </p>
      <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight text-[#2d2925] sm:text-[42px] lg:text-[48px]">
        {title}
      </h2>
      {children && <p className="mx-auto mt-4 max-w-2xl text-[14px] font-light leading-7 text-[#756d66] sm:mt-5 sm:text-[15px]">{children}</p>}
    </motion.div>
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const categories = ["All Projects", "Residential", "Commercial", "Renovations"];

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All Projects") return projects;
    return projects.filter((project) => project.type === activeCategory);
  }, [activeCategory]);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3ec] font-sans text-[#2d2925]">
      <Nav />

      <section id="home" className="pt-[65px] sm:pt-20">
        <div className="relative h-[78vh] min-h-[520px] overflow-hidden sm:h-[88vh] sm:min-h-[620px]">
          <motion.video
            className="h-full w-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            poster="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2200&q=90"
            initial={{ scale: 1.12, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <source src="/video.mp4" type="video/mp4" />
          </motion.video>
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/42 to-black/5" />

          <motion.div
            initial={{ opacity: 0, y: 55 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 mx-auto flex max-w-7xl items-center px-4 sm:px-5 lg:px-8"
          >
            <div className="max-w-4xl text-white">
              <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.28em] text-[#d8bd93] sm:mb-5 sm:text-[10px] sm:tracking-[0.35em]">
                Key Foundation Builders & Developers
              </p>
              <h1 className="font-serif text-[38px] font-light leading-[1.05] tracking-tight sm:text-[56px] lg:text-[68px]">
                Your dream, our responsibility.
              </h1>
              <p className="mt-5 max-w-xl text-[14px] font-light leading-7 text-white/80 sm:mt-7 sm:text-[15px]">
                We build spaces with passion, trust, quality, and complete assurance.
              </p>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-3 bg-[#f7f3ec] px-5 py-3 text-[10px] font-medium uppercase tracking-[0.2em] text-[#2d2925] transition hover:bg-[#d8bd93] sm:mt-9 sm:px-7 sm:py-4 sm:text-[11px] sm:tracking-[0.22em]"
              >
                Start a Project <ArrowRight size={17} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        id="about"
        className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-5 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:px-8 lg:py-32"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.35 }}
        transition={{ staggerChildren: 0.22 }}
      >
        <motion.div variants={revealUp} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}>
          <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b4936b]">
            Our Story
          </p>
          <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight text-[#2d2925] sm:text-[42px] lg:text-[48px]">
            A passionate journey in construction.
          </h2>
        </motion.div>
        <motion.div variants={revealUp} transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }} className="flex items-center">
          <p className="text-[14px] font-light leading-7 text-[#756d66] sm:text-[15px]">
            Key Foundation Builders & Developers is committed to creating spaces that reflect quality, integrity, and care. Our journey is guided by trust, precision, and a deep responsibility toward every client’s dream.
          </p>
        </motion.div>
      </motion.section>

      <section
        id="founder"
        className="bg-[#2d2925] px-4 py-16 text-white sm:px-5 sm:py-24 lg:px-8 lg:py-32"
      >
        <motion.div
          className="mx-auto max-w-5xl text-center"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="mb-4 text-[9px] font-medium uppercase tracking-[0.28em] text-[#d8bd93] sm:mb-5 sm:text-[10px] sm:tracking-[0.35em]">
            Meet Our Founder
          </p>

          <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">
            Jobiyas Johny
          </h2>

          <p className="mx-auto mt-6 max-w-4xl font-serif text-[19px] font-light italic leading-[1.55] text-white/85 sm:mt-8 sm:text-[22px] md:text-[26px]">
            “At Key Foundations, every project we take on is a promise — built
            with passion, guided by trust, and delivered with uncompromising
            quality. We understand that we are not just building structures, but
            fulfilling dreams. That’s why we work with care, integrity, and
            complete assurance, treating every project as our own.”
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-[14px] font-light leading-7 text-white/65 sm:mt-6 sm:text-[15px]">
            Your trust is our foundation, and your satisfaction is our greatest
            achievement.
          </p>

          <p className="mt-7 text-[10px] uppercase leading-6 tracking-[0.18em] text-white/45 sm:mt-8 sm:text-[11px] sm:tracking-[0.2em]">
            Founder and Managing Director, Key Foundation Builders and Developers
          </p>
        </motion.div>
      </section>

      <section id="vision" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-5 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        <AnimatedImage
          direction="left"
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&q=90"
          alt="Modern tower"
          className="h-[320px] bg-[#eee5d8] sm:h-[420px] lg:min-h-[500px]"
        />
        <motion.div
          className="flex items-center"
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b4936b]">
              Our Vision
            </p>
            <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight text-[#2d2925] sm:text-[42px] lg:text-[48px]">
              Trusted spaces with enduring value.
            </h2>
            <p className="mt-6 text-[15px] font-light leading-7 text-[#756d66]">
              To be a trusted name in construction, known for creating spaces that reflect quality, integrity, and care. We envision building not just structures, but lasting relationships — delivering every project with passion, precision, and complete assurance. Our goal is to shape a future where every space we create stands as a symbol of trust, excellence, and enduring value.
            </p>
          </div>
        </motion.div>
      </section>

      <section id="mission" className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-5 sm:py-24 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-32">
        <motion.div
          className="order-2 flex items-center lg:order-1"
          initial={{ opacity: 0, x: -70 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b4936b]">
              Our Mission
            </p>
            <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight text-[#2d2925] sm:text-[42px] lg:text-[48px]">
              Built with integrity. Delivered with excellence.
            </h2>
            <p className="mt-6 text-[15px] font-light leading-7 text-[#756d66]">
              To build with integrity, deliver with excellence, and earn trust that lasts a lifetime.
            </p>
          </div>
        </motion.div>
        <AnimatedImage
          direction="right"
          src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=90"
          alt="High-rise building"
          className="order-1 h-[320px] bg-[#eee5d8] sm:h-[420px] lg:order-2 lg:h-[500px]"
        />
      </section>

      <section id="projects" className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Our Project" title="Selected premium works">
          Showing our best projects with elegant titles and a premium category filter.
        </SectionHeading>

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.35 }}
          transition={{ duration: 0.8 }}
          className="mb-8 flex justify-start gap-3 overflow-x-auto pb-2 sm:mb-10 sm:justify-center"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`shrink-0 border px-5 py-3 text-[10px] font-medium uppercase tracking-[0.25em] transition ${
                activeCategory === category
                  ? "border-[#8b6b46] bg-[#8b6b46] text-white"
                  : "border-[#d8cbb9] text-[#756d66] hover:border-[#8b6b46] hover:text-[#8b6b46]"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <div className="mx-auto grid max-w-7xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.title}
              className="group"
              initial={{ opacity: 0, y: 90 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{ duration: 0.9, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="overflow-hidden bg-[#eee5d8]">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="h-[300px] w-full object-cover sm:h-[380px] lg:h-[430px]"
                  initial={{ scale: 1.12 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: false, amount: 0.25 }}
                  transition={{ duration: 1.25, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
                />
              </div>
              <motion.div
                className="pt-4 sm:pt-6"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.25 }}
                transition={{ duration: 0.7, delay: 0.25 + index * 0.12 }}
              >
                <p className="mb-2 text-[10px] font-medium uppercase tracking-[0.3em] text-[#b4936b]">
                  {project.type}
                </p>
                <h3 className="font-serif text-[22px] font-light tracking-tight text-[#2d2925]">{project.title}</h3>
              </motion.div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="facilities" className="mx-auto max-w-7xl px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Our Facilities" title="Built for assurance" />
        <div className="grid gap-1 border-y border-[#d8cbb9]">
          {facilities.map((facility, index) => (
            <motion.div
              key={facility}
              className="grid gap-3 border-b border-[#d8cbb9] py-6 last:border-b-0 sm:grid-cols-[90px_1fr_auto] sm:items-center sm:gap-4 sm:py-8"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{ duration: 0.75, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-serif text-[28px] font-light text-[#b4936b]">0{index + 1}</span>
              <h3 className="font-serif text-[22px] font-light tracking-tight text-[#2d2925]">{facility}</h3>
              <CheckCircle2 className="text-[#b4936b]" />
            </motion.div>
          ))}
        </div>
      </section>

      <section id="services" className="bg-white px-4 py-16 sm:px-5 sm:py-24 lg:px-8 lg:py-32">
        <SectionHeading eyebrow="Our Service" title="What we do" />
        <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service}
              className="border border-[#e6ded2] p-5 transition hover:border-[#b4936b] sm:p-7"
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="font-serif text-[32px] font-light text-[#b4936b]">0{index + 1}</span>
              <h3 className="mt-6 font-serif text-[22px] font-light tracking-tight text-[#2d2925] sm:mt-10">{service}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-5 sm:py-24 lg:px-8 lg:py-32"
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.35 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#b4936b]">
          Our Valued Clients
        </p>
        <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight text-[#2d2925] sm:text-[42px] lg:text-[48px]">
          Trusted by people who value quality.
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-[14px] font-light leading-7 text-[#756d66] sm:text-[15px]">
          We have proudly worked with homeowners, businesses, architects, and developers who trust us to deliver quality, clarity, and lasting value.
        </p>
        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:gap-6 md:grid-cols-4">
          <div className="border border-[#e2d9cd] px-3 py-5 text-[12px] font-medium tracking-wide text-[#2d2925] transition hover:border-[#b4936b] hover:bg-white">
            Homeowners
          </div>
          <div className="border border-[#e2d9cd] px-3 py-5 text-[12px] font-medium tracking-wide text-[#2d2925] transition hover:border-[#b4936b] hover:bg-white">
            Commercial Clients
          </div>
          <div className="border border-[#e2d9cd] px-3 py-5 text-[12px] font-medium tracking-wide text-[#2d2925] transition hover:border-[#b4936b] hover:bg-white">
            Architects
          </div>
          <div className="border border-[#e2d9cd] px-3 py-5 text-[12px] font-medium tracking-wide text-[#2d2925] transition hover:border-[#b4936b] hover:bg-white">
            Developers
          </div>
        </div>
      </motion.section>

      <section id="contact" className="bg-[#2d2925] px-4 py-16 text-white sm:px-5 sm:py-24 lg:px-8 lg:py-32">
        <motion.div
          className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12"
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#d8bd93]">
              Contact Us
            </p>
            <h2 className="font-serif text-[30px] font-light leading-[1.12] tracking-tight sm:text-[42px] lg:text-[48px]">
              Let’s build something beautiful.
            </h2>
            <p className="mt-5 max-w-md text-[14px] font-light leading-7 text-white/65 sm:mt-6 sm:text-[15px]">
              Share your idea with us. We’ll help you plan the next step clearly and confidently.
            </p>
            <div className="mt-7 grid gap-4 text-sm text-white/80 sm:mt-8 sm:text-base">
              <p className="flex items-center gap-3"><Phone size={18} className="text-[#d8bd93]" /> +91 00000 00000</p>
              <p className="flex items-center gap-3"><Mail size={18} className="text-[#d8bd93]" /> info@keyfoundations.com</p>
              <p className="flex items-center gap-3"><MapPin size={18} className="text-[#d8bd93]" /> Kerala, India</p>
            </div>
          </div>

          <form className="grid gap-4">
            <input className="border border-white/15 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-white/38 focus:border-[#d8bd93] sm:px-5 sm:text-base" placeholder="Your name" />
            <input className="border border-white/15 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-white/38 focus:border-[#d8bd93] sm:px-5 sm:text-base" placeholder="Phone / Email" />
            <textarea className="min-h-36 border border-white/15 bg-white/5 px-4 py-4 text-sm outline-none placeholder:text-white/38 focus:border-[#d8bd93] sm:px-5 sm:text-base" placeholder="Tell us about your project" />
            <button type="button" className="bg-[#d8bd93] px-6 py-4 text-[10px] font-medium uppercase tracking-[0.2em] text-[#2d2925] transition hover:bg-white sm:px-7 sm:text-[11px] sm:tracking-[0.22em]">
              Send Enquiry
            </button>
          </form>
        </motion.div>
      </section>

      <footer className="bg-[#2d2925] px-4 pb-8 text-center text-[10px] uppercase leading-6 tracking-[0.18em] text-white/35 sm:px-5 sm:pb-10 sm:text-xs sm:tracking-[0.2em]">
        © 2026 Key Foundation Builders & Developers
      </footer>
    </main>
  );
}
