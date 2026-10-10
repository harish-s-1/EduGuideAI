import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function DashboardPage() {
  return (
    <>
      <Header />
      <main className="relative w-full pt-16 bg-surface px-gutter"><div className="flex flex-col w-full pb-16 space-y-8">

<section className="relative overflow-hidden rounded-2xl bg-surface-container-low p-6 lg:p-8 shadow-sm">
<div className="absolute -right-16 -top-16 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
<div className="absolute right-32 bottom-0 w-64 h-64 rounded-full bg-secondary/5 blur-2xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col xl:flex-row xl:items-center justify-between gap-6">
<div className="flex flex-col max-w-2xl">
<div className="flex items-center gap-2 mb-2">
<span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
            Profile Verified • Maharashtra Domicile
          </span>
<span className="px-2 py-0.5 rounded font-label-sm text-label-sm text-outline uppercase bg-surface-container font-bold">
            DEMO DATA - Verified Guidelines
          </span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
          Welcome back, Aarav! <span className="text-primary font-headline-lg text-headline-lg">3 new high-match scholarships</span> added this week.
        </h1>
<p className="font-body-md text-body-md text-on-surface-variant mt-2 leading-relaxed">
          AI algorithmic scan updated 2 hours ago against National Scholarship Portal (NSP), MahaDBT, and 12 premier corporate CSR trusts.
        </p>

<div className="flex flex-wrap items-center gap-3 mt-4 pt-3 border-t border-surface-container">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-surface-container-lowest shadow-sm">
<span className="material-symbols-outlined text-secondary text-body-lg">verified</span>
<span className="font-label-md text-label-md text-on-surface">Profile 94% Complete</span>
<span className="text-on-surface-variant font-body-sm text-body-sm">• High Eligibility Confidence</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-label-md">account_balance</span>
<span>B.Tech CSE (3rd Yr) • Tier-1 Engg</span>
</div>
</div>
</div>

<div className="flex flex-col sm:flex-row items-center gap-4 bg-surface-container-lowest p-5 rounded-xl shadow-sm border border-surface-container-high/60">
<div className="relative flex items-center justify-center w-24 h-24">

<svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
<circle className="text-surface-container" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" strokeWidth="8"></circle>
<circle className="text-secondary transition-all duration-1000 ease-out" cx="50" cy="50" fill="transparent" r="40" stroke="currentColor" stroke-dasharray="251.2" stroke-dashoffset="15" strokeLinecap="round" strokeWidth="8"></circle>
</svg>
<div className="absolute flex flex-col items-center">
<span className="font-headline-sm text-headline-sm font-bold text-on-surface">94%</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Ready</span>
</div>
</div>
<div className="flex flex-col gap-2.5 w-full sm:w-auto">
<button className="flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-on-primary font-label-lg text-label-lg shadow-sm hover:bg-primary-container transition-all" id="runScanBtn">
<span className="material-symbols-outlined text-body-lg">radar</span>
<span>Run AI Eligibility Scan</span>
</button>
<button className="flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-variant transition-colors">
<span className="material-symbols-outlined text-secondary text-body-lg">auto_awesome</span>
<span>Ask AI Advisor</span>
</button>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

<div className="flex flex-col p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">High Matches Found</span>
<div className="p-2 rounded-lg bg-secondary-container/30 text-on-secondary-container">
<span className="material-symbols-outlined text-headline-sm">workspace_premium</span>
</div>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">14 Schemes</span>
</div>
<div className="mt-1 flex items-center justify-between">
<span className="font-label-md text-label-md text-secondary font-semibold">₹3,40,000 Potential</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Avg ₹24.2k/ea</span>
</div>
</div>

<div className="flex flex-col p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Active Applications</span>
<div className="p-2 rounded-lg bg-primary-fixed text-on-primary-fixed">
<span className="material-symbols-outlined text-headline-sm">pending_actions</span>
</div>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">3 In Progress</span>
</div>
<div className="mt-1 flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant">
<span className="w-2 h-2 rounded-full bg-primary"></span>
<span>1 Submitted • 2 Drafting</span>
</div>
</div>

<div className="flex flex-col p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">Urgent Deadlines</span>
<div className="p-2 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed">
<span className="material-symbols-outlined text-headline-sm">timer</span>
</div>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-tertiary">2 Closing Soon</span>
</div>
<div className="mt-1 flex items-center gap-1 font-label-sm text-label-sm text-tertiary font-semibold">
<span className="material-symbols-outlined text-label-sm">warning</span>
<span>Action required in &lt;10 Days</span>
</div>
</div>

<div className="flex flex-col p-5 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface-variant">DigiLocker Verification</span>
<div className="p-2 rounded-lg bg-surface-container-high text-on-surface">
<span className="material-symbols-outlined text-headline-sm">task_alt</span>
</div>
</div>
<div className="mt-3 flex items-baseline gap-2">
<span className="font-headline-lg text-headline-lg text-on-surface">8/10 Ready</span>
</div>
<div className="mt-1 flex items-center justify-between">
<span className="font-label-sm text-label-sm text-secondary font-semibold">e-KYC Synced</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">2 Missing Docs</span>
</div>
</div>
</section>

<section className="flex flex-col gap-4">
<div className="flex flex-wrap items-center justify-between gap-2">
<div className="flex items-center gap-2">
<div className="p-1 rounded bg-tertiary-fixed text-on-tertiary-fixed flex items-center justify-center">
<span className="material-symbols-outlined text-body-md">alarm</span>
</div>
<h2 className="font-headline-sm text-headline-sm text-on-surface">Critical Deadlines Watchlist</h2>
<span className="px-2 py-0.5 rounded-full bg-tertiary-fixed-dim/40 text-on-tertiary-fixed font-label-sm text-label-sm">Action Needed</span>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-sm text-label-sm transition-colors">
<span className="material-symbols-outlined text-body-sm">calendar_month</span>
<span>Sync with Calendar</span>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-lowest shadow-sm gap-4 border-l-4 border-l-tertiary">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-tertiary-fixed/60 text-on-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-headline-sm">account_balance</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Central Sector Scheme (NSP)</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">MoE Govt of India</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Ministry of Education • College &amp; University Students Merit Scheme
            </p>
<div className="flex items-center gap-3 mt-2">
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded font-bold">
                Closes Oct 31 • 5 days left
              </span>
<span className="font-label-sm text-label-sm text-error bg-error-container/50 px-2 py-0.5 rounded">
                Draft SOP Pending
              </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center shrink-0">
<button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors">
            Resume Form
          </button>
</div>
</div>

<div className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl bg-surface-container-lowest shadow-sm gap-4 border-l-4 border-l-tertiary">
<div className="flex items-start gap-3">
<div className="p-2 rounded-lg bg-tertiary-fixed/60 text-on-tertiary-fixed shrink-0">
<span className="material-symbols-outlined text-headline-sm">foundation</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2">
<span className="font-headline-sm text-headline-sm text-on-surface">Tata Trust Engg Grant 2024-25</span>
<span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">Private CSR</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
              Merit-cum-Means Grant for Undergraduate Engineering Scholars
            </p>
<div className="flex items-center gap-3 mt-2">
<span className="font-label-sm text-label-sm text-tertiary bg-tertiary-fixed/40 px-2 py-0.5 rounded font-bold">
                Closes Nov 08 • 12 days left
              </span>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                Documents Needed (2)
              </span>
</div>
</div>
</div>
<div className="flex items-center gap-2 self-end sm:self-center shrink-0">
<button className="px-3 py-1.5 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors">
            Review Docs
          </button>
</div>
</div>
</div>
</section>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

<div className="lg:col-span-8 flex flex-col gap-6">
<div className="flex items-center justify-between">
<div>
<h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">Top Matched Scholarships for Aarav</h2>
<p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">Ranked using your academic transcript, demographic parameters, and verified state quotas.</p>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-secondary-container/40 px-3 py-1 rounded-full font-semibold">
          AI Filtered (14 of 2,400)
        </span>
</div>

<article className="flex flex-col p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Emblem logo of premier Indian philanthropic organization with deep navy and clean geometric emblem" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-mQaFDmB7h86iPnca2Hy-QS4-XXlr8ITTlL_MK8WKGHQbFiSLttdb2-XkHfi2TEYAFyVR9kMFAvMneEKGfLsfyI7aCksTBcbjP5AFZ4SgzK5CP0XD4SoUfd3M9JK9NpZPTCUHBKcGkrIuvQaoWKqPFMvlewiveev3PWpLeohDRNgRzfttkG3oJGhQNaBOBi2g47O56-soGlrpppm0aSKKxtEoS4kcCUQ72FjaIXRu406wA1jHpVIBcg"/>
</div>
<div>
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded-md font-label-sm text-label-sm text-on-surface-variant bg-surface-container uppercase">CSR Philanthropy</span>
<span className="font-label-sm text-label-sm text-outline">• Vidyasaarathi Portal</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">HDFC Badhte Kadam Scholarship 2025</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">General &amp; STEM Undergraduate Cohort</p>
</div>
</div>

<div className="flex flex-col items-end shrink-0">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-body-sm">check_circle</span>
              96% Match
            </span>
</div>
</div>

<div className="flex flex-wrap items-baseline gap-6 mt-4 pt-4 border-t border-surface-container">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Grant Award</span>
<div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">₹1,00,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ year</span></div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Application Mode</span>
<div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Direct Bank DBT</div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Disbursal Date</span>
<div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Dec 15, 2024</div>
</div>
</div>

<div className="mt-4 p-3.5 rounded-xl bg-secondary-container/20 flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-bold">
<span className="material-symbols-outlined text-label-md">auto_awesome</span>
<span>Matched because:</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Engineering UG (Year 3)</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Class 12 Merit &gt; 85% (Recorded: 91.4%)</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Family Income &lt; ₹6 LPA (Recorded: ₹4.8 LPA)</span>
</div>
</div>

<div className="flex items-center justify-between mt-5 pt-3">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm text-tertiary">schedule</span>
<span>Deadline: Nov 20, 2024 (24 days left)</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" title="Bookmark Scheme">
<span className="material-symbols-outlined text-body-lg">bookmark_border</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors">
              View Details
            </button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-label-md">smart_toy</span>
<span>Apply via AI Copilot</span>
</button>
</div>
</div>
</article>

<article className="flex flex-col p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Official seal of Maharashtra State Higher and Technical Education Department in crisp gold and deep navy heraldry" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAm4S_plWukMR8ns5f1S9aOO5Z2bEkAcSovdb8fUEh9heXVjraf9udWCnU-eywQgnmphfql0EaJi4f3ZGb2PiLrp-y4cSLnAb5j3mEP80DC_IjdIIO80rVgtPZlCVrmtCDJgy_GJXKQnub_5PXp1sQzcRuQam-81e9NdUGaKeojS6osSzD5Kh-MpXIiaINMgK8CLAQqlU5iWRQOnjWA35P2w7HU5_FSkG0gQilMN9qnNJI98ULoWKdGiw"/>
</div>
<div>
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded-md font-label-sm text-label-sm text-secondary bg-secondary-container/40 uppercase font-semibold">State Government Scheme</span>
<span className="font-label-sm text-label-sm text-outline">• MahaDBT Portal</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Rajarshi Chhatrapati Shahu Maharaj Shikshan Shulk (EBC)</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Directorate of Technical Education (DTE Maharashtra)</p>
</div>
</div>

<div className="flex flex-col items-end shrink-0">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-body-sm">verified</span>
              99% Match
            </span>
</div>
</div>
<div className="flex flex-wrap items-baseline gap-6 mt-4 pt-4 border-t border-surface-container">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Benefit Amount</span>
<div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">50% Tuition Waiver <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">(~₹75,000/yr)</span></div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Quota Category</span>
<div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Open / EBC General</div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Disbursal Mode</span>
<div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Direct to College Bank A/C</div>
</div>
</div>

<div className="mt-4 p-3.5 rounded-xl bg-secondary-container/20 flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-bold">
<span className="material-symbols-outlined text-label-md">auto_awesome</span>
<span>Matched because:</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Maharashtra Domicile (Verified via DigiLocker)</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Admitted via CAP Round 1</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Family Income ≤ ₹8,00,000 bracket</span>
</div>
</div>
<div className="flex items-center justify-between mt-5 pt-3">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm text-secondary">verified_user</span>
<span>Pre-filled with MahaDBT ID: MH-2022-8921</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" title="Bookmark Scheme">
<span className="material-symbols-outlined text-body-lg">bookmark_border</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors">
              Guidelines
            </button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
<span className="material-symbols-outlined text-label-md">open_in_new</span>
<span>Sync &amp; Apply</span>
</button>
</div>
</div>
</article>

<article className="flex flex-col p-6 rounded-2xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow relative">
<div className="flex items-start justify-between gap-4">
<div className="flex items-start gap-4">
<div className="w-12 h-12 rounded-xl bg-surface-container-high flex items-center justify-center shrink-0 shadow-sm overflow-hidden">
<img className="w-full h-full object-cover" data-alt="Futuristic science and research innovation council badge in polished deep cyan and white minimalist vector styling" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrcMmg1M4RlGETeyWUyGYnKEphd0AHLg-ccP72-4Z5sqiGma88QWFp5CkVH9r9KCSwuR_WSvf2yo5ETAkDMd5Ykwc3ErC4ZUqW8h8pIgxk_bcEHLjv3yU6r4R2pdGafHad-LzHU4KeBs32-ap8t6UZUbhbTz9qPW-EeXcpFDPJ10okkaxsPvhyMVvwrlf-EJlGBH9qGVWSdUhpyB_YxFobYVEcULkUZjKJY_Z0FM7c1rrZNUCjDCnU9A"/>
</div>
<div>
<div className="flex flex-wrap items-center gap-2">
<span className="px-2 py-0.5 rounded-md font-label-sm text-label-sm text-on-surface-variant bg-surface-container uppercase">National STEM Research</span>
<span className="font-label-sm text-label-sm text-outline">• Dept of Science &amp; Technology</span>
</div>
<h3 className="font-headline-sm text-headline-sm text-on-surface mt-1">Premier STEM Innovation Grant &amp; Fellowship</h3>
<p className="font-body-sm text-body-sm text-on-surface-variant">Undergraduate Research Assistantship Grant</p>
</div>
</div>
<div className="flex flex-col items-end shrink-0">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container font-label-md text-label-md font-bold">
<span className="material-symbols-outlined text-body-sm">stars</span>
              91% Match
            </span>
</div>
</div>
<div className="flex flex-wrap items-baseline gap-6 mt-4 pt-4 border-t border-surface-container">
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Grant Award</span>
<div className="font-headline-md text-headline-md font-bold text-on-surface mt-0.5">₹2,50,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">lump sum grant</span></div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Duration</span>
<div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">Academic Year 2024-25</div>
</div>
<div>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Cohort Size</span>
<div className="font-body-md text-body-md text-on-surface font-semibold mt-0.5">150 Scholars Nationwide</div>
</div>
</div>

<div className="mt-4 p-3.5 rounded-xl bg-secondary-container/20 flex flex-col gap-1.5">
<div className="flex items-center gap-1.5 font-label-sm text-label-sm text-secondary font-bold">
<span className="material-symbols-outlined text-label-md">auto_awesome</span>
<span>Matched because:</span>
</div>
<div className="flex flex-wrap gap-1.5">
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">CS Major with AI/ML Elective</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Cumulative CGPA 8.8 &gt; 8.5 Cutoff</span>
<span className="px-2.5 py-0.5 rounded-md bg-surface-container-lowest font-body-sm text-body-sm text-on-surface shadow-2xs">Institution NIRF Rank #12 (Eligible Pool)</span>
</div>
</div>
<div className="flex items-center justify-between mt-5 pt-3">
<div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm text-on-surface-variant">event</span>
<span>Deadline: Dec 10, 2024</span>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" title="Bookmark Scheme">
<span className="material-symbols-outlined text-body-lg">bookmark_border</span>
</button>
<button className="px-4 py-2 rounded-lg bg-surface-container-high hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors">
              Review Guidelines
            </button>
<button className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors shadow-sm">
<span>Start Application</span>
</button>
</div>
</div>
</article>
</div>

<div className="lg:col-span-4 flex flex-col gap-6">

<div className="p-5 rounded-2xl bg-surface-container-high/60 shadow-sm flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="p-1.5 rounded-lg bg-secondary text-on-secondary">
<span className="material-symbols-outlined text-body-lg">psychology</span>
</div>
<span className="font-headline-sm text-headline-sm text-on-surface">AI Agent Insight</span>
</div>
<span className="font-label-sm text-label-sm text-secondary bg-surface-container-lowest px-2 py-0.5 rounded-full font-bold">
            DBT Alert
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface leading-relaxed">
<strong className="font-semibold text-secondary">EduGuide Tip:</strong> Your Aadhaar is mapped to <strong className="text-on-surface font-semibold">State Bank of India (SBIN0001423)</strong>. Ensure your NPCI Aadhaar seeding status is active on UIDAI portal to prevent automatic rejection of direct DBT disbursements for MahaDBT.
        </p>
<div className="flex items-center justify-between pt-2 border-t border-surface-container">
<Link className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1" href="/">
<span>Check NPCI Status</span>
<span className="material-symbols-outlined text-body-sm">open_in_new</span>
</Link>
<span className="font-label-sm text-label-sm text-on-surface-variant">Last pinged: 3d ago</span>
</div>
</div>

<div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-primary text-headline-sm">checklist</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Action Checklist</h3>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-2 py-0.5 rounded font-semibold" id="completedCounter">
            1 of 4 Completed
          </span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Complete these critical items to elevate your application readiness for upcoming deadlines.
        </p>

<div className="flex flex-col gap-2.5 mt-1" id="taskContainer">

<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
<input defaultChecked className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary task-checkbox" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface line-through group-has-[:checked]:text-on-surface-variant">Fetch College Bonafide Certificate</span>
<span className="font-body-sm text-body-sm text-secondary">Synced via DigiLocker • 24 Oct</span>
</div>
</label>

<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
<input className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary task-checkbox" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface group-has-[:checked]:line-through">Upload Father&apos;s Form 16 / Income Cert</span>
<span className="font-body-sm text-body-sm text-tertiary">Required for Central Sector Scheme</span>
</div>
</label>

<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
<input className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary task-checkbox" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface group-has-[:checked]:line-through">Draft SOP for HDFC Badhte Kadam</span>
<span className="font-body-sm text-body-sm text-primary font-semibold">AI Assistant ready with template</span>
</div>
</label>

<label className="flex items-start gap-3 p-3 rounded-xl bg-surface-container-low hover:bg-surface-container transition-colors cursor-pointer group">
<input className="mt-0.5 w-4 h-4 rounded text-primary focus:ring-primary task-checkbox" type="checkbox"/>
<div className="flex flex-col min-w-0">
<span className="font-label-md text-label-md text-on-surface group-has-[:checked]:line-through">Verify Bank IFSC with Aadhaar NPCI</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Ensures DBT compliance</span>
</div>
</label>
</div>
<button className="w-full mt-2 py-2.5 rounded-lg bg-surface-container hover:bg-surface-variant text-on-surface font-label-md text-label-md transition-colors flex items-center justify-center gap-1.5">
<span className="material-symbols-outlined text-body-md">add_task</span>
<span>Add Custom Deadline or Note</span>
</button>
</div>

<div className="p-5 rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-3">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary text-headline-sm">edit_note</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">SOP Copilot Quickstart</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Your personal narrative for the <em>HDFC Badhte Kadam</em> essay prompt is 65% generated based on your academic projects in Machine Learning.
        </p>
<div className="p-3 rounded-lg bg-surface-container text-on-surface-variant font-body-sm text-body-sm italic">
          &quot;As a third-year Computer Science student passionate about accessible healthcare diagnostics through computer vision...&quot;
        </div>
<div className="flex items-center gap-2 pt-1">
<button className="w-full py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-label-md">auto_awesome</span>
<span>Open in AI Workspace</span>
</button>
</div>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
