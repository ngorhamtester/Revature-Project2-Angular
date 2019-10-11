import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-song-player',
  templateUrl: './song-player.component.html',
  styleUrls: ['./song-player.component.css']
})
export class SongPlayerComponent implements OnInit {

  constructor() { }

  playlistExternalId:string;
  webPlayerIframe:HTMLIFrameElement;

  ngOnInit() {
    this.playlistExternalId = "";
    this.setPlaylistWebPlayer("4ZJXeNlI8VEZwTVNMV9YWs")
  }

  buildWebPlayer(externalId:string)
  {
    this.webPlayerIframe = document.createElement('iframe');
    this.webPlayerIframe.src="https://open.spotify.com/embed/playlist/"+externalId;
    this.webPlayerIframe.width="300";
    this.webPlayerIframe.height="80";
    this.webPlayerIframe.frameBorder = "0";
    this.webPlayerIframe.setAttribute('allowtransparency', 'true');
    this.webPlayerIframe.allow = "encrypted-media";
    document.getElementById("WebPlayerDiv").appendChild(this.webPlayerIframe);
  }
  setPlaylistWebPlayer(playlistID) // response[items][{{arrayIndex}}][id]
  {
    console.log("Enter setPlaylistWebPlayer   " + playlistID);
    if(playlistID)
    {
      console.log("Enter if playlistID " + playlistID);
      if(this.playlistExternalId)//If already set, don't remake iframe element.
      {
        console.log("Enter if playlistExternalId " + this.playlistExternalId);
        this.webPlayerIframe.src = "https://open.spotify.com/embed/playlist/" + playlistID;
      }
      else
      {
        console.log("Enter else playlistExternalId " + this.playlistExternalId);
        this.buildWebPlayer(playlistID);
      }
    }
  }
}

