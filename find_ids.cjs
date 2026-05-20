const fs = require('fs');
const html = fs.readFileSync('C:/Users/Qiqi/.gemini/antigravity-ide/brain/b76ea8a4-3025-4c3b-a1cd-265ba810ee22/.system_generated/steps/11/content.md','utf8');
console.log([...html.matchAll(/id="(e-n-tab-content-[^"]+)/g)].map(m => m[1]));
