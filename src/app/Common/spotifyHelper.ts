import { IUsers } from "../model/interfaces/IUsers";

export function SpotifyUserToUser(userinfo: SpotifyApi.CurrentUsersProfileResponse | any): IUsers {
    return {
        id: userinfo.id,
        name: userinfo.display_name,
        image: userinfo.images?.pop()?.url
    };
}