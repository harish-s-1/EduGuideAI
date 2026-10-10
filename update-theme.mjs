import fs from 'fs';

const stitchTheme = {
  colors: {
    "primary-fixed-dim": "#b4c5ff",
    "on-secondary-fixed": "#00201d",
    "tertiary-fixed": "#ffdcc3",
    "tertiary-container": "#a65900",
    "secondary-container": "#86f2e4",
    "secondary": "#006a61",
    "background": "#faf8ff",
    "tertiary-fixed-dim": "#ffb77d",
    "surface-variant": "#dae2fd",
    "on-surface": "#131b2e",
    "primary-container": "#2563eb",
    "surface-bright": "#faf8ff",
    "surface-container-high": "#e2e7ff",
    "on-error-container": "#93000a",
    "primary": "#004ac6",
    "on-tertiary-fixed": "#2f1500",
    "secondary-fixed-dim": "#6bd8cb",
    "inverse-primary": "#b4c5ff",
    "surface-dim": "#d2d9f4",
    "on-secondary-container": "#006f66",
    "outline": "#737686",
    "error": "#ba1a1a",
    "on-secondary": "#ffffff",
    "on-tertiary": "#ffffff",
    "surface-tint": "#0053db",
    "surface-container-lowest": "#ffffff",
    "on-tertiary-container": "#ffede1",
    "on-primary-fixed-variant": "#003ea8",
    "on-background": "#131b2e",
    "surface-container": "#eaedff",
    "secondary-fixed": "#89f5e7",
    "tertiary": "#824500",
    "on-primary-fixed": "#00174b",
    "on-primary-container": "#eeefff",
    "primary-fixed": "#dbe1ff",
    "on-error": "#ffffff",
    "inverse-on-surface": "#eef0ff",
    "surface": "#faf8ff",
    "on-secondary-fixed-variant": "#005049",
    "on-tertiary-fixed-variant": "#6e3900",
    "on-primary": "#ffffff",
    "outline-variant": "#c3c6d7",
    "on-surface-variant": "#434655",
    "surface-container-low": "#f2f3ff",
    "error-container": "#ffdad6",
    "inverse-surface": "#283044",
    "surface-container-highest": "#dae2fd"
  },
  borderRadius: {
    "DEFAULT": "0.25rem",
    "lg": "0.5rem",
    "xl": "0.75rem",
    "full": "9999px"
  },
  spacing: {
    "margin-mobile": "1rem",
    "space-sm": "0.5rem",
    "space-xl": "2rem",
    "gutter": "1.5rem",
    "space-lg": "1.5rem",
    "gutter-mobile": "1rem",
    "space-xs": "0.25rem",
    "space-md": "1rem",
    "margin": "2rem"
  },
  fontSize: {
    "label-lg": ["14px", { "lineHeight": "20px", "fontWeight": "600" }],
    "headline-sm": ["16px", { "lineHeight": "24px", "fontWeight": "600" }],
    "label-sm": ["11px", { "lineHeight": "14px", "letterSpacing": "0.03em", "fontWeight": "700" }],
    "headline-lg": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
    "body-lg": ["16px", { "lineHeight": "24px", "fontWeight": "400" }],
    "body-md": ["14px", { "lineHeight": "20px", "fontWeight": "400" }],
    "headline-lg-mobile": ["24px", { "lineHeight": "32px", "letterSpacing": "-0.01em", "fontWeight": "600" }],
    "headline-md": ["20px", { "lineHeight": "28px", "letterSpacing": "-0.005em", "fontWeight": "600" }],
    "headline-xl-mobile": ["28px", { "lineHeight": "36px", "letterSpacing": "-0.01em", "fontWeight": "700" }],
    "body-sm": ["12px", { "lineHeight": "18px", "fontWeight": "400" }],
    "label-md": ["12px", { "lineHeight": "16px", "letterSpacing": "0.01em", "fontWeight": "600" }],
    "headline-xl": ["36px", { "lineHeight": "44px", "letterSpacing": "-0.02em", "fontWeight": "700" }]
  }
};

let cssContent = `@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200');

@theme inline {\n`;

for (const [key, value] of Object.entries(stitchTheme.colors)) {
  cssContent += `  --color-${key}: ${value};\n`;
}

for (const [key, value] of Object.entries(stitchTheme.spacing)) {
  cssContent += `  --spacing-${key}: ${value};\n`;
}

for (const [key, value] of Object.entries(stitchTheme.borderRadius)) {
  if (key === 'DEFAULT') {
    cssContent += `  --radius: ${value};\n`;
  } else {
    cssContent += `  --radius-${key}: ${value};\n`;
  }
}

for (const [key, value] of Object.entries(stitchTheme.fontSize)) {
  cssContent += `  --text-${key}: ${value[0]};\n`;
  cssContent += `  --text-${key}--line-height: ${value[1].lineHeight};\n`;
  cssContent += `  --text-${key}--font-weight: ${value[1].fontWeight};\n`;
  if (value[1].letterSpacing) {
    cssContent += `  --text-${key}--letter-spacing: ${value[1].letterSpacing};\n`;
  }
}

// Map the family
cssContent += `  --font-label-lg: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-headline-sm: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-label-sm: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-headline-lg: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-body-lg: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-body-md: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-headline-lg-mobile: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-headline-md: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-headline-xl-mobile: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-body-sm: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-label-md: var(--font-plus-jakarta-sans);\n`;
cssContent += `  --font-headline-xl: var(--font-plus-jakarta-sans);\n`;
cssContent += `}\n`;

fs.writeFileSync('src/app/globals.css', cssContent);
console.log("Updated globals.css with Stitch theme");
