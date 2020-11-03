// image_fetch.ts

const puppeteer = require('puppeteer-extra')
const StealthPlugin = require('puppeteer-extra-plugin-stealth')
puppeteer.use(StealthPlugin())

const generate_url = () => {
    var lower = 2428372, upper = 4283810,
    url = 'https://danbooru.donmai.us/posts/' + Math.floor(Math.random()*(upper-lower))

    console.log ("fetching image from " + url)
}

const scrape_product = async ( url ) => {
    var browser = await puppeteer.launch(),
        page = await browser.newPage()
    await page.goto(url)

    var [el] = await page.$x('//*[@id="image"]'),
        src = await el.getProperty('src'),
        srcTxt = await src.jsonValue()

    console.log ([srcTxt])

    browser.close()    

}
    

scrape_product(generate_url())
