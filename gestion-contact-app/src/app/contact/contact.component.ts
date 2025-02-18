import { Component, inject, Input } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../services/contact.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  @Input () contact!: Contact
  service:ContactService = inject(ContactService)



  deleteContact(id:number){
    if (confirm('Voulez vous supprimer ce contact ?')) {
      this.service.destroyContactApi(id).then((contactApi) => {
        const index = this.service.contacts.findIndex(contact => contact.id == id)

        this.service.contacts.splice(index, 1)

        })
      }
   }
}
