import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  obj:string;
  jsonObj:JSON;
  playlist_names:string[] = [];
  track_names:string[] = [];

  //todo make an object to hold playlist and and array of tracks



  constructor() { }


  ngOnInit() {
   this.loadPlaylistArray();
   this.loadTrackArray();
   console.log(window.location.href);
   console.log("URL MF PARAMS: " + this.getUrlElements("code"));
   
  }


  public getUrlElements(target:string) {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(target);

  }
 



  public loadPlaylistArray(){
    console.log("from the playlist json obj:");
    for(let i = 0; i < this.test.items.length; i++) {
      console.log(this.test.items[i].name+ " " + this.test.items[i].tracks.href );
      let tmp = this.test.items[i].name;
      this.playlist_names.push(tmp);
    }

    console.log("from the playlist array:");
    for(let i in this.playlist_names) {
      console.log(this.test.items[i].name);
    }
  }
   
  
  public loadTrackArray(){
    console.log("from the tracks json obj:");
    for(let i = 0; i < this.song.limit; i++) {
      console.log(this.song.items[i].track.name);
      let tmp = this.song.items[i].track.name;
      this.track_names.push(tmp);
    }

    console.log("from the tracks array:");
  
    for(let i in this.track_names) {
       console.log("TRACK NAME: "+this.track_names[i]);
     }
  }

  test = {
    "href": "https://api.spotify.com/v1/users/jmrtn77/playlists?offset=0&limit=10",
    "items": [
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/2E98EjuI0lWbcB9BeNiQ12"
        },
        "href": "https://api.spotify.com/v1/playlists/2E98EjuI0lWbcB9BeNiQ12",
        "id": "2E98EjuI0lWbcB9BeNiQ12",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/86d7e68661e4d23921df6f921f3b34d34f54bc72",
            "width": 640
          }
        ],
        "name": "myTestPlaylist2",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "Miw5OWVjN2IwOGEyZjIyNGRjZTk0NTEyMmYzZjczN2JlMGRhOTc5Nzc0",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/2E98EjuI0lWbcB9BeNiQ12/tracks",
          "total": 17
        },
        "type": "playlist",
        "uri": "spotify:playlist:2E98EjuI0lWbcB9BeNiQ12"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/6alMpTsBKbMzrqulQrwWw5"
        },
        "href": "https://api.spotify.com/v1/playlists/6alMpTsBKbMzrqulQrwWw5",
        "id": "6alMpTsBKbMzrqulQrwWw5",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735d6fb1541aad6c364a7fc369",
            "width": 640
          }
        ],
        "name": "myTestPlaylist1",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "Miw3Y2U1YzBjYWQ5MmVlZWZkNDhmNzA4MzFmNGE1MDBhMTZmZmVhZDdk",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/6alMpTsBKbMzrqulQrwWw5/tracks",
          "total": 23
        },
        "type": "playlist",
        "uri": "spotify:playlist:6alMpTsBKbMzrqulQrwWw5"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/1TO6Is4ypY59VQ1sPHnUqq"
        },
        "href": "https://api.spotify.com/v1/playlists/1TO6Is4ypY59VQ1sPHnUqq",
        "id": "1TO6Is4ypY59VQ1sPHnUqq",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b2735590b4ee88187cb06a5b102d",
            "width": 640
          }
        ],
        "name": "Red Hot Chili Peppers - Greatest Hits [souffle]",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "Myw4NzMyMTEzMzZkNGIwYjg5OTliMDdmYjY4OGZkNjI4M2UwNDg2MTJj",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/1TO6Is4ypY59VQ1sPHnUqq/tracks",
          "total": 16
        },
        "type": "playlist",
        "uri": "spotify:playlist:1TO6Is4ypY59VQ1sPHnUqq"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/4OaD5B5dQZStmo4hLnZsCg"
        },
        "href": "https://api.spotify.com/v1/playlists/4OaD5B5dQZStmo4hLnZsCg",
        "id": "4OaD5B5dQZStmo4hLnZsCg",
        "images": [],
        "name": "hello world",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MSxlMzUyMmY3Nzc2YTg5MDQyYWExZGRiNTcxZDU4YTdhZDk0ODdjYWQ3",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/4OaD5B5dQZStmo4hLnZsCg/tracks",
          "total": 0
        },
        "type": "playlist",
        "uri": "spotify:playlist:4OaD5B5dQZStmo4hLnZsCg"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZEVXcUHFbndsqVUH"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXcUHFbndsqVUH",
        "id": "37i9dQZEVXcUHFbndsqVUH",
        "images": [
          {
            "height": 300,
            "url": "https://i.scdn.co/image/6682aad217c11156e6d8985036996f1ea7ebb518",
            "width": 300
          }
        ],
        "name": "Discover Weekly",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MjQ2NDE2NjksMDAwMDAwMDAyODRiYjhlMjk4NTMyNThjNGVmZDIyMTY3YzQ3OTVmNA==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZEVXcUHFbndsqVUH/tracks",
          "total": 30
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZEVXcUHFbndsqVUH"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/3W4FNCWeuKerqh574ZbEvs"
        },
        "href": "https://api.spotify.com/v1/playlists/3W4FNCWeuKerqh574ZbEvs",
        "id": "3W4FNCWeuKerqh574ZbEvs",
        "images": [
          {
            "height": null,
            "url": "https://pl.scdn.co/images/pl/default/5f93246efa86f3543ed28c12591122f9463a3cc5",
            "width": null
          }
        ],
        "name": "The Ultimate 60's",
        "owner": {
          "display_name": "Filtr Finland",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/sonymusicfinland"
          },
          "href": "https://api.spotify.com/v1/users/sonymusicfinland",
          "id": "sonymusicfinland",
          "type": "user",
          "uri": "spotify:user:sonymusicfinland"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MTk5LDQyZTk2YmFjYjZkOTNiMTIxN2EzODI0ZjM0NGVmMzg3OGJlNTUzMGU=",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/3W4FNCWeuKerqh574ZbEvs/tracks",
          "total": 80
        },
        "type": "playlist",
        "uri": "spotify:playlist:3W4FNCWeuKerqh574ZbEvs"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/6gL1rQaRBEuju02dlPE8Co"
        },
        "href": "https://api.spotify.com/v1/playlists/6gL1rQaRBEuju02dlPE8Co",
        "id": "6gL1rQaRBEuju02dlPE8Co",
        "images": [
          {
            "height": null,
            "url": "https://pl.scdn.co/images/pl/default/589d84abb25d354a05c2c9c7ba06c258ba87f006",
            "width": null
          }
        ],
        "name": "Breaking Bad",
        "owner": {
          "display_name": "Nicholas Walsh",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/nickwalsh113"
          },
          "href": "https://api.spotify.com/v1/users/nickwalsh113",
          "id": "nickwalsh113",
          "type": "user",
          "uri": "spotify:user:nickwalsh113"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "NzYsZmM1ODk1ZDhhMzNmZmU2YzVmNzk2OTg5Y2Y4ZjQ1ZjkzYjg1YzExNw==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/6gL1rQaRBEuju02dlPE8Co/tracks",
          "total": 106
        },
        "type": "playlist",
        "uri": "spotify:playlist:6gL1rQaRBEuju02dlPE8Co"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/3Oyfp7Nv43Przr749fCpQG"
        },
        "href": "https://api.spotify.com/v1/playlists/3Oyfp7Nv43Przr749fCpQG",
        "id": "3Oyfp7Nv43Przr749fCpQG",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/502a8ba0eb5351cb65b53d769001bd6da766346d",
            "width": 640
          }
        ],
        "name": "Off The Record Karaoke - 365 Days (In the Style of Zz Ward) [Karaoke Version]",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "Miw5Yjk5NDMwYzU2NjdjNDZkNjI1M2M5ZDNiZmI5ZGZiN2ZlNzZhYWUz",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/3Oyfp7Nv43Przr749fCpQG/tracks",
          "total": 1
        },
        "type": "playlist",
        "uri": "spotify:playlist:3Oyfp7Nv43Przr749fCpQG"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/7HZ2gYlTzk8f2GO3I5PEl8"
        },
        "href": "https://api.spotify.com/v1/playlists/7HZ2gYlTzk8f2GO3I5PEl8",
        "id": "7HZ2gYlTzk8f2GO3I5PEl8",
        "images": [
          {
            "height": 640,
            "url": "https://i.scdn.co/image/26cc23e12615784d13bcd6508fd95db25bec3c05",
            "width": 640
          }
        ],
        "name": "ZZ Ward - Til the Casket Drops",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MixhODIzYTAyNGM5N2E4OWI1YjAyZDU4N2U1MWZmZDRjYmEwNDg5YjZl",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/7HZ2gYlTzk8f2GO3I5PEl8/tracks",
          "total": 13
        },
        "type": "playlist",
        "uri": "spotify:playlist:7HZ2gYlTzk8f2GO3I5PEl8"
      },
      {
        "collaborative": false,
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/3zaLi8FIgBQywyQVGTOKto"
        },
        "href": "https://api.spotify.com/v1/playlists/3zaLi8FIgBQywyQVGTOKto",
        "id": "3zaLi8FIgBQywyQVGTOKto",
        "images": [
          {
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b2730c8ac83035e9588e8ad34b90ab67616d0000b2734ae1c4c5c45aabe565499163ab67616d0000b2734e1e57eb66ed6b41ac8badd1fd5d75466a6b0515919baf00e534c901a76d28a0",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b2730c8ac83035e9588e8ad34b90ab67616d0000b2734ae1c4c5c45aabe565499163ab67616d0000b2734e1e57eb66ed6b41ac8badd1fd5d75466a6b0515919baf00e534c901a76d28a0",
            "width": 300
          },
          {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b2730c8ac83035e9588e8ad34b90ab67616d0000b2734ae1c4c5c45aabe565499163ab67616d0000b2734e1e57eb66ed6b41ac8badd1fd5d75466a6b0515919baf00e534c901a76d28a0",
            "width": 60
          }
        ],
        "name": "Music Midtown",
        "owner": {
          "display_name": "jmrtn77",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MTg1LDkwZTliOTVjYzEzODE1MWQ0NzM3OTE5MjUyMTA4ZDE3YWY4ZDE4YmI=",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/3zaLi8FIgBQywyQVGTOKto/tracks",
          "total": 233
        },
        "type": "playlist",
        "uri": "spotify:playlist:3zaLi8FIgBQywyQVGTOKto"
      }
    ],
    "limit": 10,
    "next": "https://api.spotify.com/v1/users/jmrtn77/playlists?offset=10&limit=10",
    "offset": 0,
    "previous": null,
    "total": 28
  }

  song = {
    "href": "https://api.spotify.com/v1/playlists/6alMpTsBKbMzrqulQrwWw5/tracks?offset=0&limit=3",
    "items": [
      {
        "added_at": "2019-10-11T01:06:23Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "is_local": false,
        "primary_color": null,
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
                },
                "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
                "id": "4frXpPxQQZwbCu3eTGnZEw",
                "name": "Thundercat",
                "type": "artist",
                "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
              }
            ],
            "available_markets": [
              "CA",
              "MX",
              "US"
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4anxEzh8xEKSPXKHGWiFue"
            },
            "href": "https://api.spotify.com/v1/albums/4anxEzh8xEKSPXKHGWiFue",
            "id": "4anxEzh8xEKSPXKHGWiFue",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735d6fb1541aad6c364a7fc369",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025d6fb1541aad6c364a7fc369",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515d6fb1541aad6c364a7fc369",
                "width": 64
              }
            ],
            "name": "Drunk",
            "release_date": "2017-02-24",
            "release_date_precision": "day",
            "total_tracks": 23,
            "type": "album",
            "uri": "spotify:album:4anxEzh8xEKSPXKHGWiFue"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
              },
              "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
              "id": "4frXpPxQQZwbCu3eTGnZEw",
              "name": "Thundercat",
              "type": "artist",
              "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "disc_number": 1,
          "duration_ms": 38601,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "US25X1090533"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/3EuBW51MAKXjQcHYqgAf6W"
          },
          "href": "https://api.spotify.com/v1/tracks/3EuBW51MAKXjQcHYqgAf6W",
          "id": "3EuBW51MAKXjQcHYqgAf6W",
          "is_local": false,
          "name": "Rabbot Ho",
          "popularity": 39,
          "preview_url": "https://p.scdn.co/mp3-preview/98983b900adcb40e3eeb8061fe6f5f4d37bfda08?cid=774b29d4f13844c495f206cafdad9c86",
          "track": true,
          "track_number": 1,
          "type": "track",
          "uri": "spotify:track:3EuBW51MAKXjQcHYqgAf6W"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2019-10-11T01:06:23Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "is_local": false,
        "primary_color": null,
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
                },
                "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
                "id": "4frXpPxQQZwbCu3eTGnZEw",
                "name": "Thundercat",
                "type": "artist",
                "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
              }
            ],
            "available_markets": [
              "CA",
              "MX",
              "US"
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4anxEzh8xEKSPXKHGWiFue"
            },
            "href": "https://api.spotify.com/v1/albums/4anxEzh8xEKSPXKHGWiFue",
            "id": "4anxEzh8xEKSPXKHGWiFue",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735d6fb1541aad6c364a7fc369",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025d6fb1541aad6c364a7fc369",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515d6fb1541aad6c364a7fc369",
                "width": 64
              }
            ],
            "name": "Drunk",
            "release_date": "2017-02-24",
            "release_date_precision": "day",
            "total_tracks": 23,
            "type": "album",
            "uri": "spotify:album:4anxEzh8xEKSPXKHGWiFue"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
              },
              "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
              "id": "4frXpPxQQZwbCu3eTGnZEw",
              "name": "Thundercat",
              "type": "artist",
              "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "disc_number": 1,
          "duration_ms": 101651,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "US25X1090534"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/1sgAJRD4JX5rQOHxiESB2T"
          },
          "href": "https://api.spotify.com/v1/tracks/1sgAJRD4JX5rQOHxiESB2T",
          "id": "1sgAJRD4JX5rQOHxiESB2T",
          "is_local": false,
          "name": "Captain Stupido",
          "popularity": 42,
          "preview_url": "https://p.scdn.co/mp3-preview/81d43c8aab1afa2180d2704394439a65847c320f?cid=774b29d4f13844c495f206cafdad9c86",
          "track": true,
          "track_number": 2,
          "type": "track",
          "uri": "spotify:track:1sgAJRD4JX5rQOHxiESB2T"
        },
        "video_thumbnail": {
          "url": null
        }
      },
      {
        "added_at": "2019-10-11T01:06:23Z",
        "added_by": {
          "external_urls": {
            "spotify": "https://open.spotify.com/user/jmrtn77"
          },
          "href": "https://api.spotify.com/v1/users/jmrtn77",
          "id": "jmrtn77",
          "type": "user",
          "uri": "spotify:user:jmrtn77"
        },
        "is_local": false,
        "primary_color": null,
        "track": {
          "album": {
            "album_type": "album",
            "artists": [
              {
                "external_urls": {
                  "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
                },
                "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
                "id": "4frXpPxQQZwbCu3eTGnZEw",
                "name": "Thundercat",
                "type": "artist",
                "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
              }
            ],
            "available_markets": [
              "CA",
              "MX",
              "US"
            ],
            "external_urls": {
              "spotify": "https://open.spotify.com/album/4anxEzh8xEKSPXKHGWiFue"
            },
            "href": "https://api.spotify.com/v1/albums/4anxEzh8xEKSPXKHGWiFue",
            "id": "4anxEzh8xEKSPXKHGWiFue",
            "images": [
              {
                "height": 640,
                "url": "https://i.scdn.co/image/ab67616d0000b2735d6fb1541aad6c364a7fc369",
                "width": 640
              },
              {
                "height": 300,
                "url": "https://i.scdn.co/image/ab67616d00001e025d6fb1541aad6c364a7fc369",
                "width": 300
              },
              {
                "height": 64,
                "url": "https://i.scdn.co/image/ab67616d000048515d6fb1541aad6c364a7fc369",
                "width": 64
              }
            ],
            "name": "Drunk",
            "release_date": "2017-02-24",
            "release_date_precision": "day",
            "total_tracks": 23,
            "type": "album",
            "uri": "spotify:album:4anxEzh8xEKSPXKHGWiFue"
          },
          "artists": [
            {
              "external_urls": {
                "spotify": "https://open.spotify.com/artist/4frXpPxQQZwbCu3eTGnZEw"
              },
              "href": "https://api.spotify.com/v1/artists/4frXpPxQQZwbCu3eTGnZEw",
              "id": "4frXpPxQQZwbCu3eTGnZEw",
              "name": "Thundercat",
              "type": "artist",
              "uri": "spotify:artist:4frXpPxQQZwbCu3eTGnZEw"
            }
          ],
          "available_markets": [
            "CA",
            "MX",
            "US"
          ],
          "disc_number": 1,
          "duration_ms": 136005,
          "episode": false,
          "explicit": false,
          "external_ids": {
            "isrc": "US25X1090535"
          },
          "external_urls": {
            "spotify": "https://open.spotify.com/track/6WQzCYojwhO7KXaVobCXvN"
          },
          "href": "https://api.spotify.com/v1/tracks/6WQzCYojwhO7KXaVobCXvN",
          "id": "6WQzCYojwhO7KXaVobCXvN",
          "is_local": false,
          "name": "Uh Uh",
          "popularity": 41,
          "preview_url": "https://p.scdn.co/mp3-preview/218d3285ee61879115fcdd04d92ab9aacd499ca6?cid=774b29d4f13844c495f206cafdad9c86",
          "track": true,
          "track_number": 3,
          "type": "track",
          "uri": "spotify:track:6WQzCYojwhO7KXaVobCXvN"
        },
        "video_thumbnail": {
          "url": null
        }
      }
    ],
    "limit": 3,
    "next": "https://api.spotify.com/v1/playlists/6alMpTsBKbMzrqulQrwWw5/tracks?offset=3&limit=3",
    "offset": 0,
    "previous": null,
    "total": 23
  }
    
}