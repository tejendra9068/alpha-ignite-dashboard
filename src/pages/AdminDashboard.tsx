import React, { useState } from 'react';
import { Settings, CheckCircle2, RefreshCw, Power, ArrowRight, ArrowLeft, Shield, Cpu, Activity, Database, Lock, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import clsx from 'clsx';

// --- AUTH MOCK ---
const AdminLogin: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
    const [pin, setPin] = useState('');
    const [error, setError] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (pin === '1234') { // Mock PIN
            onLogin();
        } else {
            setError(true);
            setPin('');
        }
    };

    return (
        <div className="min-h-[60vh] flex items-center justify-center">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200 w-full max-w-md text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Shield className="h-8 w-8 text-slate-700" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Admin Authentication</h2>
                <p className="text-sm text-slate-500 mt-2 mb-8">Enter secure PIN to access sensor configuration.</p>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="password"
                            maxLength={4}
                            value={pin}
                            onChange={(e) => { setPin(e.target.value); setError(false); }}
                            className="w-full text-center text-3xl tracking-[1em] font-mono py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                            placeholder="••••"
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm font-medium animate-pulse">Invalid PIN. Try again.</p>}
                    <button type="submit" className="w-full btn-primary py-3">
                        Unlock System
                    </button>
                    <p className="text-xs text-slate-400 mt-4">Default PIN: 1234</p>
                </form>
            </div>
        </div>
    );
};

// --- WIZARD STEPS ---
const STEPS = [
    { id: 1, title: 'Power On', desc: 'Turn on all sensor units' },
    { id: 2, title: 'Discovery', desc: 'Scanning for devices...' },
    { id: 3, title: 'Identification', desc: 'Identify sensor types' },
    { id: 4, title: 'Assignment', desc: 'Assign to locations' },
    { id: 5, title: 'Complete', desc: 'Setup finished' },
];

export const AdminDashboard: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    // Wizard State
    const [currentStep, setCurrentStep] = useState(1);
    const [isScanning, setIsScanning] = useState(false);

    // Tools State
    const [calibrating, setCalibrating] = useState(false);
    const [mlEnabled, setMlEnabled] = useState(true);

    if (!isAuthenticated) {
        return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
    }

    const handleNext = () => {
        if (currentStep < STEPS.length) {
            if (currentStep === 2) {
                setIsScanning(true);
                setTimeout(() => {
                    setIsScanning(false);
                    setCurrentStep(p => p + 1);
                }, 2000);
            } else {
                setCurrentStep(p => p + 1);
            }
        }
    };

    const handleBack = () => {
        if (currentStep > 1) setCurrentStep(p => p - 1);
    };

    const startCalibration = () => {
        setCalibrating(true);
        setTimeout(() => setCalibrating(false), 3000);
    };

    return (
        <div className="max-w-6xl mx-auto space-y-8 animate-in fade-in duration-500">
            {/* Header Section */}
            <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div>
                    <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-3">
                        <Settings className="h-6 w-6 text-slate-400" />
                        System Configuration
                    </h2>
                    <p className="text-slate-500 mt-1">Manage sensors, ML models, and system logs.</p>
                </div>
                <div className="flex gap-3">
                    <button className="btn-secondary flex items-center gap-2" onClick={() => setIsAuthenticated(false)}>
                        <Lock className="h-4 w-4" /> Lock Console
                    </button>
                    <button className="btn-primary">
                        Save Configuration
                    </button>
                </div>
            </div>

            {/* Main Layout Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                {/* LEFT COLUMN: Setup Wizard (Span 8) */}
                <div className="lg:col-span-8 space-y-6">
                    {/* Wizard Card */}
                    <div className="card-medical p-6">
                        <div className="flex justify-between mb-8 relative">
                            {/* Connector Line */}
                            <div className="absolute top-4 left-0 w-full h-0.5 bg-slate-100 -z-10" />

                            {STEPS.map((step) => {
                                const isActive = step.id === currentStep;
                                const isCompleted = step.id < currentStep;

                                return (
                                    <div key={step.id} className="flex flex-col items-center group cursor-default">
                                        <div className={cn(
                                            "w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-300 relative z-10 border-4 border-white",
                                            isActive ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-110" :
                                                isCompleted ? "bg-emerald-500 text-white" : "bg-slate-100 text-slate-400"
                                        )}>
                                            {isCompleted ? <CheckCircle2 className="h-4 w-4" /> : step.id}
                                        </div>
                                        <span className={cn(
                                            "text-xs font-medium mt-2 transition-colors",
                                            isActive ? "text-blue-700" : "text-slate-400"
                                        )}>{step.title}</span>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Wizard Content Area */}
                        <div className="min-h-[300px] flex flex-col items-center justify-center text-center p-8 bg-slate-50/50 rounded-xl border-2 border-dashed border-slate-200">
                            <AnimatePresence mode="wait">
                                {currentStep === 1 && (
                                    <motion.div
                                        key="step1"
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        className="space-y-6"
                                    >
                                        <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto shadow-inner">
                                            <Power className="h-10 w-10 text-blue-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">Step 1: Power On Sensors</h3>
                                            <p className="text-slate-600 max-w-sm mx-auto mt-2">
                                                Ensure all 3 sensor units (Vata, Pitta, Kapha) are charged and switched ON.
                                            </p>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep === 2 && (
                                    <motion.div
                                        key="step2"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="space-y-6"
                                    >
                                        <div className="w-20 h-20 relative mx-auto">
                                            <div className={cn("absolute inset-0 rounded-full border-4 border-blue-500 border-t-transparent", isScanning && "animate-spin")} />
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <RefreshCw className="h-8 w-8 text-blue-500" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900">
                                                {isScanning ? "Scanning Environment..." : "Devices Found"}
                                            </h3>
                                            <p className="text-slate-600 mt-2">Searching for bluetooth low energy (BLE) signals...</p>
                                        </div>
                                    </motion.div>
                                )}

                                {currentStep >= 3 && (
                                    <motion.div
                                        key="step3plus"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="w-full max-w-lg"
                                    >
                                        <div className="text-left w-full bg-white p-6 rounded-xl shadow-sm border border-slate-200">
                                            <h4 className="font-bold text-slate-900 mb-4 flex justify-between items-center">
                                                Detected Devices
                                                <span className="text-xs font-normal text-emerald-600 bg-emerald-50 px-2 py-1 rounded-full">3 Active</span>
                                            </h4>
                                            <div className="space-y-3">
                                                {[
                                                    { name: 'Nadi-Sensor-A1', type: 'Pressure', signal: 'Strong' },
                                                    { name: 'Nadi-Sensor-B2', type: 'Pressure', signal: 'Good' },
                                                    { name: 'Nadi-Temp-T1', type: 'Thermal', signal: 'Excellent' }
                                                ].map((device, i) => (
                                                    <div key={i} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg border border-slate-100 transition-all duration-200 hover:border-blue-200 hover:bg-blue-50/50 hover:shadow-sm group">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-2.5 h-2.5 bg-emerald-500 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.4)] group-hover:scale-125 transition-transform duration-300" />
                                                            <div>
                                                                <div className="text-sm font-bold text-slate-700 group-hover:text-blue-700 transition-colors">{device.name}</div>
                                                                <div className="text-[10px] text-slate-500 font-mono">{device.type} • ZigBee</div>
                                                            </div>
                                                        </div>
                                                        <button className="text-xs font-semibold text-blue-600 hover:bg-blue-100 px-3 py-1.5 rounded-md transition-colors opacity-80 group-hover:opacity-100">
                                                            Identify
                                                        </button>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>

                        {/* Actions */}
                        <div className="flex justify-between mt-8 pt-6 border-t border-slate-100">
                            <button
                                onClick={handleBack}
                                disabled={currentStep === 1}
                                className="px-6 py-2 border border-slate-200 rounded-lg text-slate-600 hover:bg-slate-50 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium transition-colors"
                            >
                                <ArrowLeft className="h-4 w-4" /> Back
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentStep === STEPS.length}
                                className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium shadow-sm hover:shadow transition-all"
                            >
                                {currentStep === STEPS.length ? "Finish Setup" : "Next Step"} <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>

                    {/* Admin Logs */}
                    <div className="card-medical p-6">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="font-bold text-slate-900 flex items-center gap-2">
                                <Database className="h-5 w-5 text-slate-500" />
                                System Audit Logs
                            </h3>
                            <div className="relative">
                                <Search className="h-4 w-4 absolute left-3 top-2.5 text-slate-400" />
                                <input type="text" placeholder="Search logs..." className="pl-9 pr-4 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100 w-48" />
                            </div>
                        </div>
                        <div className="overflow-x-auto">
                            <table className="w-full text-sm text-left">
                                <thead className="bg-slate-50 text-slate-500 font-medium">
                                    <tr>
                                        <th className="px-4 py-3 rounded-l-lg">Timestamp</th>
                                        <th className="px-4 py-3">Event</th>
                                        <th className="px-4 py-3">User</th>
                                        <th className="px-4 py-3 rounded-r-lg">Status</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {[
                                        { time: '10:42:05', event: 'Sensor Calibration', user: 'Admin', status: 'Success' },
                                        { time: '10:15:22', event: 'System Boot', user: 'System', status: 'Success' },
                                        { time: '09:58:10', event: 'Connection Lost (Pitta)', user: 'System', status: 'Warning' },
                                    ].map((log, i) => (
                                        <tr key={i} className="hover:bg-blue-50/50 transition-colors duration-150 cursor-default group">
                                            <td className="px-4 py-3 font-mono text-slate-500 text-xs group-hover:text-slate-700 transition-colors">{log.time}</td>
                                            <td className="px-4 py-3 text-slate-700 font-medium group-hover:text-blue-700 transition-colors">{log.event}</td>
                                            <td className="px-4 py-3 text-slate-500">{log.user}</td>
                                            <td className="px-4 py-3">
                                                <span className={clsx(
                                                    "px-2 py-0.5 rounded text-[10px] font-bold transition-transform duration-200 group-hover:scale-105 inline-block",
                                                    log.status === 'Success' ? "bg-emerald-50 text-emerald-700" : "bg-amber-50 text-amber-700"
                                                )}>{log.status}</span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                {/* RIGHT COLUMN: Tools & Settings (Span 4) */}
                <div className="lg:col-span-4 space-y-6">
                    {/* ML Management */}
                    <div className="card-medical p-6 bg-slate-900 text-white border-slate-800">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-bold flex items-center gap-2">
                                <Cpu className="h-5 w-5 text-blue-400" />
                                AI Model Config
                            </h3>
                            <div className="flex items-center gap-2">
                                <div className={cn("w-2 h-2 rounded-full animate-pulse", mlEnabled ? "bg-emerald-400" : "bg-red-400")} />
                                <span className="text-xs font-mono text-slate-400">{mlEnabled ? 'ONLINE' : 'OFFLINE'}</span>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-300">Enable Prediction</span>
                                <button
                                    onClick={() => setMlEnabled(!mlEnabled)}
                                    className={cn(
                                        "w-12 h-6 rounded-full transition-colors relative",
                                        mlEnabled ? "bg-blue-600" : "bg-slate-700"
                                    )}
                                >
                                    <div className={cn(
                                        "absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform",
                                        mlEnabled && "translate-x-6"
                                    )} />
                                </button>
                            </div>

                            <div className="space-y-2">
                                <div className="flex justify-between text-xs text-slate-400">
                                    <span>Confidence Threshold</span>
                                    <span>85%</span>
                                </div>
                                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                                    <div className="h-full bg-blue-500 w-[85%]" />
                                </div>
                            </div>

                            <div className="p-3 bg-slate-800 rounded-lg border border-slate-700">
                                <div className="text-xs text-slate-400 mb-1">Active Model Version</div>
                                <div className="font-mono text-sm text-blue-300">v2.4.1 (Poly-SVM)</div>
                            </div>
                        </div>
                    </div>

                    {/* Calibration */}
                    <div className="card-medical p-6">
                        <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                            <Activity className="h-5 w-5 text-slate-500" /> Sensor Calibration
                        </h3>
                        <div className="space-y-4">
                            <div className="p-4 bg-slate-50 rounded-lg text-center border border-slate-100">
                                <div className="text-3xl font-mono text-slate-900 mb-1 tracking-wider">
                                    {calibrating ? "..." : "0.00μV"}
                                </div>
                                <div className="text-[10px] text-slate-500 uppercase tracking-wide font-semibold">Signal Offset Baseline</div>
                            </div>
                            <button
                                onClick={startCalibration}
                                disabled={calibrating}
                                className="w-full btn-secondary text-sm"
                            >
                                {calibrating ? "Calibrating..." : "Run Auto-Calibration"}
                            </button>
                        </div>
                    </div>

                    {/* Device Status */}
                    <div className="card-medical p-6">
                        <h3 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider text-slate-500">System Health</h3>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-green-100 text-green-700 rounded-md">
                                        <Power className="h-4 w-4" />
                                    </div>
                                    <div className="text-sm font-medium text-slate-700">Battery Units</div>
                                </div>
                                <span className="text-sm font-bold text-slate-900">98%</span>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div className="p-1.5 bg-blue-100 text-blue-700 rounded-md">
                                        <Cpu className="h-4 w-4" />
                                    </div>
                                    <div className="text-sm font-medium text-slate-700">Firmware</div>
                                </div>
                                <span className="text-xs font-mono bg-slate-100 px-2 py-1 rounded text-slate-600">v1.2.0</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};
