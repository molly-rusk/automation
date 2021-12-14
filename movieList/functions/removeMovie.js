const {By} = require('selenium-webdriver')

const removeMovie = async (driver) => {
        
        await driver.findElement(By.xpath('//ul/li/button')).click()

    }

module.exports = {
    removeMovie
}