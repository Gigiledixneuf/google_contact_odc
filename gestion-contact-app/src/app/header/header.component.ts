import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, RouterOutlet],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  isConnected:boolean= false
  nom!: string
  fonction!: string
  router:Router = inject(Router)
  service:UserService= inject(UserService)

  ngOnInit(){
    if(localStorage.getItem('token')){
      this.isConnected = true
      this.nom = localStorage.getItem('nom')??""
      this.fonction = localStorage.getItem('fonction')??""
    }
  }

  deconnexion() {
    localStorage.clear();
    this.isConnected = true;
    this.router.navigate(['/']).then(() => {
        window.location.reload();
    });
  }


}
