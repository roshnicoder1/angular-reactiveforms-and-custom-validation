import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username: FormControl = new FormControl('',[this.ageRangeValidator]);
  password: FormControl = new FormControl('');

  loginForm: FormGroup = new FormGroup({
  username:this.username,
  password:this.password
});


  constructor(){
    this.loginForm.controls.username.valueChanges.subscribe(()=>{
      console.log(this.loginForm.controls.username.status);
      console.log(this.loginForm.controls.username);
    })
  }
  login(){
    // event.preventDefault();
    console.log(this.loginForm.value.username);
    // console.log(this.username);
    // console.log(this.password);
  }

  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 45)) {
        return { 'ageFilter': true };
    }
    return null;
}
}
