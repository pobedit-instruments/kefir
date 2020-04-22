import {Extras, Modifiers} from '../builder';

export const isElement = (type: unknown): type is string => {
    return typeof type === 'string';
};

export const isExtras = (type: unknown): type is Extras => {
    return Array.isArray(type);
};

export const isModifiers = (type: unknown): type is Modifiers => {
    return Object.prototype.toString.call(type) === '[object Object]';
};
