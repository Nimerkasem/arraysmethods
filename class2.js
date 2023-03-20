const dogs = [
    {
      id: "dog-1",
      name: "Poodle",
      temperament: [
        "Intelligent",
        "Active",
        "Alert",
        "Faithful",
        "Trainable",
        "Instinctual",
      ],
    },
    {
      id: "dog-2",
      name: "Bernese Mountain Dog",
      temperament: ["Affectionate", "Intelligent", "Loyal", "Faithful"],
    },
    {
      id: "dog-3",
      name: "Labrador Retriever",
      temperament: [
        "Intelligent",
        "Even Tempered",
        "Kind",
        "Agile",
        "Outgoing",
        "Trusting",
        "Gentle",
      ],
    },
  ];
  // dogs.find((dog) => dog.name === "Bernese Mountain Dog");
  // {id: 'dog-2', name: 'Bernese Mountain Dog', ...etc}
  // The find() method returns the first element in the provided array that satisfies the provided
  //  testing function. If no values satisfy the testing function, undefined is returned.
  // dogs.some((dog) => dog.temperament.includes("Aggressive"));
  // false
  // The some() method tests whether at least one element in the array passes the test implemented
  //  by the provided function. It returns true if, in the array, it finds an element for which the
  //  provided function returns true; otherwise it returns false. It doesn't modify the array.
  // dogs.some((dog) => dog.temperament.includes("Trusting"));
  // true
  // dogs.every((dog) => dog.temperament.includes("Trusting"));
  // false
  // dogs.every((dog) => dog.temperament.includes("Intelligent"));
  // true
  // The every() method tests whether all elements in the array pass the test implemented by the
  //  provided function. It returns a Boolean value.
  // dogs.map((dog) => dog.name);
  // ['Poodle', 'Bernese Mountain Dog', 'Labrador Retriever']
  // The map() method creates a new array populated with the results of calling a provided function
  //  on every element in the calling array.
   const filtered = dogs.filter((dog) => dog.temperament.includes("Faithful"));
   console.log(filtered);
    
  // The filter() method creates a shallow copy of a portion of a given array, filtered
  //  down to just the elements from the given array that pass the test implemented by the provided
  // function.
  const reduced = dogs.reduce((acc, dog) => {
    return [...acc, ...dog.temperament];
  }, []);
  console.log(reduced);

  // [ 'Intelligent', 'Active', 'Alert', ...etc ]
  // The reduce() method executes a reducer function (that you provide) on each element of the array,
  //  resulting in a single output value.

//massage folder

  const data = [
    {
    name: "John",
    birthday: "1-1-1995",
    favoriteFoods: {
    meats: ["hamburgers", "sausages"],
    fish: ["salmon", "pike"],
    },
    },
    {
    name: "Mark",
    birthday: "10-5-1980",
    favoriteFoods: {
    meats: ["hamburgers", "steak", "lamb"],
    fish: ["tuna", "salmon", "barracuda"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["ham", "chicken"],
    fish: ["pike"],
    },
    },
    {
    name: "Thomas",
    birthday: "1-10-1990",
    favoriteFoods: {
    meats: ["bird", "rooster"],
    fish: ["salmon"],
    },
    },
    {
    name: "Mary",
    birthday: "1-10-1977",
    favoriteFoods: {
    meats: ["hamburgers", "lamb"],
    fish: ["anchovies", "tuna"],
    },
    },
    ]
   
      
         
  
     
   
       

 //   1. Create a function that returns all the names from the array.
  
 data.map((data)=> data.name);
  console.log(data);
   
 

//2. Create a function that returns all the objects that are born befor 1990.
   data.filter((data)=> data.birthday.includes<1990);
   console.log(data);

// 3.Create a function that returns an object of all the different foods from all the objects as the key and the number of times that food is present in all the objects as the value

function countFoods(data) {
  const foodCounts = {};
  for (const obj of data) {
    for (const category in obj.favoriteFoods) {
      for (const food of obj.favoriteFoods[category]) {
        if (!foodCounts[food]) {
          foodCounts[food] = 1;
        } else {
          foodCounts[food]++;
        }
      }
    }
  }
  return foodCounts;
}

console.log(countFoods(data));
 


//fun with array

// Instructions
// 1. Fill an array with 100 of the same object using the array fil  method
const obj = { name: "John", age: 30 }; 
const arr = Array(100).fill(obj); 
console.log(arr);
 
// 2. Create an array with numbers ranging from 1-100 using the Array.from method.
 
Array.from({ length: 100 }, () => Math.floor(Math.random() * 101));
console.log(arr);
 

 
// 3. Convert only values of an object into one array.
 
const obj2 = { name: "John", age: 30 }; 
const arr2 = Object.values(obj2); 
console.log(arr2);

// 4. Convert an array into one object.
 let arr3 ={ name: "John", age: 30 };
 let finalObj = {};
 for(let i = 0; i < arr.length; i++ ) {
  Object.assign(finalObj, arr[i]);
 }console.log(finalObj);
  

// 5. Find out if an array is an array.
 
const arr4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(Array.isArray(arr4));
console.log(arr4);
// 6. Copy an array Create a copy of an array that won’t affect the  original array if modified.
 
const arr5 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr6 = [...arr5];
console.log(arr5);
console.log(arr6);
// 7. Create a copy of an array that will affect the original Create a copy of an array that will affect the original array if modified.
 
const arr7 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr8 = [...arr7];
console.log(arr7);
console.log(arr8);

  
    
    
   



 


 







  



