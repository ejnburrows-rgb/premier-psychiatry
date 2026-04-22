import asyncio
import time
from playwright.async_api import async_playwright

async def main():
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={"width": 1280, "height": 800})
        print("Navigating to localhost:3000...")
        await page.goto("http://localhost:3000")
        
        # Wait for Next.js to compile and render
        print("Waiting for page load...")
        await page.wait_for_selector("h1")
        await asyncio.sleep(5) # Extra wait for images to load
        
        print("Taking hero screenshot...")
        await page.screenshot(path="hero_desktop.png")
        
        print("Taking about screenshot...")
        # Scroll to about section
        about = await page.locator("#about").first
        if await about.count() > 0:
            await about.scroll_into_view_if_needed()
            await asyncio.sleep(1)
            await page.screenshot(path="about_desktop.png")
            
        print("Switching to mobile viewport...")
        await page.set_viewport_size({"width": 375, "height": 812})
        await page.evaluate("window.scrollTo(0, 0)")
        await asyncio.sleep(1)
        
        print("Taking mobile hero screenshot...")
        await page.screenshot(path="hero_mobile.png")
        
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
