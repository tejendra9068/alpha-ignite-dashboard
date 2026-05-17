import React from 'react';
import { User, Activity, Thermometer, Heart, AlertCircle, Download, FileText, Brain, Clock, Info } from 'lucide-react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

import clsx from 'clsx';


// --- MOCK DATA ---
const pulseData = Array.from({ length: 60 }, (_, i) => ({
    time: i,
    vata: 40 + Math.random() * 20 + Math.sin(i * 0.5) * 10,
    pitta: 50 + Math.random() * 15 + Math.cos(i * 0.3) * 12,
    kapha: 30 + Math.random() * 10 + Math.sin(i * 0.2) * 8,
}));

const doshaData = [
    { name: 'Vata', value: 35, color: '#3b82f6' }, // Blue-500
    { name: 'Pitta', value: 45, color: '#ef4444' }, // Red-500
    { name: 'Kapha', value: 20, color: '#10b981' }, // Emerald-500
];

export const UserDashboard: React.FC = () => {
    // Simulated State for "Live" feel
    // Simulated State for "Live" feel

    return (
        <div className="space-y-6 animate-in fade-in duration-500">
            {/* 1. TOP ROW: Patient Info & Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Patient Info Card */}
                <div className="card-medical p-5 flex items-start gap-4">
                    <div className="bg-slate-100 p-3 rounded-full">
                        <User className="h-6 w-6 text-slate-700" />
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Subject Profile</h3>
                        <div className="mt-1">
                            <span className="text-lg font-bold text-slate-900">#ND-2026-X4</span>
                        </div>
                        <div className="text-xs text-slate-600 mt-1 space-y-0.5">
                            <p>Age: 42 • Male</p>
                            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 font-medium">
                                Fasting Mode
                            </span>
                        </div>
                    </div>
                </div>

                {/* Pulse Vital */}
                <div className="card-medical p-5 flex items-start gap-4">
                    <div className="bg-rose-50 p-3 rounded-full">
                        <Heart className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pulse Analysis</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-3xl font-bold text-slate-900">72</span>
                            <span className="text-sm text-slate-500">BPM</span>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <div className="text-xs text-slate-600 flex justify-between w-full min-w-[120px]">
                                <span>Strength:</span> <span className="font-semibold text-slate-800">Strong</span>
                            </div>
                            <div className="text-xs text-slate-600 flex justify-between w-full">
                                <span>HRV (RR):</span> <span className="font-semibold text-slate-800">45ms</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Temperature */}
                <div className="card-medical p-5 flex items-start gap-4">
                    <div className="bg-amber-50 p-3 rounded-full">
                        <Thermometer className="h-6 w-6 text-amber-600" />
                    </div>
                    <div>
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Tapamana (Temp)</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-3xl font-bold text-slate-900">36.8</span>
                            <span className="text-sm text-slate-500">°C</span>
                        </div>
                        <div className="flex flex-col gap-1 mt-2">
                            <div className="text-xs text-slate-600 flex justify-between w-full min-w-[120px]">
                                <span>Thermal Status:</span> <span className="font-semibold text-emerald-600">Normal</span>
                            </div>
                            <div className="text-xs text-slate-400">
                                Baseline: 36.6 °C
                            </div>
                        </div>
                    </div>
                </div>

                {/* Session Timer & Quality */}
                <div className="card-medical p-5 flex items-start gap-4">
                    <div className="bg-blue-50 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className="flex-1">
                        <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Session Info</h3>
                        <div className="flex items-baseline gap-2 mt-1">
                            <span className="text-3xl font-bold text-slate-900">02:04</span>
                            <span className="text-sm text-slate-500">m:s</span>
                        </div>
                        <div className="mt-2 text-xs">
                            <span className="text-slate-500">Signal Quality:</span>
                            <div className="w-full bg-slate-100 rounded-full h-2 mt-1 overflow-hidden">
                                <div className="bg-emerald-500 h-full rounded-full" style={{ width: '92%' }} />
                            </div>
                            <span className="text-emerald-600 font-medium text-[10px] block mt-0.5 text-right">Excellent (92%)</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 2. MAIN CONTENT: Graphs & Sensor Status */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* LEFT COLUMN: Real-time Graphs (Span 2) */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="card-medical p-6">
                        <div className="flex items-center justify-between mb-6">
                            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <Activity className="h-5 w-5 text-blue-600" />
                                Real-Time Nadi Waveform
                            </h2>
                            <div className="flex gap-2">
                                <span className="px-2 py-1 bg-blue-50 border border-blue-100 text-blue-700 text-xs font-bold rounded flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" /> Vata
                                </span>
                                <span className="px-2 py-1 bg-red-50 border border-red-100 text-red-700 text-xs font-bold rounded flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Pitta
                                </span>
                                <span className="px-2 py-1 bg-emerald-50 border border-emerald-100 text-emerald-700 text-xs font-bold rounded flex items-center gap-1">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Kapha
                                </span>
                            </div>
                        </div>

                        <div className="h-[320px] w-full bg-slate-50/50 rounded-lg border border-slate-100 p-2 relative">
                            {/* Grid Overlay for "Medical Paper" effect */}
                            <div className="absolute inset-0 pointer-events-none opacity-5"
                                style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                            />

                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={pulseData} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
                                    <defs>
                                        <linearGradient id="colorVata" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorPitta" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#ef4444" stopOpacity={0.2} />
                                            <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                    <XAxis dataKey="time" hide />
                                    <YAxis hide domain={['auto', 'auto']} />
                                    <Tooltip
                                        contentStyle={{ borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    />
                                    <Area type="monotone" dataKey="vata" stroke="#3b82f6" strokeWidth={2} fillOpacity={1} fill="url(#colorVata)" name="Vata (Air)" isAnimationActive={false} />
                                    <Area type="monotone" dataKey="pitta" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorPitta)" name="Pitta (Fire)" isAnimationActive={false} />
                                    <Area type="monotone" dataKey="kapha" stroke="#10b981" strokeWidth={2} fill="none" name="Kapha (Water)" isAnimationActive={false} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                    </div>

                    {/* Sensor Status Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {[
                            { name: 'Vata Sensor', status: 'Active', color: 'emerald' },
                            { name: 'Pitta Sensor', status: 'Review', color: 'amber' },
                            { name: 'Kapha Sensor', status: 'Active', color: 'emerald' },
                            { name: 'Skin Temp', status: 'Active', color: 'emerald' }
                        ].map((sensor, idx) => (
                            <div key={idx} className="bg-white p-3 rounded-xl border border-slate-200 flex flex-col justify-between h-24 shadow-sm transition-all duration-300 hover:shadow-md hover:scale-[1.02] cursor-default group">
                                <div className="flex justify-between items-start">
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">{sensor.name}</span>
                                    <div className={clsx("w-2 h-2 rounded-full transition-shadow duration-300 group-hover:shadow-[0_0_8px_rgba(0,0,0,0.2)]", sensor.color === 'emerald' ? 'bg-emerald-500 group-hover:shadow-emerald-200' : 'bg-amber-500 animate-pulse group-hover:shadow-amber-200')} />
                                </div>
                                <div>
                                    <div className={clsx("text-sm font-semibold", sensor.color === 'emerald' ? 'text-emerald-700' : 'text-amber-700')}>
                                        {sensor.status === 'Active' ? 'Signal Good' : 'Check Contact'}
                                    </div>
                                    <div className="text-[10px] text-slate-400 mt-1">ID: SW-{100 + idx}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT COLUMN: Analysis & AI Insights */}
                <div className="space-y-6">
                    {/* ML Analysis Card */}
                    <div className="card-medical p-6 border-blue-100 bg-gradient-to-br from-white to-blue-50/30">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                                <Brain className="h-5 w-5 text-indigo-600" />
                                AI Analysis
                            </h2>
                            <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full">BETA v1.2</span>
                        </div>

                        <div className="space-y-4">
                            <div className="flex items-center justify-between p-3 bg-white rounded-lg border border-blue-100 shadow-sm">
                                <div>
                                    <div className="text-xs text-slate-500 font-medium">Predicted Dominance</div>
                                    <div className="text-lg font-bold text-indigo-900">Pitta-Vata</div>
                                </div>
                                <div className="text-right">
                                    <div className="text-xs text-slate-500 font-medium">Confidence</div>
                                    <div className="text-lg font-bold text-emerald-600">94.2%</div>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <div className="text-xs font-semibold text-slate-600 flex justify-between">
                                    <span>Pitta Contribution</span>
                                    <span>High Heat</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-red-500 rounded-full" style={{ width: '75%' }}></div>
                                </div>

                                <div className="text-xs font-semibold text-slate-600 flex justify-between mt-2">
                                    <span>Stress Markers</span>
                                    <span>Moderate</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-200 rounded-full overflow-hidden">
                                    <div className="h-full bg-amber-500 rounded-full" style={{ width: '45%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Dosha Breakdown */}
                    <div className="card-medical p-6">
                        <h2 className="text-lg font-bold text-slate-800 mb-4">Dosha Distribution</h2>
                        <div className="flex items-center gap-6">
                            <div className="h-[140px] w-[140px] relative">
                                <ResponsiveContainer width="100%" height="100%">
                                    <PieChart>
                                        <Pie
                                            data={doshaData}
                                            innerRadius={50}
                                            outerRadius={65}
                                            paddingAngle={5}
                                            dataKey="value"
                                            stroke="none"
                                        >
                                            {doshaData.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={entry.color} />
                                            ))}
                                        </Pie>
                                    </PieChart>
                                </ResponsiveContainer>
                                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                                    <span className="text-lg font-bold text-slate-800">Pitta</span>
                                    <span className="text-[10px] text-slate-500 uppercase">Primary</span>
                                </div>
                            </div>

                            <div className="flex-1 space-y-3">
                                {doshaData.map(d => (
                                    <div key={d.name} className="flex items-center justify-between text-sm">
                                        <div className="flex items-center gap-2">
                                            <div className="w-3 h-3 rounded-full" style={{ background: d.color }} />
                                            <span className="font-medium text-slate-700">{d.name}</span>
                                        </div>
                                        <span className="font-semibold text-slate-900">{d.value}%</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Interpretation Card */}
                    <div className="card-medical p-6 bg-red-50/50 border-red-100">
                        <div className="flex items-start gap-3">
                            <AlertCircle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                            <div>
                                <h4 className="font-bold text-red-900 text-sm">Risk Analysis: Medium</h4>
                                <p className="text-xs text-red-800 mt-1 leading-relaxed">
                                    Elevated Pitta indicates metabolic hyperactivity. Potential risk of inflammatory conditions if left unmanaged.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* 3. BOTTOM ROW: Recommendations & Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="card-medical p-6">
                    <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                        <FileText className="h-5 w-5 text-teal-600" />
                        Ayurvedic Recommendations
                    </h3>
                    <div className="space-y-4">
                        <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-slate-200 cursor-default group">
                            <div className="bg-white p-2 rounded shadow-sm h-fit group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">🥗</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Dietary Guidance</h4>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    Favor cooling foods like cucumber, coconut, and mint. Avoid spicy, oily, and salty foods.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4 p-3 bg-slate-50 rounded-lg border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-md hover:border-slate-200 cursor-default group">
                            <div className="bg-white p-2 rounded shadow-sm h-fit group-hover:scale-110 transition-transform duration-300">
                                <span className="text-xl">🧘‍♂️</span>
                            </div>
                            <div>
                                <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-700 transition-colors">Lifestyle Adjustments</h4>
                                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                                    Practice cooling breathing exercises (Sheetali Pranayama). Avoid midday sun exposure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card-medical p-6 flex flex-col justify-between">
                    <div>
                        <h3 className="text-lg font-bold text-slate-800 mb-2">Export Diagnostic Report</h3>
                        <p className="text-sm text-slate-500 mb-6">
                            Generate a detailed PDF report including detailed waveform analysis, subject profile, and detailed dosha breakdown.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="btn-primary flex-1 flex items-center justify-center gap-2">
                            <Download className="h-4 w-4" /> Download PDF
                        </button>
                        <button className="btn-secondary flex-1 flex items-center justify-center gap-2">
                            <FileText className="h-4 w-4" /> Export CSV
                        </button>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-100">
                        <p className="text-[10px] text-slate-400 flex items-center gap-1.5">
                            <Info className="h-3 w-3" />
                            Data is anonymized and stored locally according to IEEE Ethics Guidelines.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
