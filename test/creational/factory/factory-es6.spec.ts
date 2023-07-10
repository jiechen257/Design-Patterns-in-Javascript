import BmwFactory from '../../../src/creational/factory/factory-es6';

describe('Factory es6 test', () => {
	it('create a X5 instance', () => {
		const x5 = BmwFactory.create('X5') as any;
		expect(x5.model).toBe('X5');
	});

	it('the X5 price is properly set', () => {
		const x5 = BmwFactory.create('X5') as any;
		expect(x5.price).toBe(108000);
	});
});
