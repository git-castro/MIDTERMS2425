import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ReactiveFormsModule  } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(private fb: FormBuilder, private sharedService: SharedService, private router: Router) {}

  ngOnInit(): void {
    this.registrationForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password === confirmPassword ? null : { 'passwordMismatch': true };
  }

  email: string = '';

  onSubmit(): void {
    if (this.registrationForm.valid) {
      this.sharedService.setEmail(this.email);
      console.log('Form submitted:', this.registrationForm.value);
    }
  }
  
  @ViewChild('modal') modal!: ElementRef;
  openModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.add('show');
    modalElement.style.display = 'block';
    modalElement.removeAttribute('aria-hidden');
    modalElement.setAttribute('aria-modal', 'true');
  }

  closeModal() {
    const modalElement = this.modal.nativeElement;
    modalElement.classList.remove('show');
    modalElement.style.display = 'none';
    modalElement.setAttribute('aria-hidden', 'true');
    modalElement.removeAttribute('aria-modal');
  }
}
