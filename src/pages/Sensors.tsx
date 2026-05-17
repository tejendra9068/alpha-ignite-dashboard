import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Cpu, Activity, Thermometer, Waves, Radio, Zap, BatteryCharging,
    CircuitBoard, Signal, Gauge, ChevronRight, Info, CheckCircle2
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

const SENSORS = [
    {
        id: 'vata',
        name: 'Vata Pressure Sensor',
        model: 'Nadi-Sensor-A1',
        type: 'Piezoelectric Pressure',
        position: 'Index finger (radial artery)',
        specs: {
            sensitivity: '0.1 mmHg',
            range: '0–300 mmHg',
            frequency: '1 kHz sampling',
            accuracy: '±0.5%',
        },
        description:
            'High-sensitivity piezoelectric pressure transducer designed for detecting the swift, irregular pulse patterns characteristic of Vata dominance. Captures sub-millisecond pressure variations at the index finger position on the radial artery.',
        color: 'blue',
        status: 'Active',
    },
    {
        id: 'pitta',
        name: 'Pitta Pressure Sensor',
        model: 'Nadi-Sensor-B2',
        type: 'Piezoresistive MEMS',
        position: 'Middle finger (radial artery)',
        specs: {
            sensitivity: '0.05 mmHg',
            range: '0–350 mmHg',
            frequency: '1 kHz sampling',
            accuracy: '±0.3%',
        },
        description:
            'MEMS-based piezoresistive sensor optimized for detecting the strong, bounding pulse pattern of Pitta. Features enhanced thermal drift compensation for accurate readings near the skin surface.',
        color: 'red',
        status: 'Active',
    },
    {
        id: 'kapha',
        name: 'Kapha Pressure Sensor',
        model: 'Nadi-Sensor-C3',
        type: 'Capacitive Pressure',
        position: 'Ring finger (radial artery)',
        specs: {
            sensitivity: '0.08 mmHg',
            range: '0–250 mmHg',
            frequency: '1 kHz sampling',
            accuracy: '±0.4%',
        },
        description:
            'Capacitive pressure sensor tuned for the slow, steady pulse characteristic of Kapha dominance. Low-drift design ensures stable long-duration measurements.',
        color: 'emerald',
        status: 'Active',
    },
    {
        id: 'thermal',
        name: 'Skin Temperature Sensor',
        model: 'Nadi-Temp-T1',
        type: 'Infrared Thermopile',
        position: 'Wrist surface (non-contact)',
        specs: {
            sensitivity: '0.01 °C',
            range: '20–45 °C',
            frequency: '10 Hz sampling',
            accuracy: '±0.1 °C',
        },
        description:
            'Non-contact infrared thermopile sensor for continuous skin temperature monitoring. Thermal mapping data is correlated with metabolic activity indicators and Pitta-related imbalances.',
        color: 'amber',
        status: 'Active',
    },
];

const SYSTEM_SPECS = [
    { label: 'Microcontroller', value: 'ARM Cortex-M4F', icon: CircuitBoard },
    { label: 'Connectivity', value: 'BLE 5.0 / ZigBee', icon: Radio },
    { label: 'Battery Life', value: '8+ Hours', icon: BatteryCharging },
    { label: 'Data Rate', value: '1 kHz × 3 channels', icon: Signal },
    { label: 'Processing', value: 'Edge AI (TFLite)', icon: Cpu },
    { label: 'Latency', value: '<50ms end-to-end', icon: Zap },
];

const colorMap: Record<string, { bg: string; text: string; border: string; iconBg: string; dot: string; ring: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200', iconBg: 'bg-blue-100', dot: 'bg-blue-500', ring: 'ring-blue-200' },
    red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200', iconBg: 'bg-red-100', dot: 'bg-red-500', ring: 'ring-red-200' },
    emerald: { bg: 'bg-emerald-50', text: 'text-emerald-600', border: 'border-emerald-200', iconBg: 'bg-emerald-100', dot: 'bg-emerald-500', ring: 'ring-emerald-200' },
    amber: { bg: 'bg-amber-50', text: 'text-amber-600', border: 'border-amber-200', iconBg: 'bg-amber-100', dot: 'bg-amber-500', ring: 'ring-amber-200' },
};

export const Sensors: React.FC = () => {
    const [activeSensor, setActiveSensor] = useState<string>('vata');
    const selectedSensor = SENSORS.find((s) => s.id === activeSensor)!;
    const colors = colorMap[selectedSensor.color];

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
                        <Cpu className="h-3.5 w-3.5" />
                        Sensor Technology
                    </span>
                </motion.div>
                <motion.h1
                    className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                >
                    Precision Sensor Array
                </motion.h1>
                <motion.p
                    className="text-base text-slate-500 mt-4 leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                >
                    A tri-channel pressure sensor array with integrated thermal sensing — designed
                    for capturing Ayurvedic pulse diagnostics with medical-grade fidelity.
                </motion.p>
            </section>

            {/* ── SYSTEM SPECIFICATIONS ── */}
            <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {SYSTEM_SPECS.map((spec, i) => {
                    const Icon = spec.icon;
                    return (
                        <motion.div
                            key={spec.label}
                            className="card-medical p-4 text-center"
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-40px' }}
                            variants={fadeUp}
                        >
                            <div className="bg-slate-100 w-10 h-10 rounded-lg flex items-center justify-center mx-auto mb-3">
                                <Icon className="h-5 w-5 text-slate-700" />
                            </div>
                            <div className="text-sm font-bold text-slate-900">{spec.value}</div>
                            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-0.5">
                                {spec.label}
                            </div>
                        </motion.div>
                    );
                })}
            </section>

            {/* ── SENSOR DETAIL EXPLORER ── */}
            <section className="grid grid-cols-1 lg:grid-cols-12 gap-6">
                {/* Sensor list (left) */}
                <div className="lg:col-span-4 space-y-3">
                    <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 px-1">
                        Sensor Modules
                    </h3>
                    {SENSORS.map((sensor) => {
                        const sColors = colorMap[sensor.color];
                        const isActive = sensor.id === activeSensor;
                        return (
                            <button
                                key={sensor.id}
                                onClick={() => setActiveSensor(sensor.id)}
                                className={cn(
                                    'w-full text-left p-4 rounded-xl border transition-all duration-300 flex items-center gap-4 group',
                                    isActive
                                        ? `bg-white shadow-lg ${sColors.border} ring-2 ${sColors.ring}`
                                        : 'bg-white border-slate-200 hover:border-slate-300 hover:shadow-md'
                                )}
                            >
                                <div
                                    className={cn(
                                        'w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300',
                                        isActive ? sColors.iconBg : 'bg-slate-50 group-hover:bg-slate-100'
                                    )}
                                >
                                    {sensor.type.includes('Therm') ? (
                                        <Thermometer className={cn('h-5 w-5', isActive ? sColors.text : 'text-slate-400 group-hover:text-slate-600')} />
                                    ) : (
                                        <Activity className={cn('h-5 w-5', isActive ? sColors.text : 'text-slate-400 group-hover:text-slate-600')} />
                                    )}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-sm font-bold text-slate-900 truncate">{sensor.name}</div>
                                    <div className="text-[10px] font-mono text-slate-400">{sensor.model}</div>
                                </div>
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <div className={cn('w-2 h-2 rounded-full', sColors.dot)} />
                                    <ChevronRight className={cn('h-4 w-4 transition-colors', isActive ? sColors.text : 'text-slate-300')} />
                                </div>
                            </button>
                        );
                    })}
                </div>

                {/* Sensor detail (right) */}
                <div className="lg:col-span-8">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeSensor}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.4 }}
                            className="space-y-6"
                        >
                            {/* Detail card */}
                            <div className={`card-medical p-6 md:p-8 ${colors.border}`}>
                                <div className="flex items-start justify-between mb-6">
                                    <div>
                                        <h2 className="text-xl font-bold text-slate-900">{selectedSensor.name}</h2>
                                        <p className="text-xs font-mono text-slate-400 mt-1">
                                            Model: {selectedSensor.model} • Type: {selectedSensor.type}
                                        </p>
                                    </div>
                                    <span className={cn('px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider', colors.bg, colors.text)}>
                                        {selectedSensor.status}
                                    </span>
                                </div>

                                <p className="text-sm text-slate-600 leading-relaxed mb-6">
                                    {selectedSensor.description}
                                </p>

                                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                                    <div className="flex items-center gap-2 mb-3">
                                        <Gauge className={cn('h-4 w-4', colors.text)} />
                                        <h4 className="text-xs font-bold text-slate-600 uppercase tracking-wider">
                                            Placement
                                        </h4>
                                    </div>
                                    <p className="text-sm font-medium text-slate-800">{selectedSensor.position}</p>
                                </div>

                                {/* Specifications grid */}
                                <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                                    Technical Specifications
                                </h4>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {Object.entries(selectedSensor.specs).map(([key, value]) => (
                                        <div
                                            key={key}
                                            className="bg-white p-4 rounded-xl border border-slate-200 text-center hover:shadow-md hover:border-slate-300 transition-all duration-300"
                                        >
                                            <div className="text-lg font-bold text-slate-900">{value}</div>
                                            <div className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider mt-1 capitalize">
                                                {key.replace('_', ' ')}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Live status simulation */}
                            <div className="card-medical p-6">
                                <h4 className="text-sm font-bold text-slate-800 flex items-center gap-2 mb-4">
                                    <Waves className={cn('h-4 w-4', colors.text)} />
                                    Signal Status
                                </h4>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                    {[
                                        { label: 'Signal Quality', value: '92%', bar: 92 },
                                        { label: 'Noise Floor', value: '0.02μV', bar: 8 },
                                        { label: 'Contact Impedance', value: '1.2kΩ', bar: 65 },
                                    ].map((metric) => (
                                        <div key={metric.label} className="space-y-2">
                                            <div className="flex justify-between text-xs">
                                                <span className="font-medium text-slate-600">{metric.label}</span>
                                                <span className="font-bold text-slate-900">{metric.value}</span>
                                            </div>
                                            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                                                <motion.div
                                                    className={cn('h-full rounded-full', colors.dot)}
                                                    initial={{ width: 0 }}
                                                    animate={{ width: `${metric.bar}%` }}
                                                    transition={{ duration: 0.8, ease: 'easeOut' }}
                                                />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </section>

            {/* ── DATA PIPELINE ── */}
            <section className="card-medical p-6 md:p-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white border-slate-700">
                <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                    <CircuitBoard className="h-5 w-5 text-blue-400" />
                    Sensor Data Pipeline
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    {[
                        { step: '01', title: 'Analog Capture', desc: 'Pressure transducer converts pulse to voltage' },
                        { step: '02', title: 'ADC Conversion', desc: '16-bit ADC at 1kHz per channel' },
                        { step: '03', title: 'Signal Filtering', desc: 'Bandpass + notch filter for clean waveform' },
                        { step: '04', title: 'Feature Extraction', desc: 'Peak detection, HRV, amplitude metrics' },
                        { step: '05', title: 'AI Classification', desc: 'Poly-SVM Dosha dominance prediction' },
                    ].map((item, i) => (
                        <div
                            key={item.step}
                            className="relative p-4 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm hover:bg-white/10 transition-all duration-300"
                        >
                            <span className="text-[10px] font-mono text-blue-400 mb-2 block">{item.step}</span>
                            <h4 className="text-sm font-bold text-white">{item.title}</h4>
                            <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">{item.desc}</p>
                            {i < 4 && (
                                <ChevronRight className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-600 z-10" />
                            )}
                        </div>
                    ))}
                </div>
            </section>

            {/* ── QUALITY ASSURANCE ── */}
            <section className="card-medical p-6 md:p-8 bg-emerald-50/50 border-emerald-100">
                <div className="flex items-start gap-4">
                    <div className="bg-emerald-100 p-3 rounded-xl flex-shrink-0">
                        <CheckCircle2 className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div>
                        <h3 className="font-bold text-emerald-900 text-lg">Quality & Calibration Standards</h3>
                        <p className="text-sm text-emerald-800 mt-2 leading-relaxed">
                            All sensor modules undergo auto-calibration before each session. Signal offset baselines
                            are calculated to ±0.00μV tolerance. The system adheres to IEEE standards for biomedical
                            sensor accuracy and data integrity.
                        </p>
                        <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 font-medium">
                            <Info className="h-3.5 w-3.5" />
                            Last calibration validated within research tolerance thresholds.
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
