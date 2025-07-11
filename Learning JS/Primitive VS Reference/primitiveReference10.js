const language = {
  name: "JavaScript",
  date: "11 July, 2025",
  libraries: ["React", "Vue", "jQuery"],
};

var language2 = { ...language };
language2.name = "TypeScript";

language.libraries.push("Angular");

console.log(language);
console.log(language2);

/*
{
  name: 'JavaScript',
  date: '11 July, 2025',
  libraries: [ 'React', 'Vue', 'jQuery', 'Angular' ]
}
  
{
  name: 'TypeScript',
  date: '11 July, 2025',
  libraries: [ 'React', 'Vue', 'jQuery', 'Angular' ]
}

*/
