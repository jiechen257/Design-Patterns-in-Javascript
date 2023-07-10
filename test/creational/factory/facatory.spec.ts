import { bmwFactory } from '../../../src/creational/factory/factory';

describe('Factory test', () => {
	it('sanity', () => {
		const x5 = bmwFactory('X5');
		const x6 = bmwFactory('X6');

		expect(x5.price).toBe(108000);
		expect(x6.price).toBe(111000);
		expect(x5.maxSpeed).toBe(300);
		expect(x6.maxSpeed).toBe(320);
	});
});
