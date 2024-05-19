# HW 16.1

## Конструктор сутності "Студент"

Вам потрібно зробити конструктор сутності "Студент". 
Студент має ім'я, прізвище, рік народження — це властивості. 
Є масив з оцінками, це також властивість. 
І є можливість отримати вік студента та його середній бал – це методи.

Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
спочатку він не заповнений, але на 25 елементів. 
Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод 
.present() на чергове порожнє місце, в масив записується true, коли викликаємо 
.absent() - записується false. Передбачте будь-який захист від того, 
щоб у масиві відвідуваності не могло бути більше 25 записів. 
Масив – це властивість, present та absent – методи.

Останній метод: .summary(), перевіряє середню оцінку і середнє 
відвідування(кількістьВідвідин/кількістьЗанять), 
і якщо середня оцінка більше 90, 
а середнє відвідування більше 0.9, то метод summary повертає рядок "Молодець!",
якщо одне з цих значень менше , то - "Добре, але можна краще ", 
якщо обидва нижче - "Редиска!".

Не забудьте після того, як напишите цей конструктор, 
створити 2-3 екземпляри (конкретних студентів) і показати використання цих методів.

```js
function Student(name, surname, birthDate, assessments = []) {
    // your avesome code
}

Student.prototype.getAge = function () {
    // your avesome code
}

Student.prototype.getAverage = function () {
    // your avesome code
}

Student.prototype.present = function () {
    // your avesome code
}

Student.prototype.absent = function () {
    // your avesome code
}

Student.prototype.summary = function () {
    // your avesome code
}

const student1 = new Student('exampleName1', 'exampleSurname1', 1999, []);
const student2 = new Student('exampleName2', 'exampleSurname2', 1998, []);

student1.present().absent().present()
// your avesome code
```