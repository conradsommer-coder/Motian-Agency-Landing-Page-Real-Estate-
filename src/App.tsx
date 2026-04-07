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
  Building2,
  Languages,
  X,
  Menu
} from 'lucide-react';
import { useTranslation } from 'react-i18next';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'es' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.gap'), href: '#problem' },
    { name: t('nav.solutions'), href: '#solution' },
    { name: t('nav.method'), href: '#process' },
    { name: t('nav.contact'), href: '#contact' },
  ];

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
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          
          <button 
            onClick={toggleLanguage}
            className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-brand-gold hover:text-white transition-colors border border-brand-gold/30 px-3 py-1.5 rounded-full"
          >
            {i18n.language === 'en' ? (
              <>
                <span className="text-sm">🇲🇽</span> ES
              </>
            ) : (
              <>
                <span className="text-sm">🇺🇸</span> EN
              </>
            )}
          </button>

          <a href="#audit" className="btn-secondary !py-2 !px-6 !text-xs group">
            {t('audit.cta')}
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden z-50 text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-brand-dark/98 backdrop-blur-2xl flex flex-col justify-center px-12"
          >
            {/* Background decorative element */}
            <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-10">
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-brand-gold rounded-full blur-[120px]" />
            </div>

            <div className="flex flex-col gap-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.a 
                  key={link.name} 
                  href={link.href} 
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="text-4xl font-bold uppercase tracking-tighter hover:text-brand-gold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-brand-gold/30 text-sm font-mono mr-4">0{i + 1}</span>
                  {link.name}
                </motion.a>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="pt-8 mt-8 border-t border-white/10 flex flex-col gap-8"
              >
                <button 
                  onClick={() => {
                    toggleLanguage();
                    setIsMobileMenuOpen(false);
                  }}
                  className="flex items-center gap-4 text-xl uppercase tracking-widest text-brand-gold font-bold"
                >
                  {i18n.language === 'en' ? (
                    <>
                      <span className="text-2xl">🇲🇽</span> Español
                    </>
                  ) : (
                    <>
                      <span className="text-2xl">🇺🇸</span> English
                    </>
                  )}
                </button>
                
                <a 
                  href="#audit" 
                  className="btn-primary !py-5 !text-lg group"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {t('audit.cta')}
                  <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>

            {/* Footer info in menu */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-12 left-12 right-12 flex justify-between items-end"
            >
              <div className="space-y-1">
                <p className="text-[10px] uppercase tracking-[0.3em] text-white/30">Connect</p>
                <p className="text-xs font-medium">hello@motionagency.mx</p>
              </div>
              <img 
                src="https://res.cloudinary.com/dr78wne7t/image/upload/q_auto/f_auto/v1775596559/logo_MOTIONAGENCY-05_gw5nbl.png" 
                alt="Logo" 
                className="h-4 opacity-20"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const { t } = useTranslation();

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
              {t('hero.badge')}
            </span>
            <h1 className="text-5xl md:text-8xl font-bold leading-[0.9] mb-8 text-gradient">
              {t('hero.title1')} <br />
              {t('hero.title2')} <br />
              <span className="italic font-serif font-normal">{t('hero.title3')}</span> {t('hero.title4')}
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mb-12 leading-relaxed">
              {t('hero.desc')}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <a href="#audit" className="btn-primary group">
                {t('hero.cta1')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#solution" className="btn-secondary group">
                {t('hero.cta2')} <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform opacity-0 group-hover:opacity-100" />
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
  const { t } = useTranslation();
  const problems = [
    { title: t('problem.p1.title'), desc: t('problem.p1.desc') },
    { title: t('problem.p2.title'), desc: t('problem.p2.desc') },
    { title: t('problem.p3.title'), desc: t('problem.p3.desc') },
    { title: t('problem.p4.title'), desc: t('problem.p4.desc') }
  ];

  return (
    <section id="problem" className="bg-brand-gray">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">{t('problem.badge')}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              {t('problem.title')}
            </h2>
            <p className="text-lg text-white/50 mb-8 leading-relaxed">
              {t('problem.desc')}
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
  const { t } = useTranslation();
  const serviceGroups = [
    {
      title: t('solution.g1.title'),
      items: t('solution.g1.items', { returnObjects: true }) as string[]
    },
    {
      title: t('solution.g2.title'),
      items: t('solution.g2.items', { returnObjects: true }) as string[]
    },
    {
      title: t('solution.g3.title'),
      items: t('solution.g3.items', { returnObjects: true }) as string[]
    },
    {
      title: t('solution.g4.title'),
      items: t('solution.g4.items', { returnObjects: true }) as string[]
    },
    {
      title: t('solution.g5.title'),
      items: t('solution.g5.items', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section id="solution" className="relative overflow-hidden">
      <div className="section-padding">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">{t('solution.badge')}</span>
          <h2 className="text-4xl md:text-6xl font-bold mb-6">{t('solution.title')}</h2>
          <p className="text-lg text-white/50">{t('solution.desc')}</p>
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
  const { t } = useTranslation();
  const outcomes = t('outcomes.items', { returnObjects: true }) as string[];

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
                {t('outcomes.title')}
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
            <button className="mt-12 btn-primary !bg-brand-dark !text-white hover:!bg-brand-gold group">
              {t('outcomes.cta')}
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const PerformanceSection = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-brand-gray border-y border-white/5">
      <div className="section-padding">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">{t('performance.badge')}</span>
            <h2 className="text-4xl md:text-6xl font-bold mb-8">{t('performance.title')}</h2>
            <p className="text-lg text-white/50 leading-relaxed mb-8">
              {t('performance.desc')}
            </p>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-2xl font-bold text-white mb-2">100%</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">{t('performance.stat1')}</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white mb-2">Real-time</p>
                <p className="text-xs text-white/40 uppercase tracking-widest">{t('performance.stat2')}</p>
              </div>
            </div>
          </div>
          <div className="glass p-10 rounded-3xl border-brand-gold/20">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Zap size={20} />
                </div>
                <p className="font-medium">{t('performance.item1')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <Target size={20} />
                </div>
                <p className="font-medium">{t('performance.item2')}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold">
                  <BarChart3 size={20} />
                </div>
                <p className="font-medium">{t('performance.item3')}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const LeadMagnet = () => {
  const { t } = useTranslation();
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
          <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-6 block">{t('audit.badge')}</span>
          <h2 className="text-4xl md:text-7xl font-bold mb-8 text-gradient">
            {t('audit.title')}
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">
            {t('audit.desc')}
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 text-left mb-16">
            {(t('audit.items', { returnObjects: true }) as string[]).map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-sm text-white/70">
                <CheckCircle2 className="text-brand-gold shrink-0" size={18} />
                {item}
              </div>
            ))}
          </div>

          <button className="btn-primary group">
            {t('audit.cta')}
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

const ProcessSection = () => {
  const { t } = useTranslation();
  const steps = [
    { num: "01", title: t('process.s1.title'), desc: t('process.s1.desc') },
    { num: "02", title: t('process.s2.title'), desc: t('process.s2.desc') },
    { num: "03", title: t('process.s3.title'), desc: t('process.s3.desc') },
    { num: "04", title: t('process.s4.title'), desc: t('process.s4.desc') },
    { num: "05", title: t('process.s5.title'), desc: t('process.s5.desc') },
    { num: "06", title: t('process.s6.title'), desc: t('process.s6.desc') }
  ];

  return (
    <section id="process" className="bg-brand-gray">
      <div className="section-padding">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <span className="text-brand-gold font-display font-bold text-sm uppercase tracking-widest mb-4 block">{t('process.badge')}</span>
            <h2 className="text-4xl md:text-6xl font-bold">{t('process.title')}</h2>
          </div>
          <p className="text-white/40 max-w-xs text-right">{t('process.desc')}</p>
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
  const { t } = useTranslation();
  const projects = [
    { name: "The Wellness Residences", type: t('credibility.view'), img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800" },
    { name: "Azure Bay", type: t('credibility.view'), img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800" },
    { name: "Skyline Lofts", type: t('credibility.view'), img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" }
  ];

  return (
    <section className="section-padding">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-bold mb-6">{t('credibility.title')}</h2>
        <p className="text-white/40">{t('credibility.desc')}</p>
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
                <button className="w-full py-3 glass rounded-xl text-sm font-bold uppercase tracking-widest">{t('credibility.view')}</button>
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
  const { t } = useTranslation();
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
            <h2 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">{t('contact.title')}</h2>
            <p className="text-lg text-white/50 mb-12">
              {t('contact.desc')}
            </p>
            
            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gold">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t('contact.email')}</p>
                  <p className="text-lg font-bold">hello@motionagency.mx</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gold">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t('contact.whatsapp')}</p>
                  <p className="text-lg font-bold">+52 624 123 4567</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-12 h-12 rounded-full glass flex items-center justify-center text-brand-gold">
                  <Building2 size={20} />
                </div>
                <div>
                  <p className="text-xs text-white/40 uppercase tracking-widest">{t('contact.office')}</p>
                  <p className="text-lg font-bold">Los Cabos, BCS</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 md:p-12 rounded-[2rem] border-white/5">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{t('contact.form.name')}</label>
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
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{t('contact.form.email')}</label>
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
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{t('contact.form.phone')}</label>
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
                  <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{t('contact.form.company')}</label>
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
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{t('contact.form.stage')}</label>
                <select 
                  className="input-field appearance-none"
                  value={formData.stage}
                  onChange={e => setFormData({...formData, stage: e.target.value})}
                >
                  <option value="pre-launch">{t('contact.form.stage_options.pre')}</option>
                  <option value="launch">{t('contact.form.stage_options.launch')}</option>
                  <option value="construction">{t('contact.form.stage_options.const')}</option>
                  <option value="stagnant">{t('contact.form.stage_options.stagnant')}</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-white/40 ml-1">{t('contact.form.needs')}</label>
                <textarea 
                  className="input-field min-h-[120px] resize-none" 
                  placeholder={t('contact.form.needs_placeholder')}
                  value={formData.needs}
                  onChange={e => setFormData({...formData, needs: e.target.value})}
                ></textarea>
              </div>

              <button type="submit" className="w-full btn-primary mt-4 group">
                {t('contact.form.submit')}
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <p className="text-[10px] text-center text-white/20 uppercase tracking-widest">
                {t('contact.form.privacy')}
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const { t } = useTranslation();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq.q1.q'), a: t('faq.q1.a') },
    { q: t('faq.q2.q'), a: t('faq.q2.a') },
    { q: t('faq.q3.q'), a: t('faq.q3.a') },
    { q: t('faq.q4.q'), a: t('faq.q4.a') },
    { q: t('faq.q5.q'), a: t('faq.q5.a') }
  ];

  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">{t('faq.title')}</h2>
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
  const { t } = useTranslation();
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
              {t('footer.desc')}
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-6 uppercase text-xs tracking-widest text-brand-gold">{t('footer.nav')}</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">{t('nav.home')}</a></li>
              <li><a href="#problem" className="hover:text-white transition-colors">{t('nav.gap')}</a></li>
              <li><a href="#solution" className="hover:text-white transition-colors">{t('nav.solutions')}</a></li>
              <li><a href="#process" className="hover:text-white transition-colors">{t('nav.method')}</a></li>
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
  const { t } = useTranslation();
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
        <a href="#contact" className="w-full btn-primary shadow-2xl !py-5">
          {t('audit.cta')} <ArrowRight size={20} />
        </a>
      </motion.div>
    </div>
  );
}
