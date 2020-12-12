const puppeteer = require('puppeteer-core');
const iPhone = puppeteer.devices['iPhone 6'];
(async () => {
  const browser = await puppeteer.launch({
    headless : true,
    sloMo:1000,
    executablePath: '/usr/bin/chromium',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  })
  const page = await browser.newPage()
  
  const navigationPromise = page.waitForNavigation()
  
  await page.goto('http://parents.msrit.edu/index.php')
  
  await page.setViewport({ width: 980, height: 1644 })
  
  await page.waitForSelector('.uk-vertical-align-middle #username')
  await page.click('.uk-vertical-align-middle #username')
  
  await page.waitForSelector('.uk-vertical-align-middle #passwd')
  await page.click('.uk-vertical-align-middle #passwd')
  
  await page.waitForSelector('.cn-bgpart2 > .uk-vertical-align-middle > #login-form > .uk-margin > .cn-landing-login1')
  await page.click('.cn-bgpart2 > .uk-vertical-align-middle > #login-form > .uk-margin > .cn-landing-login1')
  
  await navigationPromise
  
//  await page.waitForSelector('.uk-width-1-2\@l > .uk-card-primary > .cn-click-switch > div > h3')
  await page.click('div > h3')
  
  await navigationPromise
  
  await page.waitForSelector('.dash_even_row:nth-child(3) > tbody > tr > td > .att > a > .att_label')
  await page.click('.dash_even_row:nth-child(3) > tbody > tr > td > .att > a > .att_label')
  
  await navigationPromise
  
  
  await page.screenshot({path:'example1.png'})
  await browser.close()
})()