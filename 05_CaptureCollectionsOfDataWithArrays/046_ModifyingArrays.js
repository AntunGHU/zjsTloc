// 4'15

//* app

let shoppingList = ['Cheddar Cheese', '2% Milk'];
console.log(shoppingList)

//To change 2% Milk to Whole Milk
shoppingList[1] = 'Whole Milk';
console.log(shoppingList)

//To add Ice Cream to the end
//Only works if array is 2 items long...
shoppingList[2] = 'Ice Cream';
console.log(shoppingList)

//To make sure you add to the end, no matter the length of the array:
shoppingList[shoppingList.length] = 'Tomatoes';
shoppingList[shoppingList.length] = 'Potatoes';
console.log(shoppingList)

//* video