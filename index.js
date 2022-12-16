const p = document.querySelector('.test')

let counter = 0;

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
createFormMoneyInput()
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
    let moneyAmountP = document.createElement('p');
    p.append(moneyAmountP);
    counter = moneyAmountInput.value;
    moneyAmountP.innerText = `Ditt saldo är: ${counter} kr`;
  
  })
}



/*
  function getPriceOfCart(arr){
    let newCounterArr = arr.map((element)=>{
      return arr.element.price;
    });
    return newCounterArr;

}

*/

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
    
function getTotalPrice(arr) {
  counter = p.innerText;
  let newCounterArr = arr.map(function(element){
    return  `${element.price}`;
  })
  counter = newCounterArr.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});
return counter;
  
}








/*
function ListEmails(arr) {
  let mailList = users.map((element) => {
    return arr.element.email;
  });
  return mailList;
}



/*
function addCounter(event){
  event.preventDefault();
  let moneyAmountP = document.createElement('p');
  p.append(moneyAmountP);
  counter = moneyAmountInput.value;
  moneyAmountP.innerText = counter;

}

*/