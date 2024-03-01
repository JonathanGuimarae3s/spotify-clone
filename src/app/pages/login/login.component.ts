import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SpotifyService } from '../../model/service/spotifyServices/spotify.service';
import { Router } from '@angular/router';

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


  constructor(

    private SpotifyService: SpotifyService,
    private router: Router) {
    this.verifyTokenUrlCallback();
  }
  verifyTokenUrlCallback() {
    const token = this.SpotifyService.getTokenUrlCallback();
    if (!!token) {
      console.log(token)
      this.SpotifyService.setAcessToken(token);
      this.router.navigate(['/player/home']);

    }
  }


  redirectToLogin() {

    window.location.href = this.SpotifyService.getUrlLogin();

  }
}
