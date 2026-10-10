import fs from 'fs';
import path from 'path';

function fixEslint(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      fixEslint(fullPath);
    } else if (fullPath.endsWith('.tsx')) {
      let content = fs.readFileSync(fullPath, 'utf-8');
      
      // We only want to replace ' inside JSX text, which is between > and <
      // A safe-ish regex for text between tags:
      content = content.replace(/>([^<]+)</g, (match, text) => {
        return '>' + text.replace(/'/g, '&apos;').replace(/"/g, '&quot;') + '<';
      });

      fs.writeFileSync(fullPath, content);
    }
  }
}

fixEslint('src/app');

// Fix input.tsx empty interface
let inputTsx = fs.readFileSync('src/components/ui/input.tsx', 'utf-8');
inputTsx = inputTsx.replace(
  /export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> \{\}/,
  'export type InputProps = React.InputHTMLAttributes<HTMLInputElement>;'
);
fs.writeFileSync('src/components/ui/input.tsx', inputTsx);

console.log("Fixed ESLint errors");
