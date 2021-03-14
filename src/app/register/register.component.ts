import {Component, OnInit} from '@angular/core';
import {Validators, FormGroup, FormBuilder, FormControl} from '@angular/forms';
import {ServicesService} from '../services.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

// @ts-ignore
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private fb: FormBuilder,
    private customValidator: ServicesService
  ) { }

  ngOnInit() {
    this.registerForm = this.fb.group({
        name: ['', Validators.required],
        password: ['', Validators.compose([Validators.required, this.customValidator.patternValidator()])],
        confirmPassword: ['', [Validators.required]],
        age: ['', Validators.compose([Validators.required, this.customValidator.ageRangeValidator])],
      },
      {
        validator: this.customValidator.MatchPassword('password', 'confirmPassword'),
      }
    );
  }

  get registerFormControl() {
    return this.registerForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.valid) {
      alert('Form Submitted! Values are in console');
      console.log(this.registerForm.value);
      this.registerForm.get('https://webhook.site/b6a51c16-5beb-42a5-86d9-55a927d24f32')
        ;
    }
  }
}

