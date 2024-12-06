import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { Services } from '../app.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})

export class ServicesComponent {
services: any;
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
