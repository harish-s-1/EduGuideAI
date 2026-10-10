"use client";
import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { useAuth } from "@/lib/auth-context";

export default function LandingPage() {
  const { user } = useAuth();
  const userName = user?.name || "Aarav Sharma";

  return (
    <>
      <Header />
      <main className="w-full pt-16 bg-surface"><div className="flex flex-col w-full">

<div className="relative w-full overflow-hidden">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[360px] bg-gradient-to-tr from-primary/10 via-secondary-container/20 to-primary-fixed/20 blur-3xl pointer-events-none rounded-full"></div>

<section className="relative max-w-7xl mx-auto px-gutter pt-8 pb-16 lg:pt-14 lg:pb-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">

<div className="lg:col-span-7 flex flex-col items-start gap-space-md">
<div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container-high text-on-surface">
<span className="text-xs">🇮🇳</span>
<span className="font-label-sm text-label-sm uppercase tracking-wider text-primary">India’s #1 AI Scholarship Platform</span>
<span className="w-1 h-1 rounded-full bg-outline"></span>
<span className="font-body-sm text-body-sm text-on-surface-variant font-medium">Updated for 2025-26 Academic Year</span>
</div>
<h1 className="font-headline-xl text-headline-xl text-on-surface tracking-tight leading-tight lg:text-[44px] lg:leading-[52px]">
            Unlock Every Scholarship You Deserve with <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Intelligent AI Guidance</span>
</h1>
<p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl leading-relaxed">
            Never miss government or private funding again. EduGuide AI matches your academic records, state domicile, and financial profile with 2,400+ verified schemes across India.
          </p>

<div className="flex flex-wrap items-center gap-space-sm pt-space-xs w-full sm:w-auto">
<Link className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-xl bg-primary text-on-primary font-label-lg text-label-lg shadow-md hover:bg-primary-container transition-all" href="/scholarships">
<span className="material-symbols-outlined text-base">verified_user</span>
<span>Explore Eligible Scholarships (Free)</span>
</Link>
<button className="w-full sm:w-auto flex items-center justify-center gap-space-xs px-space-lg py-3 rounded-xl bg-surface-container-low text-on-surface font-label-lg text-label-lg shadow-sm hover:bg-surface-container transition-all" >
<span className="material-symbols-outlined text-base text-secondary">play_circle</span>
<span>Watch 2-Min Interactive Demo</span>
</button>
</div>

<div className="pt-space-md flex flex-col gap-space-sm w-full">
<p className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
<span className="material-symbols-outlined text-sm text-secondary">group</span>
              Trusted by 140,000+ Indian students from IITs, NITs, Delhi University, and State Universities
            </p>
<div className="grid grid-cols-3 gap-space-sm max-w-lg">
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-headline-sm text-headline-sm text-primary">₹42 Cr+</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Unlocked Grants</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-headline-sm text-headline-sm text-secondary">99.4%</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Match Precision</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex flex-col">
<span className="font-headline-sm text-headline-sm text-tertiary">48 Hours</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Deadline Alerts</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative">

<div className="absolute inset-0 bg-gradient-to-tr from-secondary-fixed/40 to-primary-fixed/30 rounded-3xl blur-xl transform rotate-1 scale-95 opacity-60"></div>
<div className="relative bg-surface-container-lowest rounded-2xl shadow-xl p-space-lg flex flex-col gap-space-md">

<div className="flex items-center justify-between pb-space-sm">
<div className="flex items-center gap-space-sm">
<img className="w-12 h-12 rounded-full object-cover" data-alt="A bright portrait of a young Indian male university engineering student in Bangalore, wearing glasses, smiling confidently against clean campus architectural background, natural daylight, photorealistic" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9lGKMqzMrUZx1DEKEZn0Uv-eweVqzz5V3L_KD5UUw-kp5YQxhVMhGizBZBk96SZPdN_iAfjEj1ZKDQz_qPIvFXPQjPFmnUJlKFu4f1YBet7XnHaODRxuJ8in8ovawvhn7lyVAXxST0eoQSw5xPhxCc4xiaLs5LTRJAfE-3B7LW-FJYHcWi6bAHS0c2Il0gdC086uYFUrc6IOoC7e1Wr7UPbOV8Uue9W7LY11KTdFAm_tW3G2sSLsufg"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-headline-sm text-headline-sm text-on-surface">{userName}</span>
<span className="inline-block w-2 h-2 rounded-full bg-secondary"></span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">B.Tech CSE • 2nd Year • Pune Domicile</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">DEMO DATA</span>
</div>

<div className="rounded-xl p-space-md bg-surface-container-low flex flex-col gap-space-sm">
<div className="flex items-start justify-between gap-space-xs">
<div className="flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-primary-fixed flex items-center justify-center text-primary font-bold">
<span className="material-symbols-outlined text-lg">account_balance</span>
</div>
<div>
<h2 className="font-headline-sm text-headline-sm text-on-surface leading-snug">Central Sector Scheme (NSP)</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant">Ministry of Education, Govt. of India</p>
</div>
</div>
<div className="px-2.5 py-1 rounded-full bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm flex items-center gap-1">
<span className="material-symbols-outlined text-xs">auto_awesome</span>
<span>98% Match</span>
</div>
</div>

<div className="flex items-center justify-between py-1">
<div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Annual Grant:</span>
<span className="font-headline-sm text-headline-sm text-primary ml-1">₹20,000 / yr</span>
</div>
<div className="flex items-center gap-1 font-body-sm text-body-sm text-tertiary bg-tertiary-fixed/30 px-2 py-0.5 rounded-md">
<span className="material-symbols-outlined text-sm">schedule</span>
<span>Closing in 6 Days</span>
</div>
</div>

<div className="rounded-lg p-space-sm bg-surface-container-lowest flex flex-col gap-1.5 shadow-sm">
<div className="flex items-center gap-1 text-secondary">
<span className="material-symbols-outlined text-sm">psychology</span>
<span className="font-label-sm text-label-sm uppercase tracking-wide">Matched Because:</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2 py-0.5 rounded-md bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">Class 12th: 92.4% (&gt;80th Percentile)</span>
<span className="px-2 py-0.5 rounded-md bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">Family Income: ₹3.8L (&lt; ₹4.5L ceiling)</span>
<span className="px-2 py-0.5 rounded-md bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">Regular Degree: AICTE Approved</span>
</div>
</div>

<div className="flex items-center justify-between pt-1">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-xs text-secondary">check_circle</span>
                  Aadhaar &amp; Bank Seeded
                </span>
<button className="px-space-md py-1.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all flex items-center gap-1">
<span>Start Fast Apply</span>
<span className="material-symbols-outlined text-sm">arrow_forward</span>
</button>
</div>
</div>

<div className="flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm px-1">
<span className="flex items-center gap-1.5">
<span className="w-2 h-2 rounded-full bg-secondary animate-pulse"></span>
<span>NSP Server Status: Normal (Synced 4m ago)</span>
</span>
<Link href="/scholarships" className="text-primary font-label-sm text-label-sm cursor-pointer hover:underline">View 14 other matches →</Link>
</div>
</div>
</div>
</div>
</section>
</div>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-lg">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">How EduGuide AI Works</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">From Confused Applicant to Funded Scholar</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-md">
          Zero bureaucratic jargon. An end-to-end companion that navigates central, state, and corporate scholarship portals.
        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-10 h-10 rounded-xl bg-primary-fixed text-primary flex items-center justify-center font-headline-sm mb-space-md">
              01
            </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Create Student Profile</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Input course stream, marks, domicile state, quota/category, and verified annual family income in 90 seconds.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-1 text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">badge</span>
<span>Aadhaar e-KYC Ready</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-10 h-10 rounded-xl bg-secondary-fixed text-secondary flex items-center justify-center font-headline-sm mb-space-md">
              02
            </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">AI Eligibility Engine</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Smart neural engine evaluates 40+ granular parameters including caste certs, single-girl child quota, and parental income caps.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-1 text-secondary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">analytics</span>
<span>Deep Scheme Verification</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-10 h-10 rounded-xl bg-tertiary-fixed text-tertiary flex items-center justify-center font-headline-sm mb-space-md">
              03
            </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Application Copilot</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Instant AI drafting for essays &amp; Statements of Purpose (SOP), automated document format validation, and photo compression.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-1 text-tertiary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">edit_note</span>
<span>100% Rejection Proof</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div>
<div className="w-10 h-10 rounded-xl bg-surface-container-high text-on-surface flex items-center justify-center font-headline-sm mb-space-md">
              04
            </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">Track Deadlines &amp; Payouts</h3>
<p className="font-body-md text-body-md text-on-surface-variant">
              Sync auto-reminders with NSP, MahaDBT, UP Scholarship &amp; Vidyasaarathi to track DBT direct bank transfers.
            </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center gap-1 text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-sm">notifications_active</span>
<span>WhatsApp &amp; SMS Alerts</span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
<div>
<div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm mb-1 uppercase tracking-wider">
<span className="material-symbols-outlined text-xs">database</span>
<span>Verified Registry • Demo Mode Enabled</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Top Verified National &amp; Private Scholarships</h2>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm hover:bg-surface-variant transition-colors">
          All Categories (Central &amp; State)
        </button>
<button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container-high transition-colors">
          Only Technical / STEM
        </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg">

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/60 flex items-center justify-center text-primary font-headline-sm">
                NSP
              </div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Central Sector Scheme for College &amp; University</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Dept of Higher Education (MHRD), New Delhi</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase">DEMO DATA</span>
</div>
<div className="grid grid-cols-2 gap-space-sm py-2">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Disbursement Amount</span>
<span className="font-headline-sm text-headline-sm text-primary">₹20,000 / year</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Application Window</span>
<span className="font-headline-sm text-headline-sm text-tertiary">Closing Oct 31</span>
</div>
</div>
<div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Above 80th percentile in relevant stream in Class XII
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Gross family income ceiling ≤ ₹4.50 Lakh per annum
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Enrolled in regular graduation/post-graduation course
            </span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/30 px-2 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xs">security</span>
            National Scholarship Portal (NSP 2.0)
          </span>
<Link href="/scholarships/reliance-foundation-ug" className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors">
            Check Instant Match
          </Link>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-tertiary-fixed/60 flex items-center justify-center text-tertiary font-headline-sm">
                RF
              </div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Reliance Foundation Undergraduate Scholarship</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Reliance Foundation CSR Initiative</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase">DEMO DATA</span>
</div>
<div className="grid grid-cols-2 gap-space-sm py-2">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Disbursement Amount</span>
<span className="font-headline-sm text-headline-sm text-primary">Up to ₹2,00,000 Grant</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Aptitude Test Date</span>
<span className="font-headline-sm text-headline-sm text-tertiary">Nov 15, 2025</span>
</div>
</div>
<div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              First-year full-time undergraduate students in any stream
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Minimum 60% aggregate in Class XII exams
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Household income &lt; ₹15 Lakhs (preference &lt; ₹2.5L)
            </span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xs">lock</span>
            Direct Reliance CSR Portal
          </span>
<Link href="/scholarships/reliance-foundation-ug" className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors">
            Check Instant Match
          </Link>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-secondary-fixed/60 flex items-center justify-center text-secondary font-headline-sm">
                ONGC
              </div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">ONGC Foundation Meritorious Scholarship</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Oil and Natural Gas Corporation Ltd.</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase">DEMO DATA</span>
</div>
<div className="grid grid-cols-2 gap-space-sm py-2">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Disbursement Amount</span>
<span className="font-headline-sm text-headline-sm text-primary">₹48,000 / year</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Zone Allocations</span>
<span className="font-headline-sm text-headline-sm text-secondary">2,000 Slots</span>
</div>
</div>
<div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Engineering, MBBS, MBA, or Master in Geophysics/Geology
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              SC/ST/OBC/General EWS category candidates
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Gross family annual income under ₹2 Lakhs per annum
            </span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/30 px-2 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xs">public</span>
            ongcscholar.org Official
          </span>
<Link href="/scholarships/reliance-foundation-ug" className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors">
            Check Instant Match
          </Link>
</div>
</div>

<div className="bg-surface-container-lowest rounded-2xl p-space-lg shadow-sm flex flex-col justify-between relative group hover:shadow-md transition-all">
<div className="flex flex-col gap-space-sm">
<div className="flex items-start justify-between">
<div className="flex items-center gap-space-sm">
<div className="w-12 h-12 rounded-xl bg-primary-fixed/80 flex items-center justify-center text-primary font-headline-sm">
                AICTE
              </div>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pragati Scholarship for Girls (Technical Degree)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">All India Council for Technical Education</p>
</div>
</div>
<span className="px-2 py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-on-surface-variant uppercase">DEMO DATA</span>
</div>
<div className="grid grid-cols-2 gap-space-sm py-2">
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Disbursement Amount</span>
<span className="font-headline-sm text-headline-sm text-primary">₹50,000 / year</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low">
<span className="font-body-sm text-body-sm text-on-surface-variant block">Eligibility Quota</span>
<span className="font-headline-sm text-headline-sm text-secondary">Female Only (1st Yr)</span>
</div>
</div>
<div className="flex flex-col gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Admitted to AICTE approved Degree or Diploma institution
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Max 2 girl children per family eligible
            </span>
<span className="flex items-center gap-1.5">
<span className="material-symbols-outlined text-xs text-secondary">check</span>
              Family income not exceeding ₹8 Lakh per annum
            </span>
</div>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary bg-secondary-fixed/30 px-2 py-1 rounded-md flex items-center gap-1">
<span className="material-symbols-outlined text-xs">verified</span>
            NSP / AICTE Direct Gateway
          </span>
<Link href="/scholarships/reliance-foundation-ug" className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg hover:bg-primary-container transition-colors">
            Check Instant Match
          </Link>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container py-space-xl">
<div className="max-w-7xl mx-auto px-gutter flex flex-col gap-space-xl">
<div className="text-center max-w-3xl mx-auto flex flex-col items-center gap-space-xs">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Explainable Intelligence</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Why Students Prefer EduGuide Over Generic Govt Portals</h2>
<p className="font-body-md text-body-md text-on-surface-variant">
          Indian students lose over ₹1,200 Crores in unclaimed education funding every single year due to obscure qualification clauses. EduGuide changes that forever.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">

<div className="lg:col-span-5 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between">
<div className="flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-error-container text-on-error-container font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-xs">cancel</span>
              The Traditional Portal Way
            </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">High Rejection Rates &amp; Opaque Rejections</h3>
<ul className="flex flex-col gap-space-sm pt-space-xs text-on-surface-variant font-body-md text-body-md">
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error text-base shrink-0 mt-0.5">close</span>
<span>Students scroll through 80-page Gazette PDFs in legal language without knowing eligibility.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error text-base shrink-0 mt-0.5">close</span>
<span>Spend weeks applying, only to be rejected over minute sub-caste or revenue certificate seal mismatches.</span>
</li>
<li className="flex items-start gap-2">
<span className="material-symbols-outlined text-error text-base shrink-0 mt-0.5">close</span>
<span>Zero guidance when state DBT accounts fail NPCI mapping and funds bounce back.</span>
</li>
</ul>
</div>
<div className="p-space-sm rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm mt-space-md">
            ⚠️ 68% of applications are rejected at the institute verification stage with no appeal mechanism.
          </div>
</div>

<div className="lg:col-span-7 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between border-2 border-secondary/30">
<div className="flex flex-col gap-space-sm">
<div className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm uppercase">
<span className="material-symbols-outlined text-xs">auto_awesome</span>
              The EduGuide AI Advantage
            </div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Predictive Compliance Before You Even Click Submit</h3>

<div className="bg-surface-container-low p-space-md rounded-xl mt-space-xs flex flex-col gap-space-sm">
<div className="flex items-center justify-between">
<span className="font-label-lg text-label-lg text-on-surface">Instant Eligibility Simulator</span>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-2 py-0.5 rounded">Live Model</span>
</div>

<div className="grid grid-cols-1 sm:grid-cols-3 gap-space-xs text-on-surface">
<div className="flex flex-col gap-1">
<label className="font-body-sm text-body-sm text-on-surface-variant">Your Home State</label>
<select className="p-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none" id="sim-state">
<option value="MH">Maharashtra</option>
<option value="KA">Karnataka</option>
<option value="UP">Uttar Pradesh</option>
<option value="DL">Delhi (NCT)</option>
<option value="RJ">Rajasthan</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-body-sm text-body-sm text-on-surface-variant">Annual Family Income</label>
<select className="p-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none" id="sim-income">
<option value="2">Under ₹2.5 Lakhs</option>
<option value="5">₹2.5L - ₹6.0 Lakhs</option>
<option value="8">₹6.0L - ₹8.0 Lakhs</option>
<option value="12">Above ₹8.0 Lakhs</option>
</select>
</div>
<div className="flex flex-col gap-1">
<label className="font-body-sm text-body-sm text-on-surface-variant">Degree Category</label>
<select className="p-2 rounded-lg bg-surface-container-lowest text-on-surface font-body-md text-body-md focus:outline-none" id="sim-course">
<option value="eng">B.Tech / BE (AICTE)</option>
<option value="med">MBBS / Nursing</option>
<option value="gen">B.Sc / B.Com / BA</option>
<option value="law">LLB / Law</option>
</select>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container-lowest flex items-center justify-between" id="sim-result">
<div>
<span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">Matched 7 Priority Schemes</span>
<p className="font-body-sm text-body-sm text-on-surface-variant">Estimated funding potential: <strong className="text-on-surface">₹70,000 - ₹1,20,000 / yr</strong></p>
</div>
<button className="px-space-md py-1.5 rounded-lg bg-secondary text-on-secondary font-label-sm text-label-sm hover:opacity-90" >
                  Analyze Breakdown
                </button>
</div>
</div>
</div>
<div className="flex items-center gap-space-sm pt-space-sm text-on-surface-variant font-body-sm text-body-sm">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-secondary">verified</span>
              Direct Aadhaar DBT Verification Check
            </span>
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-sm text-secondary">verified</span>
              PFMS Bank Status Monitoring
            </span>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-space-sm mb-space-lg">
<div>
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Student Stories</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface">Empowering Students in Every Indian Corner</h2>
</div>
<p className="font-body-md text-body-md text-on-surface-variant max-w-sm">
        Hear how college scholars funded their tuition and hostel fees without loan burdens.
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-md">

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Close up photograph of a young Indian college girl in Bengaluru, Karnataka, holding notebooks, wearing a contemporary kurta, sunlit campus lawn setting, professional and natural" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhksdp7QTc-uvMeU9lgz0V-ilJCJN-eYFuBnsESaIC3HuOPQ70NX-X0ofpHWf5RAkGF1TEYELlK8AXV_lp_fiN6DGrs09X7BXl_pcd9oUoay2pd1zRKwAmsiRUDXzv0EvoTJDdMOak-xfUuetTVQIFyAgisG8KvFbOC-wziqsprdRGYPTTzm8lnWlhC4WGtyrukCgDJ3SHTdwblZaLyLyx-sQ_5wCcEDtk4HzPEZQPuY2UMG-hUl6rbw"/>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pooja Venkatesh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">RVCE Bengaluru • ECE</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            &quot;I had no idea Karnataka had a specific girl student tech stipend. EduGuide matched my SSLC marks and domicile within 2 minutes. Received ₹50,000 straight into my bank.&quot;
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>₹50,000 Grant Unlocked</span>
<span className="material-symbols-outlined text-base">verified</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Portrait of an Indian male college student in New Delhi, smart casual attire, modern library backdrop with natural light, sharp focus and confident smile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCcYFyzj-it4MUf2PranwIV7Mpmqdnzgc4VuYko9IIn61sRLf7elbea2aCI4WOI_CeCrBIAQW7ip2cb4QgZwU0YOO56L9GYKZouaB6cW6hprfq_jG80HrjvsF_-4xW3R-RRT7ZIqWtbgp6-_hKyNwGRPtzYEUA33GLOM4peCojVAA9IPkWwA7tU0p73gBol7JI0woq_BBqbi8ANEj70JMSCCOZ3C2Lv3z0NY8tQ01vJ0uIG-fLcHBhXLw"/>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Rohan Verma</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Delhi University • Economics</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            &quot;The AI SOP generator helped me write my Reliance Foundation statement in under 10 minutes. The document checklist ensured my Tehsildar income cert didn&apos;t get rejected.&quot;
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>₹2,00,000 Merit Award</span>
<span className="material-symbols-outlined text-base">verified</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Portrait of a young Indian female medical student in Pune, wearing a white coat with stethoscope, outdoors near medical college building, sunny daylight" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqXgxH91CsFUl3NMk7rq12bFhTjMlHVLCsrOqhgEjuyLFVG616C0iD95_-uKCPmSHTT6JvWNq08uBy2V27unRF4pVYSNsler23G0EieDfiPOF4c2nHP5TKV2hjI4VQ6S72AePMIrqh3SXUg5yl_au3GZO4K_2rPgcrQ0BCTypHKjtkCXMZXPC9Wpki4eCezTq9YV5PKwjWlipYlfQ0s8VbsXTY-INrNHq9oOdMOekN6pxNLh3aCS_OaA"/>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Tanvi Deshmukh</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">BJMC Pune • MBBS 1st Year</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            &quot;MahaDBT portal navigation was a nightmare for our family. EduGuide highlighted that my EWS certificate was about to expire 4 days before the scholarship window shut.&quot;
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>Saved from Missed Deadline</span>
<span className="material-symbols-outlined text-base">verified</span>
</div>
</div>

<div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow">
<div className="flex flex-col gap-space-sm">
<div className="flex items-center gap-space-xs">
<img className="w-10 h-10 rounded-full object-cover" data-alt="Portrait of a young Indian male engineering student from Jaipur Rajasthan, glasses, casual check shirt, modern tech laboratory setting, warm natural light" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDbVNRPgOYKRoFuBsKjOU-5xAVr5SJmbQdPeHP0LpxCZ6UjNNtpeXRt-88abgGeQySHEn7VzFSidTe2ONgGNtWGKi6tgmzHlHcnPDxtNQ9a7MvUrRPlgJsbGs5aD1T4N6yhWv0Gch0yQNrF58NHLZuh77JcUylp7PCcXv2AxxRaiO2Sxz510nrjqUtuIzjBht_5XOo91ib7ZFmwIM4hXois2zp2it0kH2eTHI6tKiVg4ymn2CA6F46tmA"/>
<div>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Manish Shekhawat</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">MNIT Jaipur • Mechanical</p>
</div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
            &quot;The platform identified both the ONGC foundation grant and state post-matric scholarship that can be held concurrently without violating double-dipping rules.&quot;
          </p>
</div>
<div className="mt-space-md pt-space-sm flex items-center justify-between text-secondary font-label-sm text-label-sm">
<span>₹78,000 / Year Dual Funding</span>
<span className="material-symbols-outlined text-base">verified</span>
</div>
</div>
</div>
</section>

<section className="w-full bg-surface-container-low py-space-xl">
<div className="max-w-4xl mx-auto px-gutter flex flex-col gap-space-lg">
<div className="text-center">
<span className="font-label-sm text-label-sm uppercase tracking-widest text-primary">Got Questions?</span>
<h2 className="font-headline-lg text-headline-lg text-on-surface mt-1">Frequently Asked Questions</h2>
</div>
<div className="flex flex-col gap-space-sm">

<details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group">
<summary className="font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>Is EduGuide AI completely free for Indian students?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-on-surface-variant">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            Yes! Student profile creation, algorithm matching across 2,400+ national and state schemes, and deadline reminders are 100% free. Our mission is to ensure no eligible Indian student misses funding due to lack of awareness.
          </p>
</details>

<details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group">
<summary className="font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>Can I apply for both Government (NSP) and Private CSR Scholarships?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-on-surface-variant">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            In most cases, yes! While government rules usually forbid holding two Central Government scholarships concurrently, you can often combine a central tuition waiver with private foundation grants (e.g., Tata Trusts, Reliance Foundation) that cover living expenses. EduGuide automatically flags concurrent eligibility rules.
          </p>
</details>

<details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group">
<summary className="font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>What documents do I need before matching?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-on-surface-variant">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            To view matches, you only need to know your Class 10/12 percentages, approximate family income, and state. When you prepare your actual applications, the Copilot guides you through uploading your Aadhaar, Tahsildar-issued Income Certificate, Domicile Certificate, and Bank Passbook with Aadhaar NPCI seeding.
          </p>
</details>

<details className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm group">
<summary className="font-headline-sm text-headline-sm text-on-surface cursor-pointer list-none flex items-center justify-between">
<span>How does the AI keep track of shifting government portal deadlines?</span>
<span className="material-symbols-outlined transition-transform group-open:rotate-180 text-on-surface-variant">expand_more</span>
</summary>
<p className="font-body-md text-body-md text-on-surface-variant mt-space-sm">
            Our automated crawlers sync daily with official portals including the National Scholarship Portal (NSP), MahaDBT, UP Saksham, SSP Karnataka, and OASIS West Bengal. When a department extends a deadline, your dashboard updates in real time.
          </p>
</details>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-gutter py-space-xl w-full">
<div className="relative overflow-hidden bg-primary rounded-3xl p-space-lg lg:p-space-xl text-on-primary flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg shadow-xl">

<div className="absolute -right-16 -bottom-16 w-96 h-96 bg-primary-container rounded-full blur-3xl opacity-50 pointer-events-none"></div>
<div className="relative flex flex-col gap-space-xs max-w-xl">
<div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-primary-container text-on-primary-container font-label-sm text-label-sm w-fit">
<span className="material-symbols-outlined text-sm">notifications_active</span>
<span>2025-26 Registration Windows Open</span>
</div>
<h2 className="font-headline-lg text-headline-lg text-on-primary leading-tight">
          Ready to Claim Your Education Grant?
        </h2>
<p className="font-body-lg text-body-lg text-on-primary-container">
          Join 140,000+ students. Get instant matching, deadline tracking, and continuous alerts whenever a matching state scheme opens.
        </p>

<form className="flex flex-col sm:flex-row gap-2 mt-space-sm" >
<input className="px-space-md py-3 rounded-xl bg-surface text-on-surface font-body-md text-body-md placeholder:text-outline focus:outline-none flex-grow" placeholder="Enter student email or WhatsApp number" required type="email"/>
<button className="px-space-lg py-3 rounded-xl bg-secondary-container text-on-secondary-container font-label-lg text-label-lg hover:bg-secondary-fixed transition-colors shrink-0" type="submit">
            Get Instant Alerts
          </button>
</form>
</div>
<div className="relative bg-surface-container-lowest/10 backdrop-blur-md p-space-md rounded-2xl flex flex-col gap-space-sm border border-white/10 lg:w-80">
<div className="flex items-center justify-between text-on-primary">
<span className="font-headline-sm text-headline-sm">Active Portals Sync</span>
<span className="w-2.5 h-2.5 rounded-full bg-secondary-fixed animate-ping"></span>
</div>
<div className="flex flex-col gap-2 font-body-sm text-body-sm text-on-primary-container">
<div className="flex items-center justify-between">
<span>National Scholarship Portal</span>
<span className="text-secondary-fixed font-semibold">Active</span>
</div>
<div className="flex items-center justify-between">
<span>MahaDBT (Maharashtra)</span>
<span className="text-secondary-fixed font-semibold">Active</span>
</div>
<div className="flex items-center justify-between">
<span>SSP (Karnataka)</span>
<span className="text-secondary-fixed font-semibold">Active</span>
</div>
<div className="flex items-center justify-between">
<span>UP Scholarship (Saksham)</span>
<span className="text-secondary-fixed font-semibold">Active</span>
</div>
</div>
<div className="pt-2">
<Link className="w-full flex items-center justify-center gap-1 py-2 rounded-lg bg-surface text-primary font-label-sm text-label-sm hover:bg-surface-bright transition-colors" href="/">
<span>Launch Free Profile Match</span>
<span className="material-symbols-outlined text-xs">arrow_forward</span>
</Link>
</div>
</div>
</div>
</section>

<div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm hidden flex items-center justify-center p-gutter" id="demo-modal">
<div className="bg-surface-container-lowest rounded-2xl max-w-2xl w-full p-space-lg shadow-2xl flex flex-col gap-space-md relative">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary">play_circle</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">EduGuide AI: Interactive Demo Overview</h3>
</div>
<button className="text-on-surface-variant hover:text-on-surface" >
<span className="material-symbols-outlined">close</span>
</button>
</div>
<div className="w-full aspect-video bg-surface-container-high rounded-xl flex flex-col items-center justify-center text-center p-space-lg gap-2">
<span className="material-symbols-outlined text-4xl text-primary animate-bounce">smart_display</span>
<p className="font-headline-sm text-headline-sm text-on-surface">2-Minute AI Eligibility Tour</p>
<p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm">
          Simulating real-time profile ingestion, sub-category parsing, and direct export to the official National Scholarship Portal format.
        </p>
<span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant mt-2 uppercase">DEMO DATA SANDBOX</span>
</div>
<div className="flex items-center justify-end gap-space-xs pt-space-xs">
<button className="px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md" >
          Close Window
        </button>
<button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container" >
          Start Interactive Scan
        </button>
</div>
</div>
</div>

</div></main>
    </>
  );
}
