import { Component, OnDestroy, OnInit, Sanitizer } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
// import { Subscription } from 'rxjs';
import { SoundService } from 'src/app/sound.service';
import { DomSanitizer } from '@angular/platform-browser';
@Component({
  selector: 'app-track-details',
  templateUrl: './track-details.component.html',
  styleUrls: ['./track-details.component.css']
})
export class TrackDetailsComponent implements OnInit {

  public item: any = [];
  id = "";
  author = "";
  songId = "";
  songName = "";
  src = "";
  srcHome = ""
  genre = "";
  description = "";
  share = "";
  comment = "";
  avatar = "";
  follower = "";

  constructor(private soundService: SoundService, private activated: ActivatedRoute, private sanitizer: Sanitizer) { };
  ngOnInit(): void {
    this.activated.paramMap.subscribe((params: ParamMap) => {
      let id = Number(params.get('id'));
      // let view = params.get('action');
      // console.log(id);
      // console.log(view)
      this.item = this.soundService.getFull();
      this.author = this.item[id - 1].author;
      this.songId = this.item[id - 1].songId;
      this.songName = this.item[id - 1].songName;
      this.src = this.item[id - 1].src;
      this.srcHome = this.item[id - 1].srcHome;
      this.genre = this.item[id - 1].genre;
      this.description = this.item[id - 1].description;
      this.share = this.item[id - 1].share;
      this.comment = this.item[id - 1].commentF;
      this.avatar = this.item[id - 1].avatar;
      this.follower = this.item[id - 1].follower;
    });
  }




}
