// import axios from 'axios'
// import cheerio from 'cheerio'

export const Scrape = (url: string) => {
  const myInit: RequestInit = {
    mode: 'no-cors',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  }

  const myRequest = new Request(url, myInit)

  return fetch(myRequest)
    .then(response => response.text())
    .then(response => {
      console.log(response)
    })
    .catch(function(e) {
      console.log(e)
    })
  /*
  const $ = cheerio.load(data)
  const result = $('.skill-col').text()
  return result
  */
}
