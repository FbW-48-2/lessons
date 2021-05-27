### Coffee Shop App

Write a **class** called **CoffeeShop**, which has **three instance variables**:

1.  **name** : a string (basically, of the shop)
2.  **menu** : an array of items (of object type), with each item containing the **item** (name of the item), **type** (whether _food_ or a _drink_) and **price**.
3.  **orders** : an empty array

and **seven methods**:

1.  **addOrder**: adds the **name** of the item to the end of the **orders** array if it exists on the **menu**. Otherwise, return `"This item is currently unavailable!"`
2.  **fulfillOrder**: if the **orders** array is **not empty**, return `"The {item} is ready!"`. If the **orders** array is empty, return `"All orders have been fulfilled!"`
3.  **listOrders**: returns the list of **orders** taken, otherwise, an **empty** array.
4.  **dueAmount**: returns the total amount due for the **orders** taken.
5.  **cheapestItem**: returns the **name** of the cheapest item on the menu.
6.  **drinksOnly**: returns only the _item_  **names** of _type_  **drink** from the menu.
7.  **foodOnly**: returns only the _item_  **names** of _type_  **food** from the menu.

**IMPORTANT**: Orders are fulfilled in a **FIFO** (first-in, first-out) order.


### Examples

```
tcs.addOrder("hot cocoa") ➞ "This item is currently unavailable!"
// Tesha's coffee shop does not sell hot cocoa
tcs.addOrder("iced tea") ➞ "This item is currently unavailable!"
// specifying the variant of "iced tea" will help the process

tcs.addOrder("cinnamon roll") ➞  "Order added!"
tcs.addOrder("iced coffee") ➞ "Order added!"
tcs.listOrders ➞ ["cinnamon roll", "iced coffee"]
// the list of all the items in the current order

tcs.dueAmount() ➞ 2.17

tcs.fulfillOrder() ➞ "The cinnamon roll is ready!"
tcs.fulfillOrder() ➞ "The iced coffee is ready!"
tcs.fulfillOrder() ➞ "All orders have been fulfilled!"
// all orders have been presumably served

tcs.listOrders() ➞ []
// an empty array is returned if all orders have been exhausted

tcs.dueAmount() ➞ 0.0
// no new orders taken, expect a zero payable

tcs.cheapestItem() ➞ "lemonade"
tcs.drinksOnly() ➞ ["orange juice", "lemonade", "cranberry juice", "pineapple juice", "lemon iced tea", "vanilla chai latte", "hot chocolate", "iced coffee"]
tcs.foodOnly() ➞ ["tuna sandwich", "ham and cheese sandwich", "bacon and egg", "steak", "hamburger", "cinnamon roll"]
```

### Notes

Round off **due amount** up to **two decimal** places.
