let incomingPrice = 10;
let totalPrice = 100;
let totalPriceVat = 0;
describe("changeSumValueOfCart", function(){
    it('addsSum', function(){
        expect(addCartSum(incomingPrice)).toBe(totalPrice);
    });
    it('removeSum', function(){
        expect(removeCartSum(incomingPrice)).toBe(totalPrice);
    });
});

describe("showVatToBill", function(){
    it('addVat', function(){
        expect(addVatCartSum(totalPrice)).toBe(totalPriceVat);
    });
});