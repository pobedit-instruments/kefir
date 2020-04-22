import * as assert from 'assert';
import {$, kefir} from '../src/kefir';

describe('Kefir', () => {
    it.only('$', () => {
        const actual = $('foo', {bar: true});

        assert.equal(actual, 'foo--bar');
    });

    it.only('factory', () => {
        let $ = kefir('foo');

        const actual = $({bar: true});

        assert.equal(actual, 'foo--bar');
    });
});
