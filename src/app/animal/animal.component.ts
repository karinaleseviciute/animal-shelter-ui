import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AnimalViewOnly } from '../models/animal.view.only';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { AnimalsService } from '../services/animals.service';
import { AnimalView } from '../models/animal.view';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.scss']
})
export class AnimalComponent implements OnInit {
  public animalViewOnly: AnimalViewOnly;
  public animalViewOnlyInit: AnimalViewOnly;
  public _modelView: AnimalViewOnly | null;
  closeFiltersEvent = new EventEmitter();

  constructor(private _route: Router, private _service: AnimalsService) {}

  ngOnInit() {
    this.animalViewOnly = history.state;
    //this.updateRouteName();
    // this.setAnimalViewOnly();
  }

  // public updateRouteName(){
  //   this.closeFiltersEvent.emit("window.location.pathname");
  //   console.log(window.location.pathname, "animall");
  // }

  // public setAnimalViewOnly(){
  //   if(this.animalViewOnlyInit!=null){
  //     console.log(this.animalViewOnlyInit,'TATA');
  //     this.animalViewOnly = this.animalViewOnlyInit;
  //   }
  // }

  
}
