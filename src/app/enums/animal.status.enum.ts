import { BaseStringEnum } from "./base.string.enum";

export enum AnimalStatus {
    Lost=0,
    Found=1,
    Adopted=2,
    ForAdoption=3
}

export class AnimalStatusTypeModel extends BaseStringEnum {

    private static _animalStatusList: AnimalStatusTypeModel[] = [
        new AnimalStatusTypeModel(AnimalStatus.Lost, "Dingęs"),
        new AnimalStatusTypeModel(AnimalStatus.Found, "Rastas"),            
        new AnimalStatusTypeModel(AnimalStatus.Adopted, "Rado namus"),
        new AnimalStatusTypeModel(AnimalStatus.ForAdoption, "Dovanojamas"),            
	];

    constructor(id: AnimalStatus, title: string) {
		super(id, title);
    }

	public static get getAnimalStatusList(): AnimalStatusTypeModel[] {
        return this._animalStatusList;
    }
}