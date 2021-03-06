import {Injectable} from '@angular/core';
import {ValidatorFn, AbstractControl} from '@angular/forms';
import {FormGroup} from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  patternValidator(): ValidatorFn {
    return (control: AbstractControl): { [p: string]: any } | null => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9]).{8,}$');
      const valid = regex.test(control.value);
      return valid ? null : {invalidPassword: true};
    };
  }
  ageRangeValidator(control: AbstractControl): { [key: string]: boolean } | null {

    if (control.value !== undefined && (isNaN(control.value) || control.value < 18 || control.value > 90)) {
      return { ageRange: true };
    }
    return null;
  }
  MatchPassword(password: string, confirmPassword: string) {
    // @ts-ignore
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        confirmPasswordControl.setErrors({passwordMismatch: true});
      } else {
        confirmPasswordControl.setErrors(null);
      }
    };
  }

}
