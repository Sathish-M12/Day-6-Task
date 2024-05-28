

let person = {
    name: "john",
    age: 30,
    address: {
        city: "New Delhi",
        state: "Delhi"
    },
    work: "IT",
    hobbies: ["reading", "gaming"]
}

let newPerson = JSON.parse(JSON.stringify(person))
newPerson.name = "Kabali"
newPerson.address.city = "Chennai"
console.log(person)
console.log(newPerson)