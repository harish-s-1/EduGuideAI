import fs from 'fs';

function fixLinks(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(
    /<button([^>]*)>(\s*Review Full Scheme &amp; Apply\s*)<\/button>/g,
    '<Link href="/scholarships/reliance-foundation"$1>$2</Link>'
  );
  content = content.replace(
    /<button([^>]*)>(\s*Check Instant Match\s*)<\/button>/g,
    '<Link href="/scholarships/reliance-foundation"$1>$2</Link>'
  );
  fs.writeFileSync(filePath, content);
}

fixLinks('src/app/scholarships/page.tsx');
fixLinks('src/app/page.tsx');
console.log("Updated links to detail page safely");
