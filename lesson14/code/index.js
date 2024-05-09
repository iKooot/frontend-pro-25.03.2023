/****************************************
 * KIS - Keep it simple (stupid)
 ****************************************/

// function sum(numbers = []) {
//     let total = 0;
//
//     numbers.forEach( number => {
//         total += number;
//     })
//
//     // console.log(total) // Bad
//
//     return total
// }

/****************************************
 * DRY - Dont repeat yourself
 ****************************************/
// const arr = [1, 2];
// function sum(numbers = []) {
//     let total = 0;
//
//     numbers.forEach( number => {
//         total += number;
//     })
//
//     return total
// }
//
// // Bad
// function calcAverage(numbers, length) {
//     let total = 0;
//
//     numbers.forEach( number => {
//         total += number;
//     })
//
//     return total / numbers.length
// }
//
// function calcAverage(sum, length) {
//     return sum / length
// }
//
// calcAverage(sum(arr), arr.length)

/****************************************
 * SOLID
 ****************************************/

/****************************************
 * Single responsibility
 ****************************************/

// class Product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//
//     getName() {
//         return this.name
//     }
//
//     getPrice() {
//         return this.price
//     }
// }
//
// class TaxCalculator {
//     static calcTax(amount, taxRate) {
//         return amount * taxRate
//     }
// }
//
// class ProductPrinter {
//     static printProduct(product) {
//         console.log(`Product: ${product.getName()}, price: ${product.getPrice()}`)
//     }
// }
//
// const product = new Product('Mac', 2000);
// const taxAmount = TaxCalculator.calcTax(product.getPrice(), 0.2);
// const totalPrice = product.getPrice() * taxAmount;
// ProductPrinter.printProduct(product);
// console.log(totalPrice)

/****************************************
 * OC && LSP
 ****************************************/

// class Shape {
//     area() {
//         throw new Error('Method area() must to be defined');
//     }
// }
//
// class Rectangle extends Shape {
//   constructor(width, height) {
//     super();
//     this.width = width;
//     this.height = height;
//   }
//
//   area() {
//     return this.width * this.height;
//   }
// }
//
// class Circle extends Shape {
//     constructor(radius) {
//         super();
//         this.radius = radius;
//     }
//
//     area() {
//         return Math.PI * this.radius ** 2;
//     }
// }
//
// const circle = new Circle(3);
// const rac = new Rectangle(5, 4);
//
// function calcTotalArea(shapes) {
//     return shapes.reduce( (total, shape) => total + shape.area(), 0)
// }
//
// const totalArea = calcTotalArea([rac, circle]);
// console.log(totalArea)

/****************************************
 * ISP
 ****************************************/

// interface IDevices {
//     print: () => void
// }
//
// class PrinterTS implements IDevices {
//     print() {
//
//     }
// }

// class DeviceInterface {
//     print() {
//         throw new Error('Method print() must to be defined');
//     }
// }
// class Printer extends DeviceInterface {
//     print() {
//         console.log('Printer is working')
//     }
// }
//
// class Scanner extends DeviceInterface {
//     print() {
//         console.log('Scanner is working')
//     }
// }

/****************************************
 * DIP
 ****************************************/

// class StorageService {
//     save(data) {
//         throw new Error('Method save() must to be defined');
//     }
//
//     load() {
//         throw new Error('Method load() must to be defined');
//     }
// }
//
// class LocalStorageService extends StorageService {
//   save(data) {
//     localStorage.setItem("data", JSON.stringify(data));
//   }
//
//   load() {
//     return JSON.parse(localStorage.getItem('data'));
//   }
// }
//
// class RemoteStorageService extends StorageService {
//     save(data) {
//        // awesome code
//         console.log('Saving data to the db', data)
//     }
//
//     load() {
//         // awesome code
//         console.log('Loading data from the db...')
//         return { example: 'data' }
//     }
// }
//
// class DataManager {
//     constructor(storageService) {
//         this.storageService = storageService;
//     }
//
//     saveData(data) {
//         this.storageService.save(data)
//     }
//
//     loadData() {
//         return this.storageService.load()
//     }
// }
//
// const localStorageService = new LocalStorageService();
// const remoteStorageService = new RemoteStorageService();
//
// const localDataManager = new DataManager(localStorageService);
// localDataManager.saveData({ example: 'data'});
// console.log('Local data:', localDataManager.loadData());
//
// const remoteDataManager = new DataManager(remoteStorageService);
// remoteDataManager.saveData({ example: 'data'});
// console.log('Local data:', remoteDataManager.loadData());

/****************************************
 * YAGNI
 ****************************************/

/****************************************
 * BDUF
 ****************************************/

/****************************************
 * APO
 ****************************************/

/****************************************
 * Ocama
 ****************************************/

// const date = `${new Date().getFullYear()}:${String(
//   new Date().getMonth() + 1,
// ).padStart(2, "0")}:${String(new Date().getDate()).padStart(2, "0")}`;
//
// //Bad
// var yyyymmdd = date;
// //good
// const currentDate = date;


// // bad
// setTimeout(() => {
//     console.log('tick')
// }, 1000)
//
// const DELAY_MS = 1000;
// // good
// setTimeout(() => {
//     console.log('tick')
// }, DELAY_MS)

// const arr = ['UA', 'US'];
// // bad
// arr.forEach( l => {
//     console.log(l)
// })
//
// // good
// arr.forEach( location => {
//     console.log(location)
// })

// // Bad
// const car = {
//     carModel: 'TOYOTA',
//     carYear: 2002
// }
// // Good
// const car = {
//     model: 'TOYOTA',
//     year: 2002
// }

// function foo(name) {
//     if (!name) name = 'Some name'
//     const _name = name || 'Some name'
// }

// function foo(name = 'Some name') {
//
// }
//bad
// function foo(name, temp) {
//     if (temp) {
//         fs.create(`./temp/${name}`)
//     } else {
//         fs.create(`./${name}`)
//     }
// }
//
// function fooBase(name) {
//     fs.create(`./${name}`)
// }
//
// function fooTemp(name) {
//     fs.create(`./temp/${name}`)
// }

/**
 *  This foo to do foo
 *
 * @param example { key: strinng } - Incoming param.
 * @returns new array of values
 * @throws BadRequestEcheption - Inn case
 */
function foo(example) {
 return example
}



