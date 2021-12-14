const {By} = require('selenium-webdriver')

module.exports = {
    addMovie: async (driver) => {
        await driver.findElement(By.xpath('//input')).sendKeys('Back to the Future')

        await driver.findElement(By.xpath('//button')).click()

        const movie = await driver.findElement(By.xpath('//li'))

        const displayed = movie.isDisplayed()

        expect(displayed).toBeTruthy()
    }
}