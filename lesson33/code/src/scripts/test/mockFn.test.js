import { forEach } from '../mockFn.js';

describe('mockFn', () => {
    const mockCallback = jest.fn(x => 42 + x);

    afterEach(() => {
        console.log(mockCallback.mock)
        // need clear mock to avoid 42 value
        mockCallback.mockClear();
    })

    it('forEach mock function', () => {
        forEach([0, 1], mockCallback);

        // The mock function was called twice
        expect(mockCallback.mock.calls).toHaveLength(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(42);
    })

    it('forEach mock function', () => {
        mockCallback.mockReturnValueOnce(1).mockReturnValueOnce(2);

        forEach([0, 1], mockCallback);

        // The mock function was called twice
        expect(mockCallback.mock.calls).toHaveLength(2);

        // The first argument of the first call to the function was 0
        expect(mockCallback.mock.calls[0][0]).toBe(0);

        // The first argument of the second call to the function was 1
        expect(mockCallback.mock.calls[1][0]).toBe(1);

        // The return value of the first call to the function was 42
        expect(mockCallback.mock.results[0].value).toBe(1);
        expect(mockCallback.mock.results[1].value).toBe(2);
    })
})