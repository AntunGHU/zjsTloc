// 4'15

//* app

let shoppingList = ['Cheddar Cheese', '2% Milk'];
console.log(shoppingList)

//To change 2% Milk to Whole Milk
shoppingList[1] = 'Whole Milk';
console.log(shoppingList)

//To add Ice Cream to the end
//Only works if array is 2 items long...
shoppingList[3] = 'Ice Cream';  // [ 'Cheddar Cheese', 'Whole Milk', <1 empty item>, 'Ice Cream' ]
console.log(shoppingList)
console.log(typeof shoppingList[2]) // undefined

//To make sure you add to the end, no matter the length of the array:
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';
console.log(shoppingList)

//* video