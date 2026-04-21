from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import time
import re

o = Options()
o.add_argument("--headless=new")
o.add_argument("--disable-gpu")
o.add_argument("--no-sandbox")
o.add_argument("--window-size=1920,1080")
o.add_argument("user-agent=Mozilla/5.0 (Windows NT 10.0; Win64; x64)")
o.binary_location = r"C:\Program Files\Google\Chrome\Application\chrome.exe"

d = webdriver.Chrome(options=o)

tlds = ['xyz', 'site', 'online', 'tech', 'click', 'fun']
results = []

def extract_prices(text):
    return re.findall(r'\$[0-9]+\.[0-9]{2}', text)

print("Starting Namecheap check...")
# Namecheap TLD page
d.get("https://www.namecheap.com/domains/pricing/")
time.sleep(3)
body_text = d.find_element("tag name", "body").text
for tld in tlds:
    # Try to find the line that contains the TLD
    for line in body_text.splitlines():
        if f".{tld}" in line.lower() or f"{tld}" in line.lower():
            prices = extract_prices(line)
            if prices:
                results.append(f"Namecheap .{tld}: {prices[0]}")
                print(f"Found Namecheap .{tld}: {prices[0]}")
                break

print("Starting Porkbun check...")
d.get("https://porkbun.com/products/domains")
time.sleep(3)
body_text = d.find_element("tag name", "body").text
for tld in tlds:
    for line in body_text.splitlines():
        if f".{tld}" in line.lower() or f"{tld}" in line.lower():
            prices = extract_prices(line)
            if prices:
                results.append(f"Porkbun .{tld}: {prices[0]}")
                print(f"Found Porkbun .{tld}: {prices[0]}")
                break

print("\n--- Summary ---")
for r in results:
    print(r)

d.quit()
