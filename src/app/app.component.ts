import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProximamenteComponent } from "./componentes/proximamente/proximamente.component";
import { HomePageComponent } from './pages/home-page/home-page.component';
import { NavbarComponent } from './shared/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,HomePageComponent,ProximamenteComponent,NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-gomeria';
}
