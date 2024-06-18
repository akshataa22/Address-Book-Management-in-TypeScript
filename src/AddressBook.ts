import Contact from "./Contact";

class AddressBook {
    private contacts: Contact[];

    constructor(){
        this.contacts = [];
    }

    addContact(contact:Contact): void {
        if (this.contacts.some(existingContact => existingContact.equals(contact))) {
            console.log("Duplicate contact found. Contact not added.");
            return;
        }
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
    
    deleteContact(firstName: string, lastName: string): boolean {
        const contact = this.findContact(firstName, lastName);
        if (contact) {
            const index = this.contacts.indexOf(contact);
            if (index !== -1) {
                this.contacts.splice(index, 1);
                return true;
            }
        }
        return false;
    }

    findByCity(city: string):Contact[] {
        return this.contacts.filter(contact => contact['city'] === city);
    }

    findByState(state: string): Contact[] {
        return this.contacts.filter(contact => contact['state'] === state)
    }

    sortContacts(): void {
        this.contacts.sort((a, b) => {
            const nameA = `${a.getFirstName()} ${a.getLastName()}`.toLowerCase();
            const nameB = `${b.getFirstName()} ${b.getLastName()}`.toLowerCase();
            return nameA.localeCompare(nameB);
        });
    }
}

export default AddressBook;