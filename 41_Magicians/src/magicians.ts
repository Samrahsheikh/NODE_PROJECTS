// Question # 41

// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), 
// which prints the name of each magician in the array.

let magician : string[] = ['Derren Brown', 'Harry Potter', 'David Blaine', 'Albus Dumbledore','Criss Angel'];

function show_magicians(magicians: string[]){

    magician.forEach(element => {
        console.log(element);
    });
}

show_magicians(magician)


// Question Compelete