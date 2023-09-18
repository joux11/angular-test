import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  //styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Output()
  public onDeleteCharacters : EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList : Character[] = [{
    name : 'Trunks',
    power: 10
  }]



  onDeleteCharacter(id?: string) : void {
    //TODO: Emitir id del personaje
    this.onDeleteCharacters.emit(id);
    
  }
}
