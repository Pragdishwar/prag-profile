const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'data', 'portfolio.ts');
let content = fs.readFileSync(filePath, 'utf8');

const getMicrolink = (url) => `https://api.microlink.io/?url=${encodeURIComponent(url.trim())}&screenshot=true&meta=false&embed=screenshot.url`;

const newProjects = [
  { id: 'orca', url: 'https://orca-nav.vercel.app/' },
  { id: 'equeue', url: 'https://github.com/Pragdishwar/Equeue' },
  { id: 'argus', url: 'https://argus-red.vercel.app' },
  { id: 'anomaly-grammar', url: 'https://anomaly-grammar.vercel.app' },
  { id: 'earn2equity', url: 'https://earn2equity.vercel.app' },
  { id: 'routemonk', url: 'https://routemonk-pro.vercel.app' },
  { id: 'borderland-arena', url: 'https://borderland-arena.vercel.app' },
  { id: 'vision-awd', url: 'https://vision-based-awd.vercel.app' },
];

newProjects.forEach(proj => {
  const url = getMicrolink(proj.url);
  // We find the block for each id and replace its image string
  const idRegex = new RegExp(`id:\\s*'${proj.id}'[\\s\\S]*?image:\\s*'(.*?)'`, 'g');
  content = content.replace(idRegex, (match, p1) => {
    return match.replace(p1, url);
  });
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Updated images successfully!');
