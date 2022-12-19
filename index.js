let main = document.querySelector('main');
let foodCategory = document.querySelector("nav .food-category");
let drinksCategory = document.querySelector("nav .drinks-category");
let bestFoodCategory = document.querySelector("nav .home");
foodCategory.addEventListener('click', openFoodMenu);
drinksCategory.addEventListener('click', openDrinksMenu);
bestFoodCategory.addEventListener('click', openHighlightsMenu);

// Cart
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");
let products = document.querySelectorAll(".add-cart");
let cartRemove = document.querySelector(".cart-remove");
let productPrice = document.querySelector(".product-price").textContent;
console.log(productPrice);
let cartQuantity = document.querySelector(".cart-quantity");
let quantity = cartQuantity.value
console.log(cartQuantity);
let totalPrice = document.querySelector(".total-price").textContent;
console.log(totalPrice);
let total = 0;
let shoppingCart = [];
// Open Cart
cartIcon.addEventListener('click', function() {
  cart.classList.add("active");
  main.style.opacity = "0.5";
  main.style.transition = "800ms";
});

// Close Cart
closeCart.addEventListener('click', function() {
  cart.classList.remove("active");
});

// Update the number of items in the cart
function updateCart() {
  for(let i = 0; i < products.length; i++) {
      products[i].addEventListener('click', function(event) {
          let product = event.target;
          let cartTotal = document.querySelector('.cart-total');
          shoppingCart.push(product);
          cartTotal.textContent = shoppingCart.length; 
      });
  }
}
updateCart();

// Add event listener to the remove button in the cart
function handelCartRemove () {
  let cartBox = document.querySelector(".cart-box");
  cartBox.style.display ="none";
  totalNumber = 0;
}

cartRemove.addEventListener('click', handelCartRemove);

// Add event listener to the change of product quantity, working on...
cartQuantity.addEventListener('change', function(event){
  total = total + productPrice * cartQuantity;
  console.log(total);
});


function generateFoodList(category){
  console.log(category);
  for (let i = 0; i < db[category].length; i++) {
    let newArticle = document.createElement("article");
    let foodContent = 
    `<h2 class="product-title">${db[category][i].name}</h2>
    <figure>
    <img class="product-img" src="${db[category][i].img}"/>
    </figure>
    <p>${db[category][i].dsc}</p>
    <p class="price">${db[category][i].price} sek</p>
    <button class="add-cart">Add to cart</button>`;
    newArticle.className = "card";
    newArticle.innerHTML = foodContent;
    main.append(newArticle);
  }
}
function clearMenu() {
  main.innerHTML = "";
}

function openFoodMenu() {
  clearMenu();
  generateFoodList("bbqs");
 }
 function openDrinksMenu(){
  clearMenu();
   generateFoodList("drinks");
 }
 function openHighlightsMenu(){
  clearMenu();
   generateFoodList("best-foods");
 }

 // function that change the lang from swe to eng and the other way
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
      { pageLanguage: 'en',
        includedLanguages: 'sv,en',
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE
      },
      'google_translate_element'
  );
}
