import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import {CharactersModel} from '../../models/characters.model';
import {GokuService} from '../../services/goku/goku.service';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';
import {AsyncPipe} from '@angular/common';
import {Router} from '@angular/router';

@Component({
  selector: 'app-cart',
  imports: [
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    AsyncPipe
  ],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
  myData$! : Observable<CharactersModel>;

  constructor(private gokuService : GokuService, private router : Router) {

    this.myData$ = this.gokuService.getData();



  }

  ngOnDestroy(): void {

  }

  ngOnInit(): void {

  }


  navigateToDetail(id: number){
    this.router.navigate(['/detail', id]).then();

  }




}
