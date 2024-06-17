import Contact from "./Contact";

class AddressBook {
    private contacts: Contact[];

    constructor(){
        this.contacts = [];
    }

    addContact(contact:Contact): void {
        this.contacts.push(contact);
        console.log("Contact added successfully.",contact);        
    }
    
    getContacts(): Contact[] {
        return this.contacts;
    }   
}

export default AddressBook;