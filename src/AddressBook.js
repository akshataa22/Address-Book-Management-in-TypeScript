"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
        console.log("Contact added successfully.", contact);
    };
    AddressBook.prototype.getContacts = function () {
        return this.contacts;
    };
    return AddressBook;
}());
exports.default = AddressBook;
