import axios from 'axios';
import { fetchData } from '../axios.js'

// Mock axios
jest.mock('axios');

describe('axios', () => {
    it('fetchData returns data on successful GET request', async () => {
        const mockData = { data: { name: 'John Doe' } };
        // jest.spyOn(axios, 'get').mockResolvedValueOnce()
        axios.get.mockResolvedValue(mockData);

        const data = await fetchData('https://api.example.com/user');
        expect(data).toEqual(mockData.data);
        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/user');
        // expect(axios.get).toHaveBeenNthCalledWith(1, 'https://api.example.com/user');
    });

    it('fetchData throws error on failed GET request', async () => {
        axios.get.mockRejectedValue(new Error('Network Error'));

        await expect(fetchData('https://api.example.com/user')).rejects.toThrow('Error fetching data');
    });

    it('fetchData with mockImplementationOnce for different responses', async () => {
        const mockData1 = { data: { name: 'Alice' } };
        const mockData2 = { data: { name: 'Bob' } };

        axios.get.mockImplementationOnce(() => Promise.resolve(mockData1));
        axios.get.mockImplementationOnce(() => Promise.resolve(mockData2));

        const data1 = await fetchData('https://api.example.com/user1');
        const data2 = await fetchData('https://api.example.com/user2');

        expect(data1).toEqual(mockData1.data);
        expect(data2).toEqual(mockData2.data);
        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/user1');
        expect(axios.get).toHaveBeenCalledWith('https://api.example.com/user2');
    });
})