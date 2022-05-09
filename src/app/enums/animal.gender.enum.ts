import { BaseStringEnum } from "./base.string.enum";

export enum AnimalGender {
    Female = 0,
    Male = 1
}

export class AnimalGenderTypeModel extends BaseStringEnum {

    private static _animalGenderList: AnimalGenderTypeModel[] = [
        new AnimalGenderTypeModel(AnimalGender.Female, "Patelė"),
        new AnimalGenderTypeModel(AnimalGender.Male, "Patinas"),            
	];

    constructor(id: AnimalGender, title: string) {
		super(id, title);
    }

	public static get getAnimalGenderList(): AnimalGenderTypeModel[] {
        return this._animalGenderList;
    }

}