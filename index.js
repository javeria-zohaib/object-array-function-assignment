var people = {
    friends: []
};
var friend1 = {
    firstname: "sara",
    lastname: "khan",
    id: "sarakhan@gmail.com"
};
var friend2 = {
    firstname: "shanzay",
    lastname: "abbbasi",
    id: "shanzay123@gmail.com"
};
var friend3 = {
    firstname: "omer",
    lastname: "zohaib",
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);
/*Assignment 2:Manipulating an Array: Rearranging Words
Objective:
Rearrange an array using array methods to form the sentence "I am a student of GIAIC".
Steps:
1. Scrambled Array:
o Start with an array of elements in a scrambled order, like:

const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
• Modify the Array:
• Use methods like split(), join(), push(), pop(), shift(), and unshift() to:
o Convert non-strings (booleans, numbers) to strings if needed.
o Split elements into character arrays (optional).
o Rearrange characters or elements in the desired order (modify original array or
create temporary arrays).

• Output the Result:
• Use join() to combine elements back into a single string: "I am a student of GIAIC".*/
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2, 2);
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1, 0, "am", "a");
scrambledArray.splice(5, 2);
var rearrangearray = scrambledArray.join(" ");
console.log(rearrangearray);
var inventory = [];
var product1 = { name: "laptop", model: "XP123", cost: 45000, quantity: 1200 };
var product2 = { name: "smartwatch", model: "X90123", cost: 35000, quantity: 10000 };
var product3 = { name: "mobile", model: "redmenote10", cost: 55000, quantity: 1000 };
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
console.log("quantity of third product:", inventory[2].quantity);
var product4 = { name: "microwave", model: "X90123", cost: 20000, quantity: 2000 };
var product5 = { name: "headphone", model: "redmenote10", cost: 1500, quantity: 3000 };
inventory.push(product4, product5);
console.log("price of fifth product is", inventory[4].cost);
console.log(inventory);
