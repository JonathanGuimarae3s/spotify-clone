import { Router, CanActivateFn } from '@angular/router';
import { SpotifyService } from '../model/service/spotifyServices/spotify.service';
import { inject } from '@angular/core';

export const authenticatedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const spotifyService = inject(SpotifyService);
  const token = localStorage.getItem('token');
  if (!token) {
    notAuthenticated();

  }
  return new Promise(async (res) => {
    const createdUser = spotifyService.initializeUser();
    if (await createdUser) {
      res(true);
    } else {
      res(notAuthenticated());

    }
  })

  function notAuthenticated(): boolean {
    localStorage.clear();
    router.navigate(['/login']);
    return false;
  }

};
