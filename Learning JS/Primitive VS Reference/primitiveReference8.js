const language = {
  name: "JavaScript",
  date: "11 July, 2025",
};

var language2 = { ...language }; // copied using spread operator
language2.name = "typeScript";

console.log(language); // { name: 'JavaScript', date: '11 July, 2025' }
console.log(language2); // { name: 'typeScript', date: '11 July, 2025' }
