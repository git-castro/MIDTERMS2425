import { Component } from '@angular/core';
import { UserDetailsComponent } from '../user-details/user-details.component';

@Component({
  selector: 'app-body',
  standalone: true,
  imports: [
    UserDetailsComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
