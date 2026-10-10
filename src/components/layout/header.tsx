"use client";
import * as React from "react";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";

export function Header() {
  const { user, logout } = useAuth();

  return (
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]"><div className="h-16 max-w-7xl mx-auto px-gutter flex items-center justify-between"><div className="flex items-center gap-space-sm"><Link href="/" className="flex items-center gap-2"><div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-lg">E</div><span className="font-headline-sm text-headline-sm text-on-surface tracking-tight">EduGuide AI</span></Link></div><nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-primary font-label-lg">
      {!user ? (
        <>
          <Link aria-current="page" className="transition-colors text-primary font-label-lg" href="/#features">Features</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="/#how-it-works">How It Works</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="/scholarships">Scholarship Directory</Link>
        </>
      ) : (
        <>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="/scholarships">Scholarships</Link>
          <Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="/dashboard">Dashboard</Link>
          <button onClick={() => alert("Coming soon: My Applications")} className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">My Applications</button>
          <button onClick={() => alert("Coming soon: Deadlines")} className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors">Deadlines</button>
        </>
      )}
    </nav><div className="flex items-center gap-space-sm">
      {!user ? (
        <>
          <Link className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low rounded-lg transition-colors" href="/login">Sign In</Link>
          <Link className="px-space-md py-space-sm font-label-lg text-label-lg text-on-primary bg-primary-container hover:bg-primary rounded-lg transition-colors shadow-[0_1px_3px_rgba(15,23,42,0.05)] whitespace-nowrap" href="/register">Get Started Free</Link>
        </>
      ) : (
        <>
          <div className="hidden sm:flex flex-col items-end mr-2">
            <span className="font-label-md text-label-md">{user.name}</span>
          </div>
          <button onClick={logout} className="px-space-md py-space-sm font-label-lg text-label-lg text-on-surface hover:bg-surface-container-low rounded-lg transition-colors">Sign Out</button>
        </>
      )}
    </div></div></header>
  );
}
