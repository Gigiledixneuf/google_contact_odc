import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.css'
})
export class SingleComponent {
  route:ActivatedRoute = inject (ActivatedRoute)
  contact! : Contact | undefined
  service:ContactService = inject (ContactService)
  contactId = -1

  ngOnInit() {
    this.contactId = Number(this.route.snapshot.paramMap.get('id'))
    this.contact = this.service.getOne(this.contactId)
  }
}
