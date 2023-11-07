export class User {
    id?: string;
    firstName: string = '';
    lastName: string = '';
    birthDate: number = 0;
    street: string = '';
    zipCode: string = '';
    city: string = '';
    email: string = '';

    constructor(obj?: any) {
        if (!obj) return;
        this.id = obj.id;
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
            // id: this.id,
            firstName: this.firstName,
            lastName: this.lastName,
            birthDate: this.birthDate,
            street: this.street,
            zipCode: this.zipCode,
            city: this.city,
            email: this.email
        };
    }

    public updateFromJson(json: any): void {
        this.id = 'id' in json ? json.id : this.id;
        this.firstName = 'firstName' in json ? json.firstName : this.firstName;
        this.lastName = 'lastName' in json ? json.lastName : this.lastName;
        this.birthDate = 'birthDate' in json ? json.birthDate : this.birthDate;
        this.street = 'street' in json ? json.street : this.street;
        this.zipCode = 'zipCode' in json ? json.zipCode : this.zipCode;
        this.city = 'city' in json ? json.city : this.city;
        this.email = 'email' in json ? json.email : this.email;
    }
}