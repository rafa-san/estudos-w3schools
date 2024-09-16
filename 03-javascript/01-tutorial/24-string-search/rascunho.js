const nome = "Rafael Santana de Carvalho"
let text = "The rain in SPAIN stays mainly in the plain";

const nomeIndexOf = nome.indexOf("S"); // 7
const nomeIndexOfNaoEncontrado = nome.indexOf("z"); // -1
const nomeIndexOfL = nome.indexOf("l"); // 5
const nomeLastIndexOfL = nome.lastIndexOf("l"); // 23
const nomeSecondParameter = nome.indexOf("l", nomeIndexOfL); // 5
const nomeSecondParameter2 = nome.indexOf("l", nomeIndexOfL + 1); // 23

const nomeSearch = nome.search("v"); // 21
const nomeSearch2 = nome.search(/v/); // 21

const textMatch = text.match("ain"); // index: 5
const textMatch2 = text.match(/ain/); // index: 5
const textMatch3 = text.match(/ain/g); // ain,ain,ain
const textMatch4 = text.match(/ain/gi); // [ 'ain', 'AIN', 'ain', 'ain' ]
const textMatch3Length = textMatch3.length; // 3

const textIncludes = text.includes("rain"); // true
const textIncludes2 = text.includes("rain", 8); // false

const textStart = text.startsWith("The"); // true
const textStart2 = text.startsWith("Hello"); // false
const textStart3 = text.startsWith("rain", 4); // true
const textEnd = text.endsWith("plain"); // true
const textEnd2 = text.endsWith("Hello"); // false

console.log(textEnd2);