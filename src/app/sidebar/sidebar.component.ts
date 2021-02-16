import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/sound.service';
import { } from '@angular/compiler'
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  public title = "Who to follow";
  listStream: any;
  constructor(private _soundService: SoundService) { }

  ngOnInit(): void {
    this.listStream = this._soundService.getSound();
  }

}
