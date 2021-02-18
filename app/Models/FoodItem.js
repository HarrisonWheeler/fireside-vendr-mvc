

export default class FoodItem{

  constructor({name, price, quantity }){
    this.name = name
    this.price = price
    this.quantity = quantity
    this.isPublic = true
    // add public bool when wanting to show off ternary to add/remove classes
  }


  // make sure to add font-awesome for fa-spin to work
  // <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>

  // ${this.isPublic ? 'fa-spin': ""}"

  // ${this.price > 2 ? "text-danger" : "text-info" }" ${this.quantity > 0 ? '' : 'disabled'}

  get Template(){

    return /*html*/ `
    <div class="card col-4 mt-5 text-center p-1 m-1">
      <div class="card-body ">
        <h4 class="card-title">${this.name} x ${this.quantity}</h4>
        <p class="card-text">Price: $${this.price}</p>
        <button class="btn btn-success foodButton ${this.price > 2 ? "text-danger" : "text-info" }" ${this.quantity > 0 ? '' : 'disabled'} onclick="app.vendingController.buyItem('${this.name}')">Buy now</button>
      </div>
  </div>
    `
  }

}