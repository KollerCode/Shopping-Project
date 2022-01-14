// Global Variables
let makeupArray = [];
let makeupCollection = document.getElementById("makeup-collection");

// On StartUp
document.addEventListener('DOMContentLoaded', () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((response) => response.json())
        .then(function (json) {
            //the json array is what is being
            // returned and is 54 items long(actually 53 long)
            makeupArray = json;
            makeupArray.forEach(
                (makeup) => (makeupCollection += renderMakeup(makeup))
            );

            // return an array of prices
            const prices = makeupArray.map(function (makeup) {
                return parseFloat(makeup.price);
            });
            console.log(prices);
            const reducer = (previousValue, currentValue) =>
                previousValue + currentValue;
            const totalPrice = prices.reduce(reducer);
            console.log(totalPrice.innerText)
        })
})

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
    const pullPrice = document.getElementsByClassName("price");
    // button element
    const addToCartButton = document.createElement("button");
    addToCartButton.className = "addButton";
    addToCartButton.id = makeup.id;
    addToCartButton.innerText = "Add to Cart";
    makeupCard.appendChild(addToCartButton);
}
  // event listener for click add price
  //   addToCartButton.addEventListener("click", );
  //  const emptyCart = document.createElement('button')
    // .map would make the empty array and then reduce to calculate
    // all the prices together

function addTotal() {
    console.log(makeupArray);
    let shoppingCartCopy = Object.assign({}, makeup);
    for (let makeup of makeupArray) {
        shoppingCartCopy.push(makeup.price);
    }
    return shoppingCartCopy.reduce();
    }
makeupCollection.addEventListener("click", (e) => {
  if (e.target.className === "addButton") {
    let currentCart = parseFloat(e.target.previousElementSibling.innerText);
    let totalPrice = currentCart + 
    updateCartTotal()
  }
});

function updateCartTotal() {
    let cartPrice = document.getElementsByClassName('cart-price')
    let price = parseFloat(cartPrice.innerText.replace("$"," "))
    let cartItems = document.getElementsByClassName('cart-items')[0]
    let cartQuantity = document.getElementsByClassName('cart-quantity')[0]
    let quantity = quantityContainer.value
    let total = 0
    total = total + (price * quantity)
}