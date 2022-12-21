function addCartSum(price){
    totalPrice = totalPrice + price;
    return totalPrice;
  };
  function removeCartSum(price){
    totalPrice = totalPrice - price;
    return totalPrice;
  };
  function addVatCartSum(sum){
    totalPriceVat = sum * 1.25;
    console.log(totalPriceVat)
    return totalPriceVat;
  };