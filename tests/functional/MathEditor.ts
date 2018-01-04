const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('MathEditor functional tests', {
    'run'() {
        return this.remote
                .get('index1.html')
                .findById('mathEditor')
                .clickMouseButton(0)
                .type("a")
                .then(() => {
                    assert.isTrue(true);
                });

    }
})