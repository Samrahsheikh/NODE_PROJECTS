// Question # 15


// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.


//If you could invite anyone, living or deceased, to dinner.

let Guest_List :string[] = ['Ashna Syed','Mehreen Mujeeb','Romesa Arif'];

for (let i=0; i<Guest_List.length; i++){

    console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')


}
//You just heard that one of your guests can't make the dinner, 
let absent_Guest :string = 'Ashna Syed' ;
//so you need to send out a new set of invitations.
let new_Guest :string = 'Javeria Shaikh' ;

Guest_List[0] = new_Guest ;

for (let i=0; i<Guest_List.length; i++){

    console.log ('Dear Ms. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThank You!\n\n')


}

console.log(`Ms ${absent_Guest} is not coming to the party,`)