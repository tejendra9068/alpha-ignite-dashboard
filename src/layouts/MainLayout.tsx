import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Header } from '../components/Header';

const FOOTER_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/sensors', label: 'Sensors' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/team', label: 'Team' },
];

export const MainLayout: React.FC = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen bg-slate-50 flex flex-col font-sans text-slate-900">
            <Header />

            <main className="flex-1 container mx-auto p-4 md:p-6 lg:p-8 max-w-7xl">
                <Outlet />
            </main>

            <footer className="py-8 border-t border-slate-200 bg-white mt-auto">
                <div className="container mx-auto px-4">
                    {/* Footer Navigation */}
                    <div className="flex flex-wrap justify-center gap-6 mb-5">
                        {FOOTER_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={`text-xs font-medium transition-colors duration-200 ${
                                    location.pathname === link.to
                                        ? 'text-blue-600'
                                        : 'text-slate-400 hover:text-slate-700'
                                }`}
                            >
                                {link.label}
                            </Link>
                        ))}
                    </div>

                    {/* Branding */}
                    <div className="text-center">
                        <p className="text-xs text-slate-400 font-medium">
                            © 2026 IEEE Research - Sensor-Based Nadi Diagnostic Machine | v2.1.0-alpha
                        </p>
                        <p className="text-[10px] text-slate-300 mt-1">
                            Use for research purposes only. Not for clinical diagnosis.
                        </p>
                    </div>
                </div>
            </footer>
        </div>
    );
};
