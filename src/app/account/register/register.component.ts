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
  registerForm: FormGroup

  constructor() {
    this.registerForm = this.initFrom();
  }

  private initFrom() : FormGroup {
    return new FormGroup({
      userName: new FormControl(''),
      email: new FormControl(''),
      mobileNumber: new FormControl(''),
      password: new FormControl(''),
      confirmPassword: new FormControl(''),
    });
  }

  navigateToLogin(): void {
    this.navigationService.navigateByUrl('/account/login');
  }
}
