"use strict";
//If you could invite anyone, living or deceased, to dinner.
let Guest_List = ['Ashna Syed', 'Mehreen Mujeeb', 'Romesa Arif'];
// for (let i=0; i<Guest_List.length; i++){
//     console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')
// }
//You just heard that one of your guests can't make the dinner, 
let absent_Guest = 'Ashna Syed';
//so you need to send out a new set of invitations.
let new_Guest = 'Javeria Shaikh';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Ms ${absent_Guest} is not coming to the party,`);
console.log('Good News! We find Big table so we are inviting 3 more guests.');
Guest_List.unshift('Fabiha');
Guest_List.splice(2, 0, 'Ghania Sheikh');
Guest_List.push('Kinza Sheikh');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
