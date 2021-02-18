import Value from "./Models/Value.js"
import { EventEmitter } from "./Utils/EventEmitter.js"
import { isValidProp } from "./Utils/isValidProp.js"
import FoodItem from './Models/FoodItem.js'

class AppState extends EventEmitter {
  /** @type {Value[]} */
  values = []

  /** @type {FoodItem[]} */
  items = [new FoodItem({name: "cheetos", price: 2.00, quantity: 7}), new FoodItem({name: "zapps", price: 3, quantity: 1}), new FoodItem({name: "doritos", price: 5, quantity: 4}), new FoodItem({name: "Snickers", price: 1, quantity: 15})]

  money = 0
}

export const ProxyState = new Proxy(new AppState(), {
  get(target, prop) {
    isValidProp(target, prop)
    return target[prop]
  },
  set(target, prop, value) {
    isValidProp(target, prop)
    target[prop] = value
    target.emit(prop, value)
    return true
  }
})
