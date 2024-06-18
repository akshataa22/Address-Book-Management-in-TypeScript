"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook_1 = require("./AddressBook");
var Contact_1 = require("./Contact");
var readlineSync = require("readline-sync");
var AddressBookMain = /** @class */ (function () {
    function AddressBookMain() {
        this.addressBook = new AddressBook_1.default();
    }
    AddressBookMain.prototype.prompt = function (query) {
        return readlineSync.question(query);
    };
    AddressBookMain.prototype.createContact = function () {
        var firstName = this.prompt("Enter your first name: ");
        var lastName = this.prompt("Enter your last name: ");
        var address = this.prompt("Enter your address: ");
        var city = this.prompt("Enter your city: ");
        var state = this.prompt("Enter your state: ");
        var zip = parseInt(this.prompt("Enter your zip: "));
        var phoneNumber = parseInt(this.prompt("Enter your phone number: "));
        var email = this.prompt("Enter your email address: ");
        return new Contact_1.default(firstName, lastName, address, city, state, zip, phoneNumber, email);
    };
    AddressBookMain.prototype.addContact = function () {
        var contact = this.createContact();
        this.addressBook.addContact(contact);
        console.log("Contact added successfully.");
    };
    AddressBookMain.prototype.viewContact = function () {
        var contacts = this.addressBook.getContacts();
        if (contacts.length === 0) {
            console.log("No contacts found.");
        }
        else {
            console.log("Contact Details:");
            contacts.forEach(function (contact) {
                console.log(contact.toString());
            });
        }
    };
    AddressBookMain.prototype.editContact = function () {
        var firstName = this.prompt("Enter the first name of the contact to edit: ");
        var lastName = this.prompt("Enter the last name of the contact to edit: ");
        var existingContact = this.addressBook.findContact(firstName, lastName);
        if (existingContact) {
            console.log("Editing Contact: ", existingContact.toString());
            var updatedContact = this.createContact();
            this.addressBook.updateContact(firstName, lastName, updatedContact);
        }
        else {
            console.log("Contact not found.");
        }
    };
    AddressBookMain.prototype.run = function () {
        while (true) {
            console.log("\nAddress Book Menu:");
            console.log("1. Add Contact");
            console.log("2. Edit Contact");
            console.log("3. View All Contacts");
            console.log("4. Exit");
            var choice = this.prompt('Enter your choice: ');
            switch (choice) {
                case '1':
                    this.addContact();
                    break;
                case '2':
                    this.viewContact();
                    break;
                case '3':
                    this.editContact();
                    break;
                case '4':
                    console.log("Exiting...");
                    return;
                default:
                    console.log("Invalid choice! Please try again.");
            }
        }
    };
    return AddressBookMain;
}());
var print = new AddressBookMain();
print.run();
