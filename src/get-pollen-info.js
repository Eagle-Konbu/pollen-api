const chromium = require("chrome-aws-lambda");
const puppeteer = require("puppeteer-core");

async function getPollenInfo() {
  const browser = await puppeteer.launch({
    args: chromium.args,
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: chromium.headless,
  });
  const selector = ".pollen-telop";
  let pollenInfo = "Not found";

  try {
    const page = await browser.newPage();

    await page.goto("https://tenki.jp/pollen/3/17/4610/14100/");

    pollenInfo = await page.$$eval(selector, (list) => list[0].textContent);
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }

  return pollenInfo;
}
