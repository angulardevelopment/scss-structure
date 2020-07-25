import { Component, ViewContainerRef, ViewChild, EmbeddedViewRef, TemplateRef, HostListener} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'testingpurpose';
  // // FormGroup
  // // FormControl - single field  formControlName
  // // FormArray - multiple field  formArrayName  formGroupName
  // // setvalue sets value on form control
  // // const control = <FormArray>this.survey.get('sections');
  // //     const control = <FormArray>this.survey.get('sections').controls[j].get('questions');
  // form: FormGroup;
  // empForm:FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.empForm=this.fb.group({
  //     employees: this.fb.array([]) ,
  //   })
  //   //  this.createForm();
  //   //  this.form.valueChanges.subscribe(data => console.log(data));
  //   this.empForm.get('skills').valueChanges.subscribe(data => console.log(data, 'fvxf'))

  // }

  // createForm() {
  //   this.form = this.fb.group({
  //     purchaseprice: [''],
  //     taxes: '21',
  //     purchasepricetaxes: [''],
  //     items_value: ['no', Validators.required]

  //   })
  // }

  // calculatePurchasePriceTaxes() {
  //   console.log(this.form.value);
  //   // return this.form.value.purchasepricetaxes + (+this.form.value.taxes);
  // }


 
 

 
 
  // employees(): FormArray {
  //   return this.empForm.get("employees") as FormArray
  // }
 
 
  // newEmployee(): FormGroup {
  //   return this.fb.group({
  //     firstName: '',
  //     lastName: '',
  //     skills:this.fb.array([])
  //   })
  // }
 
  // submit(f){

  // }
  // addEmployee() {
  //   console.log("Adding a employee");
  //   this.employees().push(this.newEmployee());
  // }
 
 
  // removeEmployee(empIndex:number) {
  //   this.employees().removeAt(empIndex);
  // }
 
 
  // employeeSkills(empIndex:number) : FormArray {
  //   return this.employees().at(empIndex).get("skills") as FormArray
  // }
 
  // newSkill(): FormGroup {
  //   return this.fb.group({
  //     skill: '',
  //     exp: '',
  //     exp2:''
  //   })
  // }
 
  // addEmployeeSkill(empIndex:number) {
  //   this.employeeSkills(empIndex).push(this.newSkill());
  // }
 
  // removeEmployeeSkill(empIndex:number,skillIndex:number) {
  //   this.employeeSkills(empIndex).removeAt(skillIndex);
  // }
  //   onSubmit() {
  //     console.log(this.empForm.value);
  //   }
}
