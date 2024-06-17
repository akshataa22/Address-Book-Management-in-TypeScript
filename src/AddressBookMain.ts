import AddressBook from "./AddressBook";
import Contact from "./Contact";
import * as readlineSync from 'readline-sync';

class AddressBookMain {
    private addressBook: AddressBook;

    constructor(){
        this.addressBook = new AddressBook();
    }

    private prompt(query: string): string {
        return readlineSync.question(query);
    }

    private createContact(): void {
        const firstName = this.prompt("Enter your first name: ");
        const lastName = this.prompt("Enter your last name: ");
        const address = this.prompt("Enter your address: ");
        const city = this.prompt("Enter your city: ");
        const state = this.prompt("Enter your state: ");
        const zip = parseInt(this.prompt("Enter your zip: "));
        const phoneNumber = parseInt(this.prompt("Enter your phone number: "));
        const email = this.prompt("Enter your email address: ");

        const contact = new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
        this.addressBook.addContact(contact);
    }

    public run(): void {
        do {
            this.createContact();
            console.log("Contacts:");
            this.addressBook.getContacts().forEach(contact => {
                console.log(contact.toString());
            });
        } while (this.prompt('Do you want to add another contact? (y/n): ').toLowerCase() === 'y');
    }
}

const print = new AddressBookMain();
print.run();