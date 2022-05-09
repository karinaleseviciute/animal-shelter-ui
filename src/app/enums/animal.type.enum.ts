import { BaseStringEnum } from "./base.string.enum";

export enum AnimalType {
    Dog = 0,
    Cat = 1,
    Bird = 2,
    Fish = 3,
    Rodent = 4,
    Other = 5
}

export class AnimalTypeTypeModel extends BaseStringEnum {

    private static _animalTypeList: AnimalTypeTypeModel[] = [
        new AnimalTypeTypeModel(AnimalType.Dog, "Šunys"),
        new AnimalTypeTypeModel(AnimalType.Cat, "Katės"),            
        new AnimalTypeTypeModel(AnimalType.Bird, "Paukščiai"),
        new AnimalTypeTypeModel(AnimalType.Fish, "Žuvys"),      
        new AnimalTypeTypeModel(AnimalType.Rodent, "Griaužikai"),
        new AnimalTypeTypeModel(AnimalType.Other, "Kita"),            
	];

    constructor(id: AnimalType, title: string) {
		super(id, title);
    }

	public static get getAnimalTypeList(): AnimalTypeTypeModel[] {
        return this._animalTypeList;
    }
}