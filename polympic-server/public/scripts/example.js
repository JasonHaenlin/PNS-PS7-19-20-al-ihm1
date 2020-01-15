/* eslint-disable security/detect-eval-with-expression */
/* eslint-disable security/detect-object-injection */
// This is an example of how the generated JS should look like

// duration of an event is endTime - startTime
// is_foot about an event means sport = Football
//
// for each event
// when is_foot then display
//
// sort by duration

// this function should be defined in an other file
const display = (output, element) => {
output.push(element);
};

// this function should be defined in an other file
const sort = (elements, property) => {
return elements.sort((a, b) => a[property] - b[property]);
};

// Everything following this comment is the actual output of the compiler

const run = (array) => {
let output = [];
const defines = [
{ name: 'duration', value: 'element.endTime-element.startTime' },
{ name: 'is_foot', value: 'element.sport==\'Football\'' }
];
for (const element of array) {
for (const def of defines) {
element[def.name] = eval(def.value);
}
if (element.distance < 8700) {
display(output, element);
}
}
output = sort(output, 'startTime');
return output;
};

module.exports = { run };
