"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook_1 = require("./AddressBook");
var Contact_1 = require("./Contact");
var readlineSync = require("readline-sync");
var AddressBookMain = /** @class */ (function () {
    function AddressBookMain() {
        this.addressBooks = {};
        this.currentAddressBook = null;
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
    AddressBookMain.prototype.createAddressBook = function () {
        var name = this.prompt("Enter the name of the Address Book you want to create: ");
        if (this.addressBooks[name]) {
            console.log("Address Book with the name \"".concat(name, "\" already exists."));
        }
        else {
            this.addressBooks[name] = new AddressBook_1.default();
            console.log("Address Book \"".concat(name, "\" created successfully."));
        }
    };
    AddressBookMain.prototype.selectAddressBook = function () {
        var name = this.prompt("Enter the name of the Address Book you want to select: ");
        var addressBook = this.addressBooks[name];
        if (addressBook) {
            this.currentAddressBook = addressBook;
            console.log("Address Book \"".concat(name, "\" selected."));
        }
        else {
            console.log("Address Book with the name \"".concat(name, "\" not found."));
        }
    };
    AddressBookMain.prototype.addContact = function () {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        while (true) {
            var contact = this.createContact();
            this.currentAddressBook.addContact(contact);
            console.log("Contact added successfully.");
            var addAnother = this.prompt("Do you want to add another contact? (y/n): ");
            if (addAnother.toLowerCase() !== 'y') {
                break;
            }
        }
    };
    AddressBookMain.prototype.viewContacts = function () {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        var contacts = this.currentAddressBook.getContacts();
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
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        var firstName = this.prompt("Enter the first name of the contact to edit: ");
        var lastName = this.prompt("Enter the last name of the contact to edit: ");
        var existingContact = this.currentAddressBook.findContact(firstName, lastName);
        if (existingContact) {
            console.log("Editing Contact: ", existingContact.toString());
            var updatedContact = this.createContact();
            this.currentAddressBook.updateContact(firstName, lastName, updatedContact);
        }
        else {
            console.log("Contact not found.");
        }
    };
    AddressBookMain.prototype.deleteContact = function () {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        var firstName = this.prompt('Enter contact first name to delete the details: ');
        var lastName = this.prompt('Enter contact last name to delete the details: ');
        var isDeleted = this.currentAddressBook.deleteContact(firstName, lastName);
        if (isDeleted) {
            console.log("Contact deleted successfully.");
        }
        else {
            console.log("Contact not found.");
        }
    };
    AddressBookMain.prototype.findContactsByCity = function () {
        var _this = this;
        var cityOrState = this.prompt('Enter the city/state name: ');
        var results = [];
        Object.keys(this.addressBooks).forEach(function (key) {
            var addressBook = _this.addressBooks[key];
            if (cityOrState) {
                results.push.apply(results, addressBook.findByCity(cityOrState));
                results.push.apply(results, addressBook.findByState(cityOrState));
            }
        });
        if (results.length === 0) {
            console.log("No contacts found.");
        }
        else {
            console.log("Search Results:");
            results.forEach(function (contact) {
                console.log(contact.toString());
            });
        }
    };
    AddressBookMain.prototype.sortContactsAlphabetically = function () {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        this.currentAddressBook.sortContacts();
        console.log("Contacts sorted alphabetically.");
    };
    AddressBookMain.prototype.viewAddressBooks = function () {
        console.log("Address Books:");
        for (var name_1 in this.addressBooks) {
            console.log(name_1);
        }
    };
    AddressBookMain.prototype.run = function () {
        while (true) {
            console.log("\nAddress Book Menu:");
            console.log("1. View All Contacts");
            console.log("2. Create Address Book");
            console.log("3. View Address Books");
            console.log("4. Select Address Book");
            console.log("5. Add Contact");
            console.log("6. Edit Contact");
            console.log("7. Delete Contact");
            console.log("8. Search Contacts by City/State");
            console.log("9. Number of Contacts by City/State");
            console.log("10. Sort contacts alphabetically");
            console.log("11. Exit");
            var choice = this.prompt('Enter your choice: ');
            switch (choice) {
                case '1':
                    this.viewContacts();
                    break;
                case '2':
                    this.createAddressBook();
                    break;
                case '3':
                    this.viewAddressBooks();
                    break;
                case '4':
                    this.selectAddressBook();
                    break;
                case '5':
                    this.addContact();
                    break;
                case '6':
                    this.editContact();
                    break;
                case '7':
                    this.deleteContact();
                    break;
                case '8':
                    this.findContactsByCity();
                    break;
                case '9':
                    this.findContactsByCity();
                    break;
                case '10':
                    this.sortContactsAlphabetically();
                    break;
                case '11':
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
