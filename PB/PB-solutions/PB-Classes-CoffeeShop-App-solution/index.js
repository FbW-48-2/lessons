
class CoffeeShop {
    constructor (name, menu, orders) {
      this.name = name
      this.menu = menu
      this.orders = orders
    }
    shopName = () => this.name
    addOrder = (item) => {
      if (this.menu.filter(m => m.item == item).length) {
        this.orders.push(item)
        return "Order added!" }
      return "This item is currently unavailable!"
    }
    fulfillOrder = () => this.orders.length ? `The ${this.orders.shift()} is ready!` : "All orders have been fulfilled!"
    listOrders = () => this.orders
    dueAmount = () => +this.orders.reduce((t, x) => t + this.menu.filter(m => m.item == x)[0].price, 0.0).toFixed(2)
    cheapestItem = () => this.menu.reduce(([n, p], x) => x.price < p ? [x.item, x.price] : [n, p], ["", 100.0])[0]
    drinksOnly = () => this.menu.filter(m => m.type == "drink").map(n => n.item)
    foodOnly = () => this.menu.filter(m => m.type == "food").map(n => n.item)
  }
