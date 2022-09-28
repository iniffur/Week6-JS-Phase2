class ShoppingBasket{

    constructor(){
        this.currentBasket = [];
    }

    addItem(candy){
        this.currentBasket.push(candy);
    }

    getTotalPrice(){
        let initialPrice = 0
        this.currentBasket.map((basketItem) => {
            initialPrice += basketItem.price;
        })
        return initialPrice;
    }
}

module.exports = ShoppingBasket;
