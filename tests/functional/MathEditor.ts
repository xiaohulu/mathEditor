const { registerSuite } = intern.getInterface('object');
const { assert } = intern.getPlugin('chai');

registerSuite('MathEditor functional tests', {
    'run'() {
        return this.remote
                .get('index.html')
                .findById('mathEditor')
                .clickMouseButton(0)

    }
})