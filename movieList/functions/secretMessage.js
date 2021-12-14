const {By} = require('selenium-webdriver')

const secretMessage = async (driver) => {
 
   const scrtMsg =  driver.findElement(By.xpath('//aside'))

   const displayed = scrtMsg.isDisplayed()

   expect(displayed).toBeTruthy()
}


module.exports = {
    secretMessage
}