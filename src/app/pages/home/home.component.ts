import {Component, OnDestroy, OnInit} from '@angular/core';
import {GokuService} from '../../services/goku/goku.service';
import {Observable, Subscription} from 'rxjs';
import {
  MatCard, MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle,
  MatCardTitle
} from '@angular/material/card';
import {MatButton} from '@angular/material/button';
import {CharactersModel} from '../../models/characters.model';
import {CharacterItemModel} from '../../models/characteritem.model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardImage,
    MatCardContent,
    MatCardActions,
    MatButton
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit, OnDestroy {
  myData$!: Observable<CharactersModel>
  subscriptions: Subscription[] = [];
  myCharacters: CharacterItemModel[] = [];



  constructor(private gokuService: GokuService, private router: Router) {
    this.myData$ = this.gokuService.getData()


  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }

  result = '';

  ngOnInit() {
    this.subscriptions.push(
      this.myData$.subscribe((data: CharactersModel) =>{
        if (data.items.length >0){
          this.myCharacters = data.items
          console.log(this.myCharacters)

        }else {
          this.myCharacters = []
        }
      })
    )

  }

  navigateToDetail(id: number){
    this.router.navigate (['/detail', id]).then();

  }



}
