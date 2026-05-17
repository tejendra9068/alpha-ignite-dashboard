import React from 'react';
import { motion } from 'framer-motion';
import {
    BookOpen, Target, Lightbulb, GraduationCap, Heart, Brain,
    CheckCircle2, Clock, Globe, Microscope, Stethoscope
} from 'lucide-react';

const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
    }),
};

const TIMELINE = [
    {
        phase: 'Phase 1',
        title: 'Research & Literature Review',
        description: 'Comprehensive study of Ayurvedic pulse diagnostic principles and existing sensor technologies.',
        status: 'completed' as const,
    },
    {
        phase: 'Phase 2',
        title: 'Sensor Design & Prototyping',
        description: 'Development of the tri-channel pressure sensor array with integrated thermal sensing.',
        status: 'completed' as const,
    },
    {
        phase: 'Phase 3',
        title: 'Data Collection & ML Training',
        description: 'Collection of 10,000+ annotated pulse samples and training of the Poly-SVM classifier.',
        status: 'completed' as const,
    },
    {
        phase: 'Phase 4',
        title: 'System Integration & Testing',
        description: 'End-to-end integration of hardware, firmware, AI engine, and diagnostic dashboard.',
        status: 'active' as const,
    },
    {
        phase: 'Phase 5',
        title: 'Validation & Publication',
        description: 'Clinical validation studies and IEEE conference paper submission.',
        status: 'upcoming' as const,
    },
];

const OBJECTIVES = [
    {
        icon: Stethoscope,
        title: 'Standardize Nadi Pariksha',
        description: 'Convert subjective pulse assessment into objective, repeatable digital measurements.',
    },
    {
        icon: Brain,
        title: 'AI-Driven Classification',
        description: 'Apply machine learning to automatically classify Dosha dominance patterns from waveform data.',
    },
    {
        icon: Microscope,
        title: 'Research-Grade Data',
        description: 'Produce publishable datasets and benchmarks for the Ayurvedic diagnostic research community.',
    },
    {
        icon: Globe,
        title: 'Accessible Wellness Tool',
        description: 'Build a portable, affordable device that can be deployed in clinics and remote health camps.',
    },
];

export const About: React.FC = () => {
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
                        <BookOpen className="h-3.5 w-3.5" />
                        About the Project
                    </span>
                </motion.div>
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    Bridging Ancient Wisdom with Modern Technology
                </motion.h1>
                <motion.p
                    className="text-base text-slate-500 mt-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    Digital NadiDx is a preventive wellness analytics and practitioner-support platform
                    that digitizes the ancient practice of Nadi Pariksha using precision sensors and
                    artificial intelligence.
                </motion.p>
            </section>

            {/* ── VISION & MISSION ── */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div
                    className="card-medical p-8 border-blue-100 bg-gradient-to-br from-white to-blue-50/30"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={0}
                >
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                        <Lightbulb className="h-6 w-6 text-blue-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Our Vision</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        To make Ayurvedic pulse diagnosis measurable, reproducible, and accessible
                        to practitioners worldwide — transforming a subjective art into an objective
                        science without losing its holistic essence.
                    </p>
                </motion.div>

                <motion.div
                    className="card-medical p-8 border-emerald-100 bg-gradient-to-br from-white to-emerald-50/30"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={fadeUp}
                    custom={1}
                >
                    <div className="bg-emerald-100 w-12 h-12 rounded-xl flex items-center justify-center mb-5">
                        <Target className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h2 className="text-xl font-bold text-slate-900 mb-3">Our Mission</h2>
                    <p className="text-sm text-slate-600 leading-relaxed">
                        To develop a portable, sensor-based diagnostic device that captures pulse
                        waveforms with medical-grade accuracy and uses AI to provide actionable
                        wellness insights grounded in Ayurvedic principles.
                    </p>
                </motion.div>
            </section>

            {/* ── WHAT IS NADI PARIKSHA ── */}
            <section className="card-medical p-0 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-5">
                    <div className="lg:col-span-2 bg-gradient-to-br from-slate-900 to-slate-800 p-8 md:p-10 flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.04] pointer-events-none"
                            style={{
                                backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                            }}
                        />
                        <div className="relative z-10">
                            <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mb-6 backdrop-blur-sm">
                                <Heart className="h-8 w-8 text-rose-400" />
                            </div>
                            <h2 className="text-2xl font-bold text-white mb-3">What is Nadi Pariksha?</h2>
                            <p className="text-sm text-slate-400 leading-relaxed">
                                Nadi Pariksha is one of the most important diagnostic tools in Ayurveda.
                                By palpating the radial pulse at three specific points, a skilled practitioner
                                can assess the balance of the three Doshas — the fundamental bio-energies
                                governing health.
                            </p>
                        </div>
                    </div>

                    <div className="lg:col-span-3 p-8 md:p-10 space-y-5">
                        {[
                            {
                                dosha: 'Vata',
                                element: 'Air + Space',
                                position: 'Index finger position',
                                desc: 'Governs movement, breathing, and nervous system functions. A swift, irregular pulse indicates Vata dominance.',
                                color: 'blue',
                            },
                            {
                                dosha: 'Pitta',
                                element: 'Fire + Water',
                                position: 'Middle finger position',
                                desc: 'Governs metabolism, digestion, and body temperature. A strong, bounding pulse indicates Pitta dominance.',
                                color: 'red',
                            },
                            {
                                dosha: 'Kapha',
                                element: 'Water + Earth',
                                position: 'Ring finger position',
                                desc: 'Governs structure, immunity, and lubrication. A slow, steady pulse indicates Kapha dominance.',
                                color: 'emerald',
                            },
                        ].map((dosha) => (
                            <div
                                key={dosha.dosha}
                                className="flex gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-white hover:shadow-md hover:border-slate-200 transition-all duration-300 group cursor-default"
                            >
                                <div className={`w-3 rounded-full bg-${dosha.color}-500 flex-shrink-0`} />
                                <div>
                                    <div className="flex items-baseline gap-2">
                                        <h4 className="font-bold text-slate-900">{dosha.dosha}</h4>
                                        <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                                            {dosha.element}
                                        </span>
                                    </div>
                                    <p className="text-[11px] font-medium text-slate-500 mt-0.5">{dosha.position}</p>
                                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{dosha.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── OBJECTIVES ── */}
            <section>
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        Research Objectives
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                        The core goals driving our IEEE research project.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {OBJECTIVES.map((obj, i) => {
                        const Icon = obj.icon;
                        return (
                            <motion.div
                                key={obj.title}
                                className="card-medical p-6 flex gap-4"
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: '-40px' }}
                                variants={fadeUp}
                            >
                                <div className="bg-slate-100 p-3 rounded-xl h-fit">
                                    <Icon className="h-5 w-5 text-slate-700" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">{obj.title}</h3>
                                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">{obj.description}</p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </section>

            {/* ── PROJECT TIMELINE ── */}
            <section>
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-900 tracking-tight">
                        Project Timeline
                    </h2>
                    <p className="text-sm text-slate-500 mt-2 max-w-lg mx-auto">
                        From research to publication — our journey so far.
                    </p>
                </div>

                <div className="card-medical p-6 md:p-8">
                    <div className="space-y-0">
                        {TIMELINE.map((item, i) => {
                            const isCompleted = item.status === 'completed';
                            const isActive = item.status === 'active';
                            return (
                                <motion.div
                                    key={item.phase}
                                    className="flex gap-4 md:gap-6"
                                    custom={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeUp}
                                >
                                    {/* Timeline line & dot */}
                                    <div className="flex flex-col items-center">
                                        <div
                                            className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 border-4 border-white z-10 ${
                                                isCompleted
                                                    ? 'bg-emerald-500 text-white'
                                                    : isActive
                                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                                                    : 'bg-slate-100 text-slate-400'
                                            }`}
                                        >
                                            {isCompleted ? (
                                                <CheckCircle2 className="h-4 w-4" />
                                            ) : isActive ? (
                                                <Clock className="h-4 w-4" />
                                            ) : (
                                                <span className="text-xs font-bold">{i + 1}</span>
                                            )}
                                        </div>
                                        {i < TIMELINE.length - 1 && (
                                            <div
                                                className={`w-0.5 flex-1 min-h-[40px] ${
                                                    isCompleted ? 'bg-emerald-200' : 'bg-slate-100'
                                                }`}
                                            />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="pb-8">
                                        <span
                                            className={`text-[10px] font-bold uppercase tracking-widest ${
                                                isCompleted
                                                    ? 'text-emerald-600'
                                                    : isActive
                                                    ? 'text-blue-600'
                                                    : 'text-slate-400'
                                            }`}
                                        >
                                            {item.phase}
                                        </span>
                                        <h4 className="font-bold text-slate-900 mt-1">{item.title}</h4>
                                        <p className="text-xs text-slate-500 mt-1 leading-relaxed max-w-lg">
                                            {item.description}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── SAFE STRATEGIC FRAMING ── */}
            <section className="card-medical p-6 md:p-8 bg-amber-50/50 border-amber-100">
                <div className="flex items-start gap-4">
                    <div className="bg-amber-100 p-3 rounded-xl flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-amber-700" />
                    </div>
                    <div>
                        <h3 className="font-bold text-amber-900 text-lg">Research Disclaimer</h3>
                        <p className="text-sm text-amber-800 mt-2 leading-relaxed">
                            Digital NadiDx is a <strong>preventive wellness analytics and practitioner-support platform</strong>,
                            not a disease diagnosis device, cure system, or replacement for medical professionals.
                            This system is designed for research purposes under IEEE Ethics Guidelines. All data
                            is anonymized and stored locally. Results should be interpreted by qualified Ayurvedic
                            practitioners and are not a substitute for clinical diagnosis.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};
