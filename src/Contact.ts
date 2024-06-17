class Contact {
    private firstName: string;
    private lastName: string;
    private address: string;
    private city: string;
    private state: string;
    private zip: number;
    private phoneNumber: number;
    private email: string | number;

    constructor(firstName: string, lastName: string, address: string, city: string, state: string, zip: number, phoneNumber: number, email: string) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zip = zip;
        this.phoneNumber = phoneNumber;
        this.email = email;
    }

    public toString(): string {
        return `First Name: ${this.firstName}, Last Name: ${this.lastName}, Address: ${this.address}, City: ${this.city}, State: ${this.state},Zip: ${this.zip}, Phone: ${this.phoneNumber}, Email: ${this.email}`;
    }
}

export default Contact;