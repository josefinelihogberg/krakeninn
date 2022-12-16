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
  moneyAmountP.innerText = counter;
  })
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