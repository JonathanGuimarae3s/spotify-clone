import { Component, OnInit } from '@angular/core';
import { ButtonMenuComponent } from '../button-menu/button-menu.component';
import { faGuitar, faHome, faMusic, faSearch, } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { IPlaylist } from '../../model/interfaces/IPlaylist';
import { SpotifyService } from '../../model/service/spotifyServices/spotify.service';

@Component({
  selector: 'app-left-panel',
  standalone: true,
  imports: [ButtonMenuComponent, FontAwesomeModule],
  templateUrl: './left-panel.component.html',
  styleUrl: './left-panel.component.scss'
})
export class LeftPanelComponent implements OnInit {

  playlists: IPlaylist[] = [];


  menuSelected = 'Home'
  // icons
  homeIcon = faHome;
  searchIcon = faSearch;
  artistIcon = faGuitar;
  playlistIcon = faMusic;
  constructor(private spotifyService: SpotifyService) { }
  ngOnInit():void {
    this.searchPlaylist();
  }
  clickButton(button: string) {
    this.menuSelected = button;

  }
  async searchPlaylist() {

    this.playlists = await this.spotifyService.searchPlaylistUser();

  }

}
