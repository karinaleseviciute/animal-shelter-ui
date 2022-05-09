import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, startWith, map } from 'rxjs';
import { CityList } from 'src/assets/data.files/city.list';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  //@Input() sidenav: MatSidenav;
  myControl = new FormControl();
  
  filteredOptions: Observable<string[]>;
  public countryList: string[] = CityList.getCityList;
  options: string[] = this.countryList;

  constructor(private _animalsService: AnimalsService,) { }

  ngOnInit() {
    this.getCityList();
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

  public getCityList() {
     
      //console.log('miestai', this.countryList);
  }

}
