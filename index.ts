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
const scrambledArray = ["student", "of",true, 123, "am", "a", "GIAIC", "I"];
scrambledArray.splice(2,2);
scrambledArray.unshift("I");
scrambledArray.pop();
scrambledArray.splice(1,0,"am","a");
scrambledArray.splice(5,2);
let rearrangearray=scrambledArray.join(" ");
console.log(rearrangearray);
/*Assignment 3: Company Product Catalog
Learning Objective: Implement data structures in TypeScript to represent and manage product
information.
Task: Create a program to represent a product catalog using an array and perform basic queries.
1. Define an array named inventory to store product information.
2. Create three separate objects, each representing a product, with properties like name,
model, cost, and quantity.
3. Add these product objects to the inventory array using an appropriate array method.
4. Access and log the quantity property of a specific product (e.g., third product) in the
inventory array.
5. Explore adding and accessing more elements within the inventory array to understand
how to manage product data.*/
type Product={
    name:string,
    model:string,
    cost:number,
    quantity:number

}
let inventory:Product[]=[]
let product1:Product={name:"laptop",model:"XP123",cost:45000,quantity:1200};
let product2:Product={name:"smartwatch",model:"X90123",cost:35000,quantity:10000};
let product3:Product={name:"mobile",model:"redmenote10",cost:55000,quantity:1000};
inventory.push(product1);
inventory.push(product2);
inventory.push(product3);
console.log(`quantity of third product:`,inventory[2].quantity);
let product4:Product={name:"microwave",model:"X90123",cost:20000,quantity:2000};
let product5:Product={name:"headphone",model:"redmenote10",cost:1500,quantity:3000};
inventory.push(product4,product5)

console.log("price of fifth product is",inventory[4].cost);

console.log(inventory);
/*Assignment 4: Student List Organizer
Learning Objective: Get comfortable with data structures (objects and arrays) and basic
functions in TypeScript.
Tasks:
1. Student Data: The provided code defines an interface named Student that describes
student information like name, senior status (true/false), and whether they've completed
their assignments (true/false).
o Imagine this as a template for organizing student details.
2. Student List:
o An array named students stores information about several students using the
Student template. Think of this array as your class list!
3. Find Senior Students with Assignments (Optional):
o The code (not shown here) has a function that might find students who are seniors
and have completed their assignments.
o Can you guess why this information might be helpful?
4. Class List Update:
o Imagine you need to update your class list! The code (not shown here) might have
a function that removes students who haven't completed their assignments
(assuming only seniors are responsible).
o Can you think of any reasons why this might be useful (consider limitations)?*/
interface Student {
    name:string,
    isSenior:boolean,
    Hascompletedassignment:boolean
}
let students:Student[]=[];
let student1:Student={name:"khizar",isSenior:true,Hascompletedassignment:true};
let student2:Student={name:"khadija",isSenior:true,Hascompletedassignment:false};
let student3:Student={name:"omer",isSenior:false,Hascompletedassignment:false};
let student4:Student={name:"rabia",isSenior:true,Hascompletedassignment:true};
let student5:Student={name:"khoula",isSenior:true,Hascompletedassignment:false};
students.push(student1,student2,student3,student4,student5);
console.log(students);
function seniorStudentwithassignment (students:Student[]){
    let seniorStudentwithassignment:Student[]=[];
    students.forEach(student =>{
        if(student.isSenior && student.Hascompletedassignment){
            seniorStudentwithassignment.push(student)
        }
    })
    return seniorStudentwithassignment
}

let seniorStudent=seniorStudentwithassignment(students);
console.log(seniorStudentwithassignment);
seniorStudent.forEach(student => {
    console.log(student.name);});
    function updatedlist(students:Student[]){
        let updatedclasslist:Student[]=[]; 
        students.forEach(student =>{
            if(!student.isSenior || student.Hascompletedassignment){
                updatedclasslist.push(student)
            }
       
        })
        return updatedclasslist
    }
    let updatedclasslist=updatedlist(students);
console.log(updatedclasslist);
    updatedclasslist.forEach(student =>{
        console.log(student.name);
    });
   
      

