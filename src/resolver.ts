import {
    blockWithElement,
    blockWithElementAndExtras,
    blockWithElementAndModifiers,
    blockWithElementModifiersAndExtras,
    blockWithExtras,
    blockWithModifiers,
    blockWithModifiersAndExtras,
} from './builder';

import type {
    Extras,
    Modifiers
} from './builder';

import {
    isElement,
    isExtras,
    isModifiers
} from './utils/type-detector';

type ElementModifier<Type> = Type extends infer Modifiers ?
    string : string;

type ElementModifierExtra<Type> = Type extends infer Extras ?
    Extras : ElementModifier<Type>;

type ModifierExtra<Type> = Type extends Extras ?
    Extras : Modifiers;

const resolver = <X, Y>(
    block: string,
    x?: ElementModifierExtra<X>,
    y?: ModifierExtra<Y>,
    extra?: Extras
): string => {
    if (!x) {
        return block;
    }

    if (isElement(x)) {
        if (!y) {
            return blockWithElement(block, x);
        }
        else if (isExtras(y)) {
            return blockWithElementAndExtras(block, x, y);
        }
        else if (isModifiers(y)) {
            if (extra) {
                    return blockWithElementModifiersAndExtras(block, x, y, extra);
            }

            return blockWithElementAndModifiers(block, x, y);
        }
    }

    if (isModifiers(x)) {
        if (isExtras(y)) {
            return blockWithModifiersAndExtras(block, x, y);
        }
        else {
            return blockWithModifiers(block, x);
        }
    }

    if (isExtras(x)) {
        return blockWithExtras(block, x);
    }

    return block;
};

export {resolver};
