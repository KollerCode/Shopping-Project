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
let total = 0
let shoppingCartArray = []

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

  // button element
  const addToCartButton = document.createElement("button");
  addToCartButton.className = "addButton";
  addToCartButton.id = makeup.price;
  addToCartButton.innerText = "Add to Cart";
  makeupCard.appendChild(addToCartButton);

  // erase button element
  const emptyCartButton = document.getElementById("empty-cart");
  emptyCartButton.innerText = "Empty Cart";

  // event listener for click add price
  addToCartButton.addEventListener("click", addToCartClicked);

  //event listener for click clear cart
  emptyCartButton.addEventListener("click", emptyCart);

  // When the user clicks the makeup they want to add to cart,
  // an alert will pop up (no default refresh) and the total will add at the top
  function addToCartClicked(event) {
    event.preventDefault;
    alert("Item added to cart");
    total += parseFloat(event.target.id);
    updateCartTotal(total);
  }

  // This function will update the total each time an item is added
  function updateCartTotal(total) {
    let shoppingCart = new Intl.NumberFormat("us-EN", {
      style: "currency",
      currency: "USD",
    }).format(total);
    document.querySelector(".cart-total-price").innerText = shoppingCart;
  }

  // This function will empty the entire cart
  function emptyCart() {
    total = 0;
    updateCartTotal(total);
  }
}