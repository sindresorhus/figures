# figures

> Unicode symbols with Windows CMD fallbacks

[![](screenshot.png)](index.js)

[*and more...*](index.js)

Windows CMD only supports a [limited character set](http://en.wikipedia.org/wiki/Code_page_437).

## Install

```
$ npm install figures
```

## Usage

See the [source](index.js) for supported symbols.

```js
const figures = require('figures');

console.log(figures('✔︎ check'));
// On non-Windows OSes:  ✔︎ check
// On Windows:           √ check

console.log(figures.tick);
// On non-Windows OSes:  ✔︎
// On Windows:           √

console.log(figures.main.tick);
// On all OSes:  ✔︎

console.log(figures.windows.tick);
// On all OSes:  √
```

## API

### figures(string)

Returns the input with replaced fallback Unicode symbols on Windows.

All the below [figures](#figures) are attached to the main export as shown in the example above.

#### string

Type: `string`

String where the Unicode symbols will be replaced with fallback symbols depending on the OS.

### figures.main

Symbols to use when not running on Windows.

### figures.windows

Symbols to use when running on Windows.


## Figures

| Name               | Non-Windows | Windows |
| ------------------ | :---------: | :-----: |
| tick               |      ✔      |    √    |
| cross              |      ✖      |    ×    |
| star               |      ★      |    ✶    |
| square             |      ▇      |    █    |
| squareSmall        |      ◻      |    □    |
| squareSmallFilled  |      ◼      |    ■    |
| play               |      ▶      |    ►    |
| circle             |      ◯      |   ( )   |
| circleFilled       |      ◉      |   (*)   |
| circleDotted       |      ◌      |   ( )   |
| circleDouble       |      ◎      |   ( )   |
| circleCircle       |      ⓞ      |   (○)   |
| circleCross        |      ⓧ      |   (×)   |
| circlePipe         |      Ⓘ      |   (│)   |
| circleQuestionMark |      ?⃝     |   (?)   |
| bullet             |      ●      |    ●    |
| dot                |      ․      |    ․    |
| line               |      ─      |    ─    |
| ellipsis           |      …      |    …    |
| pointer            |      ❯      |    >    |
| pointerSmall       |      ›      |    ›    |
| triangleUp         |      ▲      |    ▲    |
| triangleUpSmall    |      ▴      |    ▴    |
| triangleUpOutline  |      △      |    ∆    |
| triangleDown       |      ▼      |    ▼    |
| triangleDownSmall  |      ▾      |    ▾    |
| triangleLeft       |      ◀      |    ◄    |
| triangleLeftSmall  |      ◂      |    ◂    |
| triangleRight      |      ▶      |    ►    |
| triangleRightSmall |      ▸      |    ▸    |
| lozenge            |      ◆      |    ♦    |
| lozengeOutline     |      ◇      |    ◊    |
| home               |      ⌂      |    ⌂    |
| info               |      ℹ      |    i    |
| warning            |      ⚠      |    ‼    |
| hamburger          |      ☰      |    ≡    |
| smiley             |      ㋡      |    ☺    |
| mustache           |      ෴      |   ┌─┐   |
| heart              |      ♥      |    ♥    |
| nodejs             |      ⬢      |    ♦    |
| arrowUp            |      ↑      |    ↑    |
| arrowDown          |      ↓      |    ↓    |
| arrowLeft          |      ←      |    ←    |
| arrowRight         |      →      |    →    |
| arrowLeftRight     |      ↔      |    ↔    |
| arrowUpDown        |      ↕      |    ↕    |
| radioOn            |      ◉      |   (*)   |
| radioOff           |      ◯      |   ( )   |
| checkboxOn         |      ☒      |   [×]   |
| checkboxOff        |      ☐      |   [ ]   |
| checkboxCircleOn   |      ⓧ      |   (×)   |
| checkboxCircleOff  |      Ⓘ      |   ( )   |
| questionMarkPrefix |      ?⃝     |    ？    |
| subscriptZero      |      ₀      |    ₀    |
| subscriptOne       |      ₁      |    ₁    |
| subscriptTwo       |      ₂      |    ₂    |
| subscriptThree     |      ₃      |    ₃    |
| subscriptFour      |      ₄      |    ₄    |
| subscriptFive      |      ₅      |    ₅    |
| subscriptSix       |      ₆      |    ₆    |
| subscriptSeven     |      ₇      |    ₇    |
| subscriptEight     |      ₈      |    ₈    |
| subscriptNine      |      ₉      |    ₉    |
| oneHalf            |      ½      |    ½    |
| oneThird           |      ⅓      |    ⅓    |
| oneQuarter         |      ¼      |    ¼    |
| oneFifth           |      ⅕      |    ⅕    |
| oneSixth           |      ⅙      |    ⅙    |
| oneSeventh         |      ⅐      |   1/7   |
| oneEighth          |      ⅛      |    ⅛    |
| oneNinth           |      ⅑      |   1/9   |
| oneTenth           |      ⅒      |   1/10  |
| twoThirds          |      ⅔      |    ⅔    |
| twoFifths          |      ⅖      |    ⅖    |
| threeQuarters      |      ¾      |    ¾    |
| threeFifths        |      ⅗      |    ⅗    |
| threeEighths       |      ⅜      |    ⅜    |
| fourFifths         |      ⅘      |    ⅘    |
| fiveSixths         |      ⅚      |    ⅚    |
| fiveEighths        |      ⅝      |    ⅝    |
| sevenEighths       |      ⅞      |    ⅞    |


## Related

- [log-symbols](https://github.com/sindresorhus/log-symbols) - Colored symbols for various log levels

---

<div align="center">
	<b>
		<a href="https://tidelift.com/subscription/pkg/npm-figures?utm_source=npm-figures&utm_medium=referral&utm_campaign=readme">Get professional support for this package with a Tidelift subscription</a>
	</b>
	<br>
	<sub>
		Tidelift helps make open source sustainable for maintainers while giving companies<br>assurances about security, maintenance, and licensing for their dependencies.
	</sub>
</div>
