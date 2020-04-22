import {resolver} from './resolver';

export const kefir = (block: string) => {
    return resolver.bind(null, block);
};

export {resolver as $};
