import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderForm: FormGroup;

  
  customers=[{id:1,name:'Hamid'},{id:2, name:'Arif'}];
  items=[{id:1,name:'A item'},{id:2, name:'B item'}];
  types=[{id:1,name:'A'},{id:2, name:'B'}];
  
  constructor(private fb: FormBuilder) {
    this.orderForm = fb.group({
      orderNo:new FormControl(null),
      customerId:new FormControl(null),

      allItems: new FormArray([]),// fb.array([]),
      code:new FormControl(null),
      active:new FormControl(true)
    })
  }

  ngOnInit(): void {
  }

  addNewItem() {
    debugger
    const add = this.orderForm.get('allItems') as FormArray;
    add.push(this.fb.group({
      itemId: new FormControl(null),
      typeId: new FormControl(null),
      price: new FormControl(null)
    }))
  }

  getControls() {
    return (this.orderForm.get('allItems') as FormArray).controls;
  }
  OnSubmit()
{
  
}
}
