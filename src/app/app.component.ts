import { Component } from '@angular/core';
import {HomeComponent} from './pages/home/home.component';
import {DetailComponent} from './pages/detail/detail.component';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [HomeComponent, DetailComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'goku';
}
