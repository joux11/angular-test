import { Component } from "@angular/core";


@Component({
    selector: 'app-counter',
    template: `
    <h1> Counter: {{counter}}</h1>
    <button (click)="incrementarBy(1)">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="incrementarBy(-1)">-1</button>
    `,
})
export class CounterComponent {

    public counter : number = 10;

    incrementarBy(value: number){
        this.counter += value;
    }

    reset(){
        this.counter = 10;
    }

}