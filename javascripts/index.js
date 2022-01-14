document.addEventListener('DOMContentLoaded', () => {
  let makeupCollection = document.getElementById("makeup-collection");
  fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    .then((response) => response.json())
    .then(function (json) {
      //the json array is what is being
      // returned and is 54 items long(actually 53 long)
      let makeupArray = json;
      makeupArray.forEach(
        (makeup) => (makeupCollection += renderMakeup(makeup))
      );
      console.log(makeupArray);
    });

  function renderMakeup(makeup) {
    const makeupCard = document.createElement("div");
    makeupCard.id = "makeupCard";
    const makeupCards = document.getElementById("makeup-cards");
      makeupCards.appendChild(makeupCard);
    //   name element
    const makeupName = document.createElement("h2");
      makeupName.innerText = makeup.name;
      makeupCard.appendChild(makeupName);
    //   image elemnt
    const makeupImage = document.createElement("img");
    makeupImage.className = "makeup-img-avatar";
    makeupImage.src = makeup.image_link;
    console.log(makeup.image_link);
    makeupCard.appendChild(makeupImage);
    //   description element
    // const description = document.createElement("p");
    // description.className = "description";
    // description.innerText = makeup.description;
    // makeupCard.appendChild(description)
    //   price element
    const price = document.createElement("h3");
    price.className = "price";
    price.innerText = makeup.price;
    makeupCard.appendChild(price);
    // button element
    const addToCartButton = document.createElement("button")
    addToCartButton.className = "addButton"
    addToCartButton.id = makeup.id;
    addToCartButton.innerText = 'Add to Cart'
    makeupCard.appendChild(addToCartButton)
  }
  //  const emptyCart = document.createElement('button')
})
// .map would make the empty array and then reduce to calculate
// all the prices together
addEventListener("click", AddTotal);
function AddTotal(makeup) {
    console.log(makeup)
    let shoppingCartCopy = Object.assign({}, total)
    let totalPrice = makeup.reduce
    total.price = Math.ceil(total)
    return shoppingCartCopy.reduce
}
