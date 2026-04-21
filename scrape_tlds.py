import urllib.request
import re
import sys

tlds = ['xyz', 'site', 'online', 'tech', 'click', 'fun']
registrars_of_interest = ['namecheap', 'porkbun', 'cloudflare']

for tld in tlds:
    url = f"https://tld-list.com/tld/{tld}"
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'})
    try:
        with urllib.request.urlopen(req) as response:
            html = response.read().decode('utf-8')
            
            # The table usually has rows like <tr data-registrar="namecheap">...
            print(f"\n--- .{tld} ---")
            for reg in registrars_of_interest:
                # Find data-registrar="namecheap" and then the first price which is usually under <div class="price"> or <span class="price">
                # We can do a simpler text search to find the row.
                # Actually, tld-list uses <a href="/registrar/porkbun">Porkbun</a> and then prices in columns.
                # Let's extract the whole row for the registrar.
                # Example: <tr ...><td class="registrar"><a ...>Porkbun</a></td>...<td class="price ...">... $1.99 ...</td>...
                m = re.search(f'<a[^>]*>{reg}</a>.*?<td[^>]*>.*?\\$([0-9.]+)', html, re.IGNORECASE | re.DOTALL)
                if m:
                    print(f"{reg}: ${m.group(1)}")
                else:
                    # Alternately, it could be in a specific format
                    m2 = re.search(f'"{reg.lower()}".*?Registration.*?\\$([0-9.]+)', html, re.IGNORECASE | re.DOTALL)
                    if m2:
                        print(f"{reg}: ${m2.group(1)}")
                    else:
                        print(f"{reg}: Not found in HTML")
    except Exception as e:
        print(f"Error fetching {tld}: {e}")
