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
              Better presentation. <br />
              Better positioning. <br />
              <span className="italic font-serif font-normal">Better</span> leads.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
              Motion helps developers with branding, sales materials, websites, visual production, paid campaigns, and tracking to create a stronger lead generation system.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#audit" className="btn-primary flex items-center justify-center gap-2">
                Get a Free Development Marketing Audit <ArrowRight size={18} />
              </a>
              <a href="#solution" className="btn-secondary flex items-center justify-center">
                How We Help
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
    { title: "Generic Sales Materials", desc: "Static brochures and outdated tools that kill momentum." },
    { title: "Low-Quality Leads", desc: "High volume, zero conversion. Marketing that misses the target." },
    { title: "Disconnected Campaigns", desc: "Creative work and paid traffic working in silos without tracking." }
  ];

  return (
    <section id="problem" className="bg-brand-gray">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">The Challenge</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Why strong developments <br /> still struggle to generate <br /> quality leads.
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              Most developers focus 99% on the brick and mortar, leaving the funnel as an afterthought. A strong project with a weak funnel will always underperform in a competitive market.
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
  const serviceGroups = [
    {
      title: "Brand & Positioning",
      items: ["Branding", "Messaging", "Project story and value proposition"]
    },
    {
      title: "Sales Materials",
      items: ["Sales presentations", "Mobile sales presentations", "Brochures / PDFs", "Broker kits", "WhatsApp-ready materials"]
    },
    {
      title: "Digital Presence",
      items: ["Landing pages", "Full websites", "SEO structure", "Lead capture funnels"]
    },
    {
      title: "Visual Production",
      items: ["Photography", "Video", "Drone", "Launch content", "Lifestyle visual direction"]
    },
    {
      title: "Performance & Tracking",
      items: ["Meta Ads", "Google Ads", "Retargeting", "Conversion tracking", "Lead attribution", "Funnel optimization"]
    }
  ];

  return (
    <section id="solution" className="relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">How We Help</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">How Motion Agency can help.</h2>
          <p className="text-lg text-white/50">We help developers build the materials, systems, and campaigns needed to present their project more clearly and generate higher-quality leads.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceGroups.map((group, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
              className="glass p-10 rounded-3xl group hover:border-brand-gold/50 transition-all duration-500"
            >
              <h3 className="text-2xl font-bold mb-6 text-brand-gold">{group.title}</h3>
              <ul className="space-y-3">
                {group.items.map((item, idx) => (
                  <li key={idx} className="text-white/60 flex items-center gap-3 text-sm">
                    <div className="w-1 h-1 rounded-full bg-brand-gold/50" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const OutcomesSection = () => {
  const outcomes = [
    "Stronger first impression",
    "More professional perception",
    "Clearer market positioning",
    "Better sales tools for brokers",
    "Improved lead capture",
    "Higher-quality inquiries",
    "Full lead attribution clarity"
  ];

  return (
    <section className="bg-white text-brand-dark overflow-hidden">
      <div className="section-padding relative">
        {/* Subtle background logo for brand reinforcement */}
        <div className="absolute top-10 right-10 opacity-[0.03] pointer-events-none">
          <img 
            src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1775596558/logo_MOTIONAGENCY-03_1_tntlu2.png" 
            alt="Motion Agency Logo Watermark" 
            className="w-64 h-auto"
            referrerPolicy="no-referrer"
          />
        </div>

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
            <div className="mb-8">
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1775596558/logo_MOTIONAGENCY-03_1_tntlu2.png" 
                alt="Motion Agency Black Logo" 
                className="h-6 w-auto mb-6 opacity-80"
                referrerPolicy="no-referrer"
              />
              <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                What this improves <br /> for your project.
              </h2>
            </div>
            <div className="space-y-4">
              {outcomes.map((o, i) => (
                <div key={i} className="flex items-center gap-4 py-3 border-b border-brand-dark/10">
                  <CheckCircle2 className="text-brand-gold" size={20} />
                  <span className="text-lg font-medium">{o}</span>
                </div>
              ))}
            </div>
            <button className="mt-12 btn-primary !bg-brand-dark !text-white hover:!bg-brand-gold">
              See Our Method
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceSection = () => {
  return (
    <section className="bg-brand-gray border-y border-white/5">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">Performance First</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">Built for presentation <br /> and performance.</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              We connect high-end creative work with precision-targeted paid traffic. Our systems ensure every lead is tracked, attributed, and optimized for maximum ROI.
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-2xl font-bold text-white mb-2">100%</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Lead Attribution</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-2">Real-time</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">Funnel Optimization</p>
              </div>
            </div>
          </div>
          <div className="glass p-10 rounded-3xl border-brand-gold/20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Zap size={20} />
                </div>
                <p className="font-medium">Meta & Google Ads Integration</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Target size={20} />
                </div>
                <p className="font-medium">Precision Retargeting</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <BarChart3 size={20} />
                </div>
                <p className="font-medium">Advanced Conversion Tracking</p>
              </div>
            </div>
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
            Request a Free Project <br /> Marketing Audit.
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            We will analyze your current development's positioning and funnel to identify growth opportunities.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
            {[
              "Branding and positioning review",
              "Sales presentation review",
              "Website / landing page review",
              "Lead generation observations",
              "Paid traffic opportunities",
              "Action points tailored to the project"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                {item}
              </div>
            ))}
          </div>

          <button className="btn-primary">
            Claim Your Free Audit
          </button>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const steps = [
    { num: "01", title: "Review", desc: "Deep dive into your current materials and funnel." },
    { num: "02", title: "Position", desc: "Crafting the unique narrative that justifies premium value." },
    { num: "03", title: "Build", desc: "Developing the sales tools and digital infrastructure." },
    { num: "04", title: "Launch", desc: "Market entry with precision-targeted campaigns." },
    { num: "05", title: "Track", desc: "Full attribution setup to monitor every lead." },
    { num: "06", title: "Optimize", desc: "Continuous improvement based on real performance data." }
  ];

  return (
    <section id="process" className="bg-brand-gray">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">The Method</span>
            <h2 className="text-4xl md:text-6xl font-bold">How we improve your <br /> lead generation system.</h2>
          </div>
          <p className="text-white/40 max-w-xs text-right">A strategic framework designed for real estate conversion and tracking.</p>
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
    { name: "The Wellness Residences", type: "Marketing Assets", img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { name: "Azure Bay", type: "Sales Tools", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { name: "Skyline Lofts", type: "Digital Funnel", img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">Selected Work.</h2>
        <p className="text-white/40">Strategic assets built for high-value real estate projects.</p>
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
                <button className="w-full py-3 glass rounded-xl text-sm font-bold uppercase tracking-widest">View Project</button>
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">Let's review <br /> your project.</h2>
            <p className="text-lg text-white/50 mb-12">
              Fill out the form to request your free strategic audit or schedule a discovery call with our team.
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
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">Company or Development Name</label>
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
                Request Your Free Audit
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
    { q: "Do you work only with large developments?", a: "We work with projects of all sizes, from boutique 10-unit developments to large master-planned communities. What matters is the commitment to quality and strategic positioning." },
    { q: "Can you work alongside our internal team?", a: "Absolutely. We often act as a strategic layer, providing the high-level branding, performance strategy, and creative direction that internal teams can then execute or manage alongside us." },
    { q: "Can you help if we already have branding or a website?", a: "Yes. We can audit your current assets and identify where the conversion leaks are. We can either improve what you have or build a more robust system from scratch." },
    { q: "Do you handle both creative and performance marketing?", a: "Yes. We believe branding without performance is a waste of money, and performance without branding is a waste of leads. We integrate both for a cohesive funnel." },
    { q: "Can you support project launches and pre-sale campaigns?", a: "This is our specialty. We build the momentum needed for successful 'Friends & Family' phases and official launches to ensure high absorption rates from day one." }
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
        <PerformanceSection />
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
