"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AddressBook = /** @class */ (function () {
    function AddressBook() {
        this.contacts = [];
    }
    AddressBook.prototype.addContact = function (contact) {
        if (this.contacts.some(function (existingContact) { return existingContact.equals(contact); })) {
            console.log("Duplicate contact found. Contact not added.");
            return;
        }
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
    AddressBook.prototype.deleteContact = function (firstName, lastName) {
        var contact = this.findContact(firstName, lastName);
        if (contact) {
            var index = this.contacts.indexOf(contact);
            if (index !== -1) {
                this.contacts.splice(index, 1);
                return true;
            }
        }
        return false;
    };
    AddressBook.prototype.findByCity = function (city) {
        return this.contacts.filter(function (contact) { return contact['city'] === city; });
    };
    AddressBook.prototype.findByState = function (state) {
        return this.contacts.filter(function (contact) { return contact['state'] === state; });
    };
    return AddressBook;
}());
exports.default = AddressBook;
