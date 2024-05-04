/****************************************
 * 10.1
 ****************************************/

// function User(name, surname) {
//     this.name = name;
//     this.surname = surname
// }
//
// User.prototype.getInfo = function () {
//     return {
//         name: this.name,
//         surname: this.surname
//     }
// }
//
// const user = new User('Serhii', 'Savchuk');
// console.log(user.getInfo());

/****************************************
 * 10.2
 ****************************************/

// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//
// function getEvenNumbers(arr) {
//     return arr.filter((digit) => digit % 2 === 0);
// }
//
//
// const even = getEvenNumbers(arr);
// console.log(even); // [2, 4, 6, 8]

/****************************************
 * 10.3
 ****************************************/

const contacts = [
  {
    name: "Serhii",
    phone: "+380999999999",
    email: "example@email.com",
  },
];

function Contact({ name, phone, email }) {
  this.name = name;
  this.phone = phone;
  this.email = email;
}

function Book(contacts) {
  this.contacts = contacts;
}

Book.prototype.find = function (name) {
  const contact = this.contacts.find((el) => el.name === name);

  if (!contact) return null;
  return contact;
};

Book.prototype.add = function (contact) {
  if (!(contact instanceof Contact)) {
    console.warn(`Contact: ${JSON.stringify(contact)} is invalid`);
    return this;
  }

  this.contacts.push(contact);
  return this;
};

const mappedContacts = contacts.map((el) => {
  return new Contact(el);
});

const book = new Book(mappedContacts);

book
  .add(
    new Contact({
      name: "Serhii2",
      phone: "+380999999999",
      email: "example2@email.com",
    }),
  )
  .add("error");

console.log(book.find("Serhii2"));

console.log(book);
