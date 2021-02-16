import { Component, OnInit, } from '@angular/core';
import { SoundService } from 'src/app/sound.service';
import { } from '@angular/compiler'
@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  listStream: any;
  constructor(private _soundService: SoundService) { }

  ngOnInit(): void {
    this.listStream = this._soundService.getSound();
  }
}
