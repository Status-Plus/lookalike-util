<h1 align="center">lookalike-util</h1>

<div align="center"> 
    
🥷
🥷
🥷
</div>


<div align="center"> 
    Simple, easy to use santizing of strings to remove non-english characters. 


<sub>Made with 
💖 by StatusPlus</sub>
</div>



<br />

<div align="center">

<a href="https://www.npmjs.com/package/lookalike-util">
    <img src="https://img.shields.io/npm/v/lookalike-util.svg?style=flat-square"
      alt="NPM version" />
  </a>

  <a href="https://github.com/Status-Plus/lookalike-util/actions/workflows/CI.yaml">
    <img src="https://img.shields.io/github/workflow/status/Status-Plus/lookalike-util/Test,%20Lint,%20and%20Publish%20to%20NPM/main?style=flat-square"
      alt="Build" />
  </a>
    <a href="https://discord.gg/TJrYS446Ak">
        <img src="https://img.shields.io/discord/800480268733120533?style=flat-square" />
    </a>
    
<a href="https://www.npmjs.com/package/lookalike-util">
        <img src="https://img.shields.io/npm/dt/lookalike-util alt="m" />
    </a>

<a href="https://img.shields.io/jsdelivr/npm/hm/lookalike-util?style=flat-square">
    <img src="https://img.shields.io/jsdelivr/npm/hm/lookalike-util?style=flat-square">
</a>


</div>

<br>

## Table of Contents
- [Table of Contents](#table-of-contents)
- [Features](#features)
- [Installation](#installation)
  - [**With npm**](#with-npm)
  - [**With jsDelivr**](#with-jsdelivr)
  - [**Compiling from source**](#compiling-from-source)
- [Examples](#examples)
  - [**Via npm:**](#via-npm)
  - [**Via HTML**](#via-html)
## Features 
* **Removing Invisible Characters:** Easily remove invisible characters from strings!
* **Clearing Lookalikes:** Ridding strings of characters that look like normal english letters/chars!
* **Constantly updating Database:** Database of lookalikes can update with new ideas!

## Installation

### **With npm**

Simply run: 

```
npm i lookalike-util
```
That's it! You're good to go!

### **With jsDelivr**

In the `<head>` of your HTML document, add the following:

```HTML
<head>

<!-- Other HTML head items -->

<script src="https://cdn.jsdelivr.net/npm/lookalike-util/dist/web/lookalike.js" defer>
</head>
```

You can now reference using `lookalikeUtil`!

### **Compiling from source** 

To compile from source, first clone the repository from GitHub:

```
git clone https://github.com/Status-Plus/lookalike-util.git

git fetch
```

Then, install all dependencies:

```
npm i
```

To run the testing suite, run:

```
npm test
```

To build the `UMD` compatibile package, run:

```
npm run build
```

For lints, run:

```
npx eslint . --fix
```


## Examples

### **Via npm:**

```js
import { clearSimilar } from '../src/index';

const string = "Êċℎọ!"

console.log(clearSimilar(string)) // returns "Echo!"
```

### **Via HTML**

```HTML
<!-- snip -->

<script>
  window.lookalikeUtil.clearSimilar('Êċℎọ!'); // returns "Echo!"
</script>

```


## API

### `clearInvisible(string)`

Returns a `string` with all "invisible" characters removed. (Not spaces). 

**Example:**

```js
lookalikeutil.clearInvisible("i am a ninja⁢⁢⁢⁢!") // returns string w/o invisible characters!
```

### `clearSimilar(string)`

Returns a `string` with all non-english characters that are abused to look like an english letter to bypass a filter, etc.

**Example:**

```js
lookalikeutil.clearSimilar("Êċℎọ!") // returns "Echo!"
```

## Usecase

This is used internally by our team in our Discord bot and similar applications with the purpose of removing sneaky characters that are often abused by bad actors to bypass a filter or make it hard to contact them. Someone could bypass a word filter by using these special characters. This soloves that issue!

## Contributing

To contribute, please follow the above section regarding [compiling from source.](#compiling-from-source)

From there, feel free to work using `src/index.js`

If you would like to contibute to the database, please use `lib/lookalike.js`. 

Before sending a pull request, please ensure tests, lints, and builds pass. Otherwise, CI will not pass!

## License 

This project is open-source under the MIT license:

https://choosealicense.com/licenses/mit/