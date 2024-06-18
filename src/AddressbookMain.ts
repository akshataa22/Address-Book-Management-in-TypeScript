import AddressBook from "./AddressBook";
import Contact from "./Contact";
import * as readlineSync from 'readline-sync';

class AddressBookMain {
    private addressBooks: { [key: string]: AddressBook } = {};
    private currentAddressBook: AddressBook | null = null;

    constructor() {}

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

    private createAddressBook(): void {
        const name = this.prompt("Enter the name of the Address Book you want to create: ");
        if (this.addressBooks[name]) {
            console.log(`Address Book with the name "${name}" already exists.`);
        } else {
            this.addressBooks[name] = new AddressBook();
            console.log(`Address Book "${name}" created successfully.`);
        }
    }

    private selectAddressBook(): void {
        const name = this.prompt("Enter the name of the Address Book you want to select: ");
        const addressBook = this.addressBooks[name];
        if (addressBook) {
            this.currentAddressBook = addressBook;
            console.log(`Address Book "${name}" selected.`);
        } else {
            console.log(`Address Book with the name "${name}" not found.`);
        }
    }

    private addContact(): void {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        while (true) {
            const contact = this.createContact();
            this.currentAddressBook.addContact(contact);
            console.log("Contact added successfully.");

            const addAnother = this.prompt("Do you want to add another contact? (y/n): ");
            if (addAnother.toLowerCase() !== 'y') {
                break;
            }
        }
    }

    private viewContacts(): void {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        const contacts = this.currentAddressBook.getContacts();
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
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        const firstName = this.prompt("Enter the first name of the contact to edit: ");
        const lastName = this.prompt("Enter the last name of the contact to edit: ");
        const existingContact = this.currentAddressBook.findContact(firstName, lastName);

        if (existingContact) {
            console.log("Editing Contact: ", existingContact.toString());
            const updatedContact = this.createContact();
            this.currentAddressBook.updateContact(firstName, lastName, updatedContact);
        } else {
            console.log("Contact not found.");
        }
    }

    private deleteContact(): void {
        if (!this.currentAddressBook) {
            console.log("No Address Book selected.");
            return;
        }
        const firstName = this.prompt('Enter contact first name to delete the details: ');
        const lastName = this.prompt('Enter contact last name to delete the details: ');

        const isDeleted = this.currentAddressBook.deleteContact(firstName, lastName);
        if (isDeleted) {
            console.log("Contact deleted successfully.");
        } else {
            console.log("Contact not found.");
        }
    }

    private findContactsByCity(): void {
        const cityOrState = this.prompt('Enter the city/state name: ');
        const results: Contact[] = [];
    
        Object.keys(this.addressBooks).forEach(key => {
            const addressBook = this.addressBooks[key];
            if (cityOrState) {
                results.push(...addressBook.findByCity(cityOrState));
                results.push(...addressBook.findByState(cityOrState));
            }
        });
        if (results.length === 0) {
            console.log("No contacts found.");
        } else {
            console.log("Search Results:");
            results.forEach(contact => {
                console.log(contact.toString());
            });
        }
    }

    private countOfContactsByCity(): void {
        const cityOrState = this.prompt('Enter the city/state name: ');
        let count = 0;

        Object.keys(this.addressBooks).forEach(key => {
            const addressBook = this.addressBooks[key];
                count += addressBook.countByCity(cityOrState);
                count += addressBook.countByState(cityOrState);
        })
        console.log(`Total number of contacts in city/state "${cityOrState}": ${count}`);
    }

    public run(): void {
        while (true) {
            console.log("\nAddress Book Menu:");
            console.log("1. View All Contacts");
            console.log("2. Create Address Book");
            console.log("3. Select Address Book");
            console.log("4. Add Contact");
            console.log("5. Edit Contact");
            console.log("6. Delete Contact");
            console.log("7. Search Contacts by City/State");
            console.log("8. Count of Contacts by City/State");
            console.log("9. Exit");
            const choice = this.prompt('Enter your choice: ');

            switch (choice) {
                case '1':
                    this.viewContacts();
                    break;
                case '2':
                    this.createAddressBook();
                    break;
                case '3':
                    this.selectAddressBook();
                    break;                            
                case '4':
                    this.addContact();
                    break;
                case '5':
                    this.editContact();
                    break;
                case '6':
                    this.deleteContact();
                    break;
                case '7':
                    this.findContactsByCity();
                    break;   
                case '8':
                    this.countOfContactsByCity();
                    break;     
                case '9':
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