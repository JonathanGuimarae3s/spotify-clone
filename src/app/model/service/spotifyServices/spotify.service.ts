import { Injectable } from '@angular/core';
import { SpotifyConfiguration } from '../../../../environments/environment.development';
//libs
import Spotify from 'spotify-web-api-js';
import { IUsers } from '../../interfaces/IUsers';
import { identifierName } from '@angular/compiler';
import { SpotifyUserToUser } from '../../../Common/spotifyHelper';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {
  private spotifyApi: Spotify.SpotifyWebApiJs | null = null;
  user!: IUsers;



  constructor() {
    this.spotifyApi = new Spotify();

  }

  async initializeUser() {
    if (!!this.user) {
      return true;

    }
    const token = localStorage.getItem('token');


    if (!token) {
      return false;
    }

    try {
      this.setAcessToken(token);

      await this.getSpotifyUsers();
      return !!this.user;


    } catch (ex) {

      console.log(ex);
      return false;

    }

  }


  async getSpotifyUsers() {
    const userInfo = await this.spotifyApi?.getMe();
    this.user = SpotifyUserToUser(userInfo);
    console.log(userInfo);
  }


  getUrlLogin() {
    const authEndpoint = `${SpotifyConfiguration.authEndpoint}?`;
    const clientId = `client_id=${SpotifyConfiguration.clientId}&`;
    const redirectUrl = `redirect_uri=${SpotifyConfiguration.redirectUrl}&`;
    const scopes = `scope=${SpotifyConfiguration.scopes.join('%20')}&`
    const responseType = `response_type=token&show_dialog=true`;
    return authEndpoint + clientId + redirectUrl + scopes + responseType;

  }

  getTokenUrlCallback() {
    if (!window.location.hash) {
      return '';

    }

    const params = window.location.hash.substring(1).split('&');
    return params[0].split('=')[1];

  }

  setAcessToken(token: string | any) {

    this.spotifyApi?.setAccessToken(token);
    localStorage.setItem('token', token);
  }
}
