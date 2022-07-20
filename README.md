# js-r9jkjq

[Edit on StackBlitz ⚡️](https://stackblitz.com/edit/js-r9jkjq)

### [Specify Exact Number of Matches](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/regular-expressions/specify-exact-number-of-matches)

## HINTS
### Hint 1
We see that the answer is simply finding 4 `m`'s in a row.  The first answer would be to match EXACTLY 4 times the character so we shall implement as following:
```js
let timRegex = /m{4}/;
```
This solution is incorrect because you won't pass the final test case ("Timber" with 3 `m`'s int it) as there are multiple times `mmmm` ina row of 30 `m`.

You should try to get **no more than (_4 times `m`_) _mmmm_**.

### Hint 2
Based on the above I will try to specify exactly the characters before and after 4 times `m`!  ***Remember:*** e.g. `/b/` is a string literal for the word `b` so what if before and after `mmmm` we add ALL missing letters?
