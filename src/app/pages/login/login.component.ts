import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpotifyService } from '../../model/service/spotifyServices/spotify.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `

  <div class="base flex flex-center">
    
  <img src="assets/img/spotify-logo-inicio.png" alt="" />
  <button class="spotify-green" (click)="redirectToLogin()">Abrir meu Spotify</button>
</div>
`,
  styleUrl: './login.component.scss',
})
export class LoginComponent {


  constructor(private SpotifyService: SpotifyService) {
    this.verifyTokenUrlCallback();
  }
  verifyTokenUrlCallback() {
    const token = this.SpotifyService.getTokenUrlCallback();
    if (!!token) {
      console.log(token)
      this.SpotifyService.setAcessToken(token);
    }
  }


  redirectToLogin() {

    window.location.href = this.SpotifyService.getUrlLogin();

  }
}
