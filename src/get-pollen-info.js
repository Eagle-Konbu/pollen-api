const puppeteer = require('puppeteer')

async function getPollenInfo() {
    const browser = await puppeteer.launch({
        headless: false
    })
    const page = await browser.newPage()

    await page.goto("https://tenki.jp/pollen/3/17/4610/14100/")

    await browser.close()
}