import * as assert from 'assert';
import {resolver} from '../src/resolver';

describe('Builder', () => {
    it('block', () => {
        const actual = resolver('foo');

        assert.equal(actual, 'foo');
    });

    it('block__element', () => {
        const actual = resolver('foo', 'bar');

        assert.equal(actual, 'foo__bar');
    });

    it('block__element extras', () => {
        const actual = resolver('foo', 'bar', ['baz']);

        assert.equal(actual, 'foo__bar baz');
    });

    it('block__element extras...', () => {
        const actual = resolver('foo', 'bar', ['baz', 'taz']);

        assert.equal(actual, 'foo__bar baz taz');
    });

    it('block__element--modifier extras', () => {
        const actual = resolver('foo', 'bar', {baz: true, gaz: false, raz: false}, ['taz']);

        assert.equal(actual, 'foo__bar foo__bar--baz taz');
    });

    it('block__element--modifier... extras...', () => {
        const actual = resolver('foo', 'bar', {baz: true, taz: true}, ['gaz', 'maz']);

        assert.equal(actual, 'foo__bar foo__bar--baz foo__bar--taz gaz maz');
    });

    it('block__element--modifier', () => {
        const actual = resolver('foo', 'bar', {baz: true});

        assert.equal(actual, 'foo__bar foo__bar--baz');
    });

    it('block__element--modifier...', () => {
        const actual = resolver('foo', 'bar', {baz: true, taz: true});

        assert.equal(actual, 'foo__bar foo__bar--baz foo__bar--taz');
    });

    it('block--modifier extras', () => {
        const actual = resolver('foo', {bar: true}, ['baz']);

        assert.equal(actual, 'foo--bar baz');
    });

    it('block--modifier... extras...', () => {
        const actual = resolver('foo', {bar: true, baz: true}, ['taz', 'gaz']);

        assert.equal(actual, 'foo--bar foo--baz taz gaz');
    });

    it('block--modifier', () => {
        const actual = resolver('foo', {bar: true});

        assert.equal(actual, 'foo--bar');
    });

    it('block--modifier...', () => {
        const actual = resolver('foo', {bar: true, baz: true});

        assert.equal(actual, 'foo--bar foo--baz');
    });

    it('block extras', () => {
        const actual = resolver('foo', ['bar']);

        assert.equal(actual, 'foo bar');
    });

    it('block extras...', () => {
        const actual = resolver('foo', ['bar', 'baz']);

        assert.equal(actual, 'foo bar baz');
    });
});
