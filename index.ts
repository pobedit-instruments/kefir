type Options = {
    name: string;
    prefix?: string;
};

type Modifiers = Record<string, string>;
type Extras = string[];


type X<Type> = Type extends Modifiers ? Modifiers : string;
type Y<Type> = Type extends Modifiers ? Modifiers : Extras;

const getModifiers = <ModifierElement, >(
    prefix: string,
    mixed?: X<ModifierElement>,
    modifier?: Modifiers,
    extra?: Extras
): string => {
    if (!mixed) {
        return prefix;
    }

    if (typeof mixed === 'string') {
        prefix += `__${mixed}`;
    }


    if (Array.isArray(modifier)) {
        return `${prefix} ${modifier.join(' ')}`;
    }


    if (modifier || !mixed) {
        prefix = Object.entries(modifier || mixed)
            .map(([name, value]) => {
                if (value) {
                    return `${prefix}--${name}`;
                }
            })
            .join(' ');

    }


    if (extra) {
        prefix += ` ${extra.join(' ')}`;

    }

    return prefix;
};


const kefir = ({name, prefix}: Options) => {
    prefix = prefix ? `${prefix}-${name}` : name;

    return (
        element?: string,
        modifiers: Record<string, string> = {},
        extra: Array<string> = []
    ): string => {
        let block = element ? `${prefix}__${element}` : prefix;

        let combination = Object.entries(modifiers).map(([name, value]) => {
            if (value) {
                return `${block}--${name}`;
            }
        });

        let result = [block, ...combination, ...extra].join(' ');

        return result.trim();

    };
};

export {kefir};
