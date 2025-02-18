import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { UserApi } from '../models/user-api';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-create-user',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './create-user.component.html',
  styleUrl: './create-user.component.css'
})
export class CreateUserComponent {

  
    service:UserService = inject (UserService)
    isOpen:boolean = false //variable pour la notification "echo"
    user!:UserApi
    
  //Creation de l'insertion
    applyForm = new FormGroup({
      fullName : new FormControl(""),
      email : new FormControl(""),
      password : new FormControl(""),
      fonction : new FormControl("utilisateur")
    })
  
    //sauver de l'insertion avec apis
    saveContactApi(){
      this.service.storeUserApi(
        this.applyForm.value.fullName??"",
        this.applyForm.value.email??"",
        this.applyForm.value.password??"",
        this.applyForm.value.fonction??"utilisateur"
      ) 
      .then((userApi:UserApi) => {
        this.user = userApi
  
      //Rajouter dans le tableau
        this.service.users.unshift(this.user)
      })
      //Notification s'affiche apres insertion
      this.isOpen = true
  
      //vider le formulaire
      this.applyForm = new FormGroup({
        fullName : new FormControl(""),
        email : new FormControl(""),
        password : new FormControl(""),
        fonction : new FormControl("utilisateur")
    
      })
    }
    //Function pour fermer la notification
    close(){
      this.isOpen = false
    }
  
  

}
