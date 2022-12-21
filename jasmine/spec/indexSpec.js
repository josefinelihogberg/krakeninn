let incomingPrice = 10;
let totalPrice = 100;
let addVatCartSum = 0;
describe("changeSumValueOfCart", function(){
    it('addsSum', function(){
        expect(addCartSum(incomingPrice)).toBe(totalPrice);
    });
    it('removeSum', function(){
        expect(removeCartSum(incomingPrice)).toBe(totalPrice);
    });
});

describe("showInterestBill", function(){
    it('addInterest', function(){
        expect(addInterestCartSum(totalPrice)).toBe(totalpriceInterest);
    });
});