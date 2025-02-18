import { NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { UserApi } from '../models/user-api';

@Component({
  selector: 'app-edit-user',
  imports: [NgIf, ReactiveFormsModule],
  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.css'
})
export class EditUserComponent {
  route:ActivatedRoute = inject (ActivatedRoute) //recuperation de la route 
  service:UserService = inject (UserService)
  isOpen:boolean = false
  userId:number = -1 //initialisation de l'id de l'article 
  user!: UserApi | undefined //initialisation de l'article 
  

  applyForm = new FormGroup //Form group sert à gerer le formulaire à son ensemble
  ({
    fullName : new FormControl(),
    email : new FormControl(),
    password : new FormControl()

  })
  ngOnInit(){
    this.userId = Number(this.route.snapshot.paramMap.get('id')) //recuperation de l'id par la route
    this.user = this.service.getOneUserApi(this.userId) // recupération de l'utilisateur par l'id
  
//preparation de la modification ou pres remplissage du formulaire
   this.applyForm = new FormGroup ({
    fullName : new FormControl(this.user?.fullName),
    email : new FormControl(this.user?.email),
    password : new FormControl (this.user?.password)
   })

  }


  //Modification executation avec la fonction update du service article  
  editUserApi() {
    this.service.updateUserApi(
      this.userId,
      this.applyForm.value.fullName?? "",
      this.applyForm.value.email?? "",
      this.applyForm.value.password ??""
    ).then((userApi : UserApi) => {
      const index = this.service.users.findIndex(user => user.id == userApi.id)

      this.service.users[index].fullName = this.applyForm.value.fullName
      this.service.users[index].email = this.applyForm.value.email
      this.service.users[index].password = this.applyForm.value.password
    })//recuperation des valeurs de l'insertion avec apis

    //Notification
    this.isOpen = true;
  }

  close(){
    this.isOpen = false
  }
}
