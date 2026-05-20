const fs = require('fs');
const html = fs.readFileSync('C:/Users/Qiqi/.gemini/antigravity-ide/brain/b76ea8a4-3025-4c3b-a1cd-265ba810ee22/.system_generated/steps/11/content.md','utf8');
const ids=['2348787641','2348787642','2348787643'];
for (const id of ids) console.log(id, html.indexOf('<div id="e-n-tab-content-'+id));
function part(i){const start=html.indexOf('<div id="e-n-tab-content-'+ids[i]); const end=i<2?html.indexOf('<div id="e-n-tab-content-'+ids[i+1]):html.indexOf('<section', start+1); return html.slice(start,end);}
for (let i=0;i<3;i++){
 const cat=['minimalis','motion','elegant'][i]; const s=part(i);
 const pat=/<a href="(https:\/\/qinvi\.my\.id\/wp-content\/uploads\/[^"]+)"[^>]*>\s*<img[^>]*?src="([^"]+)"[\s\S]*?<h3 class="elementor-icon-box-title">[\s\S]*?<span[^>]*>\s*([^<]+?)\s*<\/span>[\s\S]*?<a class="elementor-button[^"]*" href="([^"]+)"/gi;
 console.log('\n'+cat); let m; while((m=pat.exec(s))) console.log(JSON.stringify({category:cat,title:m[3].trim().replace(/\s+/g,' '),image:m[1],link:m[4]}));
}
