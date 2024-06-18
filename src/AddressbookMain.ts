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

    private createContact(): Contact {
        const firstName = this.prompt("Enter your first name: ");
        const lastName = this.prompt("Enter your last name: ");
        const address = this.prompt("Enter your address: ");
        const city = this.prompt("Enter your city: ");
        const state = this.prompt("Enter your state: ");
        const zip = parseInt(this.prompt("Enter your zip: "));
        const phoneNumber = parseInt(this.prompt("Enter your phone number: "));
        const email = this.prompt("Enter your email address: ");
        
        return new Contact(firstName, lastName, address, city, state, zip, phoneNumber, email);
    }

    private addContact(): void {
        const contact = this.createContact();
        this.addressBook.addContact(contact);
        console.log("Contact added successfully.");
    }

    private viewContact(): void {
        const contacts = this.addressBook.getContacts();
        if (contacts.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log("Contact Details:");
            contacts.forEach(contact => {
                console.log(contact.toString());
            });
        }
    }

    private editContact(): void {
        const firstName = this.prompt("Enter the first name of the contact to edit: ")
        const lastName = this.prompt("Enter the last name of the contact to edit: ")
        const existingContact = this.addressBook.findContact(firstName,lastName)

        if(existingContact) {
            console.log("Editing Contact: ", existingContact.toString())
            const updatedContact = this.createContact();
            this.addressBook.updateContact(firstName,lastName,updatedContact)
        } else {
            console.log("Contact not found.")
        }
    }

    public run(): void {
        while (true) {
            console.log("\nAddress Book Menu:");
            console.log("1. Add Contact");
            console.log("2. Edit Contact");
            console.log("3. View All Contacts");
            console.log("4. Exit");
            const choice = this.prompt('Enter your choice: ');

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
    }
}

const print = new AddressBookMain();
print.run();