"use strict";
//If you could invite anyone, living or deceased, to dinner.
let Guest_List = ['Ashna Syed', 'Mehreen Mujeeb', 'Romesa Arif'];
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
let absent_Guest = 'Ashna Syed';
let new_Guest = 'Javeria Shaikh';
Guest_List[0] = new_Guest;
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n');
}
console.log(`Ms ${absent_Guest} is not coming to the party,`);
