import {CharacterItemModel} from './characteritem.model';

export interface CharactersModel {
  items : CharacterItemModel[];
  meta: object;
  links: object;
}
