import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
interface MyType {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  form: FormGroup;
  constructor() {}

  ngOnInit(): void {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
      ]),
      date: new FormControl('', [Validators.required]),
      adress: new FormGroup({
        country: new FormControl('pl'),
        city: new FormControl('Warszawa', Validators.required),
      }),
      skills: new FormArray([]),
    });
  }

  submit() {
    console.log('Form  ', this.form);
    const dataFormValue = { ...this.form.value };
    console.log('dataFormValue', dataFormValue);
    this.form.reset();
  }

  setCapital() {
    const cityMap: MyType = {
      pl: 'Warszawa',
      cz: 'Praha',
      lt: 'Vilus',
    };
    const cityKey = this.form.get('adress')?.get('country')?.value;
    const city: string = cityMap[cityKey];
    this.form.patchValue({
      adress: { city: city },
    });
  }
  addSkill() {
    const control = new FormControl('', Validators.required);
    console.log(control);

    (<FormArray>this.form.get('skills')).push(control);
  }
  get email() {
    return this.form.get('email');
  }
  get password() {
    return this.form.get('password');
  }
  get skill() {
    return this.form.get('skills') as FormArray;
  }
}
