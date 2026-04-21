import re, sys, io
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

with open('out/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

# Count ACTUAL <li> tags (not <link)
li_tags = len(re.findall(r'<li[\s>]', html))
ul_tags = len(re.findall(r'<ul[\s>]', html))
link_tags = len(re.findall(r'<link[\s>]', html))

print(f"Actual <li> tags (not <link>): {li_tags}")
print(f"Actual <ul> tags: {ul_tags}")
print(f"<link> tags: {link_tags}")

# Testimonial names
names = ['Maria L', 'James R', 'Carmen D', 'Patricia M', 'Robert K',
         'Jessica T', 'Daniel S', 'Stephanie W', 'Michael A', 'Laura G']
print(f"\n=== Testimonial Name Counts ===")
total = 0
for n in names:
    c = html.count(n)
    total += c
    print(f"  {n}: {c}")
print(f"  TOTAL: {total}")

# SpanishCTA
print(f"\nid='spanish' section: {html.count('id=' + chr(34) + 'spanish' + chr(34))}")
print(f"Agenda tu cita: {html.count('Agenda tu cita')}")

# Conditions pills check - look for the specific pill class
pill_class = 'rgba(124,161,140,0.10)'
print(f"\nConditions pill bg count: {html.count(pill_class)}")

# Check for the conditions section specifically
cond_start = html.find('id="conditions"')
if cond_start > 0:
    cond_end = html.find('id="about"', cond_start)
    cond_section = html[cond_start:cond_end] if cond_end > 0 else html[cond_start:cond_start+5000]
    li_in_cond = len(re.findall(r'<li[\s>]', cond_section))
    ul_in_cond = len(re.findall(r'<ul[\s>]', cond_section))
    span_pills = cond_section.count('rounded-full')
    print(f"\nConditions section: <li> tags={li_in_cond}, <ul> tags={ul_in_cond}, pills(rounded-full)={span_pills}")

# Check insurance section
ins_start = html.find('id="insurance"')
if ins_start > 0:
    ins_end = html.find('id="fees"', ins_start)
    if ins_end < 0:
        ins_end = html.find('id="self', ins_start)
    if ins_end < 0:
        ins_end = ins_start + 5000
    ins_section = html[ins_start:ins_end]
    li_in_ins = len(re.findall(r'<li[\s>]', ins_section))
    ul_in_ins = len(re.findall(r'<ul[\s>]', ins_section))
    grid_in_ins = ins_section.count('grid')
    print(f"Insurance section: <li> tags={li_in_ins}, <ul> tags={ul_in_ins}, grid classes={grid_in_ins}")
