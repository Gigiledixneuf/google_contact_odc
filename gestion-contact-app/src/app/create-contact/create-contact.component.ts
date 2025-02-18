import { Component, inject } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-create-contact',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './create-contact.component.html',
  styleUrl: './create-contact.component.css'
})
export class CreateContactComponent {

  service:ContactService = inject (ContactService)
  isOpen:boolean = false //variable pour la notification "echo"
  contact!:Contact
  user_email!:string
  isConnected:boolean = false


  ngOnInit() {
    if (localStorage.getItem('token')) {
      this.isConnected = true;
      this.user_email = localStorage.getItem('email') ?? "";
  
      // Injecter l'email dans le champ `user_email` du formulaire
      this.applyForm.patchValue({
        user_email: this.user_email
      });
    }
  }
  
  // Création du formulaire avec `user_email` prérempli
  applyForm = new FormGroup({
    name: new FormControl(""),
    lastname: new FormControl(""),
    email: new FormControl(""),
    numero: new FormControl(""),
    anniv: new FormControl(""),
    notes: new FormControl(""),
    user_email: new FormControl("") // L'email sera injecté dans `ngOnInit`
  });

  //sauver de l'insertion avec apis
  saveContactApi(){
    this.service.storeContactApi(
      this.applyForm.value.name??"",
      this.applyForm.value.lastname??"",
      this.applyForm.value.email??"",
      this.applyForm.value.numero??"",
      this.applyForm.value.anniv??"",
      this.applyForm.value.notes??"",
      this.applyForm.value.user_email??""

    ) 
    .then((contactApi:Contact) => {
      this.contact = contactApi

    //Rajouter dans le tableau
      this.service.contacts.unshift(this.contact)
    })
    
    //Notification s'affiche apres insertion
    this.isOpen = true

    //vider le formulaire
    this.applyForm = new FormGroup({
      name : new FormControl(""),
      lastname : new FormControl(""),
      email : new FormControl(""),
      numero : new FormControl(""),
      anniv : new FormControl(""),
      notes : new FormControl(""),
      user_email : new FormControl("")
  
    })
  }
  //Function pour fermer la notification
  close(){
    this.isOpen = false
  }


}
