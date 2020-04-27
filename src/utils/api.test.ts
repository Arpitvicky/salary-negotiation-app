import { apiRequest } from './api';
describe('Testing fetch api', () => {
    beforeEach(() => {
        (fetch as any).resetMocks();
    });

    it('should run the GET request', async done => {
        (fetch as any).mockResponseOnce(JSON.stringify([{ id: 1 }]));
        const data = await apiRequest('/testurl');
        expect(fetch).toHaveBeenCalledTimes(1);
        expect(fetch).toHaveBeenCalledWith('/testurl', {
            method: 'GET',
        });
        expect(data).toEqual([{ id: 1 }]);
        done();
    });
});
