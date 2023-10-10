// /*
// Question #1

// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */

//  let student1 = {
//     id: 'GMK435&g62L00',
//     name: 'John Smith',
//     age: 24,
//     isTired: true,
//     projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
//     pet: 'dog'
// }

// let student2= {
//     id: '6KGS%54GmlY76',
//     name: 'Jenny Hawthorne',
//     age: 28,
//     isTired: false,
//     projectsCompleted:["HTML Portfolio"],
// }

// let student3 = {
//     id: '6KGS%54GmlY76',
//     name: 'Neo',
//     age: 57,
//     isTired: true,
//     projectsCompleted:["Matrix","Biological Interface Program"],
//     pet:'cat'
// } 

type student={
    id:string,
    name: string,
    age:number,
    isTired:boolean,
    projectsCompleted: string[],
    pet?:string
}

let student1:student = {
    id: 'GMK435&g62L00',
    name: 'John Smith',
    age: 24,
    isTired: true,
    projectsCompleted:["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
    pet: 'dog'
}
console.log(student1)

let student2:student = {
    id: '6KGS%54GmlY76',
    name: 'Jenny Hawthorne',
    age: 28,
    isTired: false,
    projectsCompleted:["HTML Portfolio"],
}
console.log(student2)

let student3:student = {
    id: '6KGS%54GmlY76',
    name: 'Neo',
    age: 57,
    isTired: true,
    projectsCompleted:["Matrix","Biological Interface Program"],
    pet:'cat'
}
console.log(student3)




// /* 
// Question #2

// Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function  */

// type Fruit={
//     color:string,
//     shape:string
//   }
  
//   let apple:Fruit={color:"red", shape:"sphere"}
//   let eaten:Fruit|null=null
  
//   /* 

type Fruit={
    color:string,
    shape:string
}

let apple:Fruit={color:"red", shape:"shape"}
let eaten:Fruit |null=null

function printFruit(fruit: Fruit| null):void{
    if(fruit){
        console.log(fruit.color)
    }   else{
        console.log(`You ate my fruit already`)
    }
}
console.log(apple.color)
      



// /* 
// Question #3

// Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
type Book={
    isbn:string,
    title:string,
    author:string
  }
  
  type DigitalBook={
    fileType:string,
   }
  

type Ebook = Book & DigitalBook
const bookUser: Book & DigitalBook={
    isbn: 'book id',
    title: 'it comes at night',
    author: 'billy Bob',
    fileType: 'horror'
}
console.log(bookUser)




/* 
Question #4

Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures

- All ShopItems have an numeric id that can not be edited 
- All ShopItems have a price
- All ShopItems have a description
- Some ShopItems have a color
- All ShopItems have a Category represented with an enum 
    - Possible Categories are `Shirts` `Shoes` `Pants` `Hats`
- All ShopItems have a list of keywords used to help search for the ShopItem 
    - For Example A Ironman Tshirt may have keywords = ["Marvel", "Endgame", "Ironman","Character Tees", "Tony Stark"]

After Creating the `ShopItem` type create 3 items using this type */

type ShopItems = {
    numeric_id : string;
    price : number;
    decription: string;
    color?: string;
    Keywords: []


}
  const ShopItems1 = {
    numeric_id: '222'
    price: 1000,
    description: 'Electronics'
  };
  
  const ShopItems2 = {
    numeric_id: '555',
    price: 2.99,
    description: 'gum'
  };
  
  const ShopItems3 = {
    numeric_id: '999',
    price: 100,
    description: 'skateboard'
  };
  
  console.log('ShopItems1');
  console.log('ShopItems2');
  console.log('ShopItems3');
  


    enum Category{
        shirts= 'shirts',
        shoes= 'shoes',
        pants= 'pants',
        hats= 'hats'
    }
console.log(Category.shirts)
console.log(Category.shoes)
console.log(Category.pants)
console.log(Category.hats)
    



