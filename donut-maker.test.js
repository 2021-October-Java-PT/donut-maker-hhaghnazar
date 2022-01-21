import DonutMaker from './DonutMaker';

describe('DonutMaker', () => {
   
    test('does it return a number', () => {
        const underTest = new DonutMaker();
        expect(underTest.donutNumber).toEqual('0');
    });


    
});