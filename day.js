/*Create an object person with properties firstName, lastName, and age. Then:
Access and print the firstName property.
Add a new property city with the value "New York" and print the updated object.
*/

const person = {
    firstName: "vangaveeti",
    lastName: "ranga",
    age: 35,
}

console.log(person.firstName)
person.city = "New York";
console.log(person)



/*Create an object product with properties name, price, and inStock. Then:
Modify the price property to a new value.
Delete the inStock property from the object and print the updated object.
*/

const product = {
    name: "v guard purifier",
    price: 10000,
    inStock: true,
}
product.price = 13000
delete product.inStock
console.log(product)



/*3.Create an object library with nested objects for different genres. Each genre has a list of books. Then:
Add a new genre scienceFiction with a list of two books.
Access and print the first book in the fantasy genre.
Delete the mystery genre from the object.
*/


const library = {
    fantasygenre: [{
        book1: "harry potter", year: 1997
    },
    {
        book2: "the kingkiller chronicle", year: 2007
    }],
    mysterygenre: [{
        book1: "the silent patient", year: 2019
    },
    {
        book2: "Murder on the orient express", year: 1934
    }]

}

library.scienceFicton = [{
    book1: "dune", year: 1965,
},
{
    book2: "neuromancer", year: 1984
}]
console.log(library.fantasygenre[0])
delete library.mysterygenre
console.log(library)



/*Create an object user with properties username, email, and an address object that contains city, state, and zip. Then:
Freeze the user object using Object.freeze().
Try to change the email property and check if the object is frozen using Object.isFrozen().
Add a new property phone to the user object and observe the result.
*/

const user = {
    userName: "satish_240",
    email: "satish24@gmail.com",
    city: "Hyderabad",
    state: "Telangana",
    zip: 500048,

}
Object.freeze(user)
user.email = "satish1999@gmail.com";
user.phone = 9121083057;
console.log(Object.isFrozen(user))



/*Create an object car with properties make, model, and price. Then:
Seal the object using Object.seal().
Try to delete the make property and check if the object is sealed using Object.isSealed().
Modify the price property, and check if the object is still extensible using Object.isExtensible()

*/


const car = {
    make: "ford",
    model: "mustang 2017",
    price: 9000000,
}

Object.seal(car)
delete car.make
console.log(Object.isSealed(car))
car.price = 10000000
console.log(Object.isExtensible(car))




const store = {
    name: "SuperMart",
    products: {
        electronics: {
            phones: {
                apple: {
                    iPhoneX: { price: 999, stock: 20 },
                    iPhone12: { price: 1099, stock: 15 },
                },
                samsung: {
                    galaxyS21: { price: 799, stock: 25 },
                    galaxyNote20: { price: 999, stock: 10 },
                },
            },
            laptops: {
                dell: {
                    XPS13: { price: 1200, stock: 10 },
                    Inspiron15: { price: 800, stock: 30 },
                },
                hp: {
                    SpectreX360: { price: 1300, stock: 5 },
                    Pavilion15: { price: 750, stock: 20 },
                },
            },
        },
        groceries: {
            fruits: {
                apples: { price: 2, stock: 100 },
                bananas: { price: 1, stock: 150 },
            },
            vegetables: {
                carrots: { price: 1.5, stock: 200 },
                spinach: { price: 1, stock: 100 },
            },
        },
    },
};

console.log(store.products.groceries.vegetables.spinach.stock)
console.log(store.products.electronics.laptops.hp.Pavilion15.price)