import re

with open('out/index.html', 'r', encoding='utf-8') as f:
    html = f.read()

print(f"Total <li occurrences: {html.count('<li')}")
print(f"Total <ul occurrences: {html.count('<ul')}")
print(f"Total Maria L occurrences: {html.count('Maria L')}")
print(f"Total Atenci occurrences: {html.count('Atenci')}")
print(f"Total Agenda tu cita occurrences: {html.count('Agenda tu cita')}")
print(f"Total id=\"spanish\" occurrences: {html.count('id=\"spanish\"')}")
print(f"Total rounded-full occurrences: {html.count('rounded-full')}")
print(f"Total shadow-sm occurrences: {html.count('shadow-sm')}")

# Find context around each <li
for m in re.finditer(r'<li', html):
    start = max(0, m.start() - 60)
    end = min(len(html), m.end() + 100)
    snippet = html[start:end]
    print(f"\n<li context at pos {m.start()}: ...{snippet}...")

# Find context around each <ul
for m in re.finditer(r'<ul', html):
    start = max(0, m.start() - 60)
    end = min(len(html), m.end() + 100)
    snippet = html[start:end]
    print(f"\n<ul context at pos {m.start()}: ...{snippet}...")

# Count testimonial cards (look for the unique quote start pattern)
testimonial_count = html.count('&quot;')
maria_count = html.count('Maria L')
james_count = html.count('James R')
carmen_count = html.count('Carmen D')
patricia_count = html.count('Patricia M')
robert_count = html.count('Robert K')
jessica_count = html.count('Jessica T')
daniel_count = html.count('Daniel S')
stephanie_count = html.count('Stephanie W')
michael_count = html.count('Michael A')
laura_count = html.count('Laura G')

print(f"\n=== Testimonial Name Counts ===")
print(f"Maria L: {maria_count}")
print(f"James R: {james_count}")
print(f"Carmen D: {carmen_count}")
print(f"Patricia M: {patricia_count}")
print(f"Robert K: {robert_count}")
print(f"Jessica T: {jessica_count}")
print(f"Daniel S: {daniel_count}")
print(f"Stephanie W: {stephanie_count}")
print(f"Michael A: {michael_count}")
print(f"Laura G: {laura_count}")
total_names = maria_count + james_count + carmen_count + patricia_count + robert_count + jessica_count + daniel_count + stephanie_count + michael_count + laura_count
print(f"TOTAL testimonial names in HTML: {total_names}")
