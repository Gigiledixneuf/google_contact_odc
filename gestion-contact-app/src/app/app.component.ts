import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router'; // ici on import le composent article
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent ], // remettre ArticleListComponent si besoin // ici on import le composent article
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gestion-contact';
}
