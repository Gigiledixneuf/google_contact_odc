import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserApi } from '../models/user-api';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-single',
  imports: [],
  templateUrl: './user-single.component.html',
  styleUrl: './user-single.component.css'
})
export class UserSingleComponent {
route:ActivatedRoute = inject (ActivatedRoute)
  user! : UserApi | undefined
  service:UserService = inject (UserService)
  userId = -1

  ngOnInit() {
    this.userId = Number(this.route.snapshot.paramMap.get('id'))
    this.user = this.service.getOneUserApi(this.userId)
  }
}
