import { BaseStringEnum } from "./base.string.enum";

export enum AgeRange {
    Puppy = 0,
    Adult = 1,
    Senior= 2
}

export class AgeRangeTypeModel extends BaseStringEnum {

    private static _ageRangeList: AgeRangeTypeModel[] = [
        new AgeRangeTypeModel(AgeRange.Puppy, "Jaunas"),
        new AgeRangeTypeModel(AgeRange.Adult, "Suaugęs"),
        new AgeRangeTypeModel(AgeRange.Senior, "Senjoras"),
        
	];

    constructor(id: AgeRange, title: string) {
		super(id, title);
    }

	public static get getAgeRangeList(): AgeRangeTypeModel[] {
        return this._ageRangeList;
    }

}

