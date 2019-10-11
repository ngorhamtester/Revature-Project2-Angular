export class Playlist{
    constructor(playlist_id:string, tracks_id:string) {
        this.playlist_id=playlist_id;
        this.tracks_id=tracks_id;
    }

    private playlist_id:string;
    private tracks_id:string; 

    public getPlaylistIds(playlist_id:string) {
        return this.playlist_id, this.tracks_id;
    }

}