import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/character.interface';


@Component({
    selector: 'app-db-main-page',
    templateUrl: './main-page.components.html',
})

export class MainPageComponent{ 
    constructor(
        private dbzService : DbzService // Inyeccion de servicio
    ){}

    get characters() : Character[] {
        return [...this.dbzService.character]
    }

    onDeteleteCharacter ( id : string) : void {
        this.dbzService.deleteCharacterById(id);
    }

    onNewCharacter ( character : Character) {
        this.dbzService.addCharacter(character);
    }
}