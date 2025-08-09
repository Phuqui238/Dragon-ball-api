import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GokuService} from '../../services/goku/goku.service';
import {Observable, Subscription} from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {MatButton} from '@angular/material/button';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from '@angular/material/card';

@Component({
  selector: 'app-detail',
  imports: [
    AsyncPipe,
    MatButton,
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle
  ],

  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss'
})
export class DetailComponent implements OnInit {
  chacterDetail: any;
  characterDetail$!: Observable<any>;

  subscriptions: Subscription[] = [];


  constructor(private activeRoute: ActivatedRoute,
              private gokuService : GokuService
              ) {

    let {id} = this.activeRoute.snapshot.params;

    this.characterDetail$ = this.gokuService.getDetailCharacter(id)


  }

  ngOnInit(): void {
        this.subscriptions.push(
          this.characterDetail$.subscribe(character => {

            if (character.id != undefined) {
              console.log(character);
            }
          })
        )
    }


}
