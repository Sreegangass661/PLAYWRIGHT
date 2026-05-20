export class InventoryPage {
    constructor(page){
        this.page=page
        this.property=page.locator('#add-to-cart-sauce-labs-bike-light')
        this.shoppingCartBadge=page.locator('.shopping_cart_badge')
        
    }
    async clickproperty(){
    await this.property.click()
    return this
}
async login(){
   await this.shoppingCartBadge.click()
   return this
}
}
