
let main = document.querySelector("main");
let foodCategory = document.querySelector("nav .food-category");
let drinksCategory = document.querySelector("nav .drinks-category");
let bestFoodCategory = document.querySelector("nav .home");
let sweetsCategory = document.querySelector("nav .sweets-category");
let tableSelector = document.querySelector(".table-selector");
foodCategory.addEventListener("click", openFoodMenu);
drinksCategory.addEventListener("click", openDrinksMenu);
bestFoodCategory.addEventListener("click", openHighlightsMenu);
sweetsCategory.addEventListener("click", openSweetsMenu);

// Cart
let cartBox = document.querySelector(".cart-box");
let addToCartBtnArray = document.querySelectorAll(".add-cart");
let cartIcon = document.querySelector(".cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector(".close-cart");
let cartRemove = document.querySelector(".cart-remove");
let cartQuantity = document.querySelector(".cart-quantity");
// let quantity = cartQuantity.value
let quantity = 0;
let totalPrice = document.querySelector(".total-price");
let total = 0;
let shoppingCounter = [];
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
  main.style.opacity = "1";
});

// Update the number of items in the cart
function addToCartListener(){
  let addToCartBtnArray = document.querySelectorAll(".add-cart");
  for (let i = 0; i < addToCartBtnArray.length; i++) {
    addToCartBtnArray[i].addEventListener('click',addToCart);
    
  };
};
function addToCart(){
  let cartTotal = document.querySelector('.cart-total');
  let product = event.target;
  shoppingCounter.push(product);
  cartTotal.textContent = shoppingCounter.length;
  generateCartCard();
  
}
//creates an object from the item added to cart.
function addToCartObject(name, price){
  header = name;
  price = price;
  return [header, price];
}
//function to calculate total price in cart.
function cartSum(price){
  totalPrice.textContent = (+totalPrice.textContent) + (+price);
}
//generates the HTML for every card in cart.
function generateCart(menuName, price){
  let newArticle = document.createElement("article");
  let cardContent =`
  <div class="cart-box image.png">
  <div class="detail-box">
    <p class="title">${menuName}</p>
    <p class="product-price">${price}</p>
    <i class="fa fa-remove"></i>
    <input class="cart-quantity" type="number" value="1"/>
  </div>
  <button class="cart-remove" translate="no">Remove</button>
</div>`
newArticle.innerHTML = cardContent;
cartBox.append(newArticle);
}
function generateCartCard(){
  let article = event.target.parentNode;
  let menuName ="";
  let menuPrice = 0;
  console.log(article.childNodes);
  for (let i = 0; i < article.childNodes.length; i++) {
    if (article.childNodes[i].className == "product-title"){
      menuName = article.childNodes[i].innerText;
    }
    if (article.childNodes[i].className == "price") {
      menuPrice = article.childNodes[i].innerText;
    }
  }
  shoppingCart.push(addToCartObject(menuName, menuPrice))
  console.log(shoppingCart);
  generateCart(menuName, menuPrice);
  cartSum(menuPrice);
  updateSpendMoneyDisplay(menuPrice);
}
// Add event listener to the remove button in the cart
function handelCartRemove () {
  cartBox.style.display ="none";
  totalNumber = 0;
}

// cartRemove.addEventListener('click', handelCartRemove);

// Add event listener to the change of product quantity, working on...
// cartQuantity.addEventListener('change', function(event){
//   let productPrice = document.querySelector(".product-price").textContent;
//   total = total + productPrice * cartQuantity;
// });
// Choose which table you're sitting at

//Creates the pop-up to set table number.
function createTableSelector() {
  tableSelector.innerHTML = `
    <div class="options-container">
    <h2 class="options-container-text">What table are you sitting at?</h2>
      <input type="number" id="tables"></input>
      <button onclick="tableNumber()">Submit</button>
    </div>
  `;
}

createTableSelector();

//Function to save the users table number.
function tableNumber() {
  let userNumber = document.getElementById("tables").value;
  clearTableSelection();
}
//Function to remove pop-up for table selection.
function clearTableSelection(){
  tableSelector.remove();
}

function generateFoodList(category) {
  for (let i = 0; i < db[category].length; i++) {
    let newArticle = document.createElement("article");
    let foodContent = 
    `<h2 class="product-title" translate="no">${db[category][i].name}</h2>
    <figure>
    <img class="product-img" src="${db[category][i].img}"/>
    </figure>
    <p>${db[category][i].dsc}</p>
    <p class="price" translate="no">${db[category][i].price}</p>
    <button class="add-cart buttonStyle">Add to cart</button>`;
    newArticle.className = "card";
    newArticle.innerHTML = foodContent;
    main.append(newArticle);
  }
  addToCartListener();
 
}

function foodCategories() {
  let newDiv = document.createElement('div');
  let categories = `
  <button class = "bbqs categoryBtn buttonStyle">bbqs</button>
  <button class = "steaks categoryBtn buttonStyle">steaks</button>
  <button class = "porks categoryBtn buttonStyle">porks</button>
  <button class = "fried categoryBtn buttonStyle">fried-chicken</button>
  <button class = "sausages categoryBtn buttonStyle">sausages</button>
  <button class = "pizzas categoryBtn buttonStyle">pizzas</button>
  <button class = "burgers categoryBtn buttonStyle">burgers</button>
  <button class = "sandwiches categoryBtn buttonStyle">sandwiches</button>
  <button class = "breads categoryBtn buttonStyle">breads</button>`;
  newDiv.innerHTML = categories;
  newDiv.className = "foodCategories";
  main.append(newDiv);
}
function sweetsCategories() {
  let newDiv = document.createElement("div");
  let categories = `
  <button class = "desserts categoryBtn buttonStyle">Desserts</button>
  <button class = "chocolates categoryBtn buttonStyle">Chocolates</button>
  <button class = "ice-cream categoryBtn buttonStyle">Ice-cream</button>`;
  newDiv.innerHTML = categories;
  newDiv.className = "sweetsCategories";
  main.append(newDiv);
}
function clearMenu() {
  main.innerHTML = "";
}
function openDrinksMenu() {
  clearMenu();
  generateFoodList("drinks");
}
function openHighlightsMenu() {
  clearMenu();
  generateFoodList("best-foods");
}
function openSweetsMenu() {
  clearMenu();
  sweetsCategories();
  let desserts = document.querySelector("main .desserts");
  desserts.addEventListener("click", openDesserts);
  let chocolates = document.querySelector("main .chocolates");
  chocolates.addEventListener("click", openChocolates);
  let icecream = document.querySelector("main .ice-cream");
  icecream.addEventListener("click", openIcecream);
}
function openDesserts() {
  clearMenu();
  generateFoodList("desserts");
}
function openChocolates() {
  clearMenu();
  generateFoodList("chocolates");
}
function openIcecream() {
  clearMenu();
  generateFoodList("ice-cream");
}
function openFoodMenu() {
  clearMenu();
  foodCategories();
  let bbqs = document.querySelector("main .bbqs");
  bbqs.addEventListener("click", openBbqs);
  let steaks = document.querySelector("main .steaks");
  steaks.addEventListener("click", opensteaks);
  let porks = document.querySelector("main .porks");
  porks.addEventListener("click", openporks);
  let fried = document.querySelector("main .fried");
  fried.addEventListener("click", openfried);
  let sausages = document.querySelector("main .sausages");
  sausages.addEventListener("click", opensausages);
  let pizzas = document.querySelector("main .pizzas");
  pizzas.addEventListener("click", openpizzas);
  let burgers = document.querySelector("main .burgers");
  burgers.addEventListener("click", openburgers);
  let sandwiches = document.querySelector("main .sandwiches");
  sandwiches.addEventListener("click", opensandwiches);
  let breads = document.querySelector("main .breads");
  breads.addEventListener("click", openbreads);
}
function openBbqs() {
  clearMenu();
  generateFoodList("bbqs");
}
 function opensteaks (){
  clearMenu();
  generateFoodList("steaks");
}
function openporks() {
  clearMenu();
  generateFoodList("porks");
}
function openfried() {
  clearMenu();
  generateFoodList("fried-chicken");
}
function opensausages() {
  clearMenu();
  generateFoodList("sausages");
}
function openpizzas() {
  clearMenu();
  generateFoodList("pizzas");
}
function openburgers() {
  clearMenu();
  generateFoodList("burgers");
}
function opensandwiches() {
  clearMenu();
  generateFoodList("sandwiches");
}
function openbreads() {
  clearMenu();
  generateFoodList("breads");
}


// translate

function googleTranslateElementInit() {
  new google.translate.TranslateElement({pageLanguage: "en"}, 'google_translate_element');
}

function ChangeSwe(e) {
  var lang = document.getElementById("lang-sv").value;
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field 
    if(option.value==lang){
       selectField.selectedIndex = i;
       // trigger change event afterwards to make google-lib translate this side
       selectField.dispatchEvent(new Event('change'));
       break;
    }
  }
}

function changeEng(e) {
  var lang = document.getElementById("lang-en").value;
  var selectField = document.querySelector("#google_translate_element select");
  for(var i=0; i < selectField.children.length; i++){
    var option = selectField.children[i];
    // find desired langauge and change the former language of the hidden selection-field 
    if(option.value==lang){
       selectField.selectedIndex = i;
       // trigger change event afterwards to make google-lib translate this side
       selectField.dispatchEvent(new Event('change'));
       break;
    }
  }
}
//this function creates an input where the costumer can put in an amount
//of money that he/she wants to spend during the night. This amount will
//be appended to a p tag somewhere on the page.
function createFormMoneyInput(){
  let moneyForm = document.createElement('form');
  let moneyAmountInput = document.createElement('input');
  let moneyAmountSubmitBtn = document.createElement('button');
  moneyAmountSubmitBtn.innerText = 'add my money';
  moneyAmountInput.setAttribute('type', 'text')
  cart.append(moneyForm);
  moneyForm.append(moneyAmountInput);
  moneyForm.append(moneyAmountSubmitBtn);
  moneyForm.addEventListener('submit', function(event){
    event.preventDefault();
    let amountH2 = document.createElement('h2');
    amountH2.innerText = 'you have this much left to spend:';
    let moneyAmountP = document.createElement('p');
    moneyAmountP.classList.add("moneyP");
    let cartBox = document.querySelector(".cart-box");
   cartBox.append(amountH2);
   cartBox.append(moneyAmountP);
   moneyAmountP.innerText = `${moneyAmountInput.value}`;
  })
}
createFormMoneyInput();
function clearFormInput(){
  moneyForm.remove();
}
//updates the remaining value in wallet.
function updateSpendMoneyDisplay(productPrice) {
  let moneyP = document.querySelector('.moneyP');
  if (moneyP.innerText < parseInt(productPrice, 10)){
    alert("You dont have enough funds to buy this item");
  }else{
    moneyP.innerText = moneyP.innerText - parseInt(productPrice, 10);
  }
}
//starts when opening site
openHighlightsMenu();