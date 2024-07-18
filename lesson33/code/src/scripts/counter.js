export class Counter {
    constructor() {
        this.count = 0;
    }

    increment() {
        this.count += 1;
    }

    decrement() {
        this.count -= 1;
    }

    reset() {
        this.count = 0;
    }

    getCount() {
        return this.count;
    }
}