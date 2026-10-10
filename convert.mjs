import fs from 'fs';

function htmlToJsx(html) {
  let jsx = html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/class=/g, 'className=')
    .replace(/for=/g, 'htmlFor=')
    .replace(/onSubmit="[^"]*"/gi, 'onSubmit={(e) => e.preventDefault()}')
    .replace(/\sselected(?:="[^"]*")?/gi, '')
    .replace(/checked="[^"]*"/gi, 'defaultChecked')
    .replace(/checked /g, 'defaultChecked ')
    .replace(/required="[^"]*"/g, 'required')
    .replace(/disabled="[^"]*"/g, 'disabled')
    .replace(/<!--[\s\S]*?-->/g, '')
    // Fix unclosed tags by adding closing slash
    .replace(/<img\s([^>]*?)(?<!\/)>/g, '<img $1 />')
    .replace(/<input\s([^>]*?)(?<!\/)>/g, '<input $1 />')
    .replace(/<hr\s([^>]*?)(?<!\/)>/g, '<hr $1 />')
    .replace(/<br\s([^>]*?)(?<!\/)>/g, '<br $1 />')
    .replace(/<img\s*>/g, '<img />')
    .replace(/<hr\s*>/g, '<hr />')
    .replace(/<br\s*>/g, '<br />')
    .replace(/<input\s*>/g, '<input />')
    // Remove attributes that break React
    .replace(/onclick="[^"]*"/g, '')
    .replace(/style="[^"]*"/g, '')
    // Fix SVG properties
    .replace(/stroke-width/g, 'strokeWidth')
    .replace(/stroke-linecap/g, 'strokeLinecap')
    .replace(/stroke-linejoin/g, 'strokeLinejoin')
    .replace(/fill-rule/g, 'fillRule')
    .replace(/clip-rule/g, 'clipRule')
    .replace(/viewbox/g, 'viewBox')
    .replace(/xmlns:xlink/g, 'xmlnsXlink')
    // Replace unescaped <>
    .replace(/>80th/g, '&gt;80th')
    .replace(/<\s*₹/g, '&lt; ₹')
    .replace(/<\s*2\.5L/g, '&lt; 2.5L')
    // Replace href="#"
    .replace(/href="#"/g, 'href="/"');

  return jsx;
}

const landingContent = fs.readFileSync('temp_html/landing.html', 'utf-8');

const headerMatch = landingContent.match(/<header[^>]*>([\s\S]*?)<\/header>/);
if (headerMatch) {
  let headerJsx = htmlToJsx(headerMatch[0]);
  
  // Fix header links
  headerJsx = headerJsx.replace(/data-path="scholarship-directory" href="\/"/g, 'href="/scholarships"');
  headerJsx = headerJsx.replace(/data-path="dashboard" href="\/"/g, 'href="/dashboard"');
  headerJsx = headerJsx.replace(/<img alt="EduGuide AI Brand Logo"/, '<Link href="/"><img alt="EduGuide AI Brand Logo"');
  headerJsx = headerJsx.replace(/EduGuide AI<\/span><\/div>/, 'EduGuide AI</span></Link></div>');

  if (!headerJsx.includes('/dashboard')) {
    headerJsx = headerJsx.replace(
      /<a className="[^"]*" data-path="ai-eligibility-engine" href="\/">AI Eligibility Engine<\/a>/,
      `$&<Link className="font-label-lg text-label-lg text-on-surface-variant hover:text-on-surface transition-colors" href="/dashboard">Dashboard</Link>`
    );
  }

  // Convert header a tags to Link
  headerJsx = headerJsx.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');

  const headerComponent = `import * as React from "react";
import Link from "next/link";

export function Header() {
  return (
    ${headerJsx}
  );
}
`;
  fs.writeFileSync('src/components/layout/header.tsx', headerComponent);
}

function processFile(inputFile, outputComponent, outPath) {
  const content = fs.readFileSync(inputFile, 'utf-8');
  const mainMatch = content.match(/<main[^>]*>([\s\S]*?)<\/main>/);
  if (!mainMatch) return;
  
  let mainContent = htmlToJsx(mainMatch[0]);
  mainContent = mainContent.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');

  const tsx = `import * as React from "react";
import Link from "next/link";
import { Header } from "@/components/layout/header";

export default function ${outputComponent}() {
  return (
    <>
      <Header />
      ${mainContent}
    </>
  );
}
`;
  fs.writeFileSync(outPath, tsx);
}

processFile('temp_html/landing.html', 'LandingPage', 'src/app/page.tsx');
processFile('temp_html/discovery.html', 'ScholarshipsPage', 'src/app/scholarships/page.tsx');
processFile('temp_html/detail.html', 'ScholarshipDetail', 'src/app/scholarships/[id]/page.tsx');
processFile('temp_html/dashboard.html', 'DashboardPage', 'src/app/dashboard/page.tsx');

console.log("Conversion complete.");
