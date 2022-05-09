import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Observable, startWith, map } from 'rxjs';
import { CityList } from 'src/assets/data.files/city.list';
import { CardGridComponent } from '../card-grid/card-grid.component';
import { AnimalSearchParams } from '../models/animal.search.params';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  @ViewChild("cardgrid") child: CardGridComponent;
  public compo: Component;
  public postmodel: AnimalSearchParams;
  public countryList: string[] = CityList.getCityList;
  public selectedCity: string;
  options: string[] = this.countryList;
  filteredOptions: Observable<string[]>;

  type: FormGroup;
  ageRange: FormGroup;
  gender: FormGroup;
  status: FormGroup;
  pupa: any;
  myControl = new FormControl();
  
  animalFormGroup:FormGroup;

  constructor(fb: FormBuilder,private observer: BreakpointObserver, private _router: Router) {
    this.animalFormGroup = fb.group({
      dogs: false,
      cats: false,
      rodents: false,
      birds: false,
      fish: false,
      other: false,
      young: false,
      adult: false,
      senior: false,
      female: false,
      male: false,
      lost: false,
      found: false,
      forAdoption: false,
      city: ''
    });
    

    this.ageRange = fb.group({
      young: false,
      adult: false,
      senior: false,
    });

    this.gender = fb.group({
      female: false,
      male: false,
    });

    this.status = fb.group({
      lost: false,
      found: false,
      forAdoption: false,
    });

  }
  ngOnInit(): void {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
    //console.log(this.myControl.,'this.filteredOptions');
  }

  public getSelectedCity(city: any){
    this.selectedCity = city;
    
  }

  
  // public onSubmit(){
      
  // }

  ngAfterViewInit() {

    // console.log(this.child.testString, "POP");
    this.observer
      .observe(['(max-width: 800px)'])
      .subscribe((res:any) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

  }

  public filterAnimals() {
    const ff = this.compo as CardGridComponent;
    //const filterJson = this.animalFormGroup.value;
    this.animalFormGroup.controls["city"].setValue(this.selectedCity)
    this.postmodel = this.animalFormGroup.value;
    const formData = new FormData();
    //formData.append('filterJson', JSON.stringify(filterJson));
    ff.updateString(this.postmodel);
    //console.log(ff.testString, "POP");
  }

  public fromChildren(componentRef: any) {
    //componentRef.updateString("rex");
    this.compo = componentRef;
    if(window.location.pathname!="/cards"){
      this.sidenav.close();
    }
  }
  

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
