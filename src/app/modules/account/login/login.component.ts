import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ILoginDto } from '../models/IlooginDto';
import { FirebaseService } from '../../../shared/services/firebase.service';
import { NavigationService } from '../../../shared/services/navigation.service';
import { SharedModule } from '../../../shared/shared.module';

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
    email: "test@me.com",
    password: "test@me.com"
  };
  private navigationService = inject(NavigationService);
  authService = inject(FirebaseService);

  navigateToRegister() {
    this.navigationService.navigateByUrl('/account/register');
    }

  // login(loginForm: NgForm) {
  //   if(loginForm.valid) {
  //     const formValue = loginForm.value;
  //     this.authService.login(formValue.email, formValue.password).subscribe(res => {
  //       console.log("Login successful:", res);
  //       // this.navigationService.navigateByUrl('/register');
  //     });
  // }
//}
  login(loginForm: NgForm) {
    if(loginForm.valid) {
      const formValue = loginForm.value;
      this.authService.login(formValue.email, formValue.Password)
      .subscribe({        next: (response) => {
          this.navigationService.navigateByUrl('/secure');
        },
      });
    }
  }

    onPasswordChange(password: string) {
    console.log("password change", password);
  }
}
