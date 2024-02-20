import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';

@Component({
    selector: 'app-player',
    standalone: true,
    
    imports: [
        CommonModule,
    ],
    template: `<p>player works!</p>`,
    styleUrl: './player.component.css',
   
})
export class PlayerComponent { }
