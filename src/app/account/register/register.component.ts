import { Component, inject, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {

  hide = true;
  hideConfirmPassword = true;
  navigationService = inject(NavigationService);
  formBuilder = inject(FormBuilder);
  registerForm: FormGroup;
  password = new FormControl<string>('');

  ngOnInit() {
    this.initFrom();
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
  private initFrom() : void {
    // using FormControl
    // this.registerForm = new FormGroup({
    //   userName: new FormControl(''),
    //   email: new FormControl(''),
    //   mobileNumber: new FormControl(''),
    //   password: this.password,
    //   confirmPassword: new FormControl(''),
    // });

    // using formBuilder
    this.registerForm = this.formBuilder.group({
      userName: '',
      email: '',
      mobileNumber: '',
      password: '',
      // password: this.password, we can use it lke this
      confirmPassword: '',
    });
  }

  navigateToLogin(): void {
    this.navigationService.navigateByUrl('/account/login');
  }
  // create reset method
  reset(): void {
    this.registerForm.reset();
  }
}
