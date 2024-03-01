import { Component, OnInit } from '@angular/core';
import { faSignOut } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IUsers } from '../../model/interfaces/IUsers';
import { SpotifyService } from '../../model/service/spotifyServices/spotify.service';
@Component({
  selector: 'app-user-footer',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './user-footer.component.html',
  styleUrl: './user-footer.component.scss'
})
export class UserFooterComponent implements OnInit {
  exitIcon = faSignOut;
  user?: IUsers;
  constructor(private spotifyService: SpotifyService) {



  }
  ngOnInit() {

    this.user = this.spotifyService.user;
  }
  logout() {
    this.spotifyService.logout();
  }
}
