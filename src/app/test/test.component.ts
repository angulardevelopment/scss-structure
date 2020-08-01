import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      purchaseprice: new FormControl({ value: '', disabled: true }),
      taxes: '21',
      purchasepricetaxes: new FormControl('', Validators.required)


    });
    this.form.valueChanges.subscribe(data => console.log(data, 'simple'));

  }
  calculatePurchasePriceTaxes() {
    return this.form.value.purchasepricetaxes + (+this.form.value.taxes);
  }

  get purchasepricetaxes() { return this.form.get('purchasepricetaxes'); }

  submit(f) {
    console.log(f, 's');

  }

}
