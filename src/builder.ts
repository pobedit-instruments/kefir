type Modifiers = Record<string, any>;
type Extras = string[];

/* block__element */
function blockWithElement(
    block: string,
    element: string
): string {
    return `${block}__${element}`;
}

/* block extras */
function blockWithExtras(
    block: string,
    extras: Extras
): string {
    return `${block} ${extras.join(' ')}`;
}

/* block--modifier */
function blockWithModifiers(
    block: string,
    modifiers: Modifiers
): string {
    let result = block;

    for (const [name, value] of Object.entries(modifiers)) {
        if (value) {
            result += ` ${block}--${name}`;
        }
    }

    return result;
}

/* block--modifier extras */
function blockWithModifiersAndExtras(
    block: string,
    modifiers: Modifiers,
    extras: Extras
): string {
    return `${blockWithModifiers(block, modifiers)} ${extras.join(' ')}`;
}

/* block__element extras */
function blockWithElementAndExtras(
    block: string,
    element: string,
    extras: Extras
): string {
    return `${blockWithElement(block, element)} ${extras.join(' ')}`;
}

/* block__element--modifier */
function blockWithElementAndModifiers(
    block: string,
    element: string,
    modifiers: Modifiers
): string {
    const prefix = blockWithElement(block, element);

    return blockWithModifiers(prefix, modifiers);
}

/* block__element--modifier extras */
function blockWithElementModifiersAndExtras(
    block: string,
    element: string,
    modifiers: Modifiers,
    extras: Extras
): string {
    return `${blockWithElementAndModifiers(block, element, modifiers)} ${extras.join(' ')}`;
}

export {
    Modifiers,
    Extras,
    blockWithElement,
    blockWithElementAndModifiers,
    blockWithElementAndExtras,
    blockWithElementModifiersAndExtras,
    blockWithModifiers,
    blockWithExtras,
    blockWithModifiersAndExtras
};
