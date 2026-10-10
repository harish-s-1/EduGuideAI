"use client";
import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";
import { useAuth } from "@/lib/auth-context";

export default function ScholarshipDetail() {
  const { user } = useAuth();
  const userName = user?.name || "Aarav Sharma";
  
  return (
    <>
      <Header />
      <main className="relative w-full pt-16 bg-surface px-gutter"><div className="flex flex-col w-full pb-space-xl">

<div className="flex flex-col gap-space-sm pt-space-md mb-space-md">
<div className="flex flex-wrap items-center justify-between gap-space-sm">
<nav className="flex items-center gap-space-xs font-body-sm text-body-sm text-on-surface-variant">
<Link className="hover:text-primary transition-colors" href="/">Scholarships</Link>
<span className="material-symbols-outlined text-body-sm text-outline">chevron_right</span>
<Link className="hover:text-primary transition-colors" href="/">Undergraduate</Link>
<span className="material-symbols-outlined text-body-sm text-outline">chevron_right</span>
<Link className="hover:text-primary transition-colors" href="/">Engineering</Link>
<span className="material-symbols-outlined text-body-sm text-outline">chevron_right</span>
<span className="font-label-md text-label-md text-on-surface truncate max-w-xs md:max-w-md">Reliance Foundation UG Scholarship</span>
</nav>

<div className="flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm shadow-sm">
<span className="h-2 w-2 rounded-full bg-secondary animate-pulse"></span>
<span>Registry Sync: Active • Ref #RF-2025-UG91</span>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-high text-on-surface text-body-sm">
<span className="material-symbols-outlined text-tertiary text-body-lg flex-shrink-0 mt-0.5">verified</span>
<div className="flex flex-col md:flex-row md:items-center justify-between w-full gap-space-xs">
<p className="font-body-sm text-body-sm text-on-surface-variant">
<span className="font-label-sm text-label-sm uppercase px-1.5 py-0.5 rounded bg-tertiary-fixed text-on-tertiary-fixed mr-1 font-bold">DEMO DATA</span>
          Specification sourced from official Foundation guidelines (2025 revision). Always verify parameters on the foundation portal prior to final submission.
        </p>
<span className="font-label-sm text-label-sm text-secondary font-semibold flex items-center gap-1 flex-shrink-0 cursor-pointer hover:underline">
          Audit Trail Log <span className="material-symbols-outlined text-label-sm">arrow_forward</span>
</span>
</div>
</div>
</div>

<div className="relative overflow-hidden rounded-xl bg-surface-container-lowest p-space-lg shadow-sm mb-space-lg">

<div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-secondary-container/20 blur-3xl pointer-events-none"></div>
<div className="absolute right-1/3 -bottom-20 w-64 h-64 rounded-full bg-primary-fixed/25 blur-3xl pointer-events-none"></div>
<div className="relative z-10 flex flex-col gap-space-lg">
<div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-md">
<div className="flex items-start gap-space-md">

<div className="w-14 h-14 rounded-xl bg-surface-container flex items-center justify-center flex-shrink-0 shadow-sm text-primary">
<span className="material-symbols-outlined text-headline-lg">corporate_fare</span>
</div>
<div className="flex flex-col gap-0.5">
<div className="flex flex-wrap items-center gap-space-xs">
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant uppercase">Reliance Foundation • CSR Trust</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-primary">Merit-cum-Means Scheme</span>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-secondary-fixed text-on-secondary-fixed">Verified Partner</span>
</div>
<h1 className="font-headline-lg text-headline-lg text-on-surface mt-1">
              Reliance Foundation Undergraduate Scholarships 2025–26
            </h1>
<p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
              Nurturing undergraduate excellence in India to empower leaders of tomorrow across Technology, Engineering, Pure Sciences, and Allied Disciplines.
            </p>
</div>
</div>

<div className="flex items-center gap-space-md p-space-sm px-space-md rounded-xl bg-surface-container-low flex-shrink-0">
<div className="relative w-14 h-14 flex items-center justify-center">
<svg className="w-14 h-14 transform -rotate-90" viewBox="0 0 36 36">
<path className="text-surface-container" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
<path className="text-secondary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" stroke-dasharray="96, 100" strokeLinecap="round" strokeWidth="3.5"></path>
</svg>
<span className="absolute font-headline-sm text-headline-sm text-on-surface">96%</span>
</div>
<div className="flex flex-col">
<span className="font-label-sm text-label-sm uppercase text-secondary font-bold flex items-center gap-1">
<span className="material-symbols-outlined text-label-sm">auto_awesome</span> High Fit Rating
            </span>
<span className="font-label-lg text-label-lg text-on-surface">{userName}</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">5/5 Core Criteria Met</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-space-sm">
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm text-primary">payments</span> TOTAL GRANT SUM
          </span>
<span className="font-headline-md text-headline-md text-on-surface">Up to ₹2,00,000</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Staggered across degree tenure</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm text-secondary">group</span> TOTAL SCHOLARS
          </span>
<span className="font-headline-md text-headline-md text-on-surface">5,000 Scholars</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pan-India allocation quota</span>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm text-tertiary">schedule</span> SUBMISSION DEADLINE
          </span>
<span className="font-headline-md text-headline-md text-tertiary flex items-center gap-1">
            Nov 15, 2025
          </span>
<div className="flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-tertiary"></span>
<span className="font-label-sm text-label-sm text-on-surface-variant">18 Days Remaining • 23:59 IST</span>
</div>
</div>
<div className="p-space-md rounded-lg bg-surface-container-low flex flex-col gap-1">
<span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-body-sm text-primary">currency_rupee</span> DISBURSAL MODE
          </span>
<span className="font-headline-md text-headline-md text-on-surface">Direct Bank DBT</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">NPCI Aadhaar-Seeded Accounts</span>
</div>
</div>

<div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
<div className="flex flex-wrap items-center gap-space-sm">
<button className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-primary-container text-on-primary font-label-lg text-label-lg shadow-sm hover:opacity-95 transition-opacity">
<span className="material-symbols-outlined text-body-lg">auto_awesome</span>
<span>Start Application in EduGuide Copilot</span>
</button>
<Link className="flex items-center gap-space-xs px-space-md py-2.5 rounded-lg bg-surface-container-high text-on-surface font-label-lg text-label-lg hover:bg-surface-container transition-colors" href="https://reliancefoundation.org" rel="noopener" target="_blank">
<span>Visit Official Application Portal</span>
<span className="material-symbols-outlined text-label-lg text-secondary">verified</span>
<span className="material-symbols-outlined text-body-sm">open_in_new</span>
</Link>
</div>
<div className="flex items-center gap-space-xs">
<button onClick={() => alert("Coming soon: Save")} className="flex items-center gap-space-xs px-space-sm py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors" id="saveBtn">
<span className="material-symbols-outlined text-body-md text-on-surface-variant" id="bookmarkIcon">bookmark_border</span>
<span id="saveText">Save to Tracker</span>
</button>
<button onClick={() => alert("Coming soon: Share")} className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Share Scheme">
<span className="material-symbols-outlined text-body-md">share</span>
</button>
<button onClick={() => alert("Coming soon: Download")} className="p-2 rounded-lg bg-surface-container text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Download Official PDF Guidelines">
<span className="material-symbols-outlined text-body-md">download</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex items-center gap-space-xs p-1 rounded-xl bg-surface-container-low mb-space-lg overflow-x-auto shadow-sm">
<button className="tab-btn active px-space-md py-2 rounded-lg font-label-lg text-label-lg bg-surface-container-lowest text-primary shadow-sm whitespace-nowrap transition-all" data-tab="overview">
      Overview &amp; Benefits
    </button>
<button className="tab-btn px-space-md py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="eligibility">
      Detailed Eligibility Criteria
    </button>
<button className="tab-btn px-space-md py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="documents">
      Required Documents
    </button>
<button className="tab-btn px-space-md py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all" data-tab="selection">
      Selection Process
    </button>
<button className="tab-btn px-space-md py-2 rounded-lg font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container whitespace-nowrap transition-all flex items-center gap-1" data-tab="ai-assistant">
<span className="material-symbols-outlined text-secondary text-body-md">psychology</span>
      AI Application Assistant
    </button>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">

<div className="lg:col-span-8 flex flex-col gap-space-lg">

<section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm" id="eligibility-matrix">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-xs">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-headline-sm">rule_settings</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Explainable Eligibility Analysis</h2>
</div>
<div className="flex items-center gap-space-xs px-2.5 py-1 rounded-full bg-secondary-container/40 text-on-secondary-container font-label-sm text-label-sm font-semibold">
<span className="material-symbols-outlined text-label-sm text-secondary">verified</span>
            Auto-audited against DigiLocker Profile
          </div>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
          EduGuide AI defaultChecked your stored academic and demographic credentials against the 2025 Foundation gazette.
        </p>

<div className="flex flex-col gap-space-sm mt-space-xs">

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-headline-sm mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Citizenship &amp; Domicile</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mandate: Resident Indian Citizen holding verified proof</span>
</div>
</div>
<div className="flex items-center gap-space-sm pl-8 md:pl-0">
<div className="flex flex-col md:items-end">
<span className="font-label-md text-label-md text-on-surface">{userName} (Indian Citizen)</span>
<span className="font-body-sm text-body-sm text-secondary flex items-center gap-0.5">
<span className="material-symbols-outlined text-label-sm">verified_user</span> Aadhaar Verified
                </span>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">MATCH</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-headline-sm mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Class 12 Academic Foundation</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mandate: Minimum 60% aggregate in Higher Secondary Board</span>
</div>
</div>
<div className="flex items-center gap-space-sm pl-8 md:pl-0">
<div className="flex flex-col md:items-end">
<span className="font-label-md text-label-md text-on-surface">91.4% (CBSE Class XII - PCM)</span>
<span className="font-body-sm text-body-sm text-secondary font-semibold">+31.4% above requirement</span>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">EXCEEDS</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-headline-sm mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Current Degree Enrollment</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mandate: Enrolled in 1st to 3rd year regular recognized UG course</span>
</div>
</div>
<div className="flex items-center gap-space-sm pl-8 md:pl-0">
<div className="flex flex-col md:items-end">
<span className="font-label-md text-label-md text-on-surface">B.Tech Computer Science (3rd Year)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">AICTE Recognized Institute</span>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">MATCH</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-surface-container-low gap-space-sm hover:bg-surface-container transition-colors">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-secondary text-headline-sm mt-0.5">check_circle</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Annual Household Income</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mandate: Under ₹15 LPA (Priority quota for income &lt; ₹2.5 LPA)</span>
</div>
</div>
<div className="flex items-center gap-space-sm pl-8 md:pl-0">
<div className="flex flex-col md:items-end">
<span className="font-label-md text-label-md text-on-surface">₹4,80,000 / year (Declared)</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Fits tier-2 financial cohort</span>
</div>
<span className="px-2.5 py-1 rounded bg-secondary-fixed text-on-secondary-fixed font-label-sm text-label-sm font-bold">ELIGIBLE</span>
</div>
</div>

<div className="flex flex-col md:flex-row md:items-center justify-between p-space-md rounded-lg bg-tertiary-fixed/30 gap-space-sm">
<div className="flex items-start gap-space-sm">
<span className="material-symbols-outlined text-tertiary text-headline-sm mt-0.5">warning</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-surface">Online Aptitude Assessment Test</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Mandate: Compulsory 60-minute proctored examination post-form submission</span>
</div>
</div>
<div className="flex items-center gap-space-sm pl-8 md:pl-0">
<div className="flex flex-col md:items-end">
<span className="font-label-md text-label-md text-tertiary font-bold">Action Pending</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Practice module active</span>
</div>
<button onClick={() => alert("Coming soon: Mock Test")} className="px-2.5 py-1 rounded bg-tertiary text-on-tertiary font-label-sm text-label-sm font-bold hover:opacity-90">TAKE MOCK</button>
</div>
</div>
</div>

<div className="p-space-md rounded-lg bg-secondary-fixed/30 flex items-center gap-space-sm mt-space-xs">
<span className="material-symbols-outlined text-secondary text-headline-md flex-shrink-0">workspace_premium</span>
<div className="flex flex-col">
<span className="font-label-lg text-label-lg text-on-secondary-fixed">Recommendation Verdict: Optimal Fit</span>
<span className="font-body-sm text-body-sm text-on-surface">
              You meet 5 of 5 baseline qualifications. {user?.name ? user.name.split(" ")[0] : "Aarav"} ranks within the top 8th percentile of eligible candidates in the Engineering category for this scheme.
            </span>
</div>
</div>
</section>

<section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-headline-sm">alt_route</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Step-by-Step Application Blueprint</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Standardized 4-Stage Workflow</span>
</div>
<div className="relative flex flex-col gap-space-lg mt-space-sm pl-4">

<div className="absolute left-7 top-4 bottom-4 w-0.5 bg-surface-container"></div>

<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md flex-shrink-0 z-10 shadow-sm">
              1
            </div>
<div className="flex flex-col gap-1 w-full bg-surface-container-low p-space-md rounded-lg">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Digital Registration &amp; Form Submission</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Portal Active</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Complete candidate biodata, demographic details, parent declarations, and current educational credentials through the official portal.
              </p>
<div className="flex items-center gap-space-sm pt-space-xs">
<span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
<span className="material-symbols-outlined text-label-sm">timer</span> Approx. 25 mins to complete
                </span>
<span className="text-outline text-label-sm">•</span>
<span className="font-body-sm text-body-sm text-primary font-semibold">DigiLocker autofill supported</span>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex-shrink-0 z-10 flex items-center justify-center">
              2
            </div>
<div className="flex flex-col gap-1 w-full bg-surface-container-low p-space-md rounded-lg">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Online Proctored Aptitude Test</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">Window: Nov 20–25, 2025</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                60-minute automated test comprising 60 multiple choice questions. Modules: Verbal Ability (20 Qs), Analytical Reasoning (20 Qs), and Numerical Ability (20 Qs).
              </p>
<div className="flex items-center gap-space-sm pt-space-xs">
<button className="font-label-sm text-label-sm text-primary font-semibold hover:underline flex items-center gap-1">
<span className="material-symbols-outlined text-label-sm">play_circle</span> Try 15-Minute EduGuide Diagnostic Test
                </button>
</div>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex-shrink-0 z-10 flex items-center justify-center">
              3
            </div>
<div className="flex flex-col gap-1 w-full bg-surface-container-low p-space-md rounded-lg">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">Document Verification &amp; Eligibility Audit</span>
<span className="font-label-sm text-label-sm text-on-surface-variant">Dec 2025</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Shortlisted test qualifiers submit digitally signed marksheets, tehsildar-attested income certificates, and institutional bonafide letters.
              </p>
</div>
</div>

<div className="relative flex items-start gap-space-md">
<div className="w-7 h-7 rounded-full bg-surface-container-high text-on-surface font-label-md text-label-md flex-shrink-0 z-10 flex items-center justify-center">
              4
            </div>
<div className="flex flex-col gap-1 w-full bg-surface-container-low p-space-md rounded-lg">
<div className="flex flex-wrap items-center justify-between gap-space-xs">
<span className="font-label-lg text-label-lg text-on-surface">National Merit Declaration &amp; DBT Grant Disbursal</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">Jan 2026 Disbursal</span>
</div>
<p className="font-body-md text-body-md text-on-surface-variant">
                Publication of 5,000 scholars. Year-1 stipend (₹50,000) directly remitted to beneficiary&apos;s verified Aadhaar-linked savings account.
              </p>
</div>
</div>
</div>
</section>

<section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-headline-sm">pie_chart</span>
<h2 className="font-headline-md text-headline-md text-on-surface">Past Cohort Allocation Trends</h2>
</div>
<span className="font-label-sm text-label-sm text-on-surface-variant">Official 2024 Cycle Analytics</span>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-space-md pt-space-xs">

<div className="flex flex-col gap-space-sm p-space-md rounded-lg bg-surface-container-low">
<span className="font-label-md text-label-md text-on-surface">Field of Study Breakdown</span>
<div className="flex items-center gap-space-md">

<svg className="w-24 h-24 transform -rotate-90 flex-shrink-0" viewBox="0 0 36 36">

<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#dae2fd" strokeWidth="4.5"></path>

<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#004ac6" stroke-dasharray="52, 100" strokeWidth="4.5"></path>

<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#006a61" stroke-dasharray="28, 100" stroke-dashoffset="-52" strokeWidth="4.5"></path>

<path d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="#824500" stroke-dasharray="20, 100" stroke-dashoffset="-80" strokeWidth="4.5"></path>
</svg>
<div className="flex flex-col gap-1 w-full font-body-sm text-body-sm">
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 text-on-surface"><span className="h-2 w-2 rounded-full bg-primary"></span> Engineering / Tech</span>
<span className="font-semibold text-on-surface">52%</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 text-on-surface"><span className="h-2 w-2 rounded-full bg-secondary"></span> Pure &amp; Life Sciences</span>
<span className="font-semibold text-on-surface">28%</span>
</div>
<div className="flex items-center justify-between">
<span className="flex items-center gap-1 text-on-surface"><span className="h-2 w-2 rounded-full bg-tertiary"></span> Allied Professions</span>
<span className="font-semibold text-on-surface">20%</span>
</div>
</div>
</div>
</div>

<div className="flex flex-col justify-between p-space-md rounded-lg bg-surface-container-low gap-space-sm">
<span className="font-label-md text-label-md text-on-surface">Gender &amp; Domicile Inclusivity</span>
<div className="flex flex-col gap-space-xs">
<div className="flex items-center justify-between font-body-sm text-body-sm">
<span className="text-on-surface-variant">Female Scholars Quota</span>
<span className="font-semibold text-on-surface">50% Minimum Reserved</span>
</div>
<div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
<div className="bg-secondary h-full rounded-full" ></div>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Last year achieved 53.4% representation across 28 states &amp; UTs.</span>
</div>
<div className="pt-space-xs flex items-center gap-space-xs text-primary font-label-sm text-label-sm">
<span className="material-symbols-outlined text-body-md">lightbulb</span>
<span>First-in-family graduates receive weighted merit points</span>
</div>
</div>
</div>
</section>
</div>

<div className="lg:col-span-4 flex flex-col gap-space-lg">

<section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center justify-between">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-primary text-headline-sm">folder_open</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">Pre-Flight Document Check</h3>
</div>
<span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-primary font-bold">3 of 4 Ready</span>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Audit of your DigiLocker vault files required for Reliance Foundation application.
        </p>

<div className="flex flex-col gap-space-sm mt-space-xs">

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-headline-sm mt-0.5">check_circle</span>
<div className="flex flex-col w-full">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Class 10 &amp; 12 Marksheets</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">VERIFIED</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">CBSE Digital Record #CBSE-22-9182</span>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-secondary text-headline-sm mt-0.5">check_circle</span>
<div className="flex flex-col w-full">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Government Photo ID (Aadhaar)</span>
<span className="font-label-sm text-label-sm text-secondary font-bold">LINKED</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">DigiLocker Auth • Masked: XXXX-8910</span>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low">
<span className="material-symbols-outlined text-primary text-headline-sm mt-0.5">description</span>
<div className="flex flex-col w-full">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">College Bonafide Letter</span>
<span className="font-label-sm text-label-sm text-primary font-bold">DRAFT READY</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Pre-filled with college dean address</span>
<Link className="font-label-sm text-label-sm text-primary underline mt-1 flex items-center gap-1" href="/">
<span className="material-symbols-outlined text-label-sm">download</span> Download PDF Draft Template
              </Link>
</div>
</div>

<div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-tertiary-fixed/40">
<span className="material-symbols-outlined text-tertiary text-headline-sm mt-0.5">error</span>
<div className="flex flex-col w-full">
<div className="flex items-center justify-between">
<span className="font-label-md text-label-md text-on-surface">Annual Income Certificate / ITR</span>
<span className="font-label-sm text-label-sm text-tertiary font-bold">ACTION NEEDED</span>
</div>
<span className="font-body-sm text-body-sm text-on-surface-variant">Vault contains FY22-23 certificate. Scheme requires FY23-24 issued after April 2024.</span>
<button className="mt-2 w-full py-1.5 px-space-sm rounded bg-surface-container-lowest text-tertiary font-label-sm text-label-sm font-bold shadow-sm hover:bg-surface-container transition-colors flex items-center justify-center gap-1">
<span className="material-symbols-outlined text-label-sm">upload_file</span>
                Upload Valid FY24 Certificate
              </button>
</div>
</div>
</div>
<button onClick={() => alert("Coming soon: DigiLocker Token")} className="w-full py-2.5 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-colors flex items-center justify-center gap-space-xs mt-space-xs">
<span className="material-symbols-outlined text-body-md">lock</span>
<span>Generate Unified DigiLocker Token</span>
</button>
</section>

<section className="flex flex-col gap-space-md rounded-xl bg-surface-container-lowest p-space-lg shadow-sm">
<div className="flex items-center gap-space-xs">
<span className="material-symbols-outlined text-secondary text-headline-sm">smart_toy</span>
<h3 className="font-headline-sm text-headline-sm text-on-surface">EduGuide Copilot Tools</h3>
</div>
<p className="font-body-sm text-body-sm text-on-surface-variant">
          Assistance modules specifically calibrated for Reliance Foundation questions.
        </p>
<div className="flex flex-col gap-space-xs">
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-body-md">psychology_alt</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">Aptitude Test Mock Drill</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Patterned on 2024 questions</span>
</div>
</div>
<span className="material-symbols-outlined text-body-md text-on-surface-variant">chevron_right</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-body-md">rate_review</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">SOP &amp; Ambition Essay Reviewer</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">Get instant tone &amp; clarity score</span>
</div>
</div>
<span className="material-symbols-outlined text-body-md text-on-surface-variant">chevron_right</span>
</div>
<div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between hover:bg-surface-container cursor-pointer transition-colors">
<div className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-primary text-body-md">notification_important</span>
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface">WhatsApp Deadline Alerts</span>
<span className="font-body-sm text-body-sm text-on-surface-variant">+91 98765 XXXXX (Linked)</span>
</div>
</div>
<span className="material-symbols-outlined text-body-md text-secondary">toggle_on</span>
</div>
</div>
</section>

<section className="flex flex-col gap-space-sm rounded-xl bg-surface-container p-space-md shadow-sm">
<div className="flex items-center gap-space-xs text-on-surface font-label-md text-label-md">
<span className="material-symbols-outlined text-secondary text-body-md">verified</span>
<span>Verified Government &amp; CSR Registry</span>
</div>
<div className="flex flex-col gap-space-xs font-body-sm text-body-sm text-on-surface-variant pt-1">
<div className="flex justify-between items-center">
<span>Primary Host:</span>
<Link className="text-primary hover:underline font-label-sm text-label-sm truncate max-w-[180px]" href="https://reliancefoundation.org" rel="noopener" target="_blank">
              reliancefoundation.org/scholarships
            </Link>
</div>
<div className="flex justify-between items-center">
<span>Official Helpline:</span>
<span className="text-on-surface font-label-sm text-label-sm">+91 (011) 4118 7000</span>
</div>
<div className="flex justify-between items-center">
<span>Support Desk:</span>
<span className="text-on-surface font-label-sm text-label-sm">rf.scholarships@reliancefoundation.org</span>
</div>
<div className="flex justify-between items-center">
<span>Govt NSP Compliance:</span>
<span className="text-secondary font-semibold font-label-sm text-label-sm">Cross-compatible (Direct Disbursal)</span>
</div>
</div>
<div className="p-space-xs rounded bg-surface-container-lowest flex items-center justify-between mt-space-xs text-label-sm font-label-sm text-on-surface-variant">
<span className="flex items-center gap-1">
<span className="material-symbols-outlined text-secondary text-label-md">done_all</span>
            Audited by EduGuide Verification Desk
          </span>
<span className="font-semibold text-on-surface">3 days ago</span>
</div>
</section>
</div>
</div>

<div className="fixed bottom-4 left-64 right-6 z-30 pointer-events-none flex justify-center">
<div className="pointer-events-auto flex items-center justify-between gap-space-lg px-space-lg py-3 rounded-full bg-surface-container-lowest/90 backdrop-blur-md shadow-xl max-w-3xl w-full">
<div className="flex items-center gap-space-md">
<div className="flex flex-col">
<span className="font-label-md text-label-md text-on-surface font-bold">Reliance Foundation UG Scholarships 2025–26</span>
<span className="font-body-sm text-body-sm text-tertiary font-semibold flex items-center gap-1">
<span className="h-2 w-2 rounded-full bg-tertiary"></span> 18 days left (Nov 15) • ₹2,00,000 grant
          </span>
</div>
</div>
<div className="flex items-center gap-space-sm flex-shrink-0">
<button className="px-space-md py-2 rounded-full bg-primary-container text-on-primary font-label-md text-label-md shadow-sm hover:opacity-95 transition-opacity flex items-center gap-1">
<span className="material-symbols-outlined text-body-md">rocket_launch</span>
<span>Apply with AI Copilot</span>
</button>
</div>
</div>
</div>
</div>
</main>
    </>
  );
}
