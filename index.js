
const p = document.querySelector('.test')
const p2 = document.querySelector('.test2')
let counter = 0;


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

//this function creates an input where the costumer can put in an amount
//of money that he/she wants to spend during the night. This amount will
//be appended to a p tag somewhere on the page.
function createFormMoneyInput(){
  let moneyForm = document.createElement('form');
  let moneyAmountInput = document.createElement('input');
  let moneyAmountSubmitBtn = document.createElement('button');
  moneyAmountSubmitBtn.innerText = 'add my money';
 moneyAmountInput.setAttribute('type', 'text')
  p.append(moneyForm);
  moneyForm.append(moneyAmountInput);
  moneyForm.append(moneyAmountSubmitBtn);
  moneyForm.addEventListener('submit', function(event){
    event.preventDefault();
    //let moneyAmountP = document.createElement('p');
   //p2.append(moneyAmountP);
   //p2.innerText = moneyAmountP;
   p2.innerText = ` ${moneyAmountInput.value} `;
    //counter = moneyAmountInput.value;
    //moneyAmountP.innerText = `Ditt saldo är: ${counter} kr`;
  
  })
}
createFormMoneyInput()





//this function takes the text of p2 , it accepts an array, an array of the fooods and drinkt that
//the costumer orders. The function add the prices togehter and then substract it 
//from the amount of the p2 tag and gives it the new value.
function updateSpendMoneyDisplay(arr) {
  let counter = p2.innerText;
  console.log(parseInt(counter))
 
 
  console.log(counter)
  let newCounterArr = arr.map(function(element){
    return element.price;;
    
  })
  console.log(newCounterArr);
  //return newCounterArr;
  let sum = 0;
  for (let item of newCounterArr){
  sum += item;
}
console.log(sum);
p2.innerText = (parseInt(counter)) - sum;
 return (parseInt(counter)) - sum;
}
















//starting functions
openHighlightsMenu();