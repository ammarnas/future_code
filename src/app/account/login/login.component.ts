import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;
  // first way to declare object
    // loginDto = {
    //   email: "",
    //   password: ""
    // };
  // second way to declare object
    loginDto: {email: string, password: string } = {
      email: "",
      password: ""
    };

  private navigationService = inject(NavigationService);

  navigateToRegister() {
    this.navigationService.navigateByUrl('/account/register');
    }

  login(loginForm: NgForm, event: Event) {
    // loginForm.onSubmit(event);
    // console.log('LoginForm login', loginForm)
    }

  submit(loginForm: NgForm) {
    console.log('LoginForm submit', loginForm)
  }

  onPasswordChange(password: string) {
    console.log("password change", password);
  }
}
