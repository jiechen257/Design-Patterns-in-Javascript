import droidProducer from '../../../src/creational/abstract-factory/abstract-factory';
import droidProducer6 from '../../../src/creational/abstract-factory/abstract-factory';

describe('abstract factory test', () => {
	it('Battle droid', () => {
		const droid = droidProducer('battle')();
		expect(droid.info()).toBe('B1, Battle Droid');
	});
	it('pilot droid', () => {
		const pilotDroid = droidProducer('pilot')();
		expect(pilotDroid.info()).toBe('Rx24, Pilot Droid');
	});

	it('Battle droid es6', () => {
		const battleDroid = droidProducer6('battle')();
		expect(battleDroid.info()).toBe('B1, Battle Droid');
	});

	it('pilot droid 6', () => {
		const pilotDroid = droidProducer6('pilot')();
		expect(pilotDroid.info()).toBe('Rx24, Pilot Droid');
	});
});
