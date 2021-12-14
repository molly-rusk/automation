const {Builder, Capabilities} = require('selenium-webdriver')

require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

const {addMovie} = require('../functions/addMovie')
const {removeMovie} = require('../functions/removeMovie')
const {movieWatched} = require('../functions/movieWatched')
const {secretMessage} = require('../functions/secretMessage')

beforeAll(async () => {
    await driver.get('http://127.0.0.1:5501/movieList/index.html')
})

afterAll(async () => {
    await driver.quit()
})

test('Add movie', async () => {
    await addMovie(driver)

    await driver.sleep(2000)
})


test('Check off movie', async () => {
    await movieWatched(driver)

    await driver.sleep(0)
})

test('Message popup', async () => {
    await secretMessage(driver)

    await driver.sleep(1000)
})


test('Remove movie', async () => {
    await removeMovie(driver)

    await driver.sleep(2000)
})
