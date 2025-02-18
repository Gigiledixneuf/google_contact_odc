import { Component, inject, Input } from '@angular/core';
import { UserApi } from '../models/user-api';
import { UserService } from '../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input() user! : UserApi
  service:UserService = inject(UserService)

  
  deleteUserApi(id:number){
    if (confirm('Voulez vous supprimer cet utilisateur ?')) {
      this.service.destroyUserApi(id).then((userId) => {
        const index = this.service.users.findIndex(user => user.id == id)

        this.service.users.splice(index, 1)
        })
      }
  }
}
