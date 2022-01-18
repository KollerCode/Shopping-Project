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
  // erase button element
  const emptyCartButton = document.getElementById("empty-cart");
  emptyCartButton.innerText = "Empty Cart";

  // event listener for click add price
  addToCartButton.addEventListener("click", addToCartClicked);

  //event listener for click clear cart
  emptyCartButton.addEventListener("click", emptyCart);

  //  possibly create a function to hold array with items in cart
  const currentCart = function () {
    // if (event.target.className === "addButton") {
    // let currentCart = parseFloat(e.target.previousElementSibling.innerText);
    // let totalPrice = currentCart + updateCartTotal();}
       
  }
  
  // When the user clicks the makeup they want to add to cart, 
  // an alert will pop up (no default refresh) and the total will add at the top
  function addToCartClicked(event) {
    event.preventDefault
    alert("Item added to cart");
    const priceArray = makeupArray.map(function (makeup) {
      return parseFloat(makeup.price);
    });
    console.log(parseFloat(makeup.price), event.target.id);
    // add all values
    //  const reducer = (previousValue, currentValue) =>
    //    previousValue + currentValue;
    //  const totalPrice = priceArray.reduce(reducer);
    // console.log(totalPrice);
      
    const shoppingCart = [];
    shoppingCart.push(makeup.price);
    makeupArray.forEach((makeup) => {
      return (makeup.price += shoppingCart);
    });
    console.log(shoppingCart);
    updateCartTotal()
    //     if (event.target.className === "addButton") {
    // let currentCart = parseFloat(e.target.previousElementSibling.innerText);
    // let totalPrice = currentCart + updateCartTotal();
  }
  console.log(addToCartClicked)
    
  // function addTotal() {
  //   console.log(makeupArray);
  //   let shoppingCartCopy = Object.assign({}, makeup);
  //   for (let makeup of makeupArray) {
  //     shoppingCartCopy.push(makeup.price);
  //   }
  //   console.log(shoppingCartCopy.reduce())
  // }
  // This function will update the total each time an item is added
  function updateCartTotal() {
    //   const total = 0
    //   total = total + shoppingCart
    //   total = Math.round(total * 100) / 100
    //   document.getElementsByClassName("cart-total-price").innerText = '$' + total
  }
  // This function will empty the entire cart
  function emptyCart(event) {
  event.preventDefault
    const buttonClicked = event.target;
    if (buttonClicked) {
      // alert("All items removed from cart");
      // return total
    }
    else
    updateCartTotal();
  }
}

