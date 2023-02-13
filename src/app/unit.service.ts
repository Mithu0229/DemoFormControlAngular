import { Injectable } from '@angular/core';
import { Unit } from 'src/models/unit';

@Injectable({
  providedIn: 'root'
})
export class UnitService {
unitList:Unit[]=[];
  constructor() { }

  addUnit(unit:Unit){
    this.unitList.push(unit);
  }

  getUnitList(){
    return this.unitList;
  }
}
