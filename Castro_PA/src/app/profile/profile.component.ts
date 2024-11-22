import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  formData: any = {
    firstName: '',
    middleInitial: '',
    lastName: '',
    email: 'user@example.com', // Prefilled email
    mobileNumber: ''
  };

  uploadedImageUrl: string | null = null;

  prefilledEmail: string = '';
  
  constructor(private sharedService: SharedService) {}

  ngOnInit(): void {
    this.prefilledEmail = this.sharedService.getEmail();
  }

  onSubmit(form: any) {
    if (form.valid) {
      console.log('Profile Data:', form.value);
    } else {
      console.error('Form is invalid');
    }
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.uploadedImageUrl = e.target.result;
      };
      reader.readAsDataURL(file);
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
