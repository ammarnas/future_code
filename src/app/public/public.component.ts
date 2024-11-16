import { Component } from '@angular/core';
import { HeaderComponent } from "../modules/layout/header/header.component";
import { HomeComponent } from "../home/home.component";

@Component({
  selector: 'app-public',
  standalone: true,
  imports: [HeaderComponent, HomeComponent],
  templateUrl: './public.component.html',
  styles: ''
})
export class PublicComponent {

}
