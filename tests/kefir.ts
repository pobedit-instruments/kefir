import * as assert from 'assert';
import {$, kefir} from '../src/kefir';

describe('Kefir', () => {
    it('$', () => {
        const actual = $('foo', {bar: true});

        assert.equal(actual, 'foo--bar');
    });

    it('factory', () => {
        let $ = kefir('foo');

        const actual = $({bar: true});

        assert.equal(actual, 'foo--bar');
    });
});
