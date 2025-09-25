import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { Router } from 'express';

@Component({
  selector: 'app-contact',
  standalone: true,
  
  imports: [FormsModule,CommonModule,],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
    // constructor(private router: Router) {}

  showForm = false;

  contact = {
    name: '',
    email: '',
    message: ''
  };

  // cus() {
  //   this.router.navigate(['dashboard']);
  // }

  toggleForm() {
    this.showForm = !this.showForm;
  }

  submitMessage() {
    const { name, email, message } = this.contact;

    if (name.trim() && email.trim() && message.trim()) {
      alert(`Thank you, ${name}, for reaching out! We'll get back to you soon.`);
      // Reset form
      this.contact = { name: '', email: '', message: '' };
      this.showForm = false;
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  }

}
