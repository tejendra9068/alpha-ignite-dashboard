import React from 'react';
import { motion } from 'framer-motion';
import {
    Users, Mail, Linkedin, GraduationCap, Award,
    Globe, Heart, Code, Cpu, BookOpen, Microscope
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
}

const TEAM_MEMBERS: TeamMember[] = [
    {
        name: 'Dr. Rajesh Kumar',
        role: 'Principal Investigator',
        department: 'Dept. of Biomedical Engineering',
        bio: 'Leading the research vision and overseeing the integration of Ayurvedic principles with modern sensor technology. Over 15 years of experience in biomedical instrumentation.',
        expertise: ['Biomedical Sensors', 'Signal Processing', 'Research Leadership'],
        initials: 'RK',
        color: 'blue',
    },
    {
        name: 'Prof. Ananya Sharma',
        role: 'Co-Investigator (Ayurveda)',
        department: 'Dept. of Ayurvedic Medicine',
        bio: 'Providing expert guidance on Nadi Pariksha methodology and validating AI predictions against traditional diagnostic frameworks.',
        expertise: ['Nadi Pariksha', 'Ayurvedic Diagnostics', 'Clinical Validation'],
        initials: 'AS',
        color: 'emerald',
    },
    {
        name: 'Vikram Patel',
        role: 'Lead Hardware Engineer',
        department: 'Embedded Systems Lab',
        bio: 'Designed the tri-channel sensor array and embedded firmware. Specializes in MEMS sensor integration and low-power IoT devices.',
        expertise: ['MEMS Sensors', 'Embedded Systems', 'PCB Design'],
        initials: 'VP',
        color: 'indigo',
    },
    {
        name: 'Priya Nair',
        role: 'ML Research Engineer',
        department: 'AI & Data Science Lab',
        bio: 'Developed the Poly-SVM classification model and edge AI inference pipeline. Focused on real-time signal analysis and pattern recognition.',
        expertise: ['Machine Learning', 'Edge AI', 'TensorFlow Lite'],
        initials: 'PN',
        color: 'violet',
    },
    {
        name: 'Arjun Deshmukh',
        role: 'Full-Stack Developer',
        department: 'Software Engineering',
        bio: 'Built the diagnostic dashboard, data visualization pipeline, and real-time communication layer between sensors and the UI.',
        expertise: ['React', 'TypeScript', 'Data Visualization'],
        initials: 'AD',
        color: 'amber',
    },
    {
        name: 'Dr. Meera Iyer',
        role: 'Clinical Advisor',
        department: 'Integrative Medicine',
        bio: 'Bridging the gap between traditional Ayurvedic practices and technology-driven diagnostics. Advises on ethical considerations and clinical workflows.',
        expertise: ['Clinical Research', 'Ethics', 'Integrative Medicine'],
        initials: 'MI',
        color: 'rose',
    },
];

const ADVISORS = [
    {
        name: 'Prof. S. Venkataraman',
        affiliation: 'IEEE Senior Member',
        area: 'Biomedical Engineering',
    },
    {
        name: 'Dr. Kavitha Ranganathan',
        affiliation: 'National Institute of Ayurveda',
        area: 'Ayurvedic Pharmacology',
    },
    {
        name: 'Dr. Amit Joshi',
        affiliation: 'IIT Research Fellow',
        area: 'Sensor Networks & IoT',
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
                    A multidisciplinary team of engineers, researchers, and Ayurvedic practitioners
                    working together to bridge ancient diagnostic wisdom with cutting-edge technology.
                </motion.p>
            </section>

            {/* ── TEAM GRID ── */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <div
                                    className={cn(
                                        'w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-lg flex-shrink-0 bg-gradient-to-br shadow-lg',
                                        colors.gradient
                                    )}
                                >
                                    {member.initials}
                                </div>
                                <div className="min-w-0">
                                    <h3 className="font-bold text-slate-900 text-base leading-tight">{member.name}</h3>
                                    <p className={cn('text-xs font-semibold mt-0.5', colors.text)}>{member.role}</p>
                                    <p className="text-[10px] text-slate-400 font-medium mt-0.5 truncate">{member.department}</p>
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
                                <button className="p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                                    <Mail className="h-3.5 w-3.5" />
                                </button>
                                <button className="p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                                    <Linkedin className="h-3.5 w-3.5" />
                                </button>
                                <button className="p-1.5 rounded-md bg-slate-50 text-slate-400 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                                    <Globe className="h-3.5 w-3.5" />
                                </button>
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* ── INTERDISCIPLINARY BREAKDOWN ── */}
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
                            <h2 className="text-2xl font-bold text-white mb-3">Interdisciplinary Approach</h2>
                            <p className="text-sm text-slate-400 leading-relaxed mb-8">
                                Our research combines expertise from multiple domains to ensure
                                both scientific rigor and clinical relevance.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Cpu, label: 'Hardware Engineering', pct: 30 },
                                    { icon: Code, label: 'Software & AI', pct: 25 },
                                    { icon: Heart, label: 'Ayurvedic Medicine', pct: 25 },
                                    { icon: Microscope, label: 'Clinical Research', pct: 20 },
                                ].map((item) => {
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
                            <Award className="h-5 w-5 text-amber-500" />
                            Advisory Board
                        </h3>
                        <p className="text-sm text-slate-500 leading-relaxed">
                            Our advisory board consists of distinguished researchers and practitioners
                            who provide strategic guidance.
                        </p>
                        <div className="space-y-4">
                            {ADVISORS.map((advisor) => (
                                <div
                                    key={advisor.name}
                                    className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-default"
                                >
                                    <div className="w-10 h-10 rounded-lg bg-slate-200 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-100 transition-colors duration-300">
                                        <GraduationCap className="h-5 w-5 text-slate-500 group-hover:text-blue-600 transition-colors" />
                                    </div>
                                    <div>
                                        <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                                            {advisor.name}
                                        </h4>
                                        <p className="text-[11px] text-slate-500 mt-0.5">{advisor.affiliation}</p>
                                        <span className="text-[10px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full mt-1.5 inline-block">
                                            {advisor.area}
                                        </span>
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
                        We welcome researchers, Ayurvedic practitioners, and technologists who share our
                        vision of digitizing traditional diagnostic methods. Reach out to learn more about
                        partnership opportunities.
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
