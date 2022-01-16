// Global Variables
const fetchArray = () => {
    fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
        .then((response) => response.json())
        .then(function (json) {
            //the json array is what is being
            // returned and is 54 items long(actually 53 long)
            makeupArray = json;
            let makeupCollection = document.getElementById("makeup-collection");
            makeupArray.forEach((makeup) => (makeupCollection += renderMakeup(makeup)));
        });
}
let makeupArray = []
            
// On StartUp
document.addEventListener('DOMContentLoaded', () => {
    fetchArray() 
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
  price.innerText = parseFloat(makeup.price);
  makeupCard.appendChild(price);
  const pullPrice = document.getElementsByClassName("price");
  // button element
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "addButton";
  addToCartButton.id = makeup.id;
  addToCartButton.innerText = "Add to Cart";
  makeupCard.appendChild(addToCartButton);

  // event listener for click add price
  addToCartButton.addEventListener("click", addToCartClicked);

  //event listener for click clear cart
    // document.addEventListener("click", emptyCart);

    const currentCart = function () {
        // if (event.target.className === "addButton") {
    // let currentCart = parseFloat(e.target.previousElementSibling.innerText);
    // let totalPrice = currentCart + updateCartTotal();}
       
    }
  
    function addToCartClicked(event) {
        event.preventDefault
        alert("Item added to cart");
      const priceArray = makeupArray.map(function (makeup) {
        return parseFloat(makeup.price);
      });
        console.log(price, event.target.id);
         const reducer = (previousValue, currentValue) =>
           previousValue + currentValue;
         const totalPrice = priceArray.reduce(reducer);
      console.log(totalPrice);
      const shoppingCart = document.getElementsByClassName('shoppingCart')
      makeupArray.forEach((price) => {
        shoppingCart.innerHTML += `<Strong class="shoppingCart">Total${price}</strong>`
      })
      // let total = shoppingcart.CalculateTotal();
      console.log(shoppingCart)
        updateCartTotal()
    //     if (event.target.className === "addButton") {
    // let currentCart = parseFloat(e.target.previousElementSibling.innerText);
    // let totalPrice = currentCart + updateCartTotal();
    }
    console.log(addToCartClicked)
    
  function updateCartTotal() {
    //   const cartPrice = document.getElementsByClassName('cart-price')
    //   const cartQuantity = document.getElementsByClassName('cart-quantity')[0]
    //   const quantity = cartQuantity.value
    //   const total = 0
    //   total = total + price
    //   total = total + (price * quantity)
    //   total = Math.round(total * 100) / 100
    //   document.getElementsByClassName("cart-total-price").innerText = '$' + total
  }
//     function emptyCart(event) {
//     document.getElementsByClassName("empty-cart")[0];
//     const buttonClicked = event.target;
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal();
//   }
}

    // .map would make the empty array and then reduce to calculate
    // all the prices together


// function addItemtoCart (itemName, price) {
//     const cartItems = document.getElementsByClassName('cart-items')[0]
//     const cartItemNames = cartItems.getElementsByClassName('cart-item-names')
//     for (let i = 1; i < cartItemNames.length; i++){ }
// }

// function addTotal() {
//   console.log(makeupArray);
//   let shoppingCartCopy = Object.assign({}, makeup);
//   for (let makeup of makeupArray) {
//     shoppingCartCopy.push(makeup.price);
//   }
//   return shoppingCartCopy.reduce();
// }