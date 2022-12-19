let main = document.querySelector('main');
let foodCategory = document.querySelector("nav .food-category");
let drinksCategory = document.querySelector("nav .drinks-category");
let bestFoodCategory = document.querySelector("nav .home");
let sweetsCategory = document.querySelector("nav .sweets-category")
foodCategory.addEventListener('click', openFoodMenu);
drinksCategory.addEventListener('click', openDrinksMenu);
bestFoodCategory.addEventListener('click', openHighlightsMenu);
sweetsCategory.addEventListener('click', openSweetsMenu)

function generateFoodList(category){
  for (let i = 0; i < db[category].length; i++) {
    let newArticle = document.createElement("article");
    let foodContent = 
    `<h2 translate="no">${db[category][i].name}</h2>
    <figure>
    <img src="${db[category][i].img}"/>
    </figure>
    <p translate="no">${db[category][i].dsc}</p>
    <p translate="no">${db[category][i].price} sek</p>
    <button class = "buttonStyle">Add to cart</button>`;
    newArticle.className = "card";
    newArticle.innerHTML = foodContent;
    main.append(newArticle);
  }
}
function foodCategories(){
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
  <button class = "breads categoryBtn buttonStyle">breads</button>`
  newDiv.innerHTML = categories;
  newDiv.className = "foodCategories";
  main.append(newDiv);
}
function sweetsCategories(){
  let newDiv = document.createElement('div');
  let categories = `
  <button class = "desserts categoryBtn buttonStyle">Desserts</button>
  <button class = "chocolates categoryBtn buttonStyle">Chocolates</button>
  <button class = "ice-cream categoryBtn buttonStyle">Ice-cream</button>`
  newDiv.innerHTML = categories;
  newDiv.className = "sweetsCategories";
  main.append(newDiv);
}
function clearMenu() {
  main.innerHTML = "";
}
 function openDrinksMenu(){
  clearMenu();
   generateFoodList("drinks");
 }
 function openHighlightsMenu(){
  clearMenu();
   generateFoodList("best-foods");
 }
 function openSweetsMenu(){
  clearMenu();
  sweetsCategories();
  let desserts = document.querySelector('main .desserts');
  desserts.addEventListener('click', openDesserts);
  let chocolates = document.querySelector('main .chocolates');
  chocolates.addEventListener('click', openChocolates);
  let icecream = document.querySelector('main .ice-cream');
  icecream.addEventListener('click', openIcecream);
 }
 function openDesserts(){
  clearMenu();
  generateFoodList("desserts");
 }
 function openChocolates(){
  clearMenu();
  generateFoodList("chocolates")
 }
 function openIcecream(){
  clearMenu();
  generateFoodList("ice-cream")
 }
function openFoodMenu() {
  clearMenu();
  foodCategories();
  let bbqs = document.querySelector('main .bbqs');
  bbqs.addEventListener('click', openBbqs)
  let steaks = document.querySelector('main .steaks');
  steaks.addEventListener('click', opensteaks)
  let porks = document.querySelector('main .porks');
  porks.addEventListener('click', openporks)
  let fried = document.querySelector('main .fried');
  fried.addEventListener('click', openfried)
  let sausages = document.querySelector('main .sausages');
  sausages.addEventListener('click', opensausages)
  let pizzas = document.querySelector('main .pizzas');
  pizzas.addEventListener('click', openpizzas)
  let burgers = document.querySelector('main .burgers');
  burgers.addEventListener('click', openburgers)
  let sandwiches = document.querySelector('main .sandwiches');
  sandwiches.addEventListener('click', opensandwiches)
  let breads = document.querySelector('main .breads');
  breads.addEventListener('click', openbreads)
 }
 function openBbqs(){
  clearMenu();
  generateFoodList("bbqs");
  console.log("here")
 }
 function opensteaks (){
  clearMenu();
  generateFoodList("steaks");
 }
 function openporks (){
  clearMenu();
  generateFoodList("porks");
 }
 function openfried (){
  clearMenu();
  generateFoodList("fried-chicken");
 }
 function opensausages (){
  clearMenu();
  generateFoodList("sausages");
 }
 function openpizzas (){
  clearMenu();
  generateFoodList("pizzas");
 }
 function openburgers (){
  clearMenu();
  generateFoodList("burgers");
 }
 function opensandwiches (){
  clearMenu();
  generateFoodList("sandwiches");
 }
 function openbreads (){
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


//starting functions
openHighlightsMenu();