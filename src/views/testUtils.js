import nightmare from 'nightmare'
import url from 'url'

export const visit = path => {
  const BASE_URL = url.format({
    protocol: process.env.PROTOCOL || 'http',
    hostname: process.env.HOST || 'localhost',
    port: process.env.PORT || 3000
  })
  const location = url.resolve(BASE_URL, path)
  const config = {
    // Try changing this to true and run the tests
    // It is pretty cool
    show: false,
    // From the docs: Note that, even though goto normally waits
    // for all the resources on a page to load, a timeout exception
    // is only raised if the DOM itself has not yet loaded.
    gotoTimeout: 4000
  }
  return nightmare(config).goto(location)
}
