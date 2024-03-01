import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../model/service/spotifyServices/spotify.service';
import { IArtist } from '../../model/interfaces/IArtist';
import { newArtist } from '../../Common/factories/factories';

@Component({
  selector: 'app-top-artists',
  standalone: true,
  imports: [],
  templateUrl: './top-artists.component.html',
  styleUrl: './top-artists.component.scss'
})
export class TopArtistsComponent implements OnInit {
  topArtist?: IArtist = newArtist();
  constructor(private spotifyService: SpotifyService) { }
  ngOnInit(): void {
    this.searchArtist()
  }
  async searchArtist() {
    const artist = await this.spotifyService.searchTopArtist(1);
    if (!!artist) {
      this.topArtist = artist.pop();
      console.log(this.topArtist)
    }

  }
}
