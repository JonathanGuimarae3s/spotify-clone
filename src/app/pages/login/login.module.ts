import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { LoginRotas } from './login.routes';
import { LoginComponent } from './login.component';

@NgModule({
  imports: [
    CommonModule, LoginComponent, RouterModule.forChild(LoginRotas)
  ]
})
export class LoginModule { }
