const nome = "Rafael Santana de Carvalho";
const texto = "Meu nome é ";
const text1 = "      Hello World!      ";
let text2 = "I love cats. Cats are very easy to love. Cats are very popular."
let text3 = "I love cats. Cats are very easy to love. Cats are very popular."

const nomeLength = nome.length; // 26

const nomeCharAt = nome.charAt(0); // R
const nomeCharCodeAt = nome.charCodeAt(0); // 82
const nomeAt = nome.at(1); // a
const nomeAtNegativo = nome.at(-1); // o

const nomeSlice = nome.slice(0, 6); // Rafael
const nomeSlice2 = nome.slice(7); // Santana de Carvalho
const nomeSlice3 = nome.slice(-5); // valho
const nomeSlice4 = nome.slice(-11, -4); // de Carv

const nomeUpperCase = nome.toUpperCase(); // RAFAEL SANTANA DE CARVALHO
const nomeLowerCase = nome.toLowerCase(); // rafael santana de carvalho

const nomeConcat = texto.concat(nome); // Meu nome é Rafael Santana de Carvalho

const nomeSemTrim = text1; //       Hello World!      
const nomeTrim = text1.trim(); // Hello World!

const nomeRepeat = nome.repeat(2); //Rafael Santana de CarvalhoRafael Santana de Carvalho

const nomeReplace = nome.replace("de Carvalho", "Joga Baralho"); // Rafael Santana Joga Baralho
const nomeReplace2 = nome.replace("a", 1); // R1fael Santana de Carvalho
const nomeReplace3 = nome.replace(/a/g, 1); // R1f1el S1nt1n1 de C1rv1lho

text2 = text2.replaceAll("Cats", "Dogs");
text2 = text2.replaceAll("cats", "dogs");
// text2 = I love dogs. Dogs are very easy to love. Dogs are very popular.

text3 = text3.replaceAll(/Cats/g,"Dogs");
text3 = text3.replaceAll(/cats/g,"dogs");
// text3 = I love dogs. Dogs are very easy to love. Dogs are very popular.

const nomeSplitSpace = nome.split(" ") // [ 'Rafael', 'Santana', 'de', 'Carvalho' ]
const nomeSplit2 = nome.split("")

console.log(nomeSplit2); 