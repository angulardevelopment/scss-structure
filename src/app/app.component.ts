import { Component, ViewContainerRef, ViewChild, EmbeddedViewRef, TemplateRef, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  // // FormGroup
  // // FormControl - single field  formControlName
  // // FormArray - multiple field  formArrayName  formGroupName




  empForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      employees: this.fb.array([]),
    });
    this.empForm.valueChanges.subscribe(data => console.log(data, 'dynamic'));
  }








  employees(): FormArray {
    return this.empForm.get('employees') as FormArray;
  }


  newEmployee(): FormGroup {
    return this.fb.group({
      firstName: '',
      lastName: '',
      skills: this.fb.array([])
    });
  }


  addEmployee() {
    console.log('Adding a employee');
    this.employees().push(this.newEmployee());
  }


  removeEmployee(empIndex: number) {
    this.employees().removeAt(empIndex);
  }


  employeeSkills(empIndex: number): FormArray {
    return this.employees().at(empIndex).get('skills') as FormArray;
  }

  newSkill(): FormGroup {
    return this.fb.group({
      skill: '',
      exp: '',
      exp2: ''
    });
  }

  addEmployeeSkill(empIndex: number) {
    this.employeeSkills(empIndex).push(this.newSkill());
  }

  removeEmployeeSkill(empIndex: number, skillIndex: number) {
    this.employeeSkills(empIndex).removeAt(skillIndex);
  }
  onSubmit() {
    console.log(this.empForm.value, 'value');
  }
}
