export type Modifiers = Record<string, any>;
export type Extras = string[];

/* block__element */
export const blockWithElement = (
    block: string,
    element: string
): string => {
    return `${block}__${element}`;
};

/* block extras */
export const blockWithExtras = (
    block: string,
    extras: Extras
): string => {
    return `${block} ${extras.join(' ')}`;
};

/* block--modifier */
export const blockWithModifiers = (
    block: string,
    modifiers: Modifiers
): string => {
    let result = ` ${block}`;

    for (const [name, value] of Object.entries(modifiers)) {
        if (value) {
            result += ` ${block}--${name}`;
        }
    }

    return result.trim();
};

/* block--modifier extras */
export const blockWithModifiersAndExtras = (
    block: string,
    modifiers: Modifiers,
    extras: Extras
): string => {
    return `${blockWithModifiers(block, modifiers)} ${extras.join(' ')}`;
};

/* block__element extras */
export const blockWithElementAndExtras = (
    block: string,
    element: string,
    extras: Extras
): string => {
    return `${blockWithElement(block, element)} ${extras.join(' ')}`;
};

/* block__element--modifier */
export const blockWithElementAndModifiers = (
    block: string,
    element: string,
    modifiers: Modifiers
): string => {
    const prefix = blockWithElement(block, element);

    return blockWithModifiers(prefix, modifiers);
};

/* block__element--modifier extras */
export const blockWithElementModifiersAndExtras = (
    block: string,
    element: string,
    modifiers: Modifiers,
    extras: Extras
): string => {
    return `${blockWithElementAndModifiers(block, element, modifiers)} ${extras.join(' ')}`;
};
