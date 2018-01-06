const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('MathEditor functional tests', {
	run() {
		return this.remote
			.get('index.html')
			.findByCssSelector('.math-editor-container')
			.then((element) => {
				return this.remote.moveMouseTo(element, 5, 5).clickMouseButton(0);
			})
			.end()
			.getActiveElement()
			.type('a')
			.end()
			.sleep(3000)
			.findByCssSelector('.textLayer')
			.getVisibleText()
			.then((text) => {
				assert.strictEqual('a', text);
			});
	}
});
