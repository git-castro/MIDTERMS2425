import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Service } from './service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'Castro_PA';
}

export class Services {
  services: Service[] =[
    {id: 1, name: 'Oil Change', description: 'change oil', price: 150.00},
    {id: 2, name: 'Tire Replacement', description: 'palit gulong', price: 200.00},
    {id: 3, name: 'Battery Inspection', description: 'battery check', price: 250.00},
    {id: 4, name: 'Brake Check', description: 'brake check', price: 300.00},
    {id: 5, name: 'Wheel Alignment', description: 'gulong check', price: 350.00},
  ];

  selectedService: Service | null = null;

  viewServiceDetails(service: Service): any{
    this.selectedService = service;
  }
}