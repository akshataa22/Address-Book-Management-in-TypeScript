"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Contact = /** @class */ (function () {
    function Contact(firstName, lastName, address, city, state, zip, phoneNumber, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }
    Contact.prototype.getFirstName = function () {
        return this.firstName;
    };
    Contact.prototype.getLastName = function () {
        return this.lastName;
    };
    Contact.prototype.getCity = function () {
        return this.city;
    };
    Contact.prototype.getState = function () {
        return this.state;
    };
    Contact.prototype.getZip = function () {
        return this.zip;
    };
    Contact.prototype.equals = function (contact) {
        return this.firstName === contact.firstName && this.lastName === contact.lastName;
    };
    Contact.prototype.toString = function () {
        return "First Name: ".concat(this.firstName, ", Last Name: ").concat(this.lastName, ", Address: ").concat(this.address, ", City: ").concat(this.city, ", State: ").concat(this.state, ",Zip: ").concat(this.zip, ", Phone: ").concat(this.phoneNumber, ", Email: ").concat(this.email);
    };
    return Contact;
}());
exports.default = Contact;
