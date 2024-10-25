import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  hide = true;
  hideConfirmPassword = true;
  private navigationService = inject(NavigationService);
  registerForm: FormGroup;
  password = new FormControl<string>('');

  constructor() {
    this.registerForm = this.initFrom();
  }
  // Notes:
  // FormControl extends AbstractControl
  //Input Type: we can set the control type by pass the value:
    // FormControl('') => string, FormControl([]) => array, FormControl(3) => number
  //Input Type: we can make it strongly type:
    // FormControl<string>() => string, FormControl<[]>() => array, FormControl<number>() => number
  //Initial Value: to set the initial value either pass to FormControl
    // FormControl(10) => 10 is the initial value
  //Initial Value: or pass it like this
    // {value: "test", disabled: false}
  //Initial Value: we have to be care to type if strongly here too

  // Init the Control: by create a property and use it in the from group and use the [formControl] directive with the property instead of formControlName in the html

  //nonNullable: means control not accept null value and when reset reset to init value
  private initFrom() : FormGroup {
    return new FormGroup({
      userName: new FormControl({value: "test", disabled: false}),
      email: new FormControl('', {updateOn: "blur"}),
      mobileNumber: new FormControl('',{nonNullable: false}),
      password: this.password,
      confirmPassword: new FormControl(''),
    });
  }

  navigateToLogin(): void {
    this.navigationService.navigateByUrl('/account/login');
  }
}
