import { AgeRangeTypeModel } from "../enums/age.range.enum";
import { AnimalGenderTypeModel } from "../enums/animal.gender.enum";
import { AnimalStatusTypeModel } from "../enums/animal.status.enum";
import { AnimalTypeTypeModel } from "../enums/animal.type.enum";
import { AnimalView } from "./animal.view";
import { Contact } from "./contact";

export class AnimalViewOnly {

    public id: number = 0;
    public name: string = '';
    public age: string;
    public gender: string;
    public description: string;
    public status: string;
    public published: Date;
    public type: string;
    public contact: Contact;

    public static FromModel(model: AnimalView) : AnimalViewOnly | null {
        if (model == null)
        return null;

        const age = AgeRangeTypeModel.getAgeRangeList.find(x=>x.id==model.age)?.title;
        const gender = AnimalGenderTypeModel.getAnimalGenderList.find(x=>x.id==model.gender)?.title;
        const status = AnimalStatusTypeModel.getAnimalStatusList.find(x=>x.id==model.status)?.title;
        const type = AnimalTypeTypeModel.getAnimalTypeList.find(x=>x.id==model.type)?.title;

    const vm = new AnimalViewOnly();
    vm.id = model.id;
    vm.name = model.name;
    vm.description = model.description;
    vm.published = model.published;
    vm.contact = model.contact;

    
    if(age!=null){
        vm.age=age;
    }
    if(gender!=null){
        vm.gender = gender;
    }
    if(status!=null){
        vm.status=status;
    }
    if(type!=null){
        vm.type = type;
    }
    
    return vm;
    }
}

