const {By} = require('selenium-webdriver')

const movieWatched = async (driver) => {

    await driver.findElement(By.xpath('//ul/li/span')).click()
}

module.exports = {
    movieWatched
}