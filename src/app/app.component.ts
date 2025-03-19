import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProximamenteComponent } from "./componentes/proximamente/proximamente.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ProximamenteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'proyecto-gomeria';
}
