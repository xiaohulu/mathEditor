const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

import { greet } from '../../src/hello';

registerSuite('hello', {

	tests: {
		'greet'() {
			assert.strictEqual(greet('Murray'), 'Hello, Murray!',
			'greet should return a greeting for the person named in the first argument');
			assert.strictEqual(greet(), 'Hello, world!', 'greet with no arguments should return a greeting to "world"');
		}
	}
});