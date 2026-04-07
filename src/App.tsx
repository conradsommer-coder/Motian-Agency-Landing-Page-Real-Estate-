import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronDown, 
  MessageSquare, 
  Zap, 
  Target, 
  Layers, 
  BarChart3, 
  Camera, 
  Globe, 
  PenTool, 
  Users,
  Plus,
  Minus,
  Mail,
  Phone,
  Building2
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? 'py-4 glass' : 'py-8 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1775596559/logo_MOTIONAGENCY-05_gw5nbl.png" 
            alt="Motion Agency Logo" 
            className="h-8 md:h-10 w-auto object-contain"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium uppercase tracking-widest text-white/70">
          <a href="#problem" className="hover:text-white transition-colors">The Gap</a>
          <a href="#solution" className="hover:text-white transition-colors">Solutions</a>
          <a href="#process" className="hover:text-white transition-colors">Method</a>
          <a href="#audit" className="btn-secondary py-2 px-6 text-xs">Free Audit</a>
        </div>
      </div>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with subtle motion */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/20 via-brand-dark/80 to-brand-dark z-10" />
        <img 
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=2000" 
          alt="Luxury Real Estate Los Cabos" 
          className="w-full h-full object-cover opacity-40"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="section-padding relative z-20 w-full">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block py-1 px-3 rounded-full border border-white/20 text-[10px] uppercase tracking-[0.3em] mb-6 text-white/60">
              Strategic Real Estate Marketing • Los Cabos
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8 text-gradient">
              Your development <br />
              <span className="italic font-serif font-normal">deserves</span> better <br />
              presentation.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
              High-value projects in Los Cabos often underperform not because of the product, but because of how they are positioned. We bridge the gap between architecture and sales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#audit" className="btn-primary flex items-center justify-center gap-2">
                Request Project Audit <ArrowRight size={18} />
              </a>
              <a href="#solution" className="btn-secondary flex items-center justify-center">
                Explore Our Solutions
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30"
      >
        <span className="text-[10px] uppercase tracking-widest">Scroll to explore</span>
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ChevronDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProblemSection = () => {
  const problems = [
    { title: "Weak Branding", desc: "Generic identities that fail to resonate with premium buyers." },
    { title: "Outdated Sales Tools", desc: "Static brochures and slow websites that kill momentum." },
    { title: "Low-Quality Leads", desc: "High volume, zero conversion. Marketing that misses the target." },
    { title: "Disconnected Strategy", desc: "Branding, ads, and sales teams working in silos." }
  ];

  return (
    <section id="problem" className="bg-brand-gray">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">The Challenge</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Why great developments <br /> fail to sell out fast.
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Most developers focus 99% on the brick and mortar, leaving the marketing as an afterthought. This creates a perception gap that devalues your project before the first showroom visit.
            </p>
            <div className="space-y-4">
              {problems.map((p, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex gap-4 items-start p-4 rounded-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="mt-1 text-brand-gold group-hover:scale-110 transition-transform">
                    <Minus size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{p.title}</h4>
                    <p className="text-white/40 text-sm">{p.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden glass p-2">
              <img 
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000" 
                alt="Modern Architecture" 
                className="w-full h-full object-cover rounded-xl grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 glass p-8 rounded-2xl hidden md:block max-w-[240px]">
              <p className="text-3xl font-bold text-brand-gold mb-2">74%</p>
              <p className="text-xs text-white/60 uppercase tracking-wider leading-relaxed">
                of buyers decide based on digital presentation before visiting a showroom.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const SolutionSection = () => {
  const services = [
    { icon: <Target />, title: "Strategic Branding", desc: "Naming, positioning, and visual identity that commands premium pricing." },
    { icon: <Globe />, title: "High-Performance Web", desc: "Interactive landing pages and websites designed for conversion, not just looks." },
    { icon: <Zap />, title: "Digital Growth", desc: "Precision Meta and Google Ads campaigns targeting high-net-worth individuals." },
    { icon: <Camera />, title: "Visual Production", desc: "Cinematic video and photography that tells the story of the lifestyle, not just the space." },
    { icon: <Layers />, title: "Sales Enablement", desc: "Broker kits, WhatsApp materials, and showroom visuals that close the deal." },
    { icon: <BarChart3 />, title: "Marketing Funnels", desc: "Complete lead-to-sale automation and tracking for real estate developers." }
  ];

  return (
    <section id="solution" className="relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">Our Solutions</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">The Complete Ecosystem.</h2>
          <p className="text-lg text-white/50">We don't just provide services; we build the infrastructure your sales team needs to succeed.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="glass p-10 rounded-3xl group hover:border-brand-gold/50 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-2xl bg-white/5 flex items-center justify-center mb-8 text-brand-gold group-hover:bg-brand-gold group-hover:text-white transition-all duration-500">
                {s.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
              <p className="text-white/40 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OutcomesSection = () => {
  const outcomes = [
    "Clearer market positioning",
    "Stronger first impressions",
    "Premium buyer trust",
    "Higher lead quality",
    "Cohesive sales process",
    "Faster pre-sale sell-outs"
  ];

  return (
    <section className="bg-white text-brand-dark">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=500" alt="Office" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="aspect-square rounded-2xl overflow-hidden mt-8">
                <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=500" alt="House" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              We build outcomes, <br /> not just deliverables.
            </h2>
            <div className="space-y-4">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-brand-dark/10">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span className="text-lg font-medium">{o}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 btn-primary !bg-brand-dark !text-white hover:!bg-brand-gold">
              See How We Do It
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  return (
    <section id="audit" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-brand-dark/90 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
          alt="Data" 
          className="w-full h-full object-cover opacity-20"
          referrerPolicy="no-referrer"
        />
      </div>
      
      <div className="section-padding relative z-20">
        <div className="glass p-12 md:p-20 rounded-[3rem] text-center max-w-5xl mx-auto border-brand-gold/20">
          <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-6 block">Limited Opportunity</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-gradient">
            Get a Strategic <br /> Marketing Audit.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            We will analyze your current development's positioning, digital presence, and sales funnel. No generic advice—just a high-level review of your commercial potential.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <BarChart3 size={24} />
              </div>
              <div>
                <p className="font-bold">Funnel Review</p>
                <p className="text-xs text-white/40">Identify conversion leaks</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Target size={24} />
              </div>
              <div>
                <p className="font-bold">Positioning Audit</p>
                <p className="text-xs text-white/40">Brand vs. Market fit</p>
              </div>
            </div>
            <div className="w-px h-12 bg-white/10 hidden md:block" />
            <div className="flex items-center gap-4 text-left">
              <div className="w-12 h-12 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                <Zap size={24} />
              </div>
              <div>
                <p className="font-bold">Ads Performance</p>
                <p className="text-xs text-white/40">Lead quality analysis</p>
              </div>
            </div>
          </div>
          <button className="mt-16 btn-primary">
            Claim Your Free Audit
          </button>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Analyze", desc: "Deep dive into the project, market, and competition." },
    { num: "02", title: "Position", desc: "Crafting the unique narrative that justifies premium value." },
    { num: "03", title: "Design", desc: "Building the visual and digital ecosystem for the brand." },
    { num: "04", title: "Build", desc: "Launching high-conversion funnels and sales tools." },
    { num: "05", title: "Launch", desc: "Aggressive market entry with precision-targeted ads." },
    { num: "06", title: "Optimize", desc: "Continuous improvement based on real sales data." }
  ];

  return (
    <section id="process" className="bg-brand-gray">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">The Method</span>
            <h2 className="text-4xl md:text-6xl font-bold">A refined process for <br /> predictable results.</h2>
          </div>
          <p className="text-white/40 max-w-xs text-right">We don't guess. We follow a strategic framework designed for real estate conversion.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-y-16 gap-x-12">
          {steps.map((s, i) => (
            <div key={i} className="relative group">
              <span className="text-6xl font-display font-bold text-white/5 absolute -top-10 -left-4 group-hover:text-brand-gold/10 transition-colors duration-500">
                {s.num}
              </span>
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-brand-gold" />
                  {s.title}
                </h3>
                <p className="text-white/40 leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CredibilitySection = () => {
  const projects = [
    { name: "The Wellness Residences", type: "Luxury Residential", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { name: "Azure Bay", type: "Boutique Development", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { name: "Skyline Lofts", type: "Urban Living", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Projects.</h2>
        <p className="text-white/40">We work with developers who value quality and strategic growth.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, i) => (
          <motion.div 
            key={i}
            whileHover={{ scale: 0.98 }}
            className="group cursor-pointer"
          >
            <div className="aspect-[3/4] rounded-3xl overflow-hidden mb-6 relative">
              <img 
                src={p.img} 
                alt={p.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                <button className="w-full py-3 glass rounded-xl text-sm font-bold uppercase tracking-widest">View Case Study</button>
              </div>
            </div>
            <h3 className="text-xl font-bold">{p.name}</h3>
            <p className="text-brand-gold text-sm uppercase tracking-widest mt-1">{p.type}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const FormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    stage: 'pre-launch',
    needs: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your interest. We will contact you shortly.');
  };

  return (
    <section id="contact" className="bg-brand-gray relative overflow-hidden">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Ready to <br /> transform your <br /> sales?</h2>
            <p className="text-lg text-white/50 mb-12">
              Fill out the form to request your strategic audit or schedule a discovery call with our team.
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Email us</p>
                  <p className="text-lg font-bold">hello@motionagency.mx</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">WhatsApp</p>
                  <p className="text-lg font-bold">+52 624 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gold">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">Office</p>
                  <p className="text-lg font-bold">Los Cabos, BCS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2rem] border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Full Name</label>
                  <input 
                    type="text" 
                    required
                    className="input-field" 
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={e => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Email Address</label>
                  <input 
                    type="email" 
                    required
                    className="input-field" 
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={e => setFormData({...formData, email: e.target.value})}
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Phone / WhatsApp</label>
                  <input 
                    type="tel" 
                    required
                    className="input-field" 
                    placeholder="+52 ..."
                    value={formData.phone}
                    onChange={e => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Development Name</label>
                  <input 
                    type="text" 
                    required
                    className="input-field" 
                    placeholder="Azure Bay"
                    value={formData.company}
                    onChange={e => setFormData({...formData, company: e.target.value})}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Project Stage</label>
                <select 
                  className="input-field appearance-none"
                  value={formData.stage}
                  onChange={e => setFormData({...formData, stage: e.target.value})}
                >
                  <option value="pre-launch">Pre-Launch / Planning</option>
                  <option value="launch">Launch / Sales Started</option>
                  <option value="construction">Under Construction</option>
                  <option value="stagnant">Stagnant Sales / Re-branding</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">What do you need help with?</label>
                <textarea 
                  className="input-field min-h-[120px] resize-none" 
                  placeholder="Tell us about your project goals..."
                  value={formData.needs}
                  onChange={e => setFormData({...formData, needs: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary mt-4">
                Request Strategy Session
              </button>
              <p className="text-[10px] text-center text-white/20 uppercase tracking-widest">
                By submitting, you agree to our privacy policy.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: "Do you only work with large developments?", a: "We work with projects of all sizes, from boutique 10-unit developments to large master-planned communities. What matters is the commitment to quality and strategic positioning." },
    { q: "Can you help if we already have an internal marketing team?", a: "Absolutely. We often act as a strategic layer, providing the high-level branding, performance strategy, and creative direction that internal teams can then execute or manage alongside us." },
    { q: "Do you work on branding and performance too?", a: "Yes. We believe branding without performance is a waste of money, and performance without branding is a waste of leads. We integrate both for a cohesive funnel." },
    { q: "Can you support launch and pre-sale campaigns?", a: "This is our specialty. We build the momentum needed for successful 'Friends & Family' phases and official launches to ensure high absorption rates from day one." },
    { q: "Do you only build websites or can you help with the full strategy?", a: "We are a full-service strategic partner. While we build world-class websites, they are just one part of a complete marketing ecosystem that includes strategy, content, and ads." }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Strategic Questions.</h2>
        <div className="space-y-4">
          {faqs.map((f, i) => (
            <div key={i} className="glass rounded-2xl overflow-hidden">
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-white/5 transition-colors"
              >
                <span className="font-bold text-lg">{f.q}</span>
                {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="px-6 pb-6 text-white/50 leading-relaxed"
                  >
                    {f.a}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-brand-dark border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-8">
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1775596559/logo_MOTIONAGENCY-05_gw5nbl.png" 
                alt="Motion Agency Logo" 
                className="h-8 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed">
              A strategic boutique agency in Los Cabos dedicated to elevating real estate developments through high-end branding, cinematic production, and performance marketing.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-gold">Navigation</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">The Gap</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">Method</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-gold">Social</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
              <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Vimeo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Behance</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-10 border-t border-white/5 gap-4">
          <p className="text-[10px] text-white/20 uppercase tracking-widest">© 2026 Motion Agency. All rights reserved.</p>
          <div className="flex gap-8 text-[10px] text-white/20 uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="selection:bg-brand-gold selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <OutcomesSection />
        <LeadMagnet />
        <ProcessSection />
        <CredibilitySection />
        <FormSection />
        <FAQ />
      </main>
      <Footer />
      
      {/* Sticky CTA for Mobile */}
      <motion.div 
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-6 right-6 z-40 md:hidden"
      >
        <a href="#contact" className="w-full btn-primary shadow-2xl flex items-center justify-center gap-2">
          Request Audit <ArrowRight size={18} />
        </a>
      </motion.div>
    </div>
  );
}
