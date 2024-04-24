console.log("Bonjour 😀")
const form = document.querySelector("#formulaire")
console.log(form)
const namedom = document.querySelector("#name")
console.log(namedom)
const descriptiondom = document.querySelector("#description")
console.log(descriptiondom)
const imagedom = document.querySelector("#image")
console.log(imagedom)
form.addEventListener("submit", (event) => {
  event.preventDefault()
  const name = namedom.value
  console.log("name", name)
  const description = descriptiondom.value
  console.log("description", description)
  const image = imagedom.value
  console.log("image", image)
})
const buttonDom = document.querySelector("#addJokeButton")
const jokesDom = document.querySelector("#jokes")
console.log(jokesDom)
const createCardFromJoke = (joke) => {
    const card = document.createElement("div")
    card.classList.add("joke-container")
    const jokeTest = document.createElement("p")
    jokeTest.innerText = joke
    console.log(card)
    console.log(jokeText)
    card.appendChild(jokeText)
    console.log(card)
    jokesDom.appendChild(card)
}
const fetchAndAddJoke = () => {
    fetch("https://api.chucknorris.io/jokes/random?category=dev")
    .then((response) => response.json())
    .then(data => createCardFromJoke(data.value))
}
buttonDom.addEventListener("click", () => {
    fetchAndAddJoke()
})
