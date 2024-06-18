"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        this.contacts.push(contact);
    };
    AddressBook.prototype.getContacts = function () {
        return this.contacts;
    };
    AddressBook.prototype.findContact = function (firstName, lastName) {
        for (var _i = 0, _a = this.contacts; _i < _a.length; _i++) {
            var contact = _a[_i];
            if (contact['firstName'] === firstName && contact['lastName'] === lastName) {
                return contact;
            }
        }
        return undefined;
    };
    AddressBook.prototype.updateContact = function (firstName, lastName, updatedContact) {
        for (var i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]['firstName'] === firstName && this.contacts[i]['lastName'] === lastName) {
                this.contacts[i] = updatedContact;
                console.log("Contact updated successfully: ", updatedContact.toString());
                return;
            }
        }
        console.log("Contact not found.");
    };
    return AddressBook;
}());
exports.default = AddressBook;
