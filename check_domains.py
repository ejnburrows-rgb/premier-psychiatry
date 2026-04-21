import requests
import json

try:
    r = requests.get('https://porkbun.com/api/json/v3/pricing/get')
    if r.status_code == 200:
        data = r.json().get('pricing', {})
        tlds = ['xyz', 'site', 'online', 'tech', 'click', 'fun']
        print("Porkbun Pricing:")
        for tld in tlds:
            if tld in data:
                print(f".{tld}: ${data[tld]['registration']}")
except Exception as e:
    print(e)
