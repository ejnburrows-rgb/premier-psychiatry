import re, urllib.request, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

url = 'https://premier-psychiatry-one.vercel.app'
req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
html = urllib.request.urlopen(req).read().decode('utf-8')

print(f"HTML length: {len(html)} chars")

# Bug 1: Testimonials
names = ['Maria L', 'James R', 'Carmen D', 'Patricia M', 'Robert K',
         'Jessica T', 'Daniel S', 'Stephanie W', 'Michael A', 'Laura G']
total_names = 0
for n in names:
    c = html.count(n)
    total_names += c
    print(f"  {n}: {c}")
print(f"TESTIMONIAL NAMES TOTAL: {total_names}")
# In collapsed SSR state, only 3 are rendered
print(f"BUG 1 RESULT: {'PASS - 3 in collapsed SSR' if total_names == 3 else 'FAIL - expected 3 got ' + str(total_names)}")

# Bug 2: Conditions
cond_start = html.find('id="conditions"')
cond_end = html.find('id="about"', cond_start) if cond_start > 0 else -1
if cond_start > 0 and cond_end > 0:
    cond = html[cond_start:cond_end]
    li_count = len(re.findall(r'<li[\s>]', cond))
    ul_count = len(re.findall(r'<ul[\s>]', cond))
    pill_count = cond.count('rounded-full')
    print(f"\nConditions section: <li>={li_count}, <ul>={ul_count}, pills={pill_count}")
    print(f"BUG 2 RESULT: {'PASS' if li_count == 0 and ul_count == 0 and pill_count > 0 else 'FAIL'}")
else:
    print(f"\nBUG 2 RESULT: FAIL - conditions section not found")

# Bug 3: Insurance
ins_start = html.find('id="insurance"')
ins_end = html.find('id="fees"', ins_start) if ins_start > 0 else -1
if ins_end < 0 and ins_start > 0:
    ins_end = ins_start + 5000
if ins_start > 0:
    ins = html[ins_start:ins_end]
    li_count = len(re.findall(r'<li[\s>]', ins))
    ul_count = len(re.findall(r'<ul[\s>]', ins))
    grid_count = ins.count('grid')
    aetna = ins.count('Aetna')
    print(f"\nInsurance section: <li>={li_count}, <ul>={ul_count}, grid={grid_count}, Aetna={aetna}")
    print(f"BUG 3 RESULT: {'PASS' if li_count == 0 and ul_count == 0 and grid_count > 0 else 'FAIL'}")
else:
    print(f"\nBUG 3 RESULT: FAIL - insurance section not found")

# Bug 4: SpanishCTA
spanish_section = html.count('id="spanish"')
atencion = html.count('Atenci')
agenda = html.count('Agenda tu cita')
print(f"\nSpanishCTA: id='spanish'={spanish_section}, 'Atencion'={atencion}, 'Agenda tu cita'={agenda}")
print(f"BUG 4 RESULT: {'PASS' if spanish_section >= 1 and atencion >= 1 else 'FAIL'}")

# Overall
total_li = len(re.findall(r'<li[\s>]', html))
total_ul = len(re.findall(r'<ul[\s>]', html))
print(f"\nGLOBAL: total <li> in page={total_li}, total <ul>={total_ul}")
print("(Expected: 6 <li> + 1 <ul> in About.tsx credentials list only)")
