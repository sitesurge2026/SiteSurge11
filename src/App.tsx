/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from 'motion/react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  EyeOff, 
  Droplet, 
  ShieldCheck, 
  TrendingUp, 
  Quote, 
  ChevronLeft, 
  ChevronRight,
  Home,
  Rocket,
  LayoutGrid,
  MessageSquare,
  Play,
  X
} from 'lucide-react';
import { useState, useEffect } from 'react';

const IMAGES = {
  jupiter: "https://lh3.googleusercontent.com/aida-public/AB6AXuCiTZ9ddosL120hB5SFyDICN5XQtxs_hZSWQoucbi-Y5O7f8p7EjrKRx7cArnLKOObQnYfzmq47xOhdlW9nX3e1E5sFxCSh6fw2Jfr5vLi2h43UccM6Awe_XDmzLfgYe9Hx7TfiTKygWiXasK_NkL2U0K3BGUwyvXI09Pxk9GuT7ppynJetehae6lAfp_4uh6W5Loy4P4QK0D2tmuHOI_jWClOL0o3F--f6gZOcKJIeQIKNRzhYHqUyz9_tZncVrvWZtTlkYDCzuEBY",
  lambda: "https://lh3.googleusercontent.com/aida-public/AB6AXuCKAsmnvmHj7Oa694BsH2QtEbL-JPG3vz_crN5Yo3pWy_36v8eG4PfsrYswJZoQayyCEk_UmHhneB4g0ef1h_jOyrEqe3UA0LXJmKnnwTQsa61jS2pYgsVUzfWM9PSnEsfXXnVTiqXsQPGC7PhpFZeA6ceRTXrM0v6dksnod_YNqTEZjJaTADpl_7dXtluxup4qC_kalC7jVaC26PkPsL78aA_U7_D7weOlQKEk4Rexw_q5B7CMIZUNbxy7p_bf6mh8aQkxrvv2P0h8",
  brics: "https://lh3.googleusercontent.com/aida-public/AB6AXuBjqvWj3G4slUKJSIyKGCQt-IEhL8TTdeBunLaLHAPX2p5dZYfqhuLibVroZFfn4ID3MTCg4--BsNoPWI-uWKgtg8phuTB416VI9llXTrCypPiNV0Y3jGwLVvLZa0A5W4P_1lKhQujjjkWeyIfNr9jj75qOwbt2f2Q7eGRTw2eEP25cjlfmTm-nZC6owwo8xrYyB-gQ-tMnStOZdlXTM377guBJsfA-jZ1VAoap008Qi7FRLUcgo_2eb26RaMR5ucf6UQw4Mkix8VUA",
  dashboard: "https://lh3.googleusercontent.com/aida-public/AB6AXuCPKnK5WgQhGHMIsxu9DvKiltfxeR1GKIRjP-oFzTbJrtZJnJWBGLYzNQd3tncWG_2Su_yF1JClA_IzrnbSh4PWu-7L5__0w9QVXmZNBDao1P26_bXCLyeaH2hwz-KnUMteTUnSjimy3gqkBQ3c6Uvjbm5ADE29O5rdflSuWIEC9etU-za2ad3qAIGcxyY9AikUHeQO-9p8y03-J6rgXcxrw-nZnyD4amQGvX3iQ4282GyzwIPymRl9RNjxlYo4n2Nd-GxKvd3hVsC2",
  caseStudy: "https://lh3.googleusercontent.com/aida-public/AB6AXuDb77NL7OEuMZMzLgHvsvnWuh1cPr3CJ4MTqtNkMI00ZLscN-03U9UUzaHPT-BGn95CRJSMTBzukVwLylzANWjSsfCpExJodPt2KV_ixjdH5TSk3Oht9yvnxC-Ryx3dE19bfrk9wAKcUKKhOa31RYL3H0sMvIx4QdMqpiz1365dwyYa5zmafFFqNddySAMs1P1yS6E7k9NNmaNSvxelUyez2SzUs_3ZGQlbPypHJgxBQpZcSG51i3klEO97i-DKD2fXk61CdHiV145h",
  portrait: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcpRW-ivql52Wyw-dcM-iV4vexiPM8s22YB9lSPwcQeLdWYNg9GHuX_xOtMCA-ubzksiKCbmiMZZOsDj0jcBiR49o_jusnXJs1euxrQqGl53niSwqUkBpaBFee1YEJWG3kmpn-NZZ687eZDqvpK564u7-jrNX_-kzGSc-RcwUCDnUaM6gxPigRluFdi1FnoV-3wurOqiWVYGmJez7srm7dpu0uZROwVS03LspmRuXiPyPxgMGZUldSWEKqe_cBijOwjgGde9MNDvYk"
};

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 w-full z-50 px-6 flex justify-center pointer-events-none">
      <nav 
        className={`pointer-events-auto flex items-center gap-8 md:gap-12 px-6 md:px-10 py-3 rounded-full border transition-all duration-500 ${
          isScrolled 
            ? 'bg-zinc-950/80 backdrop-blur-2xl border-white/20 py-4 shadow-2xl shadow-black' 
            : 'bg-zinc-950/40 backdrop-blur-xl border-white/10 py-5'
        }`}
      >
        <Link to="/" className="text-2xl font-black tracking-tighter text-primary">SiteSurge</Link>
        <div className="hidden md:flex gap-8 items-center">
          {['Services', 'Work', 'How it Works', 'Tips'].map((item) => (
            item === 'Tips' ? (
              <Link 
                key={item} 
                to="/articles" 
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${location.pathname === '/articles' ? 'text-primary' : 'text-zinc-400 hover:text-primary'}`}
              >
                {item}
              </Link>
            ) : (
              <a 
                key={item} 
                href={`/#${item.toLowerCase().replace(/ /g, '')}`} 
                className={`text-sm font-bold uppercase tracking-widest transition-colors duration-300 ${isHome && window.location.hash === `#${item.toLowerCase().replace(/ /g, '')}` ? 'text-primary' : 'text-zinc-400 hover:text-primary'}`}
              >
                {item}
              </a>
            )
          ))}
        </div>
        <button className="bg-primary text-black px-6 py-2.5 rounded-full font-bold transition-all hover:scale-105 active:scale-95 hover:brightness-110 text-sm">
          Talk to Us
        </button>
      </nav>
    </div>
  );
};

const Hero = () => (
  <section className="relative min-h-[120vh] flex flex-col items-center justify-center text-center px-6 pt-24 overflow-hidden">
    {/* Video Background */}
    <div className="absolute inset-0 -z-20 overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      >
        <source 
          src="https://assets.mixkit.co/videos/preview/mixkit-abstract-waves-of-white-smoke-on-a-black-background-26615-large.mp4" 
          type="video/mp4" 
        />
      </video>
    </div>

    <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(163,255,0,0.1)_0%,transparent_70%)]"></div>
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-5xl"
    >
      <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold mb-8 tracking-tight leading-[1.1]">
        Be Found. <br/>
        <span className="text-primary italic">Be Chosen.</span>
      </h1>
      <p className="text-xl md:text-2xl text-zinc-400 mb-12 max-w-3xl mx-auto leading-relaxed">
        We help people find you online. Then we make them want to pick you.
      </p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center">
        <button className="bg-primary text-black px-10 py-5 rounded-2xl font-bold text-xl hover:neon-glow transition-all">
          Start Now
        </button>
        <button className="glass-card text-white px-10 py-5 rounded-2xl font-bold text-xl hover:bg-white/10 transition-all">
          See Our Work
        </button>
      </div>
    </motion.div>
  </section>
);

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState<{title: string, sub: string, img: string, details?: string} | null>(null);

  const projects = [
    { title: "Law Office", sub: "Helping with law", img: IMAGES.jupiter, details: "We made a nice site for a law office. It is very easy to use. People know they can trust this office." },
    { title: "School Site", sub: "Helping people learn", img: IMAGES.lambda, details: "We made a fast school site. Many people can use it at once. It looks very good." },
    { title: "News Site", sub: "Helping the world", img: IMAGES.brics, details: "We made a big news site. It shows news from all over the world. It is very fast." }
  ];

  return (
    <section id="work" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Past Work</h2>
          <div className="h-1 flex-grow bg-white/5 relative overflow-hidden">
            <motion.div 
              initial={{ x: '-100%' }}
              whileInView={{ x: '100%' }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 bg-primary/30 w-1/3"
            />
          </div>
        </div>
        <div className="h-1.5 w-24 bg-primary rounded-full"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedProject(p)}
            className="group relative overflow-hidden rounded-4xl aspect-[4/5] glass-card cursor-pointer"
          >
            <img 
              src={p.img} 
              alt={p.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-10">
              <motion.h3 className="text-3xl font-bold text-white mb-2 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                {p.title}
              </motion.h3>
              <p className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {p.sub}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col md:flex-row shadow-2xl shadow-primary/10"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="w-full md:w-1/2 md:aspect-auto h-64 md:h-auto overflow-hidden">
                <img 
                  src={selectedProject.img} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <div className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Case Study</div>
                <h3 className="text-4xl md:text-5xl font-extrabold mb-4">{selectedProject.title}</h3>
                <p className="text-xl text-zinc-300 mb-8 font-medium">{selectedProject.sub}</p>
                <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                  {selectedProject.details || "We created a dynamic, high-performance platform that transformed their digital presence. Our approach focused on establishing undeniable authority while making the user experience seamless."}
                </p>
                
                <button className="bg-primary text-black px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 w-fit hover:scale-105 transition-transform">
                  View Live Site <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

const TargetAudience = () => (
  <section className="py-24 bg-zinc-950/50">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold">Who is this for?</h2>
      </div>
      <div className="grid md:grid-cols-2 gap-10">
        {[
          {
            title: "Hidden Shops",
            desc: "You have good stuff. But people cannot find you on Google. We can fix that. We make you seen.",
            icon: EyeOff,
            label: "People Find You"
          },
          {
            title: "The Lost Visitors",
            desc: "People see your site. But they leave fast. They do not buy. We help them stay and pick you.",
            icon: Droplet,
            label: "People Buy More"
          }
        ].map((item, i) => (
          <motion.div 
            key={item.title}
            initial={{ opacity: 0, x: i === 0 ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-12 hover:border-primary/30 group"
          >
            <item.icon className="w-16 h-16 text-primary mb-8 group-hover:scale-110 transition-transform duration-500" />
            <h3 className="text-3xl font-bold mb-6">{item.title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed mb-8">{item.desc}</p>
            <div className="flex items-center gap-3 text-primary font-semibold">
              <CheckCircle className="w-6 h-6 fill-primary text-black" />
              <span>{item.label}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Features = () => (
  <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
    <div className="grid lg:grid-cols-2 gap-20 items-center">
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
          We Build <span className="text-primary italic">Good Websites.</span> People Will Trust You.
        </h2>
        <div className="space-y-12">
          {[
            {
              title: "A site people trust",
              desc: "People judge you fast. We make you look good. Then they know you are an expert.",
              icon: ShieldCheck
            },
            {
              title: "Be number one on Google",
              desc: "Getting to the top is not luck. We build your site right. Then Google puts you first.",
              icon: TrendingUp
            }
          ].map((f) => (
            <div key={f.title} className="flex gap-8 group">
              <div className="w-16 h-16 shrink-0 bg-primary/10 flex items-center justify-center rounded-2xl group-hover:bg-primary/20 transition-colors">
                <f.icon className="text-primary w-8 h-8" />
              </div>
              <div>
                <h4 className="font-bold text-2xl mb-3">{f.title}</h4>
                <p className="text-zinc-400 text-lg leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="relative"
      >
        <div className="absolute -inset-10 bg-primary/10 blur-[100px] rounded-full animate-pulse-soft"></div>
        <div className="glass-card p-4 md:p-8 relative overflow-hidden rounded-4xl">
          <img 
            src={IMAGES.dashboard} 
            alt="Dashboard" 
            className="rounded-3xl border border-white/10 shadow-2xl"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

const Process = () => (
  <section id="howitworks" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold">How We Work (3 Easy Steps)</h2>
      </div>
      <div className="grid md:grid-cols-3 gap-12">
        {[
          { step: "01", title: "Check", desc: "We look at your site. We find what is wrong. We see how to fix it." },
          { step: "02", title: "New Style", desc: "We give you a new look. You will look better than any other shop." },
          { step: "03", title: "Getting Found", desc: "We make your site live. Now people can find you on Google easily." }
        ].map((p, i) => (
          <motion.div 
            key={p.step}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2 }}
            viewport={{ once: true }}
            className="text-center px-6 relative"
          >
            <div className="w-28 h-28 bg-zinc-900 border-2 border-primary rounded-full flex items-center justify-center mx-auto mb-10 relative">
              <span className="text-4xl font-black text-primary">{p.step}</span>
              {i === 0 && <div className="absolute -inset-2 rounded-full border border-primary/20 animate-ping"></div>}
            </div>
            <h3 className="text-3xl font-bold mb-6">{p.title}</h3>
            <p className="text-zinc-400 text-lg leading-relaxed">{p.desc}</p>
            {i < 2 && (
              <div className="hidden lg:block absolute top-14 left-[calc(100%-40px)] w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent z-0"></div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const CaseStudy = () => (
  <section className="py-24 px-6 max-w-7xl mx-auto">
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card rounded-[3rem] p-10 md:p-20 overflow-hidden relative"
    >
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest mb-10 border border-primary/20">GROWTH REPORT</span>
          <h2 className="text-4xl md:text-5xl font-bold mb-10">See Our Results</h2>
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="bg-white/5 p-10 rounded-4xl border border-white/5 hover:border-primary/20 transition-all">
              <p className="text-5xl font-black text-primary mb-3">240%</p>
              <p className="text-zinc-500 text-lg uppercase tracking-wider font-bold">More Visitors</p>
            </div>
            <div className="bg-white/5 p-10 rounded-4xl border border-white/5 hover:border-primary/20 transition-all">
              <p className="text-5xl font-black text-primary mb-3">12k+</p>
              <p className="text-zinc-500 text-lg uppercase tracking-wider font-bold">New Calls</p>
            </div>
          </div>
          <p className="text-zinc-400 text-xl leading-relaxed mb-12">
            We helped a small shop grow big in 3 months. Our work helps you get more sales and more jobs.
          </p>
          <button className="flex items-center gap-4 text-primary font-bold text-2xl hover:gap-6 transition-all group">
            Watch How We Did It <ArrowRight className="w-8 h-8 transition-transform group-hover:scale-110" />
          </button>
        </div>
        <div className="relative aspect-video bg-zinc-900 rounded-4xl border border-white/10 flex items-center justify-center overflow-hidden hover:neon-glow transition-all">
          <img 
            src={IMAGES.caseStudy} 
            alt="Workspace" 
            className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity"
          />
          <button className="relative w-28 h-28 bg-primary rounded-full flex items-center justify-center text-black shadow-2xl hover:scale-110 active:scale-95 transition-all">
            <Play className="w-12 h-12 fill-current ml-2" />
          </button>
        </div>
      </div>
    </motion.div>
  </section>
);

const Testimonial = () => (
  <section className="py-32 bg-zinc-950 overflow-hidden relative">
    <div className="max-w-5xl mx-auto px-6 text-center">
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="mb-12 inline-block"
      >
        <Quote className="w-24 h-24 text-primary opacity-20" />
      </motion.div>
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        className="text-3xl md:text-5xl font-medium mb-20 italic leading-relaxed md:leading-snug"
      >
        "Our site got better fast! We went from page 5 to page 1 on Google. SiteSurge helped our shop get many more sales."
      </motion.p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-primary neon-glow">
          <img src={IMAGES.portrait} alt="Client" className="w-full h-full object-cover" />
        </div>
        <div className="text-left">
          <p className="font-bold text-white text-2xl mb-1">Aatif Iqbal</p>
          <p className="text-zinc-500 text-lg uppercase tracking-[0.15em]">CEO, Jupiter Law</p>
        </div>
      </div>
      <div className="flex justify-center gap-8 mt-20">
        <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-primary text-zinc-500 hover:text-primary transition-all group">
          <ChevronLeft className="w-8 h-8 group-hover:-translate-x-1 transition-transform" />
        </button>
        <button className="w-16 h-16 rounded-full border border-white/10 flex items-center justify-center hover:border-primary text-zinc-500 hover:text-primary transition-all group">
          <ChevronRight className="w-8 h-8 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="py-24 px-6">
    <motion.div 
      whileInView={{ scale: [0.95, 1] }}
      className="max-w-7xl mx-auto glass-card rounded-[4rem] p-16 md:p-32 text-center relative overflow-hidden"
    >
      <div className="absolute -top-32 -right-32 w-[600px] h-[600px] bg-primary/10 blur-[120px] rounded-full animate-pulse-soft"></div>
      <div className="relative z-10">
        <h2 className="text-4xl md:text-6xl font-black mb-10 tracking-tight leading-tight">We help every business.</h2>
        <p className="text-zinc-400 text-xl md:text-2xl mb-20 max-w-3xl mx-auto leading-relaxed">
          Do not use cheap sites. Get a plan that helps you win and grow.
        </p>
        <div className="flex flex-col sm:flex-row gap-8 justify-center">
          <button className="bg-primary text-black px-14 py-7 rounded-2xl font-black text-2xl hover:neon-glow-strong transition-all">
            Start Now
          </button>
          <button className="bg-white/5 border border-white/10 text-white px-14 py-7 rounded-2xl font-black text-2xl hover:bg-white/10 transition-all">
            Talk For Free
          </button>
        </div>
      </div>
    </motion.div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-950 w-full py-20 px-6 md:px-12 border-t border-white/5 mt-12 pb-20">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
      <div className="text-primary font-black text-2xl tracking-tighter">SITESURGE</div>
      <div className="text-center md:text-left text-zinc-500 text-sm tracking-widest font-medium uppercase">
        © 2026 SITESURGE. WE MAKE GOOD SITES.
      </div>
      <div className="flex gap-12 font-bold text-zinc-400">
        {['Instagram', 'LinkedIn', 'Twitter', 'Dribbble'].map(social => (
          <a key={social} href="#" className="hover:text-primary transition-colors">{social}</a>
        ))}
      </div>
    </div>
  </footer>
);

const Home = () => (
  <main>
    <Hero />
    <Portfolio />
    <TargetAudience />
    <Features />
    <Process />
    <CaseStudy />
    <Testimonial />
    <FinalCTA />
  </main>
);

const ArticlesPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<{
    title: string;
    content: string;
    date: string;
    category: string;
    readTime: string;
  } | null>(null);

  const articles = [
    {
      title: "Why Google is very important",
      snippet: "Find out why being seen on Google is good for you. We show you how to be first.",
      content: "Google is where people look for things. If they cannot find you, they cannot buy from you. We build your site so Google likes it.\n\nWe make sure your site is fast and has the right words. This helps you get more visitors.",
      date: "Oct 12, 2025",
      category: "How to Win",
      readTime: "5 min read"
    },
    {
      title: "How to sell on your site",
      snippet: "A site must do more than look good. Learn how we help you get more sales from your site.",
      content: "A good site helps you sell. We make buttons that people want to click. We make it easy for them to buy.\n\nWe use nice big pictures and easy words. This makes people trust you. Then they buy from you.",
      date: "Sep 28, 2025",
      category: "How to Look Good",
      readTime: "7 min read"
    },
    {
      title: "Why a new look wins",
      snippet: "Do not use old styles. A new look helps people pick you over others. Custom sites are better.",
      content: "When you use a cheap site, you look like everyone else. We give you a new look that is yours. This helps people pick you.\n\nA new site is fast and works well. It is a good way to help your shop grow.",
      date: "Sep 15, 2025",
      category: "How to Build",
      readTime: "6 min read"
    },
    {
      title: "How a shop grew very big",
      snippet: "Look at how one small shop got many more sales. We turned them into a big leader fast.",
      content: "One shop was very small. People could not find them. We gave them a new site and better Google ranking.\n\nIn 6 months, they got 3 times more calls. Now they are a big shop and very busy.",
      date: "Aug 30, 2025",
      category: "Big Growth",
      readTime: "8 min read"
    }
  ];

  return (
    <main className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="inline-block px-6 py-2 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-widest mb-8 border border-primary/20">OUR TIPS</span>
        <h1 className="text-5xl md:text-7xl font-extrabold mb-16 tracking-tight">Blog and News</h1>
        
        <div className="grid md:grid-cols-2 gap-10">
          {articles.map((article, i) => (
            <motion.div 
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              onClick={() => setSelectedArticle(article)}
              className="glass-card p-10 group cursor-pointer hover:border-primary/50 relative overflow-hidden flex flex-col"
            >
              <div className="flex gap-4 mb-6 text-sm font-bold text-zinc-500 uppercase tracking-wider">
                <span className="text-primary">{article.category}</span>
                <span>•</span>
                <span>{article.date}</span>
              </div>
              <h3 className="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{article.title}</h3>
              <p className="text-zinc-400 text-lg leading-relaxed mb-8 flex-grow">{article.snippet}</p>
              
              <div className="flex justify-between items-center border-t border-white/10 pt-6 mt-auto">
                <span className="text-sm text-zinc-500">{article.readTime}</span>
                <span className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all">Read More <ArrowRight className="w-4 h-4" /></span>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <AnimatePresence>
        {selectedArticle && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-12 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedArticle(null)}
          >
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-zinc-900 border border-white/10 rounded-3xl overflow-hidden flex flex-col shadow-2xl shadow-primary/10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedArticle(null)}
                className="absolute top-6 right-6 z-10 bg-black/50 hover:bg-black/80 p-2 rounded-full text-white transition-colors"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
              
              <div className="p-8 md:p-16">
                <div className="flex gap-4 mb-8 text-sm font-bold text-zinc-400 uppercase tracking-wider">
                  <span className="text-primary">{selectedArticle.category}</span>
                  <span>•</span>
                  <span>{selectedArticle.date}</span>
                  <span>•</span>
                  <span>{selectedArticle.readTime}</span>
                </div>
                
                <h3 className="text-4xl md:text-5xl font-extrabold mb-10 leading-tight">
                  {selectedArticle.title}
                </h3>
                
                <div className="space-y-6 text-zinc-300 text-lg md:text-xl leading-relaxed">
                  {selectedArticle.content.split('\n\n').map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default function App() {
  const [loading, setLoading] = useState(true);

  // Fake initial load for feel
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <AnimatePresence>
          {loading && (
            <motion.div 
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
            >
              <motion.div 
                animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full"
              />
            </motion.div>
          )}
        </AnimatePresence>
        
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/articles" element={<ArticlesPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
