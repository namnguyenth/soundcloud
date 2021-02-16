import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/sound.service';
import { } from '@angular/compiler'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  listStream: any;
  listFull:any;
  constructor(private _soundService: SoundService) { }

  ngOnInit(): void {
    this.listStream = this._soundService.getSound();
    this.listFull = this._soundService.getFull(); 
  }

}
