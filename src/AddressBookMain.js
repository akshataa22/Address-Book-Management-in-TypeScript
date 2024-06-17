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
        var contact = new Contact_1.default(firstName, lastName, address, city, state, zip, phoneNumber, email);
        this.addressBook.addContact(contact);
    };
    AddressBookMain.prototype.run = function () {
        do {
            this.createContact();
            console.log("Contacts:");
            this.addressBook.getContacts().forEach(function (contact) {
                console.log(contact.toString());
            });
        } while (this.prompt('Do you want to add another contact? (y/n): ').toLowerCase() === 'y');
    };
    return AddressBookMain;
}());
var print = new AddressBookMain();
print.run();
