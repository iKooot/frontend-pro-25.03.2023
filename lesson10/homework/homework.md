# HW10.1

## Картка користувача

Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. Створіть метод об'єкту для отримання та відображення цих даних.

** Створіть функцію конструктор на базі якої будуть створені обʼєкти користувачів

```js
function User(name, surname) {
    // youre awesome code here
}

User.prototype.getInfo = () => {
    return {
        name: this.name,
        surname: this.surname
    }
}

const user = new User();
```

# HW10.2

## Отримання парних чисел з масиву

Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, в якому лише парні числа з оригінального масиву.

```js
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function getEnevNumbers(arr) {
    // youre awesome code here
}


const even = getEnevNumbers(arr);
console.log(even); // [2, 4, 6, 8]
```

# HW10.3

## Книга контактів

Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.

```js
const book = {
    contacts: [
        {
            name: "Serhii",
            phone: "+380999999999",
            email: "example@email.com",
        },
    ],
    find: function (name) {
        // youre awesome code here
    },
    add: function (contact) {
        // youre awesome code here
    },
};
```

** Створіть функцію конструктор на базі якої будуть створені обʼєкти книг контактів

```js
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

Book.prototype.find = (name) => {
    // youre awesome code here
};

Book.prototype.add = (contact) => {
    // youre awesome code here
};

const mappedContacts = contacts.map((el) => {
    return new Contact(el);
});

const book = new Book(mappedContacts);

console.log(book);
```
