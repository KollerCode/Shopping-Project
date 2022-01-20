# 💄Shop Mabelline
> A simple but aesthic app that allows you to shop for different makeup products.
---
**[OVERVIEW](https://github.com/KollerCode/Shopping-Project#overview) • 
[FEATURES](https://github.com/KollerCode/Shopping-Project#features) • 
[HOW TO USE](https://github.com/KollerCode/Shopping-Project#how-to-use-lets-go-shopping) • 
[TECH STACK](https://github.com/KollerCode/Shopping-Project#tech-stack) • 
---
## 📖 OVERVIEW 
Using an open API that included an array of objects, I was able to create a mini e-commerce page. The API I chose happened to be Maybelline makeup products. **This app allows you to go "shopping" and when a product is added to your cart, you will be alerted by a "pop-up". As you continue adding items to your cart, the total price will increase.** If you would like to clear your cart and start again, you can clear it with the click of a button! 

>This page has no refreshes and no page redirects. 

## 🌟 FEATURES
*Displays Maybelline makeup products with name, price, and photo of the product upon the load of the DOM.
*Each makeup product is nested into it's own "card" with an "Add to cart" button. 
*The header contains the actual Mabelline logo.
*Below the header there is a shopping cart with a "Total" beside it. This is where the price will accumulate. 
*Beside the shopping cart is a "Empty Cart" button. This will do just that, empty the cart to $0. 

## ❔ HOW TO USE (aka Let's go Shopping!)
![]()
*In order to add the product total to the cart, one must first click the button "Add to cart" below the the makeup that is desired.
*A pop-up alert will then notify you that that it has been added to your cart and **the price can then be seen in the total beside the cart below the header.**
*As more products are added, the total continues to calculate. 
*You can also clear your whole cart by clicking "Empty cart"

## 👩🏽‍💻 TECH STACK
-Vanilla JavaScript

-[Makeup api](http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline)

-JSON server

>**Note**: This app is an SPA (Single Page Application) and a MVP (Minimal Viable Project)