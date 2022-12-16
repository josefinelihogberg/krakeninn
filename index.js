// function that change the lang from swe to eng and the other way
function googleTranslateElementInit() {
  new google.translate.TranslateElement(
    {
      pageLanguage: "en",
      includedLanguages: "sv,en",
      layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
    },
    "google_translate_element"
  );
}

// Choose which table you're sitting at
const tableSelector = document.querySelector(".table-selector");

function createTableSelector() {
  tableSelector.innerHTML = `
    <div class="options-container">
    <h2 class="options-container-text">Which table are you sitting at?</h2>
    <form action="#">
      <select name="tables" id="table">
        <option value="1">Table 1</option>
        <option value="2">Table 2</option>
        <option value="3">Table 3</option>
        <option value="4">Table 4</option>
        <option value="5">Table 5</option>
        <option value="6">Table 6</option>
        <option value="7">Table 7</option>
        <option value="8">Table 8</option>
        <option value="9">Table 9</option>
        <option value="10">Table 10</option>
        <option value="11">Table 11</option>
        <option value="12">Table 12</option>
        <option value="13">Table 13</option>
        <option value="14">Table 14</option>
        <option value="15">Table 15</option>
      </select>
      <input type="submit" value="Submit" />
    </form>
    </div>
  `;
}

createTableSelector();
