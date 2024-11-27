import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  constructor(private router: Router) {}

  navigate() {
    this.router.navigate([
      { outlets: { 
        left: ['services'], 
        right: ['service-details'] 
      }}
    ]);
  }
}
