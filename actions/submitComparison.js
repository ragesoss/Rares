const serverUrl = 'http://192.168.1.132:3000'

// returns a promise that resolves to the url of a random image
const submitComparison = (chosen, unchosen) => {
  const queryUrl = `${serverUrl}/comparisons`
  return fetch(queryUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({comparison: {chosen, unchosen, client_info: 'ohai!'}})
  })
};


export default submitComparison;
