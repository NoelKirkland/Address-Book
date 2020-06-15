
// Business logic for AddressBook -------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();   // <--- This line is new!
  this.contacts.push(contact);
}

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}

AddressBook.prototype.findContact = function(id) {
  for (let i=0; i< this.contacts.length; i++) {
    if (this.contacts[i]) {     // <-- This line is new!
      if (this.contacts[i].id === id) {
        return this.contacts[i];
      }
    }                          // <-- This line is also new!
  };
  return false;

  AddressBook.prototype.deleteContact = function(id) {
    for (let i=0; i< this.contacts.length; i++) {
      if (this.contacts[i]) {     // <-- This line is new!
        if (this.contacts[i].id == id) {
          delete this.contacts[i];
          return true;
        }
      }                          // <-- This line is also new!
    };
    return false;
  }

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

// UI
let addressBook = new AddressBook();

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const firstName1 = $("input#firstName").val();
    const lastName1 = $("input#lastName").val();
    const number1 = $("input#number").val();

    let newContact = new Contact(firstName1, lastName1, number1)
    addressBook.addContact(newContact)

    
  });
});

// $("#userAddress").show();
// $("#fName").text(firstName1);
// $("#lName").text(lastName1);
// $("#pNumber").text(number1);