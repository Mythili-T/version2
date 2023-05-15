import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { confirmPasswordValidate } from '../confirmPassword.validator';
import { RegisterService } from '../register.service';


@Component({
  selector: 'app-Registerpage',
  templateUrl: './Registerpage.component.html',
  styleUrls: ['./Registerpage.component.css']
})
export class RegisterpageComponent implements OnInit {

  constructor(private fb: FormBuilder,private register:RegisterService) { }

  ngOnInit() {
  }
  registerForm = this.fb.group({
    namevalue: [, Validators.required],
    registernovalue: [, Validators.required],
    emailvalue: [, Validators.required],
    mobilevalue: [, Validators.required],
    passwordvalue: [, Validators.required],
    confirmpasswordvalue: [, Validators.required],
    department:['default',],
    year:['default',],


  },{
  validator: confirmPasswordValidate('passwordvalue', 'confirmpasswordvalue')
});
submitForm(){
this.register.addUser(this.registerForm.value).subscribe(data=>{
  alert("Registeration Form Submit");
  this.registerForm.reset();
})
}

}








