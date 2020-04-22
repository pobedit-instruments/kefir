import * as assert from 'assert';
import {
    blockWithElement,
    blockWithElementAndExtras,
    blockWithElementAndModifiers,
    blockWithElementModifiersAndExtras,
    blockWithExtras,
    blockWithModifiers,
    blockWithModifiersAndExtras
} from '../src/builder';

describe('Builder', () => {
    it('blockWithElement', () => {
        const actual = blockWithElement('foo', 'bar');

        assert.equal(actual, 'foo__bar');
    });

    it('blockWithElementAndExtras', () => {
        const actual = blockWithElementAndExtras('foo', 'bar', ['baz']);

        assert.equal(actual, 'foo__bar baz');
    });

    it('blockWithElementAndModifiers', () => {
        const actual = blockWithElementAndModifiers('foo', 'bar', {baz: true});

        assert.equal(actual, 'foo__bar--baz');
    });

    it('blockWithElementModifiersAndExtras', () => {
        const actual = blockWithElementModifiersAndExtras('foo', 'bar', {baz: true}, ['gaz', 'taz']);

        assert.equal(actual, 'foo__bar--baz gaz taz');
    });

    it('blockWithExtras', () => {
        const actual = blockWithExtras('foo', ['bar']);

        assert.equal(actual, 'foo bar');
    });

    it('blockWithModifiers', () => {
        const actual = blockWithModifiers('foo', {bar: true});

        assert.equal(actual, 'foo--bar');
    });

    it('blockWithModifiersAndExtras', () => {
        const actual = blockWithModifiersAndExtras('foo', {bar: true}, ['gaz']);

        assert.equal(actual, 'foo--bar gaz');
    });
});
