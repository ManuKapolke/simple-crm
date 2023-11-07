export class User {
    firstName: string = '';
    lastName: string = '';
    birthDate: number = 0;
    street: string = '';
    zipCode: string = '';
    city: string = '';
    email: string = '';

    constructor(obj?: any) {
        if (!obj) return;
        this.firstName = obj.firstName;
        this.lastName = obj.lastName;
        this.birthDate = obj.birthDate;
        this.street = obj.street;
        this.zipCode = obj.zipCode;
        this.city = obj.city;
        this.email = obj.email;
    }

    public toJson() {
        return {
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email
        };
    }
}