import {resolver as $} from './resolver';

function kefir(block: string) {
    return $.bind(null, block);
}

export {kefir, $};
