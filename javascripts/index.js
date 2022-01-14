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
    const grid = document.getElementById("grid");
    const makeupCard = document.createElement("div");
    makeupCard.id = "makeupCard";
    const makeupCards = document.getElementById("makeup-cards");
    const makeupName = document.createElement("h2");
    makeupName.innerText = makeup.name;
    console.log(makeup.name);
    const makeupImage = document.createElement("img");
    makeupImage.className = "makeup-img-avatar";
    makeupImage.src = makeup.image_link;
    console.log(makeup.image_link);
    makeupCard.appendChild(makeupImage);
    makeupCard.appendChild(makeupName);
    //    const description = document.createElement("p");
    //    description.className = "description";
    // description.innerText = makeup.description;
    // makeupCard.appendChild(description)
    const price = document.createElement("h3");
    price.className = "price";
    price.innerText = makeup.price;
    makeupCard.appendChild(price);
    makeupCards.appendChild(makeupCard);
  }
//   const addToCartButton = document.getElementsByClassName("myButton");
  // makeupCard.appendChild(addToCartButton)
  //   const addToCart = document.createElement('button')
  //  const emptyCart = document.createElement('button')
  //   addToCart.className = "add-btn"
})
// .map would make the empty array and then reduce to calculate
// all the prices together