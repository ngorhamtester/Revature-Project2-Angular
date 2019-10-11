import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/services/login.service';
import { UtilService } from 'src/app/services/util.service';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit 
{
  loggedIn:boolean;
  authorizationCode:string;
  spotifyAPIResponse:object;
  spotifyJsonResponse:any;
  apiExtension:HTMLInputElement;

  obj:string;
  jsonObj:JSON;
  playlist_names:object[] = [];
  track_names:{ 'name':string, 'id': string }[] = [];
  public song:Object;

  playlist_objects:object[] = []
  checked_values:string[]=[];

  
  constructor(private loginService:LoginService, private utilService:UtilService, private activatedRoute:ActivatedRoute, private router:Router) { }

  ngOnInit() 
  {
    //this.authorizationCode = this.loginService.getcode();
      //Check url for code from login.
    this.activatedRoute.queryParams.subscribe(params =>
    {
      //User Accepted
      if(params['code'])
      {
        this.loginService.code = params['code'];
        this.loginService.getNewToken().subscribe(responseJson => 
        {
          this.loginService.accessToken = responseJson.access_token;
          this.loginService.tokenType = responseJson.token_type;
          this.loginService.scope = responseJson.scope;
          this.loginService.expireTime = responseJson.expires_in;
          this.loginService.refreshToken = responseJson.refresh_token;
          this.router.navigate(['/dashboard']);
          // this.loadPlaylistArray();
          // this.loadTrackArray();
          this.askSpotifyLoadPlaylistArray();
          // this.askSpotifyLoadTrackArray();
          console.log(window.location.href);
          console.log("URL MF PARAMS: " + this.getUrlElements("code"));
          
        }, error => 
        {
          console.log(error.error);
          console.log(error.error.message);
          this.loginService.code = "";
          this.router.navigate(['/']);
        });
      }
      //User did Not Accept
      else if(params['error'] == 'access_denied')
      {
        console.log("User refused to let us use their acc.");
      }
    });
    if(this.authorizationCode)
    {
      console.log("got a code");
      this.loggedIn = true;
    }
    else
    {
      console.log("need a code");
      this.loggedIn = false;
    }
  }

  public getUrlElements(target:string) 
  {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(target);
  }
  //Injectable function that handles an array of playlists returned from spotify
  loadPlaylistArrayhandler = (test) =>
  {
    console.log("from the playlist json obj:");
    for(let i = 0; i < test.items.length; i++) {
      console.log(test.items[i].name+ " " + test.items[i].tracks.href );
      let tmpObj = {'name':test.items[i].name,
                    'id':test.items[i]['id'],
                    'selected': [false]}
      this.playlist_objects.push(tmpObj);
    }
    console.log("from the playlist array:");
    for(let i in this.playlist_objects) 
    {
      console.log(this.playlist_objects[i] ['name']+ ' : ' +this.playlist_objects[i]['id'] + ':' + +this.playlist_objects[i]['selected']);
    }
  }

  askSpotifyLoadPlaylistArray():void
  { 
    this.askSpotify(this.loadPlaylistArrayhandler, "/v1/me/playlists", "GET", null);
  }
  //Injectable function that handles an array of tracks.
  // loadTrackArrayhandler = (song):void =>
  // {
  //   console.log("from the tracks json obj:");
  //   for(let i = 0; i < song.limit; i++) {
  //     console.log(song.items[i].track.name);
  //     let tmp = song.items[i].track.name;
  //     this.track_names.push(tmp);
  //   }
  
  //   for(let i in this.track_names) {
  //      console.log("TRACK NAME: "+this.track_names[i]);
  //   }
  // }


  // askSpotifyLoadTrackArray():void
  // {
  //   this.askSpotify(this.loadPlaylistArrayhandler, "/v1/playlists/"+ this.playlist_objects[0]['id'] +"/tracks", "GET", null)
  // }

  populateNewPlaylist()
  {
  this.playlist_names = [];
  for(let i in this.playlist_objects) 
  {
    if(this.playlist_objects[i]['selected'] == true) 
    {
      console.log("added: "+this.playlist_objects[i]['name']);
      this.playlist_names.push(this.playlist_objects[i]['name']);
      this.askSpotifyAddTracksToList(this.playlist_objects[i]['id']);
    } 
    else
    {
    console.log("nope");      
    }
  }}


  addTracksToListHandler = (tracks) =>
  {
    for(let i = 0; i < tracks['items'].length; i++)
    {
      this.track_names.push({'name': tracks['items'][i]['track']['name'], 'id': tracks['items'][i]['track']['id']});
    }
  }
  askSpotifyAddTracksToList(playlistID:string)
  {
    this.askSpotify(this.addTracksToListHandler, "/v1/playlists/"+ playlistID +"/tracks", "GET", null)
  }

  //Injectable function that gets a playlist and eliminates the duplicates.
  // eliminateDuplicateshandler = (tracks):void =>
  // {
  //   let temparray: { 'uri': string, 'positions': number[] }[];
  //   let temp:number[];
  //   let uris:string[];
  //   let uri:string;
  //   for(let track of tracks['items'])
  //   {        
  //     let alreadyDeleted:boolean = false;
  //     uri = tracks['items'][track]['track']['uri'];
  //     for(let u of uris)
  //     {
  //       if(uri === u)
  //       {
  //         alreadyDeleted = true;
  //         break;
  //       }
  //     }
  //     if(!alreadyDeleted && track != tracks['items'].length)
  //     {
  //       for(let i = track + 1; i < tracks['items'].length; i++)
  //       {
  //         temp = [];
  //         if(tracks['items'][i]['track']['id'] === tracks['items'][track]['track']['id'])
  //         {
  //           //If there is a duplicate track, add it to the list of tracks to delete from the playlist.
  //           temp.push(i);
  //         }
  //       }
  //       if(temp.length > 0)
  //       {
  //         //Duplicates found
  //         temparray.push({'uri': uri, 'positions': temp});
  //       }
  //     }
  //   }
  //   this.askSpotify( null, "/v1/playlists/{playlist_id}/", "DELETE", {'tracks':temparray});
  // }

  // askSpotifyLoadTrackArray():void
  // { 
  //   this.askSpotify(this.loadPlaylistArrayhandler, "/v1/playlists/54TJJfZ0s48JmS5ZIUN9T5/tracks", "GET", null);
  // }


 
 
  // Function that is run on the returned object when askSpotify Hits an endpoint.
  // This function must be defined using arrow notation to avoid referencing the
  // Wrong "this" while setting your variables.
  // handleRequestObject = (responseJson:object):void =>
  // {
  //   this.spotifyJsonResponse = responseJson;
  //   let element = document.getElementById("jsonResponseContainer");
  //   element.innerHTML = "";
  //   this.utilService.DisplayJson(this.spotifyJsonResponse, element, -1);
  // }
  // // A simple function that links a button press to an API endpoint Call with
  // // a particular requestObjectHandler.
  // askSpotify1():void
  // {
  //   this.apiExtension = <HTMLInputElement>document.getElementById('dashboardAPIExtension'); 
  //   this.askSpotify(this.handleRequestObject, this.apiExtension.value, "GET", null);
  // }


  // Generalized API Endpoint function that takes a function of the form:
  //      func(responseJson:obj):void
  // that defines what to do with the JsonObject when it is returned.
  askSpotify(apiRequestOnSuccess, endpoint:string, method:string, body:object):void
  {
    //Due to the HttpRequest being asynchronous, I must pass the observable and 
    //subscribe to it in the component so that the Json object is not returned 
    //after the function exits.
    //Make First Request 
    this.loginService.getAtAPIExtension(endpoint, method, body).subscribe(responseJson => 
    {
      //ON Success
      apiRequestOnSuccess(responseJson);
    }, error => 
    {
      if(error.status == 404)
      {
        apiRequestOnSuccess({error: "Bad EndPoint."});
      }
      else
      {
        //If First attempt fails, try refresh token and try again.
        this.loginService.onFailGetAtAPIExtension(error);
        //Attempting to refresh
        this.loginService.getRefreshedToken().subscribe(responseJson => 
        {
          //Token Refreshed
          this.loginService.onSuccessGetRefreshedToken(responseJson);
          //Try API call again with refreshed token. (2nd attempt)
          this.loginService.getAtAPIExtension(endpoint, method, body).subscribe(responseJson => 
          {
            //On success of second attempt.
            apiRequestOnSuccess(responseJson);
          }, error => 
          {
            if(error.status == 404)
            {
              apiRequestOnSuccess({error: "Bad EndPoint."});
            }
            else
            {
              //Refresh Token Succeded but new Token does not work.  
                //Should never reach this point.
              console.log("Impossible For Code To Reach (Token Failed, Refresh "+
                 "token worked, new token failed) inside getAtAPIExtension");
              console.log(error.error);
              console.log(error.error.message);
              this.loginService.accessToken = "";
              this.loginService.refreshToken = "";
              this.loginService.code = "";
              this.router.navigate(['/']);
            }
          });
        },error =>
        { 
          // Refresh Token Fails
          this.loginService.onFailGetRefreshedToken(error);
          //Try and get new token and refresh token with current code
          this.loginService.getNewToken().subscribe(responseJson =>
          {
            //On success of new token/refresh token, try API call again.
            this.loginService.onSuccessGetNewToken(responseJson);
            this.loginService.getAtAPIExtension(endpoint, method, body).subscribe(responseJson => 
            {
              //On success of second attempt.
              apiRequestOnSuccess(responseJson);
            }, error => 
            {
              if(error.status == 404)
              {
                apiRequestOnSuccess({error: "Bad EndPoint."});
              }
              else
              {
                //new Token/Refresh Token Succeded but new Token does not work.  
                  //Should never reach this point.
                console.log("Impossible For Code To Reach (Token Failed, Refresh "+
                    "token worked, new token failed) inside getAtAPIExtension");
                console.log(error.error);
                console.log(error.error.message);
                this.loginService.accessToken = "";
                this.loginService.refreshToken = "";
                this.loginService.code = "";
                this.router.navigate(['/']);
              }
            });
          }, error =>
          {
          //Attempt to get new token/refresh token failed.
          this.loginService.onFailGetNewToken(error);
          });
        });
      }  
    });
  }
}
