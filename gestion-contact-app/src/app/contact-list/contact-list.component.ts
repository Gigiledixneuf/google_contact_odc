import { Component, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { ContactComponent } from '../contact/contact.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  imports: [ContactComponent, NgFor, RouterLink],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {

  contacts!:Contact[]
  service:ContactService = inject(ContactService)

  ngOnInit(): void {
    this.service.all().then((contactApi:Contact[]) => {
      this.service.contacts = contactApi
      this.contacts = this.service.contacts
    })
  }
}
