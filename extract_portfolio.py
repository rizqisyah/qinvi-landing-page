import re, json
p=r'C:/Users/Qiqi/.gemini/antigravity-ide/brain/b76ea8a4-3025-4c3b-a1cd-265ba810ee22/.system_generated/steps/11/content.md'
html=open(p,encoding='utf-8').read()
def between(a,b):
    return html[html.index(a): html.index(b)]
parts=[('minimalis','e-n-tab-content-2348787641','e-n-tab-content-2348787642'),('motion','e-n-tab-content-2348787642','e-n-tab-content-2348787643'),('elegant','e-n-tab-content-2348787643','e-n-tab-content-2348787644' if 'e-n-tab-content-2348787644' in html else '</body>')]
for cat,a,b in parts:
    s=between(a,b)
    pat=re.compile(r'<a href="(https://qinvi\.my\.id/wp-content/uploads/[^"]+)"[^>]*>\s*<img[^>]*?src="([^"]+)"[\s\S]*?<h3 class="elementor-icon-box-title">[\s\S]*?<span[^>]*>\s*([^<]+?)\s*</span>[\s\S]*?<a class="elementor-button[^"]*" href="([^"]+)"',re.I)
    print('\n'+cat)
    for m in pat.finditer(s):
        print(json.dumps({'category':cat,'title':' '.join(m.group(3).split()),'image':m.group(1),'link':m.group(4)},ensure_ascii=False))
