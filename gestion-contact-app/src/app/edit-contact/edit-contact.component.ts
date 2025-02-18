import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-edit-contact',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {
  route:ActivatedRoute = inject (ActivatedRoute) //recuperation de la route 
  service:ContactService = inject (ContactService)
  isOpen:boolean = false
  contactId:number = -1 //initialisation de l'id de l'article 
  contact!: Contact | undefined //initialisation de l'article 
  

  applyForm = new FormGroup //Form group sert à gerer le formulaire à son ensemble
  ({
    name : new FormControl(),
    lastname : new FormControl(),
    email : new FormControl(),
    numero : new FormControl(),
    anniv : new FormControl(),
    notes : new FormControl()

  })
  ngOnInit(){
    this.contactId = Number(this.route.snapshot.paramMap.get('id')) //recuperation de l'id par la route
    this.contact = this.service.getOne(this.contactId) // recupération de l'utilisateur par l'id
  
//preparation de la modification ou pres remplissage du formulaire
   this.applyForm = new FormGroup ({
    name : new FormControl(this.contact?.name),
    lastname : new FormControl(this.contact?.lastname),
    email : new FormControl (this.contact?.email),  
    numero : new FormControl(this.contact?.numero),
    anniv :  new FormControl(this.contact?.anniv),
    notes : new FormControl(this.contact?.notes)
   })

  }


  //Modification executation avec la fonction update du service article  
  editContactApi() {
    this.service.updateContactAPi(
      this.contactId,
      this.applyForm.value.name?? "",
      this.applyForm.value.lastname?? "",
      this.applyForm.value.email ??"",
      this.applyForm.value.numero??"",
      this.applyForm.value.anniv ??"",
      this.applyForm.value.notes ??""
    ).then((contactApi : Contact) => {
      const index = this.service.contacts.findIndex(contact => contact.id == contactApi.id)

      this.service.contacts[index].name = this.applyForm.value.name
      this.service.contacts[index].lastname = this.applyForm.value.lastname
      this.service.contacts[index].email = this.applyForm.value.email
      this.service.contacts[index].numero = this.applyForm.value.numero
      this.service.contacts[index].anniv = this.applyForm.value.anniv
      this.service.contacts[index].notes = this.applyForm.value.notes
    })//recuperation des valeurs de l'insertion avec apis

    //Notification
    this.isOpen = true;
  }

  close(){
    this.isOpen = false
  }
}
