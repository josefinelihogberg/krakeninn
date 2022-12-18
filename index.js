
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

function generateFoodList(category){
  console.log(category);
  for (let i = 0; i < db[category].length; i++) {
    let newArticle = document.createElement("article");
    let foodContent = 
    `<h2>${db[category][i].name}</h2>
    <figure>
    <img src="${db[category][i].img}"/>
    </figure>
    <p>${db[category][i].dsc}</p>
    <p>${db[category][i].price} sek</p>
    <button>Add to cart</button>`;
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


const testList = [ {
  "id": "ribs-brisket-and-burnt-ends",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/79619/joes-kc-ribs-brisket-and-burnt-ends.6710e994980e485e6441b794717ad6fb.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Joe's KC BBQ",
  "dsc": "Joe's KC Ribs, Brisket & Burnt Ends",
  "price": 110.99,
  "rate": 4,
  "country": "Kansas City, KS"
},
{
  "id": "005-kings-carolina-oink-sampler",
  "img": "https://goldbelly.imgix.net/uploads/showcase_media_asset/image/66752/carolina-bbq-oink-sampler.1340b5a10cedc238cb2280306dd1d5a5.jpg?ixlib=react-9.0.2&auto=format&ar=1%3A1",
  "name": "Kings BBQ",
  "dsc": "Carolina BBQ Oink Sampler",
  "price": 89,
  "rate": 4,
  "country": "Kinston, NC"
}]


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