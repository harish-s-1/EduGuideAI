"use client";
import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { useAuth } from "@/lib/auth-context";

export default function ScholarshipsPage() {
  const { user } = useAuth();
  const userName = user?.name ? user.name.split(" ")[0] : "Aarav";

  return (
    <>
      <Header />
      <main className="relative w-full pt-16 bg-surface px-gutter"><div className="flex flex-col w-full pb-16">

<div className="w-full mb-space-lg flex flex-col md:flex-row md:items-end justify-between gap-space-md">
<div>
<div className="flex items-center gap-space-xs text-secondary mb-1">
<span className="material-symbols-outlined text-body-md" >dataset</span>
<span className="font-label-sm text-label-sm tracking-wider uppercase">National Repository • Live Sync with NSP &amp; State Portals</span>
</div>
<div className="flex items-baseline gap-space-sm">
<span className="font-headline-lg text-headline-lg text-on-surface">Scholarship Discovery Engine</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm tracking-wide uppercase">DEMO DATA</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant mt-0.5">
        Explore 2,400+ authenticated central, state, corporate CSR, and merit-linked programs mapped to your verified profile.
      </p>
</div>

<div className="flex items-center gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-headline-sm">verified_user</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Profile Match</span>
<span className="font-label-lg text-label-lg text-on-surface">94.2% Synced</span>
</div>
</div>
<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-tertiary text-headline-sm">hourglass_top</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm text-on-surface-variant">Urgent Closures</span>
<span className="font-label-lg text-label-lg text-on-surface">3 This Week</span>
</div>
</div>
</div>
</div>

<div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm mb-space-lg flex flex-col gap-space-md">

<div className="relative w-full">
<span className="material-symbols-outlined absolute left-space-md top-1/2 -translate-y-1/2 text-on-surface-variant text-headline-sm">search</span>
<input className="w-full h-12 pl-12 pr-28 bg-surface-container-low rounded-xl font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:bg-surface-container-lowest focus:ring-2 focus:ring-primary-container transition-all" id="global-discovery-search" placeholder="Search by keyword, sponsor, scheme name, or field of study..." type="text" value="Engineering UG Maharashtra"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1">
<button className="px-space-xs py-1 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface transition-colors flex items-center gap-0.5">
<span className="material-symbols-outlined text-body-sm">mic</span>
<span>Voice</span>
</button>
<span className="px-space-xs py-1 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-label-sm">⌘K</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider mr-1">Active Filters:</span>
<div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors cursor-pointer group">
<span>Engineering &amp; Tech (UG)</span>
<span className="material-symbols-outlined text-body-sm text-on-surface-variant group-hover:text-error transition-colors">close</span>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors cursor-pointer group">
<span>Maharashtra</span>
<span className="material-symbols-outlined text-body-sm text-on-surface-variant group-hover:text-error transition-colors">close</span>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors cursor-pointer group">
<span>Income &lt; ₹6 LPA</span>
<span className="material-symbols-outlined text-body-sm text-on-surface-variant group-hover:text-error transition-colors">close</span>
</div>
<div className="flex items-center gap-1 px-space-sm py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm hover:bg-secondary-container/70 transition-colors cursor-pointer group">
<span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
<span>Open Applications Only</span>
<span className="material-symbols-outlined text-body-sm text-on-secondary-container group-hover:text-error transition-colors">close</span>
</div>
<button className="px-space-sm py-1 rounded-full text-primary font-label-sm text-label-sm hover:underline ml-1">
          Clear All
        </button>
</div>

<div className="flex items-center gap-space-sm">
<div className="flex items-center gap-1.5 text-on-surface">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-lg text-label-lg">Showing 24 Eligible Scholarships</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">(Sorted by Best Match)</span>
</div>
</div>
</div>

<div className="grid grid-cols-12 gap-gutter items-start">

<aside className="col-span-12 lg:col-span-3 bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-lg sticky top-20">

<div className="flex items-center justify-between pb-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-headline-sm text-primary">tune</span>
<span className="font-headline-sm text-headline-sm text-on-surface">Refine Matches</span>
</div>
<button className="font-label-sm text-label-sm text-primary hover:underline">Reset</button>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Education Level</label>
<div className="flex flex-col gap-1 mt-1">
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Class 11 - 12 (Higher Sec)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">420</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg bg-surface-container cursor-pointer font-label-lg text-label-lg text-on-surface">
<div className="flex items-center gap-space-xs">
<input defaultChecked className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span>Undergraduate (Degree)</span>
</div>
<span className="font-label-sm text-label-sm text-primary">1,140</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Postgraduate (Master&apos;s)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">610</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">PhD &amp; Postdoctoral</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">195</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Vocational / Diploma (ITI)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">88</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Scheme Type</label>
<div className="flex flex-col gap-1 mt-1">
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input defaultChecked className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Central Schemes (NSP)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">128</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input defaultChecked className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">State Govt (MahaDBT)</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">64</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input defaultChecked className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Corporate CSR Funds</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">312</span>
</label>
<label className="flex items-center justify-between p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer transition-colors">
<div className="flex items-center gap-space-xs">
<input className="rounded w-4 h-4 text-primary focus:ring-0" type="checkbox"/>
<span className="font-body-md text-body-md text-on-surface">Private Endowments</span>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">94</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Field of Study</label>
<div className="flex flex-wrap gap-1.5 mt-1">
<span className="px-space-xs py-1 rounded-lg bg-primary-container text-on-primary font-label-sm text-label-sm flex items-center gap-1 cursor-pointer">
            STEM &amp; Engg <span className="material-symbols-outlined text-label-sm">check</span>
</span>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
            Medicine / Pharma
          </span>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
            Commerce / CA
          </span>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
            Law &amp; Policy
          </span>
<span className="px-space-xs py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high cursor-pointer transition-colors">
            Arts &amp; Humanities
          </span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Domicile / Region</label>
<span className="font-label-sm text-label-sm text-secondary">Aadhaar Linked</span>
</div>
<select className="w-full h-10 px-space-sm bg-surface-container-low rounded-lg font-body-md text-body-md text-on-surface focus:outline-none">
<option>Maharashtra (Current Home)</option>
<option>All-India Open</option>
<option>Karnataka</option>
<option>Uttar Pradesh</option>
<option>Tamil Nadu</option>
<option>West Bengal</option>
<option>Delhi NCT</option>
</select>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Social Category / Quota</label>
<div className="grid grid-cols-2 gap-1.5 mt-1">
<label className="flex items-center gap-space-xs p-1.5 rounded-lg bg-surface-container cursor-pointer font-label-sm text-label-sm text-on-surface">
<input defaultChecked className="rounded w-3.5 h-3.5 text-primary focus:ring-0" type="checkbox"/>
<span>General</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-label-sm text-label-sm text-on-surface-variant transition-colors">
<input className="rounded w-3.5 h-3.5 text-primary focus:ring-0" type="checkbox"/>
<span>OBC (NCL)</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-label-sm text-label-sm text-on-surface-variant transition-colors">
<input className="rounded w-3.5 h-3.5 text-primary focus:ring-0" type="checkbox"/>
<span>SC / ST</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-label-sm text-label-sm text-on-surface-variant transition-colors">
<input className="rounded w-3.5 h-3.5 text-primary focus:ring-0" type="checkbox"/>
<span>EWS</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-label-sm text-label-sm text-on-surface-variant transition-colors">
<input className="rounded w-3.5 h-3.5 text-primary focus:ring-0" type="checkbox"/>
<span>PwD / Divyang</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-label-sm text-label-sm text-on-surface-variant transition-colors">
<input className="rounded w-3.5 h-3.5 text-primary focus:ring-0" type="checkbox"/>
<span>Single Girl Child</span>
</label>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<div className="flex justify-between items-center">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Annual Family Income</label>
<span className="font-label-lg text-label-lg text-primary">≤ ₹8.0 LPA</span>
</div>
<input className="w-full accent-primary h-2 bg-surface-container rounded-lg cursor-pointer mt-1" max="15" min="1" type="range" value="8"/>
<div className="flex justify-between font-label-sm text-label-sm text-on-surface-variant">
<span>&lt; ₹2.5L</span>
<span>₹6.0L</span>
<span>₹15L+</span>
</div>
</div>

<div className="flex flex-col gap-space-xs">
<label className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">Status</label>
<div className="flex flex-col gap-1 mt-1">
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-body-md text-body-md text-on-surface">
<input defaultChecked className="text-secondary focus:ring-0" name="status" type="radio"/>
<span>Currently Open (18)</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-body-md text-body-md text-on-surface">
<input className="text-secondary focus:ring-0" name="status" type="radio"/>
<span>Upcoming in 30 Days (6)</span>
</label>
<label className="flex items-center gap-space-xs p-1.5 rounded-lg hover:bg-surface-container-low cursor-pointer font-body-md text-body-md text-on-surface">
<input className="text-secondary focus:ring-0" name="status" type="radio"/>
<span>Archive / Closed</span>
</label>
</div>
</div>
</aside>

<section className="col-span-12 lg:col-span-9 flex flex-col gap-space-md">

<div className="bg-surface-container-lowest p-space-sm rounded-xl shadow-sm flex flex-wrap items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-sm">
<span className="font-label-sm text-label-sm uppercase text-on-surface-variant tracking-wider">Sort Candidates By:</span>
<div className="relative">
<select className="h-9 pl-space-sm pr-8 bg-surface-container-low rounded-lg font-label-lg text-label-lg text-on-surface focus:outline-none cursor-pointer">
<option>Best Match (AI Score 90%+ First)</option>
<option>Deadline: Nearest First</option>
<option>Award Amount: Highest First</option>
<option>Recently Added to National Portal</option>
</select>
</div>
</div>
<div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg">
<button className="p-1.5 rounded bg-surface-container-lowest text-primary shadow-xs" title="Detailed Card View">
<span className="material-symbols-outlined text-body-lg">view_agenda</span>
</button>
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors" title="Compact Grid View">
<span className="material-symbols-outlined text-body-lg">grid_view</span>
</button>
<button className="p-1.5 rounded text-on-surface-variant hover:text-on-surface transition-colors" title="Table View">
<span className="material-symbols-outlined text-body-lg">table_rows</span>
</button>
</div>
</div>

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-headline-lg text-primary">assured_workload</span>
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs mb-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high font-label-sm text-label-sm text-primary">CSR Funded</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Aptitude Test Required</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">DEMO DATA</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors cursor-pointer">
                Reliance Foundation Undergraduate Scholarship 2024–25
              </h2>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Administered by Reliance Foundation • Merit-cum-Means National Scheme
              </span>
</div>
</div>

<div className="flex md:flex-col items-end justify-between md:justify-start shrink-0 text-right">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">₹2,00,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">total grant</span></span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/40 text-on-secondary-container mt-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm">95% Profile Match</span>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-secondary-container/20 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-body-lg">auto_awesome</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Matched Because:</span>
<div className="flex flex-wrap gap-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">UG 1st-3rd Year Enrolled</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">B.Tech CSE (Class XII 88% &gt; 60%)</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Family Income &lt; ₹15 LPA</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer flex items-center gap-0.5">
            View AI Reasoning <span className="material-symbols-outlined text-label-sm">north_east</span>
</span>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-body-sm">schedule</span>
<span>Deadline: Nov 15, 2025 (18 days left)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm text-secondary">verified</span>
<span>Direct Bank Transfer (DBT)</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button onClick={() => alert("Coming soon: Save")} className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-body-md">bookmark_border</span>
<span>Save</span>
</button>
<Link href="/scholarships/reliance-foundation-ug" className="h-10 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm">
<span>Check Full Eligibility &amp; Apply</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</Link>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-headline-lg text-secondary">workspace_premium</span>
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs mb-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Private Trust</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-secondary font-label-sm text-label-sm">No Exam / Merit Pure</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">DEMO DATA</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors cursor-pointer">
                Sitaram Jindal Foundation Scholarship Scheme (Category &apos;D&apos;)
              </h2>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Administered by Sitaram Jindal Foundation, Bengaluru • Open Across Pan-India
              </span>
</div>
</div>
<div className="flex md:flex-col items-end justify-between md:justify-start shrink-0 text-right">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">₹3,200 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ month</span></span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/40 text-on-secondary-container mt-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm">92% Profile Match</span>
</div>
</div>
</div>
<div className="p-space-sm rounded-lg bg-secondary-container/20 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-body-lg">auto_awesome</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Matched Because:</span>
<div className="flex flex-wrap gap-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Engineering / Professional Degree</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">General Category Eligible</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Annual Family Income ≤ ₹4 LPA</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer flex items-center gap-0.5">
            Criteria breakdown <span className="material-symbols-outlined text-label-sm">north_east</span>
</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container-high text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-body-sm text-secondary">event_available</span>
<span>Deadline: Open Year-Round (Rolling Admissions)</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm">description</span>
<span>Offline / Online Verification</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button onClick={() => alert("Coming soon: Save")} className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-body-md">bookmark_border</span>
<span>Save</span>
</button>
<button onClick={() => alert("Coming soon: Apply")} className="h-10 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm">
<span>View &amp; Apply</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-primary"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-headline-lg text-primary">school</span>
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs mb-1">
<span className="px-space-xs py-0.5 rounded bg-primary-fixed text-on-primary-fixed-variant font-label-sm text-label-sm">Government of India (DST)</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Pure &amp; Applied Sciences</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">DEMO DATA</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors cursor-pointer">
                INSPIRE Scholarship for Higher Education (SHE) - DST
              </h2>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Department of Science &amp; Technology, Ministry of Science &amp; Tech, New Delhi
              </span>
</div>
</div>
<div className="flex md:flex-col items-end justify-between md:justify-start shrink-0 text-right">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">₹80,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ yr + ₹20k Cont.</span></span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/40 text-on-secondary-container mt-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm">88% Profile Match</span>
</div>
</div>
</div>
<div className="p-space-sm rounded-lg bg-surface-container flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-body-lg">lightbulb</span>
<span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">Matched Because:</span>
<div className="flex flex-wrap gap-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Top 1% Percentile in Class 12 State Board</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Pursuing Natural/Basic Sciences Course</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-primary hover:underline cursor-pointer flex items-center gap-0.5">
            Cut-off marks lookup <span className="material-symbols-outlined text-label-sm">north_east</span>
</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-tertiary-fixed text-on-tertiary-fixed font-label-sm text-label-sm">
<span className="material-symbols-outlined text-body-sm">schedule</span>
<span>Deadline: Dec 31, 2025</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm">account_balance</span>
<span>National Scholarship Portal (NSP) Portal Direct</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button onClick={() => alert("Coming soon: Save")} className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-body-md">bookmark_border</span>
<span>Save</span>
</button>
<button onClick={() => alert("Coming soon: Apply")} className="h-10 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm">
<span>View &amp; Apply</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest/80 rounded-xl p-space-lg shadow-sm transition-all flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-outline"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0 text-on-surface-variant">
<span className="material-symbols-outlined text-headline-lg">science</span>
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs mb-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Corporate CSR</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">Science Track</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">DEMO DATA</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface-variant">
                L&apos;Oréal India For Young Women In Science Scholarship 2024
              </h2>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Administered by L&apos;Oréal India Foundation • All India Selection
              </span>
</div>
</div>
<div className="flex md:flex-col items-end justify-between md:justify-start shrink-0 text-right">
<span className="font-headline-lg text-headline-lg text-on-surface-variant tracking-tight">₹2,50,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">total</span></span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant mt-1">
<span className="w-2 h-2 rounded-full bg-outline"></span>
<span className="font-label-sm text-label-sm">Ineligible Criterion</span>
</div>
</div>
</div>

<div className="p-space-sm rounded-lg bg-surface-container flex items-center gap-space-sm text-on-surface">
<span className="material-symbols-outlined text-tertiary text-headline-sm">info</span>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary">Eligibility Criteria Mismatch</span>
<span className="font-body-md text-body-md text-on-surface-variant">
              This scheme exclusively funds <strong>Female applicants</strong> pursuing higher education in STEM disciplines. {userName}&apos;s verified profile gender is Male.
            </span>
</div>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
<span className="material-symbols-outlined text-body-sm">schedule</span>
<span>Deadline: Closed for current cycle</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Displaying for peer referral / awareness</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-10 px-space-md rounded-lg bg-surface-container text-on-surface font-label-lg text-label-lg hover:bg-surface-container-high transition-colors flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm">share</span>
<span>Share with Classmate</span>
</button>
<button className="h-10 px-space-lg rounded-lg bg-surface-container-high text-on-surface-variant font-label-lg text-label-lg cursor-not-allowed opacity-75" disabled>
              Not Eligible
            </button>
</div>
</div>
</article>

<article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm hover:shadow-md transition-all flex flex-col gap-space-md relative overflow-hidden">
<div className="absolute top-0 left-0 bottom-0 w-1.5 bg-secondary"></div>
<div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
<div className="flex items-start gap-space-md">
<div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
<span className="material-symbols-outlined text-headline-lg text-secondary">account_balance</span>
</div>
<div className="flex flex-col">
<div className="flex flex-wrap items-center gap-space-xs mb-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-high text-primary font-label-sm text-label-sm">Central Government (MoMA)</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant">National Scholarship Portal</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">DEMO DATA</span>
</div>
<h2 className="font-headline-md text-headline-md text-on-surface hover:text-primary transition-colors cursor-pointer">
                Post-Matric Scholarship Scheme for Minorities 2024–25 (NSP)
              </h2>
<span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                Ministry of Minority Affairs (Govt. of India) • Verified via DigiLocker OTR
              </span>
</div>
</div>
<div className="flex md:flex-col items-end justify-between md:justify-start shrink-0 text-right">
<span className="font-headline-lg text-headline-lg text-on-surface tracking-tight">₹30,000 <span className="font-body-sm text-body-sm text-on-surface-variant font-normal">/ year</span></span>
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-secondary-container/40 text-on-secondary-container mt-1">
<span className="w-2 h-2 rounded-full bg-secondary"></span>
<span className="font-label-sm text-label-sm">89% Match Potential</span>
</div>
</div>
</div>
<div className="p-space-sm rounded-lg bg-secondary-container/20 flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-body-lg">auto_awesome</span>
<span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">Matched Because:</span>
<div className="flex flex-wrap gap-1">
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Undergraduate Engineering Admission</span>
<span className="px-space-xs py-0.5 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm">Family Income &lt; ₹2.5 LPA (Verified)</span>
</div>
</div>
<span className="font-label-sm text-label-sm text-secondary hover:underline cursor-pointer flex items-center gap-0.5">
            View NSP guidelines <span className="material-symbols-outlined text-label-sm">north_east</span>
</span>
</div>
<div className="flex flex-wrap items-center justify-between gap-space-md pt-space-xs">
<div className="flex items-center gap-space-md">
<div className="flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm">
<span className="material-symbols-outlined text-body-sm text-tertiary">schedule</span>
<span>Deadline: Dec 10, 2025</span>
</div>
<div className="flex items-center gap-1 text-on-surface-variant font-body-sm text-body-sm">
<span className="material-symbols-outlined text-body-sm text-secondary">fingerprint</span>
<span>Aadhaar Biometric OTR Enabled</span>
</div>
</div>
<div className="flex items-center gap-space-xs">
<button className="h-10 px-space-md rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-lg text-label-lg transition-colors flex items-center gap-1.5">
<span className="material-symbols-outlined text-body-md">bookmark_border</span>
<span>Save</span>
</button>
<button className="h-10 px-space-lg rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg hover:bg-primary transition-colors flex items-center gap-1.5 shadow-sm">
<span>View &amp; Apply</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</button>
</div>
</div>
</article>

<div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col md:flex-row items-center justify-between gap-space-md mt-space-sm">
<div className="flex items-center gap-space-sm text-on-surface-variant font-body-md text-body-md">
<span>Showing <strong>1 – 5</strong> of <strong>24</strong> verified schemes</span>
<span className="text-outline-variant">•</span>
<span>Updated 4 hours ago via NSP Bot</span>
</div>
<div className="flex items-center gap-space-xs">
<button className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface disabled:opacity-50 transition-colors" disabled>
<span className="material-symbols-outlined text-headline-sm">chevron_left</span>
</button>
<button className="w-9 h-9 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg">1</button>
<button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors">2</button>
<button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors">3</button>
<button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors">4</button>
<button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface font-label-lg text-label-lg transition-colors">5</button>
<button className="p-2 rounded-lg bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-colors">
<span className="material-symbols-outlined text-headline-sm">chevron_right</span>
</button>
</div>
</div>
</section>
</div>

<div className="fixed bottom-6 right-6 z-40 flex items-center">
<div className="bg-surface-container-lowest shadow-xl rounded-full p-2 pl-4 flex items-center gap-space-md">
<div className="flex items-center gap-space-xs cursor-pointer">
<div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
<span className="material-symbols-outlined text-body-lg">auto_awesome</span>
</div>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Not sure what you qualify for?</span>
<span className="font-body-sm text-body-sm text-secondary">Ask EduGuide AI to run an instant eligibility audit</span>
</div>
</div>
<button onClick={() => alert("Coming soon: AI Check")} className="h-10 px-space-md rounded-full bg-secondary text-on-secondary font-label-lg text-label-lg hover:opacity-90 transition-opacity flex items-center gap-1 shadow-sm">
<span>Start AI Check</span>
<span className="material-symbols-outlined text-body-md">arrow_forward</span>
</button>
<button className="w-8 h-8 rounded-full hover:bg-surface-container flex items-center justify-center text-on-surface-variant transition-colors" title="Dismiss suggestion">
<span className="material-symbols-outlined text-body-md">close</span>
</button>
</div>
</div>


</div></main>
    </>
  );
}
