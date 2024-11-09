import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';
import { NgForm } from '@angular/forms';
import { ILoginDto } from '../models/IlooginDto';
import { AuthService } from '../../shared/services/auth.service';

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
    loginDto: ILoginDto = {
      username: "kevinryan",
      password: "kev02937@"
    };

  private navigationService = inject(NavigationService);
  authService = inject(AuthService);

  navigateToRegister() {
    this.navigationService.navigateByUrl('/account/register');
    }

  login(loginForm: NgForm) {
    if(loginForm.valid) {
      const formValue = loginForm.value;
      this.authService.login(formValue.email, formValue.password).subscribe(res => {
        console.log("", res);
        // this.navigationService.navigateByUrl('/register');
      });
    }
  }

    onPasswordChange(password: string) {
    console.log("password change", password);
  }
}
