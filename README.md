# @pobedit/kefir

[![Build Status](https://travis-ci.org/pobedit-instruments/kefir.png)](https://travis-ci.org/pobedit-instruments/kefir)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


A [BEM](http://getbem.com/introduction/) friendly class name generator.

## Installation

```
npm install @pobedit/kefir --save
```

## Basic usage

 ```typescript
import React, {ReactNode, useState} from 'react';
import {$} from '@pobedit/kefir';

type Props = {
    bar: boolean
}

export const Example: React.FunctionComponent<Props> = (props) => {
    const {bar} = props;

    return (
        <div className={$('foo', 'container', {bar})}>
            <button className={$('button', { baz })}>
                Click!
            </button>
        </div>
    );
};
```

```less
.foo {
  &__container {
      &--bar {
        background-color: red;
      }
  }
}

.button {
  &--baz {
    color: white;
  }
}
```

**Output**:

```html
<div class="foo__container foo__container--bar">
    <button class="button button--baz">Click</button>>
</div>
```

## API

### Parameters
| Name        | Type     | Description                                                     |
|-------------|----------|-----------------------------------------------------------------|
| `block`     | `string` | Encapsulates a standalone entity that is meaningful on its own. |
| `element`   | `string` | Parts of a block and have no standalone meaning.                |
| `modifiers` | `object` | Flags on blocks or elements.                                    |
| `extra`     | `string[]` | A set of additional classes.                                  |

### $

`$` is a highly polymorphic function with the following interfaces: 

#### Block

```typescript
import {$} from '@pobedit/kefir';

$('foo');
 // foo
```

#### Element

```typescript
import {$} from '@pobedit/kefir';

$('foo', 'bar');
 // foo__bar

$('foo', 'bar', ['baz', 'gaz']);
 // foo__bar baz gaz

$('foo', 'bar', {baz: true});
 // foo__bar foo__bar--baz

$('foo', 'bar', {baz: true, gaz: true}, ['taz']);
 // foo__bar foo__bar--baz foo__bar--gaz taz
```

#### Modifier

```typescript
import {$} from '@pobedit/kefir';

$('foo', {bar: true});
 // foo foo--bar

$('foo', {bar: true, gaz: true}, ['baz']);
 // foo foo--bar foo--gar baz

$('foo', ['bar']);
 // foo bar
```

## API

### Kefir

It's just a wrapper around the main function `$`:

```typescript
import {$} from '@pobedit/kefir';

let $ = kefir('foo');

$({bar: true});
 // foo foo--bar
```

The second example of advanced usage:

 ```typescript
import React, {ReactNode, useState} from 'react';
import {kefir} from '@pobedit/kefir';

type Props = {
    bar: boolean;
    baz: boolean;
}

export const Example: React.FunctionComponent<Props> = (props) => {
    const {bar, baz} = props;
    let $ = kefir('foo');


    return (
        <div className={$('container', { bar })}>
            <button className={$('button', { baz })}>
                Click!
            </button>
        </div>
    );
};
```

**Output**:

```html
```html
<div class="foo__container foo__container--bar">
    <button class="button button--baz">Click</button>>
</div>
```

## Contributing
   
Feel free to submit a pull request if you find any bugs. 
Please make sure all commits are properly documented.

## Tests

```shell
npm test
```

## License

MIT
