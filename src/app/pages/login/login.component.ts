import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpotifyService } from '../../model/service/spotifyServices/spotify.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {


  constructor(private SpotifyService: SpotifyService) { }


  redirectToLogin() {

    window.location.href = this.SpotifyService.getUrlLogin();

  }
}
