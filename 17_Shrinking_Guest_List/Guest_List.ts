// Question # 17


//If you could invite anyone, living or deceased, to dinner.
let Guest_List :string[] = ['Ashna Syed','Mehreen Mujeeb','Romesa Arif'];
// for (let i=0; i<Guest_List.length; i++){
//     console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
//You just heard that one of your guests can't make the dinner, 

let absent_Guest :string = 'Ashna Syed' ;
//so you need to send out a new set of invitations.
let new_Guest :string = 'Javeria Shaikh' ;
Guest_List[0] = new_Guest ;
// for (let i=0; i<Guest_List.length; i++){
//     console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }

console.log(`Ms ${absent_Guest} is not coming to the party,`);
console.log('Good News! We find Big table so we are inviting 3 more guests.')

// array mai 3 guest add kiye hein.
Guest_List.unshift('Fabiha')
Guest_List.splice(2, 0, 'Ghania Sheikh');
Guest_List.push('Kinza Sheikh');

// yahan per mane 6 arry k guest ko print karwaya hai.
for (let i=0; i<Guest_List.length; i++){
    console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
}
// Sorry message to guest for not inviting.
console.log('\nSorry we can not arrange big table, Only Two peoples will be invited.');

// Yahan per mane guest remove kiye hein.
while(Guest_List.length > 2){
    let remove_Guest = Guest_List.pop();
console.log(`Sorry Ms. ${remove_Guest}, You are not invited for Dinner.`);
}
// Hamary bache hoye 2 invited guest.
for (let i=0; i<Guest_List.length; i++){
    console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nYou are still invited.\n\nThank You!\n\n')
}
// mane sary guest arry se remove kardiye.
Guest_List.splice(0, 2);
console.log(Guest_List);
console.log('Best Regards: Samrah sheikh');




