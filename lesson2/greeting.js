/**
 * Created by khpark on 04/02/2017.
 */

function getFullName(first, last, country) {
    var eastCountries = ['KR', 'CH', 'JP'];
    var westContrries = ['US', 'CA', 'UK'];
    country = country.toUpperCase();

    if (eastCountries.indexOf(country) > -1) {
        return last + ' ' + first;
    } else if (westContrries.indexOf(country) > -1) {
        return first + ' ' + last;
    } else {
        throw new Error('Invalid country!');
    }
}

var first = process.argv[2];
var last = process.argv[3];
var country = process.argv[4];

console.log('Hello, ' + getFullName(first, last, country) + '!');