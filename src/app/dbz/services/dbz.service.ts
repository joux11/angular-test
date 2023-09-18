import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid';



@Injectable({
    providedIn: 'root'
})
export class DbzService {
    constructor() { }

    public character : Character[] = [        
        {
            id : uuid(),
            name: "Krilin",
            power : 1000
        },
        {
            id : uuid(),
            name:'Goku',
            power: 9500
        },
        {
            id : uuid(),
            name : "Vegeta",
            power: 9700
        }
    ];

    addCharacter(character : Character) : void {

        const newCharacter : Character = {
            id: uuid(),
            ... character
        }        
        this.character.push(newCharacter);
    }

    // onDeleteCharacter(index : number){
    //     this.characters.splice(index,1);
    // }

    deleteCharacterById(id : string){
        this.character = this.character.filter( character => character.id !== id)
    }
    
}