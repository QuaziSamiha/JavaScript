const language = {
  name: "JavaScript",
  date: "11 July, 2025",
};

var language2 = { ...language };
language2.name = "typeScript";

language.founder = "Brendan Eich";

console.log(language); // { name: 'JavaScript', date: '11 July, 2025', founder: 'Brendan Eich' }
console.log(language2); // { name: 'typeScript', date: '11 July, 2025' }
