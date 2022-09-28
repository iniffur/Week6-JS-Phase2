const ShoppingBasket = require('./shoppingBasket');

describe('shoppingBasket', () => {
    it('adds new candy to shopping basket and gets price', () => {
        const basket = new ShoppingBasket;
        const marsDouble = {name: 'Mars', price: 2};
        basket.addItem(marsDouble);
        expect(basket.currentBasket.length).toBe(1);
        expect(basket.getTotalPrice()).toBe(2);
    });
});