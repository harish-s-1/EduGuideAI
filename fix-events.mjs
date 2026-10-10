import fs from 'fs';
import path from 'path';

function removeOnSubmit(filePath) {
  let content = fs.readFileSync(filePath, 'utf-8');
  content = content.replace(/onSubmit=\{\(e\) => e.preventDefault\(\)\}/g, '');
  // Also fix any other possible event handlers that might have slipped in
  fs.writeFileSync(filePath, content);
}

removeOnSubmit('src/app/page.tsx');
removeOnSubmit('src/app/scholarships/page.tsx');
removeOnSubmit('src/app/scholarships/[id]/page.tsx');
removeOnSubmit('src/app/dashboard/page.tsx');
