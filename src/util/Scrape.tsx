import axios from 'axios'
// import cheerio from 'cheerio'

export const Scrape = (url: string) => {
  const myInit: RequestInit = {
    method: 'GET',
    mode: 'no-cors'
  }

  //const myRequest = new Request(url, myInit)

  axios
    .post(
      'https://m9tmyo340h.execute-api.eu-west-1.amazonaws.com/default/scrape',
      { url },
      {
        headers: {
          'Access-Control-Allow-Origin': '*'
        }
      }
    )
    .then(res => console.log(res))

  return fetch(url, myInit)
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
