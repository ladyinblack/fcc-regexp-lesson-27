// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Specify Exact Number of Matches</h1>`;

/** TODO:
 * Change the regex timRegex to match the word Timber only when it has four letter m's.
 
 let timStr = "Timmmmber";
 let timRegex = /change/;        // Change this line 
 let result = timRegex.test(timStr);
 */

function extract4Ms(timStr) {
  let timRegex = /Tim{4}ber/;
  return timRegex.test(timStr);
}

console.log(extract4Ms('Timber'));
console.log(extract4Ms('Timmber'));
console.log(extract4Ms('Timmmber'));
console.log(extract4Ms('Timmmmber'));
console.log(extract4Ms('Ti' + 'm'.repeat(30) + 'ber'));
