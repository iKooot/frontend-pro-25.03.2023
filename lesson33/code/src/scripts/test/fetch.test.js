import { foo } from '../fetch.js';

describe('foo', () => {
    beforeEach(() => {
        global.fetch = jest.fn();
        global.console.error = jest.fn();
    });

    afterEach(() => {
        fetch.mockClear();
        console.error.mockClear();
    })

    it('should fetch data and return it when the response is ok', async () => {
        fetch.mockResolvedValueOnce({
            ok: true,
            json: () => Promise.resolve([{ id: 1, name: 'John Doe' }]),
        });

        const data = await foo();
        expect(data).toEqual([{ id: 1, name: 'John Doe' }]);
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://example.com/api/users');
    });

    it('should handle non-ok response', async () => {
        fetch.mockResolvedValueOnce({
            ok: false,
        });

        const data = await foo();
        expect(data).toBeUndefined();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://example.com/api/users');
        expect(console.error).toHaveBeenCalledWith(new Error('Ups something went wrong...'));
    });

    it('should handle fetch error', async () => {
        fetch.mockRejectedValueOnce(new Error('Network error'));

        const data = await foo();
        expect(data).toBeUndefined();
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('http://example.com/api/users');
        expect(console.error).toHaveBeenCalledWith(new Error('Network error'));
    });
});