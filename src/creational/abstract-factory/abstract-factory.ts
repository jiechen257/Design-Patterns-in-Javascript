function droidProducer(kind: string) {
	if (kind === 'battle') {
		return battleDroidFactory;
	}
	return pilotDroidFactory;
}

function B1() {}
B1.prototype.info = function () {
	return 'B1, Battle Droid';
};

function Rx24() {}
Rx24.prototype.info = function () {
	return 'Rx24, Pilot Droid';
};

function battleDroidFactory() {
	return new B1();
}

function pilotDroidFactory() {
	return new Rx24();
}

export default droidProducer;
