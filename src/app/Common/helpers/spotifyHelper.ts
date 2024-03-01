import { IUsers } from "../../model/interfaces/IUsers";
import { IPlaylist } from "../../model/interfaces/IPlaylist";
import { IArtist } from "../../model/interfaces/IArtist";

export function SpotifyUserToUser(userinfo: SpotifyApi.CurrentUsersProfileResponse | any): IUsers {
    return {
        id: userinfo.id,
        name: userinfo.display_name,
        image: userinfo.images?.pop()?.url
    };
}
export function SpotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified | any): IPlaylist {
    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images?.pop()?.url
    };
}
export function SpotifyArtistToArtist(spotifyArtist: SpotifyApi.ArtistObjectFull | any): IArtist {
    return {
        id: spotifyArtist.id,
        name: spotifyArtist.name,
        imageUrl: spotifyArtist.images?.pop()?.url
    };
}