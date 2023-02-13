import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Unit } from 'src/models/unit';
import { UnitService } from '../unit.service';

@Component({
  selector: 'app-unit',
  templateUrl: './unit.component.html',
  styleUrls: ['./unit.component.css']
})
export class UnitComponent implements OnInit {

  unitForm:FormGroup;
  headList=['X','Y','Z'];
  unitList:Unit[];
  constructor(private unitService:UnitService) { }

  ngOnInit(): void {
     
    this.unitForm=new FormGroup({
      'name': new FormControl(null,Validators.required),
      'code' : new FormControl(null,Validators.required),
      'unitHead': new FormControl(null,Validators.required),
      'active' : new FormControl(false),
    })
    this.unitList=this.unitService.getUnitList();
  }
  OnSubmit(){
    console.log(this.unitForm.value);
    this.unitService.addUnit(this.unitForm.value);
  }

}
