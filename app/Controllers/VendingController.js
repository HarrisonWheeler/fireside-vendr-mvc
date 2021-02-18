import { ProxyState } from "../AppState.js";
import { vendingService } from "../Services/VendingService.js";

function drawMoney(){
  document.getElementById('money').innerHTML = ProxyState.money.toString()
}

function drawItems(){
  let itemZone = document.getElementById('items')
  let template = ''
  let items = ProxyState.items
  items.forEach(i => template += i.Template)
  itemZone.innerHTML = template
}


export default class VendingController {
  constructor(){
    ProxyState.on("money", drawMoney)
    ProxyState.on("items", drawItems)
    drawMoney()
    drawItems()
  }

  addMoney(){
    vendingService.addMoney()
  }

  buyItem(itemName){
    vendingService.buyItem(itemName)
  }


}