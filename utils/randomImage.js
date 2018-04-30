const baseQuery = 'https://commons.wikimedia.org/w/api.php?action=query&format=json'

// returns a promise that resolves to the url of a random image
const randomImage = () => {
  const queryUrl = `${baseQuery}&list=random&rnnamespace=6`
  return fetch(queryUrl)
    .then(resp => resp.json())
    .then(json => {
      const title = json.query.random[0].title
      return imageUrl(title)
    })
};

const imageUrl = (filename) => {
  const queryUrl = `${baseQuery}&titles=${filename}&prop=imageinfo&iiprop=url`
  return fetch(queryUrl)
    .then(resp => resp.json())
    .then(json => {
      const pageData = json.query.pages
      const pageId = Object.getOwnPropertyNames(pageData)[0]
      const url = pageData[pageId].imageinfo[0].url
      return url
    })
};

export default randomImage;
