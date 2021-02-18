import { ProxyState } from "../AppState.js"


class VendingService {
  

  addMoney(){
    ProxyState.money += 1
  }

  buyItem(itemName){
    let item = ProxyState.items.find(i => i.name == itemName)
    if(item.price <= ProxyState.money && item.quantity > 0){
      ProxyState.money -= item.price
      item.quantity--

      let index = ProxyState.items.findIndex(i => i.name == itemName)
      ProxyState.items[index] = item
      ProxyState.items = ProxyState.items
      console.log(item);
    } else {
      window.alert("Purchase failed")
    }

  }

}

export const vendingService = new VendingService()