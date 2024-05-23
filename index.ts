/* Assignment 1: Building Your Friend List
Learning Objective: Practice working with objects and arrays in TypeScript to create a data
structure.
Task: Create a program that manages a simple friend list.
1. Define an object named people containing an empty array called friends.
2. Create three separate objects, each representing a friend, with properties like firstName,
lastName, and optionally id.
3. Add these friend objects to the friends array within the people object.
4. Output the entire people object to the console, displaying your information and your
friend list.*/
type Friend={
    firstname:string,
    lastname:string,
    id?:string
}
let people={
     friends:[] as Friend[]
}
let friend1:Friend={
    firstname:"sara",
    lastname:"khan",
    id:"sarakhan@gmail.com"
};
let friend2:Friend={
    firstname:"shanzay",
    lastname:"abbbasi",
    id:"shanzay123@gmail.com"
}
let friend3:Friend={
    firstname:"omer",
    lastname:"zohaib",
    
};
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);
console.log(people);