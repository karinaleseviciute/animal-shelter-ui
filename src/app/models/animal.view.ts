import { AgeRange } from "../enums/age.range.enum";
import { AnimalGender } from "../enums/animal.gender.enum";
import { AnimalStatus } from "../enums/animal.status.enum";
import { AnimalType } from "../enums/animal.type.enum";
import { Contact } from "./contact";

export class AnimalView {

    public id: number = 0;
    public name: string = '';
    public age: AgeRange;
    public gender: AnimalGender;
    public description: string;
    public status: AnimalStatus;
    public published: Date;
    public type: AnimalType;
    public contact: Contact;
}