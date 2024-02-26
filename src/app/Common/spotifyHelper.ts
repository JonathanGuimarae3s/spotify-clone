import { IUsers } from "../model/interfaces/IUsers";
import { IPlaylist } from "../model/interfaces/IPlaylist";

export function SpotifyUserToUser(userinfo: SpotifyApi.CurrentUsersProfileResponse | any): IUsers {
    return {
        id: userinfo.id,
        name: userinfo.display_name,
        image: userinfo.images?.pop()?.url
    };
} export function SpotifyPlaylistToPlaylist(playlist: SpotifyApi.PlaylistObjectSimplified | any): IPlaylist {
    return {
        id: playlist.id,
        name: playlist.name,
        imageUrl: playlist.images?.pop()?.url
    };
}