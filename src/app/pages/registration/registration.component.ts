import { Location } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    passwordAgain: new FormControl(''),
    name: new FormGroup({
      firstname: new FormControl(''),
      lastname: new FormControl('')
    })
  });

  constructor(private location: Location) {}

  onSubmit() {
    console.log(this.registerForm.value)
  }
  
  goBack() {
    this.location.back();
  }
}
