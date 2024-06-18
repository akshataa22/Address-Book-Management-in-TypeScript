import Contact from "./Contact";

class AddressBook {
    private contacts: Contact[];

    constructor(){
        this.contacts = [];
    }

    addContact(contact:Contact): void {
        this.contacts.push(contact);        
    }
    
    getContacts(): Contact[] {
        return this.contacts;
    }   

    findContact(firstName: string, lastName: string): Contact | undefined {
        for (let contact of this.contacts) {
            if (contact['firstName'] === firstName && contact['lastName'] === lastName) {
                return contact;
            }
        }
        return undefined;
    }

    updateContact(firstName: string , lastName: string, updatedContact: Contact): void {
        for (let i = 0; i < this.contacts.length; i++) {
            if (this.contacts[i]['firstName'] === firstName && this.contacts[i]['lastName'] === lastName) {
                this.contacts[i] = updatedContact;
                console.log("Contact updated successfully: ", updatedContact.toString());
                return;
            }
        }
        console.log("Contact not found.");
    }
    
}

export default AddressBook;