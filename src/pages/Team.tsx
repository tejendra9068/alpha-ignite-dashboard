import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, Mail, Linkedin, Github,
    Heart, Code, BookOpen, Zap, Star, Target
} from 'lucide-react';
import { cn } from '../lib/utils';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

interface TeamMember {
    name: string;
    role: string;
    department: string;
    bio: string;
    expertise: string[];
    initials: string;
    color: string;
    photo?: string;
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Tejendra Singh',
        role: 'Founder & AI/ML Engineer',
        department: 'Artificial Intelligence & Product Vision',
        bio: 'Pioneering AI infrastructure and leading the complete product vision for Digital NadiDx. Architecting the ML pipeline, overseeing system design, and driving innovation at the intersection of Ayurveda and artificial intelligence.',
        expertise: ['AI/ML', 'System Architecture', 'Visionary Leadership'],
        initials: 'TS',
        color: 'blue',
        photo: '/team/tejendra.jpg',
    },
    {
        name: 'Kunal Singh',
        role: 'President, CTO & Web Developer',
        department: 'Technology Strategy & Cloud Infrastructure',
        bio: 'Architecting scalable web platforms and overseeing the complete technology stack. Leading technical strategy, cloud infrastructure, and full-stack development to ensure a robust and production-ready diagnostic platform.',
        expertise: ['Web Development', 'Technical Strategy', 'Cloud Computing'],
        initials: 'KS',
        color: 'indigo',
        photo: '/team/kunal.jpg',
    },
    {
        name: 'Nitin Sharma',
        role: 'Chief Operating Officer (COO) & Web Developer',
        department: 'Operations & Frontend Engineering',
        bio: 'Optimizing operational workflows and spearheading front-end development across the platform. Ensuring seamless user experience, operational excellence, and high-performance delivery across all touchpoints.',
        expertise: ['Operations Management', 'Web Development', 'User Experience'],
        initials: 'NS',
        color: 'emerald',
        photo: '/team/nitin.jpg',
    },
    {
        name: 'Karishma Singh Jayant',
        role: 'Vice President, Operations Manager, Content Creator & Event Coordinator',
        department: 'Operations, Outreach & Community',
        bio: 'Driving operations, community events, and content strategies to amplify research outreach. Managing event coordination, stakeholder communications, and crafting compelling narratives around the NadiDx mission.',
        expertise: ['Operations', 'Content Strategy', 'Event Management'],
        initials: 'KJ',
        color: 'violet',
        photo: '/team/karishma.jpg',
    },
];

const PROJECT_HIGHLIGHTS = [
    {
        icon: Zap,
        label: 'AI/ML Engineering',
        description: 'Poly-SVM edge inference pipeline',
        pct: 35,
    },
    {
        icon: Code,
        label: 'Web & Cloud Development',
        description: 'React + TypeScript + Firebase',
        pct: 30,
    },
    {
        icon: Target,
        label: 'Operations & Management',
        description: 'Workflow optimization & delivery',
        pct: 20,
    },
    {
        icon: Heart,
        label: 'Community & Outreach',
        description: 'Events, content & partnerships',
        pct: 15,
    },
];

const colorMap: Record<string, { bg: string; text: string; border: string; light: string; gradient: string }> = {
    blue: { bg: 'bg-blue-600', text: 'text-blue-600', border: 'border-blue-200', light: 'bg-blue-50', gradient: 'from-blue-500 to-blue-700' },
    emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', border: 'border-emerald-200', light: 'bg-emerald-50', gradient: 'from-emerald-500 to-emerald-700' },
    indigo: { bg: 'bg-indigo-600', text: 'text-indigo-600', border: 'border-indigo-200', light: 'bg-indigo-50', gradient: 'from-indigo-500 to-indigo-700' },
    violet: { bg: 'bg-violet-600', text: 'text-violet-600', border: 'border-violet-200', light: 'bg-violet-50', gradient: 'from-violet-500 to-violet-700' },
    amber: { bg: 'bg-amber-600', text: 'text-amber-600', border: 'border-amber-200', light: 'bg-amber-50', gradient: 'from-amber-500 to-amber-700' },
    rose: { bg: 'bg-rose-600', text: 'text-rose-600', border: 'border-rose-200', light: 'bg-rose-50', gradient: 'from-rose-500 to-rose-700' },
};

export const Team: React.FC = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            {/* ── PAGE HEADER ── */}
            <section className="text-center max-w-3xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-xs font-semibold text-blue-700 tracking-wider uppercase mb-4">
                        <Users className="h-3.5 w-3.5" />
                        Our Team
                    </span>
                </motion.div>
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    The People Behind Digital NadiDx
                </motion.h1>
                <motion.p
                    className="text-base text-slate-500 mt-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    A passionate team of AI engineers, web developers, and operations leaders
                    working together to digitize ancient Ayurvedic diagnostic wisdom with modern technology.
                </motion.p>
            </section>

            {/* ── TEAM GRID ── */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {TEAM_MEMBERS.map((member, i) => {
                    const colors = colorMap[member.color];
                    return (
                        <motion.div
                            key={member.name}
                            className={cn('card-medical p-6 flex flex-col', colors.border)}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={fadeUp}
                        >
                            {/* Avatar & Basic Info */}
                            <div className="flex items-start gap-4 mb-4">
                                <div className={cn(
                                    'w-16 h-16 rounded-full flex-shrink-0 ring-2 ring-offset-2 shadow-lg overflow-hidden',
                                    member.color === 'blue' ? 'ring-blue-400' :
                                    member.color === 'indigo' ? 'ring-indigo-400' :
                                    member.color === 'emerald' ? 'ring-emerald-400' : 'ring-violet-400'
                                )}>
                                    {member.photo ? (
                                        <img
                                            src={member.photo}
                                            alt={member.name}
                                            className="w-full h-full object-cover object-top"
                                            onError={(e) => {
                                                const target = e.currentTarget;
                                                target.style.display = 'none';
                                                const fallback = target.nextElementSibling as HTMLElement | null;
                                                if (fallback) fallback.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div
                                        className={cn(
                                            'w-full h-full items-center justify-center text-white font-bold text-lg bg-gradient-to-br',
                                            colors.gradient,
                                            member.photo ? 'hidden' : 'flex'
                                        )}
                                    >
                                        {member.initials}
                                    </div>
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-slate-900 text-base leading-tight">{member.name}</h3>
                                    <p className={cn('text-xs font-semibold mt-0.5 leading-snug', colors.text)}>{member.role}</p>
                                    <p className="text-[10px] text-slate-400 font-medium mt-0.5">{member.department}</p>
                                </div>
                            </div>

                            {/* Bio */}
                            <p className="text-xs text-slate-600 leading-relaxed flex-1">{member.bio}</p>

                            {/* Expertise tags */}
                            <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-slate-100">
                                {member.expertise.map((skill) => (
                                    <span
                                        key={skill}
                                        className={cn(
                                            'text-[10px] font-semibold px-2 py-0.5 rounded-full',
                                            colors.light,
                                            colors.text
                                        )}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                            {/* Social links */}
                            <div className="flex items-center gap-2 mt-4">
                                <button className="p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200" aria-label="LinkedIn">
                                    <Linkedin className="h-3.5 w-3.5" />
                                </button>
                                <button className="p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-slate-900 hover:bg-slate-100 transition-colors duration-200" aria-label="GitHub">
                                    <Github className="h-3.5 w-3.5" />
                                </button>
                                <button className="p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 transition-colors duration-200" aria-label="Email">
                                    <Mail className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* ── TEAM CONTRIBUTION BREAKDOWN ── */}
            <section className="card-medical p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 relative overflow-hidden">
                        <div
                            className="absolute inset-0 opacity-[0.04] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                            }}
                        />
                        <div className="relative z-10">
                            <h2 className="text-2xl font-bold text-white mb-3">Team Contribution Areas</h2>
                            <p className="text-sm text-slate-400 leading-relaxed mb-8">
                                Our team combines diverse expertise to build a robust, research-grade
                                diagnostic platform from the ground up.
                            </p>

                            <div className="space-y-4">
                                {PROJECT_HIGHLIGHTS.map((item) => {
                                    const Icon = item.icon;
                                    return (
                                        <div key={item.label} className="space-y-1.5">
                                            <div className="flex items-center justify-between text-xs">
                                                <span className="flex items-center gap-2 text-slate-300 font-medium">
                                                    <Icon className="h-3.5 w-3.5 text-blue-400" />
                                                    {item.label}
                                                </span>
                                                <span className="text-slate-400 font-mono">{item.pct}%</span>
                                            </div>
                                            <p className="text-[10px] text-slate-500 pl-5">{item.description}</p>
                                            <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                                                <motion.div
                                                    className="h-full bg-blue-500 rounded-full"
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${item.pct}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, ease: 'easeOut' }}
                                                />
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <div className="p-8 md:p-10 space-y-6">
                        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                            <Star className="h-5 w-5 text-amber-500 fill-amber-400" />
                            Core Values
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            We are driven by a shared commitment to innovation, inclusivity, and
                            meaningful impact through technology.
                        </p>
                        <div className="space-y-4">
                            {[
                                { title: 'Innovation First', desc: 'Pioneering AI-powered Ayurvedic diagnostics with state-of-the-art ML pipelines and edge inference.', color: 'blue' },
                                { title: 'User-Centric Design', desc: 'Building intuitive, accessible interfaces that make complex diagnostics simple and actionable.', color: 'indigo' },
                                { title: 'Community Impact', desc: 'Expanding healthcare access through open research, community events, and knowledge sharing.', color: 'emerald' },
                                { title: 'Scientific Integrity', desc: 'Upholding IEEE ethics guidelines and rigorous validation standards across all research outputs.', color: 'violet' },
                            ].map((val) => (
                                <div
                                    key={val.title}
                                    className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-default"
                                >
                                    <div className={cn(
                                        'w-2 flex-shrink-0 rounded-full mt-1',
                                        val.color === 'blue' ? 'bg-blue-500' :
                                        val.color === 'indigo' ? 'bg-indigo-500' :
                                        val.color === 'emerald' ? 'bg-emerald-500' : 'bg-violet-500'
                                    )} />
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                            {val.title}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-0.5 leading-relaxed">{val.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ── COLLABORATION CTA ── */}
            <section className="card-medical p-8 text-center bg-gradient-to-br from-blue-50 to-indigo-50/50 border-blue-100">
                <div className="max-w-lg mx-auto">
                    <div className="bg-blue-100 w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <BookOpen className="h-7 w-7 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Interested in Collaboration?</h3>
                    <p className="text-sm text-slate-600 leading-relaxed mb-6">
                        We welcome researchers, developers, and Ayurvedic practitioners who share our
                        vision of making traditional diagnostics digital, accessible, and precise.
                    </p>
                    <button className="btn-primary inline-flex items-center gap-2 px-6 py-3">
                        <Mail className="h-4 w-4" />
                        Contact the Team
                    </button>
                </div>
            </section>
        </div>
    );
};
