import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
    Activity, Brain, Cpu, Heart, ArrowRight, Zap,
    Shield, BarChart3, Waves, Thermometer, Users, BookOpen
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const FEATURES = [
    {
        icon: Heart,
        title: 'Pulse Waveform Capture',
        description: 'High-fidelity pulse pressure sensors capture sub-millisecond waveform data from Vata, Pitta, and Kapha Nadi points.',
        color: 'rose',
    },
    {
        icon: Brain,
        title: 'AI-Powered Analysis',
        description: 'Poly-SVM and deep learning models classify Dosha dominance with 94%+ confidence in real-time.',
        color: 'indigo',
    },
    {
        icon: Thermometer,
        title: 'Thermal Mapping',
        description: 'Integrated skin temperature sensors detect thermal imbalances correlated with metabolic activity.',
        color: 'amber',
    },
    {
        icon: BarChart3,
        title: 'Wellness Analytics',
        description: 'Track longitudinal health trends, generate PDF reports, and visualize Dosha distribution over time.',
        color: 'blue',
    },
    {
        icon: Shield,
        title: 'Research-Grade Privacy',
        description: 'All data is anonymized and stored locally. Full compliance with IEEE Ethics Guidelines.',
        color: 'emerald',
    },
    {
        icon: Cpu,
        title: 'Embedded Intelligence',
        description: 'Edge-optimized inference runs directly on the sensor module — no cloud dependency required.',
        color: 'violet',
    },
];

const STATS = [
    { value: '94.2%', label: 'AI Accuracy' },
    { value: '3', label: 'Sensor Channels' },
    { value: '<50ms', label: 'Latency' },
    { value: '72 BPM', label: 'Avg. Detection' },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string }> = {
    rose: { bg: 'bg-rose-50', text: 'text-rose-600', border: 'border-rose-100', iconBg: 'bg-rose-100' },
    indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-100', iconBg: 'bg-indigo-100' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-100', iconBg: 'bg-amber-100' },
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100', iconBg: 'bg-blue-100' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-100', iconBg: 'bg-emerald-100' },
    violet: { bg: 'bg-violet-50', text: 'text-violet-600', border: 'border-violet-100', iconBg: 'bg-violet-100' },
};

export const Home: React.FC = () => {
    return (
        <div className="space-y-16 animate-in fade-in duration-500">
            {/* ── HERO SECTION ── */}
            <section className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white px-6 py-16 md:px-12 md:py-24">
                {/* Decorative grid */}
                <div
                    className="absolute inset-0 opacity-[0.04] pointer-events-none"
                    style={{
                        backgroundImage:
                            'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                    }}
                />
                {/* Glow orbs */}
                <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
                <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-indigo-500/15 rounded-full blur-3xl" />

                <div className="relative z-10 max-w-3xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/10 text-xs font-semibold tracking-wider uppercase backdrop-blur-sm mb-6">
                            <Zap className="h-3.5 w-3.5 text-amber-400" />
                            IEEE Research Project
                        </span>
                    </motion.div>

                    <motion.h1
                        className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.15, duration: 0.7 }}
                    >
                        Sensor-Based{' '}
                        <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Nadi Pariksha
                        </span>{' '}
                        Diagnostic Machine
                    </motion.h1>

                    <motion.p
                        className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                    >
                        Digital NadiDx converts traditional Ayurvedic pulse assessment into measurable,
                        repeatable, and digitally trackable wellness insights — powered by AI and
                        precision sensor technology.
                    </motion.p>

                    <motion.div
                        className="mt-8 flex flex-wrap gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.45, duration: 0.7 }}
                    >
                        <Link
                            to="/dashboard"
                            className="btn-primary inline-flex items-center gap-2 px-6 py-3 text-sm"
                        >
                            Open Dashboard <ArrowRight className="h-4 w-4" />
                        </Link>
                        <Link
                            to="/about"
                            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-white/20 text-sm font-medium text-white hover:bg-white/10 transition-all duration-200 backdrop-blur-sm"
                        >
                            Learn More
                        </Link>
                    </motion.div>
                </div>

                {/* Animated pulse line decoration */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent" />
            </section>

            {/* ── STATS BAR ── */}
            <section className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {STATS.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        className="card-medical p-5 text-center"
                        custom={i}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-40px' }}
                        variants={fadeUp}
                    >
                        <div className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                            {stat.value}
                        </div>
                        <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">
                            {stat.label}
                        </div>
                    </motion.div>
                ))}
            </section>

            {/* ── FEATURES GRID ── */}
            <section>
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        Core Capabilities
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                        A comprehensive sensor-to-insight pipeline built for research-grade Ayurvedic pulse diagnostics.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {FEATURES.map((feature, i) => {
                        const colors = colorMap[feature.color];
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={feature.title}
                                className={`card-medical p-6 ${colors.border}`}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={fadeUp}
                            >
                                <div className={`${colors.iconBg} w-11 h-11 rounded-xl flex items-center justify-center mb-4`}>
                                    <Icon className={`h-5 w-5 ${colors.text}`} />
                                </div>
                                <h3 className="font-bold text-slate-900 text-base">{feature.title}</h3>
                                <p className="text-sm text-slate-600 mt-2 leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── SYSTEM OVERVIEW ── */}
            <section className="card-medical p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                    {/* Left visual */}
                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                                backgroundSize: '24px 24px',
                            }}
                        />
                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                                    <Waves className="h-5 w-5 text-blue-400" />
                                </div>
                                <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">How It Works</span>
                            </div>
                            <h3 className="text-2xl font-bold text-white leading-snug">
                                From Pulse to Prediction in Under 50ms
                            </h3>
                            <p className="text-sm text-slate-400 mt-4 leading-relaxed">
                                Our three-channel sensor array captures pressure waveforms at the radial artery,
                                precisely positioned at the Vata, Pitta, and Kapha Nadi points. Data is
                                processed through edge AI for instant Dosha classification.
                            </p>

                            {/* Mini pipeline */}
                            <div className="mt-8 flex items-center gap-3 flex-wrap">
                                {['Sensor Capture', 'Signal Processing', 'AI Inference', 'Dosha Report'].map((step, i) => (
                                    <React.Fragment key={step}>
                                        <span className="text-[11px] font-mono text-slate-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-md">
                                            {step}
                                        </span>
                                        {i < 3 && <ArrowRight className="h-3.5 w-3.5 text-slate-600" />}
                                    </React.Fragment>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right content */}
                    <div className="p-8 md:p-12 flex flex-col justify-center space-y-6">
                        {[
                            {
                                icon: Activity,
                                title: 'Real-Time Waveform Visualization',
                                desc: 'Live tri-channel pulse waveforms with medical-grade graph rendering and sub-second updates.',
                            },
                            {
                                icon: Brain,
                                title: 'Dosha Classification Engine',
                                desc: 'Poly-SVM model trained on 10,000+ annotated pulse samples for accurate Prakriti identification.',
                            },
                            {
                                icon: Shield,
                                title: 'Privacy-First Architecture',
                                desc: 'Zero cloud dependencies. All computation happens on-device with anonymized local storage.',
                            },
                        ].map((item) => {
                            const Icon = item.icon;
                            return (
                                <div key={item.title} className="flex gap-4 group cursor-default">
                                    <div className="bg-slate-100 p-2.5 rounded-lg h-fit group-hover:bg-blue-50 transition-colors duration-300">
                                        <Icon className="h-5 w-5 text-slate-600 group-hover:text-blue-600 transition-colors duration-300" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">{item.title}</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed">{item.desc}</p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── QUICK NAVIGATION ── */}
            <section className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {[
                    {
                        to: '/sensors',
                        icon: Cpu,
                        title: 'Sensor Technology',
                        desc: 'Explore the hardware behind our precision pulse capture system.',
                        color: 'blue',
                    },
                    {
                        to: '/about',
                        icon: BookOpen,
                        title: 'About the Project',
                        desc: 'Learn about our research goals, methodology, and Ayurvedic foundations.',
                        color: 'indigo',
                    },
                    {
                        to: '/team',
                        icon: Users,
                        title: 'Meet the Team',
                        desc: 'The researchers and engineers building Digital NadiDx.',
                        color: 'emerald',
                    },
                ].map((card) => {
                    const Icon = card.icon;
                    const colors = colorMap[card.color];
                    return (
                        <Link
                            key={card.to}
                            to={card.to}
                            className="card-medical p-6 group relative overflow-hidden"
                        >
                            <div className={`${colors.iconBg} w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                                <Icon className={`h-5 w-5 ${colors.text}`} />
                            </div>
                            <h3 className="font-bold text-slate-900 text-base group-hover:text-blue-700 transition-colors">
                                {card.title}
                            </h3>
                            <p className="text-sm text-slate-500 mt-1.5 leading-relaxed">{card.desc}</p>
                            <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                Explore <ArrowRight className="h-3.5 w-3.5" />
                            </div>
                        </Link>
                    );
                })}
            </section>
        </div>
    );
};
