import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {CharactersModel} from '../../models/characters.model';

@Injectable({
  providedIn: 'root'
})
export class GokuService {
  myUrl = 'https://dragonball-api.com/api/characters?page=1&limit=100';

  constructor(private http: HttpClient) {  }
  getData() {

    return this.http.get<CharactersModel>(this.myUrl);
  }

  getDetailCharacter(id: string) {
    return this.http.get<any>(`https://dragonball-api.com/api/characters/${id}`);
  }

}
