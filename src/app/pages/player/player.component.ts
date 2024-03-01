import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';
import { RouterModule } from '@angular/router';
RouterModule
@Component({
    selector: 'app-player',
    standalone: true,

    imports: [RouterModule,
        CommonModule, LeftPanelComponent,
    ],
    templateUrl:'./player.component.html',
    styleUrl: './player.component.scss',

})
export class PlayerComponent { }
