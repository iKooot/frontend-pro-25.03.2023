import { Counter } from '../counter';

describe('Counter', () => {
    let counter;
    let mockDatabase = {};

    beforeAll(() => {
        // Simulate connecting to a database
        mockDatabase = { isConnected: true };
        console.log('Database connected');
    });

    afterAll(() => {
        // Simulate disconnecting from a database
        mockDatabase = { isConnected: false };
        console.log('Database disconnected');
    });

    beforeEach(() => {
        counter = new Counter();
    });

    afterEach(() => {
        console.log('after each test counter === ', counter.getCount())
        // In this simple example, there's no specific cleanup needed.
        // This is where you could reset mocks or perform other cleanup tasks.
    });

    it('should start at 0', () => {
        expect(counter.getCount()).toBe(0);
    });

    it('should increment the count', () => {
        counter.increment();
        expect(counter.getCount()).toBe(1);
    });

    it('should decrement the count', () => {
        counter.increment();
        counter.increment();
        counter.decrement();
        expect(counter.getCount()).toBe(1);
    });

    it('should reset the count', () => {
        counter.increment();
        counter.increment();
        counter.reset();
        expect(counter.getCount()).toBe(0);
    });
});