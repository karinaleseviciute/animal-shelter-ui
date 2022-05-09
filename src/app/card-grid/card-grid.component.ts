import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Animal } from '../models/animal';
import { AnimalView } from '../models/animal.view';
import { AnimalSearchParams } from '../models/animal.search.params';
import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-card-grid',
  templateUrl: './card-grid.component.html',
  styleUrls: ['./card-grid.component.scss']
})
export class CardGridComponent implements OnInit {

public animals: AnimalView[] = [];
public testString: string = "WoW";

  constructor(private _animalsService: AnimalsService,) { }

  ngOnInit(): void {
    this.getAnimals();
    
  }

  public getAnimals() {
  //   this._animalsService.getAnimals().toPromise().then((x) => {
  //     this.animals = x;
  // });
  
  this._animalsService.getAnimals().subscribe(
    res => {
      this.animals = res;
      //console.log("test", this.animals);
    },
    err => {
      alert('error');
    }
  );

  }

  public updateString(name:AnimalSearchParams){
    this._animalsService.filterAnimals(name).subscribe(res => {
      this.animals = res;
    },
    err => {
      console.log(err);
    })
  }


}
