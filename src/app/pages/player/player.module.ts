import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayerComponent } from './player.component';
import { RouterModule } from '@angular/router';
import { PlayerRotas } from './player.routes';
import { LeftPanelComponent } from '../../components/left-panel/left-panel.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule, PlayerComponent, RouterModule.forChild(PlayerRotas), LeftPanelComponent
  ]
})
export class PlayerModule { }
