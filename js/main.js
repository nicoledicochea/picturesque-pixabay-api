//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://pixabay.com/api/?key=9923699-edbfe159f221c2be97047aa38&q=${choice}`

  console.log(url)

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        // console.log(data.hits)
        let random = Math.floor(Math.random() * 20)
        console.log(data.hits[random])
        document.querySelector('img').src = data.hits[random].largeImageURL
        document.querySelector('img').classList.add('img-border')
        document.querySelector('img').alt = data.hits[random].tags
      })
      .catch(err => {
          console.log(`error ${err}`)
      });
}