import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('out/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Find every <li with surrounding context
for m in re.finditer(r'<li[\s>]', html):
    start = max(0, m.start() - 80)
    end = min(len(html), m.end() + 120)
    snippet = html[start:end].replace('\n', ' ')
    print(f"POS {m.start()}: ...{snippet}...")
    print("---")
