import { Component, Input, OnInit } from '@angular/core';
import { AgeRangeTypeModel } from 'src/app/enums/age.range.enum';
import { AnimalView } from 'src/app/models/animal.view';
import { AnimalViewOnly } from 'src/app/models/animal.view.only';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  private _model: AnimalView;
  public _modelView: AnimalViewOnly | null;
  public isLoved: boolean = false;

  @Input() public set animal(value: AnimalView) {
    this._model = value;
    if (value != null) {
      this._modelView=AnimalViewOnly.FromModel(this._model);
    }
}
public get animal(): AnimalView {
    return this._model;
}

  constructor(private _router: Router) { }

 public changeLove(){
   this.isLoved=!this.isLoved;
 }

  ngOnInit(): void {
    
  }

  onCardSelect(animal: AnimalViewOnly){
    this._router.navigate(['/cards',animal.id],{state:animal});
  }

  



}
