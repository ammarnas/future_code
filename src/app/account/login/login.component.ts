import { Component, inject } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { NavigationService } from '../../shared/services/navigation.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  hide = true;

  private navigationService = inject(NavigationService);

  navigateToRegister() {
    this.navigationService.navigateByUrl('/account/register');
    }
}
