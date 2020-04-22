# @pobedit/kefir

[![Build Status](https://travis-ci.org/pobedit-instruments/kefir.png)](https://travis-ci.org/pobedit-instruments/kefir)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)


A [BEM](http://getbem.com/introduction/) friendly class name generator.

## Installation

```
npm install @pobedit/kefir --save
```

## Basic usage

The fist example of basic usage:

 ```typescript
import React, {ReactNode, useState} from 'react';
import {$} from '@pobedit/kefir';

type Props = {
    bar: boolean
}

export const Example: React.FunctionComponent<Props> = (props) => {
    const {bar} = props;

    return <div className={$('foo', {bar})} />;
};
```

The second example of advanced usage:

**Output**:

```html
<div class="foo--bar" />
```
 
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
        <div className={$({ bar })}>
            <div className={$({ baz })} />
        </div>
    );
};
```

**Output**:

```html

<div class="foo--bar">
    <div class="foo--baz" />
</div>
```

## API

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

$('foo', 'bar', {baz: true, gaz: true}, ['taz']);
 // foo__bar--baz foo__bar--gaz taz

$('foo', 'bar', {baz: true});
 // foo__bar--baz
```

#### Modifier

```typescript
import {$} from '@pobedit/kefir';

$('foo', {bar: true});
 // foo--bar

$('foo', {bar: true, gaz: true}, ['baz']);
 // foo--bar foo--gar baz

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
 // foo--bar
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
