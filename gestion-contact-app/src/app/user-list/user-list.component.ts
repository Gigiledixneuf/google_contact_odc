import { Component, inject } from '@angular/core';
import { UserService } from '../services/user.service';
import { UserApi } from '../models/user-api';
import { NgFor } from '@angular/common';
import { UserComponent } from '../user/user.component';

@Component({
  selector: 'app-user-list',
  imports: [NgFor, UserComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  users! : UserApi[] | undefined
  service:UserService = inject(UserService)

  ngOnInit(){
    this.service.allUserApi().then((userApi:UserApi[] ) => {
    this.service.users = userApi
    this.users= this.service.users
  })
  }

}
