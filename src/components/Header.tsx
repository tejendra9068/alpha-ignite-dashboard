import React, { useState, useEffect } from 'react';
import { Activity, Battery, Wifi, Settings, Menu, X } from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { cn } from '../lib/utils';

const NAV_LINKS = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/sensors', label: 'Sensors' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/team', label: 'Team' },
];

export const Header: React.FC = () => {
    const [time, setTime] = useState(new Date());
    const location = useLocation();
    const navigate = useNavigate();
    const [secretConfig, setSecretConfig] = useState({ count: 0, lastClick: 0 });
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    const isAdmin = location.pathname.includes('/admin');

    const handleSecretAccess = () => {
        const now = Date.now();
        if (now - secretConfig.lastClick < 500) {
            const newCount = secretConfig.count + 1;
            if (newCount >= 5) {
                navigate('/admin');
                setSecretConfig({ count: 0, lastClick: 0 });
            } else {
                setSecretConfig({ count: newCount, lastClick: now });
            }
        } else {
            setSecretConfig({ count: 1, lastClick: now });
        }
    };

    const isActiveLink = (to: string) => {
        if (to === '/') return location.pathname === '/';
        return location.pathname.startsWith(to);
    };

    return (
        <header className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm backdrop-blur-md bg-white/95">
            <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                {/* Logo & Title */}
                <div className="flex items-center gap-3">
                    <img 
                        src="/logo.jpg" 
                        alt="Nadi Pariksha Logo" 
                        className="w-10 h-10 rounded-lg object-contain shadow-sm bg-slate-900 cursor-pointer active:scale-95 transition-all select-none hover:shadow-md border border-slate-800"
                        onClick={handleSecretAccess}
                        title="Click 5 times for Admin access"
                    />
                    <div>
                        <h1 className="font-bold text-slate-800 leading-tight tracking-tight text-base sm:text-lg">Nadi Pariksha</h1>
                        <p className="text-[10px] uppercase tracking-wider font-semibold text-slate-500">IEEE Diagnostic System</p>
                    </div>
                </div>

                {/* Center Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-1">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.to}
                            to={link.to}
                            className={cn(
                                'px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200',
                                isActiveLink(link.to)
                                    ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                            )}
                        >
                            {link.label}
                        </Link>
                    ))}
                </nav>

                {/* Right Actions */}
                <div className="flex items-center gap-4 sm:gap-6">
                    {/* Status Indicators */}
                    <div className="hidden lg:flex items-center gap-4">
                        <div className="flex bg-slate-50 px-2.5 py-1 rounded-md items-center gap-2 border border-slate-200 shadow-2xs">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                            </span>
                            <span className="text-[11px] font-medium text-slate-600">Device Connected</span>
                        </div>
                        <div className="flex bg-slate-50 px-2.5 py-1 rounded-md items-center gap-2 border border-slate-200 shadow-2xs">
                            <Wifi className="h-3.5 w-3.5 text-slate-500" />
                            <span className="text-[11px] font-medium text-slate-600">Strong</span>
                        </div>
                        <div className="flex bg-slate-50 px-2.5 py-1 rounded-md items-center gap-2 border border-slate-200 shadow-2xs">
                            <Battery className="h-3.5 w-3.5 text-slate-500" />
                            <span className="text-[11px] font-medium text-slate-600">85%</span>
                        </div>
                    </div>

                    {/* Divider for status and time */}
                    <div className="hidden lg:block h-6 w-px bg-slate-200" />

                    {/* Time & Date Display */}
                    <div className="hidden sm:block text-right select-none">
                        <div className="text-sm font-semibold text-slate-700 leading-tight">
                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                        <div className="text-[10px] font-medium text-slate-400">
                            {time.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}
                        </div>
                    </div>

                    {/* View Toggle Icon (Desktop) */}
                    <Link
                        to={isAdmin ? "/dashboard" : "/admin"}
                        className={cn(
                            "hidden sm:flex p-2 rounded-lg transition-all duration-200 border shadow-sm hover:scale-105 active:scale-95",
                            isAdmin 
                                ? "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-100" 
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100"
                        )}
                        title={isAdmin ? "Go to User Dashboard" : "Go to Admin Settings"}
                    >
                        {isAdmin ? <Activity className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-50 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        aria-label="Toggle navigation menu"
                    >
                        {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden border-t border-slate-100 bg-white/95 backdrop-blur-md animate-in slide-in-from-top duration-200">
                    <nav className="container mx-auto px-4 py-3 space-y-1">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.to}
                                to={link.to}
                                className={cn(
                                    'block px-4 py-2.5 rounded-lg text-sm font-medium transition-all duration-200',
                                    isActiveLink(link.to)
                                        ? 'bg-blue-50 text-blue-700 border border-blue-100'
                                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                                )}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <Link
                            to={isAdmin ? "/dashboard" : "/admin"}
                            className="block px-4 py-2.5 rounded-lg text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
                        >
                            {isAdmin ? '← Back to Dashboard' : '⚙ Admin Settings'}
                        </Link>
                    </nav>
                </div>
            )}
        </header>
    );
};
