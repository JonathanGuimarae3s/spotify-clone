import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';

@Component({
    selector: 'app-player',
    standalone: true,

    imports: [
        CommonModule, LeftPanelComponent
    ],
    template: `
    
    <app-left-panel>
    
    
    `,
    styleUrl: './player.component.scss',

})
export class PlayerComponent { }
