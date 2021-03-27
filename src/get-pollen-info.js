const puppeteer = require("puppeteer");

async function getPollenInfo() {
  const browser = await puppeteer.launch();
  const selector = "";
  let pollenInfo = "Not found";

  try {
    const page = await browser.newPage();

    await page.goto("https://tenki.jp/pollen/3/17/4610/14100/");

    pollenInfo = await page.$eval(selector, (item) => item.textContent);
  } catch (error) {
    console.log(error);
  } finally {
    await browser.close();
  }

  return pollenInfo;
}
