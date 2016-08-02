jest.unmock('../source/index.js');

import calculatePercentage from '../source/index.js';

describe('calculatePercentage', () => {
    it('take 100 percent of 100', () => {
        const percentage = calculatePercentage({ percent: 100, amount: 100 });
        expect(percentage).toEqual(100);
    });
});