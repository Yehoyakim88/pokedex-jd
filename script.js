const POKECARD_HEIGHT = '200';
const POKECARD_WIDTH = '200';

let pokeImages = [];
let pokeNames = [];
let pokeNumbers = [];



function testCards() {
  let content = document.getElementById('poke-content');

  for (let index = 0; index < 24; index++) {
    content.innerHTML += /*html*/ `
        <div id="pokemon-${index}" class="pokeCard">
            Card ${index}
        </div>
        `;
    document.getElementById(`pokemon-${index}`).style.backgroundImage = "url('./img/pokeball.webp')";
  }
}


function drawPokeCard(pokeNumber, pokeImage, pokeBackgroundColor) {
    content.innerHTML += /*html*/ `
    <div id="pokemon-${pokeNumber}" class="pokeCard">
        <img id="poke-image-${pokeNumber}" class="pokeImage" src=${pokeImage} alt="NOT_FOUND">
    </div>
    `;
}



