// ES6 fat arrow function
// var javascript = {
//     name: 'JavaScript',
//     libraries: ["React", 'Angular', 'Vue'],
//     printLibraries: function () {
//         this.libraries.forEach(function (a) {
//             console.log(`${this.name} loves ${a}`);
//         })
//     }
// }

// javascript.printLibraries();


var javascript = {
    name: 'JavaScript',
    libraries: ["React", 'Angular', 'Vue'],
    printLibraries: function () {
        console.log(this); 
        this.libraries.forEach(function (a) {
            console.log(`${this.name} loves ${a}`);
        })
    }
}

javascript.printLibraries();